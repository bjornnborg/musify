import com.mercadolibre.opensource.frameworks.restclient.SimpleRestClient

// Place your Spring DSL code here
beans = {

    restClient(SimpleRestClient){ bean ->
        bean.initMethod= "init"
        bean.scope="singleton"
        baseUrl = "http://127.0.0.1:8081"
    }

    restClientBigQueue(SimpleRestClient){ bean ->
        bean.initMethod= "init"
        bean.scope="singleton"
        baseUrl = "http://127.0.0.1:8081"
    }

}
