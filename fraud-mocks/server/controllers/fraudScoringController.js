var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var fraudScoringController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
        },
        search : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            var qs = url.parse(request.url, true).query;

            var result = [{
                    "sc_cust_id" : 100049555582,
                    "cust_id" : 114361826,
                    "flow_type" : qs.flow_type,
                    "points" : 10,
                    "profile_id" : "LOW",
                    "creation_date" : "2012-07-03T15:14:26.000-0400",
                    "ref_id" : qs.ref_id,
                    "exec_time" : 140,
                    "hold_by_scoring" : "N",
                    "last_modified_date" : "2012-07-03T15:14:26.000-0400",
                    "site_id" : "MLM",
                    "dol_amount" : 0.37,
                    "new_version" : "HYPHO",
                    "config_id" : "RMD"
                },
                {
                    "sc_cust_id" : 100049555582,
                    "cust_id" : 114361826,
                    "flow_type" : qs.flow_type,
                    "points" : 10,
                    "profile_id" : "LOW",
                    "creation_date" : "2012-07-03T15:14:26.000-0400",
                    "ref_id" : qs.ref_id,
                    "exec_time" : 140,
                    "hold_by_scoring" : "N",
                    "last_modified_date" : "2012-07-03T15:14:26.000-0400",
                    "site_id" : "MLM",
                    "dol_amount" : 0.37,
                    "new_version" : "HYPHO",
                    "config_id" : "STD"
                }];

                if (qs.ref_id == "333333") {
                    console.log("El refid es 333333")
                    result = {};
                }

                if(qs.ref_id == "703479498"){
                    console.log("El refid es 703479498")
                    result = [{"sc_cust_id":101275861522,"cust_id":99555451,"flow_type":"ML","profile_id":"LOW","creation_date":"2014-09-24T12:28:05.000-0400","ref_id":703479498,"ref_id_nw":848125395,"hold_by_scoring":"N","last_modified_date":"2014-09-24T12:28:06.000-0400","site_id":"MLB","dol_amount":5.39,"execution_status":"HYPHO","config_id":"PAY","detail":"default","provider_id":"ml","providers":[],"risk":null}];
                }

                if(qs.ref_id == "702085531"){
                    console.log("El refid es 702085531")
                    result = [{"sc_cust_id":101264008626,"cust_id":36632371,"flow_type":"ML","profile_id":"LOW","creation_date":"2014-09-18T15:05:32.000-0400","ref_id":702085531,"ref_id_nw":null,"hold_by_scoring":"N","last_modified_date":"2014-09-18T15:05:34.000-0400","site_id":"MLB","dol_amount":41.23,"execution_status":"HYPHO","config_id":"WIT","detail":"default","provider_id":"ml","providers":[],"risk":null}];
                }

                if(qs.ref_id == "36632371"){
                    console.log("El refid es 36632371")
                    result = [{"sc_cust_id":101264008626,"cust_id":36632371,"flow_type":"ML","profile_id":"LOW","creation_date":"2014-09-18T15:05:32.000-0400","ref_id":36632371,"ref_id_nw":null,"hold_by_scoring":"N","last_modified_date":"2014-09-18T15:05:34.000-0400","site_id":"MLB","dol_amount":41.23,"execution_status":"HYPHO","config_id":"CAD","detail":"default","provider_id":"ml","providers":[],"risk":null}];
                }

                if(qs.ref_id == "99555451"){
                    console.log("El refid es 99555451")
                    result = [{"sc_cust_id":101264008626,"cust_id":99555451,"flow_type":"ML","profile_id":"LOW","creation_date":"2014-09-18T15:05:32.000-0400","ref_id":99555451,"ref_id_nw":null,"hold_by_scoring":"N","last_modified_date":"2014-09-18T15:05:34.000-0400","site_id":"MLB","dol_amount":41.23,"execution_status":"HYPHO","config_id":"CAD","detail":"default","provider_id":"ml","providers":[],"risk":null}];
                }

                if(qs.reference_id == "900723640"){
                    console.log("El refid es 99555451")
                    result = [{"id":101920494355,"user_id":91184149,"flow_id":"MI","points":80,"profile_id":"HIGH","reference_id":887660011,"secundary_reference_id":1118640700,"execution_time":3,"hold_by_scoring":true,"site_id":"MLV","dollar_amount":5.65,"version":"HYPHO","config_id":"OFF","creation_date":"2015-05-02T14:53:21.000-0400","last_modified_date":"2015-05-02T14:53:22.000-0400","providers":[{"id":"strong_rules","external_id":"101920494376","profile_id":"HIGH"},{"id":"mantika","external_id":"101920494355","profile_id":"LOW"},{"id":"ml","external_id":"101920494393","profile_id":"LOW"}],"detail":"default","industry":"default","risk":null,"provider_id":"strong_rules"}];
                }
            
            response.write(JSON.stringify(result));
            response.end();
        }, 

        getResults: function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            var result = {'paging':{'offset':2,'limit':10,'total':220},'results':[{'id':null,'config_id':'STD','cust_id':97815155,'execution_date':'2014-03-01T07:55:06.000-04:00','flow_id':'MS','log_dt':'2014-03-01T07:55:06.000-04:00','params':'dol_amoun = 17.015745000000000846540615384583361446857452392578125','profile_id':'MID','ref_id':541265304,'score':50,'scoring_id':100764688905,'site_id':'MLB','spss_id':199079331,'spss_version':'HYPHO','comments':'comentarios del scoring','status':'A'},{'id':null,'config_id':'STD','cust_id':155085658,'execution_date':'2014-03-06T22:06:14.000-04:00','flow_id':'MS','log_dt':'2014-03-06T22:06:14.000-04:00','params':'dol_amoun = 64.9350','profile_id':'MID','ref_id':545614919,'score':50,'scoring_id':100777415869,'site_id':'MLB','spss_id':199087505,'spss_version':'HYPHO','status':'A'},{'id':null,'config_id':'STD','cust_id':155085048,'execution_date':'2014-03-06T21:54:30.000-04:00','flow_id':'MS','log_dt':'2014-03-06T21:54:30.000-04:00','params':'dol_amoun = 0.4329','profile_id':'MID','ref_id':545610371,'score':50,'scoring_id':100777304453,'site_id':'MLB','spss_id':199087495,'spss_version':'HYPHO','status':'A'},{'id':null,'config_id':'STD','cust_id':154890327,'execution_date':'2014-03-06T21:03:22.000-04:00','flow_id':'MS','log_dt':'2014-03-06T21:03:22.000-04:00','params':'dol_amoun = 519.4800','profile_id':'MID','ref_id':544819034,'score':50,'scoring_id':100777254426,'site_id':'MLB','spss_id':199087456,'spss_version':'HYPHO','status':'A'},{'id':null,'config_id':'STD','cust_id':140350600,'execution_date':'2014-02-14T17:19:59.000-04:00','flow_id':'MS','log_dt':'2014-02-14T17:19:59.000-04:00','params':'dol_amoun = 247.5068','profile_id':'MID','ref_id':533493756,'score':50,'scoring_id':100724333905,'site_id':'MLB','spss_id':199011574,'spss_version':'HYPHO','status':'A'},{'id':null,'config_id':'STD','cust_id':155083241,'execution_date':'2014-03-06T21:04:17.000-04:00','flow_id':'MS','log_dt':'2014-03-06T21:04:17.000-04:00','params':'dol_amoun = 649.3500','profile_id':'MID','ref_id':545604732,'score':50,'scoring_id':100777255304,'site_id':'MLB','spss_id':199087459,'spss_version':'HYPHO','status':'A'},{'id':null,'config_id':'STD','cust_id':151743856,'execution_date':'2014-02-15T00:39:21.000-04:00','flow_id':'MS','log_dt':'2014-02-15T00:39:21.000-04:00','params':'dol_amoun = 19.242216000000000832415025797672569751739501953125000','profile_id':'MID','ref_id':533474254,'score':50,'scoring_id':100725197526,'site_id':'MLB','spss_id':199012742,'spss_version':'HYPHO','status':'A'},{'id':null,'config_id':'STD','cust_id':155011025,'execution_date':'2014-03-06T20:48:48.000-04:00','flow_id':'MS','log_dt':'2014-03-06T20:48:48.000-04:00','params':'dol_amoun = 15.108209999999999384812099378905259072780609130859375','profile_id':'MID','ref_id':545603042,'score':50,'scoring_id':100777237912,'site_id':'MLB','spss_id':199087437,'spss_version':'HYPHO','status':'A'},{'id':null,'config_id':'STD','cust_id':151466174,'execution_date':'2014-03-06T20:39:12.000-04:00','flow_id':'MS','log_dt':'2014-03-06T20:39:12.000-04:00','params':'dol_amoun = 99.1341','profile_id':'MID','ref_id':545601644,'score':50,'scoring_id':100777227030,'site_id':'MLB','spss_id':199087428,'spss_version':'HYPHO','status':'A'},{'id':null,'config_id':'STD','cust_id':134324851,'execution_date':'2014-03-06T20:18:26.000-04:00','flow_id':'MS','log_dt':'2014-03-06T20:18:26.000-04:00','params':'dol_amoun = 31601.7000','profile_id':'MID','ref_id':545598870,'score':50,'scoring_id':100777134210,'site_id':'MLB','spss_id':199095603,'spss_version':'HYPHO','status':'A'}]};
            response.write(JSON.stringify(result));
            response.end();        
        },

         getScoId: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/fraud/scoring/(\\d+)');
            uriRegExp.exec(pathname);
                
            var scoId = RegExp.$1;

            var resp = ""
                
                if(scoId == "100425674001"){
                    console.log("Entro al scoring id => " + scoId);
                    resp =  {
                            "sc_cust_id": 100425674001,
                            "cust_id": 81605112,
                            "flow_type": "MI",
                            "profile_id": "LOW",
                            "creation_date": "2014-03-24T15:18:38.000-0400",
                            "ref_id": 636261293,
                            "ref_id_nw": 757859801,
                            "hold_by_scoring": "N",
                            "last_modified_date": "2014-03-24T15:18:39.000-0400",
                            "site_id": "MLB",
                            "dol_amount": 30.04,
                            "execution_status": "HYPHO",
                            "config_id": "STD",
                            "detail": "default",
                            "provider_id": "mantika",
                            "providers": [
                                {
                                    "id": "neural_network_mp",
                                    "external_id": "100825544227",
                                    "input": null,
                                    "result": "{\"new_version\":\"HYPHO\",\"hold_by_scoring\":\"N\",\"detail\":\"default\",\"config_id\":\"STD\",\"profile_id\":\"LOW\",\"scoring_provider\":\"neural_network_mp\",\"site_id\":\"MLB\",\"cust_id\":81605112,\"risk\":0.004444305979472121,\"creation_date\":\"2014-03-24T15:18:40.410Z\",\"dol_amount\":30.04,\"flow_id\":\"MI\",\"exec_time\":43,\"scoring_version\":\"HYPHO\",\"ref_id\":757859801,\"execution_id\":100825472872,\"points\":10,\"profile\":{\"detail\":\"default\",\"profile_id\":\"LOW\",\"config\":{\"max_allowed_amount\":10000000,\"bottom_break_point\":0,\"top_break_point\":20,\"reason_id\":null,\"queue_id\":\"MPMI4\"},\"has_restriction\":\"N\"}}",
                                    "profile_id": "LOW"
                                }
                            ],
                            "risk": 0.02
                        };
                    
                    response.write(JSON.stringify(resp));
                    response.end();
                    
                    return
                }
            
                if(scoId == "100425674002"){
                    console.log("Entro al scoring id => " + scoId);
                    resp =  {
                            "sc_cust_id": 100425674001,
                            "cust_id": 81605112,
                            "flow_type": "MI",
                            "profile_id": "LOW",
                            "creation_date": "2014-03-24T15:18:38.000-0400",
                            "ref_id": 636261293,
                            "ref_id_nw": 757859801,
                            "hold_by_scoring": "N",
                            "last_modified_date": "2014-03-24T15:18:39.000-0400",
                            "site_id": "MLB",
                            "dol_amount": 30.04,
                            "execution_status": "HYPHO",
                            "config_id": "STD",
                            "detail": "default",
                            "provider_id": "mantika",
                            "providers": [
                                {
                                    "id": "neural_network_mp",
                                    "external_id": "100825544227",
                                    "input": null,
                                    "result": "{\"new_version\":\"HYPHO\",\"hold_by_scoring\":\"N\",\"detail\":\"default\",\"config_id\":\"STD\",\"profile_id\":\"LOW\",\"scoring_provider\":\"neural_network_mp\",\"site_id\":\"MLB\",\"cust_id\":81605112,\"risk\":0.004444305979472121,\"creation_date\":\"2014-03-24T15:18:40.410Z\",\"dol_amount\":30.04,\"flow_id\":\"MI\",\"exec_time\":43,\"scoring_version\":\"HYPHO\",\"ref_id\":757859801,\"execution_id\":100825472872,\"points\":10,\"profile\":{\"detail\":\"default\",\"profile_id\":\"LOW\",\"config\":{\"max_allowed_amount\":10000000,\"bottom_break_point\":0,\"top_break_point\":20,\"reason_id\":null,\"queue_id\":\"MPMI4\"},\"has_restriction\":\"N\"}}",
                                    "profile_id": "LOW"
                                }
                            ],
                            "risk": 1.02
                        };
                    
                    response.write(JSON.stringify(resp));
                    response.end();
                    
                    return
                }
                
                if(scoId == "100425674003"){
                    console.log("Entro al scoring id => " + scoId);
                    resp =  {
                            "sc_cust_id": 100425674001,
                            "cust_id": 81605112,
                            "flow_type": "MI",
                            "profile_id": "LOW",
                            "creation_date": "2014-03-24T15:18:38.000-0400",
                            "ref_id": 636261293,
                            "ref_id_nw": 757859801,
                            "hold_by_scoring": "N",
                            "last_modified_date": "2014-03-24T15:18:39.000-0400",
                            "site_id": "MLB",
                            "dol_amount": 30.04,
                            "execution_status": "HYPHO",
                            "config_id": "STD",
                            "detail": "default",
                            "provider_id": "mantika",
                            "providers": [
                                {
                                    "id": "neural_network_mp",
                                    "external_id": "100825544227",
                                    "input": null,
                                    "result": "{\"new_version\":\"HYPHO\",\"hold_by_scoring\":\"N\",\"detail\":\"default\",\"config_id\":\"STD\",\"profile_id\":\"LOW\",\"scoring_provider\":\"neural_network_mp\",\"site_id\":\"MLB\",\"cust_id\":81605112,\"risk\":0.004444305979472121,\"creation_date\":\"2014-03-24T15:18:40.410Z\",\"dol_amount\":30.04,\"flow_id\":\"MI\",\"exec_time\":43,\"scoring_version\":\"HYPHO\",\"ref_id\":757859801,\"execution_id\":100825472872,\"points\":10,\"profile\":{\"detail\":\"default\",\"profile_id\":\"LOW\",\"config\":{\"max_allowed_amount\":10000000,\"bottom_break_point\":0,\"top_break_point\":20,\"reason_id\":null,\"queue_id\":\"MPMI4\"},\"has_restriction\":\"N\"}}",
                                    "profile_id": "LOW"
                                }
                            ],
                            "risk": 1.03
                        };
                    
                    response.write(JSON.stringify(resp));
                    response.end();
                    
                    return
                }
            

            if(scoId == "100000005161"){
                console.log("Entro al scoring id => " + scoId);
                resp =  {
                    "sc_cust_id": scoId,
                    "cust_id": 12345,
                    "flow_type": "MI",
                    "profile_id": "MIDHIGH",
                    "creation_date": "2013-06-13T13:38:59.000-0400",
                    "ref_id": 525902837,
                    "ref_id_nw": 601738727,
                    "hold_by_scoring": "N",
                    "last_modified_date": "2013-06-13T13:38:59.000-0400",
                    "site_id": "MLB",
                    "dol_amount": 69.72,
                    "execution_status": "HYPHO",
                    "config_id": "OFF",
                    "detail": "default",
                    "provider_id": "martin_pozzer_off"
                };
            }
            else{
                if(scoId == "123456789"){
                    resp =  {
                        "sc_cust_id": scoId,
                        "cust_id": 12345,
                        "flow_type": "MI",
                        "profile_id": "MIDHIGH",
                        "creation_date": "2013-06-13T13:38:59.000-0400",
                        "ref_id": 56121676,
                        "ref_id_nw": 601738123,
                        "hold_by_scoring": "N",
                        "last_modified_date": "2013-06-13T13:38:59.000-0400",
                        "site_id": "MLB",
                        "dol_amount": 69.72,
                        "execution_status": "HYPHO",
                        "config_id": "STD",
                        "detail": "default",
                        "provider_id": "martin_pozzer"
                    };
                }
                else{
                    if(scoId == "100000005162"){
                        resp =  {
                            "sc_cust_id": scoId,
                            "cust_id": 12345,
                            "flow_type": "MI",
                            "profile_id": "MIDHIGH",
                            "creation_date": "2013-06-13T13:38:59.000-0400",
                            "ref_id": 56121676,
                            "ref_id_nw": 601738123,
                            "hold_by_scoring": "N",
                            "last_modified_date": "2013-06-13T13:38:59.000-0400",
                            "site_id": "MLB",
                            "risk": 13,
                            "dol_amount": 69.72,
                            "execution_status": "HYPHO",
                            "config_id": "STD",
                            "detail": "default",
                            "provider_id": "martin_pozzer"
                        };
                    }
                    else{
                        if(scoId == "100000005163"){
                            resp =  {
                                "sc_cust_id": scoId,
                                "cust_id": 12348,
                                "flow_type": "MI",
                                "profile_id": "MIDHIGH",
                                "creation_date": "2013-06-13T13:38:59.000-0400",
                                "ref_id": 56121676,
                                "ref_id_nw": 601738123,
                                "hold_by_scoring": "N",
                                "last_modified_date": "2013-06-13T13:38:59.000-0400",
                                "site_id": "MLB",
                                "risk": 17.496,
                                "dol_amount": 69.72,
                                "execution_status": "HYPHO",
                                "config_id": "STD",
                                "detail": "default",
                                "provider_id": "martin_pozzer"
                            };
                        }
                        else{
                            if(scoId == "100000005164"){
                                resp =  {
                                    "sc_cust_id": scoId,
                                    "cust_id": 12348,
                                    "flow_type": "MI",
                                    "profile_id": "MIDHIGH",
                                    "creation_date": "2013-06-13T13:38:59.000-0400",
                                    "ref_id": 56121676,
                                    "ref_id_nw": 601738123,
                                    "hold_by_scoring": "N",
                                    "last_modified_date": "2013-06-13T13:38:59.000-0400",
                                    "site_id": "MLB",
                                    "risk": null,
                                    "dol_amount": 69.72,
                                    "execution_status": "HYPHO",
                                    "config_id": "STD",
                                    "detail": "default",
                                    "provider_id": "martin_pozzer"
                                };
                            }
                            else{
                                if(scoId == "100000005165"){
                                    resp =  {
                                        "sc_cust_id": scoId,
                                        "cust_id": 12348,
                                        "flow_type": "MI",
                                        "profile_id": "MIDHIGH",
                                        "creation_date": "2013-06-13T13:38:59.000-0400",
                                        "ref_id": 56121676,
                                        "ref_id_nw": 601738123,
                                        "hold_by_scoring": "N",
                                        "last_modified_date": "2013-06-13T13:38:59.000-0400",
                                        "site_id": "MLB",
                                        "risk": "",
                                        "dol_amount": 69.72,
                                        "execution_status": "HYPHO",
                                        "config_id": "STD",
                                        "detail": "default",
                                        "provider_id": "martin_pozzer"
                                    };
                                }
                                else{
                                    //Agrego test para validar risk = 0
                                    if(scoId == "100000005166"){
                                        resp =  {
                                            "sc_cust_id": scoId,
                                            "cust_id": 12348,
                                            "flow_type": "MI",
                                            "profile_id": "MIDHIGH",
                                            "creation_date": "2013-06-13T13:38:59.000-0400",
                                            "ref_id": 56121676,
                                            "ref_id_nw": 601738123,
                                            "hold_by_scoring": "N",
                                            "last_modified_date": "2013-06-13T13:38:59.000-0400",
                                            "site_id": "MLB",
                                            "risk": 0,
                                            "dol_amount": 69.72,
                                            "execution_status": "HYPHO",
                                            "config_id": "STD",
                                            "detail": "default",
                                            "provider_id": "martin_pozzer"
                                        };
                                    }
                                    else{
                                        if(scoId == "100000005167"){
                                            resp =  {
                                                "sc_cust_id": scoId,
                                                "cust_id": 12348,
                                                "flow_type": "MI",
                                                "profile_id": "MIDHIGH",
                                                "creation_date": "2013-06-13T13:38:59.000-0400",
                                                "ref_id": 56121676,
                                                "ref_id_nw": 601738123,
                                                "hold_by_scoring": "N",
                                                "last_modified_date": "2013-06-13T13:38:59.000-0400",
                                                "site_id": "MLB",
                                                "risk": 0.0,
                                                "dol_amount": 69.72,
                                                "execution_status": "HYPHO",
                                                "config_id": "STD",
                                                "detail": "default",
                                                "provider_id": "martin_pozzer"
                                            };
                                        }
                                        else{
                                            if(scoId == "1122334455"){
                                                resp =  {
                                                    "sc_cust_id": scoId,
                                                    "cust_id": 925705,
                                                    "flow_type": "MI",
                                                    "profile_id": "MIDHIGH",
                                                    "creation_date": "2013-06-13T13:38:59.000-0400",
                                                    "ref_id": 56121333,
                                                    "ref_id_nw": 694844449,
                                                    "hold_by_scoring": "N",
                                                    "last_modified_date": "2013-06-13T13:38:59.000-0400",
                                                    "site_id": "MLB",
                                                    "dol_amount": 69.72,
                                                    "execution_status": "HYPHO",
                                                    "config_id": "STD",
                                                    "detail": "default",
                                                    "provider_id": "martin_pozzer"
                                                };
                                            }
                                            else{
                                                if(scoId == "1122334466"){
                                                    resp =  {
                                                        "sc_cust_id": scoId,
                                                        "cust_id": 925705,
                                                        "flow_type": "MI",
                                                        "profile_id": "MIDHIGH",
                                                        "creation_date": "2013-06-13T13:38:59.000-0400",
                                                        "ref_id": 56121366,
                                                        "ref_id_nw": 694844466,
                                                        "hold_by_scoring": "N",
                                                        "last_modified_date": "2013-06-13T13:38:59.000-0400",
                                                        "site_id": "MLB",
                                                        "dol_amount": 69.72,
                                                        "execution_status": "HYPHO",
                                                        "config_id": "STD",
                                                        "detail": "default",
                                                        "provider_id": "martin_pozzer"
                                                    };
                                                }else if(scoId == "92232324"){
                                                            resp =  {
                                                                "sc_cust_id": scoId,
                                                                "cust_id": 147688640,
                                                                "flow_type": "MI",
                                                                "profile_id": "HIGH",
                                                                "creation_date": "2013-06-13T13:38:59.000-0400",
                                                                "ref_id": 56121676,
                                                                "ref_id_nw": 601738123,
                                                                "hold_by_scoring": "N",
                                                                "last_modified_date": "2013-06-13T13:38:59.000-0400",
                                                                "site_id": "MLA",
                                                                "dol_amount": 69.72,
                                                                "execution_status": "HYPHO",
                                                                "config_id": "STD",
                                                                "detail": "default",
                                                                "provider_id": "martin_pozzer"
                                                            };
                                                }else if(scoId == "92232325"){
                                                            resp =  {
                                                                "sc_cust_id": scoId,
                                                                "cust_id": 151211818,
                                                                "flow_type": "MI",
                                                                "profile_id": "HIGH",
                                                                "creation_date": "2013-06-13T13:38:59.000-0400",
                                                                "ref_id": 590728922,
                                                                "ref_id_nw": 6017389663,
                                                                "hold_by_scoring": "N",
                                                                "last_modified_date": "2013-06-13T13:38:59.000-0400",
                                                                "site_id": "MLB",
                                                                "dol_amount": 69.72,
                                                                "execution_status": "HYPHO",
                                                                "config_id": "STD",
                                                                "detail": "default",
                                                                "provider_id": "martin_pozzer"
                                                            };
                                                }else if(scoId == "92232355"){
                                                            resp =  {
                                                                "sc_cust_id": scoId,
                                                                "cust_id": 128185910,
                                                                "flow_type": "MI",
                                                                "profile_id": "HIGH",
                                                                "creation_date": "2013-06-13T13:38:59.000-0400",
                                                                "ref_id": 56121679,
                                                                "ref_id_nw": 6017389669,
                                                                "hold_by_scoring": "N",
                                                                "last_modified_date": "2013-06-13T13:38:59.000-0400",
                                                                "site_id": "MLB",
                                                                "dol_amount": 69.72,
                                                                "execution_status": "HYPHO",
                                                                "config_id": "MIS",
                                                                "detail": "default",
                                                                "provider_id": "mi"
                                                            };
                                                }
                                                else{
                                                    resp =  {
                                                        "sc_cust_id": scoId,
                                                        "cust_id": 12345,
                                                        "flow_type": "MI",
                                                        "profile_id": "MIDHIGH",
                                                        "creation_date": "2013-06-13T13:38:59.000-0400",
                                                        "ref_id": 525902837,
                                                        "ref_id_nw": 601738727,
                                                        "hold_by_scoring": "N",
                                                        "last_modified_date": "2013-06-13T13:38:59.000-0400",
                                                        "site_id": "MLB",
                                                        "dol_amount": 69.72,
                                                        "execution_status": "HYPHO",
                                                        "config_id": "STD",
                                                        "detail": "default",
                                                        "provider_id": "martin_pozzer"
                                                    };
                                                }   
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            console.log("Scoring to cust getId => " + resp + scoId);

            if (resp == null) {
                 jsonHandler.showNotFoundResponse({"message":"the Scoring To Cust id: "+ scoId +" is not registered"}, response);        
            }else{
                 response.write(JSON.stringify(resp));
                 response.end();
            }            

        }
       /* getBlackList: function(request, response){
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/fraudlist/black_records/(\\w+)/(\\w+)');
            uriRegExp.exec(pathname);
            var type = RegExp.$1;
            var value = RegExp.$2;
            var id = type+"-"+value
            log("BL> type: " + type + " value: " + value);
            var result = [];
            if (type == 'DOC' && value == 123) {
                result = [{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: DNI","cust_id":null,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"DOC","user_admin":null,"value":"27166944"}];
                response.write(JSON.stringify(result));
                response.end();
            }
            if (type == 'TC' || type == 'SMART_ID' || type == 'DEVICE_ID') {
                result = [{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: DNI","cust_id":0,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"DOC","user_admin":null,"value":"27166944"}];
                response.write(JSON.stringify(result));
                response.end();
            }else {
                jsonHandler.showNotFoundResponse({msg:  'blacklist not found: ' + id}, response);
            }
            
        }*/
};

function log (msg) {
    if (console) {
        console.log(msg);
    }
}

function randomUUID() {
  var s = [], itoh = '0123456789ABCDEF';
 
  // Make array of random hex digits. The UUID only has 32 digits in it, but we
  // allocate an extra items to make room for the '-'s we'll be inserting.
  for (var i = 0; i <36; i++) s[i] = Math.floor(Math.random()*0x10);
 
  // Conform to RFC-4122, section 4.4
  s[14] = 4;  // Set 4 high bits of time_high field to version
  s[19] = (s[19] & 0x3) | 0x8;  // Specify 2 high bits of clock sequence
 
  // Convert to hex chars
  for (var i = 0; i <36; i++) s[i] = itoh[s[i]];
 
  // Insert '-'s
  s[8] = s[13] = s[18] = s[23] = '-';
 
  return s.join('');
}

exports.getBlackList = fraudScoringController.getBlackList;
exports.getValidationStatus = fraudScoringController.getValidationStatus;
exports.postValidation = fraudScoringController.postValidation;
exports.putValidation = fraudScoringController.putValidation;
exports.ping = fraudScoringController.ping;
exports.getScoId = fraudScoringController.getScoId;
exports.getResults = fraudScoringController.getResults;
//resourceManager.saveResource('blacklist', 'DOC-123' ,[{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: DNI","cust_id":null,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"DOC","user_admin":null,"value":"27166944"}]);

// Mappings
urlMapping.add ([{
        pattern: '^/fraud/scoring/result/ping',
        action: {
            'GET':fraudScoringController.ping
        }
    },{
        pattern: '^/fraud/scoring/search$',
        action: {
            'GET':fraudScoringController.search,
        }
    },{
        pattern: '^/fraud/scoring/(\\d+)',
        action: {
            'GET':fraudScoringController.getScoId
        }
    },{
        pattern: '^/fraud/hercules/results/(\\w+)',
        action: {
            'GET':fraudScoringController.getResults
        }
    }, {
        
        pattern: '^/scoring/search/ping',
        action: {
            'GET':fraudScoringController.ping
        }
    }
    /*,{
        pattern: '^/fraudlist/black_records/(\\w+)',
        action: {
            'GET':fraudScoringController.getBlackList,
        }
    },{
        pattern: '^/fraudlist/ping',
        action: {
            'GET':fraudScoringController.ping
        }
    }*/]);