var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var moderationsController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
        },

        putFilters: function(request, response){
            
            jsonHandler.getContent(request, function(messageInfo) { 
                var pathname = url.parse(request.url).pathname;
                var uriRegExp = new RegExp('/moderations/certificates/(\\w+-\\w+-\\w+-\\w+-\\w+-\\w+)');
                uriRegExp.exec(pathname);
                var messageId = RegExp.$1;
                
                console.log("Guardamos resource messageId: " + messageId);
                
                resourceManager.saveTemporalResource('messages', messageId, 30, messageInfo);

                response.writeHead(201, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.end();
            });
                    
        },

        getFilters: function(request, response){
            
                var pathname = url.parse(request.url).pathname;
                var uriRegExp = new RegExp('/moderations/certificates/(\\w+-\\w+-\\w+-\\w+-\\w+-\\w+)');
                uriRegExp.exec(pathname);
                var messageId = RegExp.$1;
                
                var messageInfo = resourceManager.searchResource('messages', messageId);
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify(messageInfo));
                response.end();
                    
        },

        
        getCertificate: function(request, response){
            
            response.writeHead(200, {
                 'Content-Type' : 'application/json; charset=utf-8'
            });
            
            response.write(JSON.stringify({'result':'APPROVED'}));
            response.end();

        }
};

exports.ping = moderationsController.ping;
exports.putFilters = moderationsController.putFilters;
exports.getFilters = moderationsController.getFilters;
exports.getCertificate = moderationsController.getCertificate;

// Mappings
urlMapping.add ([{
        pattern: '^/moderations/ping',
        action: {
            'GET': moderationsController.ping
        }
    },{
        pattern: '^/moderations/certificates/.*/filters',
        action: {
            'POST': moderationsController.putFilters,
            'GET': moderationsController.getFilters
        }
    },{
        pattern: '^/moderations/certificates/.*',
        action: {
            'GET': moderationsController.getCertificate
        }
    }]);
