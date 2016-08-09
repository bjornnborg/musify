var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var crmController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"UsersFullService: OK!"}));
            response.end();        
        },

        getVerificationStatus2 : function(request, response){
          var userId = request.url.match (/\/crm\/users\/(\d+)\/verification_status_plus/)[1];
          var verification = resourceManager.searchResource('user_verification', userId);
          if (verification) {
              jsonHandler.showOKResponse(             
                        {"user_id":verification.id,"verification_id":verification.verification_id, "comment":verification.comment}
                , response);
          } else {
             jsonHandler.showNotFoundResponse({
                    message:"verification not founded"
                }, response);
          }
        },
        
        getVerificationStatus : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            var userId = request.url.match (/\/crm\/users\/(\d+)\/verification_status/)[1];
            
            
            if(userId == 19777666){
                response.writeHead(404, {
                'Content-Type' : 'application/json; charset=utf-8'
                });
            
                response.write(JSON.stringify(              
                        {"message":"No data was found.","status":404,"error":"not_found","cause":[]}
                ));
            } else if(userId == 12345){
                response.write(JSON.stringify(              
                        {"user_id":userId,"verification_id":"VENDCONT"}
                ));
            }
            else if (userId == 11111){
            	response.write(JSON.stringify(              
                        {"user_id":userId,"verification_id":"COMPCONT"}
                ));
            }
            else if (userId == 22222){
                response.write(JSON.stringify(              
                        {"user_id":userId,"verification_id":"VENDCONT"}
                ));
            }
            else if (userId == 33333){
                response.write(JSON.stringify(              
                        {"user_id":userId,"verification_id":"DUP_PERM"}
                ));
            }
            else if (userId == 44444){
                response.write(JSON.stringify(              
                        {"user_id":userId,"verification_id":"PREV_INHAB_PERM"}
                ));
            }
            else if (userId == 65076289){
                response.write(JSON.stringify(              
                        {"user_id":userId,"verification_id":"VENDCONT"}
                ));
            }
            else if (userId == 55555135){
                response.write(JSON.stringify(              
                        {"user_id":userId,"verification_id":"MOD_INHAB_PERM"}
                ));
            }
            else if ((userId == 160511601)||(userId == 197673458)){
                response.write(JSON.stringify(              
                        {"user_id":userId,"verification_id":null}
                ));
            }
            else{

                var verification = resourceManager.searchResource('user_verification', userId);
                var verifId = "MP_CHARGEBACK";
                var comment = "none";
                if (verification != null) {
                    verifId = verification.verification_id;
                    comment = verification.comment;
                }

                response.write(JSON.stringify(              
                        {"user_id":userId,"verification_id":verifId, "comment":comment}
                ));
            }
            response.end();
        },        
        getVerificationStatusHistory : function(request, response){
             response.writeHead(200, {
                 'Content-Type' : 'application/json; charset=utf-8'
             });
             
            var userId = request.url.match (/\/crm\/users\/(\d+)\/verification_status\/history/)[1];
             
            var today = new Date();
            
            if (userId == 11111){

                response.write(JSON.stringify(              

                        {
                               "data": [
                                   {
                                       "id": "COMPCONT",
                                       "reason": "OTRO",
                                       "comment": "error de estado",
                                       "date_created": today.toISOString(),
                                       "admin_id": 49247933,
                                       "user_status": "A",
                                       "type": "users_reinstatement"
                                   },
                                   {
                                       "id": "COMPCONT",
                                       "reason": "OTRO",
                                       "comment": "error de estado",
                                       "date_created": "2008-11-07T08:52:09.000-0400",
                                       "admin_id": 49247933,
                                       "user_status": "A",
                                       "type": "users_reinstatement"
                                   }
                               ],
                               "paging": {
                                   "total": 9,
                                   "offset": 0,
                                   "limit": 1
                               }
                           }


                ));
            }
            else if (userId == 22222){

                response.write(JSON.stringify(              

                        {
                               "data": [
                                   {
                                       "id": "VENDCONT",
                                       "reason": "OTRO",
                                       "comment": "error de estado",
                                       "date_created": today.toISOString(),
                                       "admin_id": 49247933,
                                       "user_status": "A",
                                       "type": "users_reinstatement"
                                   }
                               ],
                               "paging": {
                                   "total": 9,
                                   "offset": 0,
                                   "limit": 1
                               }
                           }


                ));
            }
            else if (userId == 33333){

                response.write(JSON.stringify(              

                        {
                               "data": [
                                   {
                                       "id": "DUP_PERM",
                                       "reason": "OTRO",
                                       "comment": "error de estado",
                                       "date_created": today.toISOString(),
                                       "admin_id": 49247933,
                                       "user_status": "A",
                                       "type": "users_reinstatement"
                                   }
                               ],
                               "paging": {
                                   "total": 9,
                                   "offset": 0,
                                   "limit": 1
                               }
                           }


                ));
            }
            else if (userId == 44444){
                response.write(JSON.stringify(              

                        {
                               "data": [
                                   {
                                       "id": "PREV_INHAB_PERM",
                                       "reason": "OTRO",
                                       "comment": "error de estado",
                                       "date_created": today.toISOString(),
                                       "admin_id": 49247933,
                                       "user_status": "A",
                                       "type": "users_reinstatement"
                                   }
                               ],
                               "paging": {
                                   "total": 9,
                                   "offset": 0,
                                   "limit": 1
                               }
                           }


                ));
            }
            else{
             response.write(JSON.stringify(              

                     {
                            "data": [
                                {
                                    "id": "VENDCONT",
                                    "reason": "OTRO",
                                    "comment": "error de estado",
                                    "date_created": today.toISOString(),
                                    "admin_id": 49247933,
                                    "user_status": "A",
                                    "type": "users_reinstatement"
                                }
                            ],
                            "paging": {
                                "total": 9,
                                "offset": 0,
                                "limit": 1
                            }
                        }


             ));
            }
             response.end();
        },
        getMpRestrictions : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            var userId = request.url.match (/\/crm\/users\/(\d+)\/mp_restrictions/)[1];
            
            
            
            
            response.write(JSON.stringify(              

                {
                    "data": [
                        {
                            "id": "MLAMONEY_IN_CALL",
                            "comments": "user test",
                            "date_created": "2013-01-28T14:58:41.000-0400",
                            "created_by": 4532423,
                            "profile": "PREVENCION",
                            "cause": "MONEY_IN_CALL"
                        },
                        {
                            "id": "MLAMONEY_IN_CALL",
                            "comments": "user test",
                            "date_created": "2013-01-28T14:58:41.000-0400",
                            "created_by": 65456,
                            "profile": "PREVENCION",
                            "cause": "MONEY_IN_CALL"
                        }
                    ]
                }


            ));
            response.end();
        },
        getMpRestrictionsHistory : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
                        
            response.write(JSON.stringify(              

                    {"paging":{"limit":20,"offset":0,"total":173},"results":[{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":90538866,"comments":" - testeQuitado automaticamente por remedy ya cumplido","date_created":"2015-03-31T16:01:44.000-04:00","date_removed":"2015-03-31T16:01:44.000-04:00","id":"MLBMP_CRUCE"},{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":90538866,"comments":"teste - teste","date_created":"2015-03-31T15:57:00.000-04:00","date_removed":"2015-03-31T16:01:21.000-04:00","id":"MLBMONEY_OUT_HI"},{"admin_cust_id_created":null,"admin_cust_id_last_modified":null,"comments":" - ","date_created":"2015-03-31T13:24:30.000-04:00","date_removed":"2015-03-31T14:30:09.000-04:00","id":"MLBFRAUDE_ML"},{"admin_cust_id_created":null,"admin_cust_id_last_modified":null,"comments":" - ","date_created":"2015-03-25T16:00:47.000-04:00","date_removed":"2015-03-27T16:25:17.000-04:00","id":"MLBFRAUDE_ML"},{"admin_cust_id_created":null,"admin_cust_id_last_modified":null,"comments":" - ","date_created":"2015-03-25T15:30:41.000-04:00","date_removed":"2015-03-25T15:40:43.000-04:00","id":"MLBPREV_ML"},{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":90538866,"comments":"teste - teste","date_created":"2015-03-25T15:22:41.000-04:00","date_removed":"2015-03-25T15:28:39.000-04:00","id":"MLBMONEY_OUT_HI"},{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":90538866,"comments":" - testeQuitado automaticamente por remedy ya cumplido","date_created":"2015-03-25T15:22:05.000-04:00","date_removed":"2015-03-25T15:22:05.000-04:00","id":"MLBMONEY_IN_MID"},{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":90538866,"comments":"teste - teste","date_created":"2015-03-25T15:19:18.000-04:00","date_removed":"2015-03-25T15:21:55.000-04:00","id":"MLBMONEY_IN_TC"},{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":90538866,"comments":"teste - ","date_created":"2015-03-25T15:13:39.000-04:00","date_removed":"2015-03-25T15:18:55.000-04:00","id":"MLBFRAUDE_TC"},{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":90538866,"comments":"teste - teste","date_created":"2015-03-25T15:11:31.000-04:00","date_removed":"2015-03-25T15:13:31.000-04:00","id":"MLBMONEY_IN_TC"},{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":90538866,"comments":"teste - teste","date_created":"2015-03-25T15:06:35.000-04:00","date_removed":"2015-03-25T15:11:14.000-04:00","id":"MLBFRAUDE_CRUCE"},{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":90538866,"comments":"teste - teste","date_created":"2015-03-25T14:58:34.000-04:00","date_removed":"2015-03-25T15:06:19.000-04:00","id":"MLBFONDEO_DUDOSO"},{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":90538866,"comments":"teste - teste","date_created":"2015-03-25T14:51:51.000-04:00","date_removed":"2015-03-25T14:57:52.000-04:00","id":"MLBALERTA_DISPUTAS"},{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":90538866,"comments":"teste - teste","date_created":"2015-03-25T14:46:39.000-04:00","date_removed":"2015-03-25T14:51:27.000-04:00","id":"MLBFRD_BOLETO"},{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":90538866,"comments":" - testeQuitado automaticamente por remedy ya cumplido","date_created":"2015-03-25T14:45:50.000-04:00","date_removed":"2015-03-25T14:45:51.000-04:00","id":"MLBMP_CRUCE"},{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":90538866,"comments":"e - ","date_created":"2015-03-09T12:53:19.000-04:00","date_removed":"2015-03-09T13:16:16.000-04:00","id":"MLBTKO"},{"admin_cust_id_created":null,"admin_cust_id_last_modified":62867623,"comments":null,"date_created":"2015-01-21T08:09:22.000-04:00","date_removed":"2015-02-11T17:35:33.000-04:00","id":"MLBFRAUDE_ML"},{"admin_cust_id_created":null,"admin_cust_id_last_modified":null,"comments":" - ","date_created":"2014-12-12T09:32:11.000-04:00","date_removed":"2015-01-16T09:07:10.000-04:00","id":"MLBPREV_ML"},{"admin_cust_id_created":83470532,"admin_cust_id_last_modified":62867623,"comments":"teste","date_created":"2014-11-24T14:06:50.000-04:00","date_removed":"2014-12-10T18:09:03.000-04:00","id":"MLBRET_MP"},{"admin_cust_id_created":90538866,"admin_cust_id_last_modified":62867623,"comments":"teste","date_created":"2014-11-10T14:51:07.000-04:00","date_removed":"2014-12-10T18:08:27.000-04:00","id":"MLBFRAUDE_TC"}]}


            ));
            response.end();
        }
        ,
        getModifiedDataHistory : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            var userId = request.url.match (/\/crm\/users\/(\d+)\/history/)[1];
            
            console.log("userId es" + userId);
            
            if (userId==160511601){
                response.write(JSON.stringify({"user_id": 160511601,"current": {"nickname": "RADIUS","first_name": "Lucio Flavio","last_name": "da Silva","birthday": null,"doc_type": "CPF","doc_number": "21969910828","area_code1": null,"area_code2": null,"phone_number1": "(014) 2382186","phone_number2": null,"email": "marcelol@hack.com.br","pwd": "JS2***CEG00BH7979A96","reg_quest_id": null,"secret_answer": null,"default_address": {"address": "Fazenda Shangri-lá CP. 932","zip_code": "17050-990","city": "Baurú","state_name": "SAO PAULO","country_name": "Brasil"}},"history": []}));
                response.end();
            } 

            response.write(JSON.stringify( {"user_id":141296338,"current":{"nickname":"TT465819","first_name":"Test","last_name":"Test","birthday":null,"doc_type":"CPF","doc_number":"111111111111","area_code1":"01","area_code2":null,"phone_number1":"1111-3333","phone_number2":null,"email":"test_user_52867937@testuser.com","pwd":"JS2***97D6SIJHSG998I","reg_quest_id":null,"secret_answer":null,"default_address":{"address":"Test Address 123","zip_code":null,"city":"São Paulo","state_name":"SÃO PAULO","country_name":"Brasil"}},"history":[{"modified_date":"2013-12-30T16:54:31.000-0400","nickname":null,"first_name":null,"last_name":null,"birthday":null,"doc_type":null,"doc_number":null,"area_code1":null,"area_code2":null,"phone_number1":null,"phone_number2":null,"email":null,"pwd":null,"reg_quest_id":null,"secret_answer":null,"default_address":{"address":null,"zip_code":null,"city":"Sao Paulo","state_name":null,"country":null}},{"modified_date":"2013-09-09T09:57:50.000-0400","nickname":null,"first_name":null,"last_name":null,"birthday":null,"doc_type":null,"doc_number":null,"area_code1":null,"area_code2":null,"phone_number1":"1111-2222","phone_number2":null,"email":null,"pwd":null,"reg_quest_id":null,"secret_answer":null,"default_address":{"address":null,"zip_code":null,"city":null,"state_name":null,"country":null}},{"modified_date":"2013-09-09T09:43:25.000-0400","nickname":"TT465819","first_name":null,"last_name":null,"birthday":null,"doc_type":null,"doc_number":null,"area_code1":null,"area_code2":null,"phone_number1":"1111-1111","phone_number2":null,"email":null,"pwd":null,"reg_quest_id":null,"secret_answer":null,"default_address":{"address":null,"zip_code":null,"city":null,"state_name":null,"country":null}}]}
            ));
            response.end();
        },

        getRemedies  : function(request, response){
          response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            response.write(JSON.stringify(       
                    {
                      "data": [
                          {
                              "date_created": "2014-02-18T08:49:50.000-0400", 
                              "id": "MLA-ML_REMOVE"
                          }
                      ]
                    }
            ));
            response.end();
        },

        search : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            
            response.write(JSON.stringify(       
                    {
                        "paging": {
                            "offset": 0,
                            "limit": 100,
                            "total": 3
                        },
                        "results": [
                            {
                                "id": "MLA467980929"
                            },
                            {
                                "id": "MLA457757936"
                            },
                            {
                                "id": "MLA457581232"
                            }
                        ]
                    }
            ));
            response.end();
        },
        postVerificationStatus : function(request, response){

          jsonHandler.getContent(request, function(data) {

            
            var user = resourceManager.searchResource('user', data.user_id);

            var userId = data.user_id

            switch (userId) {
              case 172412926:
              case 172412927:
              case 172412928:
                response.writeHead(403, {'Content-Type' : 'application/json; charset=utf-8'});
                response.write(JSON.stringify({"message":"The caller is not authorized to access this resource","error":"forbidden","status":403,"cause":[]}));
                response.end();
                  break; 
              case 172412999:
                response.writeHead(400, {'Content-Type' : 'application/json; charset=utf-8'});
                response.write(JSON.stringify({"message":"verification_id already assigned to the user","error":"bad_request","status":400,"cause":[]}));
                response.end();
                break;
              default: 
                 if (user != null) {
                  user.status.site_status = "deactive";
                }

                resourceManager.saveResource('user_verification', {"id":data.user_id, "verification_id":data.verification_id, "comment":data.comment});

                response.writeHead(200, {
                          'Content-Type' : 'application/json; charset=utf-8'
                      });
                      
                response.write(JSON.stringify({"data":"OK"}));

                response.end();
                    break; 
            }
          });
        },


        putVerificationStatus : function(request, response){

          jsonHandler.getContent(request, function(data) {

            
            var user = resourceManager.searchResource('user', data.user_id);

            var userId = data.user_id

            if (userId == 172412999) {
              response.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});
              response.write(JSON.stringify({"id":userId}));
              response.end();
            }
                
           
          });
        },

        postRestrictions : function(request, response){

          jsonHandler.getContent(request, function(data) {

            var userId = data.user_id

            switch (userId) {
              case 172412926:
              case 172412927:
              case 172412928:
                response.writeHead(403, {'Content-Type' : 'application/json; charset=utf-8'});
                response.write(JSON.stringify({"message":"The caller is not authorized to access this resource","error":"forbidden","status":403,"cause":[]}));
                response.end();
                  break; 
              default: 
                resourceManager.saveResource('user_restrictions', {"id":data.user_id, "restriction_id":data.restriction_id, "comment":data.comment});

                response.writeHead(200, {
                        'Content-Type' : 'application/json; charset=utf-8'
                });
                    
                response.write(JSON.stringify({"data":"OK"}));

                response.end();
                  break; 
            }
           });          
        },

        postBLVerificationStatus : function(request, response){
                response.writeHead(201, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

                var qs = url.parse(request.url, true).query;

	        response.write(JSON.stringify({"user_id": 65160657, "verification_id": "INHNNA", "comment": "CUENTA 654564564654 está en blacklist"}));
                response.end();
            },


        changePayment : function(request, response){
                response.writeHead(201, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

                var qs = url.parse(request.url, true).query;

                response.write(JSON.stringify({}));
                response.end();
            }

};
exports.getMpRestrictions = crmController.getMpRestrictions
exports.getMpRestrictionsHistory = crmController.getMpRestrictionsHistory

exports.getVerificationStatus = crmController.getVerificationStatus;
exports.getVerificationStatus2 = crmController.getVerificationStatus2;

exports.getVerificationStatusHistory = crmController.getVerificationStatusHistory;

exports.postVerificationStatus = crmController.postVerificationStatus;
exports.postBLVerificationStatus = crmController.postBLVerificationStatus;
exports.ping = crmController.ping;
exports.getRemedies = crmController.getRemedies;
exports.getModifiedDataHistory = crmController.getModifiedDataHistory;
exports.changePayment = crmController.changePayment;
exports.postRestrictions = crmController.postRestrictions;



// Mappings
urlMapping.add ([
        {
            pattern: '^/crm/users/[0-9]+/mp_restrictions/history',
            action: {
                'GET':crmController.getMpRestrictionsHistory
            }
        },
        {
            pattern: '^/crm/users/[0-9]+/mp_restrictions',
            action: {
                'GET':crmController.getMpRestrictions
            }
        },        
        {
            pattern: '^/crm/users/[0-9]+/history',
            action: {
                'GET':crmController.getModifiedDataHistory
            }
        },{
            pattern: '^/crm/users/[0-9]+/mp_remedies',
            action: {
                'GET':crmController.getRemedies
            }
        },{
            pattern: '^/crm/users/[0-9]+/verification_status/history',
            action: {
                'GET':crmController.getVerificationStatusHistory
            }
        },{
            pattern: '^/crm/users/[0-9]+/verification_status_plus',
            action: {
                'GET':crmController.getVerificationStatus2
            }
        },{
            pattern: '^/crm/users/[0-9]+/verification_status',
            action: {
                'GET':crmController.getVerificationStatus
            }
        },{
        pattern: '^/crm/verification_status/',
        action: {
            'POST':crmController.postBLVerificationStatus
        }
    },{
            pattern: '^/crm/users_full/jalive',
            action: {
                'GET':crmController.ping
            }
        },{
            pattern: '^/crm/tickets/echo',
            action: {
                'GET':crmController.ping
            }
        },

        {
           pattern: '^/crm/verification_status',
           action: {
               'POST':crmController.postVerificationStatus,
               'PUT':crmController.putVerificationStatus
           }
        },
        {
          pattern: '^/crm/mp_restrictions',
          action: {
              'POST':crmController.postRestrictions
          }
        },
        {
        pattern: '^/crm/items/search?(\\w+)',
        action: {
            'GET':crmController.search
        }
    },

     {
        pattern: '^/crm/payments/.*',
        action: {
            'PUT':crmController.changePayment
        }
    }
        
        
        ]);
