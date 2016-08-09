var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var validationServiceController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
        },
        getValidationStatus : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            var userId = request.url.match (/\/account\/validation\/users\/(\d+)/)[1];

            var qs = url.parse(request.url, true).query;

            var result = {
                            user_id:userId,
                            client: {
                                id: qs["client_id"]
                            },
                            status:"REQUIRED", //REQUIRED, RESTRICTED, NOT_NEEDED, APPROVED
                            flows:{
                                facebook:{
                                    status:"AVAILABLE", //AVAILABLE, RESTRICTED
                                    max_retries:2,
                                    retries:0
                                },
                                wallet:{
                                    status:"AVAILABLE", //AVAILABLE, PENDING, RESTRICTED
                                    max_retries:2,
                                    retries:0
                                }
                            }
                        };
            
            response.write(JSON.stringify(result));
            response.end();
        },
        postValidation : function(request, response){
            jsonHandler.getContent(request, function(data){
                var qs = url.parse(request.url, true).query;
                var resp =  {
                                id: randomUUID (),
                                caller: qs.caller
                            }

                jsonHandler.showResponse(resp, 201, response);
            });
        },
        putValidation : function(request, response){
            jsonHandler.getContent(request, function(data){
                var qs = url.parse(request.url, true).query;
                var resp =  {"status":"REJECTED"};

                console.log(JSON.stringify (data, null, 4));

                //jsonHandler.showResponse({"response":{"message":"Invalid Flow Id = 123456","error":"bad_request","status":400,"cause":[]},"status":400}, 400, response);
                jsonHandler.showResponse(resp, 200, response);
            });
        }
};

function randomUUID() {
  var s = [], itoh = '0123456789ABCDEF';
 
  // Make array of random hex digits. The UUID only has 32 digits in it, but we
  // allocate an extra items to make room for the '-'s we'll be inserting.
  for (var i = 0; i <36; i++) s[i] = Math.floor(Math.random()*0x10);
 
  // Conform to RFC-4122, section 4.4
  s[14] = 4;  // Set 4 high bits of time_high field to version
  s[19] = (s[19] & 0x3) | 0x8;  // Specify 2 high bits of clock sequence
 
  // Convert to hex chars
  for (var i = 0; i <36; i++) s[i] = itoh[s[i]];
 
  // Insert '-'s
  s[8] = s[13] = s[18] = s[23] = '-';
 
  return s.join('');
}

exports.getValidationStatus = validationServiceController.getValidationStatus;
exports.postValidation = validationServiceController.postValidation;
exports.putValidation = validationServiceController.putValidation;
exports.ping = validationServiceController.ping;

// Mappings
urlMapping.add ([{
        pattern: '^/account/validation/ping',
        action: {
            'GET':validationServiceController.ping
        }
    },{
        pattern: '^/account/validation/users/\\d+$',
        action: {
            'GET':validationServiceController.getValidationStatus,
            'POST':validationServiceController.postValidation,
            'PUT':validationServiceController.putValidation
        }
    },{
        pattern: '^/account/validation/flow/.+$',
        action: {
            'PUT':validationServiceController.putValidation
        }
    }]);
