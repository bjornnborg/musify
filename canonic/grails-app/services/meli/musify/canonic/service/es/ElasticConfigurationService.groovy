package meli.musify.canonic.service.es

import org.elasticsearch.client.Client
import org.elasticsearch.client.transport.NoNodeAvailableException
import org.elasticsearch.client.transport.TransportClient
import org.elasticsearch.common.settings.Settings
import org.elasticsearch.node.Node
import org.elasticsearch.node.NodeBuilder
import org.springframework.beans.factory.InitializingBean

/**
 * Las configuraciones del Elastic Search
 */
class ElasticConfigurationService implements InitializingBean {

    static transactional = false

    def grailsApplication
    def config

    private Node clientNode = null

    @Override
    void afterPropertiesSet() throws Exception {
        config = grailsApplication?.config?.es
    }

    public Client createTransportClient() {
        try{
            log.info("creando el cliente de elasticsearch tipo transport para el cluster [${config?.clusterName}]")
            Settings settings = Settings.settingsBuilder()
                    .put("cluster.name", config?.clusterName)
                    .put("node.client", true)
                    .put("client.transport.sniff", config?.transport?.sniffCluster)
                    .build()

            return TransportClient.builder().settings(settings).build()
        }catch (NoNodeAvailableException exc) {
            log.error("Error creating the search. No data server can be found - ${exc.getStackTrace()}", )
            throw new Exception("Error creating the search. No data server can be found - ${exc.getStackTrace()}", )
        } catch (Exception e) {
            log.error("Unexpected error creating the search - ${e.getStackTrace()}", )
            throw new Exception("Unexpected error creating the search - ${e.getStackTrace()}", )
        }
    }

    public Node createNodeClient(clusterHosts) {
        if(clientNode && !clientNode.isClosed()) {
            return clientNode
        }

        System.out.println "creando cliente de elasticsearch tipo nodo con la configuracion: $config - hosts: ${clusterHosts}"

        StringBuffer hosts = new StringBuffer()
        boolean isFirst = true
        clusterHosts.each {
            if(!isFirst){
                hosts.append(",")
            }
            hosts.append(it.host)
            isFirst = false
        }

        System.out.println("HOSTS: ${hosts.toString()}")

        def settings = Settings.builder()
                .put('node.data', false) //not allocate memory
                .put('node.master', false) // im not the master node
                .put("node.client", true)
                .put('network.host', "_non_loopback_")
                .put('cluster.name', config.clusterName)
                .put('http.port', config.httpPort)
                .put("node.name", InetAddress.getLocalHost().getHostName())
                .put('discovery.zen.ping.multicast.enabled', false)
                .put('discovery.zen.ping.unicast.hosts', hosts.toString() )
                .put("path.home", "/")

        System.out.println("******** CONFIGS DEL ELASTIC")
        System.out.println("********node.data: ${settings['node.data']}")
        System.out.println("********node.master: ${settings['node.master']}")
        System.out.println("********node.client: ${settings['node.client']}")
        System.out.println("********newtwork.host: ${settings['network.host']}")
        System.out.println("********cluster.name: ${settings['cluster.name']}")
        System.out.println("********http.port: ${settings['http.port']}")
        System.out.println("********node.name: ${settings['node.name']}")
        System.out.println("********multicast: ${settings['discovery.zen.ping.multicast.enabled']}")
        System.out.println("********unicast.host: ${settings['discovery.zen.ping.unicast.hosts']}")
        System.out.println("********path.home: ${settings['path.home']}")
        System.out.println("********FIN CONFIG DEL ELASTIC")

        NodeBuilder builder = NodeBuilder.nodeBuilder()
                .settings(settings.build())
                .local(false)
                .client(true)
                .data(false)

        System.out.println("********builder contruido: $builder")
        System.out.println("********builder.settings: ${builder.settings}")

        clientNode = builder.node()
        return clientNode
    }

}