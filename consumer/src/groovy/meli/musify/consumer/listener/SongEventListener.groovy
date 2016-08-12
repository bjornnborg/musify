package meli.musify.consumer.listener

/**
 * Es un objeto que se desea controlar un evento creado por una canción
 */
trait SongEventListener {

    abstract boolean accept(String eventName)
    abstract void execute(msg, song)

}