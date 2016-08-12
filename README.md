# MUSIFY #

Introducción a las herramientas que se utilizan en el mercado libre.

### Como funciona ###
Este proyecto simula un sitio donde el usuario puede reproducir música y crear listas de reproducción. Cada vez que una canción se reproduce y ella está siendo escuchado cada vez, se genera un evento y se envía al servidor.

Las partes interesadas en este tipo de eventos pueden capturar estos eventos y manejar esta información.


### Herramientas e frameworks ###
Este proyecto hace uso de las siguientes herramientas o frameworks:

 - Grails 2.5.0
 - AngularJS
 - Elasticsearch
 - MySQL
 - MongoDB
 - Redis
 - BigQueue
 - Fraude-Mocks

### Estructura ###
El proyecto se divide en la siguiente estructura:
 - Productor: aplicación web
 - Consumidores: aplicación web
 - Canónica: Plugin de las clases y de la configuración compartida entre los proyectos

#### Productor ####
El productor proyecto es responsable de permitir la inclusión de los datos básicos para permitir que el funcionamiento de la aplicación.

Se le permite incluir y hacer referencia a la siguiente información por medio de comandos curl:
 - Los usuarios
 - Música
 - Listas de reproducción

También puede buscar y reproducir la música creada, y ver un ranking a través de la interfaz web.

#### Consumidor ####
El proyecto consumidor recibe los eventos de la cola de BigQueue y genera estadísticas sobre cada canción. La información generada se almacena en los corrales.

A pesar de que el consumidor tiene un controlador para ver el ranking de las canciones más escuchadas, que ya está disponible en la interfaz web del proyecto productor. Por lo tanto, no hay necesidad de interactuar con el proyecto de los consumidores.
