var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var sessionDataController = {
        createSessionData : function(request, response){
            jsonHandler.getContent(request, function(sessionDataArgs){
                var sessionDataKey = new Date().getTime() + Math.floor(Math.random()*100000) + '';
                
                resourceManager.saveTemporalResource(
                        'session_data', 
                        sessionDataKey,
                        sessionDataArgs.expires_in_seconds, 
                        {session_data:sessionDataArgs.data}
                );
                
                jsonHandler.showOKResponse({session_data_id:sessionDataKey}, response);
            });
        },
        getSessionData : function(request, response){
            var sessionDataKey = getSessionDataKey(request);
            resourceManager.getResource('session_data', sessionDataKey, response);
        },
        deleteSessionData : function(request, response){
            var sessionDataKey = getSessionDataKey(request);
            resourceManager.deleteResource('session_data', sessionDataKey, response);
        },
	isAlive : function(request, response) {
		jsonHandler.showOKResponse({"status":"OK"}, response);
	}
};

function getSessionDataKey(request){
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/internal/session_data/(.*)');
    uriRegExp.exec(pathname);
    var sessionDataKey = RegExp.$1;
    
    return sessionDataKey;
}

exports.createSessionData = sessionDataController.createSessionData;
exports.getSessionData = sessionDataController.getSessionData;
exports.deleteSessionData = sessionDataController.deleteSessionData;

// Mappings
urlMapping.add ([{
        pattern: '^/internal/session_data.*$',
        action: {
            'POST':sessionDataController.createSessionData,
            'GET':sessionDataController.getSessionData,
            'DELETE':sessionDataController.deleteSessionData
        }
    },{
	pattern: '^/internal/authentication_attempt/isAlive',
        action: {
            'GET':sessionDataController.isAlive,
        }
}]);


