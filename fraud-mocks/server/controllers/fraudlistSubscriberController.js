var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var idCounter = 123345;

var retryPost = 0,retryPost2 = 0, retryDel1=0, retryDel2=0, retryDel3=0;

var fraudlistSubscriberController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"UsersFullService: OK!"}));
            response.end();
        },

        searchNewFraudList: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var url_parts = url.parse(request.url,true);

            var type = url_parts.query.type
            var value = url_parts.query.value
            var cat = url_parts.query.category
            var user = url_parts.query.user_id

            var fromApp = url_parts.query.from_app


            if(fromApp == "dowjonesjob-288290"){
              result = [{"type":"DOC","value_detail":"CHIL","value":"70334543","reason":"member, board of directors, empresa nacional de minerÃ­a","category":"PEPLIST","site_id":"MLC","comments":"Carga masiva","from_app":"dowjonesjob-288290","actions":[{"action":"pay","reason":"money_laundering","risk":1}],"id":"DOC-70334543"}];
              response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
              response.end();
              return;
            }

            if(fromApp == "dowjonesjob-509427"){
              result = [{"type":"NAME","value_detail":"RUSS","value":"pavel","reason":"member, civic chamber","category":"PEPLIST","site_id":"MRD","comments":"Carga masiva-default MRD","from_app":"dowjonesjob-509427","actions":[{"action":"pay","reason":"money_laundering","risk":1}],"id":"NAME-pavel"}, {"type":"NAME","value_detail":"RUSS","value":"pavel","reason":"member, civic chamber","category":"MOSTWANTEDLIST","site_id":"MRD","comments":"SANCTIONS LIST-default MRD","from_app":"dowjonesjob-509427","actions":[{"action":"pay","reason":"money_laundering","risk":1}],"id":"NAME-pavel"}];
              response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":2},"results":result}));
              response.end();
              return;
            }

            if(fromApp == "dowjonesjob-256923"){
              result = [{"type":"DOC","value_detail":"CHIL","value":"90338323","reason":"member, board of directors, empresa nacional de minerÃ­a","category":"PEPLIST","site_id":"MLC","comments":"Carga masiva","from_app":"dowjonesjob-256923","actions":[{"action":"pay","reason":"money_laundering","risk":1}],"id":"DOC-90338323"}];
              response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
              response.end();
              return;
            }

