var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var keystrokeController = {

        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(["pong"]));
            response.end();        
        },


        getKeystroke : function(request, response) {
            var keystrokeId = getKeystrokeId(request);
            if (keystrokeId == null) {
                jsonHandler.showBadRequestResponse({'message':"bad request"}, response);
            } else {
                
                response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            var result = {"id":"bFalb1399314179007rFPOX","card_holder_name":{"time":1399661000382,"autocomplete":true,"shortcut":false},"card_billing_address":{"time":1399661000310,"autocomplete":false,"shortcut":true},"card_expiration_date":{"time":1399661000311,"autocomplete":true,"shortcut":false},"card_security_code":{"time":1399661000312,"autocomplete":false,"shortcut":true},"card_number":{"time":1399661000313,"autocomplete":true,"shortcut":false},"card_holder_identification_value":{"time":1399661000314,"autocomplete":false,"shortcut":false},"card_holder_identification_type":{"time":1399661000315,"autocomplete":true,"shortcut":true},"user_id":24253452}
                

            response.write(JSON.stringify(result));
            response.end();

            }
        }

};


function getKeystrokeId(request) {
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/fraud/keystroke/(.*)');
    uriRegExp.exec(pathname);
    var keystrokeId = RegExp.$1;
    return keystrokeId;
}


exports.ping = keystrokeController.ping;
exports.getKeystroke = keystrokeController.getKeystroke;


// Mappings
urlMapping.add (
    [
        {
            pattern: '^/fraud/keystroke/ping',
            action: {
                'GET':keystrokeController.ping
            }
        },
        {
            pattern: '^/fraud/keystroke/(.*)',
            action: {
                'GET':keystrokeController.getKeystroke
            }
        }    
    ]);