var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var shippingController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write("pong");
            response.end();        
        },


        getShipments : function(request, response){

      			// extract data from url
      			var pathname = url.parse(request.url).pathname;
      			var uriRegExp = new RegExp('/orders/(\\w+)/shipments.*');
      			uriRegExp.exec(pathname);
      			
      			var orderId = RegExp.$1;
      			
      			if (orderId == 1122) {
              // mode = me1
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
      				response.write(JSON.stringify({"id": 20449001653, "mode": "me1", "created_by": "receiver", "order_id": parseInt(orderId), "status": "pending", "status_history": {"date_handling": null, "date_shipped": null, "date_delivered": null, "date_cancelled": null }, "date_created": "2013-02-06T10:43:54.000-04:00", "last_updated": "2013-02-06T10:45:34.000-04:00", "tracking_number": null, "tracking_method": null, "service_id": null, "sender_id": 92601971, "receiver_id": 110503603, "sender_address": {"street_number": "25", "id": 90581273, "address_line": "Rua 7 de Setembro 1744", "comment": null, "zip_code": "859hgiugiugtydrtdthrfi76t78ogo78g9pgikgu6fuf7ugiluhou89y7hojyguyftrudftguilhjiuy98yt6978ty78oiyhp8ogikih876rf65ugugiluhou89y7hojyguyftrudftguilhjiuy98yt6978ty78oiyhp8ogikih876rf6ugiluhou89y7hojyguyftrudftguilhjiuy98yt6978ty78oiyhp8ogikih876rf6ugiluhou89y7hojyguyftrudftguilhjiuy98yt6978ty78oiyhp8ogikih876rf6g87ihig87ig9h8oyh8iyh8oy78y86fgh87fgh7tg8loyguhj9u988ou9otgh9fg8kitfg7kiutfguki7glkhfghjkjhg76jf9igntyuikmkvtu60000", "city": {"id": "TUxCQ01BUjQxY2Yz", "name": "Marechal Cândido Rondon"}, "state": {"id": "BR-PR", "name": "Paraná"}, "country": {"id": "BR", "name": "Brasil"}, "types": [null ], "latitude": null, "longitude": null }, "receiver_address": {"street_number": "25", "street_name": "Av. Viento Chorrillero", "id": 68604395, "address_line": "Av. Viento Chorrillero 25", "comment": "", "zip_code": "36880000", "city": {"id": "TUxCQ01VUjVkZjcw", "name": "Muriaé"}, "state": {"id": "BR-MG", "name": "Minas Gerais"}, "country": {"id": "BR", "name": "Brasil"}, "types": ["default_buying_address"], "latitude": null, "longitude": null }, "shipping_items": [{"id": "MLB461227429", "description": "Bateria Eletrônica Touch Drum Paper Jamz Shuttle Yellow", "quantity": 1, "dimensions": "4.0x28.0x48.0,580.0"} ], "shipping_option": {"id": 18088746, "name": "Normal", "currency_id": "BRL", "cost": 16.92, "speed": {"shipping": 168, "handling": 24 } }, "comments": null }));
      			} else if (orderId == 833333333) {
              // mode = me1
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id":20449001653,"mode":"me1","created_by":"receiver","order_id":parseInt(orderId),"status":"pending","status_history":{"date_handling":null,"date_shipped":null,"date_delivered":null,"date_cancelled":null},"date_created":"2013-02-06T10:43:54.000-04:00","last_updated":"2013-02-06T10:45:34.000-04:00","tracking_number":null,"tracking_method":null,"service_id":null,"sender_id":92601971,"receiver_id":110503603,"sender_address":{"street_number":"25","id":90581273, "street_name": "Felipe Vallese","address_line":"Rua 7 de Setembro 1744","comment":null,"zip_code":"49060630","city":{"id":"TUxCQ01BUjQxY2Yz","name":"Marechal Cândido Rondon"},"state":{"id":"BR-PR","name":"Sergipe"},"country":{"id":"BR","name":"Brasil"},"types":[null],"latitude":null,"longitude":null},"receiver_address":{"street_number":"215", "street_name": "Felipe Vallese","id":68604395,"address_line":"joao XXIII rua flavio fraga frança 15","comment":"perto do clube do paulo fraga","zip_code":"36880000","city":{"id":"TUxCQ01VUjVkZjcw","name":"Muria"},"state":{"id":"BR-MG","name":"Minas Gerais"},"country":{"id":"BR","name":"Brasil"},"types":["default_buying_address"],"latitude":-34.4444,"longitude":-36.4444},"shipping_items":[{"id":"MLB461227429","description":"Bateria Eletrônica Touch Drum Paper Jamz Shuttle Yellow","quantity":1,"dimensions":"4.0x28.0x48.0,580.0"}],"shipping_option":{"id":18088746,"name":"Normal","currency_id":"BRL","cost":16.92,"speed":{"shipping":168,"handling":24}},"comments":null}));
            } else if (orderId == 833333334) {
              // mode = me1
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id":20449001653,"mode":"me1","created_by":"receiver","order_id":parseInt(orderId),"status":"pending","status_history":{"date_handling":null,"date_shipped":null,"date_delivered":null,"date_cancelled":null},"date_created":"2013-02-06T10:43:54.000-04:00","last_updated":"2013-02-06T10:45:34.000-04:00","tracking_number":null,"tracking_method":null,"service_id":null,"sender_id":92601971,"receiver_id":110503603,"sender_address":{"street_number":"25","id":90581273, "street_name": "Felipe Vallese","address_line":"Rua 7 de Setembro 1744","comment":null,"zip_code":"49060630","city":{"id":"TUxCQ01BUjQxY2Yz","name":"Marechal Cândido Rondon"},"state":{"id":"BR-PR","name":"Sergipe"},"country":{"id":"BR","name":"Brasil"},"types":[null],"latitude":null,"longitude":null},"receiver_address":{"street_number":"215", "street_name": "Felipe Vallese","id":null,"address_line":"joao XXIII rua flavio fraga frança 15","comment":"perto do clube do paulo fraga","zip_code":"36880000","city":{"id":"TUxCQ01VUjVkZjcw","name":"Muria"},"state":{"id":"BR-MG","name":"Minas Gerais"},"country":{"id":"BR","name":"Brasil"},"types":["agency_address"],"latitude":-34.4444,"longitude":-36.4444},"shipping_items":[{"id":"MLB461227429","description":"Bateria Eletrônica Touch Drum Paper Jamz Shuttle Yellow","quantity":1,"dimensions":"4.0x28.0x48.0,580.0"}],"shipping_option":{"id":18088746,"name":"Normal","currency_id":"BRL","cost":16.92,"speed":{"shipping":168,"handling":24}},"comments":null}));
            } else if (orderId == 713070910) {
              // mode = me1
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id":20449001653,"mode":"me1","created_by":"receiver","order_id":parseInt(orderId),"status":"pending","status_history":{"date_handling":null,"date_shipped":null,"date_delivered":null,"date_cancelled":null},"date_created":"2013-02-06T10:43:54.000-04:00","last_updated":"2013-02-06T10:45:34.000-04:00","tracking_number":null,"tracking_method":null,"service_id":null,"sender_id":92601971,"receiver_id":110503603,"sender_address":{"id":90581273,"address_line":"Rua 7 de Setembro 1744","comment":null,"zip_code":"859hgiugiugtydrtdthrfi76t78ogo78g9pgikgu6fuf7ugiluhou89y7hojyguyftrudftguilhjiuy98yt6978ty78oiyhp8ogikih876rf65ugugiluhou89y7hojyguyftrudftguilhjiuy98yt6978ty78oiyhp8ogikih876rf6ugiluhou89y7hojyguyftrudftguilhjiuy98yt6978ty78oiyhp8ogikih876rf6ugiluhou89y7hojyguyftrudftguilhjiuy98yt6978ty78oiyhp8ogikih876rf6g87ihig87ig9h8oyh8iyh8oy78y86fgh87fgh7tg8loyguhj9u988ou9otgh9fg8kitfg7kiutfguki7glkhfghjkjhg76jf9igntyuikmkvtu60000","city":{"id":"TUxCQ01BUjQxY2Yz","name":"Marechal Cândido Rondon"},"state":{"id":"BR-PR","name":"Paraná"},"country":{"id":"BR","name":"Brasil"},"types":[null],"latitude":null,"longitude":null},"receiver_address":{"id":68604395,"address_line":"joao XXIII rua flavio fraga frança 15","comment":"perto do clube do paulo fraga","zip_code":"jaksdljaljsdasdiweruowfadlkasdlkjasdñlsadjalksdlajdiwoeurewiojdalskdjalkdjasldasldjasdlkasjdlajsddiweruowfadlkasdlkjasdñlsadjalksdlajdiwoeurewiojdalskdjalkdjasldasldjasdlkasjdlajsddiweruowfadlkasdlkjasdñlsadjalksdlajdiwoeurewiojdalskdjalkdjasldasldjasdlkasjdlajsddiweruowfadlkasdlkjasdñlsadjalksdlajdiwoeurewiojdalskdjalkdjasldasldjasdlkasjdlajsddiweruowfadlkasdlkjasdñlsadjalksdlajdiwoeurewiojdalskdjalkdjasldasldjasdlkasjdlajsddiweruowfadlkasdlkjasdñlsadjalksdlajdiwoeurewiojdalskdjalkdjasldasldjasdlkasjdlajsddiweruowfadlkasdlkjasdñlsadjalksdlajdiwoeurewiojdalskdjalkdjasldasldjasdlkasjdlajsddiweruowfadlkasdlkjasdñlsadjalksdlajdiwoeurewiojdalskdjalkdjasldasldjasdlkasjdlajsddiweruowfadlkasdlkjasdñlsadjalksdlajdiwoeurewiojdalskdjalkdjasldasldjasdlkasjdlajsddiweruowfadlkasdlkjasdñlsadjalksdlajdiwoeurewiojdalskdjalkdjasldasldjasdlkasjdlajsddiweruowfadlkasdlkjasdñlsadjalksdlajdiwoeurewiojdalskdjalkdjasldasldjasdlkasjdlajsd", "street_number": "25","city":{"id":"TUxCQ01VUjVkZjcw","name":"Muriaé"},"state":{"id":"BR-MG","name":"Minas Gerais"},"country":{"id":"BR","name":"Brasil"},"types":["default_buying_address"],"latitude":null,"longitude":null},"shipping_items":[{"id":"MLB461227429","description":"Bateria Eletrônica Touch Drum Paper Jamz Shuttle Yellow","quantity":1,"dimensions":"4.0x28.0x48.0,580.0"}],"shipping_option":{"id":18088746,"name":"Normal","currency_id":"BRL","cost":16.92,"speed":{"shipping":168,"handling":24}},"comments":null}));
            }
            else if(orderId == 3344) {
              // mode = me2
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
      				response.write(JSON.stringify({"id":20449000571,"mode":"me2","created_by":"receiver","order_id":parseInt(orderId),"status":"ready_to_ship","status_history":{"date_handling":"2013-02-06T10:01:07.000-04:00","date_shipped":null,"date_delivered":null,"date_cancelled":null},"date_created":"2013-02-06T10:00:55.000-04:00","last_updated":"2013-02-06T10:43:32.000-04:00","tracking_number":null,"tracking_method":null,"service_id":1,"sender_id":113677519,"receiver_id":69610196,"sender_address":{"id":92262922,"address_line":"Pra¿a Coronel Jos¿ Lopes 32","comment":"Altos","zip_code":"11310020","city":{"id":"BR-SP-36","name":"São Vicente"},"state":{"id":"BR-SP","name":"São Paulo"},"country":{"id":"BR","name":"Brasil"},"types":[null],"latitude":null,"longitude":null},"receiver_address":{"id":92547844,"address_line":"rua: 07 2307","comment":"CASA","zip_code":"38260000","city":{"id":"TUxCQ1NBT2YwMGQ5","name":"São Francisco de Sales"},"state":{"id":"BR-MG","name":"Minas Gerais"},"country":{"id":"BR","name":"Brasil"},"types":[null],"latitude":null,"longitude":null},"shipping_items":[{"id":"MLB462525815","description":"Capa Case Silicone 3d Disney Lilo Stitch Optimus L3 E405","quantity":1,"dimensions":"5.0x11.0x25.0,100.0"}],"shipping_option":{"id":18308094,"name":"Normal","currency_id":"BRL","cost":9.27,"speed":{"shipping":144,"handling":24}},"comments":null}));
      			}
            else if (orderId == 5566) {
              // mode = custom
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
      				response.write(JSON.stringify({"id":20448505676,"mode":"custom","created_by":"receiver","order_id":parseInt(orderId),"status":"active","status_history":{"date_shipped":null,"date_delivered":null},"date_created":"2013-02-06T10:02:29.000-04:00","last_updated":"2013-02-06T10:02:29.000-04:00","tracking_number":null,"tracking_method":null,"sender_id":128584981,"receiver_id":128521982,"sender_address":null,"receiver_address":{"id":93169741,"address_line":"Rua Pires da Mota 250","comment":"AP 301","zip_code":"30512760","city":{"id":"TUxCQ0JFTGU0ODdm","name":"Belo Horizonte"},"state":{"id":"BR-MG","name":"Minas Gerais"},"country":{"id":"BR","name":"Brasil"},"types":[null],"latitude":null,"longitude":null},"shipping_items":[{"id":"MLB461686249","description":"Case Hd Externo Sata 2tb 3,5 Móvel Para Armazenamento","quantity":1,"dimensions":null}],"shipping_option":{"id":null,"name":"add_shipping_cost","currency_id":"BRL","cost":0,"speed":null},"comments":null}));
      			} 
            else if (orderId == 7771) {
              // prueba sin receiver_address.id (1)
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id":20448505676,"mode":"custom","created_by":"receiver","order_id":parseInt(orderId),"status":"active","status_history":{"date_shipped":null,"date_delivered":null},"date_created":"2013-02-06T10:02:29.000-04:00","last_updated":"2013-02-06T10:02:29.000-04:00","tracking_number":null,"tracking_method":null,"sender_id":128584981,"receiver_id":128521982,"sender_address":null,"receiver_address":{"id":null,"address_line":"Rua Pires da Mota 250","comment":"AP 301","zip_code":"30512760","city":{"id":"TUxCQ0JFTGU0ODdm","name":"Belo Horizonte"},"state":{"id":"BR-MG","name":"Minas Gerais"},"country":{"id":"BR","name":"Brasil"},"types":[null],"latitude":null,"longitude":null},"shipping_items":[{"id":"MLB461686249","description":"Case Hd Externo Sata 2tb 3,5 Móvel Para Armazenamento","quantity":1,"dimensions":null}],"shipping_option":{"id":null,"name":"add_shipping_cost","currency_id":"BRL","cost":0,"speed":null},"comments":null}));
            } 
            else if (orderId == 7772) {
              // prueba sin receiver_address.id (2)
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id":20448505676,"mode":"custom","created_by":"receiver","order_id":parseInt(orderId),"status":"active","status_history":{"date_shipped":null,"date_delivered":null},"date_created":"2013-02-06T10:02:29.000-04:00","last_updated":"2013-02-06T10:02:29.000-04:00","tracking_number":null,"tracking_method":null,"sender_id":128584981,"receiver_id":128521982,"sender_address":null,"receiver_address":{"id":"","address_line":"Rua Pires da Mota 250","comment":"AP 301","zip_code":"30512760","city":{"id":"TUxCQ0JFTGU0ODdm","name":"Belo Horizonte"},"state":{"id":"BR-MG","name":"Minas Gerais"},"country":{"id":"BR","name":"Brasil"},"types":[null],"latitude":null,"longitude":null},"shipping_items":[{"id":"MLB461686249","description":"Case Hd Externo Sata 2tb 3,5 Móvel Para Armazenamento","quantity":1,"dimensions":null}],"shipping_option":{"id":null,"name":"add_shipping_cost","currency_id":"BRL","cost":0,"speed":null},"comments":null}));
            } 
            else if (orderId == 7773) {
              // prueba sin receiver_address.id (3)
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id":20448505676,"mode":"custom","created_by":"receiver","order_id":parseInt(orderId),"status":"active","status_history":{"date_shipped":null,"date_delivered":null},"date_created":"2013-02-06T10:02:29.000-04:00","last_updated":"2013-02-06T10:02:29.000-04:00","tracking_number":null,"tracking_method":null,"sender_id":128584981,"receiver_id":128521982,"sender_address":null,"receiver_address":{"address_line":"Rua Pires da Mota 250","comment":"AP 301","zip_code":"30512760","city":{"id":"TUxCQ0JFTGU0ODdm","name":"Belo Horizonte"},"state":{"id":"BR-MG","name":"Minas Gerais"},"country":{"id":"BR","name":"Brasil"},"types":[null],"latitude":null,"longitude":null},"shipping_items":[{"id":"MLB461686249","description":"Case Hd Externo Sata 2tb 3,5 Móvel Para Armazenamento","quantity":1,"dimensions":null}],"shipping_option":{"id":null,"name":"add_shipping_cost","currency_id":"BRL","cost":0,"speed":null},"comments":null}));
            } 
            else if (orderId == 7774) {
              // prueba sin receiver_address.id (4)
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id":20448505676,"mode":"custom","created_by":"receiver","order_id":parseInt(orderId),"status":"active","status_history":{"date_shipped":null,"date_delivered":null},"date_created":"2013-02-06T10:02:29.000-04:00","last_updated":"2013-02-06T10:02:29.000-04:00","tracking_number":null,"tracking_method":null,"sender_id":128584981,"receiver_id":128521982,"sender_address":null,"receiver_address":null,"shipping_items":[{"id":"MLB461686249","description":"Case Hd Externo Sata 2tb 3,5 Móvel Para Armazenamento","quantity":1,"dimensions":null}],"shipping_option":{"id":null,"name":"add_shipping_cost","currency_id":"BRL","cost":0,"speed":null},"comments":null}));
            } 
            else if (orderId == 7775) {
              // prueba sin receiver_address.id (5)
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id":20448505676,"mode":"custom","created_by":"receiver","order_id":parseInt(orderId),"status":"active","status_history":{"date_shipped":null,"date_delivered":null},"date_created":"2013-02-06T10:02:29.000-04:00","last_updated":"2013-02-06T10:02:29.000-04:00","tracking_number":null,"tracking_method":null,"sender_id":128584981,"receiver_id":128521982,"sender_address":null,"receiver_address":"","shipping_items":[{"id":"MLB461686249","description":"Case Hd Externo Sata 2tb 3,5 Móvel Para Armazenamento","quantity":1,"dimensions":null}],"shipping_option":{"id":null,"name":"add_shipping_cost","currency_id":"BRL","cost":0,"speed":null},"comments":null}));
            } 
            else if (orderId == 7776) {
              // prueba sin receiver_address.id (6)
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id":20448505676,"mode":"custom","created_by":"receiver","order_id":parseInt(orderId),"status":"active","status_history":{"date_shipped":null,"date_delivered":null},"date_created":"2013-02-06T10:02:29.000-04:00","last_updated":"2013-02-06T10:02:29.000-04:00","tracking_number":null,"tracking_method":null,"sender_id":128584981,"receiver_id":128521982,"sender_address":null,"shipping_items":[{"id":"MLB461686249","description":"Case Hd Externo Sata 2tb 3,5 Móvel Para Armazenamento","quantity":1,"dimensions":null}],"shipping_option":{"id":null,"name":"add_shipping_cost","currency_id":"BRL","cost":0,"speed":null},"comments":null}));
            } 
            else if (orderId == 7777) {
              // prueba con shipping_option.id como String (parece que ahora está viniendo así: ""MLB462436328-0"")
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id":20448505676,"mode":"custom","created_by":"receiver","order_id":parseInt(orderId),"status":"active","status_history":{"date_shipped":null,"date_delivered":null},"date_created":"2013-02-06T10:02:29.000-04:00","last_updated":"2013-02-06T10:02:29.000-04:00","tracking_number":null,"tracking_method":null,"sender_id":128584981,"receiver_id":128521982,"sender_address":null,"shipping_items":[{"id":"MLB461686249","description":"Case Hd Externo Sata 2tb 3,5 Móvel Para Armazenamento","quantity":1,"dimensions":null}],"shipping_option":{"id":"MLB462436328-0","name":"add_shipping_cost","currency_id":"BRL","cost":0,"speed":null},"comments":null}));
            } 
            else if (orderId == 999930289) {
              // prueba con shipping_option.id como String (parece que ahora está viniendo así: ""MLB462436328-0"")
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id":999930289,"mode":"custom","created_by":"receiver","order_id":parseInt(orderId),"status":"active","status_history":{"date_shipped":null,"date_delivered":null},"date_created":"2013-02-06T10:02:29.000-04:00","last_updated":"2013-02-06T10:02:29.000-04:00","tracking_number":null,"tracking_method":null,"sender_id":128584981,"receiver_id":128521982,"sender_address":null,"shipping_items":[{"id":"MLB461686249","description":"Case Hd Externo Sata 2tb 3,5 Móvel Para Armazenamento","quantity":1,"dimensions":null}],"shipping_option":{"id":"MLB462436328-0","name":"add_shipping_cost","currency_id":"BRL","cost":0,"speed":null},"comments":null}));
            } 
            else if (orderId == 827717312) {
              // prueba de geo userid 500500
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id": 21147913488, "mode": "me2", "created_by": "receiver", "order_id": 827717312, "order_cost": 205, "site_id": "MLA", "status": "delivered", "substatus": null, "status_history": {"date_handling": "2014-03-30T15:34:10.000-04:00", "date_shipped": "2014-04-01T05:09:45.000-04:00", "date_delivered": "2014-04-08T18:45:00.000-04:00", "date_not_delivered": null, "date_returned": null, "date_cancelled": null, "date_ready_to_ship": "2014-03-30T15:34:22.000-04:00", "date_first_visit": "2014-04-08T18:45:00.000-04:00"}, "date_created": "2014-03-30T15:33:57.000-04:00", "last_updated": "2014-04-08T19:20:33.000-04:00", "tracking_number": "3867500000000831100", "tracking_method": "Estándar", "service_id": 63, "sender_id": 145708592, "sender_address": {"id": 116733969, "address_line": "Felipe Vallese 2948", "street_name": "Felipe Vallese", "street_number": "2948", "comment": null, "zip_code": "1406", "city": {"id": null, "name": "C.A.B.A"}, "state": {"id": "AR-C", "name": "Capital Federal"}, "country": {"id": "AR", "name": "Argentina"}, "neighborhood": {"id": null, "name": null }, "municipality": {"id": null, "name": null }, "types": ["default_selling_address"], "latitude": -34.1234567, "longitude": -58.7654321, "is_valid_for_carrier": true, "geolocation_type": "RANGE_INTERPOLATED"}, "receiver_id": 49981527, "receiver_address": {"id": 137104313, "address_line": "Bº Juan de la Cruz Molina Mzna A Casa 15", "street_name": "Bº Juan de la Cruz Molina Mzna A Casa", "street_number": "15", "comment": "Cerca del Walmart", "zip_code": "5700", "city": {"id": null, "name": "San Luis"}, "state": {"id": "AR-D", "name": "San Luis"}, "country": {"id": "AR", "name": "Argentina"}, "neighborhood": {"id": null, "name": null }, "municipality": {"id": null, "name": null }, "types": ["default_buying_address"], "latitude": -34.1234567, "longitude": -58.7654321, "is_valid_for_carrier": true, "geolocation_type": "RANGE_INTERPOLATED", "receiver_name": "Natalia Torres", "receiver_phone": "266154251130"}, "shipping_items": [{"id": "MLA498040334", "description": "Remera Koxis Manga Larga", "quantity": 1, "dimensions": "25.0x5.0x25.0,150.0"} ], "shipping_option": {"id": 450647953, "shipping_method_id": 73328, "name": "OCA Estándar", "currency_id": "ARS", "list_cost": 48.12, "cost": 0, "speed": {"shipping": 96, "handling": 48 }, "estimated_delivery": {"date": "2014-04-07T00:00:00.000-03:00", "time_from": null, "time_to": null } }, "comments": null, "date_first_printed": "2014-03-31T08:44:12.000-04:00", "return_tracking_number": null, "cost_components": {"special_discount": 0 }, "market_place": "MELI", "application_id": null }));
            } 
            else if (orderId == 985119810) {
              // prueba de geo userid 500500
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id":21464100636,"mode":"custom","created_by":"receiver","order_id":985119810,"order_cost":null,"site_id":"MLA","status":"pending","substatus":null,"status_history":{"date_shipped":null,"date_delivered":null},"date_created":"2015-08-11T10:38:49.000-04:00","last_updated":"2015-08-11T10:38:49.000-04:00","tracking_number":null,"tracking_method":null,"service_id":null,"carrier_info":null,"sender_id":189513499,"sender_address":null,"receiver_id":189796957,"receiver_address":{"id":167289874,"address_line":"Av. Sarmiento 900","street_name":"Av. Sarmiento","street_number":"900","comment":null,"zip_code":"5700","city":{"id":"TUxBQ0NBUDZjNWY4","name":"San Luis"},"state":{"id":"AR-D","name":"San Luis"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"types":["default_buying_address","billing"],"latitude":null,"longitude":null,"geolocation_type":null,"agency":null,"is_valid_for_carrier":null,"receiver_name":"Test User","receiver_phone":"11 9 84798282"},"shipping_items":[{"id":"MLA573904595","description":"Item De Testeo - Por Favor No Ofertar","quantity":1,"dimensions":null}],"shipping_option":{"id":"MLA573904595-0","name":"Expreso","currency_id":"ARS","list_cost":13,"cost":13,"speed":null},"comments":null,"date_first_printed":null,"market_place":"MELI","return_details":null,"return_tracking_number":null,"carrier_id":null,"cost_components":{"special_discount":0}}));
            }
             else if (orderId == 985119890) {
              // prueba de geo userid 500500
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id": 21464100636, "mode": "custom", "created_by": "receiver", "order_id": 985119810, "order_cost": null, "site_id": "MLA", "status": "pending", "substatus": null, "status_history": {"date_shipped": null, "date_delivered": null }, "date_created": "2015-08-11T10:38:49.000-04:00", "last_updated": "2015-08-11T10:38:49.000-04:00", "tracking_number": null, "tracking_method": null, "service_id": null, "carrier_info": null, "sender_id": 189513499, "sender_address": null, "receiver_id": 189796957, "receiver_address": {"id": 167289874, "address_line": "Av. Sarmiento 900", "street_name": "Av. Sarmiento", "street_number": "900", "comment": null, "zip_code": "5700", "city": {"id": "TUxBQ0NBUDZjNWY4", "name": "San Luis"}, "state": {"id": "AR-D", "name": "San Luis"}, "country": {"id": "AR", "name": "Argentina"}, "neighborhood": {"id": null, "name": null }, "municipality": {"id": null, "name": null }, "types": ["default_buying_address", "billing"], "latitude": 34.544332, "longitude": -32.56422, "geolocation_type": "ROOF_TOP", "agency": null, "is_valid_for_carrier": null, "receiver_name": "Test User", "receiver_phone": "11 9 84798282"}, "shipping_items": [{"id": "MLA573904595", "description": "Item De Testeo - Por Favor No Ofertar", "quantity": 1, "dimensions": null } ], "shipping_option": {"id": "MLA573904595-0", "name": "Expreso", "currency_id": "ARS", "list_cost": 13, "cost": 13, "speed": null }, "comments": null, "date_first_printed": null, "market_place": "MELI", "return_details": null, "return_tracking_number": null, "carrier_id": null, "cost_components": {"special_discount": 0 } }));
            }
            else if (orderId == 985119891) {
              // prueba de geo userid 500500
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"id": 985119891, "mode": "custom", "created_by": "receiver", "order_id": 985119810, "order_cost": null, "site_id": "MLA", "status": "pending", "substatus": null, "status_history": {"date_shipped": null, "date_delivered": null }, "date_created": "2015-08-11T10:38:49.000-04:00", "last_updated": "2015-08-11T10:38:49.000-04:00", "tracking_number": null, "tracking_method": null, "service_id": null, "carrier_info": null, "sender_id": 189513499, "sender_address": null, "receiver_id": 189796957, "receiver_address": {"id": 167289874, "address_line": null, "street_name": null, "street_number": "900", "comment": null, "zip_code": "5700", "city": {"id": "TUxBQ0NBUDZjNWY4", "name": "San Luis"}, "state": {"id": "AR-D", "name": "San Luis"}, "country": {"id": "AR", "name": "Argentina"}, "neighborhood": {"id": null, "name": null }, "municipality": {"id": null, "name": null }, "types": ["default_buying_address", "billing"], "latitude": 34.544332, "longitude": -32.56422, "geolocation_type": "ROOF_TOP", "agency": null, "is_valid_for_carrier": null, "receiver_name": "Test User", "receiver_phone": "11 9 84798282"}, "shipping_items": [{"id": "MLA573904595", "description": "Item De Testeo - Por Favor No Ofertar", "quantity": 1, "dimensions": null } ], "shipping_option": {"id": "MLA573904595-0", "name": "Expreso", "currency_id": "ARS", "list_cost": 13, "cost": 13, "speed": null }, "comments": null, "date_first_printed": null, "market_place": "MELI", "return_details": null, "return_tracking_number": null, "carrier_id": null, "cost_components": {"special_discount": 0 } }));
            }
            else {
              /* not found (la orden no tiene shipping asociado) */
              response.writeHead(404, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"message":"Not found shipping for order_id: "+orderId,"error":"not_found_shipping_for_order_id","status":404,"cause":null}));
            }

           response.end();
        },

        getShipmentPreference : function(request, response){

            // extract data from url
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/checkout/preferences/(.*)\?.*$');
            uriRegExp.exec(pathname);
            
            var preferenceId = RegExp.$1;
            
            if (preferenceId == "69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9") {
              // mode = me1
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({    "payment_methods": {        "excluded_payment_methods": [],        "excluded_payment_types": [],        "installments": null    },    "init_point": "https://www.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "collector_id": 69424350,    "additional_info": "",    "expiration_date_from": null,    "shipments": {        "receiver_address": {            "zip_code": "5700",            "street_number": "25"        }    },    "marketplace_fee": 0,    "sandbox_init_point": "https://sandbox.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "date_created": "2013-06-24T14:05:46.822-04:00",    "operation_type": "regular_payment",    "id": "69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",     "expiration_date_to": "2014-03-05T18:14:45.049-04:00",   "expires": false,    "external_reference": "1234",    "items": [        {            "id": "",            "currency_id": "ARS",            "title": "Prueba",            "picture_url": "",            "description": "",            "category_id": "",            "quantity": 1,            "unit_price": 10.5        }    ],    "payer": { "identification": { "number": "123456789", "type" : "CPF"}},    "client_id": "963",    "marketplace": "NONE"}));
            } else if (preferenceId == "69424350-f1c7fbcd-675a-49c8-b913-8383929") {
              // mode = me1
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"payment_methods": {"excluded_payment_methods": [], "excluded_payment_types": [], "installments": null }, "init_point": "https://www.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9", "collector_id": 69424350, "additional_info": "", "expiration_date_from": null, "shipments": {"receiver_address": {"zip_code": "5700", "street_number": "25"} }, "marketplace_fee": 0, "sandbox_init_point": "https://sandbox.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9", "date_created": "2013-06-24T14:05:46.822-04:00", "operation_type": "regular_payment", "id": "69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9", "expiration_date_to": "2014-03-06T18:14:45.049-04:00", "expires": false, "external_reference": "1234", "items": [{"id": "", "currency_id": "ARS", "title": "item id null 1", "picture_url": "", "description": "", "category_id": "", "quantity": 1, "unit_price": 10.5 }, {"id": "", "currency_id": "ARS", "title": "item id null 2", "picture_url": "", "description": "", "category_id": "", "quantity": 1, "unit_price": 10.5 } ], "payer": {}, "client_id": "963", "marketplace": "NONE"}));
            }
            else {
              if (preferenceId == "69424350-f1c7fbcd-675a-49c8-1234-320b3675f4e9") {
                // mode = me1
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({    "payment_methods": {        "excluded_payment_methods": [],        "excluded_payment_types": [],        "installments": null    },    "init_point": "https://www.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-1234-320b3675f4e9",    "collector_id": 69424350,    "additional_info": "",    "expiration_date_from": null,    "shipments": {        "receiver_address": {            "zip_code": "30880180",            "street_number": "25",  "street_name":"Las Mercedes Sur",  "floor": "2", "apartment":"38"        }    },    "marketplace_fee": 0,    "sandbox_init_point": "https://sandbox.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "date_created": "2013-06-24T14:05:46.822-04:00",    "operation_type": "regular_payment",    "id": "69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "expiration_date_to": null,    "expires": false,    "external_reference": "1234",    "items": [        {            "id": "",            "currency_id": "ARS",            "title": "Prueba",            "picture_url": "",            "description": "",            "category_id": "",            "quantity": 1,            "unit_price": 10.5        }    ],    "payer": {},    "client_id": "963",    "marketplace": "NONE"}));
              }
              else {
                if (preferenceId == "69424350-f1c7fbcd-675a-49c8-1235-320b3675f4e9") {
                  // mode = me1
                  response.writeHead(200, {
                      'Content-Type' : 'application/json; charset=utf-8'
                  });
                  response.write(JSON.stringify({    "payment_methods": {        "excluded_payment_methods": [],        "excluded_payment_types": [],        "installments": null    },    "init_point": "https://www.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-1234-320b3675f4e9",    "collector_id": 69424350,    "additional_info": "",    "expiration_date_from": null,    "shipments": {        "receiver_address": {            "zip_code": "3088 *-/- 0180",            "street_number": "25",   "floor": "2", "apartment":"38"        }    },    "marketplace_fee": 0,    "sandbox_init_point": "https://sandbox.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "date_created": "2013-06-24T14:05:46.822-04:00",    "operation_type": "regular_payment",    "id": "69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "expiration_date_to": null,    "expires": false,    "external_reference": "1234",    "items": [        {            "id": "",            "currency_id": "ARS",            "title": "Prueba",            "picture_url": "",            "description": "",            "category_id": "",            "quantity": 1,            "unit_price": 10.5        }    ],    "payer": {},    "client_id": "963",    "marketplace": "NONE"}));
                }
                else{
                  if (preferenceId == "69424350-f1c7fbcd-675a-49c8-1236-320b3675f4e9") {
                    // mode = me1
                    response.writeHead(200, {
                        'Content-Type' : 'application/json; charset=utf-8'
                    });
                    response.write(JSON.stringify({    "payment_methods": {        "excluded_payment_methods": [],        "excluded_payment_types": [],        "installments": null    },    "init_point": "https://www.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-1234-320b3675f4e9",    "collector_id": 69424350,    "additional_info": "",    "expiration_date_from": null,    "shipments": {        "receiver_address": {            "zip_code": "3088 *-/- 0180",            "street_number": "25",   "floor": "2", "apartment":"38"        }    },    "marketplace_fee": 0,    "sandbox_init_point": "https://sandbox.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "date_created": "2013-06-24T14:05:46.822-04:00",    "operation_type": "regular_payment",    "id": "69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "expiration_date_to": null,    "expires": true,    "external_reference": "1234",    "items": [        {            "id": "",            "currency_id": "ARS",            "title": "Prueba",            "picture_url": "",            "description": "",            "category_id": "",            "quantity": 1,            "unit_price": 10.5        }, {            "id": "",            "currency_id": "ARS",            "title": "Prueba2",            "picture_url": "",            "description": "",            "category_id": "",            "quantity": 3,            "unit_price": 7.5        }, {            "id": "",            "currency_id": "ARS",            "title": "Prueba3",            "picture_url": "https://www.google.com.ar/",            "description": "",            "category_id": "",            "quantity": 14,            "unit_price": 19.5        }    ],    "payer": {"name": "Mario", "surname": "Moreno ", "email": "mmoreno@gmail.com", "date_created": "2013-02-28T10:59:00.000-04:00", "phone": {"area_code": "54","number": "114323-4556"}, "identification": {"type": "CPF", "number": "3453453453455"}, "address": { "street_name": "Av Brasil", "street_number": 34, "zip_code": "70210030" }},    "client_id": "963",    "marketplace": "NONE"}));
                  }
                  else{
                    if (preferenceId == "69424350-f1c7fbcd-675a-49c8-1237-320b3675f4e9") {
                      // mode = me1
                      response.writeHead(200, {
                          'Content-Type' : 'application/json; charset=utf-8'
                      });
                      response.write(JSON.stringify({    "payment_methods": {        "excluded_payment_methods": [],        "excluded_payment_types": [],        "installments": null    },    "init_point": "https://www.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-1234-320b3675f4e9",    "collector_id": 69424350,    "additional_info": "",    "expiration_date_from": null,    "shipments": {        "receiver_address": {            "zip_code": "3088 *-/- 0180",            "street_number": "25",   "floor": "2", "apartment":"38"        }    },    "marketplace_fee": 0,    "sandbox_init_point": "https://sandbox.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "date_created": "2013-06-24T14:05:46.822-04:00",    "operation_type": "regular_payment",    "id": "69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "expiration_date_to": null,    "expires": false,    "external_reference": "1234",    "items": [        {            "id": "",            "currency_id": "ARS",            "title": "Prueba",            "picture_url": "",            "description": "",            "category_id": "",            "quantity": 1,            "unit_price": 10.5        }    ],    "payer": {"name": "Mario", "surname": "Moreno ", "email": "mmoreno@gmail.com", "date_created": null, "phone": {"area_code": "54","number": ""}, "identification": {"type": "", "number": "3453453453455"}, "address": { "street_name": "Av Brasil", "street_number": null, "zip_code": "70210030" }},    "client_id": "963",    "marketplace": "NONE"}));
                    }
                    else{
                      if (preferenceId == "69424350-f1c7fbcd-675a-49c8-1238-320b3675f4e9") {
                        // mode = me1
                        response.writeHead(200, {
                            'Content-Type' : 'application/json; charset=utf-8'
                        });
                        response.write(JSON.stringify({    "payment_methods": {        "excluded_payment_methods": [],        "excluded_payment_types": [],        "installments": null    },    "init_point": "https://www.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-1234-320b3675f4e9",    "collector_id": 69424350,    "additional_info": "",    "expiration_date_from": null,    "shipments": {        "receiver_address": {            "zip_code": "3088 *-/- 0180",            "street_number": "25",   "floor": "2", "apartment":"38"        }    },    "marketplace_fee": 0,    "sandbox_init_point": "https://sandbox.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "date_created": "2013-06-24T14:05:46.822-04:00",    "operation_type": "regular_payment",    "id": "69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "expiration_date_to": "2014-03-08T18:14:45.049-04:00",    "expires": false,    "external_reference": "1234",    "items": [        {            "id": "",            "currency_id": "ARS",            "title": "Prueba",            "picture_url": "",            "description": "",            "category_id": "",            "quantity": 1,            "unit_price": 10.5        }    ],    "payer": {"name": "Mario", "surname": "Moreno ", "email": "mmoreno@gmail.com", "date_created": ""},    "client_id": "963",    "marketplace": "NONE"}));
                      }
                      else{
                        if (preferenceId == "69424350-f1c7fbcd-675a-49c8-1239-320b3675f4e9") {
                          // mode = me1
                          response.writeHead(200, {
                              'Content-Type' : 'application/json; charset=utf-8'
                          });
                          response.write(JSON.stringify({    "payment_methods": {        "excluded_payment_methods": [],        "excluded_payment_types": [],        "installments": null    },    "init_point": "https://www.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-1234-320b3675f4e9",    "collector_id": 69424350,    "additional_info": "",    "expiration_date_from": null,    "shipments": {        "receiver_address": {            "zip_code": "3088 *-/- 0180",            "street_number": "25",   "floor": "2", "apartment":"38"        }    },    "marketplace_fee": 0,    "sandbox_init_point": "https://sandbox.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "date_created": "2013-06-24T14:05:46.822-04:00",    "operation_type": "regular_payment",    "id": "69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "expiration_date_to": null,    "expires": false,    "external_reference": "1234",    "items": [        {            "id": "",            "currency_id": "ARS",            "title": "Prueba",            "picture_url": "",            "description": "",            "category_id": "",            "quantity": 1,            "unit_price": 10.5        }    ],    "payer": {"name": "Mario", "surname": "Moreno ", "email": "mmoreno@gmail.com", "date_created": "null"},    "client_id": "963",    "marketplace": "NONE"}));
                        }
                        else{
                          if (preferenceId == "99512010-515f075e-7ad0-4424-a480-4a15e2d519ea") {
                            // mode = me1
                            response.writeHead(200, {
                                'Content-Type' : 'application/json; charset=utf-8'
                            });
                            response.write(JSON.stringify({    "payment_methods": {        "excluded_payment_methods": [],        "excluded_payment_types": [],        "installments": null    },    "init_point": "https://www.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-1234-320b3675f4e9",    "collector_id": 69424350,    "additional_info": "",    "expiration_date_from": null,    "shipments": {        "receiver_address": {            "zip_code": "3088 *-/- 0180",            "street_number": "25",   "floor": "2", "apartment":"38"        }    },    "marketplace_fee": 0,    "sandbox_init_point": "https://sandbox.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "date_created": "2013-06-24T14:05:46.822-04:00",    "operation_type": "regular_payment",    "id": "69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "expiration_date_to": null,    "expires": false,    "external_reference": "CBK_115737000001",    "items": [        {            "id": "",            "currency_id": "ARS",            "title": "Prueba",            "picture_url": "",            "description": "",            "category_id": "",            "quantity": 1,            "unit_price": 10.5        }    ],    "payer": {"name": "Mario", "surname": "Moreno ", "email": "mmoreno@gmail.com", "date_created": "null"},    "client_id": "963",    "marketplace": "NONE"}));
                          }
                          else{
                            if (preferenceId == "99512010-515f075e-7ad0-4424-a480-4a15e2d519eb") {
                              // mode = me1
                              response.writeHead(200, {
                                  'Content-Type' : 'application/json; charset=utf-8'
                              });
                              response.write(JSON.stringify({    "payment_methods": {        "excluded_payment_methods": [],        "excluded_payment_types": [],        "installments": null    },    "init_point": "https://www.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-1234-320b3675f4e9",    "collector_id": 69424350,    "additional_info": "",    "expiration_date_from": null,    "shipments": {        "receiver_address": {            "zip_code": "3088 *-/- 0180",            "street_number": "25",   "floor": "2", "apartment":"38"        }    },    "marketplace_fee": 0,    "sandbox_init_point": "https://sandbox.mercadopago.com/mla/checkout/pay?pref_id=69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "date_created": "2013-06-24T14:05:46.822-04:00",    "operation_type": "regular_payment",    "id": "69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9",    "expiration_date_to": null,    "expires": false,    "external_reference": "815737000001",    "items": [        {            "id": "",            "currency_id": "ARS",            "title": "Prueba",            "picture_url": "",            "description": "",            "category_id": "",            "quantity": 1,            "unit_price": 10.5        }    ],    "payer": {"name": "Mario", "surname": "Moreno ", "email": "mmoreno@gmail.com", "date_created": "null"},    "client_id": "963",    "marketplace": "NONE"}));
                            }
                            else{
                              if(preferenceId == "175561219-3c95c1c4-e2a7-45c6-8800-a100c0398c72"){
                                response.writeHead(200, {
                                  'Content-Type' : 'application/json; charset=utf-8'
                                });
                                response.write(JSON.stringify({"additional_info":"","auto_return":"","back_urls":{"failure":"","pending":"","success":""},"client_id":"963","collector_id":175561219,"date_created":"2015-11-21T00:20:16.623-04:00","expiration_date_from":null,"expiration_date_to":null,"expires":false,"external_reference":"130064478717","id":"175561219-3c95c1c4-e2a7-45c6-8800-a100c0398c72","init_point":"https://www.mercadopago.com/mlb/checkout/start?pref_id=175561219-3c95c1c4-e2a7-45c6-8800-a100c0398c72","items":[{"id":"130064478717","currency_id":"BRL","title":"Pedido #169861174087-1","picture_url":"","description":"Pagamento referente ao pedido #169861174087-1 de Spotify","category_id":"entertainment","quantity":1,"unit_price":10}],"marketplace":"NONE","marketplace_fee":0,"notification_url":null,"operation_type":"regular_payment","payer":{"phone":{"area_code":"055","number":"55011996364546"},"address":{"zip_code":"08773380","street_name":"Avenida  Francisco Rodrigues Filho 1601 Apto. 116","street_number":"SN"},"email":"fabiodeotti@hotmail.com","identification":{"number":"","type":""},"name":"Fabio","surname":"Deotti","date_created":"2015-10-20T16:08:22.292-04:00"},"payment_methods":{"excluded_payment_methods":[{"id":""}],"default_installments":null,"default_payment_method_id":null,"excluded_payment_types":[{"id":""}],"installments":null},"sandbox_init_point":"https://sandbox.mercadopago.com/mlb/checkout/pay?pref_id=175561219-3c95c1c4-e2a7-45c6-8800-a100c0398c72","shipments":{"receiver_address":{"floor":"","zip_code":"08773380","street_name":"Avenida  Francisco Rodrigues Filho 1601 Apto. 116","apartment":"","street_number":"SN"}},"total_amount":10} ));
                              }
                              else{
                                /* not found (la orden no tiene shipping asociado) */
                                response.writeHead(404, {
                                  'Content-Type' : 'application/json; charset=utf-8'
                                });
                                response.write(JSON.stringify({"message":"Not found shipping for preferenceId: "+preferenceId,"error":"not_found_shipping_for_preference_id","status":404,"cause":null}));
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            response.end();
        },

        searchFlowCollection : function(request, response){

            // extract data from url
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/checkout/flow_collection/search\?.*$');
            uriRegExp.exec(pathname);

            var url_parts = url.parse(request.url,true);

            var collection_id = url_parts.query.collection_id
            
            if(collection_id == 756782217){
                
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({    "pref_id":  "69424350-f1c7fbcd-675a-49c8-1238-320b3675f4e9" }));

             response.end();
             return
                
            }
            
            response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({    "pref_id":  "69424350-f1c7fbcd-675a-49c8-b913-320b3675f4e9" }));

            /*  response.writeHead(404, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({"message":"Not found shipping for preferenceId","error":"not_found_shipping_for_preference_id","status":404,"cause":null}));
           */
           response.end();
        }
};

exports.getShipments = shippingController.getShipments;
exports.ping = shippingController.ping;
exports.getShipmentPreference = shippingController.getShipmentPreference;
exports.searchFlowCollection = shippingController.searchFlowCollection;

// Mappings
urlMapping.add ([{
        pattern: '^/orders/echo',
        action: {
            'GET':shippingController.ping
        }
    },
    {
        pattern: '^/orders/(\\w+)/shipments?$',
        action: {
            'GET':shippingController.getShipments
        },
    },
    {
        pattern: '^/checkout/preferences/ping$',
        action: {
            'GET':shippingController.ping
        },
    },
    {
        pattern: '^/checkout/preferences/(.*)\?.*$',
        action: {
            'GET':shippingController.getShipmentPreference
        },
    },
    {
        pattern: '^/checkout/flow_collection/search\?.*$',
        action: {
            'GET':shippingController.searchFlowCollection
        },
    }
  ]);
