package meli.musify.producer.controller

import meli.musify.canonic.playlist.Playlist
import org.springframework.http.HttpStatus

class PlaylistRestController {

    static responseFormats = ["json", "xml"]

    def playlistService

    def index() {
        respond playlistService.allFrom(params.login), status: HttpStatus.OK.value()
    }

    def save(Playlist playlist) {
        if (playlist.validate()) {
            def newPlaylist = playlistService.create(playlist)
            respond newPlaylist, status: HttpStatus.CREATED.value()
        } else {
            println playlist.getErrors()
            respond status: HttpStatus.UNPROCESSABLE_ENTITY.value()
        }
    }
}
