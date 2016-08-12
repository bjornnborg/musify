package meli.musify.consumer.service

import grails.test.spock.IntegrationSpec
import meli.musify.canonic.Song
import meli.musify.canonic.command.PlayerCommand
import meli.musify.consumer.utils.RedisUtils
import redis.clients.jedis.Jedis
import spock.lang.Shared

class StatisticsServiceIntegrationSpec extends IntegrationSpec {

    def statisticsService
    def songsEventsConsumerService

    // only for cleanup
    @Shared
    def redisService;

    private static songs = []

    def setupSpec() {
        Song song_a = new Song(name: "A Song", album: "A Album", singer: "A Singer").save()
        Song song_b = new Song(name: "B Song", album: "B Album", singer: "B Singer").save()
        Song song_c = new Song(name: "C Song", album: "C Album", singer: "C Singer").save()

        songs = [song_a, song_b, song_c]
    }

    def setup() {

    }

    def cleanup() {

    }

    def cleanupSpec() {
        redisService.withRedis{ Jedis redis ->
            songs.each {
                redis.del(RedisUtils.getSongPlayCountKey(it))
                redis.del(RedisUtils.getSongPlayingCountKey(it))
            }
            redis.del(RedisUtils.getMonthlyPlayedRankingKey())
            redis.del(RedisUtils.getMonthlyPlayingRankingKey())
        }
    }

    void "correctly build the ranking"() {
        when: "we play some songs"
            songs.each {
                // play each song once
                play(it)
                // listen each song for 500s
                keepListening(it)
            }
            // 2 more play for Song B
            2.times {
                play(songs[1])
            }

            1.times {
                play(songs[2])
            }

            // keep listening for 1500s
            3.times {
                keepListening(songs[2])
            }

        and: "ask for the ranking"
            def ranking = statisticsService.songsPlayingStatistics()
        then: "ranking must be correct"
            ranking["playCount"][0].id == "${songs[1].id}"
            ranking["playCount"][0].name == "${songs[1].name} - ${songs[1].album}"
            ranking["playCount"][0].score == 3.0
            ranking["playCount"][1].id == "${songs[2].id}"
            ranking["playCount"][1].score == 2.0
            ranking["playCount"][2].id == "${songs[0].id}"

            ranking["playTime"][0].id == "${songs[2].id}"
            ranking["playTime"][0].name == "${songs[2].name} - ${songs[2].album}"
            ranking["playTime"][0].score == 2000.0
    }

    private play(song) {
        deliver([msg: new PlayerCommand(commandType: "play", userId: 1, songId: song.id, increment: 0)])
    }

    private keepListening(song) {
        // a songs will be listened for 500 seconds
        deliver([msg: new PlayerCommand(commandType: "listening", userId: 1, songId: song.id, increment: 500)])
    }

    private deliver(msg) {
        songsEventsConsumerService.onDelivery(msg)
    }

}
