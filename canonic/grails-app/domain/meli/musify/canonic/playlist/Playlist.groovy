package meli.musify.canonic.playlist

/**
 * Es una lista de reproducción de un usuario.
 * Los datos se escriben en MongoDB, con las canciones de forma anidada para facilitar la búsqueda y visualización
 */
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
