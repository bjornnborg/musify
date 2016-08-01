package meli.musify.canonic.command

import grails.validation.Validateable

@Validateable
class PlayerCommand {

    String commandType
    Long userId
    Long songId
    Long playlistId

    static constraints ={
        playlistId nullable: true
    }

}
