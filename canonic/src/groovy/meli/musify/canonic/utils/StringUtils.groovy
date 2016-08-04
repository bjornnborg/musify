package meli.musify.canonic.utils

public final class StringUtils {

    public static String removeExcessiveSpaces(String word) {
        if (!word) {
            return null
        }

        return word.trim()?.replaceAll("\\s+", " ")
    }

    public static String dashPrettyString(String word) {
        if (!word) {
            return null
        }

        return word?.trim()?.toLowerCase()?.replaceAll("\\s+", "-")
    }

    public static String noSpacesPrettyString(String word) {
        if(!word) {
            return null
        }

        return word?.trim()?.toLowerCase()?.replaceAll("\\s+", "")
    }

}