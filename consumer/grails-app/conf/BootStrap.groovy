import meli.musify.consumer.BigQueueConsumer

class BootStrap {

    def grailsApplication

    def init = { servletContext ->
        grailsApplication.getMainContext().getBeansOfType(BigQueueConsumer).each { beanName, bean ->
            // Inicia todos los consumidores detectores de eventos
            bean.start()
        }
    }
    def destroy = {
    }
}
