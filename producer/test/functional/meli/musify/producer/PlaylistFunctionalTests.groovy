package meli.musify.producer

import com.grailsrocks.functionaltest.*
import groovy.json.JsonOutput
import org.springframework.http.HttpStatus

class PlaylistFunctionalTests extends APITestCase {

    private static final String BASE_URL = "http://localhost:8080/producer/playlistRest"

    void testCreatePlaylistSuccessfull() {

        post(BASE_URL + "/save", {
            headers["Content-Type"] = "application/json"
            body {
                JsonOutput.toJson(getPlaylistObject())
            }
        })

        assertStatus(HttpStatus.CREATED.value())
        def response = getJSON()
        assert response.id != null

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
