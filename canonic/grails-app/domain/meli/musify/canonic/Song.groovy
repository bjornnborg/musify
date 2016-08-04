package meli.musify.canonic

import meli.musify.canonic.es.Indexable

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
