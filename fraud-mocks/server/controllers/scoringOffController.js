var url = require('url');
var querystring = require('querystring');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");
/**
* @author kzaporojets 30/07/2012- mockeo de scoringOff para el hit de consumer de items entre otras cosas
**/
var scoringOffController = {
	ping : function(request, response) {
		response.writeHead(200, {
			'Content-Type' : 'text/plain; charset=utf-8'
		});
		response.write("pong");
		response.end();        
	},
	executeUps : function(request, response) {
	    response.writeHead(201, {
                    'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write('{"status":201,"message":"Scoring Execution for ups successfully Enqueued."}');
            response.end();        
	},
	executeListing : function(request, response) {


/*		"/fraud/scoring/listing"  (controller: "scoringOff", parseRequest: true){
			action = [POST : 'executeListing']
		}*/

		var parts = url.parse(request.url, true);

		        // called when all chunks of data have been received
		jsonHandler.getContent(request, function(data) {

               if ( data.id == 'MLA0'){
					response.writeHead(500, {
						'Content-Type' : 'application/json; charset=utf-8'
					});
					response.write(JSON.stringify([{"status":"stack"}]));
					response.end();

                   //jsonHandler.showOKResponse({'user_login':data.login, 'authenticated':true}, response);
               }else{
//                   jsonHandler.showBadRequestResponse({'message': 'Error validando las credenciales del Usuario: '+data.login, 'error':'invalid_grant'}, response);
					response.writeHead(201, {
						'Content-Type' : 'application/json; charset=utf-8'
					});
					response.write(JSON.stringify([{"status":"ok"}]));
					response.end();

               }
            });

           /*if(parseado.id==0)
			{
				response.writeHead(500, {
					'Content-Type' : 'application/json; charset=utf-8'
				});
				response.end();
			}
			else
			{
				response.writeHead(201, {
					'Content-Type' : 'application/json; charset=utf-8'
				});
				response.end();
			}*/
			

//		var parseado = JSON.parse(request.body )


/*		var cross_type;
	            var pathname = url.parse(request.url).pathname;
	            var uriRegExp = new RegExp('/fraud/crosses/v2/user/(\\w+)/(\\w+)');
	            uriRegExp.exec(pathname);
	            var userId = RegExp.$1;
		if (parts != null) {
			cross_type = parts.query['cross_type'];
		}

		
		if(userId==123456){
			//para algunos casos, devuelve 404
			response.writeHead(404, {
				'Content-Type' : 'application/json; charset=utf-8'
			});
			response.end();
		}
		

		response.writeHead(200, {
			'Content-Type' : 'application/json; charset=utf-8'
		});


		


		if (cross_type == "device") {
			response.write(JSON.stringify([{"cust_id":100007345,"status":"guest","points":0,"registration_date":"2011-11-17T00:00:00.000-04:00","restrictions":[],"remedies":[],"verification_history":[],"risk":250,"risk_description":"LOW POINTS: 150.0 - RESTRICTIONS: 0.0 - RISK_RATING ({neutral(100)=1}): 100.0 - INHAB: 0.0 - NO_DEVICE_ID: 0.0","devices":[{"device_id":"ba67f61c2a1e4df9b84424f11fe59df0","searched_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-05-16T18:14:02.090-0400","confidence_smart_id":"100.00","transaction_id":60994292,"risk_rating":"neutral","reason_code":"","flow_type":"MI"}]}},"found_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-06-03T13:46:18.000-0400","confidence_smart_id":"100.00","transaction_id":409936450,"risk_rating":"neutral","reason_code":"1month_ant_device, MPRisk_2Account_perDevice_inaWeek","flow_type":"MI"}]}}}]}]));
			response.end();
		}
		else if (cross_type == "smart") {
			response.write(JSON.stringify([{"cust_id":892575,"status":"active","points":2,"registration_date":"2006-10-18T10:05:51.000-04:00","restrictions":[],"remedies":[],"verification_history":["{creation_date=2008-08-27T00:00:00.000-0400, verification_id=DM}","{creation_date=2008-08-27T00:00:00.000-0400, verification_id=DOK}","{creation_date=2006-10-20T00:00:00.000-0400, verification_id=DOK}","{creation_date=2006-10-18T00:00:00.000-0400, verification_id=NV}"],"risk":500,"risk_description":"LOW POINTS: 100.0 - RESTRICTIONS: 0.0 - RISK_RATING ({neutral(100)=1}): 100.0 - INHAB: 0.0 - NO_DEVICE_ID: 300.0","devices":[{"smart_id":"2b08233722044686bc97a99259264041","searched_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-05-16T18:14:02.090-0400","confidence_smart_id":"100.00","transaction_id":60994292,"risk_rating":"neutral","reason_code":"","flow_type":"MI"}]}},"found_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-06-04T23:50:09.000-0400","confidence_smart_id":"82.04","transaction_id":422393955,"risk_rating":"neutral","reason_code":"1month_ant_device, NoDeviceID","flow_type":"BI"}]}}}]},{"cust_id":100007345,"status":"guest","points":0,"registration_date":"2011-11-17T00:00:00.000-04:00","restrictions":[],"remedies":[],"verification_history":[],"risk":275,"risk_description":"LOW POINTS: 150.0 - RESTRICTIONS: 0.0 - RISK_RATING ({low(0)=1, neutral(100)=4, medium(200)=3}): 125.0 - INHAB: 0.0 - NO_DEVICE_ID: 0.0","devices":[{"smart_id":"de75a2f8e70946d988824953d132ec41","searched_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-05-16T18:14:02.090-0400","confidence_smart_id":"100.00","transaction_id":60994292,"risk_rating":"neutral","reason_code":"","flow_type":"MI"}]}},"found_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-06-03T13:46:18.000-0400","confidence_smart_id":"100.00","transaction_id":409936450,"risk_rating":"neutral","reason_code":"1month_ant_device, MPRisk_2Account_perDevice_inaWeek","flow_type":"MI"}]}}},{"smart_id":"f6c2bc73374c48f199570b6625802a2f","searched_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-05-16T18:14:02.090-0400","confidence_smart_id":"100.00","transaction_id":60994292,"risk_rating":"neutral","reason_code":"","flow_type":"MI"}]}},"found_customer":{"detail":{"quantity":6,"history":[{"site_id":"MLA","date":"2012-05-20T10:51:20.720-0400","confidence_smart_id":"100.00","transaction_id":82852266,"risk_rating":"neutral","reason_code":"1month_ant_device","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-20T10:47:51.558-0400","confidence_smart_id":"100.00","transaction_id":82864900,"risk_rating":"medium","reason_code":"1month_ant_device, 3IPLogins_inaDay, 5payment_sameDevice_inaDay, Session_Changes_MidSession","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-20T10:26:25.765-0400","confidence_smart_id":"100.00","transaction_id":82865836,"risk_rating":"low","reason_code":"1month_ant_device, 3IPLogins_inaDay","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-20T10:22:59.365-0400","confidence_smart_id":"95.50","transaction_id":82862475,"risk_rating":"neutral","reason_code":"1month_ant_device","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-20T05:25:21.795-0400","confidence_smart_id":"100.00","transaction_id":81353188,"risk_rating":"medium","reason_code":"1month_ant_device, 3Device_SameSmartID_inaWeek, 3DifferentDeviceIDs_SameAccountLogin_inaWeek, 3IPLogins_inaDay, MPRisk_2Account_perDevice_inaWeek","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-20T05:18:29.698-0400","confidence_smart_id":"100.00","transaction_id":81353049,"risk_rating":"medium","reason_code":"1month_ant_device, 3Device_SameSmartID_inaWeek, 3DifferentDeviceIDs_SameAccountLogin_inaWeek, 3IPLogins_inaDay, MPRisk_2Account_perDevice_inaWeek","flow_type":"MI"}]}}},{"smart_id":"f2f6d93b6a5045e7a1148edc04227386","searched_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-05-16T18:14:02.090-0400","confidence_smart_id":"100.00","transaction_id":60994292,"risk_rating":"neutral","reason_code":"","flow_type":"MI"}]}},"found_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-05-16T20:29:41.138-0400","confidence_smart_id":"98.50","transaction_id":61584214,"risk_rating":"neutral","reason_code":"","flow_type":"MI"}]}}}]},{"cust_id":71536626,"status":"guest","points":0,"registration_date":"2011-10-09T00:00:00.000-04:00","restrictions":[],"remedies":[],"verification_history":[],"risk":200,"risk_description":"LOW POINTS: 150.0 - RESTRICTIONS: 0.0 - RISK_RATING ({low(0)=1, neutral(100)=1}): 50.0 - INHAB: 0.0 - NO_DEVICE_ID: 0.0","devices":[{"smart_id":"f6c2bc73374c48f199570b6625802a2f","searched_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-05-16T18:14:02.090-0400","confidence_smart_id":"100.00","transaction_id":60994292,"risk_rating":"neutral","reason_code":"","flow_type":"MI"}]}},"found_customer":{"detail":{"quantity":2,"history":[{"site_id":"MLA","date":"2012-05-20T05:46:16.019-0400","confidence_smart_id":"100.00","transaction_id":81343264,"risk_rating":"low","reason_code":"1month_ant_device, 3Device_SameSmartID_inaWeek, 3IPLogins_inaDay","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-20T05:13:49.810-0400","confidence_smart_id":"98.50","transaction_id":81343818,"risk_rating":"neutral","reason_code":"1month_ant_device, 3Device_SameSmartID_inaWeek","flow_type":"MI"}]}}}]},{"cust_id":36259295,"status":"active","points":29,"registration_date":"2007-09-01T20:27:08.000-04:00","restrictions":[],"remedies":[{"creation_date":"2008-12-04T18:42:07.000-0400","remedy_id":"-ML_REMOVE"}],"verification_history":["{creation_date=2008-01-03T00:00:00.000-0400, verification_id=DM}","{creation_date=2008-01-03T00:00:00.000-0400, verification_id=DOK}","{creation_date=2007-09-02T00:00:00.000-0400, verification_id=DOK}","{creation_date=2007-09-01T00:00:00.000-0400, verification_id=NV}"],"risk":81.81818181818181,"risk_description":"LOW POINTS: 0.0 - RESTRICTIONS: 0.0 - RISK_RATING ({low(0)=2, neutral(100)=9}): 81.81818181818181 - INHAB: 0.0 - NO_DEVICE_ID: 0.0","devices":[{"smart_id":"de75a2f8e70946d988824953d132ec41","searched_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-05-16T18:14:02.090-0400","confidence_smart_id":"100.00","transaction_id":60994292,"risk_rating":"neutral","reason_code":"","flow_type":"MI"}]}},"found_customer":{"detail":{"quantity":2,"history":[{"site_id":"MLA","date":"2012-05-18T12:22:12.000-0400","confidence_smart_id":"100.00","transaction_id":148923852,"risk_rating":"neutral","reason_code":"1month_ant_device, 3DifferentDeviceIDs_SameAccountLogin_inaWeek","flow_type":"BI"},{"site_id":"MLA","date":"2012-05-31T16:32:41.000-0400","confidence_smart_id":"98.50","transaction_id":409664415,"risk_rating":"neutral","reason_code":"1month_ant_device","flow_type":"MI"}]}}},{"smart_id":"f6c2bc73374c48f199570b6625802a2f","searched_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-05-16T18:14:02.090-0400","confidence_smart_id":"100.00","transaction_id":60994292,"risk_rating":"neutral","reason_code":"","flow_type":"MI"}]}},"found_customer":{"detail":{"quantity":9,"history":[{"site_id":"MLA","date":"2012-05-20T15:09:12.827-0400","confidence_smart_id":"100.00","transaction_id":402423758,"risk_rating":"neutral","reason_code":"1month_ant_device","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-20T14:54:58.891-0400","confidence_smart_id":"95.50","transaction_id":402409819,"risk_rating":"neutral","reason_code":"1month_ant_device","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-20T14:51:38.352-0400","confidence_smart_id":"100.00","transaction_id":402429273,"risk_rating":"low","reason_code":"1month_ant_device, 3IPLogins_inaDay","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-20T08:40:57.591-0400","confidence_smart_id":"95.50","transaction_id":82337141,"risk_rating":"neutral","reason_code":"1month_ant_device, 3Device_SameSmartID_inaWeek","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-20T02:48:12.622-0400","confidence_smart_id":"95.50","transaction_id":80541467,"risk_rating":"neutral","reason_code":"1month_ant_device, 3Device_SameSmartID_inaWeek","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-19T23:29:05.853-0400","confidence_smart_id":"99.50","transaction_id":79671712,"risk_rating":"neutral","reason_code":"1month_ant_device","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-19T20:45:26.810-0400","confidence_smart_id":"100.00","transaction_id":78925657,"risk_rating":"neutral","reason_code":"1month_ant_device","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-19T20:45:25.349-0400","confidence_smart_id":"100.00","transaction_id":78925620,"risk_rating":"neutral","reason_code":"1month_ant_device","flow_type":"MI"},{"site_id":"MLA","date":"2012-05-19T20:36:11.280-0400","confidence_smart_id":"100.00","transaction_id":78925677,"risk_rating":"low","reason_code":"1month_ant_device, 3IPLogins_inaDay","flow_type":"MI"}]}}}]}]));
			response.end();
		}
		else {
			response.write(JSON.stringify([{"cust_id":100007345,"status":"guest","points":0,"registration_date":"2011-11-17T00:00:00.000-04:00","restrictions":[],"remedies":[],"verification_history":[],"risk":250,"risk_description":"LOW POINTS: 150.0 - RESTRICTIONS: 0.0 - RISK_RATING ({neutral(100)=1}): 100.0 - INHAB: 0.0 - NO_DEVICE_ID: 0.0","devices":[{"device_id":"ba67f61c2a1e4df9b84424f11fe59df0","searched_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-05-16T18:14:02.090-0400","confidence_smart_id":"100.00","transaction_id":60994292,"risk_rating":"neutral","reason_code":"","flow_type":"MI"}]}},"found_customer":{"detail":{"quantity":1,"history":[{"site_id":"MLA","date":"2012-06-03T13:46:18.000-0400","confidence_smart_id":"100.00","transaction_id":409936450,"risk_rating":"neutral","reason_code":"1month_ant_device, MPRisk_2Account_perDevice_inaWeek","flow_type":"MI"}]}}}]}]));
			response.end();
		}*/
	}

}
;




exports.executeListing = scoringOffController.executeListing;
exports.executeUps = scoringOffController.executeUps;


// Mappings
urlMapping.add ([{
		pattern: '^/scoring_off/ping',
		action: {
			'GET':scoringOffController.ping
		}
	},{
		pattern: '^/fraud/scoring/listing',
		action: {
			'POST':scoringOffController.executeListing
		}
	}
	,{
            pattern: '^/fraud/scoring/ups',
            action: {
                    'POST':scoringOffController.executeUps
            }
      }

]);
