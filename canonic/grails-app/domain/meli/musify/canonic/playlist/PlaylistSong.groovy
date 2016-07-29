package meli.musify.canonic.playlist

class PlaylistSong {

    static mapWith = "mongo"

    String name
    String singer
    Long songId

    static constraints = {
        name nullable: false, blank: false
        songId nullable: false, blank: false
    }

    static belongsTo = [playlist: Playlist]
}
