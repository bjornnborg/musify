package meli.musify.consumer

import grails.converters.JSON
import meli.musify.canonic.command.PlayerCommand
import net.sf.json.JSONObject

class SongsEventsConsumerService implements BigQueueConsumer {

    String topicName = "musify_songs_events"
    String consumerName = "song_events_consumer"

    @Override
    void onDelivery(Object message) {
        println "============"
        println "Ah, muleque!!!! Mensagem entregue ao consumidor!!!!"
        println message
        def parsed = JSONObject.toBean(message.msg, PlayerCommand)
        println parsed
        println "============"
    }
}
