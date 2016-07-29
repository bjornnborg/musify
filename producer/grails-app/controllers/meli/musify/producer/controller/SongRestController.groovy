package meli.musify.producer.controller

import meli.musify.canonic.Song

class SongRestController {

    static responseFormats = ["json", "xml"]

    def songService

    def index() {
        respond songService.all(), status: 200
    }

    def save(Song song) {
        if (!song.hasErrors()) {
            def newSong = songService.create(song)
            respond newSong, status: 201
        } else {
            respond status: 422
        }
    }
}
