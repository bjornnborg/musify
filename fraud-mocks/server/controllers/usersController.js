var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

//var retryUsShp = 0;

var usersController = {
        nn: function(request, response) {
            jsonHandler.getContent(request, function(data){
              console.log(JSON.stringify(data));
              jsonHandler.showOKResponse({'probability':0.99, 'profile':'MIDHIGH  '}, response);
            });
        },
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'probability':'pong', 'huf':'this'}));
            response.end();
        },
        getUserMarkAccountUniqueness: function(request, response){

          var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/users/(\\w+)/account_uniqueness_mark');
            uriRegExp.exec(pathname);
            var userId = RegExp.$1;
            var result

            if (userId == 773648573) {
               result = {"score_mark":{"device_scoring_id":"818be0259a8c19b49ef06ebe2e5905b4ced127241eed2ccb93fa20b73e338a0b793929f2b2e349c9262c1476464ec53f","device_id":"52fd029ee4b0f78939fcca9a","creation_date":"2014-02-13T14:00:38-0400","risk":"HIGH"},"has_mark":"yes"}
            }  else {
              result = {"has_mark":"no"}
            }

            response.write(JSON.stringify(result));
            response.end();

        },
        createUser : function(request, response){
            resourceManager.saveRequestResource('user', request, response);

            jsonHandler.getContent(request, function(user){

                if(user.email){
                    user.email = user.email.toLowerCase();
                }else{
                    user.email = new Date().getTime() + "@mail.com";
                }

                if(!user.nickname){
                    user.nickname = "NICK" + new Date().getTime();
                }

                resourceManager.saveResource('user', user);

                jsonHandler.showOKResponse({message:"ok"}, response);
            });
        },
        postRestrictions : function(request, response){
            //console.log("apply restriction: " + request)

            //resourceManager.saveRequestResource('restriction', request, response);

            var userId = request.url.match (/\/users\/(\d+)\/restrictions/)[1];
            var restFound = searchUserRestriction(userId);

            jsonHandler.getContent(request, function(restriction){

                if (restFound != null) {
                  restriction.id = restFound.id;
                  resourceManager.saveResource('restriction', restriction);
                  console.log("updateing restriction: " + JSON.stringify(restriction));
                } else {
                  resourceManager.saveResource('restriction', restriction);
                  console.log("apply restriction: " + JSON.stringify(restriction));
                }


                jsonHandler.showOKResponse({message:"ok"}, response);

            });
        },
        putRestrictions : function(request, response){

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/users/(\\w+)/restrictions/(\\w+)');
            uriRegExp.exec(pathname);
            var userId = RegExp.$1;
            var restrictionId = RegExp.$2;
            console.log("UserId:"+userId);
            console.log("restrictionId:"+restrictionId);

            result = {"msg":"The Comment was changed successfuly","status":200}
            response.write(JSON.stringify(result));
            response.end();

        },
        getBalanceInfo: function(request, response){

            var pathname = url.parse(request.url).pathname;
              var uriRegExp = new RegExp('/users/(\\w+)/mercadopago_account/balance');
              uriRegExp.exec(pathname);
              var userId = RegExp.$1;

              result = {"user_id":userId,"total_amount":280.72,"available_balance":280.72,"unavailable_balance":0,"unavailable_balance_by_reason":[{"reason":"dispute","amount":0},{"reason":"fraud","amount":0},{"reason":"ml_debt","amount":0},{"reason":"time_period","amount":0},{"reason":"restriction","amount":0}],"available_balance_by_transaction_type":[{"amount":280.72,"transaction_type":"transfer"},{"amount":280.72,"transaction_type":"withdrawal"},{"amount":280.72,"transaction_type":"payment"}],"currency_id":"ARS"}

              response.write(JSON.stringify(result));
              response.end();
          },

        getBacenInfo: function(request, response){

          var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/users/(\\w+)/bacen');
            uriRegExp.exec(pathname);
            var userId = RegExp.$1;
            var result = {"user_id":userId,"person":null,"company":null}

            if (userId == 13486851274) {
               result = {"company":{"name":"CanchasdeFutbolOsosPolares","legal_name":"PolarCanchaSRL","main_activity":"deportes","company_type":"SRL","establishment_date":"2014-08-08T15:25:32.000-04:00","commercial_address":{"state":"SanPablo","city":"Mininas","address":"Pele234","zip_code":"1234"},"cnpj":"2342342343","directors":[{"rol":"director","first_name":"Roberto","last_name":"Gomez","phone":"3452-4342","nationality":"Brasilero","person_mothers_name":"SusanaRamirez","person_birthdate":"2014-08-08T15:25:32.000-04:00","person_birthplace":"CapitalFederal","residential_address":{"state":"Neymar2344","city":"SanPablo","address":"Neymar2344","zip_code":"12234"},"commercial_address":{"state":"Neymar2344","city":"SanPablo","address":"Neymar2344","zip_code":"12234"},"identifications":{"cpf":{"number":"2-2323232-3","issued_by":"EstadodeSanPablo","issued_date":"2014-08-08T15:25:32.000-04:00"},"rg":{"type":"Type1","number":"2-2323232-3","issued_by":"EstadodeSanPablo","issued_date":"2014-08-08T15:25:32.000-04:00"}}},{"rol":"presidente","first_name":"Juan","last_name":"Perez","phone":"3452-4342","nationality":"Brasilero","person_mothers_name":"CarlaCharles","person_birthdate":"2014-08-08T16:25:32.000-04:00","person_birthplace":"SanPablo","residential_address":{"state":"Neymar2344","city":"SanPablo","address":"Neymar2344","zip_code":"12234"},"commercial_address":{"state":"Neymar2344","city":"SanPablo","address":"Neymar2344","zip_code":"12234"},"identifications":{"cpf":{"number":"2-2323232-3","issued_by":"EstadodeSanPablo","issued_date":"2014-08-08T17:25:32.000-04:00"},"rg":{"type":"Type1","number":"2-2323232-3","issued_by":"EstadodeSanPablo","issued_date":"2014-08-08T18:25:32.000-04:00"}}}]},"status":{"user_type":"simple_registration","required_action":"complete_registration"}}
            }

            if(userId == 1348685167){
              result = {"person":{"first_name":"Roberto","last_name":"Gomez","phone":"3452-4342","nationality":"Brasilero","person_mothers_name":"Susana Ramirez","person_birthdate":"2014-08-08T15:25:32.000-04:00","person_birthplace":"Capital Federal","residential_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"commercial_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"identifications":{"cpf":{"number":"09560748396","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T16:25:32.000-04:00"},"rg":{"type":"Type 1","number":"09560748394","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T17:25:32.000-04:00"}}},"status":{"user_type":"simple_registration","required_action":"complete_registration"}}
            }
            if(userId == 161471865){
              result = {"person":{"first_name":"Roberto","last_name":"Gomez","phone":"3452-4342","nationality":"Brasilero","person_mothers_name":"Susana Ramirez","person_birthdate":"2014-08-08T15:25:32.000-04:00","person_birthplace":"Capital Federal","residential_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"commercial_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"identifications":{"cpf":{"number":"09560748394","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T16:25:32.000-04:00"},"rg":{"type":"Type 1","number":"09560748394","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T17:25:32.000-04:00"}}},"status":{"user_type":"simple_registration","required_action":"complete_registration"}}
            }

            if (userId == 151457264 || userId == 167571986 || userId == 121357269 || userId == 121357270 || userId == 121357271 || userId == 161471719) {
               result = {"person":{"first_name":"Roberto","last_name":"Gomez","phone":"3452-4342","nationality":"Brasilero","person_mothers_name":"Susana Ramirez","person_birthdate":"2014-08-08T15:25:32.000-04:00","person_birthplace":"Capital Federal","residential_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"commercial_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"identifications":{"cpf":{"number":"2-2323232-3","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T16:25:32.000-04:00"},"rg":{"type":"Type 1","number":"2-2323232-3","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T17:25:32.000-04:00"}}},"status":{"user_type":"simple_registration","required_action":"complete_registration"}}
            }
            if (userId == 151457265) {
               result = {"company":{"name":"CanchasdeFutbolOsosPolares","legal_name":"PolarCanchaSRL","main_activity":"deportes","company_type":"SRL","establishment_date":"2014-08-08T15:25:32.000-04:00","commercial_address":{"state":"SanPablo","city":"Mininas","address":"Pele234","zip_code":"1234"},"cnpj":"234234-2343","directors":[{"rol":"director","first_name":"Roberto","last_name":"Gomez","phone":"3452-4342","nationality":"Brasilero","person_mothers_name":"SusanaRamirez","person_birthdate":"2014-08-08T15:25:32.000-04:00","person_birthplace":"CapitalFederal","residential_address":{"state":"Neymar2344","city":"SanPablo","address":"Neymar2344","zip_code":"12234"},"commercial_address":{"state":"Neymar2344","city":"SanPablo","address":"Neymar2344","zip_code":"12234"},"identifications":{"cpf":{"number":"2-2323232-3","issued_by":"EstadodeSanPablo","issued_date":"2014-08-08T15:25:32.000-04:00"},"rg":{"type":"Type1","number":"2-2323232-3","issued_by":"EstadodeSanPablo","issued_date":"2014-08-08T15:25:32.000-04:00"}}},{"rol":"presidente","first_name":"Juan","last_name":"Perez","phone":"3452-4342","nationality":"Brasilero","person_mothers_name":"CarlaCharles","person_birthdate":"2014-08-08T16:25:32.000-04:00","person_birthplace":"SanPablo","residential_address":{"state":"Neymar2344","city":"SanPablo","address":"Neymar2344","zip_code":"12234"},"commercial_address":{"state":"Neymar2344","city":"SanPablo","address":"Neymar2344","zip_code":"12234"},"identifications":{"cpf":{"number":"2-2323232-3","issued_by":"EstadodeSanPablo","issued_date":"2014-08-08T17:25:32.000-04:00"},"rg":{"type":"Type1","number":"2-2323232-3","issued_by":"EstadodeSanPablo","issued_date":"2014-08-08T18:25:32.000-04:00"}}}]},"status":{"user_type":"simple_registration","required_action":"complete_registration"}}
            }
            if (userId == 151457264) {
               result = {"person":{"first_name":"Roberto","last_name":"Gomez","phone":"3452-4342","nationality":"Brasilero","person_mothers_name":"Susana Ramirez","person_birthdate":"2014-08-08T15:25:32.000-04:00","person_birthplace":"Capital Federal","residential_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"commercial_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"identifications":{"cpf":{"number":"2-2323232-3","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T16:25:32.000-04:00"},"rg":{"type":"Type 1","number":"2-2323232-3","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T17:25:32.000-04:00"}}},"status":{"user_type":"simple_registration","required_action":"complete_registration"}}
            }
            if(userId == 555666777){
                // doc en peplist
                result = {"person":{"first_name":"Roberto","last_name":"Gomez","phone":"3452-4342","nationality":"Brasilero","person_mothers_name":"Susana Ramirez","person_birthdate":"2014-08-08T15:25:32.000-04:00","person_birthplace":"Capital Federal","residential_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"commercial_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"identifications":{"cpf":{"number":"15302922","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T16:25:32.000-04:00"},"rg":{"type":"Type 1","number":"2-2323232-3","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T17:25:32.000-04:00"}}},"status":{"user_type":"simple_registration","required_action":"complete_registration"}}
            }
             if(userId == 555666788){
                // doc en peplist
                result = {"person":{"first_name":"Roberto","last_name":"Gomez","phone":"3452-4342","nationality":"Brasilero","person_mothers_name":"Susana Ramirez","person_birthdate":"2014-08-08T15:25:32.000-04:00","person_birthplace":"Capital Federal","residential_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"commercial_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"identifications":{"cpf":{"number":"15302922","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T16:25:32.000-04:00"},"rg":{"type":"Type 1","number":"2-2323232-3","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T17:25:32.000-04:00"}}},"status":{"user_type":"simple_registration","required_action":"complete_registration"}}
            }

            if (userId == 151457269) {
                result = {"person":{"first_name":"Roberto","last_name":"Gomez","phone":"3452-4342","nationality":"Brasilero","person_mothers_name":"Susana Ramirez","person_birthdate":"2014-08-08T15:25:32.000-04:00","person_birthplace":"Capital Federal","residential_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"commercial_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"identifications":{"cpf":{"number":"222333","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T16:25:32.000-04:00"},"rg":{"type":"Type 1","number":"222333","issued_by":"Estado de San Pablo","issued_date":"2014-08-08T17:25:32.000-04:00"}}},"status":{"user_type":"simple_registration","required_action":"complete_registration"}}
             }

            if( userId == 147460417 || userId == 99555451) {
              result = {"user_id":userId,"person":null,"company":null,"status":{"required_action":"","user_type":"eventual"}}
            }

            if (userId == 443462138) {
               result = {"user_id":443462138,"person":{"first_name":"Mauro","last_name":"Beltzer","phone":"85 30233593","nationality":null,"person_mothers_name":null,"person_birthdate":"2015-03-26T14:49:51.000-04:00","person_birthplace":null,"residential_address":{"state":"BR-CE","city":"Fortaleza","address":"Rua Capit?o Melo 3883","zip_code":"60120220"},"commercial_address":{"state":"BR-CE","city":"Fortaleza","address":"Rua Capit?o Melo 3883","zip_code":"60120220"},"identifications":{"cpf":{"type":null,"number":"28050576000","issued_by":null,"issued_date":"2015-03-26T14:49:51.000-04:00"}}},"company":null,"status":{"required_action":"","user_type":"complete_registration"},"test_user":false}
            }

            if (userId == 443462140) {
               result = {"user_id":180037325,"person":null,"company":{"name":"Doce Película","legal_name":"DOCE PELICULA DO BRASIL","main_activity":null,"company_type":null,"establishment_date":null,"commercial_address":null,"cnpj":"20828556000188","directors":[]},"status":{"required_action":"complete_registration","user_type":"normal"},"test_user":false}
            }
            if (userId == 147474747) {
               result = {"user_id":2230037325,"person":null,"company":{"name":"Doce Película","legal_name":"DOCE PELICULA DO BRASIL","main_activity":null,"company_type":null,"establishment_date":null,"commercial_address":null,"cnpj":"20828556000188","directors":[]},"status":{"required_action":"complete_registration","user_type":"normal"},"test_user":false}
            }
            if (userId == 10700700) {
               result = {"user_id":152559247,"person":null,"company":{"name":null,"legal_name":"Aecio Rafael Junor de Souza","main_activity":null,"company_type":null,"establishment_date":null,"commercial_address":{"state":"BR-SP","city":"Cosmópolis","address":"AV Dr Moacir do Amaral 1593","zip_code":"13150000"},"cnpj":"19546174000182","directors":[{"rol":"director","first_name":"Roberto","last_name":"Gomez","phone":"3452-4342","nationality":"Brasilero","person_mothers_name":"Susana Ramirez","person_birthdate":"01/24/1980","person_birthplace":"Capital Federal","residential_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"commercial_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"identifications":{"cpf":{"number":"2-2323232-3","issued_by":"Estado de San Pablo","issued_date":"01/24/1980"},"rg":{"type":"Type 1","number":"2-2323232-3","issued_by":"Estado de San Pablo","issued_date":"01/24/1980"}}},{"rol":"presidente","first_name":"Juan","last_name":"Perez","phone":"3452-4342","nationality":"Brasilero","person_mothers_name":"Carla Charles","person_birthdate":"04/21/1983","person_birthplace":"San Pablo","residential_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"commercial_address":{"state":"Neymar 2344","city":"San Pablo","address":"Neymar 2344","zip_code":"12234"},"identifications":{"cpf":{"number":"2-2323232-3","issued_by":"Estado de San Pablo","issued_date":"01/24/1980"},"rg":{"type":"Type 1","number":"2-2323232-3","issued_by":"Estado de San Pablo","issued_date":"01/24/1980"}}}]},"status":{"required_action":"complete_registration","user_type":"simple_registration"},"test_user":false}
            }
            response.write(JSON.stringify(result));
            response.end();
        },
        putBacenInfo  : function(request, response){

            jsonHandler.showOKResponse({message:"ok"}, response);

        },
        getUser : function(request, response){
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/users/(\\w+)');
            uriRegExp.exec(pathname);
            var userId = RegExp.$1;
            console.log("UserId:"+userId);

            var start = new Date();
            if (userId == 667788 || userId == 130316377) {
                //Huf...quiero que ocurra timeout desde el cliente!
            }  else if (userId == 99999){
                wait("waiting for 500 mseg", 500, function () {
                    jsonHandler.showOKResponse({"id":99999, "start": start, "end": new Date()}, response);
                });

            }else {
              resourceManager.getResource('user', userId, response);
            }
        },

        getSAF : function(request, response){
          var userId = getUserId(request);
          console.log("userId:"+userId);
          if (userId == null) {
            jsonHandler.showBadRequestResponse(resp, response);
          }

          var saf = resourceManager.searchResource('saf', userId);
          if (saf) {
            jsonHandler.showOKResponse(saf, response);
          } else {
            saf = {"phone":null,"secret_question":null,"secondary_emails":[],"user_id":150784111,"validation_attempts":{"attempt_quantity":0,"attempts_exceeded":false,"expiration_time":0,"sms":{"total_sms_sent":0,"validation_exceeded":false,"attempt_quantity":0,"sent_quantity":0,"code":null,"last_updated":"2014-02-18T15:12:011Z"}}};
            jsonHandler.showOKResponse(saf, response);
          }
        },

        activateUser : function(request,response){
            jsonHandler.getContent(request, function(activateParams) {
                  if(activateParams.ccode == "INCORRECT"){
                      jsonHandler.showBadRequestResponse({
                          status : 'INCORRECT_CODE'
                      }, response);
                  }
                  if(activateParams.ccode == "ALREADY"){
                      jsonHandler.showNotModifiedResponse({
                          status : 'ALREADY_ACTIVE'
                      }, response);
                  }
                  if((activateParams.ccode != "ALREADY") &(activateParams.ccode != "INCORRECT")){
                     jsonHandler.showOKResponse({
                        status : 'ACTIVE',
                        user_id : 111
                    }, response);
                  }
            });
        },

        activate500User : function(request,response){
            jsonHandler.getContent(request, function(activateParams) {
               jsonHandler.showInternalServerErrorResponse({
                   status : "500_error_conection"
               },response);
            });
        },

        get500User : function(request,response){

               jsonHandler.showInternalServerErrorResponse({
                   status : "500_error_conection",
                   message:"Internal error fraud mocks"
               },response);

        },

        searchUser: function(request, response){
            var query = url.parse(request.url).query;
            var uriRegExp = new RegExp('(nickname|email)=(.+)');
            uriRegExp.exec(query);
            var userIdentifier = RegExp.$2;
            userIdentifier = userIdentifier.replace("%40","@");
            var user = searchUser(userIdentifier);
            if(!user){
                jsonHandler.showNotFoundResponse({
                    message:"user not founded"
                }, response);
                return;
            }

            jsonHandler.showOKResponse(user, response);
        },

        defaultAddress: function(request,response){
            var userId = getUserId(request);
            insertDefaultAddress(userId);
            resourceManager.getResource('default_address', userId, response);
         },

        updateUser: function(request, response){

            jsonHandler.getContent(request, function(updatedFields) {
  //              var pathname = url.parse(request.url).pathname;
  //              var uriRegExp = new RegExp('/users/(\\w+)');
  //              uriRegExp.exec(pathname);
  //              var userId = RegExp.$1;
  //              var user = resourceManager.searchResource('user', userId);
  //              for(field in updatedFields){
  //                user[field] = updatedFields[field];
  //              }
                console.log(JSON.stringify(updatedFields));
                jsonHandler.showOKResponse(updatedFields, response);
            });
  },

       getEmails: function(request, response){
    var userId = getUserId(request);
    var qs = url.parse(request.url, true).query;
    if ( qs["show_detail"] == "true") {


      if(userId==9998871)
      {
        response.writeHead(200, {
          'Content-Type' : 'text/plain; charset=utf-8'
        });
         response.write(JSON.stringify({
          "primary": "paraklim@yahoo.com",
          "alternatives": [
              {
                  "email_id": "paraklim@yahoo.com",
                  "creation_date": "2013-01-01T00:00:00.000-0300",
                  "last_modified_date": "2013-01-01T00:00:01.000-0300"
              },
              {
                  "email_id": "maurifur@yahoo.com",
                  "creation_date": "2013-01-02T12:30:00.000-0300",
                  "last_modified_date": "2013-01-03T00:00:01.000-0300"
              }
          ]
      }));
      }

      else if (userId==9998873){
        response.writeHead(404, {
          'Content-Type' : 'text/plain; charset=utf-8'
        });

      }

      else if (userId==9998874)
      {
          response.writeHead(200, {
            'Content-Type' : 'text/plain; charset=utf-8'
          });
           response.write(JSON.stringify({
            "primary": "otro@yahoo.com",
            "alternatives": [
                {
                    "email_id": "otro@yahoo.com",
                    "creation_date": "2013-01-01T00:00:00.000-0300",
                    "last_modified_date": "2013-01-01T00:00:01.000-0300"
                },
                {
                    "email_id": "otro2@yahoo.com",
                    "creation_date": "2013-01-02T12:30:00.000-0300",
                    "last_modified_date": "2013-01-03T00:00:01.000-0300"
                }
            ]
        }));
      }

      else if (userId==9998875)
      {
          response.writeHead(200, {
            'Content-Type' : 'text/plain; charset=utf-8'
          });
           response.write(JSON.stringify({
            "primary": "otro@yahoo.com",
            "alternatives": [
                {
                    "email_id": "suenia1@yahoo.com.br",
                    "creation_date": "2013-01-01T00:00:00.000-0300",
                    "last_modified_date": "2013-01-01T00:00:01.000-0300"
                },
                {
                    "email_id": "suenia1@yahoo.com.br",
                    "creation_date": "2013-01-02T12:30:00.000-0300",
                    "last_modified_date": "2013-01-03T00:00:01.000-0300"
                }
            ]
        }));
      }
      else if (userId==87654332)
      {
          response.writeHead(200, {
            'Content-Type' : 'text/plain; charset=utf-8'
          });
           response.write(JSON.stringify({
            "primary": "emailage@gmail.com",
            "alternatives": [
                {
                    "email_id": "emailage@gmail.com",
                    "creation_date": "2013-01-01T00:00:00.000-0300",
                    "last_modified_date": "2013-01-01T00:00:01.000-0300"
                }
            ]
        }));
      }
      else if (userId==87654333)
      {
          response.writeHead(200, {
            'Content-Type' : 'text/plain; charset=utf-8'
          });
           response.write(JSON.stringify({
            "primary": "emailage@yahoo.com",
            "alternatives": [
                {
                    "email_id": "emailage@yahoo.com",
                    "creation_date": "2013-01-01T00:00:00.000-0300",
                    "last_modified_date": "2013-01-01T00:00:01.000-0300"
                }
            ]
        }));
      }
      else if (userId==87654334)
      {
          response.writeHead(200, {
            'Content-Type' : 'text/plain; charset=utf-8'
          });
           response.write(JSON.stringify({
            "primary": "emailage1@yahoo.com",
            "alternatives": [
                {
                    "email_id": "emailage1@yahoo.com",
                    "creation_date": "2013-01-01T00:00:00.000-0300",
                    "last_modified_date": "2013-01-01T00:00:01.000-0300"
                }
            ]
        }));
      }
      else if (userId==87654335)
      {
          response.writeHead(200, {
            'Content-Type' : 'text/plain; charset=utf-8'
          });
           response.write(JSON.stringify({
            "primary": "emailage1@gmail.com",
            "alternatives": [
                {
                    "email_id": "emailage1@gmail.com",
                    "creation_date": "2013-01-01T00:00:00.000-0300",
                    "last_modified_date": "2013-01-01T00:00:01.000-0300"
                }
            ]
        }));
      }
      else if (userId==232255466){
          response.writeHead(200, {
              'Content-Type' : 'text/plain; charset=utf-8'
          });
          response.write(JSON.stringify({
            "primary": "otro@yahoo.com",
            "alternatives": [
                {
                    "email_id": "emailage1@yahoo.com",
                    "creation_date": "2013-01-01T00:00:00.000-0300",
                    "last_modified_date": "2013-01-01T00:00:01.000-0300"
                },
                {
                    "email_id": "emailage2@yahoo.com",
                    "creation_date": "2013-01-02T12:30:00.000-0300",
                    "last_modified_date": "2013-01-03T00:00:01.000-0300"
                }
            ]
          }));
      }  else
      {
      response.writeHead(200, {
        'Content-Type' : 'text/plain; charset=utf-8'
      });

         response.write(JSON.stringify({"primary":"test02@mail.com","alternatives":[{"email_id":"test01@mail.com","creation_date":"2013-01-01T00:00:00.000-0300","last_modified_date":"2013-01-01T00:00:01.000-0300"},{"email_id":"test02@mail.com","creation_date":"2013-01-02T12:30:00.000-0300","last_modified_date":"2013-01-03T00:00:01.000-0300"}]}));
      }
      response.end();
               }
  },
        getAddresses : function(request, response){

            // extract data from url
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/users/(\\w+)/addresses\?.*');
            uriRegExp.exec(pathname);

            var user_id = RegExp.$1;

            if(user_id == 555666777 && global.retryUsShp == 0){
                jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                global.retryUsShp++;
                return;
            }
            if(user_id == 555666788 && global.retryUsShp == 0){
                jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                global.retryUsShp++;
                return;
            }
            if(user_id == 499499){
                response.write(JSON.stringify([{"id":1148767,"user_id":499499,"contact":null,"phone":null,"address_line":"Capitan Busto 15 San Luis","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":null,"city":{"id":"TUxBQ0NBUDZjNWY4","name":"San Luis"},"state":{"id":"AR-D","name":"San Luis"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"","geolocation_type":"RANGE_INTERPOLATED","latitude":10.9876543,"longitude":12.1234567,"status":"active","date_created":"2013-08-31T19:03:33.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":null,"status":"closed"}}},{"id":114880302,"user_id":499499,"contact":null,"phone":null,"address_line":"Capitan Busto 15","floor":null,"apartment":null,"street_number":"15","street_name":"Capitan Busto","zip_code":"5700","city":{"id":"TUxBQ0NBUDZjNWY4","name":"San Luis"},"state":{"id":"AR-D","name":"San Luis"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":"TUxBUFNBTnM0ZTcz","name":"San Luis"},"city":{"id":"TUxBQ0NBUDZjNWY4","name":"San Luis"},"neighborhood":{"id":null,"name":null}},"types":["default_selling_address","shipping","billing"],"comment":"","geolocation_type":"APPROXIMATE","latitude":12.2323231,"longitude":11.4343435,"status":"active","date_created":"2013-08-31T19:01:46.000-04:00","normalized":true,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}},{"id":87322807,"user_id":499499,"contact":null,"phone":null,"address_line":"Areas  3751","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":"8174","city":{"id":null,"name":"Capital Federal - Saavedra"},"state":{"id":"AR-C","name":"Capital Federal"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"Frente DotBaires","geolocation_type":null,"latitude":null,"longitude":null,"status":"active","date_created":"2013-01-08T13:25:13.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}}]))
                response.end();
            }

            if(user_id == 500500){
                response.write(JSON.stringify([{"id": 1148767, "user_id": 500500, "contact": null, "phone": null, "address_line": "Capitan Busto 15 San Luis", "floor": null, "apartment": null, "street_number": null, "street_name": null, "zip_code": null, "city": {"id": "TUxBQ0NBUDZjNWY4", "name": "San Luis"}, "state": {"id": "AR-D", "name": "San Luis"}, "country": {"id": "AR", "name": "Argentina"}, "neighborhood": {"id": null, "name": null }, "municipality": {"id": null, "name": null }, "search_location": {"state": {"id": null, "name": null }, "city": {"id": null, "name": null }, "neighborhood": {"id": null, "name": null } }, "types": [], "comment": "", "geolocation_type": "RANGE_INTERPOLATED", "latitude": 34.1234567, "longitude": 58.7654321, "status": "active", "date_created": "2013-08-31T19:03:33.000-04:00", "normalized": false, "open_hours": {"on_holidays": {"hours": null, "status": "closed"}}}]))
                response.end();
            }

            if(user_id == 122333444 || user_id == 122333446 || user_id == 122333447 || user_id == 122333448 || user_id==32435460){
                response.write(JSON.stringify([]))
                response.end();
            }

            response.write(JSON.stringify([{"id":103812161,"user_id":user_id,"address_line":"RUA CAPITÃO CAMILO, 142","floor":null,"apartment":null,"zip_code":"999999","street_number":"123","city":{"id":"TUxCQ0FMVDRkYTg0","name":"Alto Rio Doce"},"state":{"id":"BR-MG","name":"Minas Gerais"},"country":{"id":"BR","name":"Brasil"},"neighborhood":{"id":null,"name":null},"municipality": {"id": null, "name": null },"types":["default_selling_address"],"comment":"","geolocation_type":null,"geolocation_type":"APPROXIMATE","latitude":24.2121221,"longitude":34.21312214,"status":"active","date_created":"2013-06-13T09:02:54.000-04:00"},{"id":3403526,"user_id":user_id,"address_line":"RUA CAPITÃO CAMILO 142   142   142  ","floor":null,"apartment":null,"zip_code":"999999","street_number":"321","city":{"id":"TUxCQ0FMVDRkYTg0","name":"Alto Rio Doce"},"state":{"id":"BR-MG","name":"Minas Gerais"},"country":{"id":"BR","name":"Brasil"},"neighborhood":{"id":null,"name":null},"types":[],"comment":"  CASA","geolocation_type":"APPROXIMATE","latitude":23.1221221,"longitude":22.1221222,"status":"active","date_created":"2010-08-07T17:20:00.000-04:00"}]));

           response.end();
        },

         getAddressesById : function(request, response){

            // extract data from url
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/addresses/(\\w+)\?.*');
            uriRegExp.exec(pathname);

            var id = RegExp.$1;


            if(id == 1148767){
                response.write(JSON.stringify({"id":1148767,"user_id":499499,"contact":null,"phone":null,"address_line":"Capitan Busto 15 San Luis","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":null,"city":{"id":"TUxBQ0NBUDZjNWY4","name":"San Luis"},"state":{"id":"AR-D","name":"San Luis"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"","geolocation_type":null,"latitude":null,"longitude":null,"status":"active","date_created":"2013-08-31T19:03:33.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":null,"status":"closed"}}}));
                response.end();
            }else if(id == 114880302){
                response.write(JSON.stringify({"id":114880302,"user_id":499499,"contact":null,"phone":null,"address_line":"Capitan Busto 15","floor":null,"apartment":null,"street_number":"15","street_name":"Capitan Busto","zip_code":"5700","city":{"id":"TUxBQ0NBUDZjNWY4","name":"San Luis"},"state":{"id":"AR-D","name":"San Luis"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":"TUxBUFNBTnM0ZTcz","name":"San Luis"},"city":{"id":"TUxBQ0NBUDZjNWY4","name":"San Luis"},"neighborhood":{"id":null,"name":null}},"types":["billing","shipping","default_selling_address"],"comment":"","geolocation_type":"RANGE_INTERPOLATED","latitude":34.5687512,"longitude":58.5075366,"status":"active","date_created":"2013-08-31T19:01:46.000-04:00","normalized":true,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}}));
                response.end();
            }else if(id == 87322807){
                response.write(JSON.stringify({"id":87322807,"user_id":499499,"contact":null,"phone":null,"address_line":"Areas  3751","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":"8174","city":{"id":null,"name":"Capital Federal - Saavedra"},"state":{"id":"AR-C","name":"Capital Federal"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"Frente DotBaires","geolocation_type":null,"latitude":null,"longitude":null,"status":"active","date_created":"2013-01-08T13:25:13.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}}));
                response.end();
            }else if(id == 827717312){
                response.write(JSON.stringify({"id":827717312,"user_id":499499,"contact":null,"phone":null,"address_line":"Areas  3751","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":"8174","city":{"id":null,"name":"Capital Federal - Saavedra"},"state":{"id":"AR-C","name":"Capital Federal"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"Frente DotBaires","geolocation_type":"RANGE_INTERPOLATED","latitude":34.4343434,"longitude":43.2323233,"status":"active","date_created":"2013-01-08T13:25:13.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}}));
                response.end();
            }else if(id == 827717313){
                response.write(JSON.stringify({"id":827717313,"user_id":500500,"contact":null,"phone":null,"address_line":"Areas  3751","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":"8174","city":{"id":null,"name":"Capital Federal - Saavedra"},"state":{"id":"AR-C","name":"Capital Federal"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"Frente DotBaires","geolocation_type":"RANGE_INTERPOLATED","latitude":34.4343435,"longitude":43.2323235,"status":"active","date_created":"2013-01-08T13:25:13.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}}));
                response.end();
            }else if(id == 136655111){
                response.write(JSON.stringify({"id":136655111,"user_id":500500,"contact":null,"phone":null,"address_line":"Areas  3751","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":"8174","city":{"id":null,"name":"Capital Federal - Saavedra"},"state":{"id":"AR-C","name":"Capital Federal"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"Frente DotBaires","geolocation_type":"RANGE_INTERPOLATED","latitude":34.4343111,"longitude":43.2323111,"status":"active","date_created":"2013-01-08T13:25:13.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}}));
                response.end();
            }else if(id == 136655222){
                response.write(JSON.stringify({"id":136655222,"user_id":500500,"contact":null,"phone":null,"address_line":"Areas  3751","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":"8174","city":{"id":null,"name":"Capital Federal - Saavedra"},"state":{"id":"AR-C","name":"Capital Federal"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"Frente DotBaires","geolocation_type":"RANGE_INTERPOLATED","latitude":34.4343222,"longitude":43.2323222,"status":"active","date_created":"2013-01-08T13:25:13.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}}));
                response.end();
            }else if(id == 136655333){
                response.write(JSON.stringify({"id":136655333,"user_id":500500,"contact":null,"phone":null,"address_line":"Areas  3751","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":"8174","city":{"id":null,"name":"Capital Federal - Saavedra"},"state":{"id":"AR-C","name":"Capital Federal"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"Frente DotBaires","geolocation_type":"RANGE_INTERPOLATED","latitude":34.4343333,"longitude":43.2323333,"status":"active","date_created":"2013-01-08T13:25:13.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}}));
                response.end();
            }else if(id == 136655444){
                response.write(JSON.stringify({"id":136655444,"user_id":500500,"contact":null,"phone":null,"address_line":"Areas  3751","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":"8174","city":{"id":null,"name":"Capital Federal - Saavedra"},"state":{"id":"AR-C","name":"Capital Federal"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"Frente DotBaires","geolocation_type":"RANGE_INTERPOLATED","latitude":34.4343444,"longitude":43.2323444,"status":"active","date_created":"2013-01-08T13:25:13.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}}));
                response.end();
            }else if(id == 136655555){
                response.write(JSON.stringify({"id":136655555,"user_id":500500,"contact":null,"phone":null,"address_line":"Areas  3751","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":"8174","city":{"id":null,"name":"Capital Federal - Saavedra"},"state":{"id":"AR-C","name":"Capital Federal"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"Frente DotBaires","geolocation_type":"RANGE_INTERPOLATED","latitude":34.4343555,"longitude":43.2323555,"status":"active","date_created":"2013-01-08T13:25:13.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}}));
                response.end();
            }else if(id == 136655666){
                response.write(JSON.stringify({"id":136655666,"user_id":500500,"contact":null,"phone":null,"address_line":"Areas  3751","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":"8174","city":{"id":null,"name":"Capital Federal - Saavedra"},"state":{"id":"AR-C","name":"Capital Federal"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"Frente DotBaires","geolocation_type":"RANGE_INTERPOLATED","latitude":34.4343666,"longitude":43.2323666,"status":"active","date_created":"2013-01-08T13:25:13.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}}));
                response.end();
            }else if(id == 136655777){
                response.write(JSON.stringify({"id":136655777,"user_id":500500,"contact":null,"phone":null,"address_line":"Areas  3751","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":"8174","city":{"id":null,"name":"Capital Federal - Saavedra"},"state":{"id":"AR-C","name":"Capital Federal"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"Frente DotBaires","geolocation_type":"RANGE_INTERPOLATED","latitude":34.4343777,"longitude":43.2323777,"status":"active","date_created":"2013-01-08T13:25:13.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}}));
                response.end();
            }else {
                response.write(JSON.stringify({"id":8888888,"user_id":499499,"contact":null,"phone":null,"address_line":"Areas  3751","floor":null,"apartment":null,"street_number":null,"street_name":null,"zip_code":"8174","city":{"id":null,"name":"Capital Federal - Saavedra"},"state":{"id":"AR-C","name":"Capital Federal"},"country":{"id":"AR","name":"Argentina"},"neighborhood":{"id":null,"name":null},"municipality":{"id":null,"name":null},"search_location":{"state":{"id":null,"name":null},"city":{"id":null,"name":null},"neighborhood":{"id":null,"name":null}},"types":[],"comment":"Frente DotBaires","geolocation_type":"RANGE_INTERPOLATED","latitude":23.4343344,"longitude":24.1212122,"status":"active","date_created":"2013-01-08T13:25:13.000-04:00","normalized":false,"open_hours":{"on_holidays":{"hours":[],"status":"closed"}}}));
                response.end();
          }
        },

      setImmediatePayment  : function(request, response){
        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('/internal/users/(\\w+)/immediate_payment/(\\w+)');
        uriRegExp.exec(pathname);
        var userId = RegExp.$1;
        console.log("UserId:"+userId);


        var user = resourceManager.searchResource('user', userId);
        if (user == null) {
          jsonHandler.showNotFoundResponse({"message":"user not found", "error":"not found"},response);
        } else {
          user.status.immediate_payment = true;

          jsonHandler.showOKResponse({message:"ok"}, response);
        }

      },

      setImmediatePaymentRestriction  : function(request, response){

          jsonHandler.showOKResponse({message:"ok"}, response);

      },

      deleteImmediatePayment  : function(request, response){
        console.log("asd");
        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('/internal/users/(\\w+)/immediate_payment/(\\w+)');
        uriRegExp.exec(pathname);
        var userId = RegExp.$1;
        console.log("UserId:"+userId);


        var user = resourceManager.searchResource('user', userId);
        if (user == null) {
          jsonHandler.showNotFoundResponse({"message":"user not found", "error":"not found"},response);
        } else {
          if (user.id == 199999992) {
            jsonHandler.showForbidenResponse({message:"User doesn't have the specified reason to remove"}, response);
          } else if(user.id == 4002 || user.id == 4004 || user.id == 4005){
              //Lo elimino:
              var resp = resourceManager.deleteResource('user',user.id,response);

              //Lo guardo modificado sin immediate_payment
              resourceManager.saveResource('user', {"id":user.id, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_SECONDSCORE", "first_name":"Natalia", "last_name":"SecondScore", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"naty.torres@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "immediate_payment": false,"list":{"allow":true, "codes": [],"immediate_payment": {"required": false, "reasons": []}},"buy":{"allow":true, "codes": [],"immediate_payment": {"required": false, "reasons": []}},"sell":{"allow":true, "codes":[], "immediate_payment": {"required": false, "reasons": []}}}});

          }else if(user.id == 4003 || user.id == 4004){
              //Lo elimino:
              var resp = resourceManager.deleteResource('user',user.id,response);

              //Lo guardo modificado con immediate_payment
              resourceManager.saveResource('user', {"id":user.id, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_SECONDSCORE", "first_name":"Natalia", "last_name":"SecondScore", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"naty.torres@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "immediate_payment": false,"list":{"allow":true, "codes": [],"immediate_payment": {"required": false, "reasons": []}},"buy":{"allow":true, "codes": [],"immediate_payment": {"required": false, "reasons": []}},"sell":{"allow":true, "codes":[], "immediate_payment": {"required": false, "reasons": []}}}});

          }else{
            user.status.immediate_payment = true;

            jsonHandler.showOKResponse({message:"ok"}, response);
          }
        }

      },

      getAllUsersIds : function(request, response){
            var paramsIds = url.parse(request.url, true).query;
            console.log("query: " + paramsIds);
            var ids = paramsIds["ids"].split(",");
            console.log("parseado Ids: " + ids);
            var users = new Array();
            var i = 0;
            for(i=0; i < ids.length;i++) {
                var id = ids[i];
                var user = getUserById(id);
                if (user != null) {
                    users.push(user);
                }
            }
            jsonHandler.showOKResponse(users, response);
      },

      getUserItems : function(request, response){

          // extract data from url
          var pathname = url.parse(request.url).pathname;
          var uriRegExp = new RegExp('^/users/(\\w+)/items/search*');
          uriRegExp.exec(pathname);

          var user_id = RegExp.$1;

          if (user_id == '123456'){
              response.write(JSON.stringify({"seller_id": "64388807", "query": null, "paging": {"total": 11, "offset": 0, "limit": 10 }, "results": ["MLM453492795", "MLM453492773","MLM453089719"], "orders": [{"id": "start_time_desc", "name": "Order by start time descending"} ], "filters": [{"id": "status", "name": "Status", "values": [{"id": "pending", "name": "Inactive items for debt or MercadoLibre policy violation", "results": 0 }, {"id": "not_yet_active", "name": "Items newly created or pending activation", "results": 0 }, {"id": "programmed", "name": "Items scheduled for future activation", "results": 0 }, {"id": "active", "name": "Active items", "results": 39 }, {"id": "paused", "name": "Paused Items", "results": 0 }, {"id": "closed", "name": "Closed Items", "results": 0 }, {"id": "deleted", "name": "Deleted items for fraud control", "results": 0 }, {"id": "banned", "name": "Banned items for fraud control", "results": 0 }, {"id": "suspended_by_user", "name": "Suspended by user items for fraud control", "results": 0 } ] }, {"id": "start_time", "name": "start_time Filter", "values": [{"id": "From", "value": "2014-06-24T20:00:00.000-04:00"}, {"id": "To", "value": "2014-06-30T20:00:00.000-04:00"} ] } ], "available_orders": [{"id": "stop_time_asc", "name": "Order by stop time ascending"}, {"id": "stop_time_desc", "name": "Order by stop time descending"}, {"id": "start_time_asc", "name": "Order by start time ascending"}, {"id": "start_time_desc", "name": "Order by start time descending"}, {"id": "available_quantity_asc", "name": "Order by available quantity ascending"}, {"id": "available_quantity_desc", "name": "Order by available quantity descending"}, {"id": "sold_quantity_asc", "name": "Order by sold quantity ascending"}, {"id": "sold_quantity_desc", "name": "Order by sold quantity descending"}, {"id": "price_asc", "name": "Order by price ascending"}, {"id": "price_desc", "name": "Order by price descending"} ], "available_filters": [{"id": "status", "name": "Status", "values": [{"id": "pending", "name": "Inactive items for debt or MercadoLibre policy violation", "results": 0 }, {"id": "not_yet_active", "name": "Items newly created or pending activation", "results": 0 }, {"id": "programmed", "name": "Items scheduled for future activation", "results": 0 }, {"id": "active", "name": "Active items", "results": 39 }, {"id": "paused", "name": "Paused Items", "results": 0 }, {"id": "closed", "name": "Closed Items", "results": 0 } ] }, {"id": "buying_mode", "name": "Buying Mode", "values": [{"id": "buy_it_now", "name": "Buy it now", "results": 39 }, {"id": "classified", "name": "Classified", "results": 0 }, {"id": "auction", "name": "Auction", "results": 0 } ] }, {"id": "listing_type_id", "name": "Listing type", "values": [{"id": "gold_pro", "name": "Gold proffesional", "results": 0 }, {"id": "gold_special", "name": "Gold special", "results": 0 }, {"id": "gold_premium", "name": "Gold premium", "results": 0 }, {"id": "gold", "name": "Gold", "results": 2 }, {"id": "silver", "name": "Silver", "results": 20 }, {"id": "bronze", "name": "Bronze", "results": 17 }, {"id": "free", "name": "Free", "results": 0 } ] }, {"id": "labels", "name": "Others", "values": [{"id": "few_available", "name": "Items with few availables", "results": 2 }, {"id": "with_bids", "name": "Items with bids", "results": 1 }, {"id": "without_bids", "name": "Items whithout bids", "results": 38 }, {"id": "accepts_mercadopago", "name": "Items with MercadoPago", "results": 39 }, {"id": "ending_soon", "name": "Items ending in 20 days or less", "results": 0 }, {"id": "with_mercadolibre_envios", "name": "Items with MercadoLibre Env&iacute;os", "results": 0 }, {"id": "without_mercadolibre_envios", "name": "Items without MercadoLibre Env&iacute;os", "results": 39 }, {"id": "with_low_quality_image", "name": "Items with low quality image", "results": 0 }, {"id": "with_free_shipping", "name": "Items with free shipping", "results": 0 }, {"id": "without_free_shipping", "name": "Items with free shipping", "results": 39 } ] } ] }));
              response.end();
          } else if (user_id == '167758909'){
              response.write(JSON.stringify({"seller_id":"156096288","query":null,"paging":{"total":0,"offset":0,"limit":50},"results":[],"orders":[{"id":"stop_time_asc","name":"Order by stop time ascending"}],"filters":[],"available_orders":[{"id":"stop_time_asc","name":"Order by stop time ascending"},{"id":"stop_time_desc","name":"Order by stop time descending"},{"id":"start_time_asc","name":"Order by start time ascending"},{"id":"start_time_desc","name":"Order by start time descending"},{"id":"available_quantity_asc","name":"Order by available quantity ascending"},{"id":"available_quantity_desc","name":"Order by available quantity descending"},{"id":"sold_quantity_asc","name":"Order by sold quantity ascending"},{"id":"sold_quantity_desc","name":"Order by sold quantity descending"},{"id":"price_asc","name":"Order by price ascending"},{"id":"price_desc","name":"Order by price descending"}],"available_filters":[{"id":"status","name":"Status","values":[{"id":"pending","name":"Inactive items for debt or MercadoLibre policy violation","results":0},{"id":"not_yet_active","name":"Items newly created or pending activation","results":0},{"id":"programmed","name":"Items scheduled for future activation","results":0},{"id":"active","name":"Active items","results":0},{"id":"paused","name":"Paused Items","results":0},{"id":"closed","name":"Closed Items","results":0}]},{"id":"buying_mode","name":"Buying Mode","values":[{"id":"buy_it_now","name":"Buy it now","results":0},{"id":"classified","name":"Classified","results":0},{"id":"auction","name":"Auction","results":0}]},{"id":"listing_type_id","name":"Listing type","values":[{"id":"gold_pro","name":"Gold proffesional","results":0},{"id":"gold_special","name":"Gold special","results":0},{"id":"gold_premium","name":"Gold premium","results":0},{"id":"gold","name":"Gold","results":0},{"id":"silver","name":"Silver","results":0},{"id":"bronze","name":"Bronze","results":0},{"id":"free","name":"Free","results":0}]},{"id":"labels","name":"Others","values":[{"id":"few_available","name":"Items with few availables","results":0},{"id":"with_bids","name":"Items with bids","results":0},{"id":"without_bids","name":"Items whithout bids","results":0},{"id":"accepts_mercadopago","name":"Items with MercadoPago","results":0},{"id":"ending_soon","name":"Items ending in 20 days or less","results":0},{"id":"with_mercadolibre_envios","name":"Items with MercadoLibre Envíos","results":0},{"id":"without_mercadolibre_envios","name":"Items without MercadoLibre Envíos","results":0},{"id":"with_low_quality_image","name":"Items with low quality image","results":0},{"id":"with_free_shipping","name":"Items with free shipping","results":0},{"id":"without_free_shipping","name":"Items with free shipping","results":0},{"id":"with_automatic_relist","name":"Items with automatic relist","results":0}]}]}));
              response.end();
          } else if (user_id == '176860318'){
              jsonHandler.showInternalServerErrorResponse({'message':"Internal Error"}, response);
          } else if (user_id == '176860319'){
              jsonHandler.showNotFoundResponse({'message':"Not Found"}, response);
          } else {
              response.write(JSON.stringify({"seller_id": "64388807", "query": null, "paging": {"total": 39, "offset": 0, "limit": 50 }, "results": ["MLM453492795", "MLM453492773", "MLM453492778", "MLM453492779", "MLM453492785", "MLM453492786", "MLM453492787", "MLM453492788", "MLM453492790", "MLM453492791", "MLM453425488", "MLM453419930", "MLM453410643", "MLM453265076", "MLM453179543", "MLM453089722", "MLM453089662", "MLM453089663", "MLM453089664", "MLM453089703", "MLM453089704", "MLM453089709", "MLM453089710", "MLM453089712", "MLM453089713", "MLM453089714", "MLM453089715", "MLM453089716", "MLM453089717", "MLM453089718", "MLM453089720", "MLM453089721", "MLM453089725", "MLM453089726", "MLM453089727", "MLM453089728", "MLM453089729", "MLM453089711", "MLM453089719"], "orders": [{"id": "start_time_desc", "name": "Order by start time descending"} ], "filters": [{"id": "status", "name": "Status", "values": [{"id": "pending", "name": "Inactive items for debt or MercadoLibre policy violation", "results": 0 }, {"id": "not_yet_active", "name": "Items newly created or pending activation", "results": 0 }, {"id": "programmed", "name": "Items scheduled for future activation", "results": 0 }, {"id": "active", "name": "Active items", "results": 39 }, {"id": "paused", "name": "Paused Items", "results": 0 }, {"id": "closed", "name": "Closed Items", "results": 0 }, {"id": "deleted", "name": "Deleted items for fraud control", "results": 0 }, {"id": "banned", "name": "Banned items for fraud control", "results": 0 }, {"id": "suspended_by_user", "name": "Suspended by user items for fraud control", "results": 0 } ] }, {"id": "start_time", "name": "start_time Filter", "values": [{"id": "From", "value": "2014-06-24T20:00:00.000-04:00"}, {"id": "To", "value": "2014-06-30T20:00:00.000-04:00"} ] } ], "available_orders": [{"id": "stop_time_asc", "name": "Order by stop time ascending"}, {"id": "stop_time_desc", "name": "Order by stop time descending"}, {"id": "start_time_asc", "name": "Order by start time ascending"}, {"id": "start_time_desc", "name": "Order by start time descending"}, {"id": "available_quantity_asc", "name": "Order by available quantity ascending"}, {"id": "available_quantity_desc", "name": "Order by available quantity descending"}, {"id": "sold_quantity_asc", "name": "Order by sold quantity ascending"}, {"id": "sold_quantity_desc", "name": "Order by sold quantity descending"}, {"id": "price_asc", "name": "Order by price ascending"}, {"id": "price_desc", "name": "Order by price descending"} ], "available_filters": [{"id": "status", "name": "Status", "values": [{"id": "pending", "name": "Inactive items for debt or MercadoLibre policy violation", "results": 0 }, {"id": "not_yet_active", "name": "Items newly created or pending activation", "results": 0 }, {"id": "programmed", "name": "Items scheduled for future activation", "results": 0 }, {"id": "active", "name": "Active items", "results": 39 }, {"id": "paused", "name": "Paused Items", "results": 0 }, {"id": "closed", "name": "Closed Items", "results": 0 } ] }, {"id": "buying_mode", "name": "Buying Mode", "values": [{"id": "buy_it_now", "name": "Buy it now", "results": 39 }, {"id": "classified", "name": "Classified", "results": 0 }, {"id": "auction", "name": "Auction", "results": 0 } ] }, {"id": "listing_type_id", "name": "Listing type", "values": [{"id": "gold_pro", "name": "Gold proffesional", "results": 0 }, {"id": "gold_special", "name": "Gold special", "results": 0 }, {"id": "gold_premium", "name": "Gold premium", "results": 0 }, {"id": "gold", "name": "Gold", "results": 2 }, {"id": "silver", "name": "Silver", "results": 20 }, {"id": "bronze", "name": "Bronze", "results": 17 }, {"id": "free", "name": "Free", "results": 0 } ] }, {"id": "labels", "name": "Others", "values": [{"id": "few_available", "name": "Items with few availables", "results": 2 }, {"id": "with_bids", "name": "Items with bids", "results": 1 }, {"id": "without_bids", "name": "Items whithout bids", "results": 38 }, {"id": "accepts_mercadopago", "name": "Items with MercadoPago", "results": 39 }, {"id": "ending_soon", "name": "Items ending in 20 days or less", "results": 0 }, {"id": "with_mercadolibre_envios", "name": "Items with MercadoLibre Env&iacute;os", "results": 0 }, {"id": "without_mercadolibre_envios", "name": "Items without MercadoLibre Env&iacute;os", "results": 39 }, {"id": "with_low_quality_image", "name": "Items with low quality image", "results": 0 }, {"id": "with_free_shipping", "name": "Items with free shipping", "results": 0 }, {"id": "without_free_shipping", "name": "Items with free shipping", "results": 39 } ] } ] }));
              response.end();
          }

      },

      getRestrictions : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var userId = request.url.match (/\/users\/(\d+)\/restrictions/)[1];

            //Buscamos primero la restricción en memoria
           /* var restriction = searchUserRestriction(userId);
            if (restriction != null) {
               response.write(JSON.stringify(restriction));
               return;
            }*/


            if(userId == 174985300){
                response.writeHead(404, {
                'Content-Type' : 'application/json; charset=utf-8'
                });

                response.write(JSON.stringify(
                        {"message":"No data was found.","status":404,"error":"not_found","cause":[]}
                ));
            }
            else if (userId == 175592326 || userId == 172780266){
                response.write(JSON.stringify(
                        {"level":0,"restrictions":[]}
                ));
            }
            else if(userId == 175441503){
                response.write(JSON.stringify(
                        {"level":1,"restrictions":[{"id":"PDU_MP","profile":"PDU_MP","creation_date":"2015-01-22T15:52:58.000-04:00","remedy_groups":[{"id":"202","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]},{"id":"MONEY_IN_TC","profile":"FRAUDE","creation_date":"2015-01-22T15:55:21.000-04:00","remedy_groups":[{"id":"607","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]},{"id":"MP_CRUCE","profile":"PREVENCION","creation_date":"2015-01-22T15:57:42.000-04:00","remedy_groups":[{"id":"723","remedies":[{"id":"CALL_CENTER","require_more_one":"N","status":"N"},{"id":"IV_ONLINE","require_more_one":"N","status":"N"}]}]},{"id":"RANDOM_CH","profile":"PREVENCION","creation_date":"2015-01-22T15:58:20.000-04:00","remedy_groups":[{"id":"962","remedies":[{"id":"VERIF_TC","require_more_one":"Y","status":"N"}]}]},{"id":"PSU","profile":"NO_VUELVE","creation_date":"2015-01-22T15:59:19.000-04:00","remedy_groups":[{"id":"1446","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]}]}
                ));
            }
            else if (userId == 175441471){
              response.write(JSON.stringify(
                        {"level":2,"restrictions":[{"id":"PDU_MP","profile":"PDU_MP","creation_date":"2015-01-22T15:52:58.000-04:00","remedy_groups":[{"id":"202","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]},{"id":"MONEY_IN_TC","profile":"FRAUDE","creation_date":"2015-01-22T15:55:21.000-04:00","remedy_groups":[{"id":"607","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]},{"id":"MP_CRUCE","profile":"PREVENCION","creation_date":"2015-01-22T15:57:42.000-04:00","remedy_groups":[{"id":"723","remedies":[{"id":"CALL_CENTER","require_more_one":"N","status":"N"},{"id":"IV_ONLINE","require_more_one":"N","status":"N"}]}]},{"id":"RANDOM_CH","profile":"PREVENCION","creation_date":"2015-01-22T15:58:20.000-04:00","remedy_groups":[{"id":"962","remedies":[{"id":"VERIF_TC","require_more_one":"Y","status":"N"}]}]},{"id":"PSU","profile":"NO_VUELVE","creation_date":"2015-01-22T15:59:19.000-04:00","remedy_groups":[{"id":"1446","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]}]}
                ));
            }
            else if (userId == 175446666){
                response.write(JSON.stringify(
                          {"level":2,"restrictions":[{"id":"PDU_MP","profile":"PDU_MP","creation_date":"2015-01-22T15:52:58.000-04:00","remedy_groups":[{"id":"202","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]},{"id":"MONEY_IN_TC","profile":"FRAUDE","creation_date":"2015-01-22T15:55:21.000-04:00","remedy_groups":[{"id":"607","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]},{"id":"MP_CRUCE","profile":"PREVENCION","creation_date":"2015-01-22T15:57:42.000-04:00","remedy_groups":[{"id":"723","remedies":[{"id":"CALL_CENTER","require_more_one":"N","status":"N"},{"id":"IV_ONLINE","require_more_one":"N","status":"N"}]}]},{"id":"RANDOM_CH","profile":"PREVENCION","creation_date":"2015-01-22T15:58:20.000-04:00","remedy_groups":[{"id":"962","remedies":[{"id":"VERIF_TC","require_more_one":"Y","status":"N"}]}]},{"id":"PSU","profile":"NO_VUELVE","creation_date":"2015-01-22T15:59:19.000-04:00","remedy_groups":[{"id":"1446","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]}]}
                  ));
              }
            else if (userId == 173109100){
              response.write(JSON.stringify(
                        {"level":2,"restrictions":[{"id":"PDU_MP","profile":"PDU_MP","creation_date":"2015-01-22T15:52:58.000-04:00","remedy_groups":[{"id":"202","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]}]}
                ));
            } else if (userId == 10002) {
                    response.write(JSON.stringify(
                    {"level":2,"restrictions":[{"id":"FRAUDE_ML","profile":"NO_VUELVE","creation_date":"2015-03-04T13:39:59.000-04:00","remedy_groups":[{"id":"1405","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]}]}
              ));

            } /*else if (userId == 10000007) {
                    response.write(JSON.stringify(
                    {"level":2,"restrictions":[{"id":"MONEY_IN_TC","profile":"NO_VUELVE","creation_date":"2015-03-04T13:39:59.000-04:00","remedy_groups":[{"id":"1405","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]}]}
              ));

            }*/ else if (userId == 10000008) {
                    response.write(JSON.stringify(
                    {"level":2,"restrictions":[{"id":"TKO","profile":"NO_VUELVE","creation_date":"2015-03-04T13:39:59.000-04:00","remedy_groups":[{"id":"1405","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]}]}
              ));

            } else if (userId == 147460417) {
                    response.write(JSON.stringify(
                    {"level":2,"restrictions":[{"id":"MONEY_IN_TC","profile":"FRAUDE","creation_date":"2016-06-24T09:56:43.000-04:00","mpr_cust_res_id":101275446,"remedy_groups":[{"id":"607","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]},{"id":"RET_MP","profile":"SOLO_RETIRO_MP","creation_date":"2016-06-24T10:15:35.000-04:00","mpr_cust_res_id":101275385,"remedy_groups":[{"id":"243","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]}]}
              ));

            }
             else {
              var restriction = searchUserRestriction(userId);
              if(!restriction){
                  jsonHandler.showOKResponse({
                      message:"User has not restriction"
                  }, response);
                  return;
              }
              else{
                jsonHandler.showOKResponse(restriction, response);
              }
            }
            response.end();
        },

        cleanRestrictions : function(request, response){
            resourceManager.cleanResources('restriction', response);
        },

        cleanUserRestrictions : function(request, response){

            var userId = request.url.match (/\/users\/(\d+)\/restrictions/)[1];

            if (userId == 123) {
                 response.writeHead(404, {
                  'Content-Type' : 'text/plain; charset=utf-8'
                });
                response.write(JSON.stringify(
                        {error:"The user with id 123 does not have the Restriction XXX"}
                ));
                response.end();
            } else  if (userId == 1243) {
                 response.writeHead(500, {
                  'Content-Type' : 'text/plain; charset=utf-8'
                });
                response.write(JSON.stringify(
                        {error:"The user with id 123 does not have the Restriction XXX"}
                ));
                response.end();
            } else  {
              resourceManager.cleanResources('restriction', response);
            }

        },

        getRestrictionLevel : function(request, response){
             response.writeHead(200, {
                 'Content-Type' : 'application/json; charset=utf-8'
             });

              console.log("Entro a getRestrictionLevel");
            var data = url.parse(request.url, true).query;

            console.log("El user_id recibido es " + data["caller.id"]);

            var userId = data["caller.id"];
            var paymentType = data["payment_type_id"];

            console.log("user_id: " + userId + " - paymentType: " + paymentType);
            var today = new Date();

            if (userId == 175592326){

                response.write(JSON.stringify(
                        {"level":0}
                ));
            }
            else if (userId == 175441503){

                response.write(JSON.stringify(
                        {"level":1}
                ));
            }
            else if (userId == 175441471 || userId == 173109100 || userId == 10000007){

                response.write(JSON.stringify(
                        {"level":2}
                ));
            } else if(userId == 172780265){
              response.write(JSON.stringify(
                        {"level":0}
                ));
            }
             else if(userId == 172780266 && paymentType == "credit_card"){
                console.log ("******** level 2 *****");
                response.write(JSON.stringify(
                                    {"level":2}
                            ));
            }
            else if(userId == 172780266 || userId == 172778380){
                          response.write(JSON.stringify(
                                    {"level":1}
                            ));
            } else if(userId == 172780268 || userId == 175441471 || userId == 173109100 || userId == 172778381){
                response.write(JSON.stringify(
                          {"level":1}
                  ));
            } else if(userId == 172778382 || userId == 172778383 ){
                response.writeHead(500, {
                   'Content-Type' : 'application/json; charset=utf-8'
               });
              response.write(JSON.stringify(
                        {"message":"internal server error"}
                ));

            } else if(userId == 172780267 && paymentType == "debit_card"){
                response.write(JSON.stringify(
                                    {"level":1}
                ));
            } else{
                response.write(JSON.stringify(
                        {"level":0}
                ));
            }
            response.end();
        },

        getAllRestrictions : function(request, response) {
          var restrictions = resourceManager.getResourcesByType('restriction');
          var all = [];
          for(var id in restrictions){
              var restriction = restrictions[id].value;
              //console.log("looping in restriction:" + JSON.stringify(restriction));
              try{
                  all.push(restriction);
              }catch(e){
                  console.log(e);
              }
          }

          response.write(JSON.stringify(all));
          response.end();
        }


};

function getUserId(request) {
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/users/(\\w+)');
    uriRegExp.exec(pathname);
    var userId = RegExp.$1;
    return userId;
}

function searchUser(userIdentifier){
    userIdentifier = userIdentifier.toLowerCase();
    var users = resourceManager.getResourcesByType('user');


    for(var id in users){
        var user = users[id].value;
        try{
            if( typeof(user) != 'undefined' &&
                (user.nickname != null && typeof(user.nickname) != 'undefined' && user.nickname.toLowerCase() == userIdentifier) ||
                (user.email != null && typeof(user.email) != 'undefined' && user.email.toLowerCase() == userIdentifier) ){
                return user;
            }
        }catch(e){
            console.log(e);
        }
    }


    return null;
}

function getUserById(id){
    return resourceManager.searchResource('user', id);
}

function searchUserRestriction(userIdentifier){
    userIdentifier = userIdentifier.toLowerCase();
    var restrictions = resourceManager.getResourcesByType('restriction');

    for(var id in restrictions){
        var restriction = restrictions[id].value;
        console.log("looping in restriction:" + JSON.stringify(restriction));
        try{
            if( typeof(restriction) != 'undefined' &&
                (restriction.cust_id != null && typeof(restriction.cust_id) != 'undefined' && restriction.cust_id == userIdentifier) ){
                console.log("searchUserRestriction found it. UserId:"+userIdentifier);
                return restriction;
            }
        }catch(e){
            console.log(e);
        }
    }
    return null;
}

function wait(msg, time, func) {
  setTimeout(function() {
    console.log(msg);
    func();
  }, time);
}

function insertDefaultAddress(userId){
    resourceManager.saveTemporalResource('default_address', userId, -1,
            {"id":userId,"country":"AR","state":"AR-J","classified_state":Math.random().toString(36).substring(7).toUpperCase(),"city":Math.random().toString(36).substring(5),"address":"Rodriguez Peña 2585 Pb°2","zip_code":null,
            "phone":{"area_code":"091","number":"0" + new Date().getTime() + "9"},
            "alternative_phone":{"area_code":"002","number":new Date().getTime()}});
}



resourceManager.saveResource('user', {"id":980474810,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":14317716,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":65160657,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":65160658,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

resourceManager.saveResource('user', {"id":32435460, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "EL_MARCIO", "first_name":"Marcio", "last_name":"Dos Santos", "country_id":"BR", "user_type":"normal", "site_id":"MLB", "points":1, "email":"elMarcioDoSantos@ml.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"CPF","number":"09663450886"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":987654, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "EL_MARCIO", "first_name":"Marcio", "last_name":"Dos Santos", "country_id":"BR", "user_type":"normal", "site_id":"MLU", "points":1, "email":"elMarcioDoSantos@ml.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"CPF","number":"09663450886"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

resourceManager.saveResource('user', {"id":100, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "EL_MARCIO", "first_name":"Marcio", "last_name":"Dos Santos", "country_id":"BR", "user_type":"normal", "site_id":"MLB", "points":1, "email":"elMarcioDoSantos@ml.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"CPF","number":"09663450886"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":101, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "EL_MARANDA", "first_name":"Marcio", "last_name":"Dos Santos", "country_id":"BR", "user_type":"normal", "site_id":"MLB", "points":1, "email":"elMarcioDoSantos@ml.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"CPF","number":"09663450886"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":56456456, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":65655663, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":65665634, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":65665635, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":65700670, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":1, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": ["internal_control","verif_status_pausa_fts"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":2, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_ACTIVE", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":null,"number":"15546565675","extension":"","verified":false},"identification":{"type":"DNI","number":"12457895"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":3, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PEPE_INACTIVE", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"aasasd@asd.com","phone":{"area_code":null,"number":"15546565645","extension":"","verified":false},"identification":{"type":"DNI","number":"16847965"}, "status":{"site_status":"deactive", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":4, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "ML_USER_PRUEBA", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":501, "email":"mercadolibre@asd.com","phone":{"area_code":null,"number":"15546545675","extension":"","verified":false},"identification":{"type":"DNI","number":"20456789"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":5, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PENDING", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":501, "email":"pending@asd.com","phone":{"area_code":null,"number":"15848768504","extension":"","verified":false},"identification":{"type":"DNI","number":"25748961"}, "status":{"site_status":"pending", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":6, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MLB_ACTIVE", "first_name":"Carlos", "last_name":"Guzman", "country_id":"BR", "user_type":"normal", "site_id":"MLB", "points":1, "email":"nicolas.suarez@mercadolibre.com","phone":{"area_code":null,"number":"15546565675","extension":"","verified":false},"identification":{"type":"DNI","number":"12457895"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":20,"nickname":"MPAGO_MLB","registration_date":"2003-12-02T08:45:34.000-04:00","first_name":"test","last_name":"test","country_id":"BR","email":"pagos2@mercadopago.com.ar","identification":{"type":"CPF","number":"0909090909091"},"phone":{"area_code":"1234","number":"5413","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":-3,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/MPAGO_MLB","shipping_modes":["custom","not_specified"],"seller_experience":"INTERMEDIATE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":32,"completed":0,"canceled":{"total":9,"paid":0},"unrated":{"total":23,"paid":0},"not_yet_rated":{"total":0,"paid":0,"units":0}}},"status":{"site_status":"active","list":{"allow":false,"codes":["identification_max_length_exceeded","identification_cpf_invalid_id_failed_digits_verification"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["identification_max_length_exceeded","identification_cpf_invalid_id_failed_digits_verification"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":30, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLM", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": ["internal_control","verif_status_pausa_fts"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":40, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLM", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": ["internal_control","verif_status_pausa_fts"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":50, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLM", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": ["internal_control","verif_status_pausa_fts"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":12345, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": ["internal_control","verif_status_pausa_fts"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":555666777, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLB", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": ["internal_control","verif_status_compcont"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":555666788, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLB", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": ["internal_control","verif_status_compcont"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});


resourceManager.saveResource('user', {"id":11111, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLB", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"deactive", "list":{"allow":true, "codes": ["internal_control","verif_status_compcont"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":22222, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"deactive", "list":{"allow":true, "codes": []},"buy":{"allow":true, "codes":["internal_control","verif_status_vendcont"]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":33333, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLB", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"deactive", "list":{"allow":true, "codes": []},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":["internal_control","verif_status_dup_perm"]}}});
resourceManager.saveResource('user', {"id":44444, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLB", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"deactive", "list":{"allow":true, "codes": []},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}, "billing":{"allow":true, "codes": ["internal_control","verif_status_prev_inhab_perm"]}}});
resourceManager.saveResource('user', {"id":348311,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MCO", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":348322,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MCO", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

resourceManager.saveResource('user', {"id":887347362,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"VE", "user_type":"normal", "site_id":"MLV", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});


resourceManager.saveResource('user', {"id":65076289, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": ["internal_control","verif_status_pausa_fts"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":99999, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": ["internal_control","verif_status_pausa_fts"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});


resourceManager.saveResource('user', {"id":87456723, "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('emails_detail', {"id":987654, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_SEMAPHORE", "first_name":"Fernando", "last_name":"Semaphore", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": ["internal_control","verif_status_pausa_fts"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});


resourceManager.saveResource('user', {"id":87456721,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos2", "last_name":"Guzman2", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg2.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458502","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648792"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

//User de Testeo
resourceManager.saveResource('user', {"id":126534680,"nickname":"TT000837","registration_date":"2012-10-03T15:19:30.000-04:00","country_id":"AR","address":{"state":"AR-C","city":null},"user_type":"normal","tags":["normal","test_user"],"logo":null,"points":0,"site_id":"MLA","permalink":"http://perfil.mercadolibre.com.ar/TT000837","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"status":{"site_status":"deactive"}});
resourceManager.saveResource('user', {"id":126534680,"nickname":"TT000837","registration_date":"2012-10-03T15:19:30.000-04:00","country_id":"AR","address":{"state":"AR-C","city":null},"user_type":"normal","tags":["normal","test_user"],"logo":null,"points":0,"site_id":"MLA","permalink":"http://perfil.mercadolibre.com.ar/TT000837","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"status":{"site_status":"deactive"}});
resourceManager.saveResource('user', {"id":126534681,"nickname":"TT000837","registration_date":"2012-10-03T15:19:30.000-04:00","country_id":"AR","address":{"state":"AR-C","city":null},"user_type":"normal","tags":["normal","test_user"],"logo":null,"points":0,"site_id":"MLA","permalink":"http://perfil.mercadolibre.com.ar/TT000837","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"status":{"site_status":"deactive"}});

resourceManager.saveResource('user', {"id":8745672131,"nickname":"TESTMOCK01","registration_date":"2012-10-03T15:19:30.000-04:00","country_id":"AR","address":{"state":"AR-C","city":null},"user_type":"normal","tags":["normal","test_user"],"logo":null,"points":0,"site_id":"MLA","permalink":"http://perfil.mercadolibre.com.ar/TESTMOCK01","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"status":{"site_status":"active"}});
resourceManager.saveResource('user', {"id":1458431091,"nickname":"TESTMOCK02","registration_date":"2012-10-03T15:19:30.000-04:00","country_id":"AR","address":{"state":"AR-C","city":null},"user_type":"normal","tags":["normal","test_user"],"logo":null,"points":0,"site_id":"MLA","permalink":"http://perfil.mercadolibre.com.ar/TESTMOCK01","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"status":{"site_status":"active"}});



//Test Providers
resourceManager.saveResource('user', {"id":980474811,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":980474813,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":65160620,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

// User con identity_verification
resourceManager.saveResource('user', {"id":773648573, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_SEMAPHORE", "first_name":"Fernando", "last_name":"Semaphore", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"buy":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":4004, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_SECONDSCORE", "first_name":"Natalia", "last_name":"SecondScore", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"naty.torres@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "immediate_payment": true, "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"buy":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes":[], "immediate_payment": {"required": true, "reasons": ["identity_verification"]}}}});

//User sin immediate_payment
resourceManager.saveResource('user', {"id":130616376, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_SECONDSCORE", "first_name":"Natalia", "last_name":"SecondScore", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"naty.torres@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "immediate_payment": true, "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"buy":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes":[], "immediate_payment": {"required": false, "reasons": []}}}});


resourceManager.saveResource('saf', {"id":150784111,"phone":null,"secret_question":null,"secondary_emails":[],"user_id":150784111,"validation_attempts":{"attempt_quantity":0,"attempts_exceeded":false,"expiration_time":0,"sms":{"total_sms_sent":0,"validation_exceeded":false,"attempt_quantity":0,"sent_quantity":0,"code":null,"last_updated":"2014-02-18T15:12:011Z"}}});
resourceManager.saveResource('saf', {"id":146339500,"phone":{"phone_number":"11974141274","carrier_code":"Vivo","country_code":"55","verified":true},"secret_question":null,"secondary_emails":[],"user_id":146339500,"validation_attempts":{"attempt_quantity":0,"attempts_exceeded":false,"expiration_time":0,"sms":{"total_sms_sent":1,"validation_exceeded":false,"attempt_quantity":0,"sent_quantity":1,"code":"2637597","last_updated":"2013-09-24T17:59:049Z","id":null,"sent_date":null}}});

resourceManager.saveResource('user', {"id":987654,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":65076289,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":987654,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

resourceManager.saveResource('user', {"id":123456,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MCO", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":6789,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MCO", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":998394,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MCO", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":348394,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MCO", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

resourceManager.saveResource('user', {"id":8888,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLC", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":7777,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLC", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

resourceManager.saveResource('user', {"id":159753223,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

resourceManager.saveResource('user', {"id":35789611,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":35789612,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});


resourceManager.saveResource('saf', {"id":654321,"phone":{"phone_number":"11974141274","carrier_code":"Vivo","country_code":"55","verified":true},"secret_question":null,"secondary_emails":[],"user_id":146339500,"validation_attempts":{"attempt_quantity":0,"attempts_exceeded":false,"expiration_time":0,"sms":{"total_sms_sent":1,"validation_exceeded":false,"attempt_quantity":0,"sent_quantity":1,"code":"2637597","last_updated":"2013-09-24T17:59:049Z","id":null,"sent_date":null}}});
resourceManager.saveResource('saf', {"id":123456,"phone":null,"secret_question":null,"secondary_emails":[],"user_id":146339500,"validation_attempts":{"attempt_quantity":0,"attempts_exceeded":false,"expiration_time":0,"sms":{"total_sms_sent":1,"validation_exceeded":false,"attempt_quantity":0,"sent_quantity":1,"code":"2637597","last_updated":"2013-09-24T17:59:049Z","id":null,"sent_date":null}}});
resourceManager.saveResource('user', {"id":654321,"tags": ["normal","test_user"],"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":10, "email":"sg.nicolas@hotmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('saf', {"id":18753456,"phone":null,"secret_question":null,"secondary_emails":[],"user_id":146339500,"validation_attempts":{"attempt_quantity":0,"attempts_exceeded":false,"expiration_time":0,"sms":{"total_sms_sent":1,"validation_exceeded":false,"attempt_quantity":0,"sent_quantity":1,"code":"2637597","last_updated":"2013-09-24T17:59:049Z","id":null,"sent_date":null}}});

resourceManager.saveResource('user',{"id":82702105,"nickname":"MFURLONG","registration_date":"2009-07-29T20:15:52.000-04:00","first_name":"Mauricio","last_name":"Furlong","country_id":"AR","email":"maurifur@gmail.com","identification":{"type":"DNI","number":"31518063"},"address":{"state":"AR-D","city":"San Luis","address":null,"zip_code":null},"phone":{"area_code":"0266","number":"424182","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal","user_info_verified"],"logo":null,"points":14,"site_id":"MLA","permalink":"http://perfil.mercadolibre.com.ar/MFURLONG","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":1,"completed":1,"canceled":{"total":0,"paid":0},"unrated":{"total":0,"paid":0},"not_yet_rated":{"total":0,"paid":0,"units":0}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":true,"user_type":"eventual","required_action":""},"credit":{"consumed":0,"credit_level_id":"MLA5"}});
resourceManager.saveResource('user', {"id":148530033,"nickname":"OCTAVIOFURLONG","registration_date":"2013-11-02T11:22:19.000-04:00","first_name":"Octavio","last_name":"Furlong","country_id":"AR","email":"ojfurlong@gmail.com","identification":{"type":null,"number":null},"address":{"state":"AR-D","city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"2664884058","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":1,"site_id":"MLA","permalink":"http://perfil.mercadolibre.com.ar/OCTAVIOFURLONG","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_min_length_not_satisfied","address_empty_city"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_min_length_not_satisfied","address_empty_city"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":true,"user_type":"eventual","required_action":""},"credit":{"consumed":0,"credit_level_id":"MLA5"}});

resourceManager.saveResource('user', {"id":107499056,"registration_date": "2000-09-05T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":105682821,"registration_date": "2000-09-06T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":99708233,"registration_date": "2000-09-07T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":14986431,"registration_date": "2000-09-08T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":111775401,"registration_date": "2000-09-09T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":143001605,"registration_date": "2000-09-10T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":33571487,"registration_date": "2000-09-11T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":85946751,"registration_date": "2000-09-12T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":24014384,"registration_date": "2000-09-13T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":53191660,"registration_date": "2000-09-14T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

resourceManager.saveResource('user', {"id":36848832,"registration_date": "2000-09-14T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"deactive", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":136958038,"registration_date": "2000-09-14T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"deactive", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

// Test de Geo
resourceManager.saveResource('user', {"id":499499,"registration_date": "2000-09-14T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"deactive", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":500500,"registration_date": "2000-09-14T12:00:00.000-04:00", "nickname": "TEST_PASS", "first_name":"Carlos", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"deactive", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":888888, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":199999992, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});

resourceManager.saveResource('user', {"id":124587416,"registration_date": "2000-09-14T12:00:00.000-04:00", "nickname": "TERRORIST", "first_name":"MOHAMMAD", "last_name":"Mina'i", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

resourceManager.saveResource('user', {"id":124587417,"registration_date": "2000-09-14T12:00:00.000-04:00", "nickname": "TERRORIST", "first_name":"Miguel de los Santos", "last_name":"Peña Torres", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sale_por_whitelist@grupoplaza.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes":[]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

//Mock para scoring de registracion aml
resourceManager.saveResource('user', {"id":167571986,"nickname":"JOSEENRIQUEBEATONSILVEIRA","registration_date":"2014-09-26T10:12:10.000-04:00","first_name":"Jose Enrique","last_name":"Beaton Silveira","country_id":"BR","email":"jbeaton138@gmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":null,"number":null,"extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/JOSEENRIQUEBEATONSILVEIRA","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":false,"codes":["phone_pending"],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":25596199,"nickname":"JOSEENRIQUEBEATONSILVEIRA","registration_date":"2014-09-26T10:12:10.000-04:00","first_name":"Jose Enrique","last_name":"Beaton Silveira","country_id":"BR","email":"jbeaton138@gmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":null,"number":null,"extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLA","permalink":"http://perfil.mercadolivre.com.br/JOSEENRIQUEBEATONSILVEIRA","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":false,"codes":["phone_pending"],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":25596190,"nickname":"JOSEENRIQUEBEATONSILVEIRA","registration_date":"2014-09-26T10:12:10.000-04:00","first_name":"Jose Enrique","last_name":"Beaton Silveira","country_id":"BR","email":"jbeaton138@gmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":null,"number":null,"extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":null,"permalink":"http://perfil.mercadolivre.com.br/JOSEENRIQUEBEATONSILVEIRA","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":false,"codes":["phone_pending"],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":84922231,"nickname":"JOSEENRIQUEBEATONSILVEIRA","registration_date":"2014-09-26T10:12:10.000-04:00","first_name":"Jose Enrique","last_name":"Beaton Silveira","country_id":"BR","email":"jbeaton138@gmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":null,"number":null,"extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLU","permalink":"http://perfil.mercadolivre.com.br/JOSEENRIQUEBEATONSILVEIRA","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":false,"codes":["phone_pending"],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":97452422,"nickname":"JOSEENRIQUEBEATONSILVEIRA","registration_date":"2014-09-26T10:12:10.000-04:00","first_name":"Jose Enrique","last_name":"Beaton Silveira","country_id":"BR","email":"jbeaton138@gmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":null,"number":null,"extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MFE","permalink":"http://perfil.mercadolivre.com.br/JOSEENRIQUEBEATONSILVEIRA","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":false,"codes":["phone_pending"],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});


resourceManager.saveResource('user', {"id":151457265,"nickname":"JOSEENRIQUEBEATONSILVEIRA","registration_date":"2014-09-26T10:12:10.000-04:00","first_name":"Jose Enrique","last_name":"Beaton Silveira","country_id":"BR","email":"jbeaton138@gmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":null,"number":null,"extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLA","permalink":"http://perfil.mercadolivre.com.br/JOSEENRIQUEBEATONSILVEIRA","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"user_type":"simple_registration","required_action":"complete_registration","site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":false,"codes":["phone_pending"],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":151457264,"nickname":"JOSEENRIQUEBEATONSILVEIRA","registration_date":"2014-09-26T10:12:10.000-04:00","first_name":"Jose Enrique","last_name":"Beaton Silveira","country_id":"BR","email":"jbeaton138@gmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":null,"number":null,"extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/JOSEENRIQUEBEATONSILVEIRA","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":false,"codes":["phone_pending"],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":121357269,"nickname":"JOSEENRIQUEBEATONSILVEIRA","registration_date":"2014-09-26T10:12:10.000-04:00","first_name":"Jose Enrique","last_name":"Beaton Silveira","country_id":"BR","email":"jbeaton138@gmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":null,"number":null,"extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/JOSEENRIQUEBEATONSILVEIRA","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":false,"codes":["phone_pending"],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":121357270,"nickname":"JOSEENRIQUEBEATONSILVEIRA","registration_date":"2014-09-26T10:12:10.000-04:00","first_name":"Jose Enrique","last_name":"Beaton Silveira","country_id":"BR","email":"jbeaton138@gmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":null,"number":null,"extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/JOSEENRIQUEBEATONSILVEIRA","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":false,"codes":["phone_pending"],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":121357271,"nickname":"JOSEENRIQUEBEATONSILVEIRA","registration_date":"2014-09-26T10:12:10.000-04:00","first_name":"Jose Enrique","last_name":"Beaton Silveira","country_id":"BR","email":"jbeaton138@gmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":null,"number":null,"extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/JOSEENRIQUEBEATONSILVEIRA","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":false,"codes":["phone_pending"],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","phone_pending","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});

//Mock for MultiScoringFunctionalTest
resourceManager.saveResource('user', {"id":222222, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":555555, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":777777, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":199999991, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":2222223, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":8888883, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":1234393, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":9999953, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":9999795, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":444513, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":123, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":1243, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_MSCO_IMMEDIATE_PAYMENT", "first_name":"Moreyra", "last_name":"Martin", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"active", "list":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["identity_verification"]}},"sell":{"allow":true, "codes": [],"immediate_payment": {"required": true, "reasons": ["internal_control_seller"]}},"buy":{"allow":true, "codes":[]}}});
//Users para wrapper MR
resourceManager.saveResource('user', {"id":143972033,"nickname":"CAMILAFERREIRA480","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":77023354,"nickname":"CAMILAFERREIRA481","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":77023355,"nickname":"CAMILAFERREIRA482","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLA","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":77023356,"nickname":"CAMILAFERREIRA483","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":143972034,"nickname":"CAMILAFERREIRA484","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":143972035,"nickname":"CAMILAFERREIRA484","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":232255466,"nickname":"EMAILAGE_SENDER","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":232255467,"nickname":"EMAILAGE_RECEIVER","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":10000004,"nickname":"CAMILAFERREIRA481","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":10000005,"nickname":"CAMILAFERREIRA481","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":10000006,"nickname":"CAMILAFERREIRA481","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"deactive","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":10000007,"nickname":"CAMILAFERREIRA481","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":["mercadopago_restrictions"],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":10000008,"nickname":"CAMILAFERREIRA481","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":["mercadopago_restrictions"],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});

resourceManager.saveResource('user', {"id":50000005,"nickname":"CAMILAFERREIRA481","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":50000009,"nickname":"CAMILAFERREIRA481","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});


resourceManager.saveResource('user', {"id":176856383,"nickname":"EMAILAGE_RECEIVER","registration_date":"2013-08-14T11:03:30.000-04:00","first_name":"camila","last_name":"ferreira","country_id":"BR","email":"myla.gtsgatinha@hotmail.com","identification":{"type":null,"number":null},"address":{"state":null,"city":null,"address":null,"zip_code":null},"phone":{"area_code":" ","number":"11958855372","extension":"","verified":false},"alternative_phone":{"area_code":"","number":"","extension":""},"user_type":"normal","tags":["normal"],"logo":null,"points":0,"site_id":"MLB","permalink":"http://perfil.mercadolivre.com.br/CAMILAFERREIRA480","shipping_modes":["custom","not_specified"],"seller_experience":"NEWBIE","seller_reputation":{"level_id":null,"power_seller_status":null,"transactions":{"period":"historic","total":0,"completed":0,"canceled":0,"ratings":{"positive":0,"negative":0,"neutral":0}}},"buyer_reputation":{"canceled_transactions":0,"transactions":{"period":"historic","total":null,"completed":null,"canceled":{"total":null,"paid":null},"unrated":{"total":null,"paid":null},"not_yet_rated":{"total":null,"paid":null,"units":null}}},"status":{"site_status":"active","list":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"],"immediate_payment":{"required":false,"reasons":[]}},"buy":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"sell":{"allow":true,"codes":[],"immediate_payment":{"required":false,"reasons":[]}},"billing":{"allow":false,"codes":["address_pending","identification_pending","identification_empty_or_invalid_doc_type","address_empty_city","address_empty_state"]},"mercadopago_tc_accepted":true,"mercadopago_account_type":"personal","mercadoenvios":"not_accepted","immediate_payment":false,"confirmed_email":false},"credit":{"consumed":0,"credit_level_id":"MLB5"}});
resourceManager.saveResource('user', {"id":2090, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"guest", "list":{"allow":true, "codes": ["internal_control","verif_status_pausa_fts"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});


resourceManager.saveResource('user', {"id":74242334, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"guest", "list":{"allow":true, "codes": ["internal_control","verif_status_pausa_fts"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":76641449, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@gmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"guest", "list":{"allow":true, "codes": ["internal_control","verif_status_pausa_fts"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":10102020,"nickname":"SERGIOSEP","last_name":"AraujoSepulveda","country_id":"BR","email":"sergiodesepulveda@gmail.com","identification":{"type":"CPF","number":10107746115},"status":200});
resourceManager.saveResource('user', {"id":10700700,"nickname":"AUSERTEST","last_name":"AraujoSepulveda","country_id":"BR","email":"sergiodeseveda@gmail.com","identification":{"type":"CNPJ","number":1012212345},"status":200});
resourceManager.saveResource('user', {"id":147474747,"nickname":"AUSERTEST","last_name":"AraujoSepulveda","country_id":"BR","email":"sergiodeseveda@gmail.com","identification":{"type":"CNPJ","number":8882212345},"status":200});

resourceManager.saveResource('user', {"id":172780266,"nickname":"AUSERTEST","last_name":"AraujoSepulveda","country_id":"BR","email":"172780266@gmail.com","identification":{"type":"CNPJ","number":8882212345},"status":200});
resourceManager.saveResource('user', {"id":172780265,"nickname":"AUSERTEST","last_name":"AraujoSepulveda","country_id":"BR","email":"172780265@gmail.com","identification":{"type":"CNPJ","number":8882212345},"status":200});
resourceManager.saveResource('user', {"id":175446666,"nickname":"AUSERTEST","last_name":"AraujoSepulveda","country_id":"BR","email":"173109100@gmail.com","identification":{"type":"CNPJ","number":8882212345},"status":200});


resourceManager.saveResource('user', {"id":167712698, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@hotmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"guest", "list":{"allow":true, "codes": ["internal_control","verif_status_pausa_fts"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});
resourceManager.saveResource('user', {"id":166817080, "registration_date": "2000-09-05T12:00:00.000-04:00","nickname": "TEST_PASS", "first_name":"PEPE", "last_name":"Guzman", "country_id":"AR", "user_type":"normal", "site_id":"MLA", "points":1, "email":"sg.nicolas@hotmail.com","phone":{"area_code":"011","number":"15848458504","extension":"6","verified":false},"identification":{"type":"DNI","number":"35648795"}, "status":{"site_status":"guest", "list":{"allow":true, "codes": ["internal_control","verif_status_pausa_fts"]},"buy":{"allow":true, "codes":[]},"sell":{"allow":true, "codes":[]}}});

resourceManager.saveResource('restriction', {"id":10167,"cust_id": 10000007,"level":2,"restrictions":[{"id":"MONEY_IN_TC","profile":"NO_VUELVE","creation_date":"2015-03-04T13:39:59.000-04:00","remedy_groups":[{"id":"1405","remedies":[{"id":"CONTACTO","require_more_one":"Y","status":"N"}]}]}]});


exports.defaultAddress = usersController.defaultAddress;
exports.activate500User = usersController.activate500User;
exports.createUser = usersController.createUser;
exports.activateUser = usersController.activateUser;
exports.getUser = usersController.getUser;
exports.searchUser = searchUser;
exports.getUserById = getUserById;
exports.findUser = usersController.searchUser;
exports.searchUser = usersController.searchUser;

exports.ping = usersController.ping;
exports.updateUser = usersController.updateUser;
exports.getEmails = usersController.getEmails;
exports.getAddresses = usersController.getAddresses;
exports.getAddressesById = usersController.getAddressesById;
exports.getUserItems = usersController.getUserItems;
exports.getSAF=usersController.getSAF;

exports.getUserMarkAccountUniqueness = usersController.getUserMarkAccountUniqueness
exports.getAllUsersIds = usersController.getAllUsersIds
exports.getBacenInfo = usersController.getBacenInfo
exports.getBacenInfo = usersController.getBalanceInfo

exports.putBacenInfo = usersController.putBacenInfo

exports.getRestrictionLevel = usersController.getRestrictionLevel;
exports.getRestrictions = usersController.getRestrictions;
exports.postRestrictions = usersController.postRestrictions;
exports.cleanRestrictions = usersController.cleanRestrictions;
exports.cleanUserRestrictions = usersController.cleanUserRestrictions;
exports.searchUserRestriction = searchUserRestriction;
exports.findUserRestriction = usersController.searchUserRestriction;
exports.getAllRestrictions = usersController.getAllRestrictions;


// Mappings
urlMapping.add ([
    {
    pattern: '/users/\\w+/account_uniqueness_mark',
    action: {
      'GET':usersController.getUserMarkAccountUniqueness
      }
    },
    {
      pattern: '^/users/(\\w+)/items/search*',
      action: {
        'GET':usersController.getUserItems
      }
    },
    {
        pattern: '^/users/[0-9]+/secondary_authentication_factors',
        action: {
            'GET':usersController.getSAF
        }
    },
    {
        pattern: '^/users/(\\w+)/emails$',

        action: {
            'GET':usersController.getEmails
        }
    },
    {
        pattern: '^/restclientping',

        action: {
            'GET':usersController.ping
        }
    },
    {
        pattern: '^/users/$',
        action: {
            'GET':usersController.ping
        }
    }, {
        pattern: '^/user/500$',
        action: {
            'POST':usersController.activate500User
        }
    }, {
        pattern: '^/users/500$',
        action: {
            'GET':usersController.get500User
        }
    }, {
        pattern: '^/users/activate$',
        action: {
            'POST':usersController.activateUser
        }
    }, {
        pattern: '^/users/(\\w+)/default_address$',
        action: {
            'GET':usersController.defaultAddress
        }
    }, {
        pattern: '^/users/search.*?$',
        action: {
            'GET':usersController.findUser
        }
    }, {
        pattern: '^/users/(\\w+)/addresses\?.*$',
        action: {
            'GET':usersController.getAddresses
        }
    }, {
        pattern: '^/users/(\\w+)/bacen\?.*$',
        action: {
            'GET':usersController.getBacenInfo,
            'PUT':usersController.putBacenInfo
        }
    }, {
        pattern: '^/users/(\\w+)/restrictions/immediate_payment/(\\w+)',
        action: {
            'PUT':usersController.setImmediatePaymentRestriction
        }
    }, {
        pattern: '^/users/[0-9]+/restrictions/search$',
        action: {
            'GET':usersController.getRestrictionLevel
        }
    }, {
        pattern: '^/users/[0-9]+/restrictions/(\\w+)',
        action: {
            'DELETE':usersController.cleanUserRestrictions,
            'PUT': usersController.putRestrictions
        }
    }, {
        pattern: '^/users/[0-9]+/restrictions',
        action: {
            'GET':usersController.getRestrictions,
            'POST':usersController.postRestrictions
        }
    }, {
        pattern: '^/users/restrictions/all',
        action: {
            //Mock
            'DELETE':usersController.cleanRestrictions,
            'GET':usersController.getAllRestrictions
        }
    }, {
        pattern: '^/users/(\\w+)/mercadopago_account/balance\?.*$',
        action: {
            'GET':usersController.getBalanceInfo
        }
    }
    , {
        pattern: '^/users/(\\w+)',
        action: {
            'POST':usersController.createUser,
            'GET':usersController.getUser,
            'PUT':usersController.updateUser
        }
    }, {
        pattern: '^/internal/users/(\\w+)/immediate_payment/(\\w+)',
        action: {
            'PUT':usersController.setImmediatePayment,
            'DELETE':usersController.deleteImmediatePayment
        }
    }, {
        pattern: '^/internal/users/search?(\\w+)',
        action: {
            'GET':usersController.searchUser
        }
    }, {
        pattern: '^/internal/users/(\\w+)/nickname',
        action: {
            'PUT':usersController.updateUser
        }
    },{
        pattern: '^/internal/users(/)?',
        action: {
            'GET':usersController.getAllUsersIds,

        }
    },{
        pattern: '^/addresses\?.*$',
        action: {
            'GET':usersController.getAddressesById
        }
    },{
        pattern: '^/ms_neural_network/ping\?.*$',
        action: {
            'GET':usersController.ping
        }
    },{
        pattern: '^/internal/fraud/scoring/orders/neural_network/score/\?.*$',
        action: {
            'POST':usersController.nn
        }
    }


]);
