import grails.converters.JSON
import meli.musify.canonic.Song

class BootStrap {

    def init = { servletContext ->
        JSON.registerObjectMarshaller(Song){Song s ->
            def props = ["id": s.id] << s.properties
            return props.findAll {k,v -> k != 'class'}
        }
    }
    def destroy = {
    }
}
