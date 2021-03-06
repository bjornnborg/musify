package meli.musify.consumer.listener

import grails.plugin.redis.RedisService
import meli.musify.consumer.utils.RedisUtils
import redis.clients.jedis.Jedis

/**
 * Clasificación de las veces que una canción se ha jugado desde que fue incluido en el catálogo
 */
class SongPlayCountStrategy implements SongEventListener {

    def redisService

    SongPlayCountStrategy(RedisService redisService) {
        this.redisService = redisService
    }

    @Override
    boolean accept(String eventName) {
        return "play".equals(eventName)
    }

    @Override
    void execute(message, song) {
        redisService.withRedis { Jedis redis ->
            redis.incr(RedisUtils.getSongPlayCountKey(song))
        }
    }
}
