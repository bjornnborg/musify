package meli.musify.consumer.utils

import java.text.DateFormat
import java.text.SimpleDateFormat

class RedisUtils {

    public static final String MONTHLY_PLAY_COUNT_KEY_PREFFIX = "songs:monthly:playCount:%s"
    public static DateFormat MONTHLY_PLAY_COUNT_RANKING_KEY_FORMAT = new SimpleDateFormat("MM-yyyy")
    public static final String SONG_RECORD_FORMAT = "%s;%s - %s"

    static getMonthlyPlayedRankingKey() {
        String.format(MONTHLY_PLAY_COUNT_KEY_PREFFIX, MONTHLY_PLAY_COUNT_RANKING_KEY_FORMAT.format(new Date()))
    }

    static getSongRecord(song) {
        String.format(SONG_RECORD_FORMAT, song.id, song.name, song.album)
    }
}
