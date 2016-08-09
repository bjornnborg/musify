var url = require('url');
var querystring = require('querystring');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

//var retryPhone = 0;

var inboundCallController = {
	ping : function(request, response) {
		response.writeHead(200, {
			'Content-Type' : 'application/json; charset=utf-8'
		});
		response.write(JSON.stringify(["pong"]));
		response.end();        
	},
	save : function(request, response) {
		/*response.writeHead(201, {
			'Content-Type' : 'application/json; charset=utf-8'
		});
		response.write(JSON.stringify(["Registro Insertado OK"]));
		response.end();*/
		//resourceManager.saveRequestResource('inboundCall', request, response);
            
		jsonHandler.getContent(request, function(inboundCall){
		        
			console.log("inbound: " + inboundCall);

			var isOk = 	validateParam ("site_id", inboundCall.site_id, response) &&
					validateParam ("user_id", inboundCall.user_id, response) &&
					validateParam ("phone", inboundCall.phone, response) &&
					validateParam ("reference", inboundCall.reference, response) &&
					validateParam ("reference.id", inboundCall.reference.id, response) &&
					validateParam ("reference.type", inboundCall.reference.type, response);

		        /*if (!inboundCall.site_id) {
				jsonHandler.showBadRequestResponse({message:"site_id is null"}, response);
			}
			if (!inboundCall.user_id) {
				jsonHandler.showBadRequestResponse({message:"user is null"}, response);
			}
			if (!inboundCall.phone) {
				jsonHandler.showBadRequestResponse({message:"phone is null"}, response);
			}

			if (!inboundCall.phone) {
				jsonHandler.showBadRequestResponse({message:"phone is null"}, response);
			}

			if (!inboundCall.phone) {
				jsonHandler.showBadRequestResponse({message:"phone is null"}, response);
			}

			if (!inboundCall.phone) {
				jsonHandler.showBadRequestResponse({message:"phone is null"}, response);
			}*/
			if (isOk) {
				//saveResource(type, id, resource)
				var id = inboundCall.site_id + "_" + inboundCall.reference.type + "_" + inboundCall.reference.id;
				//inboundCall.id = id;
				console.log("saving inbound key: " + id );				
				resourceManager.saveResource('inboundCall', id, inboundCall);
		       	        jsonHandler.showOKResponse({message:"ok"}, response);
			}
		        
		        
		    });        
	},
	searchInbound : function (request, response) {
	    ///crm/inboundcalls/$ref_type/$ref_id/$site_id
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/crm/inboundcall/(\\w+)/(\\w+)/(\\w+)');
            uriRegExp.exec(pathname);
            var refType = RegExp.$1;
	    var refId = RegExp.$2;
	    var siteId = RegExp.$3;

	    var inboundId = siteId + "_" + refType + "_" + refId;

            console.log("searching key " + inboundId);

	    //resourceManager.getResource('inboundCall', id, response);
	    var inbounds = resourceManager.getResourcesByType('inboundCall');
	    console.log("inbounds founds: " + JSON.stringify(inbounds));
	    var founds = new Array();
		for(var id in inbounds){
			var inbound = inbounds[id].value;
			
  	               console.log(id + " - " + JSON.stringify(inbound));

			try{
			    console.log("inbound is " + typeof(inbound) + " and reference is " + typeof(inbound.reference));	
				if( typeof(inbound) != 'undefined') {
					if (inbound.id == inboundId) {
					  founds.push(inbound);
					}
					console.log("inbound.id equals id " + inbound.id + " == "+ inboundId);
				}	
			    /*if( typeof(inbound) != 'undefined' && typeof(inbound.reference) != 'undefined'){
				var equalSite = inbound.site_id == siteId;


				var equalType = inbound.reference.type == refType;
				var equalId = inbound.reference.id == refId;

				console.log(JSON.stringify(inbound) + " is equal [siteId:" +equalSite + ", type: " + equalType + ", id: " + equalId +"]" );
				if (equalSite && equalType && equalId) {
					founds.push(inbound);
				}				
			    }*/
			}catch(e){
			    console.log(e);
			}
	       }
	    jsonHandler.showOKResponse({'results':founds}, response);
		

},

searchByUserInbound : function (request, response) {
	    ///crm/inboundcalls/users/$user_id
        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('/crm/inboundcalls/users/(\\d+)');
        uriRegExp.exec(pathname);
        var userId = RegExp.$1;

	    var inbounds = resourceManager.getResourcesByType('inboundCallUser');
	    console.log("inbounds founds: " + JSON.stringify(inbounds));
	    var founds = new Array();

	    if(userId == 555666777 && global.retryPhone == 0){
    	    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
            global.retryPhone++;
            return;
	    }
    	if(userId == 555666788 && global.retryPhone == 0){
    	    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
            global.retryPhone++;
            return;
	    }
		for(var user_id in inbounds){
			var inbound = inbounds[user_id].value;
			
  	        console.log(user_id + " - " + JSON.stringify(inbound));

			try{
			    console.log("inbound is " + typeof(inbound) + " and reference is " + typeof(inbound.reference));	
				if( typeof(inbound) != 'undefined') {
					if (inbound.user_id == userId) {
					  founds.push(inbound);
					}
					console.log("inbound.user_id equals userId " + inbound.user_id + " == "+ userId);
				}	
		
			}catch(e){
			    console.log(e);
			}

	    }	    

	    jsonHandler.showOKResponse({'results':founds}, response);
	    
	//    return null;	
	}

};


