package meli.musify.consumer.listener

import grails.plugin.redis.RedisService
import redis.clients.jedis.Jedis

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
            String songPlayCountKey = String.format("songs:playCount:%s", message.msg.songId)
            redis.incr(songPlayCountKey)
        }
    }
}
