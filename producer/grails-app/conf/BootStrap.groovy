import grails.converters.JSON
import meli.musify.canonic.Song
import meli.musify.canonic.User
import meli.musify.canonic.playlist.Playlist

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

        JSON.registerObjectMarshaller(Playlist){ Playlist pl ->
            [id: pl.id, login: pl.login, name: pl.name, songs: pl.songs.collect{
                [songId: it.songId, name: it.name, singer: it.singer]
            }]
        }

    }
    def destroy = {
    }
}
