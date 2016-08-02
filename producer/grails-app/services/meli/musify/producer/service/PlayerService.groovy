package meli.musify.producer.service

import grails.converters.JSON
import grails.transaction.Transactional
import groovy.json.JsonOutput
import meli.musify.canonic.command.PlayerCommand

@Transactional
class PlayerService {

    def restClient

    def registerCommand(PlayerCommand command) {

        sendMessage(command)
        //createTopic("musify_songs_events")

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
                    println "Erro ao enfileirar evento"
                }
        )
    }

    private def createTopic(String topic) {
        restClient.post(
                uri: "/topics",
                headers: ["Content-Type": "application/json"],
                data: JsonOutput.toJson([name: topic]),
                success: { resp ->
                    println "Topico criado com sucesso!"
                },
                failure: { resp ->
                    println "Erro ao criar tópico"
                }
        )
    }
}
