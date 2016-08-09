var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");


var spoofedUserController = {
        
        echo: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
    }, 

    getspoofed : function(request, response){
        
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('/internal/fake_sites/spoofed_user/(\\w+)/status');
        uriRegExp.exec(pathname);
        var user = RegExp.$1;
        
        if(user == '987654' || user == '65076289' || user == '987654' || user =='12345'){
            response.write(JSON.stringify({"status":"spoofed","domain":"www.edosys.com.ar","creation_date":"2013-03-07T17:01:32.000-04:00"}));
            response.end();
            return;
        }
        else{
            response.write(JSON.stringify({"status":"not-spoofed"}));
            response.end();
            return;
        }
        
        
   }

  
};

exports.echo = spoofedUserController.echo;
exports.getspoofed = spoofedUserController.getspoofed;

urlMapping.add ([
                 {
                     pattern: '^/internal/fake_sites/ping',
                     action: {
                         'GET': spoofedUserController.echo
                     }
                 },{
                     pattern: '^/internal/fake_sites/spoofed_user/(\\w+)/status',
                     action: {
                         'GET': spoofedUserController.getspoofed
                     }
                 }
             ]);