package meli.musify.producer

import com.grailsrocks.functionaltest.*
import groovy.json.JsonOutput
import org.springframework.http.HttpStatus

class PlayerFunctionalTests extends APITestCase {

    private static final String BASE_URL = "http://localhost:8080/producer/playerRest"

    void testGenerateSongEvent() {
        post(BASE_URL + "/executeCommand", {
            headers["Content-Type"] = "application/json"
            body {
                JsonOutput.toJson(getEventObject())
            }
        })

        assertStatus(HttpStatus.CREATED.value())
    }

    private Map getEventObject() {
        [commandType: "play", userId: 1, songId: 1, atSecond: 0]
    }
}
