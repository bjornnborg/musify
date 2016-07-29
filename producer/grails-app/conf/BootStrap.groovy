import grails.converters.JSON
import meli.musify.canonic.Song
import meli.musify.canonic.User

class BootStrap {

    def init = { servletContext ->

        JSON.registerObjectMarshaller(Song){Song s ->
            /*
            def props = ["id": s.id] << s.properties
            return props.findAll {k,v -> k != 'class'}
            */
            [id: s.id, name: s.name, album: s.album, singer: s.singer]
        }

        JSON.registerObjectMarshaller(User){User u ->
            [id: u.id, login: u.login]
        }

    }
    def destroy = {
    }
}
