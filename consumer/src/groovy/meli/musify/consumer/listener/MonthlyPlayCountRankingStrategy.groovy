package meli.musify.consumer.listener

import grails.plugin.redis.RedisService
import meli.musify.consumer.utils.RedisUtils
import redis.clients.jedis.Jedis

/**
 * Clasificación de las canciones más tocadas en el mes
 */
class MonthlyPlayCountRankingStrategy implements SongEventListener {

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
            redis.zincrby(RedisUtils.getMonthlyPlayedRankingKey(), 1, RedisUtils.getSongRecord(song))
        }
    }
}
