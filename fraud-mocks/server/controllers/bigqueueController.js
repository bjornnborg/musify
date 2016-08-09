var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");
var msgId = 1;
var count = 0;
var bigqueueController = {

        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
        },

        createTopic : function(request, response){
            jsonHandler.getContent(request, function(topicsArgs){
                var keyId = new Date().getTime() + Math.floor(Math.random()*100000) + '';
                
                console.log("topic: " + JSON.stringify(topicsArgs));

                resourceManager.saveTemporalResource(
                        'topics', 
                        topicsArgs.name,
                        -1, 
                        {name:topicsArgs.name}
                );
                
                jsonHandler.showOKResponse({msg:topicsArgs.name}, response);
            }); 
        },

        getTopic : function(request, response){
            var topic = getTopicKey(request);
            console.log("get topic: " + topic);
            if (topic != "") {
                 resourceManager.getResource('topics', topic, response);
            } else {
                jsonHandler.showOKResponse(["scoring"], response);  
            }
            
        },

        getConsumer : function(request, response){
            jsonHandler.showOKResponse(["scoring_consumer"], response); 
            
        },

        createMessage : function(request, response){
            jsonHandler.getContent(request, function(sessionDataArgs){
                console.log("messages: " + JSON.stringify(sessionDataArgs));
                var topic = sessionDataArgs.topics[0];
                var msgs = resourceManager.searchResource('messages', topic);
                if (msgs == null) {
                    msgs = new Array();
                }

                var msg = {msg:sessionDataArgs.msg, id:msgId++};
                
                msgs.push(msg);

                console.log("messages push: " + JSON.stringify(sessionDataArgs.msg));

                resourceManager.saveTemporalResource(
                        'messages', 
                        topic,
                        -1, 
                        msgs
                );
                
                jsonHandler.showResponse({"msg":"ok"}, "201", response);  

            });
        },
        getMessage : function(request, response){
            /*
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();   */
            var topic = getTopicKey(request);
            console.log("getMessage from topic " + topic);
            var msgs = resourceManager.searchResource('messages', topic);
            console.log("getMessage-Msgs " + msgs);
            if (msgs == null) {
                response.writeHead(500, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({"error":"not messges"}));
                response.end();
            } else {
                if (msgs.length == 0) {
                    jsonHandler.showNotFoundResponse({"error":"not found"}, response);
                } else {
                    count = count % msgs.length;
                
                    var msg = msgs[count];

                    jsonHandler.showOKResponse(msg, response);    

                    count = count + 1;
                }
            }
            
        },

        delMessage : function(request, response){
            var topic = getTopicKey(request);
            console.log("getMessage: " + topic);
            var msgs = resourceManager.searchResource('messages', topic);
            console.log("getMessage-Msgs " + msgs);
            if (msgs == null) {
                response.writeHead(500, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({"error":"not messges"}));
                response.end();
            } else {
                var msg;
                var msgId = getMessageId(request);

                if (msgId == null) {
                    response.writeHead(400, {
                        'Content-Type' : 'application/json; charset=utf-8'
                    });
                    response.write(JSON.stringify({"error":"Not msgId found"}));
                    response.end();
                    return;
                }


                console.log("MsgsId: " + msgId);

                var i = 0;
                for (i = 0; i < msgs.length; i++) {
                     console.log("Compare(" + msgId + ", " + msgs[i].id +")");
                     if (msgs[i].id == msgId){
                        msg = msgs[i];
                        msgs.splice(i, 1);
                        break;
                     }
                }


                console.log("getMessage-The Msg: " + msg);
                if (msg != null) {
                    jsonHandler.showOKResponse(msg, response);
                }  else {
                    jsonHandler.showInternalServerErrorResponse({"error": "no es tan dramatico"},response);
                }    
            }
        },

        cleanMessages: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            resourceManager.cleanResources('messages', response);

            console.log("Bigqueue: all messages cleaned");
        } 
};

function getTopicKey(request){
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('^/topics/(\\w*)');
    uriRegExp.exec(pathname);
    var topic = RegExp.$1;
    
    return topic;
}

function getMessageId(request){
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('^/topics/(\\w*)/consumers/(\\w*)/messages/(\\w+)');
    uriRegExp.exec(pathname);
    var id = RegExp.$3;
    
    return id;
}

/******** Save topics ******/
resourceManager.saveResource('topics', {"id":"test_items_topic", "name":"test_items_topic"});
resourceManager.saveResource('topics', {"id":"scoring", "name":"scoring"});
resourceManager.saveResource('topics', {"id":"test_users_topic", "name":"test_users_topic"});
resourceManager.saveResource('topics', {"id": "test_payment_history_topic", "name":"test_payment_history_topic"})
/***************************/



exports.createTopic = bigqueueController.createTopic;
exports.createMessage = bigqueueController.createMessage;
exports.getMessage = bigqueueController.getMessage;
exports.getTopic = bigqueueController.getTopic;
exports.getConsumer = bigqueueController.getConsumer;
exports.delMessage= bigqueueController.delMessage;
exports.ping = bigqueueController.ping;
exports.cleanMessages = bigqueueController.cleanMessages;

// Mappings
urlMapping.add ([
    {
        pattern: '^/topics/(\\w*)/consumers/(\\w*)/messages',
        action: {
            'GET': bigqueueController.getMessage,
            'DELETE' : bigqueueController.delMessage
        }
    },
    {
        pattern: '^/topics/(\\w*)/consumers',
        action: {
            'POST': bigqueueController.createTopic,
            'GET' : bigqueueController.getConsumer
        }
    },{
        pattern: '^/topics/(\\w*)$',
        action: {
            'POST': bigqueueController.createTopic,
            'GET' : bigqueueController.getTopic
        }
    },{
       pattern: '^/bigqueue/messages/deleteall',
        action: {
            'GET': bigqueueController.cleanMessages
        }
    },{
        pattern: '^/messages',
        action: {
            'POST': bigqueueController.createMessage
        }
    },{
        pattern: '^/bigqueue/ping',
        action: {
            'GET': bigqueueController.ping
        }
    },{
        pattern: '^/bigqueue/messages',
        action: {
            'POST': bigqueueController.createMessage
        } 
    }
    ,{
        pattern: '^/fraud/consumer/ping',
        action: {
            'GET': bigqueueController.ping
        } 
    }
    
    
    
    

    ///
]);
