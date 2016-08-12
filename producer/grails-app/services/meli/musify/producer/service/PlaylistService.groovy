package meli.musify.producer.service

import grails.transaction.Transactional
import meli.musify.canonic.playlist.Playlist

/**
 * Las listas de reproducción se escriben y se leen de MongoDB.
 * Una lista de reproducción y canciones se graban de forma anidada para facilitar la búsqueda y visualización
 */
@Transactional
class PlaylistService {

    def allFrom(loginParam) {
        Playlist.where{login =~ loginParam}.list()
    }

    /**
     * Graba una lista de reproducción completa, ya con canciones, para un usuario particular
     */
    def create(playlist) {
        playlist.save(true)
    }
}
