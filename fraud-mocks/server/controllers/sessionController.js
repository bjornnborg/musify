var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var sessionController = {
        createSecureSession : function(request, response){
            createSession(request, response, true);
        },
        createLegacySession : function(request, response){
            createSession(request, response, false);
        },
        getSession : function(request, response){
            var sessionId = getSessionId(request);
            resourceManager.getResource('session', sessionId, response);
        },
        deleteSession : function(request, response){
            var sessionId = getSessionId(request);
            var session = resourceManager.searchResource('session', sessionId);

            if(session && !session.operator_id && session.operator_id != ""){
                resourceManager.deleteResource('users_session_list', session.user_id, response);
            }else{
                resourceManager.deleteResource('operators_session_list', session.operator_id, response);
            }
            
            var relatedSessionResources = resourceManager.getResourcesByType(sessionId);
            
            for(rs in relatedSessionResources){
                resourceManager.deleteResource('session', relatedSessionResources[rs].value.session_key, response);
            };
            
            resourceManager.deleteResource('session', sessionId, response);
        },
        getUserSessions: function(request, response){
            var userId = getUserId(request);
            resourceManager.getResource('users_session_list', userId, response);
        },
        getOperatorSessions: function(request, response){
            var operatorId = getOperatorId(request);
            resourceManager.getResource('operators_session_list', operatorId, response);
        },
        addRelatedSession: function (request, response){
            var mainSessionId = getMainSessionId(request);
            jsonHandler.getContent(request, function(relatedSession){
                resourceManager.saveResource(mainSessionId, relatedSession);    
            });
            jsonHandler.showOKResponse({msg:'ok'}, response);
        },
        getRelatedSessions:function (request, response){
            var mainSessionId = getMainSessionId(request);
            var relatedSessions = [];
            var relatedSessionResources = resourceManager.getResourcesByType(mainSessionId);
            
            for(rs in relatedSessionResources){
                relatedSessions.push(relatedSessionResources[rs].value);
            };
            
            jsonHandler.showOKResponse(relatedSessions, response);
        },
        purgeSessions:function(request, response){
            console.log("PURGE!");
            request.addListener('end', function() {
                response.writeHead(200, {
                    'Content-Type' : 'text/plain; charset=utf-8'
                });
                response.write("purged");
                response.end();
            });
        }
};

function createSession(request, response, secure){
    jsonHandler.getContent(request, function(sessionArgs){
        var secondsToLive = 3*60*60;
        var expirationDate = new Date();
        expirationDate.setSeconds(expirationDate.getSeconds() + secondsToLive);
        
        var session = {
                creation_date:getCurrentDateToString(),
                scopes:sessionArgs.scopes?sessionArgs.scopes:["read","write"],
                expire_date:getDateToString(expirationDate),
                operator_id:sessionArgs.operator_id?sessionArgs.operator_id:null,
                site_id:sessionArgs.site_id,
                user_id:sessionArgs.user_id
        };
        
        var sessionKey = (secure?'ghy-':'') + 'mockSession' + new Date().getTime() + '-' + sessionArgs.user_id;

        resourceManager.saveTemporalResource('session', sessionKey, secondsToLive, session);
        appendToSessionList(sessionArgs, sessionKey, secondsToLive);
       
        jsonHandler.showOKResponse({session_key:sessionKey}, response);
    });
}

function appendToSessionList(sessionArgs, sessionKey, secondsToLive){
    var operatorId = sessionArgs.operator_id;
    if(operatorId && operatorId != 0){
        var operatorSessions = resourceManager.searchResource('operators_session_list', operatorId);
        if(operatorSessions){
            operatorSessions.push(sessionKey);
        }else{
            operatorSessions = [sessionKey];
        }
        resourceManager.saveTemporalResource('operators_session_list', operatorId, secondsToLive, operatorSessions);
    }else{
        var userSessions = resourceManager.searchResource('users_session_list', sessionArgs.user_id);
        if(userSessions){
            userSessions.push(sessionKey);
        }else{
            userSessions = [sessionKey];
        }
        resourceManager.saveTemporalResource('users_session_list', sessionArgs.user_id, secondsToLive, userSessions);
    }
}

function getSessionId(request){
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/auth/user_session/(.*)');
    uriRegExp.exec(pathname);
    var sessionId = RegExp.$1;
    return sessionId;
}

function getUserId(request){
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/auth/users/(.*)/sessions');
    uriRegExp.exec(pathname);
    var userId = RegExp.$1;
    return userId;
}

function getOperatorId(request){
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/auth/users/.*/operators/(.*)/sessions');
    uriRegExp.exec(pathname);
    var opertorId = RegExp.$1;
    return opertorId;
}

function getMainSessionId(request){
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/internal/user_session/(.+)/related_sessions');
    uriRegExp.exec(pathname);
    return RegExp.$1;
}

function getCurrentDateToString(){
    return getDateToString(new Date());
}

function getDateToString(date){
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay()
        + 'T' + date.getHours()+':'+date.getMinutes()+':00.000-04:00';
}

exports.createSecureSession = sessionController.createSecureSession;
exports.createLegacySession = sessionController.createLegacySession;
exports.getSession = sessionController.getSession;
exports.deleteSession = sessionController.deleteSession;
exports.getUserSessions = sessionController.getUserSessions;
exports.getOperatorSessions = sessionController.getOperatorSessions;
exports.getRelatedSessions = sessionController.getRelatedSessions;
exports.addRelatedSession = sessionController.addRelatedSession;
exports.purgeSessions = sessionController.purgeSessions;

// Mappings
urlMapping.add ([{
        pattern: '^/auth/user_session.*$',
        action: {
            'POST':sessionController.createSecureSession,
            'GET':sessionController.getSession,
            'DELETE':sessionController.deleteSession,
            'PURGE':sessionController.purgeSessions
        }
    }, {
        pattern: '^/internal/user_session/legacy(/)?$',
        action: {
            'POST':sessionController.createLegacySession
        }
    }, {
        pattern: '^/auth/users/.*/operators/.*/sessions/?$',
        action: {
            'GET':sessionController.getOperatorSessions
        }
    }, {
        pattern: '^/auth/users/.*/sessions/?$',
        action: {
            'GET':sessionController.getUserSessions
        }
    }, {
        pattern: '^/internal/user_session/(.+)/related_sessions/?$',
        action: {
            'GET':sessionController.getRelatedSessions,
            'PUT':sessionController.addRelatedSession
        }
    }]);