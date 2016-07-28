package meli.musify.canonic

class Song {

    String name
    String album
    String singer

    static constraints = {
        name nullable: false, blank: false
    }
}
