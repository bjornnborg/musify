package meli.musify.producer.service

import grails.transaction.Transactional
import meli.musify.canonic.playlist.Playlist

@Transactional
class PlaylistService {

    def allFrom(loginParam) {
        Playlist.where{login =~ loginParam}.list()
    }

    def create(playlist) {
        playlist.save(true)
    }
}
