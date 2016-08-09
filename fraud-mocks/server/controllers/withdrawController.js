var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

//var retryWithDoc = 0;

var withdrawController = {

        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"status":"withdraw-api is UP [version: 0.0.21]"}));
            response.end();
        },
        search: function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var result = [];

            result = {
                    "paging": {
                        "offset": 0,
                        "limit": 30,
                        "total": 5
                    },
                    "data": [
                        {
                            "id": "176133",
                            "user_id": 91178135,
                            "type": "current account",
                            "number": "001¬123¬5555555/55¬CC",
                            "branch": "123",
                            "status": "active",
                            "date_created": "2009-11-10T10:43:31.000-0400",
                            "date_modified": null
                        },
                        {
                            "id": "175901",
                            "user_id": 91178135,
                            "type": "current account",
                            "number": "001¬101¬444444/44¬CC",
                            "branch": "101",
                            "status": "active",
                            "date_created": "2009-11-10T10:43:15.000-0400",
                            "date_modified": null
                        },
                        {
                            "id": "175900",
                            "user_id": 91178135,
                            "type": "current account",
                            "number": "001¬111¬3333333/33¬CC",
                            "branch": "111",
                            "status": "active",
                            "date_created": "2009-11-10T10:42:57.000-0400",
                            "date_modified": null
                        },
                        {
                            "id": "175899",
                            "user_id": 91178135,
                            "type": "current account",
                            "number": "001¬122¬22222/22¬CC",
                            "branch": "122",
                            "status": "active",
                            "date_created": "2009-11-10T10:42:39.000-0400",
                            "date_modified": null
                        },
                        {
                            "id": "176129",
                            "user_id": 91178135,
                            "type": "current account",
                            "number": "001¬123¬1111/11¬CC",
                            "branch": "123",
                            "status": "active",
                            "date_created": "2009-11-10T10:40:32.000-0400",
                            "date_modified": null
                        }
                    ]
                };

              response.write(JSON.stringify(result));
              response.end();
        },
        searchBankAccounts: function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var result = [];

            result = {"paging":{"total":2,"limit":30,"offset":0},"results":[{"id":1451011,"user_id":151457264,"site_id":"MLB","status":"inactive","holder":"ASTROPAY BRASIL LTDA","type":"checking_account","number":"24600/x","branch":"1518","bank_id":"001","bank_description":"001 - Banco do Brasil","identification":{"type":"CNPJ","number":"16883876000163"},"alias":"ASTROPAY BRASIL LTDA","date_created":"2014-01-27T13:37:30.000-04:00","last_modified":"2014-01-27T13:37:30.000-04:00"},{"id":2776129,"user_id":151457264,"site_id":"MLB","status":"verified","holder":"AstroPay Brasil Ltda","type":"checking_account","number":"24600/X","branch":"1518","bank_id":"001","bank_description":"001 - Banco do Brasil","identification":{"type":"CNPJ","number":"16883876000163"},"alias":"AstroPay Brasil Ltda","date_created":"2015-05-27T09:43:22.000-04:00","last_modified":"2015-05-27T09:43:22.000-04:00"}]};

              response.write(JSON.stringify(result));
              response.end();
        },
        searchDocs: function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var data = url.parse(request.url, true).query;

            if(data["user_id"] == '555666777' && global.retryWithDoc == 0){
                jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                global.retryWithDoc++;
                return;
            }
            if(data["user_id"] == '555666788' && global.retryWithDoc == 0){
                jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                global.retryWithDoc++;
                return;
            }

            var result = [];

            result = {
                    "paging": {
                        "offset": 0,
                        "limit": 30,
                        "total": 2
                    },
                    "data": [
                        {
                            "id": "176132",
                            "user_id": 91178135,
                            "type": "CPF",
                            "number": "12679132319",
                            "status": "active",
                            "date_created": "2009-11-10T10:42:07.000-0400",
                            "date_modified": null
                        },
                        {
                            "id": "176128",
                            "user_id": 91178135,
                            "type": "CPF",
                            "number": "20541964879",
                            "status": "active",
                            "date_created": "2009-11-10T10:40:32.000-0400",
                            "date_modified": null
                        }
                    ]
                };

              response.write(JSON.stringify(result));
              response.end();
        },
        searchWithdrawals: function(request, response){

            var url_parts = url.parse(request.url,true);

            var id = url_parts.query.id
            var userId = url_parts.query.user_id

            var result = [];

            if (id == 111){
                result = {paging:{total:0, limit:30, offset:0}, results:[]};
                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if (id == 333333){
                  result = {
                    "paging": {
                    "total": 1,
                    "limit": 30,
                    "offset": 0
                     },
                    "results": [
                        {
                            "id": 333333,
                            "user_id": 151457264,
                            "site_id": "MLB",
                            "status": "pending",
                            "status_detail": "pending",
                            "amount": 240478.23,
                            "fee": 3,
                            "currency_id": "BRL",
                            "bank_account": {
                                "alias": "ASTROPAY BRASIL LTDA",
                                "holder": "ASTROPAY BRASIL LTDA",
                                "type": "checking_account",
                                "number": "24600/x",
                                "branch": "1518",
                                "bank_id": "001",
                                "identification": {
                                    "type": "CPF",
                                    "number": "1212121212"
                                }
                            },
                            "payer_bank": "bradesco_withdraw",
                            "method": null,
                            "ow_operation_id": 793680074,
                            "date_confirmed": null,
                            "date_created": "2014-06-11T12:02:23.000-04:00",
                            "last_modified": "2014-06-16T20:30:55.000-04:00"
                        }
                    ]
                };

                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if (userId == 44444){
                result = {
                  "paging": {
                  "total": 1,
                  "limit": 30,
                  "offset": 0
                   },
                  "results": [
                      {
                          "id": 333333,
                          "user_id": 151457264,
                          "site_id": "MLB",
                          "status": "pending",
                          "status_detail": "pending",
                          "amount": 240478.23,
                          "fee": 3,
                          "currency_id": "BRL",
                          "bank_account": {
                              "alias": "ASTROPAY BRASIL LTDA",
                              "holder": "ASTROPAY BRASIL LTDA",
                              "type": "checking_account",
                              "number": "5555555/55",
                              "branch": "123",
                              "bank_id": "001",
                              "identification": {
                                  "type": "CPF",
                                  "number": "1212121212"
                              }
                          },
                          "payer_bank": "bradesco_withdraw",
                          "method": null,
                          "ow_operation_id": 793680074,
                          "date_confirmed": null,
                          "date_created": "2014-06-11T12:02:23.000-04:00",
                          "last_modified": "2014-06-16T20:30:55.000-04:00"
                      }
                  ]
              };

              response.write(JSON.stringify(result));
              response.end();
              return;
          }



            if (userId == 33333){
                result = {
                  "paging": {
                  "total": 1,
                  "limit": 30,
                  "offset": 0
                   },
                  "results": [
                      {
                          "id": 333333,
                          "user_id": 151457264,
                          "site_id": "MLB",
                          "status": "pending",
                          "status_detail": "pending",
                          "amount": 240478.23,
                          "fee": 3,
                          "currency_id": "BRL",
                          "bank_account": {
                              "alias": "ASTROPAY BRASIL LTDA",
                              "holder": "ASTROPAY BRASIL LTDA",
                              "type": "checking_account",
                              "number": "5555555/55",
                              "branch": "123",
                              "bank_id": "001",
                              "identification": {
                                  "type": "CPF",
                                  "number": "1212121212"
                              }
                          },
                          "payer_bank": "bradesco_withdraw",
                          "method": null,
                          "ow_operation_id": 793680074,
                          "date_confirmed": null,
                          "date_created": "2014-06-11T12:02:23.000-04:00",
                          "last_modified": "2014-06-16T20:30:55.000-04:00"
                      }
                  ]
              };

              response.write(JSON.stringify(result));
              response.end();
              return;
          }

            if (userId == 12345){
                result = {
                  "paging": {
                  "total": 1,
                  "limit": 30,
                  "offset": 0
                   },
                  "results": [
                      {
                          "id": 333333,
                          "user_id": 151457264,
                          "site_id": "MLB",
                          "status": "pending",
                          "status_detail": "pending",
                          "amount": 240478.23,
                          "fee": 3,
                          "currency_id": "BRL",
                          "bank_account": {
                              "alias": "ASTROPAY BRASIL LTDA",
                              "holder": "ASTROPAY BRASIL LTDA",
                              "type": "checking_account",
                              "number": "123456",
                              "branch": "123",
                              "bank_id": "001",
                              "identification": {
                                  "type": "CPF",
                                  "number": "1212121212"
                              }
                          },
                          "payer_bank": "bradesco_withdraw",
                          "method": null,
                          "ow_operation_id": 793680074,
                          "date_confirmed": null,
                          "date_created": "2014-06-11T12:02:23.000-04:00",
                          "last_modified": "2014-06-16T20:30:55.000-04:00"
                      }
                  ]
              };

              response.write(JSON.stringify(result));
              response.end();
              return;
          }

            if (userId == 11111){
                  result = {
                    "paging": {
                    "total": 1,
                    "limit": 30,
                    "offset": 0
                     },
                    "results": [
                        {
                            "id": 333333,
                            "user_id": 151457264,
                            "site_id": "MLB",
                            "status": "pending",
                            "status_detail": "pending",
                            "amount": 240478.23,
                            "fee": 3,
                            "currency_id": "BRL",
                            "bank_account": {
                                "alias": "ASTROPAY BRASIL LTDA",
                                "holder": "ASTROPAY BRASIL LTDA",
                                "type": "checking_account",
                                "number": "5555555/55",
                                "branch": "123",
                                "bank_id": "001",
                                "identification": {
                                    "type": "CPF",
                                    "number": "1212121212"
                                }
                            },
                            "payer_bank": "bradesco_withdraw",
                            "method": null,
                            "ow_operation_id": 793680074,
                            "date_confirmed": null,
                            "date_created": "2014-06-11T12:02:23.000-04:00",
                            "last_modified": "2014-06-16T20:30:55.000-04:00"
                        }
                    ]
                };

                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if (userId == 151457264){
                result = {
                  "paging": {
                  "total": 1,
                  "limit": 30,
                  "offset": 0
                   },
                  "results": [
                      {
                          "id": 333333,
                          "user_id": 151457264,
                          "site_id": "MLB",
                          "status": "pending",
                          "status_detail": "pending",
                          "amount": 240478.23,
                          "fee": 3,
                          "currency_id": "BRL",
                          "bank_account": {
                              "alias": "ASTROPAY BRASIL LTDA",
                              "holder": "ASTROPAY BRASIL LTDA",
                              "type": "checking_account",
                              "number": "5555555/55",
                              "branch": "123",
                              "bank_id": "001",
                              "identification": {
                                  "type": "CPF",
                                  "number": "1212121212"
                              }
                          },
                          "payer_bank": "bradesco_withdraw",
                          "method": null,
                          "ow_operation_id": 793680074,
                          "date_confirmed": null,
                          "date_created": "2014-06-11T12:02:23.000-04:00",
                          "last_modified": "2014-06-16T20:30:55.000-04:00"
                      }
                  ]
              };

              response.write(JSON.stringify(result));
              response.end();
              return;
          }

            if (userId == 555666777){
                  result = {
                    "paging": {
                    "total": 1,
                    "limit": 30,
                    "offset": 0
                     },
                    "results": [
                                {
                                    "id": 333333,
                                    "user_id": 151457264,
                                    "site_id": "MLB",
                                    "status": "pending",
                                    "status_detail": "pending",
                                    "amount": 240478.23,
                                    "fee": 3,
                                    "currency_id": "BRL",
                                    "bank_account": {
                                        "alias": "ASTROPAY BRASIL LTDA",
                                        "holder": "ASTROPAY BRASIL LTDA",
                                        "type": "checking_account",
                                        "number": "1111/11",
                                        "branch": "123",
                                        "bank_id": "001",
                                        "identification": {
                                            "type": "CPF",
                                            "number": "1212121212"
                                        }
                                    },
                                    "payer_bank": "bradesco_withdraw",
                                    "method": null,
                                    "ow_operation_id": 793680074,
                                    "date_confirmed": null,
                                    "date_created": "2014-06-11T12:02:23.000-04:00",
                                    "last_modified": "2014-06-16T20:30:55.000-04:00"
                                },
                            {
                                "id": 333333,
                                "user_id": 151457264,
                                "site_id": "MLB",
                                "status": "pending",
                                "status_detail": "pending",
                                "amount": 240478.23,
                                "fee": 3,
                                "currency_id": "BRL",
                                "bank_account": {
                                    "alias": "ASTROPAY BRASIL LTDA",
                                    "holder": "ASTROPAY BRASIL LTDA",
                                    "type": "checking_account",
                                    "number": "22222/22",
                                    "branch": "122",
                                    "bank_id": "001",
                                    "identification": {
                                        "type": "CPF",
                                        "number": "1212121212"
                                    }
                                },
                                "payer_bank": "bradesco_withdraw",
                                "method": null,
                                "ow_operation_id": 793680074,
                                "date_confirmed": null,
                                "date_created": "2014-06-11T12:02:23.000-04:00",
                                "last_modified": "2014-06-16T20:30:55.000-04:00"
                            },
                                {
                                    "id": 333333,
                                    "user_id": 151457264,
                                    "site_id": "MLB",
                                    "status": "pending",
                                    "status_detail": "pending",
                                    "amount": 240478.23,
                                    "fee": 3,
                                    "currency_id": "BRL",
                                    "bank_account": {
                                        "alias": "ASTROPAY BRASIL LTDA",
                                        "holder": "ASTROPAY BRASIL LTDA",
                                        "type": "checking_account",
                                        "number": "3333333/33",
                                        "branch": "111",
                                        "bank_id": "001",
                                        "identification": {
                                            "type": "CPF",
                                            "number": "1212121212"
                                        }
                                    },
                                    "payer_bank": "bradesco_withdraw",
                                    "method": null,
                                    "ow_operation_id": 793680074,
                                    "date_confirmed": null,
                                    "date_created": "2014-06-11T12:02:23.000-04:00",
                                    "last_modified": "2014-06-16T20:30:55.000-04:00"
                                },
                                {
                                    "id": 333333,
                                    "user_id": 151457264,
                                    "site_id": "MLB",
                                    "status": "pending",
                                    "status_detail": "pending",
                                    "amount": 240478.23,
                                    "fee": 3,
                                    "currency_id": "BRL",
                                    "bank_account": {
                                        "alias": "ASTROPAY BRASIL LTDA",
                                        "holder": "ASTROPAY BRASIL LTDA",
                                        "type": "checking_account",
                                        "number": "444444/44",
                                        "branch": "101",
                                        "bank_id": "001",
                                        "identification": {
                                            "type": "CPF",
                                            "number": "1212121212"
                                        }
                                    },
                                    "payer_bank": "bradesco_withdraw",
                                    "method": null,
                                    "ow_operation_id": 793680074,
                                    "date_confirmed": null,
                                    "date_created": "2014-06-11T12:02:23.000-04:00",
                                    "last_modified": "2014-06-16T20:30:55.000-04:00"
                                },
                        {
                            "id": 333333,
                            "user_id": 151457264,
                            "site_id": "MLB",
                            "status": "pending",
                            "status_detail": "pending",
                            "amount": 240478.23,
                            "fee": 3,
                            "currency_id": "BRL",
                            "bank_account": {
                                "alias": "ASTROPAY BRASIL LTDA",
                                "holder": "ASTROPAY BRASIL LTDA",
                                "type": "checking_account",
                                "number": "5555555/55",
                                "branch": "123",
                                "bank_id": "001",
                                "identification": {
                                    "type": "CPF",
                                    "number": "1212121212"
                                }
                            },
                            "payer_bank": "bradesco_withdraw",
                            "method": null,
                            "ow_operation_id": 793680074,
                            "date_confirmed": null,
                            "date_created": "2014-06-11T12:02:23.000-04:00",
                            "last_modified": "2014-06-16T20:30:55.000-04:00"
                        }
                    ]
                };

                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if (id == 444444){
                  result = {
                        "paging": {
                            "total": 0,
                            "limit": 30,
                            "offset": 0,
                        },
                        "results": []
                   }

                response.write(JSON.stringify(result));
                response.end();
                return;
            }


            result = {
                    "paging": {
                    "total": 1,
                    "limit": 30,
                    "offset": 0
                },
                "results": [
                    {
                        "id": 700683736,
                        "user_id": 151457264,
                        "site_id": "MLB",
                        "status": "approved",
                        "status_detail": "approved",
                        "amount": 240478.23,
                        "fee": 3,
                        "currency_id": "BRL",
                        "bank_account": {
                            "alias": "ASTROPAY BRASIL LTDA",
                            "holder": "ASTROPAY BRASIL LTDA",
                            "type": "checking_account",
                            "number": "24600/x",
                            "branch": "1518",
                            "bank_id": "001",
                            "identification": {
                                "type": "CNPJ",
                                "number": "16883876000163"
                            }
                        },
                        "payer_bank": "bradesco_withdraw",
                        "method": null,
                        "ow_operation_id": 793680074,
                        "date_confirmed": null,
                        "date_created": "2014-06-11T12:02:23.000-04:00",
                        "last_modified": "2014-06-16T20:30:55.000-04:00"
                    }
                ]
            };


            var data = url.parse(request.url, true).query;

            if (data["user_id"] == 143972023 && data["status"] == "approved"){
                console.log("Retiros para el usuario 143972023");
                response.write(JSON.stringify({"paging":{"total":2,"limit":30,"offset":0},"results":[{"id":701781540,"user_id":143972023,"site_id":"MLV","status":"approved","status_detail":"approved","amount":150,"fee":0,"currency_id":"VEF","bank_account":{"alias":"jognam gutierrez","holder":"jognam gutierrez","type":"checking_account","number":"01750440130070971969","branch":null,"bank_id":"0175","identification":{"type":"C.I.","number":"V19913147"}},"payer_bank":"bancoven","method":null,"ow_operation_id":831576768,"date_confirmed":null,"date_created":"2014-08-27T15:52:41.000-04:00","last_modified":"2014-09-01T11:58:27.000-04:00"},{"id":701686620,"user_id":143972023,"site_id":"MLV","status":"approved","status_detail":"approved","amount":2350,"fee":0,"currency_id":"VEF","bank_account":{"alias":"jognam gutierrez","holder":"jognam gutierrez","type":"checking_account","number":"01750440130070971969","branch":null,"bank_id":"0175","identification":{"type":"C.I.","number":"V19913147"}},"payer_bank":"bancoven","method":null,"ow_operation_id":827871466,"date_confirmed":null,"date_created":"2014-08-21T11:43:05.000-04:00","last_modified":"2014-08-26T12:24:06.000-04:00"}]}));
                response.end();
            }

            else if (data["user_id"] == 77023354 && data["status"] == "approved"){
                console.log("Retiros para el usuario 77023354");
                response.write(JSON.stringify({"paging":{"total":4,"limit":30,"offset":0},"results":[{"id":701785395,"user_id":77023354,"site_id":"MLV","status":"approved","status_detail":"approved","amount":9776,"fee":0,"currency_id":"VEF","bank_account":{"alias":"manuel ordonez ","holder":"manuel ordonez ","type":"savings_account","number":"01160172360194213188","branch":null,"bank_id":"0116","identification":{"type":"C.I.","number":"V18281383"}},"payer_bank":"bancoven","method":null,"ow_operation_id":831489991,"date_confirmed":null,"date_created":"2014-08-27T19:07:16.000-04:00","last_modified":"2014-09-01T13:13:49.000-04:00"},{"id":701774390,"user_id":77023354,"site_id":"MLV","status":"approved","status_detail":"approved","amount":141,"fee":0,"currency_id":"VEF","bank_account":{"alias":"manuel ordonez ","holder":"manuel ordonez ","type":"savings_account","number":"01160172360194213188","branch":null,"bank_id":"0116","identification":{"type":"C.I.","number":"V18281383"}},"payer_bank":"bancoven","method":null,"ow_operation_id":831302100,"date_confirmed":null,"date_created":"2014-08-27T09:05:15.000-04:00","last_modified":"2014-09-01T11:58:09.000-04:00"},{"id":701719104,"user_id":77023354,"site_id":"MLV","status":"approved","status_detail":"approved","amount":4700,"fee":0,"currency_id":"VEF","bank_account":{"alias":"manuel ordonez ","holder":"manuel ordonez ","type":"savings_account","number":"01160172360194213188","branch":null,"bank_id":"0116","identification":{"type":"C.I.","number":"V18281383"}},"payer_bank":"bancoven","method":null,"ow_operation_id":828788339,"date_confirmed":null,"date_created":"2014-08-23T14:16:27.000-04:00","last_modified":"2014-08-27T12:52:34.000-04:00"},{"id":701609779,"user_id":77023354,"site_id":"MLV","status":"approved","status_detail":"approved","amount":4700,"fee":0,"currency_id":"VEF","bank_account":{"alias":"manuel ordonez ","holder":"manuel ordonez ","type":"savings_account","number":"01160172360194213188","branch":null,"bank_id":"0116","identification":{"type":"C.I.","number":"V18281383"}},"payer_bank":"bancoven","method":null,"ow_operation_id":825397617,"date_confirmed":null,"date_created":"2014-08-16T08:38:38.000-04:00","last_modified":"2014-08-21T11:01:30.000-04:00"}]}));
                response.end();
            }
            else{
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

                var result = [];

                result = {
                        "paging": {
                        "total": 1,
                        "limit": 30,
                        "offset": 0
                    },
                    "results": [
                        {
                            "id": 700683736,
                            "user_id": 151457264,
                            "site_id": "MLB",
                            "status": "approved",
                            "status_detail": "approved",
                            "amount": 240478.23,
                            "fee": 3,
                            "currency_id": "BRL",
                            "bank_account": {
                                "alias": "ASTROPAY BRASIL LTDA",
                                "holder": "ASTROPAY BRASIL LTDA",
                                "type": "checking_account",
                                "number": "24600/x",
                                "branch": "1518",
                                "bank_id": "001",
                                "identification": {
                                    "type": "CNPJ",
                                    "number": "16883876000163"
                                }
                            },
                            "payer_bank": "bradesco_withdraw",
                            "method": null,
                            "ow_operation_id": 793680074,
                            "date_confirmed": null,
                            "date_created": "2014-06-11T12:02:23.000-04:00",
                            "last_modified": "2014-06-16T20:30:55.000-04:00"
                        }
                    ]
                };

                response.write(JSON.stringify(result));
                response.end();
            }
        },
         putWithdrawals : function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({}));
            response.end();
        },
        withdrawSearch: function(request, response){

  response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var url_parts = url.parse(request.url,true);

            var id = url_parts.query.id
            var data = url.parse(request.url, true).query;
            var userId = url_parts.query.user_id
            var result = [];

            if (data["device_id"] == "5548fc87e4b08a18c6cf5507"){
                result = {"paging":{"offset":0,"limit":100,"total":3},"results":[{"id":907904193,"amount":300,"bank_account_alias":"jhonatan patanga moraes ","bank_account_branch":"0747","bank_account_id_number":"42883662835","bank_account_id_type":"CPF","client_id":"MercadoPago_Android","created_from":"1311377052931992","currency_id":"BRL","date_confirmed":"2016-01-28T15:21:03.000-0400","date_created":"2016-01-25T15:21:03.000-0400","device_id":"5548fc87e4b08a18c6cf5507","device_thm":"5548fc8sdoiij92j32ss","smart_thm":"regfd88iuj3ed732qw2qs","fee":3,"last_modified":"2016-01-25T15:36:39.000-0400","ow_operation_id":1794994230,"site_id":"MLB","status":"in_process","status_detail":"pending_admin","user_id":189684444,"w_version":1,"bank_account_bank_id":"341","bank_account_holder":"jhonatan patanga moraes ","bank_account_number":"04713/2","payer_bank":"itau","bank_account_type":"checking_account"},{"id":907904194,"amount":400,"bank_account_alias":"jhonatan patanga moraes ","bank_account_branch":"0747","bank_account_id_number":"42883662835","bank_account_id_type":"CPF","client_id":"MercadoPago_Android","created_from":"1311377052931992","currency_id":"BRL","date_confirmed":"2016-01-28T15:21:03.000-0400","date_created":"2016-01-25T15:21:03.000-0400","device_id":"5548fc87e4b08a18c6cf5507","fee":3,"last_modified":"2016-01-25T15:36:39.000-0400","ow_operation_id":1794994230,"site_id":"MLB","status":"in_process","status_detail":"pending_admin","user_id":189684444,"w_version":1,"bank_account_bank_id":"341","bank_account_holder":"jhonatan patanga moraes ","bank_account_number":"04713/2","payer_bank":"itau","bank_account_type":"checking_account"},{"id":907904195,"amount":500,"bank_account_alias":"jhonatan patanga moraes ","bank_account_branch":"0747","bank_account_id_number":"42883662835","bank_account_id_type":"CPF","client_id":"MercadoPago_Android","created_from":"1311377052931992","currency_id":"BRL","date_confirmed":"2016-01-28T15:21:03.000-0400","date_created":"2016-01-25T15:21:03.000-0400","device_id":"5548fc87e4b08a18c6cf5507","fee":3,"last_modified":"2016-01-25T15:36:39.000-0400","ow_operation_id":1794994230,"site_id":"MLB","status":"in_process","status_detail":"pending_admin","user_id":189684444,"w_version":1,"bank_account_bank_id":"341","bank_account_holder":"jhonatan patanga moraes ","bank_account_number":"04713/2","payer_bank":"itau","bank_account_type":"checking_account"}]};
                response.write(JSON.stringify(result));
                response.end();
                return;
            }
            if (data["device_id"] != null){
                response.write(JSON.stringify({"paging":{"offset":0,"limit":100,"total":1},"results":[{"id":901401283,"amount":2001.15,"bank_account_alias":"jose Luis Barrera Reyes","client_id":"front mlm","created_from":"8830886121439263","currency_id":"MXN","date_confirmed":"2016-01-21T09:56:12.000-0400","date_created":"2016-01-20T09:56:12.000-0400","device_id":"563eb094e4b0aec404c711c0","last_modified":"2016-01-21T07:47:53.000-0400","ow_operation_id":1789388984,"site_id":"MLM","status":"in_process","status_detail":"pending_bank","user_id":5648784,"w_version":2,"bank_account_bank_id":"036","bank_account_holder":"jose Luis Barrera Reyes","bank_account_number":"036180401301333228","payer_bank":"citi_banamex","bank_account_type":"checking_account"}]}));
                response.end();
                return;
            }

            if (id == 111){
                result = {paging:{total:0, limit:30, offset:0}, results:[]};
                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if (id == 333333){
                  result = {
                    "paging": {
                    "total": 1,
                    "limit": 30,
                    "offset": 0
                     },
                    "results": [
                        {
                            "id": 333333,
                            "user_id": 151457264,
                            "site_id": "MLB",
                            "status": "pending",
                            "status_detail": "pending",
                            "amount": 240478.23,
                            "fee": 3,
                            "currency_id": "BRL",
                            "bank_account_alias": "ASTROPAY BRASIL LTDA",
                            "bank_account_holder": "ASTROPAY BRASIL LTDA",
                            "bank_account_type": "checking_account",
                            "bank_account_number": "24600/x",
                            "bank_account_branch": "1518",
                            "bank_account_bank_id": "001",
                            "bank_account_id_type": "CPF",
                            "bank_account_id_number": "1212121212",
                            "payer_bank": "bradesco_withdraw",
                            "method": null,
                            "ow_operation_id": 793680074,
                            "date_confirmed": null,
                            "date_created": "2014-06-11T12:02:23.000-04:00",
                            "last_modified": "2014-06-16T20:30:55.000-04:00"
                        }
                    ]
                };

                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if (userId == 44444){
                result = {
                  "paging": {
                  "total": 1,
                  "limit": 30,
                  "offset": 0
                   },
                  "results": [
                      {
                          "id": 333333,
                          "user_id": 151457264,
                          "site_id": "MLB",
                          "status": "pending",
                          "status_detail": "pending",
                          "amount": 240478.23,
                          "fee": 3,
                          "currency_id": "BRL",
                          "bank_account_alias": "ASTROPAY BRASIL LTDA",
                          "bank_account_holder": "ASTROPAY BRASIL LTDA",
                          "bank_account_type": "checking_account",
                          "bank_account_number": "5555555/55",
                          "bank_account_branch": "123",
                          "bank_account_bank_id": "001",
                          "bank_account_id_type": "CPF",
                          "bank_account_id_number": "1212121212",
                          "payer_bank": "bradesco_withdraw",
                          "method": null,
                          "ow_operation_id": 793680074,
                          "date_confirmed": null,
                          "date_created": "2014-06-11T12:02:23.000-04:00",
                          "last_modified": "2014-06-16T20:30:55.000-04:00"
                      }
                  ]
              };

              response.write(JSON.stringify(result));
              response.end();
              return;
          }



            if (userId == 33333){
                result = {
                  "paging": {
                  "total": 1,
                  "limit": 30,
                  "offset": 0
                   },
                  "results": [
                      {
                          "id": 333333,
                          "user_id": 151457264,
                          "site_id": "MLB",
                          "status": "pending",
                          "status_detail": "pending",
                          "amount": 240478.23,
                          "fee": 3,
                          "currency_id": "BRL",
                          "bank_account_alias": "ASTROPAY BRASIL LTDA",
                          "bank_account_holder": "ASTROPAY BRASIL LTDA",
                          "bank_account_type": "checking_account",
                          "bank_account_number": "5555555/55",
                          "bank_account_branch": "123",
                          "bank_account_bank_id": "001",
                          "bank_account_id_type": "CPF",
                          "bank_account_id_number": "1212121212",
                          "payer_bank": "bradesco_withdraw",
                          "method": null,
                          "ow_operation_id": 793680074,
                          "date_confirmed": null,
                          "date_created": "2014-06-11T12:02:23.000-04:00",
                          "last_modified": "2014-06-16T20:30:55.000-04:00"
                      }
                  ]

              };

              response.write(JSON.stringify(result));
              response.end();
              return;
          }

            if (userId == 12345){
                result = {
                  "paging": {
                  "total": 1,
                  "limit": 30,
                  "offset": 0
                   },
                  "results": [
                      {
                          "id": 333333,
                          "user_id": 151457264,
                          "site_id": "MLB",
                          "status": "pending",
                          "status_detail": "pending",
                          "amount": 240478.23,
                          "fee": 3,
                          "currency_id": "BRL",
                          "bank_account_alias": "ASTROPAY BRASIL LTDA",
                          "bank_account_holder": "ASTROPAY BRASIL LTDA",
                          "bank_account_type": "checking_account",
                          "bank_account_number": "123456",
                          "bank_account_branch": "123",
                          "bank_account_bank_id": "001",
                          "bank_account_id_type": "CPF",
                          "bank_account_id_number": "1212121212",
                          "payer_bank": "bradesco_withdraw",
                          "method": null,
                          "ow_operation_id": 793680074,
                          "date_confirmed": null,
                          "date_created": "2014-06-11T12:02:23.000-04:00",
                          "last_modified": "2014-06-16T20:30:55.000-04:00"
                      }
                  ]
              };

              response.write(JSON.stringify(result));
              response.end();
              return;
          }

            if (userId == 11111){
                  result = {
                    "paging": {
                    "total": 1,
                    "limit": 30,
                    "offset": 0
                     },
                    "results": [
                        {
                            "id": 333333,
                            "user_id": 151457264,
                            "site_id": "MLB",
                            "status": "pending",
                            "status_detail": "pending",
                            "amount": 240478.23,
                            "fee": 3,
                            "currency_id": "BRL",
                            "bank_account_alias": "ASTROPAY BRASIL LTDA",
                            "bank_account_holder": "ASTROPAY BRASIL LTDA",
                            "bank_account_type": "checking_account",
                            "bank_account_number": "5555555/55",
                            "bank_account_branch": "123",
                            "bank_account_bank_id": "001",
                            "bank_account_id_type": "CPF",
                            "bank_account_id_number": "1212121212",
                            "payer_bank": "bradesco_withdraw",
                            "method": null,
                            "ow_operation_id": 793680074,
                            "date_confirmed": null,
                            "date_created": "2014-06-11T12:02:23.000-04:00",
                            "last_modified": "2014-06-16T20:30:55.000-04:00"
                        }
                    ]
                };

                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if (userId == 151457264){
                result = {
                  "paging": {
                  "total": 1,
                  "limit": 30,
                  "offset": 0
                   },
                  "results": [
                      {
                          "id": 333333,
                          "user_id": 151457264,
                          "site_id": "MLB",
                          "status": "pending",
                          "status_detail": "pending",
                          "amount": 240478.23,
                          "fee": 3,
                          "currency_id": "BRL",
                          "bank_account_alias": "ASTROPAY BRASIL LTDA",
                          "bank_account_holder": "ASTROPAY BRASIL LTDA",
                          "bank_account_type": "checking_account",
                          "bank_account_number": "5555555/55",
                          "bank_account_branch": "123",
                          "bank_account_bank_id": "001",
                          "bank_account_id_type": "CPF",
                          "bank_account_id_number": "1212121212",
                          "payer_bank": "bradesco_withdraw",
                          "method": null,
                          "ow_operation_id": 793680074,
                          "date_confirmed": null,
                          "date_created": "2014-06-11T12:02:23.000-04:00",
                          "last_modified": "2014-06-16T20:30:55.000-04:00"
                      }
                  ]
              };

              response.write(JSON.stringify(result));
              response.end();
              return;
          }

            if (userId == 555666777){
                  result = {
                    "paging": {
                    "total": 1,
                    "limit": 30,
                    "offset": 0
                     },
                    "results": [
                                {
                                    "id": 333333,
                                    "user_id": 151457264,
                                    "site_id": "MLB",
                                    "status": "pending",
                                    "status_detail": "pending",
                                    "amount": 240478.23,
                                    "fee": 3,
                                    "currency_id": "BRL",
                                    "bank_account_alias": "ASTROPAY BRASIL LTDA",
                                    "bank_account_holder": "ASTROPAY BRASIL LTDA",
                                    "bank_account_type": "checking_account",
                                    "bank_account_number": "1111/11",
                                    "bank_account_branch": "123",
                                    "bank_account_bank_id": "001",
                                    "bank_account_id_type": "CPF",
                                    "bank_account_id_number": "1212121212",
                                    "payer_bank": "bradesco_withdraw",
                                    "method": null,
                                    "ow_operation_id": 793680074,
                                    "date_confirmed": null,
                                    "date_created": "2014-06-11T12:02:23.000-04:00",
                                    "last_modified": "2014-06-16T20:30:55.000-04:00"
                                },
                            {
                                "id": 333333,
                                "user_id": 151457264,
                                "site_id": "MLB",
                                "status": "pending",
                                "status_detail": "pending",
                                "amount": 240478.23,
                                "fee": 3,
                                "currency_id": "BRL",
                                "bank_account_alias": "ASTROPAY BRASIL LTDA",
                                "bank_account_holder": "ASTROPAY BRASIL LTDA",
                                "bank_account_type": "checking_account",
                                "bank_account_number": "22222/22",
                                "bank_account_branch": "122",
                                "bank_account_bank_id": "001",
                                "bank_account_id_type": "CPF",
                                "bank_account_id_number": "1212121212",
                                "payer_bank": "bradesco_withdraw",
                                "method": null,
                                "ow_operation_id": 793680074,
                                "date_confirmed": null,
                                "date_created": "2014-06-11T12:02:23.000-04:00",
                                "last_modified": "2014-06-16T20:30:55.000-04:00"
                            },
                                {
                                    "id": 333333,
                                    "user_id": 151457264,
                                    "site_id": "MLB",
                                    "status": "pending",
                                    "status_detail": "pending",
                                    "amount": 240478.23,
                                    "fee": 3,
                                    "currency_id": "BRL",
                                    "bank_account_alias": "ASTROPAY BRASIL LTDA",
                                    "bank_account_holder": "ASTROPAY BRASIL LTDA",
                                    "bank_account_type": "checking_account",
                                    "bank_account_id_number": "3333333/33",
                                    "bank_account_branch": "111",
                                    "bank_account_bank_id": "001",
                                    "bank_account_id_type": "CPF",
                                    "bank_account_id_number": "1212121212",
                                    "payer_bank": "bradesco_withdraw",
                                    "method": null,
                                    "ow_operation_id": 793680074,
                                    "date_confirmed": null,
                                    "date_created": "2014-06-11T12:02:23.000-04:00",
                                    "last_modified": "2014-06-16T20:30:55.000-04:00"
                                },
                                {
                                    "id": 333333,
                                    "user_id": 151457264,
                                    "site_id": "MLB",
                                    "status": "pending",
                                    "status_detail": "pending",
                                    "amount": 240478.23,
                                    "fee": 3,
                                    "currency_id": "BRL",
                                    "bank_account_alias": "ASTROPAY BRASIL LTDA",
                                    "bank_account_holder": "ASTROPAY BRASIL LTDA",
                                    "bank_account_type": "checking_account",
                                    "number": "444444/44",
                                    "bank_account_branch": "101",
                                    "bank_account_bank_id": "001",
                                    "bank_account_id_type": "CPF",
                                    "bank_account_id_number": "1212121212",
                                    "payer_bank": "bradesco_withdraw",
                                    "method": null,
                                    "ow_operation_id": 793680074,
                                    "date_confirmed": null,
                                    "date_created": "2014-06-11T12:02:23.000-04:00",
                                    "last_modified": "2014-06-16T20:30:55.000-04:00"
                                },
                        {
                            "id": 333333,
                            "user_id": 151457264,
                            "site_id": "MLB",
                            "status": "pending",
                            "status_detail": "pending",
                            "amount": 240478.23,
                            "fee": 3,
                            "currency_id": "BRL",
                            "bank_account_alias": "ASTROPAY BRASIL LTDA",
                            "bank_account_holder": "ASTROPAY BRASIL LTDA",
                            "bank_account_type": "checking_account",
                            "bank_account_number": "5555555/55",
                            "bank_account_branch": "123",
                            "bank_account_bank_id": "001",
                            "bank_account_id_type": "CPF",
                            "bank_account_id_number": "1212121212",

                            "payer_bank": "bradesco_withdraw",
                            "method": null,
                            "ow_operation_id": 793680074,
                            "date_confirmed": null,
                            "date_created": "2014-06-11T12:02:23.000-04:00",
                            "last_modified": "2014-06-16T20:30:55.000-04:00"
                        }
                    ]
                };

                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if (id == 444444){
                  result = {
                        "paging": {
                            "total": 0,
                            "limit": 30,
                            "offset": 0,
                        },
                        "results": []
                   }

                response.write(JSON.stringify(result));
                response.end();
                return;
            }


            result = {
                    "paging": {
                    "total": 1,
                    "limit": 30,
                    "offset": 0
                },
                "results": [
                    {
                        "id": 700683736,
                        "user_id": 151457264,
                        "site_id": "MLB",
                        "status": "approved",
                        "status_detail": "approved",
                        "amount": 240478.23,
                        "fee": 3,
                        "currency_id": "BRL",
                        "bank_account_alias": "ASTROPAY BRASIL LTDA",
                        "bank_account_holder": "ASTROPAY BRASIL LTDA",
                        "bank_account_type": "checking_account",
                        "bank_account_number": "24600/x",
                        "bank_account_branch": "1518",
                        "bank_account_bank_id": "001",
                        "bank_account_id_type": "CNPJ",
                        "bank_account_id_number": "16883876000163",
                        "payer_bank": "bradesco_withdraw",
                        "method": null,
                        "ow_operation_id": 793680074,
                        "date_confirmed": null,
                        "date_created": "2014-06-11T12:02:23.000-04:00",
                        "last_modified": "2014-06-16T20:30:55.000-04:00"
                    }
                ]
            };


            var data = url.parse(request.url, true).query;

            if (data["user_id"] == 143972023 && data["status"] == "approved"){
                console.log("Retiros para el usuario 143972023");
                response.write(JSON.stringify({"paging":{"total":2,"limit":30,"offset":0},"results":[{"id":701781540,"user_id":143972023,"site_id":"MLV","status":"approved","status_detail":"approved","amount":150,"fee":0,"currency_id":"VEF","bank_account_alias":"jognam gutierrez","bank_account_holder":"jognam gutierrez","bank_account_type":"checking_account","bank_account_number":"01750440130070971969","bank_account_branch":null,"bank_account_bank_id":"0175","bank_account_id_type":"C.I.","bank_account_id_number":"V19913147","payer_bank":"bancoven","method":null,"ow_operation_id":831576768,"date_confirmed":null,"date_created":"2014-08-27T15:52:41.000-04:00","last_modified":"2014-09-01T11:58:27.000-04:00"},{"id":701686620,"user_id":143972023,"site_id":"MLV","status":"approved","status_detail":"approved","amount":2350,"fee":0,"currency_id":"VEF","bank_account_alias":"jognam gutierrez","bank_account_holder":"jognam gutierrez","bank_account_type":"checking_account","bank_account_number":"01750440130070971969","bank_account_branch":null,"bank_account_bank_id":"0175","bank_account_id_type":"C.I.","bank_account_id_number":"V19913147","payer_bank":"bancoven","method":null,"ow_operation_id":827871466,"date_confirmed":null,"date_created":"2014-08-21T11:43:05.000-04:00","last_modified":"2014-08-26T12:24:06.000-04:00"}]}));
                response.end();
            }

            if (data["user_id"] == 143972060 && data["status"] == "approved"){
                console.log("Retiros para el usuario 143972060");
                response.write(JSON.stringify({"paging":{"total":2,"limit":30,"offset":0},"results":[{"id":701781540,"user_id":143972060,"site_id":"MLV","status":"approved","status_detail":"approved","amount":150,"fee":0,"currency_id":"VEF","bank_account_alias":"jognam gutierrez","bank_account_holder":"jognam gutierrez","bank_account_type":"checking_account","bank_account_number":"01750440130070971969","bank_account_branch":null,"bank_account_bank_id":"0175","bank_account_id_type":"C.I.","bank_account_id_number":"V19913147","payer_bank":"bancoven","method":null,"ow_operation_id":831576768,"date_confirmed":null,"date_created":"2014-08-27T15:52:41.000-04:00","last_modified":"2014-09-01T11:58:27.000-04:00"},{"id":701686620,"user_id":143972060,"site_id":"MLV","status":"approved","status_detail":"approved","amount":2350,"fee":0,"currency_id":"VEF","bank_account_alias":"jognam gutierrez","bank_account_holder":"jognam gutierrez","bank_account_type":"checking_account","bank_account_number":"01750440130070971969","bank_account_branch":null,"bank_account_bank_id":"0175","bank_account_id_type":"C.I.","bank_account_id_number":"V19913147","payer_bank":"bancoven","method":null,"ow_operation_id":827871466,"date_confirmed":null,"date_created":"2014-08-21T11:43:05.000-04:00","last_modified":"2014-08-26T12:24:06.000-04:00"}]}));
                response.end();
            }

            if (data["user_id"] == 143972063 && data["status"] == "approved"){
                console.log("Retiros para el usuario 143972063");
                response.write(JSON.stringify({"paging":{"total":2,"limit":30,"offset":0},"results":[{"id":701781540,"user_id":143972063,"site_id":"MLV","status":"approved","status_detail":"approved","amount":150,"fee":0,"currency_id":"VEF","bank_account_alias":"jognam gutierrez","bank_account_holder":"jognam gutierrez","bank_account_type":"checking_account","bank_account_number":"01750440130070971969","bank_account_branch":null,"bank_account_bank_id":"0175","bank_account_id_type":"C.I.","bank_account_id_number":"V19913147","payer_bank":"bancoven","method":null,"ow_operation_id":831576768,"date_confirmed":null,"date_created":"2014-08-27T15:52:41.000-04:00","last_modified":"2014-09-01T11:58:27.000-04:00"},{"id":701686620,"user_id":143972063,"site_id":"MLV","status":"approved","status_detail":"approved","amount":2350,"fee":0,"currency_id":"VEF","bank_account_alias":"jognam gutierrez","bank_account_holder":"jognam gutierrez","bank_account_type":"checking_account","bank_account_number":"01750440130070971969","bank_account_branch":null,"bank_account_bank_id":"0175","bank_account_id_type":"C.I.","bank_account_id_number":"V19913147","payer_bank":"bancoven","method":null,"ow_operation_id":827871466,"date_confirmed":null,"date_created":"2014-08-21T11:43:05.000-04:00","last_modified":"2014-08-26T12:24:06.000-04:00"}]}));
                response.end();
            }

            else if (data["user_id"] == 77023354 && data["status"] == "approved"){
                console.log("Retiros para el usuario 77023354");
                response.write(JSON.stringify({"paging":{"total":4,"limit":30,"offset":0},"results":[{"id":701785395,"user_id":77023354,"site_id":"MLV","status":"approved","status_detail":"approved","amount":9776,"fee":0,"currency_id":"VEF","bank_account_alias":"manuel ordonez ","bank_account_holder":"manuel ordonez ","bank_account_type":"savings_account","bank_account_number":"01160172360194213188","bank_account_branch":null,"bank_account_bank_id":"0116","bank_account_id_type":"C.I.","bank_account_id_number":"V18281383","payer_bank":"bancoven","method":null,"ow_operation_id":831489991,"date_confirmed":null,"date_created":"2014-08-27T19:07:16.000-04:00","last_modified":"2014-09-01T13:13:49.000-04:00"},{"id":701774390,"user_id":77023354,"site_id":"MLV","status":"approved","status_detail":"approved","amount":141,"fee":0,"currency_id":"VEF","bank_account_alias":"manuel ordonez ","bank_account_holder":"manuel ordonez ","bank_account_type":"savings_account","bank_account_number":"01160172360194213188","bank_account_branch":null,"bank_account_bank_id":"0116","bank_account_id_type":"C.I.","bank_account_id_number":"V18281383","payer_bank":"bancoven","method":null,"ow_operation_id":831302100,"date_confirmed":null,"date_created":"2014-08-27T09:05:15.000-04:00","last_modified":"2014-09-01T11:58:09.000-04:00"},{"id":701719104,"user_id":77023354,"site_id":"MLV","status":"approved","status_detail":"approved","amount":4700,"fee":0,"currency_id":"VEF","bank_account_alias":"manuel ordonez ","bank_account_holder":"manuel ordonez ","bank_account_type":"savings_account","bank_account_number":"01160172360194213188","bank_account_branch":null,"bank_account_bank_id":"0116","bank_account_id_type":"C.I.","bank_account_id_number":"V18281383","payer_bank":"bancoven","method":null,"ow_operation_id":828788339,"date_confirmed":null,"date_created":"2014-08-23T14:16:27.000-04:00","last_modified":"2014-08-27T12:52:34.000-04:00"},{"id":701609779,"user_id":77023354,"site_id":"MLV","status":"approved","status_detail":"approved","amount":4700,"fee":0,"currency_id":"VEF","bank_account_alias":"manuel ordonez ","bank_account_holder":"manuel ordonez ","bank_account_type":"savings_account","bank_account_number":"01160172360194213188","bank_account_branch":null,"bank_account_bank_id":"0116","bank_account_id_type":"C.I.","bank_account_id_number":"V18281383","payer_bank":"bancoven","method":null,"ow_operation_id":825397617,"date_confirmed":null,"date_created":"2014-08-16T08:38:38.000-04:00","last_modified":"2014-08-21T11:01:30.000-04:00"}]}));
                response.end();
            }
            else{
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

                var result = [];

                result = {
                        "paging": {
                        "total": 1,
                        "limit": 30,
                        "offset": 0
                    },
                    "results": [
                        {
                            "id": 700683736,
                            "user_id": 151457264,
                            "site_id": "MLB",
                            "status": "approved",
                            "status_detail": "approved",
                            "amount": 240478.23,
                            "fee": 3,
                            "currency_id": "BRL",
                            "bank_account_alias": "ASTROPAY BRASIL LTDA",
                            "bank_account_holder": "ASTROPAY BRASIL LTDA",
                            "bank_account_type": "checking_account",
                            "bank_account_number": "24600/x",
                            "bank_account_branch": "1518",
                            "bank_account_bank_id": "001",
                            "bank_account_id_type": "CNPJ",
                            "bank_account_id_number": "16883876000163",
                            "payer_bank": "bradesco_withdraw",
                            "method": null,
                            "ow_operation_id": 793680074,
                            "date_confirmed": null,
                            "date_created": "2014-06-11T12:02:23.000-04:00",
                            "last_modified": "2014-06-16T20:30:55.000-04:00"
                        }
                    ]
                };

                response.write(JSON.stringify(result));

                response.end();
            }
        },
         withdrawIndex : function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({}));
            response.end();
        }
};

exports.search = withdrawController.search;
exports.ping = withdrawController.ping;
exports.searchDocs = withdrawController.searchDocs;
exports.searchWithdrawals = withdrawController.searchWithdrawals;
exports.searchBankAccounts = withdrawController.searchBankAccounts;
exports.putWithdrawals = withdrawController.putWithdrawals;
exports.withdrawSearch = withdrawController.withdrawSearch;
exports.withdrawIndex = withdrawController.withdrawIndex;

//Mappings
urlMapping.add ([{
     pattern: '^/withdraw/bank_accounts/search?',//limpia los recursos alamacenados en memoria de fraudlist
     action: {
         'GET':withdrawController.search
    }
 },{
     pattern: '^/withdrawals/bank_accounts/search?',//limpia los recursos alamacenados en memoria de fraudlist
     action: {
         'GET':withdrawController.searchBankAccounts
    }
 },{
     pattern: '^/withdraw/echo',//limpia los recursos alamacenados en memoria de fraudlist
     action: {
         'GET':withdrawController.ping
    }
 },{
     pattern: '^/fraud/withdraw/index',//limpia los recursos alamacenados en memoria de fraudlist
     action: {
         'POST':withdrawController.ping
    }
 },{
     pattern: '^/fraud/withdraw/ping',//limpia los recursos alamacenados en memoria de fraudlist
     action: {
         'GET':withdrawController.ping
    }
 },{
     pattern: '^/withdraw/bank_account_holders/search?',//limpia los recursos alamacenados en memoria de fraudlist
     action: {
         'GET':withdrawController.searchDocs
    }
 },{
     pattern: '^/withdrawals/search?',//limpia los recursos alamacenados en memoria de fraudlist
     action: {
         'GET':withdrawController.searchWithdrawals
    }
 },{
    pattern: '^/withdrawals/\\d+?',
    action: {
          'PUT':withdrawController.putWithdrawals
    }
},{
    pattern: '^/fraud/withdraw/search?',
    action: {
          'GET':withdrawController.withdrawSearch
    }
},{
    pattern: '^/fraud/withdraw/index',
    action: {
          'POST':withdrawController.withdrawIndex
    }
}]);
