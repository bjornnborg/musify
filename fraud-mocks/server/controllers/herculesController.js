var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var herculesController = {
        
        jalive : function(request, response) {
            response.writeHead(200, {
                    'Content-Type' : 'text/plain; charset=utf-8'
            });
            response.write("pong");
            response.end();        
        },

        ups: function(request, response) {
            response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"Agregado a blacklist!"}));
            response.end();        
        },
        put: function(request, response) {
            response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"Case Nexted!"}));
            response.end();        
        },

};

exports.jalive = herculesController.jalive;
exports.ups = herculesController.ups
exports.put = herculesController.put

// Mappings
urlMapping.add ([
    {
        pattern: '^/jm/services/hercules/jalive',
        action: {
            'GET':herculesController.jalive
        }
    },{
        pattern: '^/jm/services/hercules/.*/ups/scoring/.*',
        action: {
            'POST':herculesController.ups
        }
    }
    ,{
        pattern: '^/fraud/hercules/case/multiscoring/.*',
        action: {
            'PUT':herculesController.put
        }
    }
]);
