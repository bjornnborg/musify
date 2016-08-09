var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");
var msgId = 1;
var count = 0;
var spnController = {
	spnEcho: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
    }, 

    spnPost : function(request, response){
			response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'created!'}));
            response.end();        
	}

  
};

exports.spnEcho = spnController.spnEcho;
exports.spnPost = spnController.spnPost;

// Mappings
urlMapping.add ([
    {
        pattern: '^/spnscoring/echo',
        action: {
            'GET': spnController.spnEcho
        }
    },{
        pattern: '^/spnscoring/scoring?(\\w*)',
        action: {
            'POST': spnController.spnPost
        }
    }

    ////spnscoring/scoring
]);