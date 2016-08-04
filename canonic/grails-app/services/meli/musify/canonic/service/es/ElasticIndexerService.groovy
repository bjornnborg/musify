package meli.musify.canonic.service.es;

import meli.musify.canonic.es.Indexable
import org.elasticsearch.action.index.IndexResponse
import org.elasticsearch.common.xcontent.XContentBuilder
import org.elasticsearch.index.VersionType
import org.elasticsearch.index.engine.VersionConflictEngineException

class ElasticIndexerService {

    def elasticSearchUtilsService
    def elasticConfigurationService

    def index(Indexable toIndex) {

        try{
            XContentBuilder jsonToIndex = elasticSearchUtilsService.buildJson(toIndex)

            //intentando indexar
            def esClient = elasticConfigurationService.createNodeClient(elasticSearchUtilsService.hosts()).client();
            IndexResponse esResponse = esClient.prepareIndex(elasticSearchUtilsService.retrieveIndex(toIndex), toIndex.type, "${toIndex?.id}")
                    .setSource(jsonToIndex)
                    .setVersionType(VersionType.INTERNAL)
                    .setTimestamp(new Date().getTime().toString())
                    .execute()
                    .actionGet()

            log.info("se indexo ${esResponse.id} // ${esResponse.type} // ${esResponse.index}")

            return [
                    id: esResponse.id,
                    index: esResponse.index,
                    type: esResponse.type,
                    version: esResponse.version,
            ]
        } catch (VersionConflictEngineException e) {
            log.error("error en la version del json a indexar se descarta - ${toIndex}",e)
        } catch(Exception e) {
            log.error("error al indexar: ${toIndex}",e)
            throw new Exception("error al indexar: ${toIndex}",e)
        }
    }
}