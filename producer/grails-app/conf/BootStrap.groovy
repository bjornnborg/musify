import grails.converters.JSON
import meli.musify.canonic.Song
import meli.musify.canonic.User

class BootStrap {

    def init = { servletContext ->
        JSON.registerObjectMarshaller(Song){Song s ->
            def props = ["id": s.id] << s.properties
            return props.findAll {k,v -> k != 'class'}
        }

        JSON.registerObjectMarshaller(User){User u ->
            def props = ["id": u.id] << u.properties
            return props.findAll {k,v -> k != 'class'}
        }

    }
    def destroy = {
    }
}
