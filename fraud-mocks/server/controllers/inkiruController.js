var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var inkiruController = {
             
        resp: function(request, response) {
            
            jsonHandler.getContent(request, function(inkiru){

                var senderId = inkiru.detail.buyer.id ;

                if (senderId != 65655663) {
                    response.writeHead(200, {
                        'Content-Type' : 'application/json; charset=utf-8'
                    });
                    response.write(JSON.stringify({"recommendation": {"score": 14,"segment": 1,"recommendation": "REVIEW","add_vars": {"confidence": 55}},"id":11223344}));
                    response.end();               
                } else {
                    response.writeHead(400, {
                        'Content-Type' : 'application/json; charset=utf-8'
                    });
                    response.write(JSON.stringify({"message":"Bad Request"}));
                    response.end();
                }                
            });
        }        
};

exports.resp = inkiruController.resp;

// Mappings
urlMapping.add ([
    {
        pattern: '^/inkiru/message',
        action: {
            'POST': inkiruController.resp
        }
    }
]);
