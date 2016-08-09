var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");


var riskController = {
        
        echo: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
    }, 

    postRisk : function(request, response){
        
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });
        
        var result = []; 
        
        result = {"risk_id":335,"status":"rejected","remedies_required":["contacto"]};

          response.write(JSON.stringify(result));
          response.end();
        
        
   },

   postWithdraw : function(request, response){
        
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });
        
        var result = []; 
        
        result = {"risk_id":781,"scoring_id":102078706403,"status":"approved","status_detail":"approved","remedies_required":[]};

        response.write(JSON.stringify(result));
        response.end();
        
        
   }

  
};

exports.echo = riskController.echo;
exports.putRisk = riskController.putRisk;

urlMapping.add ([
                 {
                     pattern: '^/risk_analysis/ping',
                     action: {
                         'GET': riskController.echo
                     }
                 },{
                     pattern: '^/risk_analysis/payments',
                     action: {
                         'POST': riskController.postRisk
                     }
                 },{
                    pattern: '^/risk_analysis/withdraw',
                     action: {
                         'POST': riskController.postWithdraw
                     }
                 }
             ]);