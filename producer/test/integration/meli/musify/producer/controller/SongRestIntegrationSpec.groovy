package meli.musify.producer.controller

import grails.test.spock.IntegrationSpec
import meli.musify.canonic.Song

class SongRestIntegrationSpec extends IntegrationSpec {

    def songService

    def setup() {
    }

    def cleanup() {
    }

    void "get a list of songs as json"() {
        given: "a set of songs"
        loadSongs()

        and: "a song controller"
            def controller = new SongRestController(songService: songService)

        when: "index action is called"
            controller.index()

        then: "it returns the expected songs list as json"
            controller.response.json*.name == [
                    "A Song",
                    "New Song",
                    "The Song"
            ]

    }

    private loadSongs() {
        def songOne = new Song(name: "The Song", album: "Da Song Hits", singer: "Da Song")
        songOne.save(flush: true, failOnError: true)
        def songTwo = new Song(name: "A Song", album: "Da Song Hits", singer: "Da Song")
        songTwo.save(flush: true, failOnError: true)
        def songThree = new Song(name: "New Song", album: "Da Song Hits", singer: "Da Song")
        songThree.save(flush: true, failOnError: true)
    }

}
