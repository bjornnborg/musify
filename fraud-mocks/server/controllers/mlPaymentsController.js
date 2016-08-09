var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");


var mlPaymentsController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
        },
        getMLPayment : function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var userId = request.url.match(/ml_payments\/(\d+)/)[1];

            var qs = url.parse(request.url, true).query;

            var result; 
            
            if(userId == 1234567890){
                result = {
                        "currency_id": "VEF",
                        "reason": null,
                        "status": "accredited",
                        "date_created": "2012-04-27T19:13:16.000-0400",
                        "number": "WMP101746986",
                        "voided_date": null,
                        "amount": 150,
                        "id": 172541733,
                        "rejected_date": "2012-05-29T03:09:37.000-0400",
                        "accredited_date": null,
                        "ml_payment_method_id": "MLVWBP",
                        "user_id": 85139468,
                        "payment_id": 95213541,
                        "comment": null,
                        "pay_reference": null
                      };
            }
            else{
                result = {
                    "currency_id": "VEF",
                    "reason": null,
                    "status": "rejected",
                    "date_created": "2012-04-27T19:13:16.000-0400",
                    "number": "WMP101746986",
                    "voided_date": null,
                    "amount": 150,
                    "id": 172541733,
                    "rejected_date": "2012-05-29T03:09:37.000-0400",
                    "accredited_date": null,
                    "ml_payment_method_id": "MLVWBP",
                    "user_id": 85139468,
                    "payment_id": 95213541,
                    "comment": null,
                    "pay_reference": null
                  };
            }
            response.write(JSON.stringify(result));
            response.end();
        }
};

exports.getMLPayment = mlPaymentsController.getMLPayment;
exports.ping = mlPaymentsController.ping;

// Mappings
urlMapping.add ([{
        pattern: '^/ml_payments/\\d+$',
        action: {
            'GET':mlPaymentsController.getMLPayment
        }
    }]);
