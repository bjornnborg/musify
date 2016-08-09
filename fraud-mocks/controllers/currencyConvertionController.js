var url = require('url');
var querystring = require("querystring");
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
//var usersController = require("./usersController");

var currencyConvertionController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
        },
        
        getConvertion : function(request, response){
            var query = url.parse(request.url).query;
            var json = querystring.parse(query);
            var convertion = resourceManager.searchResource('currencyConvertion', json.from);
            if(!convertion){
                jsonHandler.showNotFoundResponse({
                    message:"convertion not founded"
                }, response);
                return;
            }
            
            jsonHandler.showOKResponse(convertion, response);
        }
};

resourceManager.saveTemporalResource('currencyConvertion', 'ARS', -1, {"ratio":0.2252,"mercado_pago_ratio":0.2247});
resourceManager.saveTemporalResource('currencyConvertion', 'BRL', -1, {"ratio":0.5155,"mercado_pago_ratio":1});
resourceManager.saveTemporalResource('currencyConvertion', 'USD', -1, {"ratio":4.45,"mercado_pago_ratio":4.5});
resourceManager.saveTemporalResource('currencyConvertion', 'CLP', -1, {"ratio":0.0017,"mercado_pago_ratio":0.0017});


exports.getConvertion = currencyConvertionController.getConvertion;