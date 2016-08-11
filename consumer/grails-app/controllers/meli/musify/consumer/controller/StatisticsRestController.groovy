package meli.musify.consumer.controller

import grails.converters.JSON

class StatisticsRestController {

    static responseFormats = ["json", "xml"]

    def statisticsService;

    def playingStatistics() {
        header "Access-Control-Allow-Origin", "*"
        respond statisticsService.songsPlayingStatistics()
    }
}
