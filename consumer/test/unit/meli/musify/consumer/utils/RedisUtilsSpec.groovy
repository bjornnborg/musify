package meli.musify.consumer.utils

import grails.test.mixin.TestMixin
import grails.test.mixin.support.GrailsUnitTestMixin
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
}
