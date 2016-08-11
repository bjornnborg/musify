package meli.musify.consumer.listener

import grails.plugin.redis.RedisService
import redis.clients.jedis.Jedis

import java.text.DateFormat
import java.text.SimpleDateFormat

class MonthlyPlayingCountRankingStrategy implements SongEventListener {

    DateFormat MONTHLY_PLAYING_COUNT_RANKING_KEY_FORMAT = new SimpleDateFormat("MM-yyyy")
    String SONG_RECORD_FORMAT = "%s;%s - %s"

    def redisService

    MonthlyPlayingCountRankingStrategy(RedisService redisService) {
        this.redisService = redisService
    }

    @Override
    boolean accept(String eventName) {
        return "listening".equals(eventName)
    }

    @Override
    void execute(message, song) {
        redisService.withRedis {Jedis redis ->
            String monthlyPlayingRankingKey = String.format("songs:monthly:playingCount:%s", MONTHLY_PLAYING_COUNT_RANKING_KEY_FORMAT.format(new Date()))
            redis.zincrby(monthlyPlayingRankingKey, message.msg.increment?: 5, String.format(SONG_RECORD_FORMAT, song.id, song.name, song.album))
        }
    }
}
