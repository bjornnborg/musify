package meli.musify.consumer

import grails.transaction.Transactional
import meli.musify.canonic.stats.SongEventLog

class SongsEventsConsumerService implements BigQueueConsumer {

    String topicName = "musify_songs_events"
    String consumerName = "song_events_consumer"

    @Override
    @Transactional
    void onDelivery(Object message) {
        println message

        def songLog = new SongEventLog(eventType: message.msg.commandType, songId: message.msg.songId)
        songLog.save()
    }
}
