var url = require('url');
var querystring = require('querystring');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var ivsController = {
	ping : function(request, response) {
		response.writeHead(200, {
			'Content-Type' : 'application/json; charset=utf-8'
		});
		response.write(JSON.stringify(["pong"]));
		response.end();        
	},
	saveToRetry : function(request, response) {
		response.writeHead(201, {
			'Content-Type' : 'application/json; charset=utf-8'
		});
		response.write(JSON.stringify(["Registro Insertado OK"]));
		response.end();        
	}
};

exports.ping = ivsController.ping;
exports.saveToRetry = ivsController.saveToRetry;

// Mappings
urlMapping.add ([{
		pattern: '^/ivs/ping',
		action: {
			'GET':ivsController.ping
		}
	},
	{
		pattern: '^/ivs/retry',
		action: {
			'POST':ivsController.saveToRetry
		}
	}
]);
