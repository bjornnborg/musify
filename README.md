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
 - Los usuarios
 - Música
 - Listas de reproducción

También puede buscar y reproducir la música creada, y ver un ranking a través de la interfaz web.

El proyecto consumidor recibe los eventos de la cola de BigQueue y genera estadísticas sobre cada canción. La información generada se almacena en los corrales.

A pesar de que el consumidor tiene un controlador para ver el ranking de las canciones más escuchadas, que ya está disponible en la interfaz web del proyecto productor. Por lo tanto, no hay necesidad de interactuar con el proyecto de los consumidores.
