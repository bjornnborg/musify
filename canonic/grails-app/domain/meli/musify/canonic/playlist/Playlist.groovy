package meli.musify.canonic.playlist

class Playlist {

    String name

    static constraints = {
        name nullable: false, blank: false
    }

    static hasMany = [songs: PlaylistSong]
}
