var url = require('url');
var querystring = require('querystring');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");
/**
 * @author kzaporojets 14/08/2012- mockeo de scoring para probar el put de contingencia entre otras cosas
 **/
var scoringController = {
	echo: function(request, response) {
		response.writeHead(200, {
			'Content-Type': 'text/plain; charset=utf-8'
		});
		response.write("pong");
		response.end();
	},
	executePutScoring: function(request, response) {
		response.writeHead(200, {
			'Content-Type': 'text/plain; charset=utf-8'
		});

		var body = "";
		var jsonStr
		request.on('data', function(chunk) {
			body += chunk;
		});
		request.on('end', function() {
			jsonStr = JSON.parse(body);
			console.log(jsonStr);

			var scoring_id = jsonStr.scoring_id;

			if (scoring_id == 100254913333) {
				response.write('{"execution_id":100254913333, "execution_status":"CONTN", "cust_id":980474810,"points":70,"flow_id":"MI","total_execution_time":3,"profile":{"config":{"profile_id":"MIDLOW","reason_id":"MONEY_IN_MID","max_allowed_amount":-1,"top_breakpoint":80,"bottom_breakpoint":60,"sent_to_crm":false,"queue_id":null},"has_restriction":true}}');
				response.end();
				return;
			}

			response.write('{"execution_id":100067545364, "execution_status":"HYPCT", "cust_id":980474810,"points":70,"flow_id":"MI","total_execution_time":3,"profile":{"config":{"profile_id":"MIDHIGH","reason_id":"MONEY_IN_MID","max_allowed_amount":-1,"top_breakpoint":80,"bottom_breakpoint":60,"sent_to_crm":false,"queue_id":null},"has_restriction":true}}');
			response.end();
		});

		//		response.writeHead(503, {
		//				'Content-Type' : 'application/json; charset=utf-8'
		//			});
		//			response.write(JSON.stringify(["Service Unavailable"]));
		//		response.end();
	},
	postScoringAml: function(request, response) {
		response.writeHead(200, {
			'Content-Type': 'text/plain; charset=utf-8'
		});
		response.write('{"execution_id":100067545365, "execution_status":"HYPHO", "cust_id":980474810,"points":70,"flow_id":"ML","total_execution_time":3,"profile":{"config":{"profile_id":"MIDHIGH","reason_id":"MONEY_IN_MID","max_allowed_amount":-1,"top_breakpoint":80,"bottom_breakpoint":60,"sent_to_crm":false,"queue_id":null},"has_restriction":true}}');
		response.end();
	},
	putScoringAml: function(request, response) {


		var body = "";
		var jsonStr
		request.on('data', function(chunk) {
			body += chunk;
		});

		request.on('end', function() {
			jsonStr = JSON.parse(body);
			var scoring_id = jsonStr.scoring_id

			if (scoring_id == 115067981814) {

				response.writeHead(200, {
					'Content-Type': 'text/plain; charset=utf-8'
				});
				response.write('{"execution_id":115067981814,"cust_id":213957051,"flow_id":"ML","execution_status":"HYPHO","profile":{"config":{"profile_id":"LOW","reason_id":null,"sent_to_crm":false,"queue_id":"MPMI4"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":null}');
				response.end();
				return;
			}


			response.writeHead(200, {
				'Content-Type': 'text/plain; charset=utf-8'
			});
			response.write('{"execution_id":100067545365, "execution_status":"HYPHO", "cust_id":980474810,"points":70,"flow_id":"ML","total_execution_time":3,"profile":{"config":{"profile_id":"MIDHIGH","reason_id":"MONEY_IN_MID","max_allowed_amount":-1,"top_breakpoint":80,"bottom_breakpoint":60,"sent_to_crm":false,"queue_id":null},"has_restriction":true}}');
			response.end();


		});

	},
	executePostSecondScore: function(request, response) {
		response.writeHead(200, {
			'Content-Type': 'text/plain; charset=utf-8'
		});
		response.write('{"execution_id":100067545365, "execution_status":"HYPHO", "cust_id":980474810,"points":70,"flow_id":"SS","total_execution_time":3,"profile":{"config":{"profile_id":"MIDHIGH","reason_id":"MONEY_IN_MID","max_allowed_amount":-1,"top_breakpoint":80,"bottom_breakpoint":60,"sent_to_crm":false,"queue_id":null},"has_restriction":true}}');
		response.end();
	},
	executeIdemPost: function(request, response) {
		var body = "";
		var jsonStr
		request.on('data', function(chunk) {
			body += chunk;
		});
		request.on('end', function() {
			jsonStr = JSON.parse(body);
			var paymentId = jsonStr.id
			var referenceIdOw = jsonStr.ow_operation_id
			console.log ("payment_id:"+paymentId+ " - referenceIdOw:"+referenceIdOw);
			switch (paymentId) {
				case 500001:
				case 500010:
				case 500011:
				case 500012:
				case 500013:
				case 500014:
				case 500015:
				case 500016:
				case 500017:
				case 500018:
				case 500019:
				case 500020:
				case 500021:
				case 560020:
				case 560022:
				case 560023:
					response.writeHead(200);
					response.write('{"execution_id":101626546775,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"LOW","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 800000:
				case 888000:
				case 888001:
				case 900000:
					response.writeHead(200);
					response.write('{"execution_id":101626546786,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"LOW","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 500002:
				case 510010:
				case 510011:
				case 510012:
				case 510013:
				case 510014:
				case 510015:
				case 510016:
				case 510017:
				case 510018:
				case 510019:
				case 510020:
				case 510021:
					response.writeHead(200);
					response.write('{"execution_id":101626546775,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"MIDLOW","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 800001:
					response.writeHead(200);
					response.write('{"execution_id":101626546776,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"MIDLOW","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 500003:
				case 520010:
				case 520011:
				case 520012:
				case 520013:
				case 520014:
				case 520015:
				case 520016:
				case 520017:
				case 520018:
				case 520019:
				case 520020:
				case 520021:
					response.writeHead(200);
					response.write('{"execution_id":101626546775,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"MID","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 800002:
					response.writeHead(200);
					response.write('{"execution_id":101626546777,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"MID","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 500004:
				case 530010:
				case 530011:
				case 530012:
				case 530013:
				case 530014:
				case 530015:
				case 530016:
				case 530017:
				case 530018:
				case 530019:
				case 530020:
				case 530021:
				case 1019591748:
					response.writeHead(200);
					response.write('{"execution_id":101626546775,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"MIDHIGH","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 800003:
					response.writeHead(200);
					response.write('{"execution_id":101626546778,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"MIDHIGH","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 500005:
				case 540010:
				case 540011:
				case 540012:
				case 540013:
				case 540014:
				case 540015:
				case 540016:
				case 540017:
				case 540018:
				case 540019:
				case 540020:
				case 540021:
				case 540022:
				case 540030:
					response.writeHead(200);
					response.write('{"execution_id":101626546775,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"MIDINH","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 800004:
					response.writeHead(200);
					response.write('{"execution_id":101626546779,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"MIDINH","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 560000:
				case 560001:
				case 560002:
					response.writeHead(200);
					response.write('{"execution_id":101626546775,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"MIDINH","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"strong_rules","risk":null}');
				break;
				case 570000:
					response.writeHead(200);
					response.write('{"execution_id":101626546781,"cust_id":37776940,"flow_id":"MT","execution_status":"HYPHO","profile":{"config":{"profile_id":"MIDINH","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"strong_rules","risk":null}');
				break;
				case 670010:
					response.writeHead(200);
					response.write('{"execution_id":101626546782,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"HIGH","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"strong_rules","risk":null}');
				break;
				case 500006:
				case 550010:
				case 550011:
				case 550012:
				case 550013:
				case 550014:
				case 550015:
				case 550016:
				case 550017:
				case 550018:
				case 550019:
				case 550020:
				case 550021:
				case 550027:
				case 550026:
				case 550025:
				case 550040:
				case 550041:
				case 550042:
				case 550043:
				case 550044:
				case 550045:
				case 550046:
				case 550047:
				case 550048:
					response.writeHead(200);
					response.write('{"execution_id":101626546775,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"HIGH","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 800005:
				case 999000:
				case 999001:
				case 999002:
					response.writeHead(200);
					response.write('{"execution_id":101626546783,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"HIGH","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 550030:
					response.writeHead(200);
					response.write('{"execution_id":101626546775,"cust_id":37776941,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"MID","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 500007:
					response.writeHead(200);
					response.write('{"execution_id":101626546775,"cust_id":37776940,"flow_id":"MI","execution_status":"CONT","profile":{},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 500008:
					response.writeHead(200);
					response.write('{"execution_id":101626546775,"cust_id":37776940,"flow_id":"MI","execution_status":"CONTN","profile":{},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
				break;
				case 500009:
				case 777009:
					response.writeHead(500);
					response.write('{}');
				break;
				case 600000:
					response.writeHead(200);
					response.write('{"execution_id":102078706403,"cust_id":185939106,"flow_id":"MO","execution_status":"HYPHO","profile":{"config":{"profile_id":"LOW","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":5}');
				break;
				case 600001:
					response.writeHead(200);
					response.write('{"execution_id":102078706404,"cust_id":185939106,"flow_id":"MO","execution_status":"HYPHO","profile":{"config":{"profile_id":"MID","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":5}');
				break;
				case 600002:
					response.writeHead(200);
					response.write('{"execution_id":102078706405,"cust_id":185939106,"flow_id":"MO","execution_status":"HYPHO","profile":{"config":{"profile_id":"MIDHIGH","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":5}');
				break;
				case 600003:
					response.writeHead(200);
					response.write('{"execution_id":102078706406,"cust_id":185939106,"flow_id":"MO","execution_status":"HYPHO","profile":{"config":{"profile_id":"MIDINH","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":5}');
				break;
				case 600004:
					response.writeHead(200);
					response.write('{"execution_id":102078706407,"cust_id":185939106,"flow_id":"MO","execution_status":"HYPHO","profile":{"config":{"profile_id":"HIGH","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":5}');
				break;
				case 600005:
					response.writeHead(200);
					response.write('{"execution_id":102078706408,"cust_id":185939106,"flow_id":"MO","execution_status":"CONT","profile":{},"has_restriction":false},"detail":"default","provider_id":"ml","risk":5}');
				break;
				case 600006:
					response.writeHead(200);
					response.write('{"execution_id":102078706409,"cust_id":185939106,"flow_id":"MO","execution_status":"CONTN","profile":{},"has_restriction":false},"detail":"default","provider_id":"ml","risk":5}');
				break;
				case 600007:
					response.writeHead(500);
					response.write('{}');
				break;
				case 600010:
					if (referenceIdOw == 2) {
						response.writeHead(200);
						response.write('{"execution_id":102078706410,"cust_id":185939106,"flow_id":"MO","execution_status":"HYPCN","profile":{"config":{"profile_id":"LOW","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0}');

					} else {
						response.writeHead(200);
						response.write('{"execution_id":102078706410,"cust_id":185939106,"flow_id":"MO","execution_status":"CONT","profile":{},"has_restriction":false},"detail":"default","provider_id":"ml","risk":5}');
					}
				break;
				case 900001:
					if (referenceIdOw == 3) {
						response.writeHead(200);
						response.write('{"execution_id":101626546775,"cust_id":37776940,"flow_id":"MI","execution_status":"CONT","profile":{},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
					} else {
						response.writeHead(200);
						response.write('{"execution_id":101626546775,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"LOW","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
					}
				break;
				default:
					response.writeHead(200);
					response.write('{"execution_id":101626546775,"cust_id":37776940,"flow_id":"MI","execution_status":"HYPHO","profile":{"config":{"profile_id":"LOW","reason_id":null,"sentToCrm":false,"queueId":"MPLOW"},"has_restriction":false},"detail":"default","provider_id":"ml","risk":0.0037138834773313063}');
					break;
			}
			response.end();
		});
	},
	index: function(request, response) {

		jsonHandler.getContent(request, function(topicsArgs) {

			var id = topicsArgs.id;
			var data = url.parse(request.url, true).query;

			var indexed = resourceManager.searchResource('scoringIndexer', id);

			if (indexed) {

				var versionType = data.versionType
				var oldDate = new Date(indexed.last_modified_date).getTime()
				var newDate = new Date(topicsArgs.last_modified_date).getTime()

				if (!((versionType == "force") ||
						(versionType == "external_gte" && newDate == oldDate) ||
						(newDate > oldDate))) {

					console.log("conflicto de version guardando id: " + id + " con json: " + JSON.stringify(topicsArgs));

					jsonHandler.showResponse({
						message: "version conflict"
					}, 409, response);
					return;
				}
			}

			console.log("scoring idexer guardando id: " + id + " con json: " + JSON.stringify(topicsArgs));

			resourceManager.saveTemporalResource('scoringIndexer', id, -1, topicsArgs);

			jsonHandler.showOKResponse({
				message: "resource created",
				"status": 201,
				"id": id
			}, response);
		});

	},
	updateUser: function(request, response) {

		response.writeHead(204, {
			'Content-Type': 'text/plain; charset=utf-8'
		});
		response.write('{"message":"resource updated", "status":204}');
		response.end();


	},

	search: function(request, response) {
		var data = url.parse(request.url, true).query;

		if(data["reference_id"] == 117483093){
			jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":1},"results":[{"id":100246791520,"user_id":134290859,"flow_id":"MI","points":20,"profile_id":"MIDLOW","reference_id":117483093,"secundary_reference_id":1235555,"execution_time":2634,"hold_by_scoring":'Y',"site_id":"MLA","dollar_amount":15.00,"version":"HYPHO","config_id":"STD","creation_date":"2015-06-01T12:32:30.000-0400","last_modified_date":"2015-06-01T12:32:31.000-0400","providers":[{"id":"strong_rules","external_id":"102018413301","profile_id":"LOW"},{"id":"ml","external_id":"102018413303","profile_id":"LOW"},{"id":"mantika","external_id":"100200015125","profile_id":"LOW"}],"detail":null,"industry":"default","risk":null,"provider_id":"ml"}]}, response);
		} else if(data["reference_id"] == 1234){
			jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":2},"results":[{"id":112244,"user_id":100231,"flow_id":"MI","points":20,"profile_id":"MIDLOW","reference_id":1234,"secundary_reference_id":1235,"execution_time":2634,"hold_by_scoring":true,"site_id":"MLA","dollar_amount":15.00,"version":"CONT","config_id":"CONT","creation_date":"2015-05-02T14:53:21.000-0400","last_modified_date":"2015-05-02T14:53:22.000-0400","providers":[{"id":"strong_rules","external_id":"101920494376","profile_id":"LOW"},{"id":"mantika","external_id":"101920494355","profile_id":"LOW"},{"id":"ml","external_id":"101920494393","profile_id":"MIDLOW"}],"detail":"default","industry":"default","risk":null,"provider_id":"ml"},{"id":112255,"user_id":100231,"flow_id":"MI","points":20,"profile_id":"MIDLOW","reference_id":1234,"secundary_reference_id":1235,"execution_time":2534,"hold_by_scoring":true,"site_id":"MLA","dollar_amount":15.00,"version":"CONT","config_id":"CONT","creation_date":"2015-05-02T14:53:21.000-0400","last_modified_date":"2015-05-02T14:53:22.000-0400","providers":[{"id":"strong_rules","external_id":"101920494376","profile_id":"LOW"},{"id":"mantika","external_id":"101920494355","profile_id":"LOW"},{"id":"ml","external_id":"101920494393","profile_id":"MIDLOW"}],"detail":"default","industry":"default","risk":null,"provider_id":"ml"}]}, response);
		} else if(data["reference_id"] == 887660011){
			jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":1},"results":[{"id":101920494355,"user_id":91184149,"flow_id":"MI","points":80,"profile_id":"HIGH","reference_id":887660011,"secundary_reference_id":1118640700,"execution_time":3,"hold_by_scoring":true,"site_id":"MLV","dollar_amount":5.65,"version":"HYPHO","config_id":"OFF","creation_date":"2015-05-02T14:53:21.000-0400","last_modified_date":"2015-05-02T14:53:22.000-0400","providers":[{"id":"strong_rules","external_id":"101920494376","profile_id":"HIGH"},{"id":"mantika","external_id":"101920494355","profile_id":"LOW"},{"id":"ml","external_id":"101920494393","profile_id":"LOW"}],"detail":"default","industry":"default","risk":null,"provider_id":"strong_rules"}]}, response);
		} else if(data["reference_id"] == 900723640){
			jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":1},"results":[{"id":101920494355,"user_id":91184149,"flow_id":"MI","points":80,"profile_id":"HIGH","reference_id":887660011,"secundary_reference_id":1118640700,"execution_time":3,"hold_by_scoring":true,"site_id":"MLV","dollar_amount":5.65,"version":"HYPHO","config_id":"OFF","creation_date":"2015-05-02T14:53:21.000-0400","last_modified_date":"2015-05-02T14:53:22.000-0400","providers":[{"id":"strong_rules","external_id":"101920494376","profile_id":"HIGH"},{"id":"mantika","external_id":"101920494355","profile_id":"LOW"},{"id":"ml","external_id":"101920494393","profile_id":"LOW"}],"detail":"default","industry":"default","risk":null,"provider_id":"strong_rules"}]}, response);
		} else if (data["reference_id"] == 400002001) {
			jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":1},"results":[{"id":100200015124,"user_id":151211818,"flow_id":"MI","points":0,"profile_id":"LOW","reference_id":905587811,"secundary_reference_id":1142375068,"execution_time":74,"hold_by_scoring":false,"site_id":"MLB","dollar_amount":50.15,"version":"HYPHO","config_id":"MIS","creation_date":"2015-06-01T12:32:30.000-0400","last_modified_date":"2015-06-01T12:32:31.000-0400","providers":[{"id":"strong_rules","external_id":"102018413301","profile_id":"LOW"},{"id":"ml","external_id":"102018413303","profile_id":"LOW"},{"id":"mantika","external_id":"100200015124","profile_id":"LOW"}],"detail":"default","industry":"default","risk":null,"provider_id":"ml"}]}, response);
		} else if (data["reference_id"] == 400672001) {
			jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":1},"results":[{"id":100200015125,"user_id":151211818,"flow_id":"MI","points":0,"profile_id":"LOW","reference_id":905587811,"secundary_reference_id":1142375068,"execution_time":74,"hold_by_scoring":false,"site_id":"MLB","dollar_amount":50.15,"version":"HYPHO","config_id":"MIS","creation_date":"2015-06-01T12:32:30.000-0400","last_modified_date":"2015-06-01T12:32:31.000-0400","providers":[{"id":"strong_rules","external_id":"102018413301","profile_id":"LOW"},{"id":"ml","external_id":"102018413303","profile_id":"LOW"},{"id":"mantika","external_id":"100200015125","profile_id":"LOW"}],"detail":"default","industry":"default","risk":null,"provider_id":"ml"}]}, response);

		} else if (data["reference_id"] == 402672001) {
			jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":1},"results":[{"id":100200015126,"user_id":151211818,"flow_id":"MI","points":0,"profile_id":"LOW","reference_id":905587811,"secundary_reference_id":1142375068,"execution_time":74,"hold_by_scoring":false,"site_id":"MLB","dollar_amount":50.15,"version":"HYPHO","config_id":"MIS","creation_date":"2015-06-01T12:32:30.000-0400","last_modified_date":"2015-06-01T12:32:31.000-0400","providers":[{"id":"strong_rules","external_id":"102018413301","profile_id":"LOW"},{"id":"ml","external_id":"102018413303","profile_id":"LOW"},{"id":"mantika","external_id":"100200015125","profile_id":"LOW"}],"detail":"default","industry":"default","risk":null,"provider_id":"ml"}]}, response);

		} else if (data["reference_id"] == 403672001) {
			jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":1},"results":[{"id":100200015127,"user_id":151211818,"flow_id":"MI","points":0,"profile_id":"LOW","reference_id":905587811,"secundary_reference_id":1142375068,"execution_time":74,"hold_by_scoring":false,"site_id":"MLB","dollar_amount":50.15,"version":"HYPHO","config_id":"MIS","creation_date":"2015-06-01T12:32:30.000-0400","last_modified_date":"2015-06-01T12:32:31.000-0400","providers":[{"id":"strong_rules","external_id":"102018413301","profile_id":"LOW"},{"id":"ml","external_id":"102018413303","profile_id":"LOW"},{"id":"mantika","external_id":"100200015125","profile_id":"LOW"}],"detail":"default","industry":"default","risk":null,"provider_id":"ml"}]}, response);

		} else if (data["reference_id"] == 404672001) {
			jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":1},"results":[{"id":100200015128,"user_id":151211818,"flow_id":"MI","points":0,"profile_id":"LOW","reference_id":905587811,"secundary_reference_id":1142375068,"execution_time":74,"hold_by_scoring":false,"site_id":"MLB","dollar_amount":50.15,"version":"HYPHO","config_id":"MIS","creation_date":"2015-06-01T12:32:30.000-0400","last_modified_date":"2015-06-01T12:32:31.000-0400","providers":[{"id":"strong_rules","external_id":"102018413301","profile_id":"LOW"},{"id":"ml","external_id":"102018413303","profile_id":"LOW"},{"id":"mantika","external_id":"100200015125","profile_id":"LOW"}],"detail":"default","industry":"default","risk":null,"provider_id":"ml"}]}, response);

		} else if (data["secundary_reference_id"] == 1235) {
			jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":2},"results":[{"id":112244,"user_id":100231,"flow_id":"MI","points":20,"profile_id":"MIDLOW","reference_id":1234,"secundary_reference_id":1235,"execution_time":2634,"hold_by_scoring":true,"site_id":"MLA","dollar_amount":15.00,"version":"CONT","config_id":"CONT","creation_date":"2015-05-02T14:53:21.000-0400","last_modified_date":"2015-05-02T14:53:22.000-0400","providers":[{"id":"strong_rules","external_id":"101920494376","profile_id":"LOW"},{"id":"mantika","external_id":"101920494355","profile_id":"LOW"},{"id":"ml","external_id":"101920494393","profile_id":"MIDLOW"}],"detail":"default","industry":"default","risk":null,"provider_id":"ml"},{"id":112255,"user_id":100231,"flow_id":"MI","points":20,"profile_id":"MIDLOW","reference_id":1234,"secundary_reference_id":1235,"execution_time":2534,"hold_by_scoring":true,"site_id":"MLA","dollar_amount":15.00,"version":"CONT","config_id":"CONT","creation_date":"2015-05-02T14:53:21.000-0400","last_modified_date":"2015-05-02T14:53:22.000-0400","providers":[{"id":"strong_rules","external_id":"101920494376","profile_id":"LOW"},{"id":"mantika","external_id":"101920494355","profile_id":"LOW"},{"id":"ml","external_id":"101920494393","profile_id":"MIDLOW"}],"detail":"default","industry":"default","risk":null,"provider_id":"ml"}]}, response);

		} else if (data["reference_id"] == 117483093) {
			jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":1},"results":[{"id":100246791520,"user_id":134290859,"flow_id":"MI","points":20,"profile_id":"MIDLOW","creation_date":"2013-05-31T10:00:00.000-0400","reference_id":117483093,"secundary_reference_id":1235555,"execution_time":2634,"hold_by_scoring":"Y","last_modified_date":"2013-05-31T10:00:00.000-0400","site_id":"MLA","dollar_amount":15.00,"config_id":"STD","version":"HYPHO","detail":null,"provider_id":"ml"}]}, response);

		} else if (data["reference_id"] == 493882174) {
			jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":1},"results":[{"id":100339404363,"user_id":65289573,"flow_id":"PU","points":20,"profile_id":"LOW","creation_date":"2013-06-28T10:00:00.000-0400","reference_id":493882174,"secundary_reference_id":1235555,"execution_time":2634,"hold_by_scoring":"Y","last_modified_date":"2013-06-28T10:00:00.000-0400","site_id":"MLB","dollar_amount":15.00,"config_id":"STD","version":"HYPHO","detail":null,"provider_id":"ml"}]}, response);

		} else if (data["reference_id"] == 1234 || data["secundary_reference_id"] == 1235) {
			jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":1},"results":[{"id":112244,"user_id":100231,"flow_id":"MI","points":20,"profile_id":"MIDLOW","creation_date":"2013-05-31T10:00:00.000-0400","reference_id":1234,"secundary_reference_id":1235,"execution_time":2634,"hold_by_scoring":"Y","last_modified_date":"2013-05-31T10:00:00.000-0400","site_id":"MLA","dollar_amount":15.00,"config_id":"WLT","version":"CONT","detail":null,"provider_id":"ml","risk":60.4},{"id":112255,"user_id":100231,"flow_id":"MI","points":20,"profile_id":"MIDLOW","creation_date":"2013-05-31T10:00:00.000-0400","reference_id":1234,"secundary_reference_id":1235,"execution_time":2634,"hold_by_scoring":"Y","last_modified_date":"2013-05-31T10:00:00.000-0400","site_id":"MLA","dollar_amount":15.00,"config_id":"WLT","version":"CONT","detail":"default","provider_id":"ml","risk":60.8}]}, response);

		} else {

			var resp = resourceManager.searchResource('scoringIndexer', data["id"]);
			if (resp) {
				jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":1},"results":[resp]}, response);
			} else {
				jsonHandler.showOKResponse({"paging":{"offset":0,"limit":100,"total":0},"results":{}}, response);
			}
		}
	},

	cleanIndexedResources: function(request, response) {
		resourceManager.cleanResources("scoringIndexer", response)
	},


	getIndex: function(request, response) {
		console.log("entrando a getIndex")
		response.writeHead(200, {
			'Content-Type': 'application/json; charset=utf-8'
		});

		console.log("scoringIndexer getIndex ")
		var pathname = url.parse(request.url).pathname;
		var uriRegExp = new RegExp('/scoring/index/(\\d+)');
		uriRegExp.exec(pathname);

		var id = RegExp.$1;

		var resp = resourceManager.getResource('scoringIndexer', id, response);

		console.log("get scoringIndexer => " + resp);

		if (!resp) {
			jsonHandler.showNotFoundResponse({
				id: "No record with id: " + id + " was found",
				found: "false"
			}, response);
		} else {
			jsonHandler.showOKResponse(JSON.stringify(resp));
		}

	},
	gescoringExecution: function(request, response) {
		response.writeHead(200, {
			'Content-Type': 'text/plain; charset=utf-8'
		});
		response.write('{"execution_id":101701668141,"cust_id":90640403,"flow_id":"ML","points":0,"profile_id":"LOW","ref_id":1047593720,"detail":"default","exec_time":9,"hold_by_scoring":"N","site_id":"MLB","dol_amount":7.98,"new_version":"CONT","config_id":"COL","creation_date":"2015-02-20T10:01:55.000Z","provider_id":"ml","providers":[]}');
		response.end();
	},
};


/**
json con perfil HIGH que devuelve el PUT:
{"execution_id":100067545364,"cust_id":980474810,"points":80,"flow_id":"MI","total_execution_time":3,"profile":
{"config":{"profile_id":"HIGH","reason_id":"MONEY_IN_TC","max_allowed_amount":-1,"top_breakpoint":100,"bottom_breakpoint":80,
"sent_to_crm":false,"queue_id":null},"has_restriction":true}}

*/

exports.echo = scoringController.echo;
exports.executePutScoring = scoringController.executePutScoring;
exports.postScoringAml = scoringController.postScoringAml;
exports.executePostSecondScore = scoringController.executePostSecondScore;
exports.index = scoringController.index
exports.executeIdemPost = scoringController.executeIdemPost
exports.getIndex = scoringController.getIndex
exports.search = scoringController.search
exports.gescoringExecution = scoringController.gescoringExecution
exports.updateUser = scoringController.updateUser

// Mappings
urlMapping.add ([{
		pattern: '^/scoring/echo',
		action: {
			'GET':scoringController.echo
		}
	},
	{
		pattern: '^/scoring/execution/moneyLaundering*',
		action: {
			'POST':scoringController.postScoringAml,'PUT':scoringController.putScoringAml
		}
	},
	{
		pattern: '^/scoring/execution/runfast*',
		action: {
			'PUT':scoringController.executePutScoring
		}
	},
	{
		pattern: '^/scoring/parallel/execution/runfast*',
		action: {
			'POST':scoringController.executePutScoring
		}
	},
	{
		pattern: '^/scoring/execution/secondScore*',
		action: {
			'POST':scoringController.executePostSecondScore
		}
	},
	{
		pattern: '^/scoring/execution/moneyOut*',
		action: {
			'POST':scoringController.executeIdemPost
		}
	},
        {
            pattern: '^/scoring/payments/external*',
            action: {
                    'POST':scoringController.executeIdemPost
            }
        },
	{
		pattern: '^/scoring/payments*',
		action: {
			'POST':scoringController.executeIdemPost
		}
        },
        {
            pattern: '^/scoring/execution/idempost',
            action: {
                    'POST':scoringController.executeIdemPost
            }
        },
        {
            pattern: '^/scoring/execution/(\\d+)',
            action: {
                    'GET':scoringController.gescoringExecution,'PUT':scoringController.updateUser
            }
        },
        {
            pattern: '^/scoring/index/(\\d+)',
            action: {
                    'GET':scoringController.getIndex
            }
        },
	{
            pattern: '^/scoring/index/ping',
            action: {
                    'GET':scoringController.echo
            }
        },
        {
            pattern: '^/scoring/index',
            action: {
                    'POST':scoringController.index
            }
		},
        {
            pattern: '^/scoring/search$',
            action: {
                    'GET':scoringController.search
            }
        },
        {
            pattern: '^/scoring/search/cleanAll',
            action: {
                    'GET':scoringController.cleanIndexedResources,
                    'PUT':scoringController.cleanIndexedResources
            }
        }
]);
