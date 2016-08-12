package meli.musify.consumer

import grails.transaction.Transactional
import meli.musify.canonic.Song
import meli.musify.consumer.listener.MonthlyPlayingCountRankingStrategy
import meli.musify.consumer.listener.SongPlayCountStrategy
import meli.musify.consumer.listener.MonthlyPlayCountRankingStrategy
import meli.musify.consumer.listener.SongPlayingCountStrategy
import javax.annotation.PostConstruct

/**
 * Es un consumidor de las mensajes de eventos creados por el player en el BigQueue
 */
class SongsEventsConsumerService implements BigQueueConsumer {

    String topicName = "musify_songs_events"
    String consumerName = "song_events_consumer"

    def redisService

    /* Podemos querer hacer más de una cosa para cada tipo de evento creado para una canción */
    def strategiesByEvent = [:]

    @PostConstruct
    void configureStrategies() {
        /* Objetos interesado en los acontecimientos de una canción */
        def strategies = [
                new SongPlayCountStrategy(redisService),
                new SongPlayingCountStrategy(redisService),
                new MonthlyPlayCountRankingStrategy(redisService),
                new MonthlyPlayingCountRankingStrategy(redisService)
        ]
        strategiesByEvent["play"] = strategies.findAll {it.accept("play")}
        strategiesByEvent["listening"] = strategies.findAll {it.accept("listening")}
    }

    /**
     * Procesa un mensaje entrante desde el BigQueue
     */
    @Override
    @Transactional
    void onDelivery(Object message) {
        def song = Song.where { id == message.msg.songId }.find()

        strategiesByEvent[message.msg.commandType].each {
            it.execute(message, song)
        }
    }
}
