var url = require('url');
var querystring = require('querystring');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var mantikaController = {

        post : function(request, response) {
                
                jsonHandler.getContent(request, function(topicsArgs){               
                    
                    console.log("JSON: " + JSON.stringify(topicsArgs));
                    
                    var transaction = topicsArgs.transaction;
                    
                    console.log("transaction: " + transaction);
                    
                    
                    if(transaction == null){
                        jsonHandler.showOKResponse({"msg":{"id":123456, "recommendation":"approve", "date": "13-05-20 12:12:12",  "details":{"operation":"fields missing","sender_questions":"fields missing","ivs":"fields missing"} }}, response);
                    }
                    else{    
                        var sender = transaction.sender_id;
                        
                        console.log("sender: " + sender);
    
                        if(sender == "980474810"){
                            jsonHandler.showOKResponse({"msg":{"id":123456, "recommendation":"approve", "date": "13-05-20 12:12:12",  "details":{"operation":"fields missing","sender_questions":"fields missing","ivs":"fields missing"} }}, response);
                        }
                        else if(sender == "980474811"){
                            jsonHandler.showOKResponse({"msg":{"id":123456, "recommendation":"HIGH", "date": "13-05-20 12:12:12",  "details":{"score":0.5,"operation":"fields missing","sender_questions":"fields missing","ivs":"fields missing"} }}, response);
                        }
                        else if(sender == "980474812"){
                            jsonHandler.showOKResponse({"msg":{"id":123456, "recommendation":"MIDINH", "date": "13-05-20 12:12:12",  "details":{"operation":"fields missing","sender_questions":"fields missing","ivs":"fields missing"} }}, response);
                        }

                        else if(sender == "980474814" || sender == "70121601" || sender == "980474890"){
                            jsonHandler.showServiceUnavailableResponse({"msg":{"details":"error"}}, response);
                        }
                        else{
                            jsonHandler.showOKResponse({"msg":{"id":123456, "recommendation":"review", "date": "13-05-20 12:12:12",  "details":{"score":0.2,"operation":"fields missing","sender_questions":"fields missing","ivs":"fields missing"} }}, response);
                        }
                    }
                });
                

        },
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write("pong");
            response.end();        
        }

}
;




exports.mantikaController = mantikaController.post;

// Mappings
urlMapping.add ([
        {
                pattern: '^/internal/mantika/fraud/score/.*',
                action: {
                        'POST':mantikaController.post
                }
        },
        {
            pattern: '^/internal/mantika/fraud/ping',
            action: {
                    'GET':mantikaController.ping
            }
    }
       ]);


