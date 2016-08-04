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

        println "Buscando mensagens em /topics/$consumer.topicName/consumers/$consumer.consumerName/messages"

        restClientBigQueue.get(
                uri: "/topics/$consumer.topicName/consumers/$consumer.consumerName/messages".toString(),
                success: {
                    println "mensagem capturada"
                    message = it.data
                },
                failure: {
                    println "erro ao capturar mensagem: " + it?.status
                }
        )

        if (!message) {
            return
        }

        consumer.onDelivery(message)
        println "Message acknowledge em /topics/$consumer.topicName/consumers/$consumer.consumerName/messages/$message.recipientCallback".toString()
        restClientBigQueue.delete(
                uri: "/topics/$consumer.topicName/consumers/$consumer.consumerName/messages/$message.recipientCallback".toString(),
                success: {
                    println "Message $message.recipientCallback deleted succesfully"
                },
                failure: {
                    if (it.data) println (it.data)
                    throw it.exception ?: new RuntimeException("Error removing message: $message.recipientCallback")
                }
        )

        message
    }

    def stop(){
        running = false
    }
}
