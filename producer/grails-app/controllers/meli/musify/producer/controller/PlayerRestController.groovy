package meli.musify.producer.controller

import meli.musify.canonic.command.PlayerCommand
import org.springframework.http.HttpStatus

class PlayerRestController {

    static responseFormats = ["json", "xml"]

    def playerService

    def index() {

    }

    def executeCommand(PlayerCommand command) {
        playerService.registerCommand(command)
        respond command, status: HttpStatus.CREATED.value()
    }

}
