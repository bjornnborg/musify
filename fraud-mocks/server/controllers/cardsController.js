var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var count = 0;

//var retryUserCard = 0;

//var retryCardId = 0;

var cardsController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write("pong");
            response.end();        
        },

        getCardVerification : function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var results = {
              "results" : [
                  {
                    "id": 174,
                    "user_id": 134231213,
                    "card": {"id": 67368365,
                      "last_four_digits": "5682",
                      "first_six_digits": "123456",
                      "payment_method_id": "visa"
                    },
                    "type": "random_charge",
                    "payment_id": 502333955,
                    "site_id": "MLB",
                    "status": "verified",
                    "status_detail": "verified",
                    "date_created": "2013-03-27T05:41:11.000-04:00",
                    "last_updated": "2013-03-27T09:00:37.000-04:00"
                            
                  }
              ]
            };

            response.write(JSON.stringify(results));
            response.end();
        },

        getUserDataCard : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });


      			// extract data from url
      			var pathname = url.parse(request.url).pathname;
      			var uriRegExp = new RegExp('/cards/(\\w+)');
      			uriRegExp.exec(pathname);
      				
      			var cardId = RegExp.$1;
      			
      			// Mocks de datos para ivs por email
      			
      			//este primer card es usado por los test de sps, no tocar
      			if(cardId == 445566) {
      			    if(count > 0){
                        response.write(JSON.stringify({"id":52475488,"user_id":65160657,"status":"active","payment_type_id":"credit_card","payment_method_id":"master","site_id":"MLA","issuer_id":null,"card_number_id":"DB40F9F01348C632A3E648C3450B9634AB607312","trunc_card_number":"525496XXXXXX6678","expiration_month":6,"expiration_year":2012,"cardholder":{"name":"test_user_spn","document":{"type":"DNI","number":"32665540"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":1,"last_time_used":"2012-05-09T10:46:19.000-04:00","creation_date":"2012-05-09T10:46:09.000-04:00","last_modified_date":"2012-05-09T10:46:19.000-04:00"}));
      			    }
      			    else{
      			        count = count+1;
          			  response.writeHead(500, {
                  	                'Content-Type' : 'application/json; charset=utf-8'
                  	            });
      			        response.write(JSON.stringify({"error":"not messges"}));
      			    }
      			}
      			else if(cardId == 52475488) {
      				response.write(JSON.stringify({"id":52475488,"user_id":65160657,"status":"active","payment_type_id":"credit_card","payment_method_id":"master","site_id":"MLA","issuer_id":null,"card_number_id":"DB40F9F01348C632A3E648C3450B9634AB607312","trunc_card_number":"525496XXXXXX6678","expiration_month":6,"expiration_year":2012,"cardholder":{"name":"Matias Nahuel Aranda","document":{"type":"DNI","number":"32665540"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":1,"last_time_used":"2012-05-09T10:46:19.000-04:00","creation_date":"2012-05-09T10:46:09.000-04:00","last_modified_date":"2012-05-09T10:46:19.000-04:00"}));
      			} else if(cardId == 100) {
      				response.write(JSON.stringify({"id":52475488,"user_id":100,"status":"active","payment_type_id":"credit_card","payment_method_id":"master","site_id":"MLB","issuer_id":null,"card_number_id":"DB40F9F01348C632A3E648C3450B9634AB607312","trunc_card_number":"525496XXXXXX6678","expiration_month":6,"expiration_year":2012,"cardholder":{"name":"Marcio Dos Santos","document":{"type":"CPF","number":"09663450886"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":1,"last_time_used":"2012-05-09T10:46:19.000-04:00","creation_date":"2012-05-09T10:46:09.000-04:00","last_modified_date":"2012-05-09T10:46:19.000-04:00"}));
      			} else if (cardId == 51646186) {
      				response.write(JSON.stringify({"id":51646186,"user_id":65160657,"status":"active","payment_type_id":"credit_card","payment_method_id":"master","site_id":"MLA","issuer_id":null,"card_number_id":"DB40F9F01348C632A3E648C3450B9634AB607312","trunc_card_number":"525496XXXXXX6678","expiration_month":6,"expiration_year":2012,"cardholder":{"name":"Matias Nahuel Aranda","document":{"type":"DNI","number":"32665540"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":1,"last_time_used":"2012-05-09T10:46:19.000-04:00","creation_date":"2012-05-09T10:46:09.000-04:00","last_modified_date":"2012-05-09T10:46:19.000-04:00"}));
      			} else if (cardId == 333) {//jazcurra
                response.write(JSON.stringify({"id":333,"user_id":65160657,"status":"active","payment_type_id":"credit_card","payment_method_id":"master","site_id":"MLA","issuer_id":null,"card_number_id":"DB40F9F01348C632A3E648C3450B9634AB607312","trunc_card_number":"525496XXXXXX6678","expiration_month":6,"expiration_year":2012,"cardholder":{"name":"jazcurra","document":{"type":"DNI","number":"0"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":1,"last_time_used":"2012-05-09T10:46:19.000-04:00","creation_date":"2012-05-09T10:46:09.000-04:00","last_modified_date":"2012-05-09T10:46:19.000-04:00"}));   
            } else if (cardId == 444) {//jazcurra
                response.write(JSON.stringify({"id":444,"user_id":65160657,"status":"active","payment_type_id":"credit_card","payment_method_id":"master","site_id":"MLA","issuer_id":null,"card_number_id":"DB40F9F01348C632A3E648C3450B9634AB607312","trunc_card_number":"525496XXXXXX6678","expiration_month":6,"expiration_year":2012,"cardholder":{"name":"jazcurra","document":{"type":"DNI","number":"323232"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":1,"last_time_used":"2012-05-09T10:46:19.000-04:00","creation_date":"2012-05-09T10:46:09.000-04:00","last_modified_date":"2012-05-09T10:46:19.000-04:00"}));   
            } else if (cardId == 555) {//jazcurra
                response.write(JSON.stringify({"id":555,"user_id":65160657,"status":"active","payment_type_id":"credit_card","payment_method_id":"master","site_id":"MLA","issuer_id":null,"card_number_id":"DB40F9F01348C632A3E648C3450B9634AB607312","trunc_card_number":"525496XXXXXX6678","expiration_month":6,"expiration_year":2012,"cardholder":{"name":"jazcurra","document":{"type":"DNI","number":"232323"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":1,"last_time_used":"2012-05-09T10:46:19.000-04:00","creation_date":"2012-05-09T10:46:09.000-04:00","last_modified_date":"2012-05-09T10:46:19.000-04:00"}));   
            } else if (cardId == 777) {//jazcurra
                response.write(JSON.stringify({"id":777,"user_id":65160657,"status":"active","payment_type_id":"credit_card","payment_method_id":"master","site_id":"MLA","issuer_id":null,"card_number_id":"DB40F9F01348C632A3E648C3450B9634AB607312","trunc_card_number":"525496XXXXXX6678","expiration_month":6,"expiration_year":2012,"cardholder":{"name":"jazcurra","document":{"type":"DNI","number":null},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":1,"last_time_used":"2012-05-09T10:46:19.000-04:00","creation_date":"2012-05-09T10:46:09.000-04:00","last_modified_date":"2012-05-09T10:46:19.000-04:00"}));   
            }else if (cardId == 55696615) {//jazcurra
                response.write(JSON.stringify({"id":55696615,"user_id":12345,"status":"active","payment_type_id":"credit_card","payment_method_id":"visa","site_id":"MLA","issuer_id":null,"card_number_id":"9274F9B1B16B6705D0A3DE65D63D46AAFADD5C17","trunc_card_number":"454640XXXXXX4578","expiration_month":8,"expiration_year":2014,"cardholder":{"name":"LUCIO ALF LLANCAPAN","document":{"type":"DNI","number":"24401855"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":14,"last_time_used":"2013-03-19T00:44:03.000-04:00","creation_date":"2012-09-05T13:46:05.000-04:00","last_modified_date":"2013-03-19T00:44:03.000-04:00","verified":false,"verification_methods":[]}));   
            }else if (cardId == 55696616) {//jazcurra
                response.write(JSON.stringify({"id":55696616,"user_id":12345,"status":"active","payment_type_id":"credit_card","payment_method_id":"visa","site_id":"MLA","issuer_id":null,"card_number_id":"9274F9B1B16B6705D0A3DE65D63D46AAFADD5C17","trunc_card_number":"454640XXXXXX4578","expiration_month":8,"expiration_year":2014,"cardholder":{"name":"LUCIO ALF LLANCAPAN","document":{"type":"DNI","number":"24401856"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":14,"last_time_used":"2013-03-19T00:44:03.000-04:00","creation_date":"2012-09-05T13:46:05.000-04:00","last_modified_date":"2013-03-19T00:44:03.000-04:00","verified":false,"verification_methods":[]}));   
            }else if (cardId == 55696617) {//jazcurra
                response.write(JSON.stringify({"id":55696617,"user_id":12345,"status":"active","payment_type_id":"credit_card","payment_method_id":"visa","site_id":"MLA","issuer_id":null,"card_number_id":"9274F9B1B16B6705D0A3DE65D63D46AAFADD5C17","trunc_card_number":"454640XXXXXX4578","expiration_month":8,"expiration_year":2014,"cardholder":{"name":"LUCIO ALF LLANCAPAN","document":{"type":"DNI","number":"24401857"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":14,"last_time_used":"2013-03-19T00:44:03.000-04:00","creation_date":"2012-09-05T13:46:05.000-04:00","last_modified_date":"2013-03-19T00:44:03.000-04:00","verified":false,"verification_methods":[]}));   
            }else if (cardId == 999468419) {//jazcurra
                response.write(JSON.stringify({"id":999468419,"user_id":44444,"status":"active","payment_type_id":"credit_card","payment_method_id":"visa","site_id":"MLV","issuer_id":null,"card_number_id":"9274F9B1B16B6705D0A3DE65D63D46AAFADD5C17","trunc_card_number":"454640XXXXXX4578","expiration_month":8,"expiration_year":2014,"cardholder":{"name":"LUCIO ALF LLANCAPAN","document":{"type":"CI-E","number":"45597717"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":14,"last_time_used":"2013-03-19T00:44:03.000-04:00","creation_date":"2012-09-05T13:46:05.000-04:00","last_modified_date":"2013-03-19T00:44:03.000-04:00","verified":false,"verification_methods":[]}));   
            }else if (cardId == 879468419) {//jazcurra
                response.write(JSON.stringify({"id":879468419,"user_id":44444,"status":"active","payment_type_id":"credit_card","payment_method_id":"visa","site_id":"MLV","issuer_id":null,"card_number_id":"9274F9B1B16B6705D0A3DE65D63D46AAFADD5C17","trunc_card_number":"454640XXXXXX4578","expiration_month":8,"expiration_year":2014,"cardholder":{"name":"LUCIO ALF LLANCAPAN","document":{"type":"CI-V","number":"55597717"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":14,"last_time_used":"2013-03-19T00:44:03.000-04:00","creation_date":"2012-09-05T13:46:05.000-04:00","last_modified_date":"2013-03-19T00:44:03.000-04:00","verified":false,"verification_methods":[]}));   
            }else if(cardId == 40162155){

                if(global.retryCardId == 0){
                  jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                  global.retryCardId++;
                  return;
                }    

                response.write(JSON.stringify({"id":cardId,"user_id":65160657,"status":"active","payment_type_id":"credit_card","payment_method_id":"master","site_id":"MLA","issuer_id":null,"card_number_id":"DB40F9F01348C632A3E648C3450B9634AB607312","trunc_card_number":"525496XXXXXX6678","expiration_month":6,"expiration_year":2012,"cardholder":{"name":"pepe","document":{"type":"DNI","number":"789654"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":1,"last_time_used":"2012-05-09T10:46:19.000-04:00","creation_date":"2012-05-09T10:46:09.000-04:00","last_modified_date":"2012-05-09T10:46:19.000-04:00"}));                  

            }


            else
            {
                response.write(JSON.stringify({"id":cardId,"user_id":65160657,"status":"active","payment_type_id":"credit_card","payment_method_id":"master","site_id":"MLA","issuer_id":null,"card_number_id":"DB40F9F01348C632A3E648C3450B9634AB607312","trunc_card_number":"525496XXXXXX6678","expiration_month":6,"expiration_year":2012,"cardholder":{"name":"jazcurra","document":{"type":"DNI","number":"232323"},"birth_date":null,"phone_number":null,"area_code":null,"mother_name":null},"times_used":1,"last_time_used":"2012-05-09T10:46:19.000-04:00","creation_date":"2012-05-09T10:46:09.000-04:00","last_modified_date":"2012-05-09T10:46:19.000-04:00"}));   
            }

      			// Fin mocks de datos para ivs por email
			
            response.end();
        },
        getSearchDataCard : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });


            var url_parts = url.parse(request.url,true);

            var user = url_parts.query.user_id

            if(user == 555666777 && global.retryUserCard == 0){
                jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                global.retryUserCard++;
                return;
            }
            if(user == 555666788){
                jsonHandler.showNotFoundResponse({"msg":"Server returned error code 404 in get a /cards/search?user_id=555666788&status=active, metric:not_found, data:[message:Cards Not Found]] - json: null","status":404}, response);
                //global.retryUserCard++;
                return;

            }
            

            if(user == 44444){

                response.write(JSON.stringify([
                                             {
                                                 "id": 649860904,
                                                 "status": "active",
                                                 "payment_type_id": "credit_card",
                                                 "payment_method_id": "master",
                                                 "site_id": "MLV",
                                                 "issuer_id": null,
                                                 "card_number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425",
                                                 "trunc_card_number": "549167XXXXXX6266",
                                                 "expiration_month": 2,
                                                 "expiration_year": 2017,
                                                 "cardholder": {
                                                     "name": "TEST TEST",
                                                     "document": {
                                                         "type": "CI-V",
                                                         "number": "25597717"
                                                     },
                                                     "birth_date": null,
                                                     "phone_number": null,
                                                     "area_code": null,
                                                     "mother_name": null
                                                 },
                                                 "times_used": 3,
                                                 "last_time_used": "2013-01-24T09:09:47.000-04:00",
                                                 "creation_date": "2013-01-14T20:30:10.000-04:00",
                                                 "last_modified_date": "2013-01-24T09:09:47.000-04:00",
                                                 "verified": false,
                                                 "verification_methods": []
                                             },
                                             {
                                                 "id": 53533004,
                                                 "status": "active",
                                                 "payment_type_id": "credit_card",
                                                 "payment_method_id": "master",
                                                 "site_id": "MLV",
                                                 "issuer_id": null,
                                                 "card_number_id": "1D0E11DE2936441DF0E3EDBC970A756A1F2DA424",
                                                 "trunc_card_number": "549167XXXXXX2292",
                                                 "expiration_month": 2,
                                                 "expiration_year": 2013,
                                                 "cardholder": {
                                                     "name": "TEST TEST",
                                                     "document": {
                                                         "type": "CI-E",
                                                         "number": "35597717"
                                                     },
                                                     "birth_date": "1992-05-01",
                                                     "phone_number": "29582709",
                                                     "area_code": "11",
                                                     "mother_name": null
                                                 },
                                                 "times_used": 19,
                                                 "last_time_used": "2013-01-02T11:34:09.000-04:00",
                                                 "creation_date": "2012-03-30T19:58:52.000-04:00",
                                                 "last_modified_date": "2013-01-02T11:34:09.000-04:00",
                                                 "verified": false,
                                                 "verification_methods": []
                                             }
                                         ]));
                     
                          
              response.end();

            }
            else{
              if(user == 925705){

                response.write(JSON.stringify([
                                               {
                                                   "id": 59860904,
                                                   "status": "active",
                                                   "payment_type_id": "credit_card",
                                                   "payment_method_id": "master",
                                                   "site_id": "MLB",
                                                   "issuer_id": null,
                                                   "card_number_id": "4C0144A5E7C2F08BF017B0BA60E6C0BCC37EC1C9",
                                                   "trunc_card_number": "549167XXXXXX6266",
                                                   "expiration_month": 2,
                                                   "expiration_year": 2017,
                                                   "cardholder": {
                                                       "name": "ELISABETE S SILVA",
                                                       "document": {
                                                           "type": "CPF",
                                                           "number": "12948847869"
                                                       },
                                                       "birth_date": null,
                                                       "phone_number": null,
                                                       "area_code": null,
                                                       "mother_name": null
                                                   },
                                                   "times_used": 3,
                                                   "last_time_used": "2013-01-24T09:09:47.000-04:00",
                                                   "creation_date": "2013-01-14T20:30:10.000-04:00",
                                                   "last_modified_date": "2013-01-24T09:09:47.000-04:00",
                                                   "verified": false,
                                                   "verification_methods": []
                                               },
                                               {
                                                   "id": 51533004,
                                                   "status": "active",
                                                   "payment_type_id": "credit_card",
                                                   "payment_method_id": "master",
                                                   "site_id": "MLB",
                                                   "issuer_id": null,
                                                   "card_number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425",
                                                   "trunc_card_number": "549167XXXXXX2292",
                                                   "expiration_month": 2,
                                                   "expiration_year": 2013,
                                                   "cardholder": {
                                                       "name": "STELLA S GOMES",
                                                       "document": {
                                                           "type": "CPF",
                                                           "number": "1140829910"
                                                       },
                                                       "birth_date": "1992-05-01",
                                                       "phone_number": "29582709",
                                                       "area_code": "11",
                                                       "mother_name": null
                                                   },
                                                   "times_used": 19,
                                                   "last_time_used": "2013-01-02T11:34:09.000-04:00",
                                                   "creation_date": "2012-03-30T19:58:52.000-04:00",
                                                   "last_modified_date": "2013-01-02T11:34:09.000-04:00",
                                                   "verified": false,
                                                   "verification_methods": []
                                               }
                                           ]));
                     
                          
                response.end();

              }

              else{
                if(user == 925706){

                  response.write(JSON.stringify([
                                                 {
                                                     "id": 59860904,
                                                     "status": "active",
                                                     "payment_type_id": "credit_card",
                                                     "payment_method_id": "master",
                                                     "site_id": "MLB",
                                                     "issuer_id": null,
                                                     "card_number_id": "4C0144A5E7C2F08BF017B0BA60E6C0BCC37EC1C9",
                                                     "trunc_card_number": "549167XXXXXX6266",
                                                     "expiration_month": 2,
                                                     "expiration_year": 2017,
                                                     "cardholder": {
                                                         "name": "ELISABETE S SILVA",
                                                         "document": {
                                                             "type": "CPF",
                                                             "number": "12948847869"
                                                         },
                                                         "birth_date": null,
                                                         "phone_number": null,
                                                         "area_code": null,
                                                         "mother_name": null
                                                     },
                                                     "times_used": 3,
                                                     "last_time_used": "2013-01-24T09:09:47.000-04:00",
                                                     "creation_date": "2013-01-14T20:30:10.000-04:00",
                                                     "last_modified_date": "2013-01-24T09:09:47.000-04:00",
                                                     "verified": false,
                                                     "verification_methods": []
                                                 },
                                                 {
                                                     "id": 51533004,
                                                     "status": "active",
                                                     "payment_type_id": "credit_card",
                                                     "payment_method_id": "master",
                                                     "site_id": "MLB",
                                                     "issuer_id": null,
                                                     "card_number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425",
                                                     "trunc_card_number": "549167XXXXXX2292",
                                                     "expiration_month": 2,
                                                     "expiration_year": 2013,
                                                     "cardholder": {
                                                         "name": "STELLA S GOMES",
                                                         "document": {
                                                             "type": "CPF",
                                                             "number": "22432744"
                                                         },
                                                         "birth_date": "1992-05-01",
                                                         "phone_number": "29582709",
                                                         "area_code": "11",
                                                         "mother_name": null
                                                     },
                                                     "times_used": 19,
                                                     "last_time_used": "2013-01-02T11:34:09.000-04:00",
                                                     "creation_date": "2012-03-30T19:58:52.000-04:00",
                                                     "last_modified_date": "2013-01-02T11:34:09.000-04:00",
                                                     "verified": false,
                                                     "verification_methods": []
                                                 }
                                             ]));
                       
                            
                  response.end();

                }

                else{

                  response.write(JSON.stringify([
                                                 {
                                                     "id": 59860904,
                                                     "status": "active",
                                                     "payment_type_id": "credit_card",
                                                     "payment_method_id": "master",
                                                     "site_id": "MLB",
                                                     "issuer_id": null,
                                                     "card_number_id": "4C0144A5E7C2F08BF017B0BA60E6C0BCC37EC1C9",
                                                     "trunc_card_number": "549167XXXXXX6266",
                                                     "expiration_month": 2,
                                                     "expiration_year": 2017,
                                                     "cardholder": {
                                                         "name": "ELISABETE S SILVA",
                                                         "document": {
                                                             "type": "CPF",
                                                             "number": "12948847869"
                                                         },
                                                         "birth_date": null,
                                                         "phone_number": null,
                                                         "area_code": null,
                                                         "mother_name": null
                                                     },
                                                     "times_used": 3,
                                                     "last_time_used": "2013-01-24T09:09:47.000-04:00",
                                                     "creation_date": "2013-01-14T20:30:10.000-04:00",
                                                     "last_modified_date": "2013-01-24T09:09:47.000-04:00",
                                                     "verified": false,
                                                     "verification_methods": []
                                                 },
                                                 {
                                                     "id": 51533004,
                                                     "status": "active",
                                                     "payment_type_id": "credit_card",
                                                     "payment_method_id": "master",
                                                     "site_id": "MLB",
                                                     "issuer_id": null,
                                                     "card_number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425",
                                                     "trunc_card_number": "549167XXXXXX2292",
                                                     "expiration_month": 2,
                                                     "expiration_year": 2013,
                                                     "cardholder": {
                                                         "name": "STELLA S GOMES",
                                                         "document": {
                                                             "type": "CPF",
                                                             "number": "40457271833"
                                                         },
                                                         "birth_date": "1992-05-01",
                                                         "phone_number": "29582709",
                                                         "area_code": "11",
                                                         "mother_name": null
                                                     },
                                                     "times_used": 19,
                                                     "last_time_used": "2013-01-02T11:34:09.000-04:00",
                                                     "creation_date": "2012-03-30T19:58:52.000-04:00",
                                                     "last_modified_date": "2013-01-02T11:34:09.000-04:00",
                                                     "verified": false,
                                                     "verification_methods": []
                                                 }
                                             ]));
                         
                              
                  response.end();
              }
            }
          }  
        }
};

exports.getSearchDataCard = cardsController.getSearchDataCard;
exports.getUserDataCard = cardsController.getUserDataCard;
exports.ping = cardsController.ping;
exports.getCardVerification = cardsController.getCardVerification;

// Mappings 
urlMapping.add ([{
        pattern: '^/cards/ping',
        action: {
            'GET':cardsController.ping
        }
    },
    {
        pattern: '^/card_verifications/search',
        action: {
            'GET':cardsController.getCardVerification
        }
    },
    {
        pattern: '^/cards/search.*',
        action: {
            'GET':cardsController.getSearchDataCard
        }
    },{
        pattern: '^/cards/.*',
        action: {
            'GET':cardsController.getUserDataCard
        }
    }]);
