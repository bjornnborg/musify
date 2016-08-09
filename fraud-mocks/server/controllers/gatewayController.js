var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var gatewayController = {

  getCardTokenInfo : function(request, response){

    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('^/v1/gateway/card_tokens/(.*)');
    uriRegExp.exec(pathname);
    var cardTokenId = RegExp.$1;

    if (cardTokenId == "ffff0000000000000000000000000000" ||
        cardTokenId == "00000000000000000000000000000400") {

      var info = {
        "id": cardTokenId,
        "public_key": "c7254ecb-0b68-405d-8343-aa91a121296d",
        "security_code_id": null,
        "card_number_id": "D3B50F6EAE6218AFC497BEA0475E9860C1AEC76F",
        "card_id": null,
        "expiration_month": 4,
        "expiration_year": 2026,
        "cardholder": {
          "name": "Soligo Test",
          "identification": {
            "type": "RIF-J",
            "number": "12121622"
          }
        },
        "client_id": 5171407206581142,
        "status": "active",
        "luhn_validation": true,
        "live_mode": null,
        "card_number_length": 16,
        "security_code_length": null,
        "site_id": "MLV",
        "transaction_id": null,
        "card_present_id": null,
        "first_six_digits": "518605",
        "last_four_digits": "0568",
        "date_created": "2015-02-27T14:05:11.000-04:00",
        "date_last_updated": "2015-02-27T14:19:40.000-04:00",
        "date_used": null,
        "date_due": "2015-03-07T14:05:11.000-04:00"
      }
      jsonHandler.showOKResponse(info, response);

    } else {
      jsonHandler.showNotFoundResponse({'message':"CardTokenId noy found"}, response);
    }
  }
};

exports.getCardTokenInfo = gatewayController.getCardTokenInfo;
exports.ping = gatewayController.ping;

// Mappings
urlMapping.add ([{
    pattern: '^/v1/gateway/card_tokens/(.*)',
    action: {
      'GET':gatewayController.getCardTokenInfo
    }
  }]);