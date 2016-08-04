package meli.musify.producer.controller

import grails.converters.JSON
import meli.musify.canonic.Song
import org.springframework.http.HttpStatus

class SongRestController {

    static responseFormats = ["json", "xml"]

    def songService
    def elasticSearchService

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

    def search() {

        params["index"] = "songs"
        params["type"] = "song"

        def found = elasticSearchService.search(params)

        if(!found || !found.results) {
            render status: HttpStatus.NOT_FOUND.value()
        } else {
            render(["response": found, "status": response.status] as JSON)
        }
    }
}
