import meli.musify.consumer.BigQueueConsumer

class BootStrap {

    def grailsApplication

    def init = { servletContext ->
        grailsApplication.getMainContext().getBeansOfType(BigQueueConsumer).each { beanName, bean ->
            bean.start()
        }
    }
    def destroy = {
    }
}
