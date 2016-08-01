package meli.musify.producer.controller

import meli.musify.canonic.playlist.Playlist

class PlaylistRestController {

    def playlistService

    def index() {
        playlistService.allFrom(user)
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
