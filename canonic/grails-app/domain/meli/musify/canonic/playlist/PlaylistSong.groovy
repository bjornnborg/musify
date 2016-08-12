package meli.musify.canonic.playlist

/**
 * Es una canción añadido a la lista de reproducción de un usuario.
 *
 * No usamos el objeto de negocio para la persistencia porque los objetivos son diferentes. Una canción como objeto de
 * negocio puede contener mucha más información que estamos interesados en la creación de una lista de reproducción.
 *
 * Esta clase es la que se acaba de grabar un catálogo música en una lista de reproducción y nada más.
 */
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
