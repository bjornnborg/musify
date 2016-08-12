package meli.musify.canonic

import meli.musify.canonic.es.Indexable

/**
 * Es una canción disponible en el catálogo de la compañia Musify Inc.
 */
class Song implements Indexable {

    String name
    String album
    String singer

    static constraints = {
        name nullable: false, blank: false
    }

    @Override
    String getType() {
        return "song"
    }
}
