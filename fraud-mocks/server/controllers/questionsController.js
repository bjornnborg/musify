var url = require('url');
var querystring = require('querystring');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");
var dateFormatter = require('../services/dateFormatter');

var questionsController = {
        search : function(request, response) {

                

                response.writeHead(200, {
                        'Content-Type' : 'application/json; charset=utf-8'
                });

                
                var url_parts = url.parse(request.url,true);

                var from = url_parts.query.from;
                var seller_id = url_parts.query.seller_id;
                var offset = url_parts.query.offset;
               
                console.log("El valor de from es: " + from);
                
                
                if(from == 654321){                    
                    response.write(JSON.stringify({"total":0,"limit":50,"questions":[]}));
                    response.end();
                } else if(seller_id == 96748277){                    
                    response.write(JSON.stringify({"total":0,"limit":50,"questions":[]}));
                    response.end();
                } else if ((from == 123456 || seller_id == 123456) && offset >= 100){                    
                    response.write(JSON.stringify({"total":0,"limit":50,"questions":[]}));
                    response.end();
                } else if((from == 123456 || seller_id == 123456) && offset < 100){     

                    var date2d = new Date();
                    date2d.setDate(date2d.getDate() -2); 
                    date2d.setHours(date2d.getHours() + 12);             
                    var now2d = dateFormatter.DateFormatter.format(date2d, 'Y-m-d');
                    var nowTime2d = dateFormatter.DateFormatter.format(date2d, 'H:i:s');
                    var completeTime2d= now2d + 'T' + nowTime2d + '.000-04:00'

                    var date7d = new Date();
                    date7d.setDate(date7d.getDate() -7); 
                    date7d.setHours(date7d.getHours() + 12);             
                    var now7d = dateFormatter.DateFormatter.format(date7d, 'Y-m-d');
                    var nowTime7d = dateFormatter.DateFormatter.format(date7d, 'H:i:s');
                    var completeTime7d= now7d + 'T' + nowTime7d + '.000-04:00'               

                    response.write(JSON.stringify({
                            "total": 6,
                            "limit": 50,
                            "questions": [
                                {
                                    "id": 2698703568,
                                    "answer": {
                                        "date_created": "2013-04-28T20:12:19.000-04:00",
                                        "status": "ACTIVE",
                                        "text": "Hola Ariel,\nEs un complejo el cual tiene capacidad para 4 personas. Seria dueño de la primera semana de vacaciones de invierno de Buenos Aires, todos los años. A su vez si no lo usa y si se afilia a R.C.I. puede intercambiarlo en cualquier lugar del mundo. Es un complejo de muy buen nivel y no tiene gastos mensuales, pero si hay que pagar expensas anuales de $4300 (ese fue el monto de este año).\nGracias"
                                    },
                                    "date_created": date2d,
                                    "item_id": "MLA453025198",
                                    "seller_id": 96748277,
                                    "status": "ANSWERED",
                                    "text": "hola, me podes comentar como funciona esto de los tiempos compartidos\r\nslds\r\n\r\nAiel",
                                    "from": {
                                        "id": 62812355
                                    }
                                },
                                {
                                    "id": 2698486039,
                                    "answer": {
                                        "date_created": "2013-04-22T14:49:40.000-04:00",
                                        "status": "ACTIVE",
                                        "text": "Le acabamos de enviar alternativas por su consulta sobre Tiempo Compartido. Sugerimos siempre revisar su casilla de correo no deseado, por las dudas. De no recibirlo, por favor, comuníquese a : 4584-5133/4453 4581-2218, o envíenos un mail a info@buenasvacaciones.com.ar"
                                    },
                                    "date_created": date2d,
                                    "item_id": "MLA448924762",
                                    "seller_id": 80619840,
                                    "status": "ANSWERED",
                                    "text": "hola, me podrias enviar algo de info respecto a como funciona esto de los tiempos compartidos.\r\nSlds\r\n\r\nAriel",
                                    "from": {
                                        "id": 62812355
                                    }
                                },
                                {
                                    "id": 2698704819,
                                    "answer": {
                                        "date_created": "2013-04-18T11:12:11.000-04:00",
                                        "status": "ACTIVE",
                                        "text": "Hola Ariel. El tiempo compartido es un sistema en el cual sos dueño de una semana en un Complejo con todas las comodidades de un hotel. En este caso, la semana es FIJA n·29 que siempre coincide con la ultima semana de Julio y es un depto para 6 a 7 personas. Esa semana lo podes usar, alquilar, o intercambiar por cualquier otro destino de la red INTERVAL. En el momento de la venta se firma un contrato de venta en las oficinas del Complejo y podes usarlo por 90 años, y es hereditario. Tambien lo podes volver a vender si queres. El unico gasto que tenes son las expensas anuales por todos los servicios del Complejo que si no lo usas, lo podes recuperar facilmente alquilandolo. Entra a www.lemirage.com.ar y ahi veras todas las comodidades que tiene. Yo necesito venderlo por problemas familiares, pero es una buena inversion, porque el valor aumenta igual que cualquier propiedad. Si necesitas mas informacion, mandame un mje y nos comunicamos por mail. Gracias."
                                    },
                                    "date_created": date7d,
                                    "item_id": "MLA455720655",
                                    "seller_id": 56472719,
                                    "status": "ANSWERED",
                                    "text": "Hola, estoy interesado, me podrias pasar informacion de como funciona esto del tiempo compartido, la verdad no entiendo nada todavia.\r\n\r\nSlds\r\n\r\nAriel",
                                    "from": {
                                        "id": 62812355
                                    }
                                },
                                {
                                    "id": 2698485081,
                                    "answer": null,
                                    "date_created": date7d,
                                    "item_id": "MLA450413485",
                                    "seller_id": 132866184,
                                    "status": "CLOSED_UNANSWERED",
                                    "text": "hola, me gustaria obtener mas informacion sobre como funciona el tiempo compartido.\r\n\r\nSlds\r\n\r\nAriel",
                                    "from": {
                                        "id": 62812355
                                    }
                                },
                                {
                                    "id": 2698687260,
                                    "answer": null,
                                    "date_created": date7d,
                                    "item_id": "MLA457209820",
                                    "seller_id": 136669433,
                                    "status": "CLOSED_UNANSWERED",
                                    "text": "hola, estoy interesado, esta bien el precio 22 mil?\r\n\r\nSdls\r\n\r\nAriel",
                                    "from": {
                                        "id": 62812355
                                    }
                                },
                                {
                                    "id": 2689024984,
                                    "answer": null,
                                    "date_created": date7d,
                                    "item_id": "MLA455923028",
                                    "seller_id": 73098011,
                                    "status": "CLOSED_UNANSWERED",
                                    "text": "hola como estas.\r\n\r\nMe gustaria saber mas sobre el plan de financiacion.\r\n\r\nSdsl\r\n\r\nAriel",
                                    "from": {
                                        "id": 62812355
                                    }
                                }
                            ]
                        }));
                        response.end();

                } else {
                
                        response.write(JSON.stringify({
                            "total": 6,
                            "limit": 50,
                            "questions": [
                                {
                                    "id": 2698703568,
                                    "answer": {
                                        "date_created": "2013-04-28T20:12:19.000-04:00",
                                        "status": "ACTIVE",
                                        "text": "Hola Ariel,\nEs un complejo el cual tiene capacidad para 4 personas. Seria dueño de la primera semana de vacaciones de invierno de Buenos Aires, todos los años. A su vez si no lo usa y si se afilia a R.C.I. puede intercambiarlo en cualquier lugar del mundo. Es un complejo de muy buen nivel y no tiene gastos mensuales, pero si hay que pagar expensas anuales de $4300 (ese fue el monto de este año).\nGracias"
                                    },
                                    "date_created": "2013-04-18T00:15:23.000-04:00",
                                    "item_id": "MLA453025198",
                                    "seller_id": 96748277,
                                    "status": "ANSWERED",
                                    "text": "hola, me podes comentar como funciona esto de los tiempos compartidos\r\nslds\r\n\r\nAiel",
                                    "from": {
                                        "id": 62812355
                                    }
                                },
                                {
                                    "id": 2698486039,
                                    "answer": {
                                        "date_created": "2013-04-22T14:49:40.000-04:00",
                                        "status": "ACTIVE",
                                        "text": "Le acabamos de enviar alternativas por su consulta sobre Tiempo Compartido. Sugerimos siempre revisar su casilla de correo no deseado, por las dudas. De no recibirlo, por favor, comuníquese a : 4584-5133/4453 4581-2218, o envíenos un mail a info@buenasvacaciones.com.ar"
                                    },
                                    "date_created": "2013-04-18T00:14:16.000-04:00",
                                    "item_id": "MLA448924762",
                                    "seller_id": 80619840,
                                    "status": "ANSWERED",
                                    "text": "hola, me podrias enviar algo de info respecto a como funciona esto de los tiempos compartidos.\r\nSlds\r\n\r\nAriel",
                                    "from": {
                                        "id": 62812355
                                    }
                                },
                                {
                                    "id": 2698704819,
                                    "answer": {
                                        "date_created": "2013-04-18T11:12:11.000-04:00",
                                        "status": "ACTIVE",
                                        "text": "Hola Ariel. El tiempo compartido es un sistema en el cual sos dueño de una semana en un Complejo con todas las comodidades de un hotel. En este caso, la semana es FIJA n·29 que siempre coincide con la ultima semana de Julio y es un depto para 6 a 7 personas. Esa semana lo podes usar, alquilar, o intercambiar por cualquier otro destino de la red INTERVAL. En el momento de la venta se firma un contrato de venta en las oficinas del Complejo y podes usarlo por 90 años, y es hereditario. Tambien lo podes volver a vender si queres. El unico gasto que tenes son las expensas anuales por todos los servicios del Complejo que si no lo usas, lo podes recuperar facilmente alquilandolo. Entra a www.lemirage.com.ar y ahi veras todas las comodidades que tiene. Yo necesito venderlo por problemas familiares, pero es una buena inversion, porque el valor aumenta igual que cualquier propiedad. Si necesitas mas informacion, mandame un mje y nos comunicamos por mail. Gracias."
                                    },
                                    "date_created": "2013-04-18T00:18:44.000-04:00",
                                    "item_id": "MLA455720655",
                                    "seller_id": 56472719,
                                    "status": "ANSWERED",
                                    "text": "Hola, estoy interesado, me podrias pasar informacion de como funciona esto del tiempo compartido, la verdad no entiendo nada todavia.\r\n\r\nSlds\r\n\r\nAriel",
                                    "from": {
                                        "id": 62812355
                                    }
                                },
                                {
                                    "id": 2698485081,
                                    "answer": null,
                                    "date_created": "2013-04-18T00:09:02.000-04:00",
                                    "item_id": "MLA450413485",
                                    "seller_id": 132866184,
                                    "status": "CLOSED_UNANSWERED",
                                    "text": "hola, me gustaria obtener mas informacion sobre como funciona el tiempo compartido.\r\n\r\nSlds\r\n\r\nAriel",
                                    "from": {
                                        "id": 62812355
                                    }
                                },
                                {
                                    "id": 2698687260,
                                    "answer": null,
                                    "date_created": "2013-04-17T23:47:21.000-04:00",
                                    "item_id": "MLA457209820",
                                    "seller_id": 136669433,
                                    "status": "CLOSED_UNANSWERED",
                                    "text": "hola, estoy interesado, esta bien el precio 22 mil?\r\n\r\nSdls\r\n\r\nAriel",
                                    "from": {
                                        "id": 62812355
                                    }
                                },
                                {
                                    "id": 2689024984,
                                    "answer": null,
                                    "date_created": "2013-04-09T11:25:59.000-04:00",
                                    "item_id": "MLA455923028",
                                    "seller_id": 73098011,
                                    "status": "CLOSED_UNANSWERED",
                                    "text": "hola como estas.\r\n\r\nMe gustaria saber mas sobre el plan de financiacion.\r\n\r\nSdsl\r\n\r\nAriel",
                                    "from": {
                                        "id": 62812355
                                    }
                                }
                            ]
                        }));
                        response.end();
                
                }
        }

}
;




exports.search = questionsController.search;

// Mappings
urlMapping.add ([
        {
                pattern: '^/questions/search',
                action: {
                        'GET':questionsController.search
                }
        }

        

]);


