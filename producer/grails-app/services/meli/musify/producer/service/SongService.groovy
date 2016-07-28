package meli.musify.producer.service

import grails.transaction.Transactional
import meli.musify.canonic.Song

@Transactional
class SongService {

    def create(Song song) {
        println "Chamou o seriço para criar música"
        song.save(true)
    }

    def all() {
        println "Chamou o seriço para buscar música"
        Song.list(sort: "name")
    }
}
