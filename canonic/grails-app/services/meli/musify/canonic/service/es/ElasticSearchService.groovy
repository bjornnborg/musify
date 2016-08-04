package meli.musify.canonic.service.es

import meli.musify.canonic.es.EsQueryBuilder
import org.elasticsearch.action.search.SearchRequestBuilder
import org.elasticsearch.action.search.SearchResponse
import org.elasticsearch.index.query.ConstantScoreQueryBuilder
import org.elasticsearch.index.query.QueryBuilder
import org.elasticsearch.index.query.QueryBuilders
import org.joda.time.format.DateTimeFormat
import org.joda.time.format.DateTimeFormatter
import org.joda.time.format.ISODateTimeFormat
import org.springframework.beans.factory.InitializingBean

import java.text.Normalizer

class ElasticSearchService implements InitializingBean {

    def config = null

    def elasticConfigurationService
    def grailsApplication

    @Override
    void afterPropertiesSet() throws Exception {
        if (!grailsApplication?.config?.es) {
            throw new RuntimeException("Elastic Search configuration not found on Config.groovy (es)")
        }

        config = grailsApplication?.config?.es
    }

    def search(parameters) {

        log.info("Search - Filtros: ${parameters}")

        def index = config?.indexes?.find { entry -> entry["name"] == parameters["index"] }
        if (!index) {
            return Collections.emptyMap()
        }

        def indexName = index["name"]
        def indexType = index["types"].find { value -> value == parameters["type"] }

        if (!indexType) {
            throw new Exception("Index type ${parameters['type']} is not valid!")
        }

        /*Armo el builder para la busqueda*/
        EsQueryBuilder builder = EsQueryBuilder.bool()

        def filters = getSearchFilters(parameters)

        getQuery(filters.filters, builder)

        QueryBuilder andFiltersBuilder = builder.build()
        ConstantScoreQueryBuilder query = QueryBuilders.constantScoreQuery(andFiltersBuilder)

        def esClient = elasticConfigurationService.createNodeClient(config?.hosts).client();

        /*Settings ordenamiento y busqueda*/
        SearchRequestBuilder requestBuilder = esClient.prepareSearch(indexName).setTypes(indexType)

        requestBuilder.setQuery(query)
        requestBuilder.setFrom(filters.configParams.offset)
        requestBuilder.setSize(filters.configParams.limit)

        log.info("Search - Query: ${requestBuilder.toString()}")

        if (ElasticSearchUtils.getSafeValue(parameters.user_id)) {
            requestBuilder.setRouting(parameters["user_id"])
        }

        SearchResponse esResponse = requestBuilder.execute().actionGet()

        log.info("Search - Se encontraron ${esResponse.hits.getTotalHits()} resultados")

        /*formateo de la salida*/
        def renderFields = filters.configParams.renderFields ?: config?.renderKeys
        def data = esResponse.hits.getHits().collect {
            it.source.subMap(filters.configParams.renderFields)
        }

        def paging = [
                "offset": filters.configParams.offset,
                "limit" : filters.configParams.limit,
                "total" : esResponse.hits.getTotalHits()
        ]

        return ["paging": paging, "results": data]
    }

/*
 * Parsea los parametros de la url, los valida. Y los devuelve en 3.
 *  Lista filters, Map configParams y Map unknownParams
 */

