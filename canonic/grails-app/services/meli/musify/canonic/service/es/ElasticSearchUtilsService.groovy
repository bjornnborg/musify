package meli.musify.canonic.service.es

import meli.musify.canonic.es.Indexable
import org.elasticsearch.common.xcontent.XContentBuilder
import org.springframework.beans.factory.InitializingBean

import static org.elasticsearch.common.xcontent.XContentFactory.jsonBuilder

class ElasticSearchUtilsService implements InitializingBean {

    static transactional = false

    def grailsApplication
    def config

    @Override
    void afterPropertiesSet() throws Exception {
        if(!grailsApplication?.config?.es) {
            throw new RuntimeException("ElasticSearch config not found (es). Check the Config.groovy file.")
        }

        this.config = grailsApplication?.config?.es
    }

    public List<String> renderKeys() {
        if(!config?.search?.config?.renderKeys){
            throw new NullPointerException("Render keys not found in the Config.groovy file (es.search.config.renderKeys).")
        }

        return config?.search?.config?.renderKeys
    }

    public List<Map<String, String>> hosts() {
        if(!config?.hosts){
            throw new NullPointerException("Hosts key not found in the Config.groovy file (hosts).")
        }

        return config?.hosts
    }

    public String retrieveIndex(Indexable indexable) {
        if(!indexable) {
            throw new NullPointerException("Indexable must not be null.")
        }

        Map<String, Object> index = config?.types?.find{ entry -> entry.containsKey(indexable.type) }
        if(!index) {
            throw new IllegalArgumentException(String.format("Index %s not found in the Config.groovy files (es.types).", indexable.type))
        }

        return index[indexable.type]
    }

    public XContentBuilder buildJson(Indexable indexable){
        XContentBuilder jsonToIndex = jsonBuilder().startObject()
        if(!indexable) {
            return jsonToIndex.endObject()
        }

        def keys = renderKeys()

        def indexableJson = ["id":indexable.id]
        indexableJson << indexable.properties

        indexableJson.each { property ->
            if(keys.contains(property.key)){
                populateField(jsonToIndex, property.key, property.value)
            }
        }

        return jsonToIndex.endObject()
    }

    private void populateField(XContentBuilder json, String key, Object value){
        if(!json) {
            return
        }

        if(!key) {
            throw new NullPointerException("Key is required!")
        }

        if("null" != String.valueOf(value)){
            json.field(key, value)
            return
        }

        // TODO: apply treatment to embedded objects (domains).

        json.nullField(key)
    }

}