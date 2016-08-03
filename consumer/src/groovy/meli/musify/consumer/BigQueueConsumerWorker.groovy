package meli.musify.consumer

class BigQueueConsumerWorker implements Runnable {

    BigQueueConsumer consumer
    def restClientBigQueue

    boolean running = true

    BigQueueConsumerWorker(bigQueueConsumer, restClient) {
        consumer = bigQueueConsumer
        restClientBigQueue = restClient
    }

    @Override
    void run() {
        def startDelay = 2
        sleep(1000 * startDelay)

        while (running) {
            if (!download()) {
                sleep(1000 * startDelay)
            }
        }

    }

    private def download() {
        def message

        println "Bora fazer um get em /topics/$consumer.topicName/consumers/$consumer.consumerName/messages"

        restClientBigQueue.get(
                uri: "/topics/$consumer.topicName/consumers/$consumer.consumerName/messages".toString(),
                success: {
                    println "Recebi a mensagem!"
                    println it.status.statusCode
                    println it.data
                    message = it.data
                },
                failure: {
                    println "Deu xabú...."
                    println it?.status
                }
        )

        if (!message) {
            return
        }


        consumer.onDelivery(message)

        message

        // remover mensagem / ACK
    }

    def stop(){
        running = false
    }
}
