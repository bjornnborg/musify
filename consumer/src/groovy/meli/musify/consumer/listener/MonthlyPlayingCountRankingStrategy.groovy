package meli.musify.consumer.listener

import grails.plugin.redis.RedisService
import meli.musify.consumer.utils.RedisUtils
import redis.clients.jedis.Jedis

import java.text.DateFormat
import java.text.SimpleDateFormat

class MonthlyPlayingCountRankingStrategy implements SongEventListener {

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
            redis.zincrby(RedisUtils.getMonthlyPlayingRankingKey(), message.msg.increment?: 5, RedisUtils.getSongRecord(song))
        }
    }
}
