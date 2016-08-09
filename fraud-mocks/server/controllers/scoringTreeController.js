var url = require('url');
var crypto = require('crypto');
var dateFormatter = require('../services/dateFormatter');
var usersController = require("./usersController");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var scoringTreeController = {
    _accessTokens : [],

    ping : function(request, response) {
		response.writeHead(200, {
			'Content-Type' : 'text/plain; charset=utf-8'
		});
		response.write("pong");
		response.end();        
	},
	addTreeToSeller: function(request, response) {
			var data = url.parse(request.url, true).query;

			if (data["caller.id"]){
				if(data["caller.id"] == "344"){
						jsonHandler.showBadRequestResponse({message:"ok"}, response);
				}
		        response.writeHead(201, {'Content-Type' : 'application/json; charset=utf-8'});
			    response.write(JSON.stringify({"site_id": "MLA","config_id": "STD","flow_id": "MI","receiver_id": "65160657","tree_id": "MP_SC_MI","scope":"RECEIVER"}));
			} else {
				response.writeHead(403, {'Content-Type' : 'application/json; charset=utf-8'});
				response.write(JSON.stringify({}));
			}

            response.end();        
        },

	putTreeToSeller: function(request, response) {

			jsonHandler.showOKResponse({"site_id": "MLA","config_id": "STD","flow_id": "MI","receiver_id": "65160657","tree_id": "MP_SC_MI","scope":"RECEIVER"}, response);

    },

	deleteTreeToSeller: function(request, response) {

	    var data = url.parse(request.url, true).query;

	    if (data["caller.id"]){
		   	if (data["receiver_id"] != "348311") {

					response.writeHead(200, {
			                'Content-Type' : 'application/json; charset=utf-8'
			            });
			        response.write(JSON.stringify({"site_id": "MLA","config_id": "STD","flow_id": "MI","receiver_id": "65160657","tree_id": "MP_SC_MI","scope":"RECEIVER"}));
			        response.end();

		   	}else{

		   			response.writeHead(500, {
			                'Content-Type' : 'application/json; charset=utf-8'
			            });
			        response.write(JSON.stringify({"text": "error"}));
			        response.end();

		   	}
			
	    }else{

	    	response.writeHead(403, {'Content-Type' : 'application/json; charset=utf-8'});
			response.write(JSON.stringify({}));

	    }

    },

	getTree : function(request, response){
        	response.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});
		
		var data = url.parse(request.url, true).query;
	
		if (data["tree_id"] != null) {
			if(data["site_id"] == "MLB" && data["config_id"] == "STD" && data["tree_id"] == "MP_SC_MI") {
				response.write(JSON.stringify([{"site_id": "MLB","config_id": "STD","flow_id": "MI","receiver_id":"DEFAULT","tree_id": "MP_SC_MI","scope":"DEFAULT","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "default"}]));
			} else if(data["site_id"] == "MLB" && data["config_id"] == "OFF" && data["tree_id"] == "MP_SC_MI_OFF") {
				response.write(JSON.stringify([{"site_id": "MLB","config_id": "OFF","flow_id": "MI","receiver_id":"DEFAULT","tree_id":"MP_SC_MI_OFF","scope":"DEFAULT","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "default"}]));
			} else if(data["site_id"] == "MLB" && data["config_id"] == "OFF" && data["tree_id"] == "ARBOL_LOW") {
				response.write(JSON.stringify([{"site_id": "MLB","config_id": "OFF","flow_id": "MI","receiver_id":"106518","tree_id":"ARBOL_LOW","scope":"RECEIVER","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "gaming"}]));
			} else {  
				response.write(JSON.stringify([])); 
			}
		} else if (data["site_id"] == "MLA" && data["config_id"] == "STD" && data["flow_id"] == "MI" && (data["scope"] == "DEFAULT" || data["receiver_id"]=="DEFAULT")) {
			response.write(JSON.stringify([{"site_id": "MLA","config_id": "STD","flow_id": "MI","receiver_id": null,"tree_id": "MP_SC_MI","scope":"DEFAULT","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "default"}]));

		}	else if (data["site_id"] == "MLA" && data["config_id"] == "STD" && data["flow_id"] == "SS" && (data["scope"] == "DEFAULT" || data["receiver_id"]=="DEFAULT")) {
			response.write(JSON.stringify([{"site_id": "MLA","config_id": "STD","flow_id": "SS","receiver_id": null,"tree_id": "MP_SC_MI","scope":"DEFAULT","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "default"}]));

		}  else if (data["site_id"] == "MLA" && data["config_id"] == "STD" && data["flow_id"] == "MI" && data["scope"] == "RECEIVER" && data["receiver_id"] == "65160657") {
			response.write(JSON.stringify([{"site_id": "MLA","config_id": "STD","flow_id": "MI","receiver_id": "65160657","tree_id": "MP_SC_MI","scope":"RECEIVER","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "gaming"}]));

		} else if(data["site_id"] == "MLA" && data["config_id"] == "STD" && data["flow_id"] == "MI") {
			response.write(JSON.stringify([
				{"site_id": "MLA","config_id": "STD","flow_id": "MI","receiver_id": "107887","tree_id": "TEST_DEEP_BLUE","scope":"RECEIVER","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "gaming"},
								{"site_id": "MLA","config_id": "STD","flow_id": "MI","receiver_id": "65160657","tree_id": "MP_SC_MI","scope":"RECEIVER","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "gaming"},
						       {"site_id": "MLA","config_id": "STD","flow_id": "MI","receiver_id":"DEFAULT","tree_id": "MP_SC_MI","scope":"DEFAULT","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "default"}]));
		} else if(data["site_id"] == "MLA" && data["config_id"] == "OFF" && data["flow_id"] == "MI") {
			response.write(JSON.stringify([{"site_id": "MLA","config_id": "OFF","flow_id": "MI","receiver_id":"DEFAULT","tree_id":"MP_SC_MI_OFF","scope":"DEFAULT","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "default"}]));

		} else if (data["site_id"] == "MLB" && data["config_id"] == "STD" && data["flow_id"] == "MI" && (data["scope"] == "DEFAULT" || data["receiver_id"]=="DEFAULT")) {
			response.write(JSON.stringify([{"site_id": "MLB","config_id": "STD","flow_id": "MI","receiver_id": null,"tree_id": "MP_SC_MI","scope":"DEFAULT","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "default"}]));
		} else if(data["flow_id"] == "MG") {
                    response.write(JSON.stringify([{"site_id": "MLB","config_id": "STD","flow_id": "MG","receiver_id":"DEFAULT","tree_id": "MP_SC_MI","scope":"DEFAULT","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "default"}]));
		}
		else if(data["flow_id"] == "SM") {
                    response.write(JSON.stringify([{"site_id": "MLB","config_id": "STD","flow_id": "MG","receiver_id":"DEFAULT","tree_id": "MP_SC_MI","scope":"DEFAULT","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "default"}]));
                }
		else if(data["site_id"] == "MLB" && data["config_id"] == "STD" && data["flow_id"] == "MI") {
			response.write(JSON.stringify([{"site_id": "MLB","config_id": "STD","flow_id": "MI","receiver_id":"DEFAULT","tree_id": "MP_SC_MI","scope":"DEFAULT","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "default"}]));
		} else if(data["site_id"] == "MLB" && data["config_id"] == "OFF" && data["flow_id"] == "MI" && (data["scope"] == "DEFAULT" || data["receiver_id"]=="DEFAULT")) {
			response.write(JSON.stringify([{"site_id": "MLB","config_id": "OFF","flow_id": "MI","receiver_id":"DEFAULT","tree_id":"MP_SC_MI_OFF","scope":"DEFAULT","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "default"}]));
		} else if(data["site_id"] == "MLB" && data["config_id"] == "OFF" && data["flow_id"] == "MI") {
			response.write(JSON.stringify([{"site_id": "MLB","config_id": "OFF","flow_id": "MI","receiver_id":"DEFAULT","tree_id":"MP_SC_MI_OFF","scope":"DEFAULT","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "default"},
										   {"site_id": "MLB","config_id": "OFF","flow_id": "MI","receiver_id":"106518","tree_id":"ARBOL_LOW","scope":"RECEIVER","creation_date":"2012-06-15T08:12:22.000-04:00","last_modified_date":"2012-06-15T08:12:22.000-04:00","author_id":654564564, "industry_id" : "gaming"}]));
		} else {
			response.write(JSON.stringify([]));

		}

            response.end();
        }
};


exports.getTree = scoringTreeController.getTree;
exports.addSellerToTree = scoringTreeController.addTreeToSeller;
exports.putTreeToSeller = scoringTreeController.putTreeToSeller;
exports.deleteTreeToSeller = scoringTreeController.deleteTreeToSeller;

// Mappings
urlMapping.add ([{
        pattern: '^/fraud/scoring/tree/environment/search$',
        action: {
            'GET':scoringTreeController.getTree
        }
    },{
       pattern: '^/fraud/scoring/tree/environment/$',
       action: {
            'POST':scoringTreeController.addTreeToSeller
        }
    },{
       pattern: '^/fraud/scoring/tree/environment$',
       action: {
	    	'PUT':scoringTreeController.putTreeToSeller,
	    	'DELETE':scoringTreeController.deleteTreeToSeller,
	    	'POST':scoringTreeController.addTreeToSeller
        }
    },{
       pattern: '^/fraud/scoring/tree/environment/ping',
       action: {
            'GET':scoringTreeController.ping
        }
    }]);