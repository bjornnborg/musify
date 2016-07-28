package meli.musify.producer.controller

import meli.musify.canonic.Song

class SongRestController {

    static responseFormats = ["json", "xml"]

    def songService

    def index() {
        respond songService.all(), status: 200
    }

    def save(Song song) {
        println "Chegou no controller!"
        if (!song.hasErrors()) {
            def newSong = songService.create(song)
            respond newSong, status: 201
        } else {
            println "Deu erro!"
            println song.errors
            respond status: 422
        }
    }
}
