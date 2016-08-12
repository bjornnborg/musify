package meli.musify.producer.service

import grails.converters.JSON
import grails.transaction.Transactional
import groovy.json.JsonOutput
import meli.musify.canonic.command.PlayerCommand
import meli.musify.canonic.exception.InfrastructureException

@Transactional
class PlayerService {

    def restClient

    /**
     * Método que se llama para indicar que un evento se ha generado por el player
     */
    def registerCommand(PlayerCommand command) {
        sendMessage(command)
    }

    /**
     * Envía datos acerca de una canción para ser procesado de forma asíncrona
     */
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
