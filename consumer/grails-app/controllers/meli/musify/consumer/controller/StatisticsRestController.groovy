package meli.musify.consumer.controller

import grails.converters.JSON

class StatisticsRestController {

    static responseFormats = ["json", "xml"]

    def statisticsService;

    /**
     * Devuelve las canciónes más tocadas y tambien las canciónes ouvidas por más tiempo
     */
    def playingStatistics() {
        /* Permite el acceso de otras fuentes en la aplicacción web */
        header "Access-Control-Allow-Origin", "*"
        respond statisticsService.songsPlayingStatistics()
    }
}
