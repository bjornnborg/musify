package meli.musify.consumer.utils

import java.text.DateFormat
import java.text.SimpleDateFormat

class RedisUtils {

    public static final String SONG_PLAY_COUNT_KEY_PREFFIX = "songs:playCount:%s"
    public static final String SONG_PLAYING_COUNT_KEY_PREFFIX = "songs:playingCount:%s"
    public static final String MONTHLY_PLAY_COUNT_KEY_PREFFIX = "songs:monthly:playCount:%s"
    public static final String MONTHLY_PLAYING_COUNT_KEY_PREFFIX = "songs:monthly:playingCount:%s"
    public static DateFormat MONTHLY_PLAY_COUNT_RANKING_KEY_FORMAT = new SimpleDateFormat("MM-yyyy")
    public static DateFormat MONTHLY_PLAYING_COUNT_RANKING_KEY_FORMAT = new SimpleDateFormat("MM-yyyy")
    public static final String SONG_RECORD_FORMAT = "%s;%s - %s"

    static getSongPlayCountKey(song) {
        String.format(SONG_PLAY_COUNT_KEY_PREFFIX, song.id)
    }

    static getSongPlayingCountKey(song) {
        String.format(SONG_PLAYING_COUNT_KEY_PREFFIX, song.id)
    }

    static getMonthlyPlayedRankingKey() {
        String.format(MONTHLY_PLAY_COUNT_KEY_PREFFIX, MONTHLY_PLAY_COUNT_RANKING_KEY_FORMAT.format(new Date()))
    }

    static getMonthlyPlayingRankingKey() {
        String.format(MONTHLY_PLAYING_COUNT_KEY_PREFFIX, MONTHLY_PLAYING_COUNT_RANKING_KEY_FORMAT.format(new Date()))
    }

    static getSongRecord(song) {
        String.format(SONG_RECORD_FORMAT, song.id, song.name, song.album)
    }
}
