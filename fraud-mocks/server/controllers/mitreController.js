var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");
var msgId = 1;
var count = 0;
var mitreController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
    }, 

    post : function(request, response){
			response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"mitre_response":"<EvalResponse> <FolioPrev>0000000001</FolioPrev> <ClientID>0002</ClientID> <Reference>0123456789</Reference> <EvalIndicator>1</EvalIndicator> <DateTime>01/01/2014 09:00:01</DateTime> <Score>19</Score> <CdResponse>2</CdResponse> <NbResponse>success</NbResponse> </EvalResponse>"}));
            response.end();        
	}

  
};

exports.ping = mitreController.ping;
exports.post = mitreController.post;

// Mappings
urlMapping.add ([
    {
        pattern: '^/OnlinePayments/ping',
        action: {
            'GET': mitreController.ping
        }
    },{
        pattern: '^/OnlinePayments/mitre',
        action: {
            'POST': mitreController.post
        }
    }

    ////spnscoring/scoring
]);