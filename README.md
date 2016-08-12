# MUSIFY #

Introducción a las herramientas que se utilizan en el mercado libre.

Este proyecto simula un sitio donde el usuario puede reproducir música y crear listas de reproducción. Cada vez que una canción se reproduce y ella está siendo escuchado cada vez, se genera un evento y se envía al servidor.

Las partes interesadas en este tipo de eventos pueden capturar estos eventos y manejar esta información.

Este proyecto hace uso de las siguientes herramientas o frameworks:

 - Grails 2.5.0
 - AngularJS
 - Elasticsearch
 - MySQL
 - MongoDB
 - Redis
 - BigQueue
 - Fraude-Mocks

El proyecto se divide en la siguiente estructura:

**Productor**: aplicación web (se recomienda subir el puerto 7070)

**Consumidores**: aplicación web (recomendada boca arriba en el puerto 8080)

**Canónica**: Plugin de las clases y de la configuración compartida entre los proyectos

El productor proyecto es responsable de permitir la inclusión de los datos básicos para permitir que el funcionamiento de la aplicación.

Se le permite incluir y hacer referencia a la siguiente información por medio de comandos curl:
 - Los usuarios ( `curl --data 'login=bjornnborg@gmail.com' http://localhost:7070/producer/userRest/save` )
 - Música ( `curl --data 'name=Billie Jean&album=MJ Greatest Hits&singer=Michael Jackson' http://localhost:7070/producer/songRest/save` )
 - Listas de reproducción ( `curl --data 'name=Party Selection&login=bjornnborg@gmail.com&songs[0].name=Bad&songs[0].singer=Michael Jackson&songs[0].songId=1&songs[1].name=Billie Jean&songs[1].singer=Michael Jackson&songs[1].songId=2' http://localhost:7070/producer/playListRest/save` )


También puede buscar y reproducir la música creada, y ver un ranking a través de la interfaz web: [http://localhost:7070/producer/playerRest](http://localhost:7070/producer/playerRest)