    def getSearchFilters(params) {
        def filters = [] // [field_id: '', operator: '', value: '']
        def configParams = [:]
        def unknownParams = [:]// field: value

        def operatorTranslation = config?.operatorTranslation
        def searchFilterKeys = config?.search?.config?.filterKeys
        def renderKeys = config?.search?.config?.renderKeys
        def keysConfig = config?.search?.config?.fields
        def asciifoldingKey = config?.search?.config?.asciifoldingKey

        for (param in params) {
            /*
                Extraemos el param y operador usando una regex.
                Una regex que tiene como primer palabra el parametro.
                Seguido de caracteres a-z entre parentesis rectos opcionales.
            */

            def field_id
            def operator

            def paramIsValid = searchFilterKeys.findIndexOf {
                def parseRegex = /^(${it})(\[[a-z]+\])?$/
                def matcher = param.key =~ parseRegex
                def matches = matcher.matches()

                if (matches) {
                    field_id = matcher[0][1]
                    operator = matcher[0][2] ? matcher[0][2].substring(1, matcher[0][2].size() - 1) : null
                    // Le saco los parentesis rectos ('[', ']')
                }
                return matches
            } != -1

            // Si el parametro se extrae correctamente. Entonces lo valido. Junto al operador.
            if (paramIsValid) {
                if (operator == null) {
                    operator = 'eq'
                }
                def operator_id = operatorTranslation[operator]

                def values = param.value?.toLowerCase()

                if (asciifoldingKey.contains(field_id)) {
                    System.out.println("values antes URLDecoder: ${values}")

                    values = java.net.URLDecoder.decode(values, "UTF-8")

                    //System.out.println("values luego URLDecoder: ${values}")

                    values = Normalizer.normalize(values, Normalizer.Form.NFD);
                    values = values.replaceAll("[\\p{InCombiningDiacriticalMarks}]", "");

                    //System.out.println("values luego normalize: ${values}")

                    values = values.replaceAll("[^\\p{ASCII}]", "")
                    //System.out.println("values luego ASCII: ${values}")
                }

                filters.add([field_id: field_id, operator: operator_id, value: StringUtils.removeExcessiveSpaces(values)])

            } else if (param.key in ["offset", "limit"]) {

                try {
                    configParams."${param.key}" = param.value.toInteger()
                } catch (Exception) {
                    throw new Exception("Invalid type for parameter ${param.key}.")
                }

            } else if (param.key == "fields") {

                def listOfFields = param.value.split(",").collect {
                    if (!(it in renderKeys)) {
                        throw new Exception("Invalid key ${it} in `fields` parameter.")
                    }
                    return it
                }
                configParams.renderFields = listOfFields;

            } else {

                unknownParams."${param.key}" = param.value
            }
        }

        /*Valido filtros*/
        try {
            checkFilters(filters, keysConfig)
        } catch (Exception e) {
            throw new Exception("Field/Operators are invalid: ${e.getMessage()}")
        }

        /*Verifico paginado*/
        if (!configParams.offset) {
            configParams.offset = 0
        }
        if (!configParams.limit) {
            configParams.limit = config?.search?.config?.defaultLimit
        }

        /*Verifico fields de renderizacion*/
        configParams.renderFields = (!params.fields || !configParams.renderFields) ? renderKeys : configParams.renderFields

        /*Response*/
        return [filters: filters, configParams: configParams, unknownParams: unknownParams]
    }

    // TODO: EXPORT THIS TO A FILTER TREATMENT CLASS
    def checkFilters(filters, fieldsConfig) {

        DateTimeFormatter dtf = DateTimeFormat.forPattern("yyyy-MM-dd");
        filters.each { filter ->

            //campos obligatorios
            if (!filter.field_id || !filter.operator) {
                throw new Exception("The filter is incorrect")
            }

            filter.operator = filter.operator.toUpperCase()

            //operador permitido
            def check = fieldsConfig.get(filter.field_id)
            if (!check.operators.contains(filter.operator)) {
                throw new Exception("Operator not allowed for field ${filter.field_id}")
            }

            //collecciono valores
            def values = []
            switch (filter.operator) {
                case "RANGE":
                    def v = filter.value
                    values = v.split(":")
                    if (values.size() != 2) {
                        throw new Exception("RANGE value incorrect (min:max).")
                    }
                    break
                case "LIST":
                    def v = filter.value
                    values = v.split(",")
                    if (values.size() < 2) {
                        throw new Exception("LIST value incorrect (value,value,...,value).")
                    }
                    break
                default:
                    values.add(filter.value)
            }

            //check tipo
            values.each { value ->
                switch (check.type) {
                    case "BOOLEAN":
                        if (!["TRUE", "FALSE"].contains(value.toUpperCase())) {
                            throw new Exception("VALUE incorrect for type BOOLEAN.")
                        }
                        break
                    case "INTEGER":
                        try {
                            def v = new Integer(value)
                        } catch (Exception e) {
                            throw new Exception("VALUE incorrect for type INTEGER.")
                        }
                        break
                    case "LONG":
                        try {
                            def v = new Long(value)
                        } catch (Exception e) {
                            throw new Exception("VALUE incorrect for type LONG.")
                        }
                        break
                    case "DOUBLE":
                        try {
                            def v = new Double(value)
                        } catch (Exception e) {
                            throw new Exception("VALUE incorrect for type DOUBLE.")
                        }
                        break
                    case "DATE":
                        try {
                            def v = ISODateTimeFormat.dateTimeParser().parseDateTime(value).toDate()
                        } catch (Exception e) {
                            try {
                                def v = dtf.parseDateTime(value).toDate()
                            } catch (Exception ex) {
                                throw new Exception("VALUE incorrect for type DATE.")
                            }
                        }
                        break
                }
            }

            filter.value = values
        }
    }

    // TODO: EXPORT THIS TO THE ESQUERYBUILDER
    def getQuery(filters, esQueryBuilder) {

        filters.each { filter ->

            switch (filter.operator) {
                case "RANGE":
                    esQueryBuilder.range(filter)
                    break
                case "<>":
                    esQueryBuilder.neg(filter)
                    break
                case "<":
                    esQueryBuilder.lt(filter)
                    break
                case "<=":
                    esQueryBuilder.lte(filter)
                    break
                case ">":
                    esQueryBuilder.gt(filter)
                    break
                case ">=":
                    esQueryBuilder.gte(filter)
                    break
                case "LIST":
                case "=":
                default:
                    esQueryBuilder.filter(filter)
            }

        }

    }

}