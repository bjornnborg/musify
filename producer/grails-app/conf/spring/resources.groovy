import com.mercadolibre.opensource.frameworks.restclient.SimpleRestClient
import grails.util.Environment

// Place your Spring DSL code here
beans = {

    restClient(SimpleRestClient){ bean ->
        bean.initMethod= "init"
        bean.scope="singleton"
        baseUrl = "http://127.0.0.1:8081"
    }

    Environment.executeForCurrentEnvironment {
        println "Configurando o ambiente!"
        test {
            restClient(SimpleRestClient) { bean ->
                baseUrl = "http://fraud-mocks:8888"
            }
        }
    }


}
