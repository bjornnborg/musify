var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

/**
*@author kzaporojets - controller para devolver la data de fecha de creacion de emails de distintos proveedores externos 
* (ej: YAHOO)
**/
var emailProvidersController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
        }

        ,
        getEmailAgetData: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"query":{"email":"yourQueryEmail%40test.com%2b10.10.1.10","queryType":" EmailIPRisk","count":1,"created":"2012-05-20T03:18:16Z","lang":"en-US"," responseCount":1,"results":[{"email":"yourQueryEmail%40test.com","ipaddress":"200.255.253.212","emailAge":"2012-04-25T07:26:07Z","domainAge":"2012-04-25T07:26:07Z ","firstVerificationDate":"2012-05-18T23:58:55Z","lastVerificationDate":"2012-05-18T23:58:55Z","status":"Certified","country":"US","fraudRisk":"VeryHigh","eName":"John+Sampras","dob":"12/09/1980","gender":"male","location":"HOPE MILLS, North Carolina","smfriends":"34","totalhits":"24","uniquehits":"2","imageurl":"http%3a%2f%2fwww.emailage.com%2fEmailAgeImage%2fmywLa.pT0FP1CBrMwE17xT1ax-VA20va.pcSRtGaCja.pvuHwJvRUpwuAQBTpIyXz8HHWw.png","EAStatusID":"1","EAScore":"975","EAReason":"Fraud Level 3","EAReasonID":"1","EAAdvice":"Fraud Review","EAAdviceID":"1","EARiskBandID":"2","EARiskBand":"High Risk","emailExists":"Yes","domainExists":"Yes","company":"email age","title":"developer","smlinks":[{"source":"facebook","link":"https://www.facebook.com/emailage"}],"ip_risklevelid":"2","ip_risklevel":"High","ip_riskreasonid":"307","ip_riskreason":"Risk Country","ip_reputation":"Good","ip_anonymousdetected":"Yes","ip_isp":"China Unicom Beijing","ip_org":"China Unicom Beijing","ip_userType":"residential","ip_netSpeedCell":"Corporate","ip_corporateProxy":"Yes","ip_continentCode":"Asia","ip_country":"China","ip_countryCode":"CN","ip_region":"Beijing","ip_city":"Beijing","ip_callingcode":"0","ip_metroCode":"0","ip_latitude":"39.9289","ip_longitude":"116.3883","ip_map":"https://www.emailage.com/query/GoogleMaps?latLng=39.9289,116.3883&title=Beijing, Beijing,China"}]},"responseStatus":{"status":"success","description":""}}));
            response.end();        
        }

        ,
        getEmailData: function(request, response){
      			response.writeHead(200, {	
      				'Content-Type' : 'text/plain; charset=utf-8'
      			});

                var qs = url.parse(request.url, true).query;
              if ( qs["q"].indexOf("paraklim") > -1 || qs["q"].indexOf("maurifur") > -1 || qs["q"].indexOf("emailage1") > -1) {

      
                  response.write(JSON.stringify({
                      "query": {
                          "count": 1,
                          "created": "2013-02-18T14:03:49Z",
                          "lang": "en-US",
                          "diagnostics": {
                              "publiclyCallable": "false",
                              "url": [
                                  {
                                      "execution-start-time": "0",
                                      "execution-stop-time": "53",
                                      "execution-time": "53",
                                      "content": "http://profiles.yahoo.com/v2/identities.handle(borbacorrea%40yahoo.com.br~yid)"
                                  },
                                  {
                                      "execution-start-time": "53",
                                      "execution-stop-time": "61",
                                      "execution-time": "8",
                                      "content": "http://social.yahooapis.com/v1/users.guid(QKEB5GLWWGA6VM4HA7OISS2J6I)/profile?format=json"
                                  }
                              ],
                              "user-time": "62",
                              "service-time": "61",
                              "build-version": "33944"
                          },
                          "results": {
                              "profile": {
                                  "guid": "QKEB5GLWWGA6VM4HA7OISS2J6I",
                                  "created": "2010-02-03T15:31:25Z",
                                  "gender": "F",
                                  "image": {
                                      "height": "192",
                                      "imageUrl": "http://l.yimg.com/dh/ap/social/profile/profile_b192.png",
                                      "size": "192x192",
                                      "width": "192"
                                  },
                                  "location": "Camboriu, Santa Catarina",
                                  "memberSince": "2003-06-07T22:50:32Z",
                                  "nickname": "Michely",
                                  "profileUrl": "http://profile.yahoo.com/QKEB5GLWWGA6VM4HA7OISS2J6I",
                                  "isConnected": "false"
                              }
                          }
                      }
                  }));
              }
              else
              {
                  response.write(JSON.stringify({
                      "query": {
                          "count": 0,
                          "created": "2013-02-18T14:01:02Z",
                          "lang": "en-US",
                          "diagnostics": {
                              "publiclyCallable": "false",
                              "url": {
                                  "execution-start-time": "1",
                                  "execution-stop-time": "66",
                                  "execution-time": "65",
                                  "http-status-code": "404",
                                  "http-status-message": "Not Found",
                                  "content": "http://profiles.yahoo.com/v2/identities.handle(btttttttorbacorrea%40yahoo.com.br~yid)"
                              },
                              "user-time": "66",
                              "service-time": "65",
                              "build-version": "33944"
                          },
                          "results": null
                      }
                  }));
              }
                response.end(); 
            }
    };

/*function getUserId(request) {
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/users/(\\w+)');
    uriRegExp.exec(pathname);
    var userId = RegExp.$1;
    return userId;
}*/


exports.ping = emailProvidersController.ping;
exports.getEmailAgetData = emailProvidersController.getEmailAgetData;


//exports.getEmailData = emailProvidersController.getEmailData;

// Mappings
urlMapping.add ([
    {
        pattern: '^/EmailAgeValidator/',
    
        action: {
            'POST':emailProvidersController.getEmailAgetData
        }
    },
    {
        pattern: '^/v1/yql$',

        action: {
            'GET':emailProvidersController.getEmailData
        }
    }
  ]);
