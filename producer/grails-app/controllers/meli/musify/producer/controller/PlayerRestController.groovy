package meli.musify.producer.controller

import meli.musify.canonic.command.PlayerCommand

class PlayerRestController {

    static responseFormats = ["json", "xml"]

    def executeCommand(PlayerCommand command) {
        println "recebido o comando " + command.commandType
        respond command, status: 201
    }
}
