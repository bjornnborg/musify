package meli.musify.canonic.command

import grails.validation.Validateable

/**
 * Es un evento creado por el player, tales como iniciar la reproducción de una canción o indican que una canción
 * se está reproduciendo
 */
@Validateable
class PlayerCommand {

    String commandType
    Long userId
    Long songId
    Long playlistId
    Long atSecond
    Long increment

    static constraints ={
        playlistId nullable: true
        atSecond defaultValue: 0, nullable: true
    }

}
