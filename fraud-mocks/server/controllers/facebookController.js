var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var facebookController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
        },
        connect: function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            var userId = request.url.match (/\/users\/(\d+)\/facebook\/connect/)[1];

            var qs = url.parse(request.url, true).query;
            var result;
            
            if(userId == 30 ){
                result = {   
                        "user_id":userId,
                        "facebook_id":"1000000000",
                        "authorized":true,
                        "source":"OAuth"
                    };
            }
            else{
                result = {   
                    "user_id":userId,
                    "facebook_id":"1426088112",
                    "authorized":true,
                    "source":"OAuth"
                };
            }
            
            response.write(JSON.stringify(result));
            response.end();
        },
        getUser: function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            var facebookId = request.url.match (/\/facebook\/(\d+)/)[1];

            var qs = url.parse(request.url, true).query;

            var result = {
                "facebook_id": facebookId,
                "first_name": "Test",
                "username": "prueba.test",
                "last_name": "Prueba",
                "gender": "male",
                "relationship_status": "In a relationship",
                "birthday": "03/12/1984",
                "email": "testprueba@gmail.com",
                "verified": false,
                "last_update": "2012-05-22T15:30:24.012-0300",
                "significant_other": "1260300401"
            };
            
            response.write(JSON.stringify(result));
            response.end();
        },
        getFriends : function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var userId = request.url.match(/facebook\/(\d+)\/friends/)[1];

            var qs = url.parse(request.url, true).query;
            
            var result;
            if(userId == 1000000000){
                
               var a = [];
                   
               for(var i=0;i < 200;i++){
                   a.push({
                                "facebook_id" : "662196968"+i,
                                "user_id" : 11234 +i
                            });
               }    
               
               result = {
                       "facebook_id" : "1426088112",
                       "friends" : a
               }
                
            }
            else{
            result = {
                "facebook_id" : "1426088112",
                "friends" : [ {
                    "facebook_id" : "662196968",
                    "user_id" : 11234
                }, {
                    "facebook_id" : "764413816",
                    "user_id" : 2332
                }, {
                    "facebook_id" : "1246807947",
                    "user_id" : null
                }, {
                    "facebook_id" : "1295082955",
                    "user_id" : null
                }, {
                    "facebook_id" : "100000252187639",
                    "user_id" : 112134
                } ]
            };
            }
            response.write(JSON.stringify(result));
            response.end();
        }
};

exports.connect = facebookController.connect;
exports.getUser = facebookController.getUser;
exports.ping = facebookController.ping;
exports.getFriends = facebookController.getFriends;

// Mappings
urlMapping.add ([{
        pattern: '^/facebook/\\d+$',
        action: {
            'GET':facebookController.getUser
        }
    },{
        pattern: '^/users/\\d+/facebook/connect',
        action: {
            'GET':facebookController.connect
        }
    },{
        pattern: '^/facebook/\\d+/friends',
        action: {
            'GET':facebookController.getFriends
        }
    }]);

