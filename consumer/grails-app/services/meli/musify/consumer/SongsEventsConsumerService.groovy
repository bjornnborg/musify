package meli.musify.consumer

import grails.transaction.Transactional
import meli.musify.canonic.Song
import redis.clients.jedis.Jedis

import java.text.DateFormat
import java.text.SimpleDateFormat

class SongsEventsConsumerService implements BigQueueConsumer {

    String topicName = "musify_songs_events"
    String consumerName = "song_events_consumer"

    DateFormat MONTHLY_PLAYED_RANKING_KEY_FORMAT = new SimpleDateFormat("MM-yyyy")
    DateFormat MONTHLY_PLAYING_RANKING_KEY_FORMAT = new SimpleDateFormat("MM-yyyy")
    String SONG_RECORD_FORMAT = "%s;%s - %s"

    def redisService

    @Override
    @Transactional
    void onDelivery(Object message) {
        println message

        redisService.withRedis{Jedis redis ->
            def song = Song.where {id == message.msg.songId}.find()

            if ("play" == message.msg.commandType) {
                String songPlayCountKey = String.format("songs:playCount:%s", message.msg.songId)
                redis.incr(songPlayCountKey)

                String monthlyPlayedRankingKey = String.format("songs:monthly:played:%s", MONTHLY_PLAYED_RANKING_KEY_FORMAT.format(new Date()))
                redis.zincrby(monthlyPlayedRankingKey, 1, String.format(SONG_RECORD_FORMAT, song.id, song.name, song.album))
            } else if ("listening" == message.msg.commandType) {
                String songPlayTimeKey = String.format("songs:playingCount:%s", message.msg.songId)
                redis.incrBy(songPlayTimeKey, message.msg.increment?: 5)

                String monthlyPlayingRankingKey = String.format("songs:monthly:playing:%s", MONTHLY_PLAYING_RANKING_KEY_FORMAT.format(new Date()))
                redis.zincrby(monthlyPlayingRankingKey, message.msg.increment?: 5, String.format(SONG_RECORD_FORMAT, song.id, song.name, song.album))
            }
        }

    }
}
