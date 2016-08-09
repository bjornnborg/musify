var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var testScoringJobsController = {
        
        notfound: function(request, response) {
            response.writeHead(404, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"Not found"}));
            response.end();        
        },

        created: function(request, response) {
            response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"Creadted"}));
            response.end();        
        },
        
        ok: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"OK"}));
            response.end();        
        },
        
        unavailable: function(request, response){
            response.writeHead(500, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"Internal Server Error"}));
            response.end();  
            
        }
        
};

exports.notfound = testScoringJobsController.notfound;
exports.created = testScoringJobsController.created;
exports.ok = testScoringJobsController.ok;
exports.unavailable = testScoringJobsController.unavailable;


// Mappings
urlMapping.add ([
    {
        pattern: '^/test/ok/',
        action: {
            'POST': testScoringJobsController.created,
            'GET': testScoringJobsController.ok,
            'PUT': testScoringJobsController.ok,
            'DELETE': testScoringJobsController.ok

        }
    },{
        pattern: '^/test/unavailable/',
        action: {
            'POST':testScoringJobsController.unavailable,
            'PUT':testScoringJobsController.unavailable,
            'GET':testScoringJobsController.unavailable,
            'DELETE':testScoringJobsController.unavailable
        }
    },{
        pattern: '^/test/notfound/',
        action: {
            'PUT':testScoringJobsController.notfound,
            'POST':testScoringJobsController.notfound,
            'GET':testScoringJobsController.notfound,
            'DELETE':testScoringJobsController.notfound
        }
    }
]);
