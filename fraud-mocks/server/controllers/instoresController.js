var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");


var instoresController = {
        
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"status":"withdraw-api is UP [version: 0.0.21]"}));
            response.end();        
        },
        getWhitelist: function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/record/(\\d+)');
            uriRegExp.exec(pathname);
                
            var userId = RegExp.$1;
            
            var result = null;
            
            if(userId == 117196407){
                 result = {"result":
                {"id":159201484, "status":"deactive", "insert_date":"2014-05-20T16:11:24.000-04:00", "mode":"callcenter"}
            };
            }
            else{
             result = {"result":
                            {"id":159201484, "status":"active", "insert_date":"2014-05-20T16:11:24.000-04:00", "mode":"callcenter","is_recurring":true}
                        };
            }

            response.write(JSON.stringify(result));
            response.end();
        }
};

exports.getWhitelist = instoresController.getWhitelist;
exports.ping = instoresController.ping;

//Mappings
urlMapping.add ([{
     pattern: '^/instores/whitelist/(\\d+)',//limpia los recursos alamacenados en memoria de fraudlist
     action: {
         'GET':instoresController.getWhitelist          
    }       
 },{
     pattern: '^/instores/ping',//limpia los recursos alamacenados en memoria de fraudlist
     action: {
         'GET':instoresController.ping          
    }       
 }]);

