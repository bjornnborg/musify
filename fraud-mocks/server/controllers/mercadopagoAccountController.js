var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");


var mercadopagoAccountController = {
        
    echo: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
    }, 

    getMovements : function(request, response){
        
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        response.write(JSON.stringify({"paging":{"total":2,"limit":100,"offset":0},"results":[{"id":7117068765,"user_id":103400,"type":"income","detail":"gift_card","amount":35.62,"currency_id":"ARS","reference_id":1769540845,"site_id":"MLA","client_id":0,"financial_entity":null,"status":"available","label":[],"date_created":"2016-01-04T16:07:42.000-04:00","date_released":null,"balanced_amount":50,"original_move_id":null,"date_in_millis":null},{"id":7117068767,"user_id":103400,"type":"income","detail":"gift_card","amount":50,"currency_id":"ARS","reference_id":1769540845,"site_id":"MLA","client_id":0,"financial_entity":null,"status":"available","label":[],"date_created":"2016-01-14T16:07:42.000-04:00","date_released":null,"balanced_amount":50,"original_move_id":null,"date_in_millis":null}]}));
        response.end();
        return;
   
        
        
   }

  
};

exports.echo = mercadopagoAccountController.echo;
exports.getMovements = mercadopagoAccountController.getMovements;

urlMapping.add ([
                 {
                     pattern: '^/mercadopago_account/movements/ping',
                     action: {
                         'GET': mercadopagoAccountController.echo
                     }
                 },{
                     pattern: '^/mercadopago_account/movements/search',
                     action: {
                         'GET': mercadopagoAccountController.getMovements
                     }
                 }
             ]);