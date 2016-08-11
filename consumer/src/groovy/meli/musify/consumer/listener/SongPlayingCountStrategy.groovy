package meli.musify.consumer.listener

import grails.plugin.redis.RedisService
import redis.clients.jedis.Jedis

class SongPlayingCountStrategy implements SongEventListener {


    def redisServce

    SongPlayingCountStrategy(RedisService redisService) {
        this.redisServce = redisService
    }

    @Override
    boolean accept(String eventName) {
        return "listening".equals(eventName)
    }

    @Override
    void execute(message, song) {
        redisServce.withRedis {Jedis redis ->
            String songPlayTimeKey = String.format("songs:playingCount:%s", message.msg.songId)
            redis.incrBy(songPlayTimeKey, message.msg.increment?: 5)
        }
    }
}
