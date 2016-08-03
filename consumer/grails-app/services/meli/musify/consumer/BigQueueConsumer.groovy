package meli.musify.consumer

import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors

trait BigQueueConsumer {

    String consumerName
    String topicName
    abstract void onDelivery(message)
    def restClientBigQueue

    ExecutorService executor
    def workers = []

    def start() {
        executor = Executors.newFixedThreadPool(1)
        def worker = new BigQueueConsumerWorker(this, restClientBigQueue)
        workers << worker
        executor.execute(worker)
    }

}
