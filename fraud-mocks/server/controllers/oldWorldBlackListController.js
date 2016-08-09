var url = require('url');
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var oldWorldBlackListController = {
        ups : function(request, response){
            jsonHandler.getContent(request, function(data) {
                  jsonHandler.showResponse({'status':'ok'}, 201, response);
               
            });
        },

        bldmz : function(request, response){
          jsonHandler.getContent(request, function(data) {
                  jsonHandler.showResponse({'status':'ok'}, 201, response);
            });
        }
};


exports.ups = oldWorldBlackListController.ups;
exports.bldmz = oldWorldBlackListController.bldmz;

// Mappings
urlMapping.add ([{
        pattern: '^/jm/services/blacklist/ups/record?$',
        action: {
            'POST':oldWorldBlackListController.ups
        }
    },{
        pattern: '^/jm/services/blacklist/blmp/record?$',
        action: {
            'POST':oldWorldBlackListController.bldmz
        }
    }]);