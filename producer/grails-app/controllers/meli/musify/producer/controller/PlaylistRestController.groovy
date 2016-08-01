package meli.musify.producer.controller

import meli.musify.canonic.playlist.Playlist

class PlaylistRestController {

    static responseFormats = ["json", "xml"]

    def playlistService

    def index() {
        respond playlistService.allFrom(params.login), status: 200
    }

    def save(Playlist playlist) {
        if (playlist.validate()) {
            def newPlaylist = playlistService.create(playlist)
            respond newPlaylist, status: 201
        } else {
            println playlist.getErrors()
            respond status: 422
        }
    }
}
