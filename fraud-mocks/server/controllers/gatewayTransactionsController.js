var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var gatewayTransactionsController = {

        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write("");
            response.end();        
        },

        getTransactionsV2 : function(request, response){     

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            var Id = request.url.match ('/transactions/v2/(\\w+)')[1];
            var result = {"no_mock": "no_mock"};

            
            //Mocks for PaymentsConsumerServiceIntegrationSpec - fraud-subscribers/consumers
            if(Id == "416267155_337f79777f6f717e7d7d") {
                result = {
                            "profile_id": "cielo",
                            "acquirer": "Cielo",
                            "internal_profile_id": "MP_MLB_CIELO3",
                            "payment_id": "692209338",
                            "site_id": "MLB",
                            "currency_id": "REA",
                            "amount": 191.55,
                            "refunded_amount": 0,
                            "in_process_refund_amount": 0,
                            "available_refund_amount": 191.55,
                            "installments": 5,
                            "collector_id": 126893157,
                            "form_data_id": "416125108_337a793d777f7b79656f",
                            "card_token_id": null,
                            "statement_descriptor": "MERCADOPAGO*MLIVRE",
                            "creation_date": "2014-08-29T12:32:59.675-04:00",
                            "last_modified_date": "2014-08-29T12:33:01.838-04:00",
                            "status": "rejected",
                            "operation": "authorization",
                            "version0": 0,
                            "id": Id,
                            "refunds": {
                                "detail": [],
                                "status": null
                            },
                            "online_purchase": {
                                "id": null,
                                "status": null,
                                "response_code": null,
                                "response_message": null,
                                "external_response_code": null,
                                "original_response": null,
                                "authorization_code": null,
                                "response_avs": null,
                                "response_avsmapped": null,
                                "gateway_trx_id": null,
                                "merchant_transaction_reference": null,
                                "unique_sequence_number": null,
                                "last_modified_date": null,
                                "merchant_number": null
                            },
                            "capture": {
                                "id": null,
                                "status": null,
                                "response_code": null,
                                "response_message": null,
                                "external_response_code": null,
                                "original_response": null,
                                "authorization_code": null,
                                "gateway_trx_id": null,
                                "merchant_transaction_reference": null,
                                "unique_sequence_number": null,
                                "last_modified_date": null,
                                "merchant_number": null
                            },
                            "form_data_status": "frozen",
                            "birth_date": null,
                            "doc_type": "CPF",
                            "doc_subtype": null,
                            "doc_number": "04825768636",
                            "mother_name": null,
                            "cardholder_name": "leandro mussi de andrade",
                            "url_callback": null,
                            "card_id": "138220836",
                            "card_expiration_year": 2019,
                            "card_expiration_month": 2,
                            "payment_type_id": "credit_card",
                            "card_issuer_id": null,
                            "visual_id": null,
                            "payment_method": "elo",
                            "phone": null,
                            "area_code": null,
                            "trunc_card_number": "506741XXXXXX1615",
                            "url_callback_cancel": null,
                            "card_number_id": "JDJCJCSKQIEKSAWWBITFCDUZITPNCWVFTFTQNBRC",
                            "authorization": { "id": 416267156, "status": "rejected", "response_code": "2", "response_message": "Autorização negada","external_response_code": "51",
                                "original_response": "{\"autenticacao\":{\"codigo\":\"5\",\"valor\":\"19155\",\"eci\":\"7\",\"mensagem\":\"Transacao sem autenticacao\",\"data-hora\":\"2014-08-29T13:33:00.878-03:00\"},\"forma-pagamento\":{\"produto\":\"2\",\"parcelas\":\"5\",\"bandeira\":\"elo\"},\"status\":\"5\",\"legend\":\"*MLIVRE\",\"dados-pedido\":{\"taxa-embarque\":\"0\",\"valor\":\"19155\",\"data-hora\":\"2014-08-29T13:33:00.838-03:00\",\"idioma\":\"PT\",\"moeda\":\"986\",\"numero\":\"692209338\"},\"autorizacao\":{\"codigo\":\"5\",\"valor\":\"19155\",\"lr\":\"51\",\"mensagem\":\"Autorização negada\",\"data-hora\":\"2014-08-29T13:33:00.912-03:00\",\"nsu\":\"649139\"},\"tid\":\"1053193057286C332005\",\"pan\":\"[pan]\"}",
                                "authorization_code": null,
                                "response_avs": null,
                                "response_avsmapped": null,
                                "gateway_trx_id": "1053193057286C332005",
                                "merchant_transaction_reference": null,
                                "unique_sequence_number": "649139",
                                "last_modified_date": "2014-08-29T12:33:01.000-04:00",
                                "merchant_number": "1053193057"
                            }
                };
            }
            //Mocks for PaymentsConsumerServiceIntegrationSpec - fraud-subscribers/consumers
            if(Id == "416267155_337f79777f6f717e1234") {
                result = {
                            "profile_id": "cielo",
                            "acquirer": "Cielo",
                            "internal_profile_id": "MP_MLB_CIELO3",
                            "payment_id": "692209338",
                            "site_id": "MLB",
                            "currency_id": "REA",
                            "amount": 191.55,
                            "refunded_amount": 0,
                            "in_process_refund_amount": 0,
                            "available_refund_amount": 191.55,
                            "installments": 5,
                            "collector_id": 126893157,
                            "form_data_id": "416125108_337a793d777f7b79656f",
                            "card_token_id": null,
                            "statement_descriptor": "MERCADOPAGO*MLIVRE",
                            "creation_date": "2014-08-29T12:32:59.675-04:00",
                            "last_modified_date": "2014-08-29T12:33:01.838-04:00",
                            "status": "rejected",
                            "operation": "authorization",
                            "version0": 0,
                            "id": Id,
                            "refunds": {
                                "detail": [],
                                "status": null
                            },
                            "online_purchase": {
                                "id": null,
                                "status": null,
                                "response_code": null,
                                "response_message": null,
                                "external_response_code": null,
                                "original_response": null,
                                "authorization_code": null,
                                "response_avs": null,
                                "response_avsmapped": null,
                                "gateway_trx_id": null,
                                "merchant_transaction_reference": null,
                                "unique_sequence_number": null,
                                "last_modified_date": null,
                                "merchant_number": null
                            },
                            "capture": {
                                "id": null,
                                "status": null,
                                "response_code": null,
                                "response_message": null,
                                "external_response_code": null,
                                "original_response": null,
                                "authorization_code": null,
                                "gateway_trx_id": null,
                                "merchant_transaction_reference": null,
                                "unique_sequence_number": null,
                                "last_modified_date": null,
                                "merchant_number": null
                            },
                            "form_data_status": "frozen",
                            "birth_date": null,
                            "doc_type": "CPF",
                            "doc_subtype": null,
                            "doc_number": null,
                            "mother_name": null,
                            "cardholder_name": "leandro mussi de andrade",
                            "url_callback": null,
                            "card_id": "138220836",
                            "card_expiration_year": 2019,
                            "card_expiration_month": 2,
                            "payment_type_id": "credit_card",
                            "card_issuer_id": null,
                            "visual_id": null,
                            "payment_method": "elo",
                            "phone": null,
                            "area_code": null,
                            "trunc_card_number": "506741XXXXXX1615",
                            "url_callback_cancel": null,
                            "card_number_id": "JDJCJCSKQIEKSAWWBITFCDUZITPNCWVFTFTQNBRC",
                            "authorization": { "id": 416267156, "status": "rejected", "response_code": "2", "response_message": "Autorização negada","external_response_code": "51",
                                "original_response": "{\"autenticacao\":{\"codigo\":\"5\",\"valor\":\"19155\",\"eci\":\"7\",\"mensagem\":\"Transacao sem autenticacao\",\"data-hora\":\"2014-08-29T13:33:00.878-03:00\"},\"forma-pagamento\":{\"produto\":\"2\",\"parcelas\":\"5\",\"bandeira\":\"elo\"},\"status\":\"5\",\"legend\":\"*MLIVRE\",\"dados-pedido\":{\"taxa-embarque\":\"0\",\"valor\":\"19155\",\"data-hora\":\"2014-08-29T13:33:00.838-03:00\",\"idioma\":\"PT\",\"moeda\":\"986\",\"numero\":\"692209338\"},\"autorizacao\":{\"codigo\":\"5\",\"valor\":\"19155\",\"lr\":\"51\",\"mensagem\":\"Autorização negada\",\"data-hora\":\"2014-08-29T13:33:00.912-03:00\",\"nsu\":\"649139\"},\"tid\":\"1053193057286C332005\",\"pan\":\"[pan]\"}",
                                "authorization_code": null,
                                "response_avs": null,
                                "response_avsmapped": null,
                                "gateway_trx_id": "1053193057286C332005",
                                "merchant_transaction_reference": null,
                                "unique_sequence_number": "649139",
                                "last_modified_date": "2014-08-29T12:33:01.000-04:00",
                                "merchant_number": "1053193057"
                            }
                };
            }
            //Mocks for PaymentsConsumerServiceIntegrationSpec - fraud-subscribers/consumers
            if(Id == "416267155_337f79777f6f717e1235") {
                result = {
                            "profile_id": "cielo",
                            "acquirer": "Cielo",
                            "internal_profile_id": "MP_MLB_CIELO3",
                            "payment_id": "692209338",
                            "site_id": "MLB",
                            "currency_id": "REA",
                            "amount": 191.55,
                            "refunded_amount": 0,
                            "in_process_refund_amount": 0,
                            "available_refund_amount": 191.55,
                            "installments": 5,
                            "collector_id": 126893157,
                            "form_data_id": "416125108_337a793d777f7b79656f",
                            "card_token_id": null,
                            "statement_descriptor": "MERCADOPAGO*MLIVRE",
                            "creation_date": "2014-08-29T12:32:59.675-04:00",
                            "last_modified_date": "2014-08-29T12:33:01.838-04:00",
                            "status": "rejected",
                            "operation": "authorization",
                            "version0": 0,
                            "id": Id,
                            "refunds": {
                                "detail": [],
                                "status": null
                            },
                            "online_purchase": {
                                "id": null,
                                "status": null,
                                "response_code": null,
                                "response_message": null,
                                "external_response_code": null,
                                "original_response": null,
                                "authorization_code": null,
                                "response_avs": null,
                                "response_avsmapped": null,
                                "gateway_trx_id": null,
                                "merchant_transaction_reference": null,
                                "unique_sequence_number": null,
                                "last_modified_date": null,
                                "merchant_number": null
                            },
                            "capture": {
                                "id": null,
                                "status": null,
                                "response_code": null,
                                "response_message": null,
                                "external_response_code": null,
                                "original_response": null,
                                "authorization_code": null,
                                "gateway_trx_id": null,
                                "merchant_transaction_reference": null,
                                "unique_sequence_number": null,
                                "last_modified_date": null,
                                "merchant_number": null
                            },
                            "form_data_status": "frozen",
                            "birth_date": null,
                            "doc_type": "CPF",
                            "doc_subtype": null,
                            "mother_name": null,
                            "cardholder_name": "leandro mussi de andrade",
                            "url_callback": null,
                            "card_id": "138220836",
                            "card_expiration_year": 2019,
                            "card_expiration_month": 2,
                            "payment_type_id": "credit_card",
                            "card_issuer_id": null,
                            "visual_id": null,
                            "payment_method": "elo",
                            "phone": null,
                            "area_code": null,
                            "trunc_card_number": "506741XXXXXX1615",
                            "url_callback_cancel": null,
                            "card_number_id": "JDJCJCSKQIEKSAWWBITFCDUZITPNCWVFTFTQNBRC",
                            "authorization": { "id": 416267156, "status": "rejected", "response_code": "2", "response_message": "Autorização negada","external_response_code": "51",
                                "original_response": "{\"autenticacao\":{\"codigo\":\"5\",\"valor\":\"19155\",\"eci\":\"7\",\"mensagem\":\"Transacao sem autenticacao\",\"data-hora\":\"2014-08-29T13:33:00.878-03:00\"},\"forma-pagamento\":{\"produto\":\"2\",\"parcelas\":\"5\",\"bandeira\":\"elo\"},\"status\":\"5\",\"legend\":\"*MLIVRE\",\"dados-pedido\":{\"taxa-embarque\":\"0\",\"valor\":\"19155\",\"data-hora\":\"2014-08-29T13:33:00.838-03:00\",\"idioma\":\"PT\",\"moeda\":\"986\",\"numero\":\"692209338\"},\"autorizacao\":{\"codigo\":\"5\",\"valor\":\"19155\",\"lr\":\"51\",\"mensagem\":\"Autorização negada\",\"data-hora\":\"2014-08-29T13:33:00.912-03:00\",\"nsu\":\"649139\"},\"tid\":\"1053193057286C332005\",\"pan\":\"[pan]\"}",
                                "authorization_code": null,
                                "response_avs": null,
                                "response_avsmapped": null,
                                "gateway_trx_id": "1053193057286C332005",
                                "merchant_transaction_reference": null,
                                "unique_sequence_number": "649139",
                                "last_modified_date": "2014-08-29T12:33:01.000-04:00",
                                "merchant_number": "1053193057"
                            }
                };
            }

            response.write(JSON.stringify(result));
            response.end();
        },

		getTransactions : function(request, response){     

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var Id = request.url.match ('/transactions/(\\w+)')[1];    
            
            var result;
            
            
            
            if(Id == "insert_0000001") {
                result = {
                        "id": Id,
                        "payment_id": "400000221",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d7001",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            }
            else if(Id == "insert_0000001A"){
                result = {
                        "id": Id,
                        "payment_id": "400002001",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d701A",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            }
            else if(Id == "insert_0000001B"){
                result = {
                        "id": Id,
                        "payment_id": "400002002",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d701B",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };    
            }
            else if(Id == "insert_0000001C"){
                result = {
                        "id": Id,
                        "payment_id": "400002003",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d701C",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            }
            else if(Id == "insert_0000001D"){
                result = {
                        "id": Id,
                        "payment_id": "400002004",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d701D",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            } 
            else if(Id == "insert_0000001E"){
                result = {
                        "id": Id,
                        "payment_id": "400002005",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d701E",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            } 
             else if(Id == "insert_0000001T"){
                result = {
                        "id": Id,
                        "payment_id": "404672001",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d701E",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            } 
            else if(Id == "insert_0000001T1"){
                result = {
                        "id": Id,
                        "payment_id": "403672001",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d701E",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            } 
            else if(Id == "insert_0000001T2"){
                result = {
                        "id": Id,
                        "payment_id": "402672001",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d701E",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            } 
            else if(Id == "insert_0000001T3"){
                result = {
                        "id": Id,
                        "payment_id": "400672001",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d701E",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            }
                else if(Id == "insert_0000001T4"){
                result = {
                        "id": Id,
                        "payment_id": "400002001",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d701E",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            }
            else if(Id == "insert_0000002"){
                result = {
                        "id": Id,
                        "payment_id": "400000221",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d7002",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            } 
            else if(Id == "insert_0000003"){
                result = {
                        "id": Id,
                        "payment_id": "400000221",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d7003",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            } 
            else if(Id == "insert_0000004"){
                result = {
                        "id": Id,
                        "payment_id": "400000221",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d7004",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            } else if(Id == "insert_0000006") {
                result = {
                        "id": Id,
                        "payment_id": "410000222",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e673d7001",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "version": 0
                    };
            } 
            else if(Id == "reprocess_0000001"){
         
                result = {
                        "id": Id,
                        "payment_id": "400030003",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "113544034_757f7a77667e67rep001",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "cardholder_name":"test_user_spn",
                        "version": 0
                    };
                  
            }else if(Id == "416267155_337f79777f6f717e7d7d"){
                //Mocks for PaymentsConsumerServiceIntegrationSpec - fraud-subscribers/consumers
                result = {
                        "id": Id,
                        "payment_id": "400030003",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "416125108_337a793d777f7b79656f",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "cardholder_name":"test_user_spn",
                        "version": 0
                    };
            }else if(Id == "516026385_7574657771776c777f6A"){
                result = {
                        "id": Id,
                        "payment_id": "516026385",
                        "profile_id": "MercadoPago",
                        "acquirer": "cencosud",
                        "internal_profile_id": "MP_MLA_POSNET",
                        "site_id": "MLA",
                        "currency_id": "ARS",
                        "amount": 0.01,
                        "installments": 1,
                        "collector_id": null,
                        "form_data_id": "416125108_337a793d777f7b79656f",
                        "creation_date": "2012-09-27T14:33:43.923-04:00",
                        "status": "approved",
                        "operation": "cancel_capture",
                        "authorization_id": "113544921",
                        "capture_id": "113821491",
                        "onl_purchase_id": null,
                        "cardholder_name":"test_user_spn",
                        "version": 0
                    };
            }else if(Id == "516026386_7574657771776c777f6B"){
	                result = {
	                        "id": Id,
	                        "payment_id": "516026386",
	                        "profile_id": "MercadoPago",
	                        "acquirer": "cencosud",
	                        "internal_profile_id": "MP_MLA_POSNET",
	                        "site_id": "MLA",
	                        "currency_id": "ARS",
	                        "amount": 0.01,
	                        "installments": 1,
	                        "collector_id": null,
	                        "form_data_id": "416125108_337a793d777f7b79656f",
	                        "creation_date": "2012-09-27T14:33:43.923-04:00",
	                        "status": "approved",
	                        "operation": "cancel_capture",
	                        "authorization_id": "113544921",
	                        "capture_id": "113821491",
	                        "onl_purchase_id": null,
	                        "cardholder_name":"test_user_spn",
	                        "version": 0
	                    };
	            }
             else if(Id == "insert_0000100"){
                    result = {
                            "id": Id,
                            "payment_id": "21464100636",
                            "profile_id": "MercadoPago",
                            "acquirer": "cencosud",
                            "internal_profile_id": "MP_MLA_POSNET",
                            "site_id": "MLA",
                            "currency_id": "ARS",
                            "amount": 0.01,
                            "installments": 1,
                            "collector_id": null,
                            "form_data_id": "416125108_337a793d777f7b79656f",
                            "creation_date": "2012-09-27T14:33:43.923-04:00",
                            "status": "approved",
                            "operation": "cancel_capture",
                            "authorization_id": "113544921",
                            "capture_id": "113821491",
                            "onl_purchase_id": null,
                            "cardholder_name":"test_user_spn",
                            "version": 0
                        };
                }
             else if(Id == "insert_0000101"){
                    result = {
                            "id": Id,
                            "payment_id": "21464100636",
                            "profile_id": "MercadoPago",
                            "acquirer": "cencosud",
                            "internal_profile_id": "MP_MLA_POSNET",
                            "site_id": "MLA",
                            "currency_id": "ARS",
                            "amount": 0.01,
                            "installments": 1,
                            "collector_id": null,
                            "form_data_id": "416125108_337a793d777f7b79656f",
                            "creation_date": "2012-09-27T14:33:43.923-04:00",
                            "status": "approved",
                            "operation": "cancel_capture",
                            "authorization_id": "113544921",
                            "capture_id": "113821491",
                            "onl_purchase_id": null,
                            "cardholder_name":"test_user_spn",
                            "version": 0
                        };
                }       
            else {
             result = {
			    "id": Id,
			    "profile_id": "MercadoPago",
			    "acquirer": "cencosud",
			    "internal_profile_id": "MP_MLA_POSNET",
			    "payment_id": "987654",
			    "site_id": "MLA",
			    "currency_id": "ARS",
			    "amount": 0.01,
			    "installments": 1,
			    "collector_id": null,
			    "form_data_id": "113544034_757f7a77667e673d7b7c",
			    "creation_date": "2012-09-27T14:33:43.923-04:00",
			    "status": "approved",
			    "operation": "cancel_capture",
			    "authorization_id": "113544921",
			    "capture_id": "113821491",
			    "onl_purchase_id": null,
			    "version": 0
			};
            }
            
            response.write(JSON.stringify(result));
            response.end();

        }


};

exports.getTransactions = gatewayTransactionsController.getTransactions;
exports.ping = gatewayTransactionsController.ping;

// Mappings
urlMapping.add ([{
        pattern: '^/gateway/transactions/ping',
        action: {
            'GET':gatewayTransactionsController.ping
        }
    },{
        pattern: '^/gateway/transactions/v2/.*',
        action: {
            'GET':gatewayTransactionsController.getTransactionsV2
        }
    },{
        pattern: '^/gateway/transactions/.*',
        action: {
            'GET':gatewayTransactionsController.getTransactions
        }
    }]);