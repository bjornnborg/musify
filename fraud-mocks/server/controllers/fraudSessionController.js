var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var fraudSessionController = {
        indexOk: function(request, response) {
            response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"UsersFullService: OK!"}));
            response.end();        
        }
};

exports.indexOk = fraudSessionController.indexOk;

// Mappings
urlMapping.add ([{
        pattern: '^/fraud/users/sessions/index',
        action: {
            'POST':fraudSessionController.indexOk,
        }
    }]);