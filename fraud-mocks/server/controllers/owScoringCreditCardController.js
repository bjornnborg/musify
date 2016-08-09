var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var owScoringCreditCardController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"CreditCardService: OK!"}));
            response.end();        
        },

        get_payment_version_info: function(request, response) {
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/jm/services/scoring/credit_card/get_payment_version_info/(\\w+)');
            uriRegExp.exec(pathname);
            var paymentId = RegExp.$1;

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"payment_id":paymentId,"hash_number_tc":"u2rMlNNcEpMdche3ZxlInw==", "cc_owner_name": "John Doe", "doc_type": "RUT", "doc_number": "76371275-3"}));
            response.end();        
        }
};

exports.ping = owScoringCreditCardController.ping;
exports.get_payment_version_info = owScoringCreditCardController.get_payment_version_info
// Mappings
urlMapping.add ([{
        pattern: '^/jm/services/scoring/credit_card/jalive',
        action: {
            'GET':owScoringCreditCardController.ping
        }
    }, {
        pattern: '^/jm/services/scoring/credit_card/get_payment_version_info/(\\w+)',
        action: {
            'GET':owScoringCreditCardController.get_payment_version_info
        }
    } ]);
