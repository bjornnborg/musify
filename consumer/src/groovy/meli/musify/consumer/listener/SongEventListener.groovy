package meli.musify.consumer.listener

trait SongEventListener {

    abstract boolean accept(String eventName)
    abstract void execute(msg, song)

}