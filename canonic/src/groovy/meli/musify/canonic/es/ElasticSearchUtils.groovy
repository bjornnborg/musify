package meli.musify.canonic.es

public final class ElasticSearchUtils {

    private ElasticSearchUtils(){ }

    public static final Object getSafeValue(Object unknownValue) {
        String stringValue = String.valueOf(unknownValue)
        if(!stringValue || stringValue.equalsIgnoreCase("null") || stringValue == "{}") {
            return null
        }

        return unknownValue
    }

}