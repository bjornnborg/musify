package meli.musify.consumer

import grails.transaction.Transactional
import meli.musify.canonic.Song
import meli.musify.canonic.command.PlayerCommand
import meli.musify.canonic.stats.SongEventLog
import net.sf.json.JSONObject

class SongsEventsConsumerService implements BigQueueConsumer {

    String topicName = "musify_songs_events"
    String consumerName = "song_events_consumer"

    @Override
    @Transactional
    void onDelivery(Object message) {
        println "============"
        println "Ah, muleque!!!! Mensagem entregue ao consumidor!!!!"
        println message
        //def parsed = JSONObject.toBean(message.msg, PlayerCommand)

        def songLog = new SongEventLog(eventType: message.msg.commandType, songId: message.msg.songId)
        songLog.save()

        //println parsed
        println "============"
    }
}
