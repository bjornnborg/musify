package meli.musify.consumer.listener

import grails.plugin.redis.RedisService
import redis.clients.jedis.Jedis

import java.text.DateFormat
import java.text.SimpleDateFormat

class MonthlyPlayCountRankingStrategy implements SongEventListener {

    DateFormat MONTHLY_PLAY_COUNT_RANKING_KEY_FORMAT = new SimpleDateFormat("MM-yyyy")
    String SONG_RECORD_FORMAT = "%s;%s - %s"

    def redisService

    MonthlyPlayCountRankingStrategy(RedisService redisService) {
        this.redisService = redisService
    }

    @Override
    boolean accept(String eventName) {
        return "play".equals(eventName)
    }

    @Override
    void execute(message, song) {
        redisService.withRedis { Jedis redis ->
            String monthlyPlayedRankingKey = String.format("songs:monthly:playCount:%s", MONTHLY_PLAY_COUNT_RANKING_KEY_FORMAT.format(new Date()))
            redis.zincrby(monthlyPlayedRankingKey, 1, String.format(SONG_RECORD_FORMAT, song.id, song.name, song.album))
        }
    }
}
