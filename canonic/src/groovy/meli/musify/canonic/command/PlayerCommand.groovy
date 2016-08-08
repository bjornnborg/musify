package meli.musify.canonic.command

import grails.validation.Validateable

@Validateable
class PlayerCommand {

    String commandType
    Long userId
    Long songId
    Long playlistId
    Long atSecond

    static constraints ={
        playlistId nullable: true
        atSecond defaultValue: 0, nullable: true
    }

}
