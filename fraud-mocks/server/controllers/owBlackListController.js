var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var owBlackListController = {
	
	jalive: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"owRestrictions Full Service: OK!"}));
            response.end();        
        },

	ups: function(request, response) {
            response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"Agregado a blacklist!"}));
            response.end();        
        },

    blmp: function(request, response) {
            response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"Agregado a blacklist!"}));
            response.end();        
        },
        
	bldmz : function(request, response){
            response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"Agregado a blacklist!"}));
            response.end();  
            
        }
        
};

exports.ups = owBlackListController.ups;
exports.jalive = owBlackListController.jalive;
exports.bldmz = owBlackListController.bldmz;
exports.blmp = owBlackListController.blmp;


// Mappings
urlMapping.add ([
    {
        pattern: '^/jm/services/blacklist/ups/record',
        action: {
            'POST':owBlackListController.ups
        }
    },{
        pattern: '^/jm/services/blacklist/bldmz/record',
        action: {
            'POST':owBlackListController.bldmz
        }
    },{
        pattern: '^/jm/services/blacklist/blmp/record',
        action: {
            'POST':owBlackListController.blmp
        }
    },{
        pattern: '^/jm/services/blacklist/[\\w\\]+/record',
        action: {
            'POST':owBlackListController.blmp
        }
    }
]);
