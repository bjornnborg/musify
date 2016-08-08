package meli.musify.producer

import com.google.gson.JsonObject
import com.grailsrocks.functionaltest.*
import grails.converters.JSON
import groovy.json.JsonOutput
import meli.musify.canonic.playlist.Playlist
import meli.musify.canonic.playlist.PlaylistSong
import net.sf.json.JSONObject
import org.springframework.http.HttpStatus

class PlaylistFunctionalTests extends APITestCase {

    private static final String BASE_URL = "http://localhost:7070/producer/playlistRest"

    void testCreatePlaylistSuccessfull() {

        post(BASE_URL + "/save", {
            headers["Content-Type"] = "application/json"
            body {
                JsonOutput.toJson(getPlaylistObject())
            }
        })

        assertStatus(HttpStatus.CREATED.value())

        // Here call get(uri) or post(uri) to start the session
        // and then use the custom assertXXXX calls etc to check the response
        //
        // get('/something')
        // assertStatus 200
        // assertContentContains 'the expected text'
    }

    private Map getPlaylistObject() {
        def playlist = [login: "functional@test.com", name: "Functional Playlist " + System.currentTimeMillis(), songs: []]
        (0..2).each {
            playlist.songs << getPlaylistSongObject()
        }
        playlist
    }

    private Map getPlaylistSongObject() {
        [name: "Functional Song " + System.currentTimeMillis(), singer: "Functional Singer", songId: 18]
    }

}
