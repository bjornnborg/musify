var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var rfcController = {

        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(["pong"]));
            response.end();        
        },

        hasPreviousRFC : function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var data = url.parse(request.url, true).query;

            if (data["user_id"] == 123456 && data["card_number_id"] == "0D55E918DC432DD4DC81E04CDF4F84141DCF1CB9") {

                response.write(JSON.stringify({
                    "has_charged_rfc" : true
                }));
                response.end();
            }
            else if (data["user_id"] == 123456 && data["card_number_id"] == "1D55E918DC432DD4DC81E04CDF4F84141DCF1CB9") {

                response.write(JSON.stringify({
                    "has_charged_rfc" : false
                }));
                response.end();
            }
            else if (data["user_id"] == 123457 && data["card_number_id"] == "2D55E918DC432DD4DC81E04CDF4F84141DCF1CB9") {

                response.write(JSON.stringify({
                    "has_charged_rfc" : false
                }));
                response.end();
            } else if (data["user_id"] == 123457 && data["card_number_id"] == "3D55E918DC432DD4DC81E04CDF4F84141DCF1CB9") {

                response.write(JSON.stringify({
                    "has_charged_rfc" : true
                }));
                response.end();
            } else if (data["user_id"] == 35789612 && data["card_number_id"] == "62A3AFB65D43871E7E72997D620AB28559E1C5FB") {

                response.write(JSON.stringify({
                    "has_charged_rfc" : true
                }));
                response.end();
            } else {
                response.write(JSON.stringify({}));
                response.end();
            }
        }

};


exports.ping = rfcController.ping;
exports.getKeystroke = rfcController.getKeystroke;


// Mappings
urlMapping.add (
    [
        {
            pattern: '^/remedies/rfc/ping',
            action: {
                'GET':rfcController.ping
            }
        },
        {
            pattern: '^/remedies/rfc/searchCharged.*',
            action: {
                'GET':rfcController.hasPreviousRFC
            }
        }    
    ]);