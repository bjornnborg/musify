var url = require('url');
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var applicationController = {
    _applications : [],
    _appIds : 100000,

    ping: function(request, response) {
        /*response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });*/
        if (request.headers["content-type"] == "application/json") {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
        } else {
            response.writeHead(200, {
                'Content-Type' : 'text/plain; charset=utf-8'
            });
            response.write('pong');
        }

        response.end();
    },

    createApp : function(request, response) {
        var data = '';
        // called when a new chunk of data was received
        request.addListener('data', function(chunk) {
            data += chunk;
        });

        // called when all chunks of data have been received
        request.addListener('end', function() {
            var app = JSON.parse(data);
            app.id = applicationController._appIds++;
            applicationController._applications.push(app);
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(app));
            response.end();
        });
    },

    getApp : function(request, response) {
        // Extract appId
        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('/applications/(\\w+)');
        uriRegExp.exec(pathname);
        var appId = RegExp.$1;

        var appIdFormat =new RegExp('\\d+');
        if( !appIdFormat.exec(appId) ){
            response.writeHead(400, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({
                'msg' : 'Invalid app_id: ' + appId
            }));
            response.end();
            return;
        }

        // lookup by id
        var position = applicationController._findApplicationPositionById(appId);
        if (position != -1) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(applicationController._applications[position]));
            response.end();
            return;
        } else {


            if(appId == 8820288847790802){

                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({"id":8820288847790802,"site_id":"MLM","name":"158819270 - Wix.com Mexico","description":"Wix.com MercadoPago app for Mexican users\r\n\r\n","thumbnail":null,"owner_id":158819270,"catalog_product_id":null,"item_id":null,"price":null,"currency_id":null,"need_authorization":true,"short_name":"wixmx","url":"http://apps.mercadolibre.com.mx/wixmx","callback_url":"https://www.wix.com/","sandbox_mode":true,"is_public":true,"active":true,"max_requests_per_hour":18000,"scopes":["read","preapproval","offline_access","write"],"domains":["premium.wix.com"]}));
                response.end();
                return;
            }

            if(appId == 88202888477908022){

                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({"id":8820288847790802,"site_id":"MLM","name":"158819270 - Wix.com Mexico","description":"Wix.com MercadoPago app for Mexican users\r\n\r\n","thumbnail":null,"owner_id":158819270,"catalog_product_id":null,"item_id":null,"price":null,"currency_id":null,"need_authorization":true,"short_name":"wixmx","url":"http://apps.mercadolibre.com.mx/wixmx","callback_url":"https://www.wix.com/","sandbox_mode":true,"is_public":true,"active":true,"max_requests_per_hour":18000,"scopes":["read","offline_access","write"],"domains":["premium.wix.com"]}));
                response.end();
                return;
            }

            if(appId == 963){

                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({"id":963,"site_id":"MLB","name":"Checkout-Lite","description":"Checkout lite en el site del seller","thumbnail":null,"owner_id":48799743,"catalog_product_id":null,"item_id":null,"price":null,"currency_id":null,"need_authorization":true,"short_name":"cholite","url":"http://apps.mercadolivre.com.br/cholite","callback_url":"http://checkout-frontend.mercadopago.com","sandbox_mode":true,"is_public":false,"active":true,"max_requests_per_hour":18000,"scopes":["read","write","offline_access"],"domains":[]}));
                response.end();
                return;
            }

            if(appId == 9633){

                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({"id":9633,"site_id":"MLB","name":"Checkout-Lite","description":"Checkout lite en el site del seller","thumbnail":null,"owner_id":48799743,"catalog_product_id":null,"item_id":null,"price":null,"currency_id":null,"need_authorization":true,"short_name":"cholite","url":"http://apps.mercadolivre.com.br/cholite","callback_url":"http://checkout-frontend.mercadopago.com","sandbox_mode":true,"is_public":true,"active":true,"max_requests_per_hour":18000,"scopes":["read","write","offline_access"],"domains":[]}));
                response.end();
                return;
            }

            if(appId == 6131810099787347){

                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({"id":6131810099787347,"site_id":"MLB","name":"59223537 - MercadoPago application","description":"Application for MercadoPago","thumbnail":null,"owner_id":59223537,"catalog_product_id":null,"item_id":null,"price":null,"currency_id":null,"need_authorization":true,"short_name":"mp-app-59223537","url":"http://apps.mercadolivre.com.br/mp-app-59223537","callback_url":"https://www.mercadopago.com/","sandbox_mode":true,"is_public":true,"project_id":null,"active":true,"max_requests_per_hour":18000,"scopes":["read","offline_access","write"],"domains":[]}));
                response.end();
            } else {
              response.writeHead(404, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({
                  'msg' : 'Application not found: ' + appId
              }));
              response.end();  
            }


        }
    },

    removeApp : function(request, response) {
        // Extract appId
        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('/applications/(\\w+)');
        uriRegExp.exec(pathname);
        var appId = RegExp.$1;
        // lookup by id
        var position = applicationController._findApplicationPositionById(appId);

        if (position != -1) {
            console.log('DELETE'+applicationController._applications);
            var app = applicationController._applications[position];
            applicationController._applications.splice(position, 1);
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(app));
            response.end();
        } else {
            response.writeHead(404, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({
                'msg' : 'Application not found: ' + appId
            }));
            response.end();
        }
    },

    validateCredentials: function(request, response){
        // Extract appId
        var query = url.parse(request.url, true).query;
        // lookup by id
        var position = applicationController._findApplicationPositionById(query.app_id);

        if (position != -1) {
            var app = applicationController._applications[position];
            if(query.app_secret.toLowerCase() == app.secret_key.toLowerCase()){
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({'valid':true}));
                response.end();
            }else{
                response.writeHead(400, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({
                    'msg' : 'Bad request'
                }));
                response.end();
            }
        } else {
            response.writeHead(404, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({
                'msg' : 'Application not found: ' + query.app_id
            }));
            response.end();
        }
    },

    _findApplicationPositionById : function(appId) {
        for ( var i = 0; i < applicationController._applications.length; i++) {
            var app = applicationController._applications[i];
            if (app.id == appId) {
                return i;
            }
        }
        return -1;
    },

    getScopes: function(request, response){
        jsonHandler.showOKResponse([{"id": "read_basic", "short_description": "Tu información básica", "description":"Podrá acceder a tu seudónimo, consultar los items que publicaste, conocer tus favoritos.","order": 1},
                                    {"id": "read", "short_description": "Acceso a los datos de tu cuenta", "descritpion":"Podrá acceder a tu informacion de contacto, consultar las publicaciones, preguntas y compras que realizas en el sitio.","order": 2},
                                    {"id": "write", "short_description": "Permiso para administrar tu cuenta", "description": "Podrá realizar transacciones en tu nombre.","order": 3}], response);
    }

};

exports.createApp = applicationController.createApp;
exports.getApp = applicationController.getApp;
exports.removeApp = applicationController.removeApp;
exports.validateCredentials = applicationController.validateCredentials;
exports.ping = applicationController.ping;
exports.getScopes = applicationController.getScopes;

// Mappings
urlMapping.add ([{
        pattern: '^/restclientping/$',
        action: applicationController.ping
    }, {
        pattern: '^/ping$',
        action: applicationController.ping
    }, {
        pattern: '^/applications(/)?$',
        action: {
            'POST':applicationController.createApp
        }
    }, {
        pattern: '^/applications/\\w+$',
        action: {
            'GET':applicationController.getApp,
            'DELETE':applicationController.removeApp
        }
    }, {
        pattern: '^/internal/application_credentials/?$',
        action: {
            'GET':applicationController.validateCredentials
        }
    }, {
        pattern: '^/scopes.*$',
        action: {
            'GET':applicationController.getScopes
        }
    }]);
