package meli.musify.consumer

import grails.transaction.Transactional
import meli.musify.canonic.Song
import meli.musify.consumer.listener.MonthlyPlayingCountRankingStrategy
import meli.musify.consumer.listener.SongPlayCountStrategy
import meli.musify.consumer.listener.MonthlyPlayCountRankingStrategy
import meli.musify.consumer.listener.SongPlayingCountStrategy
import javax.annotation.PostConstruct

class SongsEventsConsumerService implements BigQueueConsumer {

    String topicName = "musify_songs_events"
    String consumerName = "song_events_consumer"

    def redisService
    def strategiesByEvent = [:]

    @PostConstruct
    void configureStrategies() {
        def strategies = [
                new SongPlayCountStrategy(redisService),
                new SongPlayingCountStrategy(redisService),
                new MonthlyPlayCountRankingStrategy(redisService),
                new MonthlyPlayingCountRankingStrategy(redisService)
        ]
        strategiesByEvent["play"] = strategies.findAll {it.accept("play")}
        strategiesByEvent["listening"] = strategies.findAll {it.accept("listening")}
    }

    @Override
    @Transactional
    void onDelivery(Object message) {
        println message
        def song = Song.where {id == message.msg.songId}.find()

        strategiesByEvent[message.msg.commandType].each {
            it.execute(message, song)
        }
    }
}
