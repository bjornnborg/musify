var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var fraudlistController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"UsersFullService: OK!"}));
            response.end();
        },

        save : function(request, response){
            jsonHandler.getContent(request, function(topicsArgs){

                console.log("fraudlist: " + JSON.stringify(topicsArgs));

                var type = topicsArgs.type;
                var value = topicsArgs.value;


                //Parche para buscar device y smart en susbcriber
                if(type == "DEVICE_ID" || type == "SMART_ID" || type == "ZIP_CODE" || type == "STREET_NUMBER"){
                    value = topicsArgs.cust_id;
                }
                //

                var id = type+"-"+value;

                resourceManager.saveTemporalResource('fraudlist',id,-1,topicsArgs);

                jsonHandler.showOKResponse({response:"resource created"}, response);
            });
        },

        saveNewFL : function(request, response){
            jsonHandler.getContent(request, function(topicsArgs){

                console.log("fraudlist inserts: " + JSON.stringify(topicsArgs));

                var type = topicsArgs.type;
                var value = topicsArgs.value;


                //Parche para buscar device y smart en susbcriber
                if(type == "DEVICE_ID" || type == "SMART_ID" || type == "ZIP_CODE" || type == "STREET_NUMBER"){
                    value = topicsArgs.cust_id;
                }
                //

                var id = type+"-"+value;

                resourceManager.saveTemporalResource('newFraudlist',id,-1,topicsArgs);



                jsonHandler.showOKResponse({"message":"resource created","status":201}, response);
            });
        },

        deleteBL : function(request, response){

           var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/fraudlist/records/(\\w+)-(\\w+)');
            uriRegExp.exec(pathname);
            var type = RegExp.$1;
            var value = RegExp.$2;
            var id = type+"-"+value

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });


            var resp = resourceManager.deleteResource('fraudlist',id,response);

            if (resp == null) {

                     jsonHandler.showNotFoundResponse({id:"id not found"}, response);
            } else {

                    jsonHandler.showOKResponse({"message":"Deleted: OK!"}, response);
            }
        },

        deleteIdNewFL : function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            jsonHandler.showOKResponse({"message":"resource deleted","status":200}, response);
        },


        deleteId : function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            jsonHandler.showOKResponse({"message":"Deleted: OK!"}, response);

        },


        search : function(request, response){
            //resourceManager.saveRequestResource('fraudlist', request, response);
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify([{"id":13153474,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-06-04T13:50:25.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: CUENTA","cust_id":null,"flow":"MIG","from_app":"MP3","ins_dt":"2012-06-04T13:50:18.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLB","status":"active","trunc_value":null,"type":"PHONE","user_admin":null,"value":"2235756757"}]));
            response.end();
        },

        /*searchBlacklist : function(request, response){

            // extract data from url
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp("/fraudlist/black_records/([\\w\\-]*)$");
            var resp = uriRegExp.exec(pathname);
            var typeAccount = RegExp.$1;

            console.log("pathname: " + pathname);
            console.log("RegExp: " + typeAccount);

            if (typeAccount == "search") {
                search(request, response);
                return;
            }



            var data = url.parse(request.url, true).query;

            if(typeAccount == "CUENTA" && data["value"] == "0140028101509601827737") {
            //if(data["value"] == "0140028101509601827737") {
                response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify   ([{"id":13153474,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-06-04T13:50:25.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: CUENTA","cust_id":null,"flow":"MIG","from_app":"MP3","ins_dt":"2012-06-04T13:50:18.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"CTA","user_admin":null,"value":"0140028101509601827737"}]));
            } else if (typeAccount == "CUENTA" && data["value"] == "033¬341¬888328418/7¬CC") {
        //} else if (data["value"] == "033¬341¬888328418/7¬CC") {
                response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify([{"id":13153474,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-06-04T13:50:25.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: CUENTA","cust_id":null,"flow":"MIG","from_app":"MP3","ins_dt":"2012-06-04T13:50:18.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLB","status":"active","trunc_value":null,"type":"CTA","user_admin":null,"value":"033¬341¬888328418/7¬CC"}]));
            } else {
                response.writeHead(404, {
                'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({"message":"No records with given params were found","status":404,"error":"not_found","cause":[]}));
            }

            response.end();
        }*/

        searchTypeAndValueBlacklist: function(request, response){
            if(isSearch(request)) {
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({"records":[{"id":24010203,"admin_id":0,"approval_admin_id":0,"approval_dt":"2012-12-19T09:52:29.000-04:00","approval_user_admin":"fraudMP","category":"blacklist","comments":"prueba","cust_id":20,"flow":"NW","from_app":"prueba","ins_dt":"2012-12-19T09:52:29.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":null,"site_id":"MLA","status":"active","trunc_value":null,"type":"PHONE","user_admin":"fraudMP","value":"7653434"}],"paging":{"offset":0,"limit":1,"total":1}}));
                response.end();
                return;
            }

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/fraudlist/black_records/(\\w+)/(\\w+)?');
            uriRegExp.exec(pathname);
            var type = RegExp.$1;
            var value = RegExp.$2;
            var id = type+"-"+value
            //log("BL> type: " + type + " value: " + value);



            var result = [];
            if (type == 'DOC' && value == 123) {
                result = [{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: DNI","cust_id":null,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"DOC","user_admin":null,"value":"27166944"}];
                response.write(JSON.stringify(result));
                response.end();
            }
            if (type == 'TC' || type == 'SMART_ID' || type == 'DEVICE_ID' || type == "ZIP_CODE" || type == "STREET_NUMBER") {
                result = [{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: DNI","cust_id":0,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"DOC","user_admin":null,"value":"27166944"}];
                response.write(JSON.stringify(result));
                response.end();
            }if (type == "CUST" && value == 123) {
                result = [{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: DNI","cust_id":443462134,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"CUST","user_admin":null,"value":"443462134"},{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"pldrisklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: DNI","cust_id":443462134,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"CUST","user_admin":null,"value":"443462134"}];
                response.write(JSON.stringify(result));
                response.end();
            }else {
                jsonHandler.showNotFoundResponse({msg:  'blacklist not found: ' + id}, response);
            }

        },

        getTypeAndValue: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/fraudlist/black_records/(\\w+)/(\\w+)');
            uriRegExp.exec(pathname);
            var type = RegExp.$1;
            var value = RegExp.$2;
            var id = type+"-"+value

            console.log("search id " + id);

            var result = [];

            var resp = resourceManager.searchResource('fraudlist', id);

            console.log("getTypeAndValueMock " + resp);

            if (resp == null) {

                jsonHandler.showNotFoundResponse({id:"id not found"}, response);

            } else {
                result = [resp]
                response.write(JSON.stringify(result));
                response.end();
            }

/*
                if (type == 'TC' && value == '4582125DB62E574B294EF7B189482A9EE9B2637C') {

                result = [
                        {
                            "id": 87346578,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "whitelist",
                            "comments": "MIG Carga masiva",
                            "cust_id": 101,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": 123,
                            "site_id": "MLC",
                            "status": "active",
                            "trunc_value": "554927...0069",
                            "type": "TC",
                            "user_admin": "fraudMP",
                            "value": "4582125DB62E574B294EF7B189482A9EE9B2637C"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

                if (type == 'TC' && value == '4C0144A5E7C2F08BF017B0BA60E6C0BCC37EC1C9') {

                result = [
                        {
                            "id": 87346620,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "blacklist",
                            "comments": "MIG Carga masiva",
                            "cust_id": 101,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": 123,
                            "site_id": "MLC",
                            "status": "active",
                            "trunc_value": "554927...0069",
                            "type": "TC",
                            "user_admin": "fraudMP",
                            "value": "4C0144A5E7C2F08BF017B0BA60E6C0BCC37EC1C9"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

               if (type == 'DOC' && value == 20655888) {

                result = [
                        {
                            "id": 87346579,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "graylist",
                            "comments": "MIG Carga masiva",
                            "cust_id": 20,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": null,
                            "site_id": "MLA",
                            "status": "active",
                            "trunc_value": null,
                            "type": "DOC",
                            "user_admin": "fraudMP",
                            "value": "20655888"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
                }

               if (type == 'CUST' && value == 20) {

                result = [
                        {
                            "id": 87346579,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "graylist",
                            "comments": "MIG Carga masiva",
                            "cust_id": 20,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": null,
                            "site_id": "MLA",
                            "status": "active",
                            "trunc_value": null,
                            "type": "CUST",
                            "user_admin": "fraudMP",
                            "value": "20"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

               if (type == 'DEVICE_ID' && value == 'cafdb6d9cf535a90b19014832f533915') {

                result = [
                        {
                            "id": 87346580,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "whitelist",
                            "comments": "MIG Carga masiva",
                            "cust_id": 20,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": null,
                            "site_id": "MLA",
                            "status": "active",
                            "trunc_value": null,
                            "type": "DEVICE_ID",
                            "user_admin": "fraudMP",
                            "value": "cafdb6d9cf535a90b19014832f533915"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

               if (type == 'SMART_ID' && value == '8f83191aec494821a1985c7f0bdb751f') {

                result = [
                        {
                            "id": 87346581,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "graylist",
                            "comments": "MIG Carga masiva",
                            "cust_id": 20,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": null,
                            "site_id": "MLA",
                            "status": "active",
                            "trunc_value": null,
                            "type": "SMART_ID",
                            "user_admin": "fraudMP",
                            "value": "8f83191aec494821a1985c7f0bdb751f"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

              if (type == 'PHONE' && value == '4751') {

                result = [
                        {
                            "id": 87346582,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "BLACKLIST",
                            "comments": "MIG Carga masiva",
                            "cust_id": 101,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": 123,
                            "site_id": "MLB",
                            "status": "active",
                            "trunc_value": "554927...0069",
                            "type": "PHONE",
                            "user_admin": "fraudMP",
                            "value": "4751"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

               if (type == 'DEVICE_ID') {

                result = [
                        {
                            "id": 87346596,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "BLACKLIST",
                            "comments": "MIG Carga masiva",
                            "cust_id": 101,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": 123,
                            "site_id": "MLB",
                            "status": "active",
                            "trunc_value": "554927...0069",
                            "type": "DEVICE_ID",
                            "user_admin": "fraudMP",
                            "value": "febae71ce95f4a289b9f5f83b9f25359"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }


               if (type == 'SMART_ID') {

                result = [
                        {
                            "id": 87346598,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "BLACKLIST",
                            "comments": "MIG Carga masiva",
                            "cust_id": 101,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": 123,
                            "site_id": "MLB",
                            "status": "active",
                            "trunc_value": "554927...0069",
                            "type": "SMART_ID",
                            "user_admin": "fraudMP",
                            "value": "81ce95f4a289b9f5f83b9f25359"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

            jsonHandler.showNotFoundResponse({message:  'No records with given params were found'}, response);

 */
        },

         searchTypeAndValue: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var url_parts = url.parse(request.url,true);

            var type = url_parts.query.type
            var value = url_parts.query.value

            if(type == null){
                response.write( JSON.stringify( {"msg":"type is null"} ) );
                response.end();
            }

            //Parche para buscar device y smart en susbcriber
            if((type == "DEVICE_ID" || type == "SMART_ID") && (value == null)){
                value = url_parts.query.users.user_id;
            }
            //

            console.log(type +"-"+ value);

            var id = type+"-"+value

            var result = [];

            var resp = resourceManager.searchResource('fraudlist', id);

            console.log("searchTypeAndValue " + resp);

            if (resp != null) {

                result = [resp]
                response.write(JSON.stringify({"records":result}));
                response.end();

            }


            jsonHandler.showNotFoundResponse({message:  'No records with given params were found'}, response);
        },

         searchNewFraudList: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var url_parts = url.parse(request.url,true);

            var type = url_parts.query.type
            var value = url_parts.query.value
            var prefix = url_parts.query.prefix

            var category = url_parts.query.category
            var user_id = url_parts.query.user_id

            var fromApp = url_parts.query.from_app

            console.log("El valor de user_id es: " + user_id);
            console.log("El valor de category es: " + category);
            console.log("El valor de type es: " + type);
            console.log("PA1");


            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! " + fromApp)
            if(fromApp == "dowjonesjob-288290"){
              result = [{"type":"DOC","value_detail":"CHIL","value":"70334543","reason":"member, board of directors, empresa nacional de minerÃ­a","category":"PEPLIST","site_id":"MLC","comments":"Carga masiva","from_app":"dowjonesjob-288290","actions":[{"action":"pay","reason":"money_laundering","risk":1}],"id":"DOC-70334543"}];
              response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
              response.end();
              return;
            }

            if(fromApp == "dowjonesjob-509427"){
              result = [{"type":"NAME","value_detail":"RUSS","value":"pavel nikolaevich gusev","reason":"member, civic chamber","category":"PEPLIST","site_id":"MRD","comments":"Carga masiva-default MRD","from_app":"dowjonesjob-509427","actions":[{"action":"pay","reason":"money_laundering","risk":1}],"id":"NAME-pavel nikolaevich gusev"}, {"type":"NAME","value_detail":"RUSS","value":"pavel nikolaevich gusev","reason":"member, civic chamber","category":"MOSTWANTEDLIST","site_id":"MRD","comments":"SANCTIONS LIST-default MRD","from_app":"dowjonesjob-509427","actions":[{"action":"pay","reason":"money_laundering","risk":1}]}];
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


            if (type == "DEVICE_ID" && value == 'bebae91ce95f4a288b9f5f83b9f25359'){
              result = [{"type": "DEVICE_ID", "type_detail": "SHIPPING", "value": "bebae91ce95f4a288b9f5f83b9f25359", "value_detail": "APPROXIMATE", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": "DEVICE_ID-196631504", "distance": "250m"} ];
              response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
              response.end();
              return;
            }

            if (type == "PHONE" && value == '321546'){
              result = [{"type": "PHONE", "type_detail": "SHIPPING", "value": "321546", "value_detail": "APPROXIMATE", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
              response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
              response.end();
              return;
            }

            if (type == "STREET_NUMBER" && value == "94195600-123") {
                result = [{"type": "STREET_NUMBER", "type_detail": "SHIPPING", "value": "94195600-123", "value_detail": "APPROXIMATE", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }
            if (type == "ZIP_CODE" && value == '94195600'){
                console.log("Entra a datos en peplist")
                result = [{"type": "ZIP_CODE", "type_detail": null, "value": "94195600", "value_detail": null, "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }
            if (type == "CUST" && value == '151211818'){
                result = [{"type": "CUST", "type_detail": null, "value": "151211818", "value_detail": null, "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                return;
            }
            if (type == "TC" && value == "EB3DB8F14CE738A7CC0CBBAB8816287567238DCA") {
                result = [{"type": "TC", "type_detail": null, "value": "EB3DB8F14CE738A7CC0CBBAB8816287567238DCA", "value_detail": null, "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }
            if (type == "DOC" && value == "26682958") {
                result = [{"type": "DOC", "type_detail": "SHIPPING", "value": "26682958", "value_detail": "APPROXIMATE", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }
            if (type == "ADDRESS_LINE") {
                result = [{"type": "ADDRESS_LINE", "type_detail": null, "value": "avenida justo daract,2351,5700,juana koslay,san luis,argentina", "value_detail": null, "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }
            if (type == "DOC" && value == "21150726") {
                result = [{"type": "DOC", "type_detail": "SHIPPING", "value": "21150726", "value_detail": "APPROXIMATE", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }
            if (type == "NAME" && value == "lucas prato") {
                result = [{"type": "NAME", "type_detail": null, "value": "lucas_prato", "value_detail": null, "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "blacklist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }

            if (type == "NAME" && value == "rodrigo  placios") {
                result = [{"type": "NAME", "type_detail": null, "value": "rodrigo_placios", "value_detail": null, "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "blacklist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }
            if (type == "doc" && value == "16883876000163") {
                result = [{"type": "GEO_POINT", "type_detail": "SHIPPING", "value": "-34.5687512,-58.5075366", "value_detail": "APPROXIMATE", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }
            if (type == "GEO_POINT" && value == "23.434334,24.121212") {
                result = [{"type": "GEO_POINT", "type_detail": "SHIPPING", "value": "-34.5687512,-58.5075366", "value_detail": "APPROXIMATE", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }

            if (type == "DEVICE_ML" && value == "5310e2c9e4b09fa0871df8c0") {
                result = [{"type": "GEO_POINT", "type_detail": "SHIPPING", "value": "-34.5687512,-58.5075366", "value_detail": "APPROXIMATE", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }
            if (type == "STREET_NUMBER" && value == "36880000-25") {
                result = [{"type": "GEO_POINT", "type_detail": "SHIPPING", "value": "-34.5687512,-58.5075366", "value_detail": "APPROXIMATE", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }

            if (type == "DOC" && value == '15302922'){
                console.log("Entra a datos en peplist")
                response.write(JSON.stringify({"paging": {"offset": 0, "limit": 2, "total": 2 }, "results": [{"id": 111111, "admin_id": 68537621, "category": "peplist", "from_app": "scoring", "comments": "Migracion", "creation_date": "2012-08-22T14: 13: 33.000-04: 00", "site_id": "MLA", "trunc_value": null, "type": "doc", "value": "15302922", "actions": [{"action": "list", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"action": "sell", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ], "users": [{"user_id": 123456, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"user_id": 654321, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ] }, {"id": 18614141111125, "admin_id": 68537621, "category": "graylist", "comments": "Migracion", "creation_date": "2012-08-22T14: 13: 33.000-04: 00", "site_id": "MLA", "trunc_value": null, "type": "ip", "from_app": "scoring", "value": "100.100.100.99", "actions": [{"action": "list", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"action": "sell", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ], "users": [{"user_id": 123456, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"user_id": 654321, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ] } ] }));
                response.end();
                return;
            }

            if (type == "CUST" && value == '443462134'){
                response.write(JSON.stringify({"paging": {"offset": 0,"limit": 10,"total": 1},"results": [{"users": [{"reason": "fraude_tc","user_id": 155162639,"ins_date": "2015-06-02T22:47:37.000-04:00"}],"value_detail": null,"site_id": "MLM","from_app": "auto_rest","type": "cust","trunc_value": null,"id": 20758390,"category": "graylist","type_detail": null,"value": "443462134","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "fraude_tc","action": "pay","ins_date": "2015-06-02T22:47:37.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "fraude_tc","action": "withdraw","ins_date": "2015-06-02T22:47:37.000-04:00"}],"comments": "carga desde restricciones automatico","parent_id": null,"creation_date": "2015-06-02T22:47:37.000-04:00"},{"users": [],"value_detail": "HIGH","site_id": "MLM","from_app": "auto_rest","type": "cust","trunc_value": null,"id": 20758390,"category": "pldrisklist","type_detail": null,"value": "443462134","admin_id": "prueba","actions": [],"comments": "prueba","parent_id": null,"creation_date": "2015-06-02T22:47:37.000-04:00"}]}));
                response.end();
                return;
            }

            if (type == "CUST" && value == '443462135'){
                response.write(JSON.stringify({"paging": {"offset": 0,"limit": 10,"total": 1},"results": [{"users": [{"reason": "fraude_tc","user_id": 155162639,"ins_date": "2015-06-02T22:47:37.000-04:00"}],"value_detail": null,"site_id": "MLM","from_app": "auto_rest","type": "cust","trunc_value": null,"id": 20758390,"category": "graylist","type_detail": null,"value": "443462134","admin_id": "fraudML","actions": [{"risk": 1,"scoring_id": null,"reason": "fraude_tc","action": "pay","ins_date": "2015-06-02T22:47:37.000-04:00"},{"risk": 1,"scoring_id": null,"reason": "fraude_tc","action": "withdraw","ins_date": "2015-06-02T22:47:37.000-04:00"}],"comments": "carga desde restricciones automatico","parent_id": null,"creation_date": "2015-06-02T22:47:37.000-04:00"},{"users": [],"value_detail": "HIGH","site_id": "MLM","from_app": "auto_rest","type": "cust","trunc_value": null,"id": 20758390,"category": "pldrisklist","type_detail": null,"value": "443462134","admin_id": "prueba","actions": [],"comments": "prueba","parent_id": null,"creation_date": "2015-06-02T22:47:37.000-04:00"},{"users": [],"value_detail": "algo","site_id": "MLM","from_app": "auto_rest","type": "cust","trunc_value": null,"id": 20758390,"category": "peplist","type_detail": null,"value": "443462135","admin_id": "prueba","actions": [],"comments": "prueba","parent_id": null,"creation_date": "2015-06-02T22:47:37.000-04:00"}]}));
                response.end();
                return;
            }

            if (type == "CUST" && value == '443462136'){
                response.write(JSON.stringify({"paging": {"offset": 0,"limit": 10,"total": 1},"results": [{"users": [],"value_detail": "algo","site_id": "MLM","from_app": "auto_rest","type": "cust","trunc_value": null,"id": 20758390,"category": "peplist","type_detail": null,"value": "443462135","admin_id": "prueba","actions": [],"comments": "prueba","parent_id": null,"creation_date": "2015-06-02T22:47:37.000-04:00"}]}));
                response.end();
                return;
            }

            if (type == "DOC" && value == '30333444'){
                console.log("Entra a datos en peplist")
                response.write(JSON.stringify({"paging": {"offset": 0, "limit": 2, "total": 2 }, "results": [{"id": 111111, "admin_id": 68537621, "category": "peplist", "from_app": "scoring", "comments": "Migracion", "creation_date": "2012-08-22T14: 13: 33.000-04: 00", "site_id": "MLA", "trunc_value": null, "type": "doc", "value": "15302922", "actions": [{"action": "list", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"action": "sell", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ], "users": [{"user_id": 123456, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"user_id": 654321, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ] }, {"id": 18614141111125, "admin_id": 68537621, "category": "graylist", "comments": "Migracion", "creation_date": "2012-08-22T14: 13: 33.000-04: 00", "site_id": "MLA", "trunc_value": null, "type": "ip", "from_app": "scoring", "value": "100.100.100.99", "actions": [{"action": "list", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"action": "sell", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ], "users": [{"user_id": 123456, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"user_id": 654321, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ] } ] }));
                response.end();
                return;
            }
            if (type == "ZIP_CODE" && value == '5700'){
                console.log("Entra a datos en peplist")
                response.write(JSON.stringify({"paging": {"offset": 0, "limit": 2, "total": 2 }, "results": [{"id": 111111, "admin_id": 68537621, "category": "peplist", "from_app": "scoring", "comments": "Migracion", "creation_date": "2012-08-22T14: 13: 33.000-04: 00", "site_id": "MLA", "trunc_value": null, "type": "doc", "value": "15302922", "actions": [{"action": "list", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"action": "sell", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ], "users": [{"user_id": 123456, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"user_id": 654321, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ] }, {"id": 18614141111125, "admin_id": 68537621, "category": "graylist", "comments": "Migracion", "creation_date": "2012-08-22T14: 13: 33.000-04: 00", "site_id": "MLA", "trunc_value": null, "type": "ip", "from_app": "scoring", "value": "100.100.100.99", "actions": [{"action": "list", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"action": "sell", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ], "users": [{"user_id": 123456, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"user_id": 654321, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ] } ] }));
                response.end();
                return;
            }
            if (type == "IP" && value == '190.31.122'){
                console.log("Entra a datos en peplist")
                response.write(JSON.stringify({"paging": {"offset": 0, "limit": 2, "total": 2 }, "results": [{"id": 111111, "admin_id": 68537621, "category": "peplist", "from_app": "scoring", "comments": "Migracion", "creation_date": "2012-08-22T14: 13: 33.000-04: 00", "site_id": "MLA", "trunc_value": null, "type": "doc", "value": "15302922", "actions": [{"action": "list", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"action": "sell", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ], "users": [{"user_id": 123456, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"user_id": 654321, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ] }, {"id": 18614141111125, "admin_id": 68537621, "category": "graylist", "comments": "Migracion", "creation_date": "2012-08-22T14: 13: 33.000-04: 00", "site_id": "MLA", "trunc_value": null, "type": "ip", "from_app": "scoring", "value": "100.100.100.99", "actions": [{"action": "list", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"action": "sell", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ], "users": [{"user_id": 123456, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"user_id": 654321, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ] } ] }));
                response.end();
                return;
            }
            if (type == "TC" && value == 'CC0CC1CC2CC3CC4CC5CC6CC7CC8CC9CC10CC11C1'){
                console.log("Entra a datos en peplist")
                response.write(JSON.stringify({"paging": {"offset": 0, "limit": 2, "total": 2 }, "results": [{"id": 111111, "admin_id": 68537621, "category": "peplist", "from_app": "scoring", "comments": "Migracion", "creation_date": "2012-08-22T14: 13: 33.000-04: 00", "site_id": "MLA", "trunc_value": null, "type": "doc", "value": "15302922", "actions": [{"action": "list", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"action": "sell", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ], "users": [{"user_id": 123456, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"user_id": 654321, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ] }, {"id": 18614141111125, "admin_id": 68537621, "category": "graylist", "comments": "Migracion", "creation_date": "2012-08-22T14: 13: 33.000-04: 00", "site_id": "MLA", "trunc_value": null, "type": "ip", "from_app": "scoring", "value": "100.100.100.99", "actions": [{"action": "list", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"action": "sell", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ], "users": [{"user_id": 123456, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"user_id": 654321, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ] } ] }));
                response.end();
                return;
            }

            if (type == "CUST" && value == '65160658'){
                console.log("Entra a datos en peplist")
                response.write(JSON.stringify({"paging": {"offset": 0, "limit": 2, "total": 2 }, "results": [{"id": 111111, "admin_id": 68537621, "category": "peplist", "from_app": "scoring", "comments": "Migracion", "creation_date": "2012-08-22T14: 13: 33.000-04: 00", "site_id": "MLA", "trunc_value": null, "type": "doc", "value": "15302922", "actions": [{"action": "list", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"action": "sell", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ], "users": [{"user_id": 123456, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"user_id": 654321, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ] }, {"id": 18614141111125, "admin_id": 68537621, "category": "graylist", "comments": "Migracion", "creation_date": "2012-08-22T14: 13: 33.000-04: 00", "site_id": "MLA", "trunc_value": null, "type": "ip", "from_app": "scoring", "value": "100.100.100.99", "actions": [{"action": "list", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"action": "sell", "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ], "users": [{"user_id": 123456, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"}, {"user_id": 654321, "reason": "test_fraude_mp", "ins_date": "2012-08-22T14: 13: 33.000-04: 00"} ] } ] }));
                response.end();
                return;
            }

            if (type == "PHONE" && value == '0266101010'){
                response.write(JSON.stringify({"paging":{"offset":0,"limit":2,"total":2},"results":[{"id":5348952,"admin_id":987967,"category":"blacklist","from_app":"scoring","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"doc","value":"0266101010","actions":[{"action":"list","reason":"test_fraude_mp_3534","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]},{"id":18614141111125,"admin_id":68537621,"category":"graylist","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"ip","from_app":"scoring","value":"100.100.100.99","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]}]}))
                response.end();
                return;
            }

            if(type == "CTA"){
                if(category == "blacklist" && value == "0170305240000042772802"){
                    console.log("Entra a la validacion de la cuenta blacklist")
                    response.write(JSON.stringify({
                            "paging": {
                                "offset": 0,
                                "limit": 2,
                                "total": 2
                            },
                            "results": [{
                                "users": [{
                                    "reason": "ml_fraude_vendedor",
                                    "user_id": 90451854,
                                    "ins_date": "2013-12-12T23:33:34.000-04:00"
                                }],
                                "site_id": "MLA",
                                "from_app": "auto_verif_status",
                                "type": "cta",
                                "trunc_value": null,
                                "id": 6820681,
                                "creation_date": "2013-12-12T23:33:34.000-04:00",
                                "category": "blacklist",
                                "value": "0170305240000042772802",
                                "admin_id": "fraudML",
                                "comments": "carga desde estados de verificacion automatico",
                                "actions": [{
                                    "risk": 100,
                                    "scoring_id": null,
                                    "reason": "ml_fraude_vendedor",
                                    "action": "pay",
                                    "ins_date": "2013-12-12T23:33:34.000-04:00"
                                }, {
                                    "risk": 100,
                                    "scoring_id": null,
                                    "reason": "ml_fraude_vendedor",
                                    "action": "list",
                                    "ins_date": "2013-12-12T23:33:34.000-04:00"
                                }, {
                                    "risk": 100,
                                    "scoring_id": null,
                                    "reason": "ml_fraude_vendedor",
                                    "action": "buy",
                                    "ins_date": "2013-12-12T23:33:34.000-04:00"
                                }, {
                                    "risk": 100,
                                    "scoring_id": null,
                                    "reason": "ml_fraude_vendedor",
                                    "action": "withdraw",
                                    "ins_date": "2013-12-12T23:33:34.000-04:00"
                                }, {
                                    "risk": 100,
                                    "scoring_id": null,
                                    "reason": "ml_fraude_vendedor",
                                    "action": "sell",
                                    "ins_date": "2013-12-12T23:33:34.000-04:00"
                                }],
                                "parent_id": null
                            }]
                        }));
                    response.end();
                    return;

                } else if (category == "graylist" && value == "012320027988051806"){

                    console.log("Entra a la validacion de la cuenta graylist")
                    response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 10,
                            "total": 1
                        },
                        "results": [{
                            "users": [{
                                "reason": "ml_duplicadas",
                                "user_id": 110916658,
                                "ins_date": "2014-02-28T15:58:06.000-04:00"
                            }],
                            "site_id": "MLM",
                            "from_app": "auto_verif_status",
                            "type": "cta",
                            "trunc_value": null,
                            "id": 8055896,
                            "creation_date": "2014-02-28T15:58:06.000-04:00",
                            "category": "graylist",
                            "value": "012320027988051806",
                            "admin_id": "fraudML",
                            "comments": "carga desde estados de verificacion automatico",
                            "actions": [{
                                "risk": 1,
                                "scoring_id": null,
                                "reason": "ml_duplicadas",
                                "action": "pay",
                                "ins_date": "2014-02-28T15:58:06.000-04:00"
                            }, {
                                "risk": 1,
                                "scoring_id": null,
                                "reason": "ml_duplicadas",
                                "action": "list",
                                "ins_date": "2014-02-28T15:58:06.000-04:00"
                            }, {
                                "risk": 1,
                                "scoring_id": null,
                                "reason": "ml_duplicadas",
                                "action": "buy",
                                "ins_date": "2014-02-28T15:58:06.000-04:00"
                            }, {
                                "risk": 1,
                                "scoring_id": null,
                                "reason": "ml_duplicadas",
                                "action": "withdraw",
                                "ins_date": "2014-02-28T15:58:06.000-04:00"
                            }, {
                                "risk": 1,
                                "scoring_id": null,
                                "reason": "ml_duplicadas",
                                "action": "sell",
                                "ins_date": "2014-02-28T15:58:06.000-04:00"
                            }],
                            "parent_id": null
                        }]
                    }));
                    response.end();
                    return;
                } else if(value == "001¬1518¬24600/x¬CC") {
                    console.log("CTA");
                    response.write(JSON.stringify({
                    "paging": {
                        "offset": 0,
                        "limit": 10,
                        "total": 1
                    },
                    "results": [
                        {
                            "users": null,
                            "value_detail": null,
                            "site_id": "MLB",
                            "from_app": "mp3",
                            "type": "cta",
                            "trunc_value": null,
                            "id": 828029,
                            "category": "graylist",
                            "type_detail": null,
                            "value": "341¬8883¬28418/7¬ca",
                            "admin_id": "fraudML",
                            "actions": [
                                {
                                    "risk": 1,
                                    "scoring_id": null,
                                    "reason": "mp_cargas_masivas_migrado",
                                    "action": "pay",
                                    "ins_date": "2013-03-22T08:56:15.000-04:00"
                                }
                            ],
                            "comments": "migracion desde old api con el id 13169480",
                            "parent_id": null,
                            "creation_date": "2013-03-22T08:56:15.000-04:00"
                        }
                    ]
                    }));
                    response.end();
                    return;
                } else {
                    console.log("entra al sino");
                    response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 10,
                            "total": 0
                        },
                        "results": []
                    }));
                    response.end();
                    return;
                }

            }

            if((category == "graylist" || category == "GRAYLIST") && type != "GEO_POINT"){

                if(user_id == 654321){

                    response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":0},"results":[]}));
                    response.end();
                    return;
                }
                else{

                    response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":111111,"admin_id":68537621,"category":"graylist","from_app":"scoring","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"ip","value":"100.100.100.100","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]}]}));
                    response.end();
                    return;
                }

            }

            if(user_id == 32432090 || user_id == 32435460 || user_id == 2090 ) {
                console.log("Entra a la busqueda por users")
                response.write(JSON.stringify({"paging":{"offset":0,"limit":2,"total":2},"users":[{"reason":"chargeback_level2","user_id":153405344,"ins_date":"2015-11-05T15:52:51.000-04:00"},{"reason":"money_in_tc","user_id":28251477,"ins_date":"2015-11-13T16:12:55.000-04:00"}],"site_id":"MLA","from_app":"auto_verif_status","type":"cta","trunc_value":null,"id":6820681,"creation_date":"2013-12-12T23:33:34.000-04:00","category":"blacklist","value":"0170305240000042772802","admin_id":"fraudML","comments":"carga desde estados de verificacion automatico","actions":[{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"pay","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"list","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"buy","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"withdraw","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"sell","ins_date":"2013-12-12T23:33:34.000-04:00"}],"parent_id":null}));
                response.end();
                return;
            }


            console.log("El valor solicitado fue " + value);

            if(type == null && prefix == null){
                response.write( JSON.stringify( {"msg":"type is null"} ) );
                response.end();
                return;
            }

            if(prefix != null){

                console.log("Entra a la validacion del documento")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 2,
                            "total": 2
                        },
                        "results": [
                            {
                                "id": 111111,
                                "admin_id": 68537621,
                                "category": "graylist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "ip",
                                "value": "100.100.100.100",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            },
                            {
                                "id": 18614141111125,
                                "admin_id": 68537621,
                                "category": "graylist",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "ip",
                                "from_app": "scoring",
                                "value": "100.100.100.99",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            }
                        ]
                    }));
                response.end();
                return;
            }


            if(type == "tc" && value == 'BNBVMCGZAFAFDLCREGWRIRHXEYGHUHWTKQREBZBJ'){
                console.log("Entra a la validacion del device")
                response.write(JSON.stringify({"paging":{"offset":0,"limit":2,"total":2},"results":[{"id":18614145,"admin_id":68537621,"category":"blacklist","from_app":"scoring","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"DEVICE_ID","value":"ba67f61c2a1e4df9b84424f11fe59df0","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]},{"id":18614145,"admin_id":68537621,"category":"blacklist","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"DEVICE_ID","from_app":"scoring","value":"ba67f61c2a1e4df9b84424f11fe59df0","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]}]}));
                response.end();
                return;
            }

            if(type == "zip_code" && value == '49060631'){
                console.log("Entra a la validacion del device")
                response.write(JSON.stringify({"paging":{"offset":0,"limit":2,"total":2},"results":[{"id":18614145,"admin_id":68537621,"category":"blacklist","from_app":"scoring","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"DEVICE_ID","value":"ba67f61c2a1e4df9b84424f11fe59df0","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]},{"id":18614145,"admin_id":68537621,"category":"blacklist","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"DEVICE_ID","from_app":"scoring","value":"ba67f61c2a1e4df9b84424f11fe59df0","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]}]}));
                response.end();
                return;
            }

            if(type == "street_number" && value == '216'){
                console.log("Entra a la validacion del device")
                response.write(JSON.stringify({"paging":{"offset":0,"limit":2,"total":2},"results":[{"id":18614145,"admin_id":68537621,"category":"blacklist","from_app":"scoring","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"DEVICE_ID","value":"ba67f61c2a1e4df9b84424f11fe59df0","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]},{"id":18614145,"admin_id":68537621,"category":"blacklist","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"DEVICE_ID","from_app":"scoring","value":"ba67f61c2a1e4df9b84424f11fe59df0","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]}]}));
                response.end();
                return;
            }

            if(type == "DEVICE_ID" && value == 'ba67f61c2a1e4df9b84424f11fe59df0'){
                console.log("Entra a la validacion del device")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 2,
                            "total": 2
                        },
                        "results": [
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "DEVICE_ID",
                                "value": "ba67f61c2a1e4df9b84424f11fe59df0",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            },
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "DEVICE_ID",
                                "from_app": "scoring",
                                "value": "ba67f61c2a1e4df9b84424f11fe59df0",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            }
                        ]
                    }));
                response.end();
                return;
            }

            if(type == "DEVICE_ML" && value == 'ba67f61c2a1e4df9b84424f11fe59df0'){
                console.log("Entra a la validacion del device")
                response.write(JSON.stringify( {
                                "paging": {
                                    "limit": 10,
                                    "offset": 0,
                                    "total": 1
                                },
                                "results": [
                                    {
                                        "actions": [
                                            {
                                                "action": "pay",
                                                "ins_date": "2014-03-14T06:58:04.000-04:00",
                                                "reason": "ml_perfiles",
                                                "risk": 1,
                                                "scoring_id": null
                                            },
                                            {
                                                "action": "list",
                                                "ins_date": "2014-03-14T06:58:04.000-04:00",
                                                "reason": "ml_perfiles",
                                                "risk": 1,
                                                "scoring_id": null
                                            },
                                            {
                                                "action": "buy",
                                                "ins_date": "2014-03-14T06:58:04.000-04:00",
                                                "reason": "ml_perfiles",
                                                "risk": 1,
                                                "scoring_id": null
                                            },
                                            {
                                                "action": "withdraw",
                                                "ins_date": "2014-03-14T06:58:04.000-04:00",
                                                "reason": "ml_perfiles",
                                                "risk": 1,
                                                "scoring_id": null
                                            },
                                            {
                                                "action": "sell",
                                                "ins_date": "2014-03-14T06:58:04.000-04:00",
                                                "reason": "ml_perfiles",
                                                "risk": 1,
                                                "scoring_id": null
                                            }
                                        ],
                                        "admin_id": "fraudML",
                                        "category": "graylist",
                                        "comments": "carga desde estados de verificacion automatico",
                                        "creation_date": "2014-03-14T06:58:04.000-04:00",
                                        "from_app": "auto_verif_status",
                                        "id": 8217304,
                                        "parent_id": null,
                                        "site_id": "MLB",
                                        "trunc_value": null,
                                        "type": "device_ml",
                                        "users": [
                                            {
                                                "ins_date": "2014-03-14T06:58:04.000-04:00",
                                                "reason": "ml_perfiles",
                                                "user_id": 155343342
                                            }
                                        ],
                                        "value": "ba67f61c2a1e4df9b84424f11fe59df0"
                                    }
                                ]
                            }));
                response.end();
                return;
            }

            if(type == "SMART_ID" && value == '2b08233722044686bc97a99259264041'){
                console.log("Entra a la validacion del device")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 2,
                            "total": 1
                        },
                        "results": [
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "SMART_ID",
                                "value": "2b08233722044686bc97a99259264041",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 9999,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            }
                        ]
                    }));
                response.end();
                return;
            }

            if(type == "doc" && value == '10107746115'){
                console.log("Entra a la validacion del documento")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 2,
                            "total": 2
                        },
                        "results": [
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "peplist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLB",
                                "trunc_value": null,
                                "type": "doc",
                                "value": "10107746115"
                            }

                        ]
                    }));
                response.end();
                return;
            }

            if(type == "doc" && value == '1012212345'){
                console.log("Entra a la validacion del documento")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 1,
                            "total": 1
                        },
                        "results": [
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "peplist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLB",
                                "trunc_value": null,
                                "type": "doc",
                                "value": "10107746115"
                            }

                        ]
                    }));
                response.end();
                return;
            }

            if(type == "doc" && value == '8882212345'){
                console.log("Entra a la validacion del documento")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 1,
                            "total": 1
                        },
                        "results": [
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLB",
                                "trunc_value": null,
                                "type": "doc",
                                "value": "10107746115"
                            }

                        ]
                    }));
                response.end();
                return;
            }
            if(type == "DOC" && value == '24765937615'){
                console.log("Entra a la validacion del documento")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 2,
                            "total": 2
                        },
                        "results": [
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "DOC",
                                "value": "24765937615",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            },
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "DOC",
                                "from_app": "scoring",
                                "value": "24765937615",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            }
                        ]
                    }));
                response.end();
                return;
            }

            if(type == "CUST" && value == 12347){
                console.log("Entra a la validacion del documento")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 2,
                            "total": 2
                        },
                        "results": [
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "CUST",
                                "value": "12347",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            },
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "CUST",
                                "from_app": "scoring",
                                "value": "12347",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            }
                        ]
                    }));
                response.end();
                return;
            }

            if (type == "GEO_POINT" && value == "-34.1234567,-58.7654321") {
                result = [{"type": "GEO_POINT", "type_detail": "SHIPPING", "value": "-34.5687512,-58.5075366", "value_detail": "APPROXIMATE", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }

            if (type == "GEO_POINT" && value == "-34.4343434,-43.2323233") {
                result = [{"type": "GEO_POINT", "type_detail": "SHIPPING", "value": "-34.4343434,-43.2323233", "value_detail": "RANGE_INTERPOLATED", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }

            if(type == "CTA" && value == "0170305240000042772802"){
                console.log("Entra a la validacion de la cuenta")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 2,
                            "total": 2
                        },
                        "results": [{
                            "users": [{
                                "reason": "ml_fraude_vendedor",
                                "user_id": 90451854,
                                "ins_date": "2013-12-12T23:33:34.000-04:00"
                            }],
                            "site_id": "MLA",
                            "from_app": "auto_verif_status",
                            "type": "cta",
                            "trunc_value": null,
                            "id": 6820681,
                            "creation_date": "2013-12-12T23:33:34.000-04:00",
                            "category": "blacklist",
                            "value": "0170305240000042772802",
                            "admin_id": "fraudML",
                            "comments": "carga desde estados de verificacion automatico",
                            "actions": [{
                                "risk": 100,
                                "scoring_id": null,
                                "reason": "ml_fraude_vendedor",
                                "action": "pay",
                                "ins_date": "2013-12-12T23:33:34.000-04:00"
                            }, {
                                "risk": 100,
                                "scoring_id": null,
                                "reason": "ml_fraude_vendedor",
                                "action": "list",
                                "ins_date": "2013-12-12T23:33:34.000-04:00"
                            }, {
                                "risk": 100,
                                "scoring_id": null,
                                "reason": "ml_fraude_vendedor",
                                "action": "buy",
                                "ins_date": "2013-12-12T23:33:34.000-04:00"
                            }, {
                                "risk": 100,
                                "scoring_id": null,
                                "reason": "ml_fraude_vendedor",
                                "action": "withdraw",
                                "ins_date": "2013-12-12T23:33:34.000-04:00"
                            }, {
                                "risk": 100,
                                "scoring_id": null,
                                "reason": "ml_fraude_vendedor",
                                "action": "sell",
                                "ins_date": "2013-12-12T23:33:34.000-04:00"
                            }],
                            "parent_id": null
                        }]
                    }));
                response.end();
                return;
            }

            if(type == "NAME" && value == "mohammad_mina'i"){
                console.log("Entra a la busqueda por terroristas")
                response.write(JSON.stringify({
                                "paging": {
                                    "offset": 0,
                                    "limit": 10,
                                    "total": 1
                                },
                                "results": [
                                    {
                                        "users": null,
                                        "value_detail": null,
                                        "site_id": "MLB",
                                        "from_app": "masiva",
                                        "type": "name",
                                        "trunc_value": null,
                                        "id": 11711408,
                                        "category": "mostwantedlist",
                                        "type_detail": null,
                                        "value": "mohammad_mina'i",
                                        "admin_id": "alucero",
                                        "actions": [
                                            {
                                                "risk": 1,
                                                "scoring_id": null,
                                                "reason": "money_laundering",
                                                "action": "pay",
                                                "ins_date": "2014-08-07T15:17:29.000-04:00"
                                            }
                                        ],
                                        "comments": "carga masiva money laundering",
                                        "parent_id": null,
                                        "creation_date": "2014-08-07T15:17:29.000-04:00"
                                    }
                                ]
                            }));
                response.end();
                return;
            }

            else{
                console.log("entra al sino");
                response.write(JSON.stringify({
                    "paging": {
                        "offset": 0,
                        "limit": 10,
                        "total": 0
                    },
                    "results": []
                }));
                response.end();
                return;
            }


            response.end();


        },

        postNewFraudList: function(request, response){

           jsonHandler.getContent(request, function(topicsArgs){

                console.log("newFraudList: " + JSON.stringify(topicsArgs));

                var type = topicsArgs.type;
                var value = topicsArgs.value;


                //Parche para buscar device y smart en susbcriber
                if(type == "DEVICE_ID" || type == "SMART_ID" || type == "ZIP_CODE" || type == "STREET_NUMBER"){

                    var users = topicsArgs.users

                    if(users != null){
                        value = JSON.stringify(users[0].user_id);

                        console.log("newFraudList value: " + JSON.stringify(users[0].user_id));
                        console.log("newFraudList value: " + value);

                    }
                }
                //

                var id = type+"-"+value;

                resourceManager.saveTemporalResource('newFraudList',id,-1,topicsArgs);

                jsonHandler.showOKResponse({response:"resource created"}, response);

            });
        },

        deleteNewFraudList : function(request, response){



               var pathname = url.parse(request.url).pathname;
                var uriRegExp = new RegExp('/fraud/lists/record/(\\w+)-(\\w+)');
                uriRegExp.exec(pathname);
                var type = RegExp.$1;
                var value = RegExp.$2;
                var id = type+"-"+value

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
        },

        cleanResources: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            resourceManager.cleanResources('fraudlist', response);
        }

};

