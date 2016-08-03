import meli.musify.consumer.BigQueueConsumer

class BootStrap {

    def grailsApplication

    def init = { servletContext ->
        println "XXXXXXXXXXXXXXXXX"
        println "Bootstrap do consumidor"
        println "XXXXXXXXXXXXXXXXX"
        grailsApplication.getMainContext().getBeanDefinitionNames().findAll{it.toLowerCase().contains("consumer")}.each {
            println "Achei um bean $it"
        }
        grailsApplication.getMainContext().getBeansOfType(BigQueueConsumer).each { beanName, bean ->
            println "************************"
            println "vamos fazer o start dos beans"
            bean.start()
        }
    }
    def destroy = {
    }
}
