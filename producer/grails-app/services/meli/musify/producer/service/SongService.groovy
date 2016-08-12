package meli.musify.producer.service

import grails.transaction.Transactional
import meli.musify.canonic.Song

/**
 * Las canciones se escriben y se leen de MySQL.
 * Objetos de dominio se mantienen en una base de datos relacional.
 */
@Transactional
class SongService {

    def elasticIndexerService

    /**
     * Crear una nueva canción.
     * Los nuevos datos de música se almacena en MySQL y también indexada en elasticsearch
     */
    def create(Song song) {
        song.save(true)
        elasticIndexerService.index(song)
        song
    }

    /**
     * Devuelve todo el catálogo de música
     */
    def all() {
        Song.list(sort: "name")
    }
}
