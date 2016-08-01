package meli.musify.canonic.playlist

class Playlist {

    static mapWith = "mongo"

    String name
    String login

    static constraints = {
        name nullable: false, blank: false, unique: ['login']
    }

    static hasMany = [songs: PlaylistSong]
    static embedded = ['songs']
}
