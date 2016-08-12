package meli.musify.consumer

import javax.annotation.PreDestroy
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors

/**
 * Es un consumidor de las mensajes del BigQueue
 */
trait BigQueueConsumer {

    String consumerName
    String topicName
    abstract void onDelivery(message)
    def restClientBigQueue
    private def started = false;

    ExecutorService executor
    def workers = []

    def start() {
        if (!started) {
            executor = Executors.newFixedThreadPool(1)
            def worker = new BigQueueConsumerWorker(this, restClientBigQueue)
            workers << worker
            executor.execute(worker)
        }
    }

    @PreDestroy
    def destroy() {
        if (started) {
            workers.each {
                it.stop()
            }
            executor.shutdown()
        }
    }

}
