package meli.musify.consumer.utils

import grails.test.mixin.TestMixin
import grails.test.mixin.support.GrailsUnitTestMixin
import meli.musify.canonic.Song
import spock.lang.Specification

@TestMixin(GrailsUnitTestMixin)
class RedisUtilsSpec extends Specification {

    def setup() {
    }

    def cleanup() {
    }

    void "must generate most played songs ranking key"() {
        when: "we ask for the key name"
            def key_name = RedisUtils.getMonthlyPlayedRankingKey()
        then: "key name and format must match"
            def date_format = RedisUtils.MONTHLY_PLAY_COUNT_RANKING_KEY_FORMAT
            def suffix = date_format.format(new Date())
            key_name == "songs:monthly:playCount:" + suffix
    }

    void "must generate most playing songs ranking key"() {
        when: "we ask for the key name"
            def key_name = RedisUtils.getMonthlyPlayingRankingKey()
        then: "key name and format must match"
            def date_format = RedisUtils.MONTHLY_PLAYING_COUNT_RANKING_KEY_FORMAT
            def suffix = date_format.format(new Date())
            key_name == "songs:monthly:playingCount:" + suffix
    }

    void "must generate play count key for a songs"() {
        given: "some song"
            def song = new Song(name: "Da Song", album: "Album")
            song.id = 37
        when: "we ask for the key name"
            def key_name = RedisUtils.getSongPlayCountKey(song)
        then: "key name and format must match"
            key_name == "songs:playCount:" + song.id
    }

    void "must generate playing count key for a songs"() {
        given: "some song"
            def song = new Song(name: "Da Song", album: "Album")
            song.id = 37
        when: "we ask for the key name"
            def key_name = RedisUtils.getSongPlayingCountKey(song)
        then: "key name and format must match"
            key_name == "songs:playingCount:" + song.id
    }

    void "must format a song for writing"() {
        given: "a source song"
            def song = new Song(name: "Da Song", album: "Album")
            song.id = 1
        when: "we ask for the formatting"
            def serialization = RedisUtils.getSongRecord(song)
        then: "serialization must match"
            serialization == "1;Da Song - Album"
    }
}
