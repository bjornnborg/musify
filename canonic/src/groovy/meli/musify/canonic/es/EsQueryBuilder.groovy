package meli.musify.canonic.es

import org.elasticsearch.index.query.*

public final class EsQueryBuilder {

    private final QueryBuilder query

    private EsQueryBuilder(QueryBuilder query) {
        this.query = query
    }

    public static EsQueryBuilder bool(){
        return new EsQueryBuilder(new BoolQueryBuilder())
    }

    public EsQueryBuilder range(filter){
        RangeQueryBuilder rangeBuilder = QueryBuilders.rangeQuery("${filter.field_id}")
        rangeBuilder.from(filter.value[0])
                .to(filter.value[1])
                .includeLower(true)
                .includeUpper(true)

        query.must(rangeBuilder)

        return this
    }

    public EsQueryBuilder lt(filter){
        RangeQueryBuilder rangeBuilder = QueryBuilders.rangeQuery("${filter.field_id}")
        rangeBuilder.lt(filter.value[0])

        query.must(rangeBuilder)

        return this
    }

    public EsQueryBuilder lte(filter){
        RangeQueryBuilder rangeBuilder = QueryBuilders.rangeQuery("${filter.field_id}")
        rangeBuilder.lte(filter.value[0])
        query.must(rangeBuilder)

        return this
    }

    public EsQueryBuilder gt(filter){
        RangeQueryBuilder rangeBuilder = QueryBuilders.rangeQuery("${filter.field_id}")
        rangeBuilder.gt(filter.value[0])
        query.must(rangeBuilder)

        return this
    }

    public EsQueryBuilder gte(filter){
        RangeQueryBuilder rangeBuilder = QueryBuilders.rangeQuery("${filter.field_id}")
        rangeBuilder.gte(filter.value[0])

        query.must(rangeBuilder)

        return this
    }

    public EsQueryBuilder filter(filter){
        if (!filter.value[0] || filter.value[0]==null || filter.value[0]=="null" || "${filter.value[0]}".toLowerCase()=="empty") {
            ExistsQueryBuilder eBuilder= new ExistsQueryBuilder("${filter.field_id}")
            query.mustNot(eBuilder)

            return this
        }

        TermsQueryBuilder termsBuilder = new TermsQueryBuilder("${filter.field_id}",filter.value)
        query.filter(termsBuilder)

        return this
    }

    public EsQueryBuilder neg(filter){
        if (!filter.value[0] || filter.value[0]==null || filter.value[0]=="null" || "${filter.value[0]}".toLowerCase()=="empty") {
            ExistsQueryBuilder mBuilder=new ExistsQueryBuilder ("${filter.field_id}")
            query.mustNot(mBuilder)

            return this
        }

        TermsQueryBuilder termsBuilder = new TermsQueryBuilder("${filter.field_id}",filter.value)
        query.mustNot(termsBuilder)

        return this
    }

    public QueryBuilder build(){
        return query
    }

}