function isSearch(request) {
    var pathname = url.parse(request.url).pathname;
    console.log("pathname: " + pathname);
    return pathname.indexOf("search") != -1 ;
}

resourceManager.saveResource('blacklist', 'DOC-123' ,[{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: DNI","cust_id":null,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"DOC","user_admin":null,"value":"27166944"}]);
resourceManager.saveResource('graylist', 'ZIP_CODE-65160657' ,[{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"graylist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: ZIP_CODE","cust_id":65160657,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"DOC","user_admin":null,"value":"27166944"}]);


exports.searchTypeAndValueBlacklist = fraudlistController.searchTypeAndValueBlacklist;
exports.ping = fraudlistController.ping;
exports.save = fraudlistController.save;
exports.search = fraudlistController.search;
exports.deleteBL = fraudlistController.deleteBL;
exports.getTypeAndValue = fraudlistController.getTypeAndValue;

exports.searchTypeAndValue = fraudlistController.searchTypeAndValue;
exports.searchNewFraudList = fraudlistController.searchNewFraudList;
exports.cleanResources = fraudlistController.cleanResources;
exports.saveNewFL  = fraudlistController.saveNewFL;
exports.deleteIdNewFL = fraudlistController.deleteIdNewFL;

// Mappings
urlMapping.add ([{
        pattern: '^/fraudlist/records/cleanAll',//limpia los recursos alamacenados en memoria de fraudlist
        action: {
            'GET':fraudlistController.cleanResources
       }
    },{
        pattern: '^/fraud/lists/records/cleanAll',//limpia los recursos alamacenados en memoria
        action: {
            'GET':fraudlistController.cleanResourcesNewFraudList
       }
    },{
        pattern: '^/fraudlist/ping',
        action: {
            'GET':fraudlistController.ping
        }
    },{
        pattern: '^/fraud/lists/ping',
        action: {
            'GET':fraudlistController.ping
        }
    },{
        pattern: '^/fraudlist/black_records/(\\w+)',
        action: {
            'GET':fraudlistController.searchTypeAndValueBlacklist
        }
    },{
        pattern: '^/fraudlist/records(/(\\w+)-(\\w+))?$',
        action: {
            'POST':fraudlistController.save,   //postea y guarda en memoria
            'DELETE':fraudlistController.deleteBL //elimina de memoria
        }
     },{
        pattern: '^/fraudlist/records/(\\d+)',
        action: {
            'DELETE':fraudlistController.deleteId //siempre devuelve ok
        }
     },{
        //search uris =========================
        pattern: '^/fraudlist/records/search?(\\w+)',
        action: {
            'GET':fraudlistController.searchTypeAndValue//busca en memoria
       }
    },{
        pattern: '^/fraudlist/records/(\\w+)/(\\w+)?',  // */fraudlist/records/$type/$value
        action: {
            'GET':fraudlistController.getTypeAndValue//busca en memoria
       }
    },{
        pattern: '^/fraud/lists/records/search?(\\w+)',//nueva fraudList (elastic search)
        action: {
            'GET':fraudlistController.searchNewFraudList
       }
 },{
     pattern: '^/fraud/lists/record/(\\d+)',
     action: {
         'DELETE':fraudlistController.deleteIdNewFL //siempre devuelve ok
     }
  },{
     pattern: '^/fraud/lists/record',
     action: {
         'POST':fraudlistController.saveNewFL
     }
  }
  ]);

var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var fraudlistController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"UsersFullService: OK!"}));
            response.end();
        },

        save : function(request, response){
            jsonHandler.getContent(request, function(topicsArgs){

                console.log("fraudlist: " + JSON.stringify(topicsArgs));

                var type = topicsArgs.type;
                var value = topicsArgs.value;


                //Parche para buscar device y smart en susbcriber
                if(type == "DEVICE_ID" || type == "SMART_ID" || type == "ZIP_CODE" || type == "STREET_NUMBER"){
                    value = topicsArgs.cust_id;
                }
                //

                var id = type+"-"+value;

                resourceManager.saveTemporalResource('fraudlist',id,-1,topicsArgs);

                jsonHandler.showOKResponse({response:"resource created"}, response);
            });
        },

        saveNewFL : function(request, response){
            jsonHandler.getContent(request, function(topicsArgs){

                console.log("fraudlist: " + JSON.stringify(topicsArgs));

                var type = topicsArgs.type;
                var value = topicsArgs.value;


                //Parche para buscar device y smart en susbcriber
                if(type == "DEVICE_ID" || type == "SMART_ID" || type == "ZIP_CODE" || type == "STREET_NUMBER"){
                    value = topicsArgs.cust_id;
                }
                //

                var id = type+"-"+value;

                resourceManager.saveTemporalResource('newFraudlist',id,-1,topicsArgs);



                jsonHandler.showOKResponse({"message":"resource created","status":201}, response);
            });
        },

        deleteBL : function(request, response){

           var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/fraudlist/records/(\\w+)-(\\w+)');
            uriRegExp.exec(pathname);
            var type = RegExp.$1;
            var value = RegExp.$2;
            var id = type+"-"+value

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });


            var resp = resourceManager.deleteResource('fraudlist',id,response);

            if (resp == null) {

                     jsonHandler.showNotFoundResponse({id:"id not found"}, response);
            } else {

                    jsonHandler.showOKResponse({"message":"Deleted: OK!"}, response);
            }
        },

        deleteIdNewFL : function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            jsonHandler.showOKResponse({"message":"resource deleted","status":200}, response);
        },


        deleteId : function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            jsonHandler.showOKResponse({"message":"Deleted: OK!"}, response);

        },


        search : function(request, response){
            //resourceManager.saveRequestResource('fraudlist', request, response);
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify([{"id":13153474,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-06-04T13:50:25.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: CUENTA","cust_id":null,"flow":"MIG","from_app":"MP3","ins_dt":"2012-06-04T13:50:18.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLB","status":"active","trunc_value":null,"type":"PHONE","user_admin":null,"value":"2235756757"}]));
            response.end();
        },

        /*searchBlacklist : function(request, response){

            // extract data from url
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp("/fraudlist/black_records/([\\w\\-]*)$");
            var resp = uriRegExp.exec(pathname);
            var typeAccount = RegExp.$1;

            console.log("pathname: " + pathname);
            console.log("RegExp: " + typeAccount);

            if (typeAccount == "search") {
                search(request, response);
                return;
            }



            var data = url.parse(request.url, true).query;

            if(typeAccount == "CUENTA" && data["value"] == "0140028101509601827737") {
            //if(data["value"] == "0140028101509601827737") {
                response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify   ([{"id":13153474,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-06-04T13:50:25.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: CUENTA","cust_id":null,"flow":"MIG","from_app":"MP3","ins_dt":"2012-06-04T13:50:18.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"CTA","user_admin":null,"value":"0140028101509601827737"}]));
            } else if (typeAccount == "CUENTA" && data["value"] == "033¬341¬888328418/7¬CC") {
        //} else if (data["value"] == "033¬341¬888328418/7¬CC") {
                response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify([{"id":13153474,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-06-04T13:50:25.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: CUENTA","cust_id":null,"flow":"MIG","from_app":"MP3","ins_dt":"2012-06-04T13:50:18.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLB","status":"active","trunc_value":null,"type":"CTA","user_admin":null,"value":"033¬341¬888328418/7¬CC"}]));
            } else {
                response.writeHead(404, {
                'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({"message":"No records with given params were found","status":404,"error":"not_found","cause":[]}));
            }

            response.end();
        }*/

        searchTypeAndValueBlacklist: function(request, response){
            if(isSearch(request)) {
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({"records":[{"id":24010203,"admin_id":0,"approval_admin_id":0,"approval_dt":"2012-12-19T09:52:29.000-04:00","approval_user_admin":"fraudMP","category":"blacklist","comments":"prueba","cust_id":20,"flow":"NW","from_app":"prueba","ins_dt":"2012-12-19T09:52:29.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":null,"site_id":"MLA","status":"active","trunc_value":null,"type":"PHONE","user_admin":"fraudMP","value":"7653434"}],"paging":{"offset":0,"limit":1,"total":1}}));
                response.end();
                return;
            }

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/fraudlist/black_records/(\\w+)/(\\w+)?');
            uriRegExp.exec(pathname);
            var type = RegExp.$1;
            var value = RegExp.$2;
            var id = type+"-"+value
            //log("BL> type: " + type + " value: " + value);



            var result = [];
            if (type == 'DOC' && value == 123) {
                result = [{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: DNI","cust_id":null,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"DOC","user_admin":null,"value":"27166944"}];
                response.write(JSON.stringify(result));
                response.end();
            }
            if (type == 'TC' || type == 'SMART_ID' || type == 'DEVICE_ID' || type == "ZIP_CODE" || type == "STREET_NUMBER") {
                result = [{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: DNI","cust_id":0,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"DOC","user_admin":null,"value":"27166944"}];
                response.write(JSON.stringify(result));
                response.end();
            }else {
                jsonHandler.showNotFoundResponse({msg:  'blacklist not found: ' + id}, response);
            }

        },

        getTypeAndValue: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/fraudlist/black_records/(\\w+)/(\\w+)');
            uriRegExp.exec(pathname);
            var type = RegExp.$1;
            var value = RegExp.$2;
            var id = type+"-"+value

            console.log("search id " + id);

            var result = [];

            var resp = resourceManager.searchResource('fraudlist', id);

            console.log("getTypeAndValueMock " + resp);

            if (resp == null) {

                jsonHandler.showNotFoundResponse({id:"id not found"}, response);

            } else {
                result = [resp]
                response.write(JSON.stringify(result));
                response.end();
            }

/*
                if (type == 'TC' && value == '4582125DB62E574B294EF7B189482A9EE9B2637C') {

                result = [
                        {
                            "id": 87346578,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "whitelist",
                            "comments": "MIG Carga masiva",
                            "cust_id": 101,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": 123,
                            "site_id": "MLC",
                            "status": "active",
                            "trunc_value": "554927...0069",
                            "type": "TC",
                            "user_admin": "fraudMP",
                            "value": "4582125DB62E574B294EF7B189482A9EE9B2637C"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

                if (type == 'TC' && value == '4C0144A5E7C2F08BF017B0BA60E6C0BCC37EC1C9') {

                result = [
                        {
                            "id": 87346620,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "blacklist",
                            "comments": "MIG Carga masiva",
                            "cust_id": 101,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": 123,
                            "site_id": "MLC",
                            "status": "active",
                            "trunc_value": "554927...0069",
                            "type": "TC",
                            "user_admin": "fraudMP",
                            "value": "4C0144A5E7C2F08BF017B0BA60E6C0BCC37EC1C9"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

               if (type == 'DOC' && value == 20655888) {

                result = [
                        {
                            "id": 87346579,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "graylist",
                            "comments": "MIG Carga masiva",
                            "cust_id": 20,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": null,
                            "site_id": "MLA",
                            "status": "active",
                            "trunc_value": null,
                            "type": "DOC",
                            "user_admin": "fraudMP",
                            "value": "20655888"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
                }

               if (type == 'CUST' && value == 20) {

                result = [
                        {
                            "id": 87346579,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "graylist",
                            "comments": "MIG Carga masiva",
                            "cust_id": 20,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": null,
                            "site_id": "MLA",
                            "status": "active",
                            "trunc_value": null,
                            "type": "CUST",
                            "user_admin": "fraudMP",
                            "value": "20"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

               if (type == 'DEVICE_ID' && value == 'cafdb6d9cf535a90b19014832f533915') {

                result = [
                        {
                            "id": 87346580,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "whitelist",
                            "comments": "MIG Carga masiva",
                            "cust_id": 20,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": null,
                            "site_id": "MLA",
                            "status": "active",
                            "trunc_value": null,
                            "type": "DEVICE_ID",
                            "user_admin": "fraudMP",
                            "value": "cafdb6d9cf535a90b19014832f533915"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

               if (type == 'SMART_ID' && value == '8f83191aec494821a1985c7f0bdb751f') {

                result = [
                        {
                            "id": 87346581,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "graylist",
                            "comments": "MIG Carga masiva",
                            "cust_id": 20,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": null,
                            "site_id": "MLA",
                            "status": "active",
                            "trunc_value": null,
                            "type": "SMART_ID",
                            "user_admin": "fraudMP",
                            "value": "8f83191aec494821a1985c7f0bdb751f"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

              if (type == 'PHONE' && value == '4751') {

                result = [
                        {
                            "id": 87346582,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "BLACKLIST",
                            "comments": "MIG Carga masiva",
                            "cust_id": 101,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": 123,
                            "site_id": "MLB",
                            "status": "active",
                            "trunc_value": "554927...0069",
                            "type": "PHONE",
                            "user_admin": "fraudMP",
                            "value": "4751"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

               if (type == 'DEVICE_ID') {

                result = [
                        {
                            "id": 87346596,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "BLACKLIST",
                            "comments": "MIG Carga masiva",
                            "cust_id": 101,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": 123,
                            "site_id": "MLB",
                            "status": "active",
                            "trunc_value": "554927...0069",
                            "type": "DEVICE_ID",
                            "user_admin": "fraudMP",
                            "value": "febae71ce95f4a289b9f5f83b9f25359"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }


               if (type == 'SMART_ID') {

                result = [
                        {
                            "id": 87346598,
                            "admin_id": 58537621,
                            "approval_admin_id": 58537621,
                            "approval_dt": "2012-12-19T17:27:59.000-03:00",
                            "approval_user_admin": "fraudMP",
                            "category": "BLACKLIST",
                            "comments": "MIG Carga masiva",
                            "cust_id": 101,
                            "config_id": null,
                            "flow": "MIG",
                            "from_app": "ADM_CHARGEBACKS",
                            "ins_dt": "2012-12-19T17:27:59.000-03:00",
                            "platform": "MP",
                            "reason": "MANUAL / PERFIL",
                            "reference_id": 123,
                            "site_id": "MLB",
                            "status": "active",
                            "trunc_value": "554927...0069",
                            "type": "SMART_ID",
                            "user_admin": "fraudMP",
                            "value": "81ce95f4a289b9f5f83b9f25359"
                        }
                    ];

                    response.write(JSON.stringify(result));
                    response.end();
               }

            jsonHandler.showNotFoundResponse({message:  'No records with given params were found'}, response);

 */
        },

         searchTypeAndValue: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var url_parts = url.parse(request.url,true);

            var type = url_parts.query.type
            var value = url_parts.query.value

            if(type == null){
                response.write( JSON.stringify( {"msg":"type is null"} ) );
                response.end();
            }

            //Parche para buscar device y smart en susbcriber
            if((type == "DEVICE_ID" || type == "SMART_ID") && (value == null)){
                value = url_parts.query.users.user_id;
            }
            //

            console.log(type +"-"+ value);

            var id = type+"-"+value

            var result = [];

            var resp = resourceManager.searchResource('fraudlist', id);

            console.log("searchTypeAndValue " + resp);

            if (resp != null) {

                result = [resp]
                response.write(JSON.stringify({"records":result}));
                response.end();

            }


            jsonHandler.showNotFoundResponse({message:  'No records with given params were found'}, response);
        },

         searchNewFraudList: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var url_parts = url.parse(request.url,true);

            var type = url_parts.query.type
            var value = url_parts.query.value
            var prefix = url_parts.query.prefix

            var category = url_parts.query.category
            var user_id = url_parts.query.user_id

            console.log("El valor de user_id es: " + user_id);
            console.log("El valor de category es: " + category);
            console.log("El valor de type es: " + type);



            if((category == "graylist" || category == "GRAYLIST") && type != "GEO_POINT"){

                if(user_id == 654321){

                    response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":0},"results":[]}));
                    response.end();
                }
                else{

                    response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":111111,"admin_id":68537621,"category":"graylist","from_app":"scoring","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"ip","value":"100.100.100.100","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]}]}));
                    response.end();
                }

            }


            console.log("El valor solicitado fue " + value);

            if(type == null && prefix == null){
                response.write( JSON.stringify( {"msg":"type is null"} ) );
                response.end();
            }

            if(prefix != null){

                console.log("Entra a la validacion del documento")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 2,
                            "total": 2
                        },
                        "results": [
                            {
                                "id": 111111,
                                "admin_id": 68537621,
                                "category": "graylist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "ip",
                                "value": "100.100.100.100",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            },
                            {
                                "id": 18614141111125,
                                "admin_id": 68537621,
                                "category": "graylist",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "ip",
                                "from_app": "scoring",
                                "value": "100.100.100.99",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            }
                        ]
                    }));
                response.end();
                return;
            }


            if(type == "tc" && value == 'BNBVMCGZAFAFDLCREGWRIRHXEYGHUHWTKQREBZBJ'){
                console.log("Entra a la validacion del device")
                response.write(JSON.stringify({"paging":{"offset":0,"limit":2,"total":2},"results":[{"id":18614145,"admin_id":68537621,"category":"blacklist","from_app":"scoring","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"DEVICE_ID","value":"ba67f61c2a1e4df9b84424f11fe59df0","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]},{"id":18614145,"admin_id":68537621,"category":"blacklist","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"DEVICE_ID","from_app":"scoring","value":"ba67f61c2a1e4df9b84424f11fe59df0","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]}]}));
                response.end();
                return;
            }

            if(type == "zip_code" && value == '49060631'){
                console.log("Entra a la validacion del device")
                response.write(JSON.stringify({"paging":{"offset":0,"limit":2,"total":2},"results":[{"id":18614145,"admin_id":68537621,"category":"blacklist","from_app":"scoring","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"DEVICE_ID","value":"ba67f61c2a1e4df9b84424f11fe59df0","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]},{"id":18614145,"admin_id":68537621,"category":"blacklist","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"DEVICE_ID","from_app":"scoring","value":"ba67f61c2a1e4df9b84424f11fe59df0","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]}]}));
                response.end();
                return;
            }

            if(type == "street_number" && value == '216'){
                console.log("Entra a la validacion del device")
                response.write(JSON.stringify({"paging":{"offset":0,"limit":2,"total":2},"results":[{"id":18614145,"admin_id":68537621,"category":"blacklist","from_app":"scoring","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"DEVICE_ID","value":"ba67f61c2a1e4df9b84424f11fe59df0","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]},{"id":18614145,"admin_id":68537621,"category":"blacklist","comments":"Migracion","creation_date":"2012-08-22T14: 13: 33.000-04: 00","site_id":"MLA","trunc_value":null,"type":"DEVICE_ID","from_app":"scoring","value":"ba67f61c2a1e4df9b84424f11fe59df0","actions":[{"action":"list","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"action":"sell","reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}],"users":[{"user_id":123456,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"},{"user_id":654321,"reason":"test_fraude_mp","ins_date":"2012-08-22T14: 13: 33.000-04: 00"}]}]}));
                response.end();
                return;
            }

            if(type == "DEVICE_ID" && value == 'ba67f61c2a1e4df9b84424f11fe59df0'){
                console.log("Entra a la validacion del device")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 2,
                            "total": 2
                        },
                        "results": [
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "DEVICE_ID",
                                "value": "ba67f61c2a1e4df9b84424f11fe59df0",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            },
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "DEVICE_ID",
                                "from_app": "scoring",
                                "value": "ba67f61c2a1e4df9b84424f11fe59df0",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            }
                        ]
                    }));
                response.end();
                return;
            }

            if(type == "DEVICE_ML" && value == 'ba67f61c2a1e4df9b84424f11fe59df0'){
                console.log("Entra a la validacion del device")
                response.write(JSON.stringify( {
                                "paging": {
                                    "limit": 10,
                                    "offset": 0,
                                    "total": 1
                                },
                                "results": [
                                    {
                                        "actions": [
                                            {
                                                "action": "pay",
                                                "ins_date": "2014-03-14T06:58:04.000-04:00",
                                                "reason": "ml_perfiles",
                                                "risk": 1,
                                                "scoring_id": null
                                            },
                                            {
                                                "action": "list",
                                                "ins_date": "2014-03-14T06:58:04.000-04:00",
                                                "reason": "ml_perfiles",
                                                "risk": 1,
                                                "scoring_id": null
                                            },
                                            {
                                                "action": "buy",
                                                "ins_date": "2014-03-14T06:58:04.000-04:00",
                                                "reason": "ml_perfiles",
                                                "risk": 1,
                                                "scoring_id": null
                                            },
                                            {
                                                "action": "withdraw",
                                                "ins_date": "2014-03-14T06:58:04.000-04:00",
                                                "reason": "ml_perfiles",
                                                "risk": 1,
                                                "scoring_id": null
                                            },
                                            {
                                                "action": "sell",
                                                "ins_date": "2014-03-14T06:58:04.000-04:00",
                                                "reason": "ml_perfiles",
                                                "risk": 1,
                                                "scoring_id": null
                                            }
                                        ],
                                        "admin_id": "fraudML",
                                        "category": "graylist",
                                        "comments": "carga desde estados de verificacion automatico",
                                        "creation_date": "2014-03-14T06:58:04.000-04:00",
                                        "from_app": "auto_verif_status",
                                        "id": 8217304,
                                        "parent_id": null,
                                        "site_id": "MLB",
                                        "trunc_value": null,
                                        "type": "device_ml",
                                        "users": [
                                            {
                                                "ins_date": "2014-03-14T06:58:04.000-04:00",
                                                "reason": "ml_perfiles",
                                                "user_id": 155343342
                                            }
                                        ],
                                        "value": "ba67f61c2a1e4df9b84424f11fe59df0"
                                    }
                                ]
                            }));
                response.end();
                return;
            }

            if(type == "SMART_ID" && value == '2b08233722044686bc97a99259264041'){
                console.log("Entra a la validacion del device")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 2,
                            "total": 1
                        },
                        "results": [
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "SMART_ID",
                                "value": "2b08233722044686bc97a99259264041",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 9999,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            }
                        ]
                    }));
                response.end();
                return;
            }

            if(type == "doc" && value == '111112222'){
                console.log("Entra a la validacion del device")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 2,
                            "total": 1
                        },
                        "results": [
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "SMART_ID",
                                "value": "2b08233722044686bc97a99259264041",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 9999,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            }
                        ]
                    }));
                response.end();
                return;
            }

            if(type == "DOC" && value == '24765937615'){
                console.log("Entra a la validacion del documento")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 2,
                            "total": 2
                        },
                        "results": [
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "DOC",
                                "value": "24765937615",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            },
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "DOC",
                                "from_app": "scoring",
                                "value": "24765937615",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            }
                        ]
                    }));
                response.end();
                return;
            }

            if(type == "CUST" && value == 12347){
                console.log("Entra a la validacion del documento")
                response.write(JSON.stringify({
                        "paging": {
                            "offset": 0,
                            "limit": 2,
                            "total": 2
                        },
                        "results": [
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "from_app": "scoring",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "CUST",
                                "value": "12347",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            },
                            {
                                "id": 18614145,
                                "admin_id": 68537621,
                                "category": "blacklist",
                                "comments": "Migracion",
                                "creation_date": "2012-08-22T14: 13: 33.000-04: 00",
                                "site_id": "MLA",
                                "trunc_value": null,
                                "type": "CUST",
                                "from_app": "scoring",
                                "value": "12347",
                                "actions": [
                                    {
                                        "action": "list",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "action": "sell",
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ],
                                "users": [
                                    {
                                        "user_id": 123456,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    },
                                    {
                                        "user_id": 654321,
                                        "reason": "test_fraude_mp",
                                        "ins_date": "2012-08-22T14: 13: 33.000-04: 00"
                                    }
                                ]
                            }
                        ]
                    }));
                response.end();
                return;
            }

            if (type == "GEO_POINT" && value == "-34.1234567,-58.7654321") {
                result = [{"type": "GEO_POINT", "type_detail": "SHIPPING", "value": "-34.5687512,-58.5075366", "value_detail": "APPROXIMATE", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }

            if (type == "GEO_POINT" && value == "-34.4343434,-43.2323233") {
                result = [{"type": "GEO_POINT", "type_detail": "SHIPPING", "value": "-34.4343434,-43.2323233", "value_detail": "RANGE_INTERPOLATED", "reason": "MONEY_IN_TC", "site_id": "MLA", "category": "graylist", "comments": "carga desde restricciones automatico", "from_app": "AUTO_REST", "trunc_value": null, "admin_id": "test", "creation_date": "2013-12-12T23:33:34.000-04:00", "distance":"250m" ,"users": [{"user_id": 500500, "reason": "MONEY_IN_TC", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "actions": [{"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "pay", "ins_date": "2013-12-12T23:33:34.000-04:00"}, {"risk": 100, "scoring_id": null, "reason": "MONEY_IN_TC", "action": "withdraw", "ins_date": "2013-12-12T23:33:34.000-04:00"} ], "id": 123456, "distance": "250m"} ];
                response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":result}));
                response.end();
                return;
            }

            if(type == "CTA" && value == "0170305240000042772802"){
                console.log("Entra a la validacion de la cuenta")
                response.write(JSON.stringify({"paging":{"offset":0,"limit":2,"total":2},"users":[{"reason":"chargeback_level2","user_id":153405344,"ins_date":"2015-11-05T15:52:51.000-04:00"},{"reason":"money_in_tc","user_id":28251477,"ins_date":"2015-11-13T16:12:55.000-04:00"}],"site_id":"MLA","from_app":"auto_verif_status","type":"cta","trunc_value":null,"id":6820681,"creation_date":"2013-12-12T23:33:34.000-04:00","category":"blacklist","value":"0170305240000042772802","admin_id":"fraudML","comments":"carga desde estados de verificacion automatico","actions":[{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"pay","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"list","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"buy","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"withdraw","ins_date":"2013-12-12T23:33:34.000-04:00"},{"risk":100,"scoring_id":null,"reason":"ml_fraude_vendedor","action":"sell","ins_date":"2013-12-12T23:33:34.000-04:00"}],"parent_id":null}));
                response.end();
                return;
            }



            else{
                console.log("entra al sino");
                response.write(JSON.stringify({
                    "paging": {
                        "offset": 0,
                        "limit": 10,
                        "total": 0
                    },
                    "results": []
                }));
                response.end();
                return;
            }


            response.end();


        },

        postNewFraudList: function(request, response){

           jsonHandler.getContent(request, function(topicsArgs){

                console.log("newFraudList: " + JSON.stringify(topicsArgs));

                var type = topicsArgs.type;
                var value = topicsArgs.value;


                //Parche para buscar device y smart en susbcriber
                if(type == "DEVICE_ID" || type == "SMART_ID" || type == "ZIP_CODE" || type == "STREET_NUMBER"){

                    var users = topicsArgs.users

                    if(users != null){
                        value = JSON.stringify(users[0].user_id);

                        console.log("newFraudList value: " + JSON.stringify(users[0].user_id));
                        console.log("newFraudList value: " + value);

                    }
                }
                //

                var id = type+"-"+value;

                resourceManager.saveTemporalResource('newFraudList',id,-1,topicsArgs);

                jsonHandler.showOKResponse({response:"resource created"}, response);

            });
        },

        deleteNewFraudList : function(request, response){



               var pathname = url.parse(request.url).pathname;
                var uriRegExp = new RegExp('/fraud/lists/record/(\\w+)-(\\w+)');
                uriRegExp.exec(pathname);
                var type = RegExp.$1;
                var value = RegExp.$2;
                var id = type+"-"+value

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
        },

        cleanResources: function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            resourceManager.cleanResources('fraudlist', response);
        },

        isPepList: function(request,response){
                    var pathname = url.parse(request.url).pathname;
                    var uriRegExp = new RegExp('^/manual_review/pep/(\\d+)');

                    uriRegExp.exec(pathname);
                    var userId = RegExp.$1;

                    console.log("El usuario afuera en risk_pld es " + userId);

                    result = {"pep":false};

                    switch(userId){
                        case "443462136":
                            result = {"pep":true};
                        break;

                    }
                    response.writeHead(200, {
                            'Content-Type' : 'application/json; charset=utf-8'
                        });
                    response.write(JSON.stringify(result));
                    response.end();
        }

};

function isSearch(request) {
    var pathname = url.parse(request.url).pathname;
    console.log("pathname: " + pathname);
    return pathname.indexOf("search") != -1 ;
}

resourceManager.saveResource('blacklist', 'DOC-123' ,[{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: DNI","cust_id":null,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"DOC","user_admin":null,"value":"27166944"}]);
resourceManager.saveResource('graylist', 'ZIP_CODE-65160657' ,[{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"graylist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: ZIP_CODE","cust_id":65160657,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"DOC","user_admin":null,"value":"27166944"}]);


exports.searchTypeAndValueBlacklist = fraudlistController.searchTypeAndValueBlacklist;
exports.ping = fraudlistController.ping;
exports.save = fraudlistController.save;
exports.search = fraudlistController.search;
exports.deleteBL = fraudlistController.deleteBL;
exports.getTypeAndValue = fraudlistController.getTypeAndValue;

exports.searchTypeAndValue = fraudlistController.searchTypeAndValue;
exports.searchNewFraudList = fraudlistController.searchNewFraudList;
exports.cleanResources = fraudlistController.cleanResources;
exports.saveNewFL  = fraudlistController.saveNewFL;
exports.deleteIdNewFL = fraudlistController.deleteIdNewFL;
exports.isPepList = fraudlistController.isPepList;


// Mappings
urlMapping.add ([{
        pattern: '^/fraudlist/records/cleanAll',//limpia los recursos alamacenados en memoria de fraudlist
        action: {
            'GET':fraudlistController.cleanResources
       }
    },{
        pattern: '^/fraud/lists/records/cleanAll',//limpia los recursos alamacenados en memoria
        action: {
            'GET':fraudlistController.cleanResourcesNewFraudList
       }
    },{
        pattern: '^/fraudlist/ping',
        action: {
            'GET':fraudlistController.ping
        }
    },{
        pattern: '^/fraud/lists/ping',
        action: {
            'GET':fraudlistController.ping
        }
    },{
        pattern: '^/fraudlist/black_records/(\\w+)',
        action: {
            'GET':fraudlistController.searchTypeAndValueBlacklist
        }
    },{
        pattern: '^/fraudlist/records(/(\\w+)-(\\w+))?$',
        action: {
            'POST':fraudlistController.save,   //postea y guarda en memoria
            'DELETE':fraudlistController.deleteBL //elimina de memoria
        }
     },{
        pattern: '^/fraudlist/records/(\\d+)',
        action: {
            'DELETE':fraudlistController.deleteId //siempre devuelve ok
        }
     },{
        //search uris =========================
        pattern: '^/fraudlist/records/search?(\\w+)',
        action: {
            'GET':fraudlistController.searchTypeAndValue//busca en memoria
       }
    },{
        pattern: '^/fraudlist/records/(\\w+)/(\\w+)?',  // */fraudlist/records/$type/$value
        action: {
            'GET':fraudlistController.getTypeAndValue//busca en memoria
       }
    },{
        pattern: '^/fraud/lists/records/search?(\\w+)',//nueva fraudList (elastic search)
        action: {
            'GET':fraudlistController.searchNewFraudList
       }
 },{
     pattern: '^/fraud/lists/record/(\\d+)',
     action: {
         'DELETE':fraudlistController.deleteIdNewFL //siempre devuelve ok
     }
  },{
     pattern: '^/fraud/lists/record',
     action: {
         'POST':fraudlistController.saveNewFL
     }
  },
  {
    pattern: '^/manual_review/pep/(\\d+)',  // */fraudlist/records/$type/$value
        action: {
            'GET':fraudlistController.isPepList//busca en memoria
       }
    }
  ]);
