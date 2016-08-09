var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");
var count = 0; 

var gatewayFormsDataController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write("");
            response.end();        
        },

		getFormsData : function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var result

    		var Id = request.url.match ('/formsdata/(\\w+)')[1];         

    		if(Id == "113544034_757f7a77667e673d7001" || Id == "113544034_757f7a77667e673d7003"
    		   || Id == "113544034_757f7a77667e673d701A" || Id == "113544034_757f7a77667e673d701B" || Id == "113544034_757f7a77667e673d701C"
    		   || Id == "113544034_757f7a77667e673d701D" || Id == "113544034_757f7a77667e673d701E"){	
    			result = {
			    "id": Id,
			    "creation_date": "2012-09-27T14:33:10.183-04:00",
			    "last_modified_date": "2012-09-27T14:36:39.446-04:00",
			    "birth_date": "1970-12-19T00:00:00.000-04:00",
			    "doc_type": "DNI",
			    "doc_number": "232323",
			    "mother_name": null,
			    "cardholder_name": "prueba cencosud pura",
			    "url_callback": "http://www.google.com",
			    "card_id": null,
			    "security_code_id": null,
			    "card_expiration_year": 2015,
			    "card_expiration_month": 4,
			    "payment_type_id": "credit_card",
			    "card_issuer_id": null,
			    "card_number_id": "CB15C2A4AA29B1BA9ECD630D61BC1D5F7C8DFED2",
			    "site_id": "MLA",
			    "visual_id": "STD",
			    "payment_method": "master",
			    "phone": "52258946",
			    "area_code": "11",
			    "trunc_card_number": "122345XXXXXX7070",
			    "url_callback_cancel": "http://www.google.com"
				}

    		}else if(Id == "113544034_757f7a77667e673d7004"){

    			result = {
			    "id": Id,
			    "creation_date": "2012-09-27T14:33:10.183-04:00",
			    "last_modified_date": "2012-09-27T14:36:39.446-04:00",
			    "birth_date": "1970-12-19T00:00:00.000-04:00",
			    "doc_type": "DNI",
			    "doc_number": "323232",
			    "mother_name": null,
			    "cardholder_name": "prueba cencosud pura",
			    "url_callback": "http://www.google.com",
			    "card_id": null,
			    "security_code_id": null,
			    "card_expiration_year": 2015,
			    "card_expiration_month": 4,
			    "payment_type_id": "credit_card",
			    "card_issuer_id": null,
			    "card_number_id": "CB15C2A4AA29B1BA9ECD630D61BC1D5F7C8DFED2",
			    "site_id": "MLA",
			    "visual_id": "STD",
			    "payment_method": "master",
			    "phone": "52258946",
			    "area_code": "11",
			    "trunc_card_number": "122345XXXXXX7070",
			    "url_callback_cancel": "http://www.google.com"
				}

    		}else if(Id == "113544034_757f7a77667e67rep001"){
				
    			if(count < 3){//la primera 3 veces falla
                    count = count+1;
                  response.writeHead(500, {
                                'Content-Type' : 'application/json; charset=utf-8'
                            });
                    response.write(JSON.stringify({"error":"not messges"}));
                    console.log("count: "+count);
                    return
                }  

    			result = {
			    "id": Id,
			    "creation_date": "2012-09-27T14:33:10.183-04:00",
			    "last_modified_date": "2012-09-27T14:36:39.446-04:00",
			    "birth_date": "1970-12-19T00:00:00.000-04:00",
			    "doc_type": "DNI",
			    "doc_number": "32665540",
			    "mother_name": null,
			    "cardholder_name": "test_user_spn",
			    "url_callback": "http://www.google.com",
			    "card_id": null,
			    "security_code_id": null,
			    "card_expiration_year": 2015,
			    "card_expiration_month": 4,
			    "payment_type_id": "credit_card",
			    "card_issuer_id": null,
			    "card_number_id": "CB15C2A4AA29B1BA9ECD630D61BC1D5F7C8DFED2",
			    "site_id": "MLA",
			    "visual_id": "STD",
			    "payment_method": "master",
			    "phone": "52258946",
			    "area_code": "11",
			    "trunc_card_number": "122345XXXXXX7070",
			    "url_callback_cancel": "http://www.google.com"
				}

    		}else if(Id == "113544034_757f7a77667e673d7002"){
				
    			result = {
			    "id": Id,
			    "creation_date": "2012-09-27T14:33:10.183-04:00",
			    "last_modified_date": "2012-09-27T14:36:39.446-04:00",
			    "birth_date": "1970-12-19T00:00:00.000-04:00",
			    "doc_type": "DNI",
			    "doc_number": "123456",
			    "mother_name": null,
			    "cardholder_name": "pepe",
			    "url_callback": "http://www.google.com",
			    "card_id": null,
			    "security_code_id": null,
			    "card_expiration_year": 2015,
			    "card_expiration_month": 4,
			    "payment_type_id": "credit_card",
			    "card_issuer_id": null,
			    "card_number_id": "CB15C2A4AA29B1BA9ECD630D61BC1D5F7C8DFED2",
			    "site_id": "MLA",
			    "visual_id": "STD",
			    "payment_method": "master",
			    "phone": "52258946",
			    "area_code": "11",
			    "trunc_card_number": "122345XXXXXX7070",
			    "url_callback_cancel": "http://www.google.com"
				}
			}else if(Id == "113544034_757f7a77667e673d1234"){
				//Mocks for PaymentsConsumerServiceIntegrationSpec - fraud-subscribers/consumers
    			result = {
			    "id": Id,
			    "creation_date": "2012-09-27T14:33:10.183-04:00",
			    "last_modified_date": "2012-09-27T14:36:39.446-04:00",
			    "birth_date": "1970-12-19T00:00:00.000-04:00",
			    "doc_type": "DNI",
			    "doc_number": null,
			    "mother_name": null,
			    "cardholder_name": "pepe",
			    "url_callback": "http://www.google.com",
			    "card_id": null,
			    "security_code_id": null,
			    "card_expiration_year": 2015,
			    "card_expiration_month": 4,
			    "payment_type_id": "credit_card",
			    "card_issuer_id": null,
			    "card_number_id": "CB15C2A4AA29B1BA9ECD630D61BC1D5F7C8DFED2",
			    "site_id": "MLA",
			    "visual_id": "STD",
			    "payment_method": "master",
			    "phone": "52258946",
			    "area_code": "11",
			    "trunc_card_number": "122345XXXXXX7070",
			    "url_callback_cancel": "http://www.google.com"
			    }
			}else{

	            result = {
				    "id": Id,
				    "creation_date": "2012-09-27T14:33:10.183-04:00",
				    "last_modified_date": "2012-09-27T14:36:39.446-04:00",
				    "birth_date": "1970-12-19T00:00:00.000-04:00",
				    "doc_type": "DNI",
				    "doc_number": "20897652",
				    "mother_name": null,
				    "cardholder_name": "prueba cencosud pura",
				    "url_callback": "http://www.google.com",
				    "card_id": null,
				    "security_code_id": null,
				    "card_expiration_year": 2015,
				    "card_expiration_month": 4,
				    "payment_type_id": "credit_card",
				    "card_issuer_id": null,
				    "card_number_id": "CB15C2A4AA29B1BA9ECD630D61BC1D5F7C8DFED2",
				    "site_id": "MLA",
				    "visual_id": "STD",
				    "payment_method": "cencosud",
				    "phone": "52258946",
				    "area_code": "11",
				    "trunc_card_number": "122345XXXXXX7070",
				    "url_callback_cancel": "http://www.google.com"
				};
            }
            response.write(JSON.stringify(result));
            response.end();

        }


};

exports.getFormsData = gatewayFormsDataController.getFormsData;
exports.ping = gatewayFormsDataController.ping;

// Mappings
urlMapping.add ([{
        pattern: '^/gateway/formsdata/ping',
        action: {
            'GET':gatewayFormsDataController.ping
        }
    },{
        pattern: '^/gateway/formsdata/.*',
        action: {
            'GET':gatewayFormsDataController.getFormsData
        }
    }]);