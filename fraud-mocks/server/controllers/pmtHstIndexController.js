var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var dateFormatter = require('../services/dateFormatter');

var pmtHstIndexController = {

        echo: function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            response.write(JSON.stringify({"detail":"GZ Index API is UP."}))
            response.end(); 
        },

        getIndexMock : function(request, response){

             jsonHandler.getContent(request, function(indexArgs){               
                
                var transaction_id = indexArgs.transaction_id;
                
                if(transaction_id.indexOf("216509907_75776c37753aaa") != -1 ){
                      
                    response.writeHead(503, {
                        'Content-Type' : 'application/json; charset=utf-8'
                    });
                    response.write(JSON.stringify({"error":"error"}))
                    response.end();  
                   
                }else{
     
                    response.writeHead(200, {
                        'Content-Type' : 'application/json; charset=utf-8'
                    });
                    response.write(JSON.stringify({"id":"AJASDHUIWYUIEQ2827JDYUE"}))
                    response.end();     
                }
            });
          
	   }
};

exports.getIndexMock = pmtHstIndexController.getIndexMock;

// Mappings
urlMapping.add ([
    {
        pattern: '^/fraud/payment/history/index/ping',
        action: {
            'GET':pmtHstIndexController.echo
        }
    },
    {
        pattern: '^/fraud/payment/history/index',
        action: {
            'POST':pmtHstIndexController.getIndexMock
        }
    }   
]);
