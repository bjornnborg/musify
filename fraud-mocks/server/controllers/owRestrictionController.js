var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var owRestrictionController = {
	
	jalive: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"owRestrictions Full Service: OK!"}));
            response.end();        
        },

	postApplyRemedy: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"Remedy Aplicado!"}));
            response.end();        
        },
        
	getRestriction : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });				
		
		// extract data from url
		var pathname = url.parse(request.url).pathname;
		var uriRegExp = new RegExp('/jm/services/restrictionsservice/v1.0/restrictions/(\\w+)/(\\w+)');
		uriRegExp.exec(pathname);
		
		var custId = RegExp.$1;
		var siteId = RegExp.$2;
	
		// Mocks de Datos para ivs por email										
		if (custId == 101 || custId == 100 || custId == 138160 || custId == 56456456 || custId == 65665635 || custId == 65700670) {
			response.write(JSON.stringify({"level":1,"restrictions":[{"id":"MONEY_IN_MID","profile":"PREVENCION","remedy_groups":[{"id":684,"remedies":[{"id":"CALL_CENTER","status":"N","require_more_one":"N"},{"id":"IV_ONLINE","status":"N","require_more_one":"N"}]}]}]}));
		} else if (custId == 65655663) {
			response.write(JSON.stringify({"level":1,"restrictions":[{"id":"MONEY_IN_MID","profile":"PREVENCION","remedy_groups":[{"id":684,"remedies":[{"id":"CALL_CENTER","status":"N","require_more_one":"N"}]}]}]}));
		} else if (custId == 65665634 ) {
			response.write(JSON.stringify({"level":2,"restrictions":[{"id":"MONEY_IN_MID","profile":"PREVENCION","remedy_groups":[{"id":684,"remedies":[{"id":"CALL_CENTER","status":"N","require_more_one":"N"}]}]}]}));
		}
		// Fin mocks de datos para ivs por email
            
            response.end();
            
        }
        
};

exports.getRestriction = owRestrictionController.getRestriction;
exports.jalive = owRestrictionController.jalive;
exports.postApplyRemedy = owRestrictionController.postApplyRemedy;


// Mappings
urlMapping.add ([
{
        pattern: '^/jm/services/restrictionsservice/v1.0/restrictions/applyremedynew',
        action: {
            'POST':owRestrictionController.postApplyRemedy
        }
    },{
        pattern: '^/jm/services/restrictionsservice/v1.0/restrictions/.*',
        action: {
            'GET':owRestrictionController.getRestriction
        }
    },{
        pattern: '^/jm/jalive',
        action: {
            'GET':owRestrictionController.jalive
        }
    }]);
