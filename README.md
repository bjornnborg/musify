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


### Configuración ###

#### Criar um tópico en el BigQueue com lo nombre musify_songs_events ####
`curl -d'{"name":"musify_songs_events"}' 127.0.0.1:8081/topics -H"Content-Type: application/json"`

#### Crear un consumidor con el nombre song_events_consumer ####
`curl -d'{"name":"song_events_consumer"}' 127.0.0.1:8081/topics/test_topic/consumers -H"Content-Type: application/json"`

#### Iniciar la aplicación productor ####
Se recomienda utilizar el puerto 7070

#### Iniciar la aplicación consumidor ####
Se recomienda utilizar el puerto 8080

### Uso de la aplicación ###

### Utilizar el proyecto del productor para crear un usuario ###
`curl --data 'login=user@email.com' http://localhost:7070/producer/userRest/save`

### Utilizar el proyecto del productor para crear unas canciónes ###
`curl --data 'name=Bad&album=MJ Greatest Hits&singer=Michael Jackson' http://localhost:7070/producer/songRest/save`

`curl --data 'name=Grenade&album=BM Greatest Hits&singer=Bruno Mars' http://localhost:7070/producer/songRest/save`

### Utilizar el proyecto del productor para crear una playlist con su canciónes ###
`curl -H "Content-Type: application/json" -d '{"name": "Party Playlist", "login": "user@email.com", "songs":[{"name": "Bad", "singer": "Michael Jackson", "songId": 1}, {"name": "Grenade", "singer": "Bruno Mars", "songId": 2}] }' http://localhost:7070/producer/playlistRest/save`

### Utilizar el proyecto del productor para obtener las listas de reproduccións ###
`curl http://localhost:7070/producer/playlistRest?login=user@email.com`

Por desgracia sólo se puede manipular la lista de reproducción desde la línea de comandos y no se puede hacer adiciones o supresiones

#### Iniciar la aplicación consumidor ####
Se recomienda utilizar el puerto 8080

#### Acceder a la interfaz web ####

http://localhost:7070/producer/playerRest

Busque una de las canciones creadas para reproducir y detener todas las veces que desee.

El proyecto productor utilizará el Elastic Search para encontrar canciones con la palabra informado. Cuando un comienzo canción que está sonando se envía un evento al servidor y será consumida por el proyecto de los consumidores.

Los datos sobre cada canción se registrarán en redis, así como el uso de la clasificación.

Mira Javascript consola de información de depuración y la continuidad de los acontecimientos
