package meli.musify.consumer.service

import grails.transaction.Transactional
import redis.clients.jedis.Jedis

import java.text.DateFormat
import java.text.SimpleDateFormat

@Transactional
class StatisticsService {

    DateFormat MONTHLY_PLAYED_RANKING_KEY_FORMAT = new SimpleDateFormat("MM-yyyy")
    DateFormat MONTHLY_PLAYING_RANKING_KEY_FORMAT = new SimpleDateFormat("MM-yyyy")

    def redisService;

    /**
     * Devuelve un mapa de dos clasificaciones: las canciones más reproducidas y las canciones escuchadas por más tiempo
     */
    def songsPlayingStatistics() {

        def songsRanking = [:]

        redisService.withRedis { Jedis redis ->
            def playCountKey = MONTHLY_PLAYED_RANKING_KEY_FORMAT.format(new Date())
            def playTimeKey = MONTHLY_PLAYING_RANKING_KEY_FORMAT.format(new Date())
            /* Se utiliza scoring reverso para construcción de la clasificación */
            songsRanking["playCount"] =  redis.zrevrangeWithScores(String.format("songs:monthly:playCount:%s", playCountKey), 0, 10)
            songsRanking["playTime"] =  redis.zrevrangeWithScores(String.format("songs:monthly:playingCount:%s", playTimeKey), 0, 10)
        }

        songsRanking["playCount"] =  songsRanking["playCount"].collect {
            [id: it.element.split(";")[0], name: it.element.split(";")[1], score: it.score]
        }
        songsRanking["playTime"] =  songsRanking["playTime"].collect {
            [id: it.element.split(";")[0], name: it.element.split(";")[1], score: it.score]
        }

        songsRanking
    }
}