function validateParam(param, value, response) {
	console.log("param: " + param + " - value:" + value);
	if (!value) {
		var msg = param + " is null";
		jsonHandler.showBadRequestResponse({message: msg}, response);
		return false;
	}
	return true;
}


resourceManager.saveResource('inboundCall',{"id":"MLA_payment_445566", "phone": 2235756757,  "user_id":123456,  "site_id" : "MLA",  "reference" : { "id": 445566, "type": "payment"}, "rejected_by_blacklist":"N"});

resourceManager.saveResource('inboundCall', { "id":"MLA_payment_12345", "phone": 2235756757,  "user_id":123456,  "site_id" : "MLA",  "reference" : { "id": 12345, "type": "payment"}, "rejected_by_blacklist":"N"});

//jazcurra

resourceManager.saveResource('inboundCallUser', { "call_id":987, "phone": 5574,  "user_id":698518565,  "site_id" : "MLA",  "reference" : { "id": 584752, "type": "payment"}, "rejected_by_blacklist":"N"});
resourceManager.saveResource('inboundCallUser', { "call_id":852, "phone": 4751,  "user_id":12345,  "site_id" : "MLA",  "reference" : { "id": 25887, "type": "payment"}, "rejected_by_blacklist":"Y"});
resourceManager.saveResource('inboundCallUser', { "call_id":631, "phone": 9874,  "user_id":698518565,  "site_id" : "MLA",  "reference" : { "id": 96332, "type": "payment"}, "rejected_by_blacklist":"N"});
														
resourceManager.saveResource('inboundCallUser', { "call_id":852, "phone": 7852,  "user_id":555666777,  "site_id" : "MLA",  "reference" : { "id": 25887, "type": "payment"}, "rejected_by_blacklist":"Y"});

//Para tests de ventas presenciales
resourceManager.saveResource('inboundCallUser', { "call_id":123, "phone": 7894,  "user_id":925705,  "site_id" : "MLA",  "reference" : { "id": 25887, "type": "payment"}, "rejected_by_blacklist":"Y"});
resourceManager.saveResource('inboundCallUser', { "call_id":124, "phone": 7895,  "user_id":925706,  "site_id" : "MLA",  "reference" : { "id": 25887, "type": "payment"}, "rejected_by_blacklist":"Y"});


exports.ping = inboundCallController.ping;
exports.save = inboundCallController.save;
exports.searchInbound = inboundCallController.searchInbound;
exports.searchByUserInbound = inboundCallController.searchByUserInbound;

// Mappings
urlMapping.add ([
	{//jazcurra
		pattern: '^/crm/inboundcalls/users/(\\d+)',
		action: {
			'GET':inboundCallController.searchByUserInbound
		}
	},
	{
		pattern: '^/crm/inboundcalls/ping',
		action: {
			'GET':inboundCallController.ping
		}
	},{
		pattern: '^/crm/inboundcalls/(\\w+)/(\\w+)/(\\w+)',
		action: {
			'GET':inboundCallController.searchInbound
		}
	},
	{
		pattern: '^/crm/inboundcalls',
		action: {
			'POST':inboundCallController.save
		}
	}
]);