/*
            if (type == "DOC" && value == "70334543" && cat == "PEPLIST"){
              result = [{"type":"DOC","value_detail":"CHIL","value":"70334543","reason":"member, board of directors, empresa nacional de minerÃ­a","category":"PEPLIST","site_id":"MLC","comments":"Carga masiva","from_app":"dowjonesjob-288290","actions":[{"action":"pay","reason":"money_laundering","risk":1}],"id":"DOC-70334543"}];
              response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
              response.end();
              return;
            }

            if (type == "NAME" && value == "pavel" && cat == "PEPLIST"){
              result = [{"type":"NAME","value_detail":"RUSS","value":"pavel","reason":"member, civic chamber","category":"PEPLIST","site_id":"MRD","comments":"Carga masiva-default MRD","from_app":"dowjonesjob-509427","actions":[{"action":"pay","reason":"money_laundering","risk":1}],"id":"NAME-pavel"}] ;
              response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
              response.end();
              return;
            }

             if (type == "NAME" && value == "pavel" && cat == "MOSTWANTEDLIST"){
              result = [{"type":"NAME","value_detail":"RUSS","value":"pavel","reason":"member, civic chamber","category":"PEPLIST","site_id":"MRD","comments":"SANCTIONS LIST","from_app":"dowjonesjob-509427","actions":[{"action":"pay","reason":"money_laundering","risk":1}],"id":"NAME-pavel"}];
              response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
              response.end();
              return;
            }

            if (type == "DOC" && value == "90338323" && cat == "PEPLIST"){
              result = [{"type":"DOC","value_detail":"CHIL","value":"90338323","reason":"member, board of directors, empresa nacional de minerÃ­a","category":"PEPLIST","site_id":"MLC","comments":"Carga masiva","from_app":"dowjonesjob-256923","actions":[{"action":"pay","reason":"money_laundering","risk":1}],"id":"DOC-90338323"}];
              response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
              response.end();
              return;
            }*/

            if (user=="32435460"){
                if (type=="TC"){
                    response.write( JSON.stringify({"paging":{"offset":0,"limit":10,"total":2},"results":[{"users":[{"reason":"chargeback_comp","user_id":189109309,"ins_date":"2015-08-17T15:13:36.000-04:00"}],"value_detail":null,"site_id":"MLB","from_app":"auto_rest","type":"tc","trunc_value":"515590xxxxxx3759","id":"TC-HIWKFNTJUEALSCNIIQUYDMEXFZXSSWASOLFIRCKF","category":"blacklist","type_detail":null,"value":"hiwkfntjuealscniiquydmexfzxsswasolfirckf","admin_id":"fraudML","actions":[{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"pay","ins_date":"2015-08-17T15:13:36.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"list","ins_date":"2015-08-17T15:13:36.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"buy","ins_date":"2015-08-17T15:13:36.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"withdraw","ins_date":"2015-08-17T15:13:36.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"sell","ins_date":"2015-08-17T15:13:36.000-04:00"}],"comments":"carga desde restricciones automatico","parent_id":null,"creation_date":"2015-08-17T15:13:36.000-04:00"},{"users":[{"reason":"chargeback_comp","user_id":189109309,"ins_date":"2015-08-17T15:13:33.000-04:00"}],"value_detail":null,"site_id":"MLB","from_app":"auto_rest","type":"tc","trunc_value":"409603xxxxxx8798","id":"TC-NQMJIPTLJEBKXUXNFAXBKLWFCSNNFFUSWJOZJJJH","category":"blacklist","type_detail":null,"value":"nqmjiptljebkxuxnfaxbklwfcsnnffuswjozjjjh","admin_id":"fraudML","actions":[{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"pay","ins_date":"2015-08-17T15:13:33.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"list","ins_date":"2015-08-17T15:13:33.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"buy","ins_date":"2015-08-17T15:13:33.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"withdraw","ins_date":"2015-08-17T15:13:33.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"sell","ins_date":"2015-08-17T15:13:33.000-04:00"}],"comments":"carga desde restricciones automatico","parent_id":null,"creation_date":"2015-08-17T15:13:33.000-04:00"}]}));
                    response.end();
                    return;
                } else if (type=="DEVICE_ID"){
                    response.write( JSON.stringify({"paging": {"offset": 0,"limit": 10,"total": 2},"results": [{"users": [{"reason": "chargeback_comp","user_id": 189109309,"ins_date": "2015-08-17T15:13:38.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_rest","type": "device_id","trunc_value": null,"id":"DEVICE_ID-0191ad3f681645049e470ac21b7938aa","category": "blacklist","type_detail": null,"value": "0191ad3f681645049e470ac21b7938aa","admin_id": "fraudML","actions": [{"risk": 100,"scoring_id": null,"reason": "chargeback_comp","action": "pay","ins_date": "2015-08-17T15:13:38.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback_comp","action": "list","ins_date": "2015-08-17T15:13:38.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback_comp","action": "buy","ins_date": "2015-08-17T15:13:38.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback_comp","action": "withdraw","ins_date": "2015-08-17T15:13:38.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback_comp","action": "sell","ins_date": "2015-08-17T15:13:38.000-04:00"}],"comments": "carga desde restricciones automatico","parent_id": null,"creation_date": "2015-08-17T15:13:38.000-04:00"},{"users": [{"reason": "chargeback_comp","user_id": 189109309,"ins_date": "2015-08-17T15:13:38.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_rest","type": "device_id","trunc_value": null,"id":"DEVICE_ID-bebae91ce95f4a288b9f5f83b9f253bb","category": "blacklist","type_detail": null,"value": "bebae91ce95f4a288b9f5f83b9f253bb","admin_id": "fraudML","actions": [{"risk": 100,"scoring_id": null,"reason": "chargeback_comp","action": "pay","ins_date": "2015-08-17T15:13:38.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback_comp","action": "list","ins_date": "2015-08-17T15:13:38.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback_comp","action": "buy","ins_date": "2015-08-17T15:13:38.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback_comp","action": "withdraw","ins_date": "2015-08-17T15:13:38.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback_comp","action": "sell","ins_date": "2015-08-17T15:13:38.000-04:00"}],"comments": "carga desde restricciones automatico","parent_id": null,"creation_date": "2015-08-17T15:13:38.000-04:00"}]}));
                    response.end();
                    return;
                } else if (type=="SMART_ID"){
                    response.write( JSON.stringify({"paging":{"offset":0,"limit":10,"total":2},"results":[{"users":[{"reason":"fraude_cruce","user_id":189109309,"ins_date":"2015-08-06T12:53:19.000-04:00"}],"value_detail":null,"site_id":"MLB","from_app":"auto_rest","type":"smart_id","trunc_value":null,"id":"SMART_ID-cff67cbe61324c8f8fbb4bfffe953faa","category":"graylist","type_detail":null,"value":"cff67cbe61324c8f8fbb4bfffe953faa","admin_id":"fraudML","actions":[{"risk":1,"scoring_id":null,"reason":"fraude_cruce","action":"pay","ins_date":"2015-08-06T12:53:19.000-04:00"},{"risk":1,"scoring_id":null,"reason":"chargeback_comp","action":"list","ins_date":"2015-08-17T15:13:39.000-04:00"},{"risk":1,"scoring_id":null,"reason":"chargeback_comp","action":"buy","ins_date":"2015-08-17T15:13:39.000-04:00"},{"risk":1,"scoring_id":null,"reason":"fraude_cruce","action":"withdraw","ins_date":"2015-08-06T12:53:19.000-04:00"},{"risk":1,"scoring_id":null,"reason":"chargeback_comp","action":"sell","ins_date":"2015-08-17T15:13:39.000-04:00"}],"comments":"carga desde restricciones automatico","parent_id":null,"creation_date":"2015-08-06T12:53:19.000-04:00"},{"users":[{"reason":"fraude_cruce","user_id":189109309,"ins_date":"2015-08-06T12:53:19.000-04:00"}],"value_detail":null,"site_id":"MLB","from_app":"auto_rest","type":"smart_id","trunc_value":null,"id":"SMART_ID-cff67cbe61324c8f8fbb4bfffe953fbb","category":"graylist","type_detail":null,"value":"cff67cbe61324c8f8fbb4bfffe953fbb","admin_id":"fraudML","actions":[{"risk":1,"scoring_id":null,"reason":"fraude_cruce","action":"pay","ins_date":"2015-08-06T12:53:19.000-04:00"},{"risk":1,"scoring_id":null,"reason":"chargeback_comp","action":"list","ins_date":"2015-08-17T15:13:36.000-04:00"},{"risk":1,"scoring_id":null,"reason":"chargeback_comp","action":"buy","ins_date":"2015-08-17T15:13:36.000-04:00"},{"risk":1,"scoring_id":null,"reason":"fraude_cruce","action":"withdraw","ins_date":"2015-08-06T12:53:19.000-04:00"},{"risk":1,"scoring_id":null,"reason":"chargeback_comp","action":"sell","ins_date":"2015-08-17T15:13:36.000-04:00"}],"comments":"carga desde restricciones automatico","parent_id":null,"creation_date":"2015-08-06T12:53:19.000-04:00"}]}));
                    response.end();
                    return;
                } else if (type=="IP"){
                    response.write( JSON.stringify({"paging": {"offset": 0,"limit": 10,"total": 4},"results": [{"users": [{"reason": "chargeback","user_id": 189109309,"ins_date": "2015-08-17T15:13:45.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_chargeback","type": "ip","trunc_value": null,"id": "IP-1791222395","category": "graylist","type_detail": null,"value": "1791222395","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "chargeback","action": "pay","ins_date": "2015-08-17T15:13:45.000-04:00"}],"comments": "carga desde chargeback automatico","parent_id": null,"creation_date": "2015-08-17T15:13:45.000-04:00"},{"users": [{"reason": "chargeback","user_id": 189109309,"ins_date": "2015-08-17T15:13:45.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_chargeback","type": "ip","trunc_value": null,"id": "IP-15223812837","category": "graylist","type_detail": null,"value": "15223812837","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "chargeback","action": "pay","ins_date": "2015-08-17T15:13:45.000-04:00"}],"comments": "carga desde chargeback automatico","parent_id": null,"creation_date": "2015-08-17T15:13:45.000-04:00"}]}));
                    response.end();
                    return;
                } else if (type=="ZIP_CODE"){
                    response.write( JSON.stringify({"paging": {"offset": 0,"limit": 10,"total": 1},"results": [{"users": [{"reason": "chargeback","user_id": 189109309,"ins_date": "2015-08-17T15:13:44.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_chargeback","type": "zip_code","trunc_value": null,"id": "ZIP_CODE-35700345","category": "graylist","type_detail": null,"value": "35700345","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "chargeback","action": "pay","ins_date": "2015-08-17T15:13:44.000-04:00"}],"comments": "carga desde chargeback automatico","parent_id": null,"creation_date": "2015-08-17T15:13:44.000-04:00"},{"users": [{"reason": "chargeback","user_id": 189109309,"ins_date": "2015-08-17T15:13:44.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_chargeback","type": "zip_code","trunc_value": null,"id": "ZIP_CODE-35700344","category": "graylist","type_detail": null,"value": "35700344","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "chargeback","action": "pay","ins_date": "2015-08-17T15:13:44.000-04:00"}],"comments": "carga desde chargeback automatico","parent_id": null,"creation_date": "2015-08-17T15:13:44.000-04:00"}]}));
                    response.end();
                    return;
                }  else if (type=="STREET_NUMBER"){
                    response.write( JSON.stringify({"paging": {"offset": 0,"limit": 10,"total": 4},"results": [{"users": [{"reason": "chargeback","user_id": 189109309,"ins_date": "2015-08-17T15:13:45.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_chargeback","type": "street_number","trunc_value": null,"id": "STREET_NUMBER-35700344-135","category": "graylist","type_detail": null,"value": "35700344-135","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "chargeback","action": "pay","ins_date": "2015-08-17T15:13:45.000-04:00"}],"comments": "carga desde chargeback automatico","parent_id": null,"creation_date": "2015-08-17T15:13:45.000-04:00"},{"users": [{"reason": "chargeback","user_id": 189109309,"ins_date": "2015-08-17T15:13:45.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_chargeback","type": "street_number","trunc_value": null,"id": "STREET_NUMBER-35700345-135","category": "graylist","type_detail": null,"value": "35700345-135","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "chargeback","action": "pay","ins_date": "2015-08-17T15:13:45.000-04:00"}],"comments": "carga desde chargeback automatico","parent_id": null,"creation_date": "2015-08-17T15:13:45.000-04:00"},{"users": [{"reason": "chargeback","user_id": 189109309,"ins_date": "2015-08-17T15:13:45.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_chargeback","type": "street_number","trunc_value": null,"id": "STREET_NUMBER-999999-123","category": "graylist","type_detail": null,"value": "999999-123","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "chargeback","action": "pay","ins_date": "2015-08-17T15:13:45.000-04:00"}],"comments": "carga desde chargeback automatico","parent_id": null,"creation_date": "2015-08-17T15:13:45.000-04:00"},{"users": [{"reason": "chargeback","user_id": 189109309,"ins_date": "2015-08-17T15:13:45.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_chargeback","type": "street_number","trunc_value": null,"id": "STREET_NUMBER-999999-321","category": "graylist","type_detail": null,"value": "999999-321","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "chargeback","action": "pay","ins_date": "2015-08-17T15:13:45.000-04:00"}],"comments": "carga desde chargeback automatico","parent_id": null,"creation_date": "2015-08-17T15:13:45.000-04:00"}]}));
                    response.end();
                    return;
                }   else if (type=="DEVICE_ML"){
                    response.write( JSON.stringify({"paging": {"offset": 0,"limit": 10,"total": 3},"results": [{"users": [{"reason": "chargeback","user_id": 189109309,"ins_date": "2015-08-17T15:13:44.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_chargeback","type": "device_ml","trunc_value": null,"id": "DEVICE_ML-558ed956e4b03be0d04d59aa","category": "blacklist","type_detail": null,"value": "558ed956e4b03be0d04d59aa","admin_id": "fraudML","actions": [{"risk": 100,"scoring_id": null,"reason": "chargeback","action": "pay","ins_date": "2015-08-17T15:13:44.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback","action": "list","ins_date": "2015-08-17T15:13:44.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback","action": "buy","ins_date": "2015-08-17T15:13:44.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback","action": "withdraw","ins_date": "2015-08-17T15:13:44.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback","action": "sell","ins_date": "2015-08-17T15:13:44.000-04:00"}],"comments": "carga desde chargeback automatico","parent_id": null,"creation_date": "2015-08-17T15:13:44.000-04:00"},{"users": [{"reason": "chargeback","user_id": 189109309,"ins_date": "2015-08-17T15:13:44.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_chargeback","type": "device_ml","trunc_value": null,"id": "DEVICE_ML-558ed956e4b03be0d04d59bb","category": "blacklist","type_detail": null,"value": "558ed956e4b03be0d04d59bb","admin_id": "fraudML","actions": [{"risk": 100,"scoring_id": null,"reason": "chargeback","action": "pay","ins_date": "2015-08-17T15:13:44.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback","action": "list","ins_date": "2015-08-17T15:13:44.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback","action": "buy","ins_date": "2015-08-17T15:13:44.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback","action": "withdraw","ins_date": "2015-08-17T15:13:44.000-04:00"},{"risk": 100,"scoring_id": null,"reason": "chargeback","action": "sell","ins_date": "2015-08-17T15:13:44.000-04:00"}],"comments": "carga desde chargeback automatico","parent_id": null,"creation_date": "2015-08-17T15:13:44.000-0* Connection #0 to host internal.mercadolibre.com left intact* Closing connection #04:00"}]}));
                    response.end();
                    return;
                }   else if (type=="DOC"){
                    response.write( JSON.stringify({"paging": {"offset": 0,"limit": 10,"total": 2},"results": [{"users": [{"reason": "fraude_cruce","user_id": 189109309,"ins_date": "2015-08-06T12:53:17.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_rest","type": "doc","trunc_value": null,"id": "DOC-29284422191","category": "graylist","type_detail": null,"value": "29284422191","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "fraude_cruce","action": "pay","ins_date": "2015-08-06T12:53:17.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "chargeback_comp","action": "list","ins_date": "2015-08-17T15:13:37.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "chargeback_comp","action": "buy","ins_date": "2015-08-17T15:13:37.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "fraude_cruce","action": "withdraw","ins_date": "2015-08-06T12:53:17.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "chargeback_comp","action": "sell","ins_date": "2015-08-17T15:13:37.000-04:00"}],"comments": "carga desde restricciones automatico","parent_id": null,"creation_date": "2015-08-06T12:53:17.000-04:00"},{"users": [{"reason": "fraude_cruce","user_id": 189109309,"ins_date": "2015-08-06T12:53:17.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_rest","type": "doc","trunc_value": null,"id":  "DOC-74626035604","category": "graylist","type_detail": null,"value": "74626035604","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "fraude_cruce","action": "pay","ins_date": "2015-08-06T12:53:17.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "chargeback_comp","action": "list","ins_date": "2015-08-17T15:13:36.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "chargeback_comp","action": "buy","ins_date": "2015-08-17T15:13:36.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "fraude_cruce","action": "withdraw","ins_date": "2015-08-06T12:53:17.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "chargeback_comp","action": "sell","ins_date": "2015-08-17T15:13:36.000-04:00"}],"comments": "carga desde restricciones automatico","parent_id": null,"creation_date": "2015-08-06T12:53:17.000-04:00"},{"users": [{"reason": "fraude_cruce","user_id": 189109309,"ins_date": "2015-08-06T12:53:17.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_rest","type": "doc","trunc_value": null,"id":  "DOC-32323232","category": "blacklist","type_detail": null,"value": "32323232","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "fraude_cruce","action": "pay","ins_date": "2015-08-06T12:53:17.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "chargeback_comp","action": "list","ins_date": "2015-08-17T15:13:36.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "chargeback_comp","action": "buy","ins_date": "2015-08-17T15:13:36.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "fraude_cruce","action": "withdraw","ins_date": "2015-08-06T12:53:17.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "chargeback_comp","action": "sell","ins_date": "2015-08-17T15:13:36.000-04:00"}],"comments": "carga desde restricciones automatico","parent_id": null,"creation_date": "2015-08-06T12:53:17.000-04:00"}]}));
                    response.end();
                    return;
                }   else if (type=="PHONE"){
                    response.write( JSON.stringify({"paging": {"offset": 0, "limit": 10, "total": 2 }, "results": [{"users": [{"reason": "fraude_cruce", "user_id": 189109309, "ins_date": "2015-08-06T12:53:17.000-04:00"} ], "value_detail": null, "site_id": "MLB", "from_app": "auto_rest", "type": "phone", "trunc_value": null, "id": "PHONE-0303456", "category": "blacklist", "type_detail": null, "value": "0303456", "admin_id": "fraudML", "actions": [{"risk": 1, "scoring_id": null, "reason": "fraude_cruce", "action": "pay", "ins_date": "2015-08-06T12:53:17.000-04:00"}, {"risk": 1, "scoring_id": null, "reason": "chargeback_comp", "action": "list", "ins_date": "2015-08-17T15:13:37.000-04:00"}, {"risk": 1, "scoring_id": null, "reason": "chargeback_comp", "action": "buy", "ins_date": "2015-08-17T15:13:37.000-04:00"}, {"risk": 1, "scoring_id": null, "reason": "fraude_cruce", "action": "withdraw", "ins_date": "2015-08-06T12:53:17.000-04:00"}, {"risk": 1, "scoring_id": null, "reason": "chargeback_comp", "action": "sell", "ins_date": "2015-08-17T15:13:37.000-04:00"} ], "comments": "carga desde restricciones automatico", "parent_id": null, "creation_date": "2015-08-06T12:53:17.000-04:00"}, {"users": [{"reason": "fraude_cruce", "user_id": 189109309, "ins_date": "2015-08-06T12:53:17.000-04:00"} ], "value_detail": null, "site_id": "MLB", "from_app": "auto_rest", "type": "phone", "trunc_value": null, "id": "PHONE-1800", "category": "blacklist", "type_detail": null, "value": "1800", "admin_id": "fraudML", "actions": [{"risk": 1, "scoring_id": null, "reason": "fraude_cruce", "action": "pay", "ins_date": "2015-08-06T12:53:17.000-04:00"}, {"risk": 1, "scoring_id": null, "reason": "chargeback_comp", "action": "list", "ins_date": "2015-08-17T15:13:36.000-04:00"}, {"risk": 1, "scoring_id": null, "reason": "chargeback_comp", "action": "buy", "ins_date": "2015-08-17T15:13:36.000-04:00"}, {"risk": 1, "scoring_id": null, "reason": "fraude_cruce", "action": "withdraw", "ins_date": "2015-08-06T12:53:17.000-04:00"}, {"risk": 1, "scoring_id": null, "reason": "chargeback_comp", "action": "sell", "ins_date": "2015-08-17T15:13:36.000-04:00"} ], "comments": "carga desde restricciones automatico", "parent_id": null, "creation_date": "2015-08-06T12:53:17.000-04:00"} ] }));
                    response.end();
                    return;
                } else{
                    console.log("user sin type")
                    response.write(JSON.stringify({"paging":{"offset":0,"limit":2,"total":2},"users":[{"reason":"chargeback_level2","user_id":32435460,"ins_date":"2015-11-05T15:52:51.000-04:00"},{"reason":"money_in_tc","user_id":28251477,"ins_date":"2015-11-13T16:12:55.000-04:00"}],"site_id":"MLA","from_app":"auto_verif_status","type":"cta","trunc_value":null,"id":6820681,"creation_date":"2013-12-12T23:33:34.000-04:00","category":"blacklist","value":"0170305240000042772802","admin_id":"fraudML","comments":"carga desde estados de verificacion automatico","actions":[{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"pay","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"list","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"buy","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"withdraw","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"sell","ins_date":"2013-12-12T23:33:34.000-04:00"}],"parent_id":null}));
                    response.end();
                    return;
                }

            }

            if (user=="324354890"){
                if (type=="ADDRESS_LINE"){
                    response.write( JSON.stringify({"paging":{"offset":0,"limit":10,"total":2},"results":[{"users":[{"reason":"chargeback_comp","user_id":324354890,"ins_date":"2015-08-17T15:13:38.000-04:00"}],"value_detail":null,"site_id":"MLB","from_app":"auto_rest","type":"ADDRESS_LINE","trunc_value":null,"id":"ADDRESS_LINE-123456","category":"blacklist","type_detail":null,"value":"diagonal67 73,60,1920,la plata,corrientes,argentina","admin_id":"fraudML","actions":[{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"pay","ins_date":"2015-08-17T15:13:38.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"list","ins_date":"2015-08-17T15:13:38.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"buy","ins_date":"2015-08-17T15:13:38.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"withdraw","ins_date":"2015-08-17T15:13:38.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"sell","ins_date":"2015-08-17T15:13:38.000-04:00"}],"comments":"carga desde restricciones automatico","parent_id":null,"creation_date":"2015-08-17T15:13:38.000-04:00"},{"users":[{"reason":"chargeback_comp","user_id":324354890,"ins_date":"2015-08-17T15:13:38.000-04:00"}],"value_detail":null,"site_id":"MLB","from_app":"auto_rest","type":"ADDRESS_LINE","trunc_value":null,"id":"ADDRESS_LINE-123457","category":"blacklist","type_detail":null,"value":"diagonal 73,60,1900,la plata,buenos aires,argentina","admin_id":"fraudML","actions":[{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"pay","ins_date":"2015-08-17T15:13:38.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"list","ins_date":"2015-08-17T15:13:38.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"buy","ins_date":"2015-08-17T15:13:38.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"withdraw","ins_date":"2015-08-17T15:13:38.000-04:00"},{"risk":100,"scoring_id":null,"reason":"chargeback_comp","action":"sell","ins_date":"2015-08-17T15:13:38.000-04:00"}],"comments":"carga desde restricciones automatico","parent_id":null,"creation_date":"2015-08-17T15:13:38.000-04:00"}]}))
                    response.end();
                    return;
                }else{
                    response.write(JSON.stringify({"paging":{"offset":0,"limit":2,"total":2},"users":[{"reason":"chargeback_level2","user_id":153405344,"ins_date":"2015-11-05T15:52:51.000-04:00"},{"reason":"money_in_tc","user_id":28251477,"ins_date":"2015-11-13T16:12:55.000-04:00"}],"site_id":"MLA","from_app":"auto_verif_status","type":"cta","trunc_value":null,"id":6820681,"creation_date":"2013-12-12T23:33:34.000-04:00","category":"blacklist","value":"0170305240000042772802","admin_id":"fraudML","comments":"carga desde estados de verificacion automatico","actions":[{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"pay","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"list","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"buy","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"withdraw","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"sell","ins_date":"2013-12-12T23:33:34.000-04:00"}],"parent_id":null}));
                    response.end();
                    return;
                }
            }

            if(user == 32432090) {
                console.log("Entra a la busqueda por users")
                response.write(JSON.stringify({"paging":{"offset":0,"limit":2,"total":2},"users":[{"reason":"chargeback_level2","user_id":153405344,"ins_date":"2015-11-05T15:52:51.000-04:00"},{"reason":"money_in_tc","user_id":28251477,"ins_date":"2015-11-13T16:12:55.000-04:00"}],"site_id":"MLA","from_app":"auto_verif_status","type":"cta","trunc_value":null,"id":6820681,"creation_date":"2013-12-12T23:33:34.000-04:00","category":"blacklist","value":"0170305240000042772802","admin_id":"fraudML","comments":"carga desde estados de verificacion automatico","actions":[{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"pay","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"list","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"buy","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"withdraw","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"sell","ins_date":"2013-12-12T23:33:34.000-04:00"}],"parent_id":null}));
                response.end();
                return;
            }

            if((user == 44444 || user == 12345 || user == 555666777) && typeof cat == 'undefined' && typeof type == 'undefined' && typeof value == 'undefined'){
                console.log("Entra a la busqueda por users")
                response.write( JSON.stringify({"paging": {"offset": 0,"limit": 10,"total": 1},"results": [{"users": [{"reason": "chargeback","user_id": 189109309,"ins_date": "2015-08-17T15:13:44.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_chargeback","type": "zip_code","trunc_value": null,"id": "ZIP_CODE-35700345","category": "graylist","type_detail": null,"value": "35700345","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "chargeback","action": "pay","ins_date": "2015-08-17T15:13:44.000-04:00"}],"comments": "carga desde chargeback automatico","parent_id": null,"creation_date": "2015-08-17T15:13:44.000-04:00"},{"users": [{"reason": "chargeback","user_id": 189109309,"ins_date": "2015-08-17T15:13:44.000-04:00"}],"value_detail": null,"site_id": "MLB","from_app": "auto_chargeback","type": "zip_code","trunc_value": null,"id": "ZIP_CODE-35700344","category": "graylist","type_detail": null,"value": "35700344","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "chargeback","action": "pay","ins_date": "2015-08-17T15:13:44.000-04:00"}],"comments": "carga desde chargeback automatico","parent_id": null,"creation_date": "2015-08-17T15:13:44.000-04:00"}]}));
                response.end();
                return;
            }
            /*
            if(user == 32432090 || user == 324354890 || user ==
            || user == 12345) {
                console.log("Entra a la busqueda por users")
                response.write(JSON.stringify({"paging":{"offset":0,"limit":2,"total":2},"users":[{"reason":"chargeback_level2","user_id":153405344,"ins_date":"2015-11-05T15:52:51.000-04:00"},{"reason":"money_in_tc","user_id":28251477,"ins_date":"2015-11-13T16:12:55.000-04:00"}],"site_id":"MLA","from_app":"auto_verif_status","type":"cta","trunc_value":null,"id":6820681,"creation_date":"2013-12-12T23:33:34.000-04:00","category":"blacklist","value":"0170305240000042772802","admin_id":"fraudML","comments":"carga desde estados de verificacion automatico","actions":[{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"pay","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"list","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"buy","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"withdraw","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"sell","ins_date":"2013-12-12T23:33:34.000-04:00"}],"parent_id":null}));
                response.end();
                return;
            }*/

            if(type == null){
                response.write( JSON.stringify( {"msg":"type is null"} ) );
                response.end();
            }

            //Parche para buscar device y smart en susbcriber
            if((type == "DEVICE_ID" || type == "SMART_ID" || type == "ZIP_CODE" || type == "STREET_NUMBER" || type == "DEVICE_ML" || type == "GEO_POINT") && (value == null)){
                value = url_parts.query.user_id;
            }
            //


            var id = type+"-"+value



            if(type == 'ADDRESS_LINE' && value == 'diagonal67 73,60,1920,la plata,corrientes,argentina'){
                    id = type+"-123456";
            }

            if(type == 'ADDRESS_LINE' && value == 'diagonal 73,60,1900,la plata,buenos aires,argentina'){
                    id = type+"-123457";
            }

            if(type == 'DEVICE_ID' && value == 'bebae91ce95f4a288b9f5f83b9f25359'){
                    id = type+"-196631504";
            }


            console.log("searchTypeAndValue ID: " + id);

            var result = [];

            var resp = resourceManager.searchResource('newFraudList', id);

            console.log("searchTypeAndValue resp: " + resp);

            if (type == "GEO_POINT" && value == "-34.1234567,-58.7654321") {
                result = [{"type": "GEO_POINT", "type_detail": "SHIPPING", "value": "-34.5687512,-58.5075366", "value_detail": "APPROXIMATE", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "GRAYLIST", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": "GEO_POINT--34.5687512,-58.5075366", "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
            }

            if (resp != null ) {
                result = [resp];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));

            }else{
                  response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":0},"results":[]}));
            }
            response.end();

        },

        postNewFraudList: function(request, response){

           jsonHandler.getContent(request, function(topicsArgs){
                console.log("INSERT RECORD ADDRESS_LINE");

                //console.log("newFraudList: " + JSON.stringify(topicsArgs));

                var type = topicsArgs.type;
                var value = topicsArgs.value;



                if(type == 'CUST' && value == '555666777' && retryPost == 0){
                    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                    retryPost++;
                    return;
                }

                if(type == 'CUST' && value == '555666788' && retryPost == 0){
                    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                    retryPost++;
                    return;
                }
                if(type == 'DEVICE_ID' && value == 'bebae91ce95f4a288b9f5f83b9f25359X' && retryPost2 == 0){
                    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                    retryPost2++;
                    return;
                }

                if(type == 'ADDRESS_LINE' && value == 'diagonal67 73,60,1920,la plata,corrientes,argentina'){
                    var id_aux = type+"-123456";
                    console.log("INSERT RECORD ADDRESS_LINE id: " +  id_aux);
                    resourceManager.saveTemporalResource('newFraudList',id_aux,-1,topicsArgs);
                    jsonHandler.showOKResponse({message:"resource created","status":201,"id":44556677}, response);
                }

                if(type == 'ADDRESS_LINE' && value == 'diagonal 73,60,1900,la plata,buenos aires,argentina'){
                    var id_aux = type+"-123457";
                    console.log("INSERT RECORD ADDRESS_LINE id: " +  id_aux);
                    resourceManager.saveTemporalResource('newFraudList',id_aux,-1,topicsArgs);
                    jsonHandler.showOKResponse({message:"resource created","status":201,"id":44556677}, response);
                }

                //Prueba con bad requests
                if(type == 'CUST' && value == '9999988888'){
                  jsonHandler.showBadRequestResponse({"message":"The action: [action:sell,risk:1] already exists with a different risk than input: [action:sell,risk:60]","status":400,"error":"bad_request","cause":[]},response);
                  return;
                }
                if(type == 'CUST' && value == '7777999999'){
                  jsonHandler.showBadRequestResponse({"message":"Element already exists","id":21,"status":400,"cause":[]},response);
                  return;
                }
                if(type == 'DOC' && value == '921323233'){
                  jsonHandler.showBadRequestResponse({"message":"The lenght of the cuitDni value is not valid","status":400,"cause":[]},response);
                  return;
                }
                if(type == 'DOC' && value == '111921323233'){
                  jsonHandler.showBadRequestResponse({"message":"The cuil value is not valid: it must start with [20,27,23,30]","status":400,"cause":[]},response);
                  return;
                }
                ///////////


                var acts = topicsArgs.actions

                if(acts == null){

                  jsonHandler.showBadRequestResponse({"message":"actions null","status":400}, response);
                  return;
                }
                //Control scoring_id null
                var countAct = 0

                while(countAct<acts.length){

                    if('scoring_id' in acts[countAct]){

                        var sco_id =  acts[countAct].scoring_id;

                        if(!(sco_id)){
                             jsonHandler.showBadRequestResponse({"message":"scoring_id null","status":400}, response);
                             return;
                        }

                     }
                     if('risk' in acts[countAct]){

                        var risk =  acts[countAct].risk;

                        if(!(risk)){
                             jsonHandler.showBadRequestResponse({"message":"risk null","status":400}, response);
                             return;
                        }

                     }

                      countAct++;
                }

                //Parche para buscar device y smart en susbcriber
                if((type == "DEVICE_ID" && value!="0191ad3f681645049e470ac21b793826" && value!="0191ad3f681645049e470ac21b7938aa" && value!="bebae91ce95f4a288b9f5f83b9f253bb") ||
                      (type == "SMART_ID" && value!="cff67cbe61324c8f8fbb4bfffe953faa" && value!="cff67cbe61324c8f8fbb4bfffe953fbb") ||
                      (type == "ZIP_CODE" && value!="2207999999"  && value != "3207999999" && value != "4207999999" && value != "5207999999" && value != "6207999999"&& value != "35700345"&& value != "35700344") ||
                      (type == "STREET_NUMBER" && value!="35700345-135"&& value!="35700344-135")||
                      (type == "DEVICE_ML" && value!="558ed956e4b03be0d04d59cb" && value!="51cb6dc1e4b030611aa03079" && value!="558ed956e4b03be0d04d59aa" && value!="558ed956e4b03be0d04d59bb")){

                    var users = topicsArgs.users;

                    console.log(users);

                    if(users != null){
                        value = JSON.stringify(users[0].user_id);

                        console.log("newFraudList value: " + JSON.stringify(users[0].user_id));
                        console.log("newFraudList value: " + value);

                    }
                }
                //
                if(type == "GEO_POINT"){
                    value = value.replace(/\./g,'');
                    value = value.replace(/\,/g,'');
                    value = value.replace('-','');
                }

                if(type == "IP" && (value == "190.107.112.111"||value == "190.107.112.444"||value == "190.107.112.555")){
                    value = value.replace(/\./g,'');
                    value = value.replace(/\,/g,'');
                    value = value.replace('-','');
                }
                var id = type+"-"+value;

                console.log("newFraudList guardando id: " + id + " con json: "+ JSON.stringify(topicsArgs));

                console.log("Guardando record id: " + id)

                resourceManager.saveTemporalResource('newFraudList',id,-1,topicsArgs);

                jsonHandler.showOKResponse({message:"resource created","status":201,"id":44556677}, response);

            });
        },

        addUserNewFraudList: function(request, response){

           jsonHandler.getContent(request, function(topicsArgs){

                console.log("newFraudList: " + JSON.stringify(topicsArgs));

                var pathname = url.parse(request.url).pathname;
                var uriRegExp = new RegExp('/fraud/lists/record/(\\w+)-(\\w+)/users');
                uriRegExp.exec(pathname);
                var type = RegExp.$1;
                var value = RegExp.$2;
                var id = type+"-"+value;

                var usrs = topicsArgs;

                //validaciones
                var countUs = 0
                while(countUs<usrs.length){


                    if(!('user_id' in usrs[countUs])){
                        jsonHandler.showBadRequestResponse({"message":"The user_id must be specified","status":400,"cause":[]},response);
                        return
                    }

                    if(!('reason' in usrs[countUs])){
                        jsonHandler.showBadRequestResponse({"message":"The reason must be specified","status":400,"cause":[]},response);
                        return
                    }

                    var uId =  usrs[countUs].user_id;

                    if(!(uId)){
                         jsonHandler.showBadRequestResponse({"message":"user_id cannot be null","status":400}, response);
                         return;
                    }

                    var rea =  usrs[countUs].reason;

                    if(!(rea)){
                         jsonHandler.showBadRequestResponse({"message":"reason cannot be null","status":400}, response);
                         return;
                    }

                    countUs++;

                }

                if(usrs[0].user_id == 8794){
                    jsonHandler.showBadRequestResponse({"message":"Element already exists","status":400,"cause":[]},response);
                    return
                }

                var resp = resourceManager.searchResource('newFraudList',id);

                if(resp == null){
                    jsonHandler.showNotFoundResponse({id:"No record with id: "+id+" was found"}, response);
                    return;
                }

                if('users' in resp && resp.users != null && resp.users != "null"){

                    resp.users = resp.users.concat(topicsArgs);

                }else{

                    resp.users = topicsArgs;

                }

                resourceManager.modifyResource('newFraudList',id,resp,response);//Modifica la que esta

                jsonHandler.showOKResponse({response:"resource created"}, response);

            });
        },

        addActionNewFraudList: function(request, response){

           jsonHandler.getContent(request, function(topicsArgs){

                console.log("newFraudList: " + JSON.stringify(topicsArgs));

                var pathname = url.parse(request.url).pathname;
                var uriRegExp = new RegExp('/fraud/lists/record/(\\w+)-(\\w+)/actions');
                uriRegExp.exec(pathname);
                var type = RegExp.$1;
                var value = RegExp.$2;
                var id = type+"-"+value

                if(topicsArgs == null || topicsArgs.length == 0){
                    jsonHandler.showBadRequestResponse({"message":"The Post Json must be specified","status":400,"cause":[]},response);
                    return
                }

                var act = topicsArgs;

                if(act[0].action == "sell" && act[0].risk == "80" && act[0].scoring_id == 53){
                    jsonHandler.showBadRequestResponse({"message":"Element already exists","status":400,"cause":[]},response);
                    return
                }

                var resp = resourceManager.searchResource('newFraudList',id);

                if(resp == null){
                    jsonHandler.showNotFoundResponse({id:"No record with id: "+id+" was found"}, response);
                    return;
                }else{

                      var acts = topicsArgs

                      if(acts == null){

                        jsonHandler.showBadRequestResponse({"message":"actions null","status":400}, response);
                        return;
                      }

                      var countAct = 0

                      while(countAct<acts.length){

                          if(!('action' in acts[countAct])){
                               jsonHandler.showBadRequestResponse({"message":"action null","status":400}, response);
                               return;
                          }

                          var actN =  acts[countAct].action;

                          if(!(actN)){
                               jsonHandler.showBadRequestResponse({"message":"action null","status":400}, response);
                               return;
                          }

                          if(!('reason' in acts[countAct])){
                               jsonHandler.showBadRequestResponse({"message":"reason null","status":400}, response);
                               return;
                          }

                          var reasN =  acts[countAct].reason;

                          if(!(reasN)){
                               jsonHandler.showBadRequestResponse({"message":"reason null","status":400}, response);
                               return;
                          }

                          if('scoring_id' in acts[countAct]){

                          console.log("acts[countAct]: " + acts[countAct]);

                              var sco_id =  acts[countAct].scoring_id;

                              if(!(sco_id)){
                                   jsonHandler.showBadRequestResponse({"message":"scoring_id null","status":400}, response);
                                   return;
                              }

                           }

                           if('risk' in acts[countAct]){

                              var risk =  acts[countAct].risk;

                              if(!(risk)){
                                   jsonHandler.showBadRequestResponse({"message":"risk null","status":400}, response);
                                   return;
                              }

                           }

                          countAct++;
                      }


                    if('actions' in resp && resp.actions != null && resp.actions != "null"){

                        resp.actions = resp.actions.concat(topicsArgs);

                    }else{

                        resp.actions = topicsArgs;
                    }

                    resourceManager.modifyResource('newFraudList',id,resp,response);//Modifica la que esta

                    jsonHandler.showOKResponse({response:"resource created"}, response);

                }

            });
        },

        uptActionNewFraudList: function(request, response){

           jsonHandler.getContent(request, function(topicsArgs){

                console.log("newFraudList: " + JSON.stringify(topicsArgs));

                var pathname = url.parse(request.url).pathname;
                var uriRegExp = new RegExp('/fraud/lists/record/(\\w+)-(\\w+)/actions/(\\w+)');
                uriRegExp.exec(pathname);
                var type = RegExp.$1;
                var value = RegExp.$2;
                var id = type+"-"+value
                var act = RegExp.$3;

                var resp = resourceManager.searchResource('newFraudList',id);

                if(resp == null){

                    jsonHandler.showNotFoundResponse({response:"No record with id: "+id+" was found"}, response);

                }else{

                    if('actions' in resp){


                        var acts = topicsArgs

                        if(acts == null){

                          jsonHandler.showBadRequestResponse({"message":"actions null","status":400}, response);
                          return;
                        }
                        var countAct = 0

                        if('scoring_id' in acts){

                            var sco_id =  acts.scoring_id;

                            if(!(sco_id)){
                                 jsonHandler.showBadRequestResponse({"message":"scoring_id null","status":400}, response);
                                 return;
                            }
                        }

                         if(!('risk' in acts)){
                             jsonHandler.showBadRequestResponse({"message":"risk must be specified","status":400}, response);
                             return;
                         }

                        var risk =  acts.risk;

                        if(!(risk)){
                             jsonHandler.showBadRequestResponse({"message":"risk null","status":400}, response);
                             return;
                        }

                         if(!('reason' in acts)){
                             jsonHandler.showBadRequestResponse({"message":"reason must be specified","status":400}, response);
                             return;
                         }

                        var rea =  acts.reason;

                        if(!(rea)){
                             jsonHandler.showBadRequestResponse({"message":"reason null","status":400}, response);
                             return;
                        }

                        var notFound = true

                        var i = 0

                        while(i<resp.actions.length){

                           console.log("actions elem: "+i+" "+ resp.actions[i].action +"=="+act)

                           if(resp.actions[i].action == act){

                               resp.actions[i].scoring_id = topicsArgs.scoring_id
                               resp.actions[i].risk = topicsArgs.risk
                               resp.actions[i].reason = topicsArgs.reason

                               notFound = false
                            }

                            i++
                        }

                        if(notFound){
                            jsonHandler.showNotFoundResponse({response:" No record with id: "+id+" and action: "+act+" was found"}, response);
                        }

                        //resp.actions = resp.actions.concat(topicsArgs);   //se agrega la nueva

                    }else{

                        jsonHandler.showInternalServerErrorResponse({response:"resource without actions"}, response);

                    }

                    if(id == "GEO_POINT--34.4343434,-43.2323233"){
                        jsonHandler.showOKResponse({response:"Action modified"}, response);
                    }

                    resourceManager.modifyResource('newFraudList',id,resp,response);//Modifica la que esta

                    jsonHandler.showOKResponse({response:"Action modified"}, response);

                }

            });
        },

        deleteNewFraudList : function(request, response){
            console.log("HACIENDO DELETE!!!")
               var pathname = url.parse(request.url).pathname;
                var uriRegExp = new RegExp('/fraud/lists/record/(\\w+)-(\\w+)');
                uriRegExp.exec(pathname);
                var type = RegExp.$1;
                var value = RegExp.$2;
                var id = type+"-"+value
                console.log(pathname)

                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

                if(id == "DOC-70334543"){
                    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                    return;
                }

                if(id == "NAME-pavel"){
                    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                    return;
                }

                if(id == "DOC-90338323"){
                    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                    return;
                }

                //MOCKS PARA REINTENTOS
                if (id == "ZIP_CODE-555666788" && retryDel1 == 0) {
                    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                    retryDel1++;
                    return;
                }
                  if(id == "DEVICE_ID-555666788"&& retryDel2 == 0){
                    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                    retryDel2++;
                    return;
                }
                if(id == "CUST-555666788"&& retryDel3 == 0){
                    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                    retryDel3++;
                    return;
                }
                if (id == "ZIP_CODE-555666777" && retryDel1 == 0) {
                    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                    retryDel1++;
                    return;
                }

                if(id == "DEVICE_ID-555666777"&& retryDel2 == 0){
                    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                    retryDel2++;
                    return;
                }

                if(id == "CUST-555666777"&& retryDel3 == 0){
                    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                    retryDel3++;
                    return;
                }
                //////////

                console.log("Borrando record id: " + id)
                var resp = resourceManager.deleteResource('newFraudList',id,response);

                if (resp == null) {

                         jsonHandler.showNotFoundResponse({id:"No record with id: "+id+" was found"}, response);
                } else {

                        jsonHandler.showOKResponse({"message":"Deleted: OK!"}, response);
                }


        },
        deleteNewFraudList2 : function(request, response){

               var pathname = url.parse(request.url).pathname;
                var uriRegExp = new RegExp('/fraud/lists/record/(\\w+)-(\\w+)-(\\w+)');
                uriRegExp.exec(pathname);
                var type = RegExp.$1;
                var value1 = RegExp.$2;
                var value2 = RegExp.$3;
                var id = type+"-"+value1+"-"+value2

                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

                var resp = resourceManager.deleteResource('newFraudList',id,response);

                if (resp == null) {

                         jsonHandler.showNotFoundResponse({id:"No record with id: "+id+" was found"}, response);
                } else {

                        jsonHandler.showOKResponse({"message":"Deleted: OK!"}, response);
                }


        },

        cleanResourcesNewFraudList: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            resourceManager.cleanResources('newFraudList', response);

            resourceManager.saveTemporalResource('newFraudList',"CUST-65076289",-1,{"users":[{"reason":"test_reason2","user_id":65076289,"ins_date":"2013-03-14T22:48:45.000-04:00"}],"site_id":"MLB","from_app":"test","type":"CUST","trunc_value":null,"id":"CUST-65076289","creation_date":"2013-09-05T12:06:50.000-04:00","category":"graylist","value":"65076289","admin_id":"test","comments":"test","actions":null,"parent_id":null,"actions": [{"action": "pay","reason": "test"},{"action": "sell","reason": "test"}]});


        },

        cleanRetryVarFraudList: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            //SETAMOS CON 0 LAS VARIABLES GLOBALES DE REINTENTO
            global.retryPaySearch = 0;
            global.retryPayLegacy = 0;
            global.retryPayRCha=0;
            global.retryUserCard=0;
            global.retryCardId = 0;
            global.retryDevice = 0;
            global.retryWithDoc = 0;
            global.retryPhone = 0;
            global.retryUsShp = 0;
            retryPost = 0;
            retryDel1=0;
            retryDel2=0;
            retryDel3=0;

            jsonHandler.showOKResponse({response:"Retry values cleaned"}, response);
            return

        },

        getId: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/record/(\\d+)');
            uriRegExp.exec(pathname);

            var flId = RegExp.$1;

			if (flId==46914 ){
                response.write( JSON.stringify(
{"id": 46914,"category":"graylist","site_id":"MLB","type":"cust","value":"30396682","trunc_value":null,"comments":"migracion desde old api con el id 893518","from_app":"mp3","admin_id":"fraudML","creation_date":"2013-03-14T15:59:13.000-04:00","parent_id":null,"users":[{"user_id":30396682,"reason":"mp_cargas_masivas_migrado","ins_date":"2013-03-14T15:59:13.000-04:00"}],"actions":[{"action":"pay","reason":"mp_cargas_masivas_migrado","scoring_id":null,"risk":1,"ins_date":"2013-03-14T15:59:13.000-04:00"}],"type_detail":null,"value_detail":null}));
                 response.end();
                 return;
              } else if (flId==46915 ){
				response.write( JSON.stringify(
				{"id": 46915,"category":"graylist","site_id":"MLB","type":"cust","value":"30396683","trunc_value":null,"comments":"migracion desde old api con el id 893518","from_app":"mp3","admin_id":"fraudML","creation_date":"2013-03-14T15:59:13.000-04:00","parent_id":null,"users":[{"user_id":30396682,"reason":"mp_cargas_masivas_migrado","ins_date":"2013-03-14T15:59:13.000-04:00"}],"actions":[{"action":"pay","reason":"mp_cargas_masivas_migrado","scoring_id":null,"risk":1,"ins_date":"2013-03-14T15:59:13.000-04:00"}],"type_detail":null,"value_detail":null}));
                 response.end();
                 return;
			  } else if (flId==46916){
				response.write( JSON.stringify(
				{"id": 46916,"category":"graylist","site_id":"MLB","type":"cust","value":"30396682","trunc_value":null,"comments":"migracion desde old api con el id 893518","from_app":"mp3","admin_id":"fraudML","creation_date":"2013-03-14T15:59:13.000-04:00","parent_id":null,"users":[{"user_id":30396682,"reason":"mp_cargas_masivas_migrado","ins_date":"2013-03-14T15:59:13.000-04:00"}],"actions":[{"action":"pay","reason":"mp_cargas_masivas_migrado","scoring_id":null,"risk":1,"ins_date":"2013-03-14T15:59:13.000-04:00"}],"type_detail":null,"value_detail":null}));
                 response.end();
                 return;
			  } 

            var resp = resourceManager.getResource('fraudlistLevel',flId,response);

            console.log("Fraudlist getId => " + resp + flId);

            if (resp == null) {
                 jsonHandler.showNotFoundResponse({id:"No record with id: "+flId+" was found"}, response);
            }else{
                 jsonHandler.showOKResponse(JSON.stringify(resp));
            }

        },
		getIdHistory: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/record/history/(\\d+)');
            uriRegExp.exec(pathname);

            var flId = RegExp.$1;

			if (flId==46914 ){
                response.write( JSON.stringify(
{"id": 46914,"category":"graylist","site_id":"MLB","type":"cust","value":"30396682","trunc_value":null,"comments":"migracion desde old api con el id 893518","from_app":"mp3","admin_id":"fraudML","creation_date":"2013-03-14T15:59:13.000-04:00","parent_id":null,"users":[{"user_id":30396682,"reason":"mp_cargas_masivas_migrado","ins_date":"2013-03-14T15:59:13.000-04:00"}],"actions":[{"action":"pay","reason":"mp_cargas_masivas_migrado","scoring_id":null,"risk":1,"ins_date":"2013-03-14T15:59:13.000-04:00"}],"type_detail":null,"value_detail":null}));
                 response.end();
                 return;
              } else if (flId==46915 ){
				response.write( JSON.stringify(
				{"id": 46915,"category":"graylist","site_id":"MLB","type":"cust","value":"30396683","trunc_value":null,"comments":"migracion desde old api con el id 893518","from_app":"mp3","admin_id":"fraudML","creation_date":"2013-03-14T15:59:13.000-04:00","parent_id":null,"users":[{"user_id":30396682,"reason":"mp_cargas_masivas_migrado","ins_date":"2013-03-14T15:59:13.000-04:00"}],"actions":[{"action":"pay","reason":"mp_cargas_masivas_migrado","scoring_id":null,"risk":1,"ins_date":"2013-03-14T15:59:13.000-04:00"}],"type_detail":null,"value_detail":null}));
                 response.end();
                 return;
			  } else if (flId==46916 ){
				response.write( JSON.stringify(
				{"id": 46916,"category":"graylist","site_id":"MLB","type":"cust","value":"30396682","trunc_value":null,"comments":"migracion desde old api con el id 893518","from_app":"mp3","admin_id":"fraudML","creation_date":"2013-03-14T15:59:13.000-04:00","parent_id":null,"users":[{"user_id":30396682,"reason":"mp_cargas_masivas_migrado","ins_date":"2013-03-14T15:59:13.000-04:00"}],"actions":[{"action":"pay","reason":"mp_cargas_masivas_migrado","scoring_id":null,"risk":1,"ins_date":"2013-03-14T15:59:13.000-04:00"}],"type_detail":null,"value_detail":null}));
                 response.end();
                 return;
			  } 


            var resp = resourceManager.getResource('fraudlistLevel',flId,response);

            console.log("Fraudlist getId => " + resp + flId);

            if (resp == null) {
                 jsonHandler.showNotFoundResponse({id:"No record with id: "+flId+" was found"}, response);
            }else{
                 jsonHandler.showOKResponse(JSON.stringify(resp));
            }

        },
        resourceId: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/fraud/lists/record/(\\w+)-(\\w+)');
            uriRegExp.exec(pathname);
            var type = RegExp.$1;
            var value = RegExp.$2;
            var id = type+"-"+value

            var flId = RegExp.$1;

            var resp = resourceManager.getResource('newFraudList',id,response);

            console.log("Fraudlist getId => " + resp + flId);

            if (resp == null) {
                 jsonHandler.showNotFoundResponse({id:"No record with id: "+flId+" was found"}, response);
            }else{
                 jsonHandler.showOKResponse(JSON.stringify(resp));
            }

        }
};

function isSearch(request) {
    var pathname = url.parse(request.url).pathname;
    console.log("pathname: " + pathname);
    return pathname.indexOf("search") != -1 ;
}

//Fraudlist Level -jazcurra
resourceManager.saveTemporalResource('fraudlistLevel',idCounter,-1,{"id":idCounter,"type": "tc","value": "4C0144A5E7C2F08BF017B0BA60E6C0BCC37EC1C9","category": "blacklist","site_id": "mla","admin_id": "68537621","from_app": "scoring,asdasd","comments": "testasdasdas,asdasd%asdasd&asda4a6d4a 4asd5 asd","trunc_value": "234234234",/*"users": [{"user_id": 51543991,"reason": "test_fraude_mp"}],*/"actions": [{"action": "pay","reason": "chargeback"},{"action": "sell","reason": "chargeback_comp"}]});
idCounter++;
idCounter++;
//123348
resourceManager.saveTemporalResource('fraudlistLevel',idCounter,-1,{"id":idCounter,"type": "cust","value": "456216","category": "blacklist","site_id": "mla","admin_id": "68537621","from_app": "scoring,asdasd","comments": "testasdasdas,asdasd%asdasd&asda4a6d4a 4asd5 asd","trunc_value": "234234234","actions": [{"action": "pay","reason": "chargeback_comp"},{"action": "sell","reason": "chargeback_comp"}]});
idCounter++;
//123349
resourceManager.saveTemporalResource('fraudlistLevel',idCounter,-1,{"id":idCounter,"type": "device_id","value": "cafdb6d9cf535a90b19014832f533915","category": "blacklist","site_id": "mla","admin_id": "68537621","from_app": "scoring,asdasd","comments": "testasdasdas,asdasd%asdasd&asda4a6d4a 4asd5 asd","trunc_value": "234234234","actions": [{"action": "pay","reason": "chargeback"},{"action": "sell","reason": "chargeback_comp"}]});
idCounter++;
//123350
resourceManager.saveTemporalResource('fraudlistLevel',idCounter,-1,{"id":idCounter,"type": "device_id","value": "cafdb6d9cf535a90b19014832f50001","category": "blacklist","site_id": "mla","admin_id": "68537621","from_app": "scoring,asdasd","comments": "testasdasdas,asdasd%asdasd&asda4a6d4a 4asd5 asd","trunc_value": "234234234","actions": [{"action": "pay","reason": "chargeback"},{"action": "sell","reason": "chargeback_comp"}]});
idCounter++;
//123351
resourceManager.saveTemporalResource('fraudlistLevel',idCounter,-1,{"id":idCounter,"type": "tc","value": "4C0144A5E7C2F08BF017B0BA60E6C0BCC37EC0001","category": "blacklist","site_id": "mla","admin_id": "68537621","from_app": "scoring,asdasd","comments": "testasdasdas,asdasd%asdasd&asda4a6d4a 4asd5 asd","trunc_value": "234234234","actions": [{"action": "pay","reason": "chargeback"},{"action": "sell","reason": "chargeback_comp"}]});
idCounter++;
//123352
resourceManager.saveTemporalResource('fraudlistLevel',idCounter,-1,{"id":idCounter,"type": "tc","value": "4C0144A5E7C2F08BF017B0BA60E6C0BCC37EC0002","category": "blacklist","site_id": "mla","admin_id": "68537621","from_app": "scoring,asdasd","comments": "testasdasdas,asdasd%asdasd&asda4a6d4a 4asd5 asd","trunc_value": "234234234",/*"users": [{"user_id":51543990,"reason":"money_in_tc","ins_date":"2013-03-20T10:29:48.000-04:00"},{"user_id":51543991,"reason":"money_in_tc","ins_date":"2013-03-25T10:29:48.000-04:00"},{"user_id":51543992,"reason":"money_in_tc","ins_date":"2013-03-18T10:29:48.000-04:00"},{"user_id":51543992,"reason":"money_in_tc","ins_date":"2013-03-15T10:29:48.000-04:00"}],*/"actions": [{"action": "pay","reason": "chargeback"},{"action": "sell","reason": "chargeback_comp"}]});
idCounter++;


//Ventas presenciales
resourceManager.saveTemporalResource('fraudlistLevel',987654,-1,{"id":987654,"type": "tc","value": "EE31A05702D95BF45B5008E4FB6EF92E126EACF0","category": "blacklist","site_id": "mla","admin_id": "68537621","from_app": "scoring,asdasd","comments": "testasdasdas,asdasd%asdasd&asda4a6d4a 4asd5 asd","trunc_value": "234234234","actions": [{"action": "pay","reason": "chargeback"},{"action": "sell","reason": "chargeback_comp"}]});
resourceManager.saveTemporalResource('fraudlistLevel',987656,-1,{"id":987656,"type": "device_id","value": "b36f7328aa87488e8e7ee2f5a1b4252b","category": "blacklist","site_id": "mla","admin_id": "68537621","from_app": "scoring,asdasd","comments": "testasdasdas,asdasd%asdasd&asda4a6d4a 4asd5 asd","trunc_value": "234234234","actions": [{"action": "pay","reason": "chargeback"},{"action": "sell","reason": "chargeback_comp"}]});

//Device_ml
resourceManager.saveTemporalResource('fraudlistLevel',987655,-1,{"id":987655,"type": "device_ml","value": "526d0e43e4b09e04e3222e40","category": "blacklist","site_id": "mla","admin_id": "68537621","from_app": "scoring,asdasd","comments": "testasdasdas,asdasd%asdasd&asda4a6d4a 4asd5 asd","trunc_value": "234234234","actions": [{"action": "pay","reason": "chargeback"},{"action": "sell","reason": "chargeback"}]});

//PRUEBA USERS = NULL
resourceManager.saveTemporalResource('newFraudList',"CUST-8445082",-1,{"users":null,"site_id":"MLB","from_app":"pfmp","type":"CUST","trunc_value":null,"id":"CUST-8445082","creation_date":"2013-09-05T12:06:50.000-04:00","category":"graylist","value":"8445082","admin_id":"test","comments":"test","actions":[{"risk":1,"scoring_id":null,"reason":"test_reason1","action":"pay","ins_date":"2013-09-05T12:06:50.000-04:00"}],"parent_id":null});
//PRUEBA ACTIONS = NULL
resourceManager.saveTemporalResource('newFraudList',"CUST-3754524",-1,{"users":[{"reason":"test_reason2","user_id":79274435,"ins_date":"2013-03-14T22:48:45.000-04:00"}],"site_id":"MLB","from_app":"pfmp","type":"CUST","trunc_value":null,"id":"CUST-3754524","creation_date":"2013-09-05T12:06:50.000-04:00","category":"graylist","value":"3754524","admin_id":"test","comments":"test","actions":null,"parent_id":null});

resourceManager.saveTemporalResource('newFraudList',"CUST-65076289",-1,{"users":[{"reason":"test_reason2","user_id":65076289,"ins_date":"2013-03-14T22:48:45.000-04:00"}],"site_id":"MLB","from_app":"test","type":"CUST","trunc_value":null,"id":"CUST-65076289","creation_date":"2013-09-05T12:06:50.000-04:00","category":"graylist","value":"65076289","admin_id":"test","comments":"test","actions":null,"parent_id":null,"actions": [{"action": "pay","reason": "test"},{"action": "sell","reason": "test"}]});


exports.ping = fraudlistSubscriberController.ping;
exports.searchNewFraudList = fraudlistSubscriberController.searchNewFraudList;
exports.postNewFraudList = fraudlistSubscriberController.postNewFraudList;
exports.deleteNewFraudList = fraudlistSubscriberController.deleteNewFraudList;
exports.cleanResourcesNewFraudList = fraudlistSubscriberController.cleanResourcesNewFraudList;
exports.getId = fraudlistSubscriberController.getId;
exports.addUserNewFraudList = fraudlistSubscriberController.addUserNewFraudList;
exports.addActionNewFraudList = fraudlistSubscriberController.addActionNewFraudList;
exports.uptActionNewFraudList = fraudlistSubscriberController.uptActionNewFraudList;
exports.cleanRetryVarFraudList = fraudlistSubscriberController.cleanRetryVarFraudList;

// Mappings
urlMapping.add ([{
        pattern: '^/sub/fraud/lists/records/cleanAll',//limpia los recursos alamacenados en memoria
        action: {
            'GET':fraudlistSubscriberController.cleanResourcesNewFraudList
       }
    },{
        pattern: '^/sub/fraud/lists/records/retryVar',//retry var = 0
        action: {
            'GET':fraudlistSubscriberController.cleanRetryVarFraudList
       }
    },{
        pattern: '^/sub/fraudlist/ping',
        action: {
            'GET':fraudlistSubscriberController.ping
        }
    },{
        pattern: '^/sub/fraud/lists/record/(\\w+)-(\\w+)/users',
        action: {
            'POST':fraudlistSubscriberController.addUserNewFraudList    //post nueva fraudList agrega usuarios
        }
     },{
        pattern: '^/sub/fraud/lists/record/(\\w+)-(\\w+)/actions',
        action: {
            'POST':fraudlistSubscriberController.addActionNewFraudList,    //post nueva fraudList agrega actions
            'PUT':fraudlistSubscriberController.uptActionNewFraudList    //put nueva fraudList update actions
        }
     },{
        //search uris =========================
        pattern: '^/sub/fraud/lists/records/search?(\\w+)',//nueva fraudList (elastic search)
        action: {
            'GET':fraudlistSubscriberController.searchNewFraudList
       }
    },{
        pattern: '^/sub/fraud/lists/record(/(\\w+)-(\\w+))?$',
        action: {
            'POST':fraudlistSubscriberController.postNewFraudList,    //post nueva fraudList
            'DELETE':fraudlistSubscriberController.deleteNewFraudList, //delete nueva fraudList
            'GET':fraudlistSubscriberController.resourceId
       }
    },{
        pattern: '^/sub/fraud/lists/record(/(\\w+)-(\\w+)-(\\w+))?$',
        action: {
            'POST':fraudlistSubscriberController.postNewFraudList,    //post nueva fraudList
            'DELETE':fraudlistSubscriberController.deleteNewFraudList2, //delete nueva fraudList
            'GET':fraudlistSubscriberController.resourceId
       }
    },{
        pattern: '^/sub/fraud/lists/record/(\\d+)',
        action: {
            'GET':fraudlistSubscriberController.getId
       }
    },{
        pattern: '^/sub/fraud/lists/record/history/(\\d+)',
        action: {
            'GET':fraudlistSubscriberController.getIdHistory
       }
    }]);
