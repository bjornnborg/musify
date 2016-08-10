package meli.musify.producer.service

import grails.converters.JSON
import grails.transaction.Transactional
import groovy.json.JsonOutput
import meli.musify.canonic.command.PlayerCommand
import meli.musify.canonic.exception.InfrastructureException

@Transactional
class PlayerService {

    def restClient

    def registerCommand(PlayerCommand command) {
        sendMessage(command)
    }

    private def sendMessage(PlayerCommand command) {
        restClient.post(
                uri: "/messages",
                headers: ["Content-Type": "application/json"],
                data: JsonOutput.toJson([msg: (command as JSON).toString(), topics: ["musify_songs_events"]]),
                success: { resp ->
                    println "Evento adicionado à fila"
                },
                failure: { resp ->
                    throw new InfrastructureException(resp.exception.message, resp.exception)
                }
        )
    }

}
