package meli.musify.producer.service

import grails.transaction.Transactional

@Transactional
class PlaylistService {

    def allFrom(loginParam) {
        Playlist.where(login =~ loginParam)
    }

    def create(playlist) {
        playlist.save(true)
    }
}
