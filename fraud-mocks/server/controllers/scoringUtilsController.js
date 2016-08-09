var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var scoringUtilsController = {


    pld_risk : function(request, response){
        //resourceManager.saveRequestResource('fraudlist', request, response);
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });
        response.write(JSON.stringify([ {"result":"MID"} ]));
        response.end();
    },

    deviceSummary: function(request, response) {

        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('^/fraud/device/profiles_summary/flow/(\\w+)/transaction/(\\w+)/type/(\\w+)');
        uriRegExp.exec(pathname);
        var flow = RegExp.$1;
        var transaction = RegExp.$2;
        var type = RegExp.$3;

        var userId = getUserId(request);

        result = {"thm": {"device_id":"0fbb285bbd19441b9f8bb44e287121ef", "fuzzy_device_id":"2ec4b3e10f5342009beb46248257d203","true_ip":"200.102.54.149"}};


        if(type=="ml" && userId==234756999){
            result = {"ml": null};
        }

        if(type=="ml"){
            result = {"ml": {"device_id":"5220541ae4b09d821901e886", "longitude":"+40.689060", "latitude":"-74.044636", "jsuuid":"D8D1E708-D83A-47D5-BD42-7B68A1F53395-11:03:49 GMT-0300 (Hora est. de Sudamerica E.)","creation_date":"2014-04-08T10:03:19.818-04:00"}};
        }

        if(transaction==122333444){
            result = {"ml": null};
        }

        if(transaction==133444555 ){
            result = result = {"ml": {"device_id":"558ed956e4b03be0d04d59cb", "longitude":"+40.689060", "latitude":"-74.044636", "jsuuid":"D8D1E708-D83A-47D5-BD42-7B68A1F53395-11:03:49 GMT-0300 (Hora est. de Sudamerica E.)","creation_date":"2014-04-08T10:03:19.818-04:00"}};
        }

        if(transaction==984558668){
            result = result = {"ml": {"device_id":"558ed956e4b03be0d04d59aa", "longitude":"+40.689060", "latitude":"-74.044636", "jsuuid":"D8D1E708-D83A-47D5-BD42-7B68A1F53395-11:03:49 GMT-0300 (Hora est. de Sudamerica E.)","creation_date":"2014-04-08T10:03:19.818-04:00"}};
        }

        response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
        response.write(JSON.stringify(result));
        response.end();
      },
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();
        },

        itemCategories: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"call_status":"DONE","result":[{"status":"DONE","result":{"item_id":"MLA557156760","categories":{"last":"MLA44129","l_1":"MLA1743","l_2":"MLA1784"}}},{"status":"DONE","result":{"item_id":"MLA555280435","categories":{"last":"MLA357575","l_1":"MLA1574","l_2":"MLA1625"}}}]}));
            response.end();
        },
        mitre: function(request, response) {
            response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"folio_prev":"0000000001","client_id":"0002","reference":"0123456789","eval_indicator":"1","date_time":"01/01/2014 09:00:01","score":19,"cd_response":"2","nb_response":"success"}));
            response.end();
        },
       emails: function(request, response){
		var userId = getUserId(request);
		var qs = url.parse(request.url, true).query;
		if ( qs["show_detail"] == "true") {


      if(userId==9998871)
      {
        response.writeHead(200, {
          'Content-Type' : 'text/plain; charset=utf-8'
        });
         response.write(JSON.stringify({
          "user_emails": [
              {
                  "email": "paraklim@yahoo.com",
                  "creation_date": "2013-01-01T00:00:00.000-0300",
                  "last_modified_date": "2013-01-01T00:00:01.000-0300",
		  "external_creation_date": "2012-01-01T00:00:01.000-0300"
              },
              {
                  "email": "maurifur@yahoo.com",
                  "creation_date": "2013-01-02T12:30:00.000-0300",
                  "last_modified_date": "2013-01-03T00:00:01.000-0300",
		  "external_creation_date": "2012-01-01T00:00:01.000-0300"
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
		"user_emails": [
                {
                    "email": "otro@yahoo.com",
                    "creation_date": "2013-01-01T00:00:00.000-0300",
                    "last_modified_date": "2013-01-01T00:00:01.000-0300",
		  "external_creation_date": "2012-01-01T00:00:01.000-0300"
                },
                {
                    "email": "otro2@yahoo.com",
                    "creation_date": "2013-01-02T12:30:00.000-0300",
                    "last_modified_date": "2013-01-03T00:00:01.000-0300",
		  "external_creation_date": "2012-01-01T00:00:01.000-0300"
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
           "user_emails": [
                {
                    "email": "suenia1@yahoo.com.br",
                    "creation_date": "2013-01-01T00:00:00.000-0300",
                    "last_modified_date": "2013-01-01T00:00:01.000-0300",
		  "external_creation_date": "2012-01-01T00:00:01.000-0300"
                },
                {
                    "email": "suenia2@yahoo.com.br",
                    "creation_date": "2013-01-02T12:30:00.000-0300",
                    "last_modified_date": "2013-01-03T00:00:01.000-0300",
		  "external_creation_date": "2012-01-01T00:00:01.000-0300"
                }
            ]
        }));
      } else if (userId==232255466 || userId==232255467) {
            response.writeHead(200, {
                'Content-Type' : 'text/plain; charset=utf-8'
            });
            response.write(JSON.stringify({
            "user_emails": [
                {
                    "external_creation_date": "2012-04-25T07:26:07.000-0400",
                    "creation_date": "2014-03-25T16:07:23.000-04:00",
                    "email_age_data": {
                        "owner_name": "John+Sampras",
                        "reason_score": "Fraud Level 3",
                        "location": "HOPE MILLS, North Carolina",
                        "reason_score_id": "1",
                        "score": "975",
                        "owner_date_of_bird": "1980-09-12T00:00:00.000-0400",
                        "email_age": "2012-04-25T07:26:07.000-0400",
                        "last_verification_date": "2012-05-18T23:58:55.000-0400",
                        "total_hits": 24,
                        "social_media_friends": "34",
                        "advice_score_id": "1",
                        "risk_band": "High Risk",
                        "domain_exists": "Yes",
                        "social_media_links_qty": 1,
                        "gender": "male",
                        "domain_age": "2012-04-25T07:26:07.000-0400",
                        "status": "Certified",
                        "status_id": "1",
                        "country": "US",
                        "email_exists": "Yes",
                        "risk_band_id": "2",
                        "company": "email age",
                        "first_verification_date": "2012-05-18T23:58:55.000-0400",
                        "fraud_risk": "VeryHigh",
                        "unique_hits": 2,
                        "advice_score": "Fraud Review"
                    },
                    "last_modified_date": "2014-03-25T16:07:23.000-04:00",
                    "email": "test_user_43334468@testuser.com",
                    "user_id": 156096288
                }
            ]
        }));
      }


      else
      {
      response.writeHead(200, {
        'Content-Type' : 'text/plain; charset=utf-8'
      });

			   response.write(JSON.stringify({"user_emails": [
{"email":"test01@mail.com","creation_date":"2013-01-01T00:00:00.000-0300","last_modified_date":"2013-01-01T00:00:01.000-0300",
		  "external_creation_date": "2012-01-01T00:00:01.000-0300"},{"email":"test02@mail.com","creation_date":"2013-01-02T12:30:00.000-0300","last_modified_date":"2013-01-03T00:00:01.000-0300",
		  "external_creation_date": "2012-01-01T00:00:01.000-0300"}]}));
			}
      response.end();
               }
	},

 navegationSessions: function(request, response) {

        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('^/fraud/users/(\\w+)/navigation/sessions');

        uriRegExp.exec(pathname);
        var userId = RegExp.$1;

        result = {"results": [{"user_id": 123123,"session_id": "6b746d7d7f6b73676b123","creation_date": "2014-05-06T15:05:04.000-0400"}]};

        if(userId==111111){
            result = {"results": [{"user_id": 111111,"session_id": "6b746d7d7f6b73676b11","creation_date": "2014-05-06T15:05:04.000-0400"}]};
        }

        if(userId==222222){
            result = {"results": [{"user_id": 222222,"session_id": "6b746d7d7f6b73676b22","creation_date": "2014-05-06T15:05:04.000-0400"}]}
        }

        if(userId==333333){
            result = {"results": [{"user_id": 333333,"session_id": "6b746d7d7f6b73676b33","creation_date": "2014-05-06T15:05:04.000-0400"}]}
        }

        response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
        response.write(JSON.stringify(result));
        response.end();
},

getPldRisk: function(request, response) {

        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('^/fraud/users/(\\w+)/pld_risk');

        uriRegExp.exec(pathname);
        var userId = RegExp.$1;

        console.log("El usuario afuera en risk_pld es " + userId);

        result = {"result":"LOW"};

        switch(userId){
            case "184694182":
                console.log("El usuario en risk_pld es 184694182");
                result = {"result":"MID"};
            break;
            case "184694183":
                console.log("El usuario en risk_pld es 184694183");
                result = {"result":"HIGH"};
            break;
            case "184694184":
                console.log("El usuario en risk_pld es 184694184");
                jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                return;
            break;
        }

        response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
        response.write(JSON.stringify(result));
        response.end();
},

 navigationData: function(request, response) {
        response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify([
    {
        "first_seen": "2014-03-10T20:12:040Z",
        "d2id": "09b97ac6-3b3f-4ca4-a8c8-3101163790d3",
        "navigations": [
            {
                "leaf_category": "MLM58500",
                "creation_date": "2014-03-11T01:56:59.538Z",
                "sid": "09b97ac6-3b3f-4ca4-a8c8-3101163790d3",
                "time": "2014-03-10T20:49:10.000Z",
                "is_vip_page": null,
                "item_id": "MLM443367381",
                "browser_data": {
                    "os_device": null,
                    "os_group": null,
                    "group": null
                },
                "user_id": "87602717",
                "category_flags": {
                    "category_1276_5m": false,
                    "category_1182_5m": false,
                    "category_1499_5m": false,
                    "category_3937_5m": false,
                    "category_1574_5m": false,
                    "category_1384_5m": false,
                    "category_1039_2m": false,
                    "category_1953_5m": false,
                    "category_1132_5m": false,
                    "category_1367_2m": false,
                    "category_1747_2m": false,
                    "category_1246_5m": false,
                    "category_1798_2m": false,
                    "category_1039_5m": false,
                    "category_1132_2m": false,
                    "category_1144_5m": false,
                    "category_1684_2m": false,
                    "category_1574_2m": false,
                    "category_1384_2m": false,
                    "category_1051_2m": false,
                    "category_1953_2m": false,
                    "category_1648_5m": false,
                    "category_1276_2m": false,
                    "category_3937_2m": false,
                    "category_1499_2m": false,
                    "category_1747_5m": false,
                    "category_1182_2m": false,
                    "category_1071_2m": false,
                    "category_1798_5m": false,
                    "category_1246_2m": false,
                    "category_1367_5m": false,
                    "category_1071_5m": false,
                    "category_1051_5m": false,
                    "category_1144_2m": false
                },
                "category_path_from_root": "MLM1051%2CMLM3813%2CMLM58500",
                "request_uri": "/meli/a"
            },
            {
                "leaf_category": null,
                "creation_date": "2014-03-11T03:04:51.080Z",
                "sid": "09b97ac6-3b3f-4ca4-a8c8-3101163790d3",
                "time": "2014-03-10T21:57:01.000Z",
                "is_vip_page": null,
                "item_id": null,
                "browser_data": {
                    "os_device": null,
                    "os_group": null,
                    "group": null
                },
                "user_id": "guest",
                "category_flags": {
                    "category_1276_5m": false,
                    "category_1182_5m": false,
                    "category_1499_5m": false,
                    "category_3937_5m": false,
                    "category_1574_5m": false,
                    "category_1384_5m": false,
                    "category_1039_2m": false,
                    "category_1953_5m": false,
                    "category_1132_5m": false,
                    "category_1367_2m": false,
                    "category_1747_2m": false,
                    "category_1246_5m": false,
                    "category_1798_2m": false,
                    "category_1039_5m": false,
                    "category_1132_2m": false,
                    "category_1144_5m": false,
                    "category_1684_2m": false,
                    "category_1574_2m": false,
                    "category_1384_2m": false,
                    "category_1051_2m": false,
                    "category_1953_2m": false,
                    "category_1648_5m": false,
                    "category_1276_2m": false,
                    "category_3937_2m": false,
                    "category_1499_2m": false,
                    "category_1747_5m": false,
                    "category_1182_2m": false,
                    "category_1071_2m": false,
                    "category_1798_5m": false,
                    "category_1246_2m": false,
                    "category_1367_5m": false,
                    "category_1071_5m": false,
                    "category_1051_5m": false,
                    "category_1144_2m": false
                },
                "category_path_from_root": null,
                "request_uri": "/meli/b"
            },
            {
                "leaf_category": "MLM39269",
                "creation_date": "2014-03-11T03:29:03.800Z",
                "sid": "09b97ac6-3b3f-4ca4-a8c8-3101163790d3",
                "time": "2014-03-10T22:21:25.000Z",
                "is_vip_page": null,
                "item_id": "MLM439995608",
                "browser_data": {
                    "os_device": null,
                    "os_group": null,
                    "group": null
                },
                "user_id": "87602717",
                "category_flags": {
                    "category_1276_5m": false,
                    "category_1182_5m": false,
                    "category_1499_5m": false,
                    "category_3937_5m": false,
                    "category_1574_5m": false,
                    "category_1384_5m": false,
                    "category_1039_2m": false,
                    "category_1953_5m": false,
                    "category_1132_5m": false,
                    "category_1367_2m": false,
                    "category_1747_2m": false,
                    "category_1246_5m": false,
                    "category_1798_2m": false,
                    "category_1039_5m": false,
                    "category_1132_2m": false,
                    "category_1144_5m": false,
                    "category_1684_2m": false,
                    "category_1574_2m": false,
                    "category_1384_2m": false,
                    "category_1051_2m": false,
                    "category_1953_2m": false,
                    "category_1648_5m": false,
                    "category_1276_2m": false,
                    "category_3937_2m": false,
                    "category_1499_2m": false,
                    "category_1747_5m": false,
                    "category_1182_2m": false,
                    "category_1071_2m": false,
                    "category_1798_5m": false,
                    "category_1246_2m": false,
                    "category_1367_5m": false,
                    "category_1071_5m": false,
                    "category_1051_5m": false,
                    "category_1144_2m": false
                },
                "category_path_from_root": "MLM1051%2CMLM3813%2CMLM5069%2CMLM16535%2CMLM39269",
                "request_uri": "/meli/c"
            },
            {
                "leaf_category": "MLM51777",
                "creation_date": "2014-03-11T04:01:53.759Z",
                "sid": "09b97ac6-3b3f-4ca4-a8c8-3101163790d3",
                "time": "2014-03-10T22:47:39.000Z",
                "is_vip_page": null,
                "item_id": "MLM441469279",
                "browser_data": {
                    "os_device": null,
                    "os_group": null,
                    "group": null
                },
                "user_id": "87602717",
                "category_flags": {
                    "category_1276_5m": false,
                    "category_1182_5m": false,
                    "category_1499_5m": false,
                    "category_3937_5m": false,
                    "category_1574_5m": false,
                    "category_1384_5m": false,
                    "category_1039_2m": false,
                    "category_1953_5m": false,
                    "category_1132_5m": false,
                    "category_1367_2m": false,
                    "category_1747_2m": false,
                    "category_1246_5m": false,
                    "category_1798_2m": false,
                    "category_1039_5m": false,
                    "category_1132_2m": false,
                    "category_1144_5m": false,
                    "category_1684_2m": false,
                    "category_1574_2m": false,
                    "category_1384_2m": false,
                    "category_1051_2m": false,
                    "category_1953_2m": false,
                    "category_1648_5m": false,
                    "category_1276_2m": false,
                    "category_3937_2m": false,
                    "category_1499_2m": false,
                    "category_1747_5m": false,
                    "category_1182_2m": false,
                    "category_1071_2m": false,
                    "category_1798_5m": false,
                    "category_1246_2m": false,
                    "category_1367_5m": false,
                    "category_1071_5m": false,
                    "category_1051_5m": false,
                    "category_1144_2m": false
                },
                "category_path_from_root": "MLM1051%2CMLM3813%2CMLM9397%2CMLM51732%2CMLM51777",
                "request_uri": "/meli/d"
            }
        ],
        "last_seen": "2014-03-10T20:21:020Z"
    },
    {
        "first_seen": "2014-03-04T16:05:023Z",
        "d2id": "c8651e36-f9dc-4b19-b310-8481017a4bb4",
        "navigations": [],
        "last_seen": "2014-03-09T21:17:022Z"
    },
    {
    "first_seen": "2014-03-10T20:12:040Z",
    "d2id": "09b97ac6-1234-4ca4-a8c8-3101163790d3",
    "navigations": [
        {
            "leaf_category": "MLM58500",
            "creation_date": "2014-03-11T01:56:59.538Z",
            "sid": "09b97ac6-1234-4ca4-a8c8-3101163790d3",
            "time": "2014-03-10T20:49:10.000Z",
            "is_vip_page": true,
            "item_id": "MLM443367381",
            "browser_data": {
                "os_device": null,
                "os_group": null,
                "group": null
            },
            "user_id": "87602717",
            "category_flags": {
                "category_1276_5m": false,
                "category_1182_5m": true,
                "category_1499_5m": false,
                "category_3937_5m": true,
                "category_1574_5m": false,
                "category_1384_5m": true,
                "category_1039_2m": false,
                "category_1953_5m": true,
                "category_1132_5m": false,
                "category_1367_2m": true,
                "category_1747_2m": false,
                "category_1246_5m": true,
                "category_1798_2m": false,
                "category_1039_5m": true,
                "category_1132_2m": false,
                "category_1144_5m": true,
                "category_1684_2m": false,
                "category_1574_2m": true,
                "category_1384_2m": false,
                "category_1051_2m": true,
                "category_1953_2m": false,
                "category_1648_5m": true,
                "category_1276_2m": false,
                "category_3937_2m": true,
                "category_1499_2m": false,
                "category_1747_5m": true,
                "category_1182_2m": false,
                "category_1071_2m": true,
                "category_1798_5m": false,
                "category_1246_2m": true,
                "category_1367_5m": false,
                "category_1071_5m": true,
                "category_1051_5m": false,
                "category_1144_2m": true
            },
            "category_path_from_root": "MLM1051%2CMLM3813%2CMLM58544",
            "request_uri": "/"
        },
        {
            "leaf_category": null,
            "creation_date": "2014-03-11T03:04:51.080Z",
            "sid": "09b97ac6-1234-4ca4-a8c8-3101163790d3",
            "time": "2014-03-10T21:57:01.000Z",
            "is_vip_page": null,
            "item_id": null,
            "browser_data": {
                "os_device": null,
                "os_group": null,
                "group": null
            },
            "user_id": "87602717",
            "category_flags": {
                "category_1276_5m": false,
                "category_1182_5m": true,
                "category_1499_5m": false,
                "category_3937_5m": true,
                "category_1574_5m": false,
                "category_1384_5m": true,
                "category_1039_2m": false,
                "category_1953_5m": true,
                "category_1132_5m": false,
                "category_1367_2m": true,
                "category_1747_2m": false,
                "category_1246_5m": true,
                "category_1798_2m": false,
                "category_1039_5m": true,
                "category_1132_2m": false,
                "category_1144_5m": true,
                "category_1684_2m": false,
                "category_1574_2m": true,
                "category_1384_2m": false,
                "category_1051_2m": true,
                "category_1953_2m": false,
                "category_1648_5m": true,
                "category_1276_2m": false,
                "category_3937_2m": true,
                "category_1499_2m": false,
                "category_1747_5m": true,
                "category_1182_2m": false,
                "category_1071_2m": true,
                "category_1798_5m": false,
                "category_1246_2m": true,
                "category_1367_5m": false,
                "category_1071_5m": true,
                "category_1051_5m": false,
                "category_1144_2m": true
            },
            "category_path_from_root": null
        },
        {
            "leaf_category": "MLM39269",
            "creation_date": "2014-03-11T03:29:03.800Z",
            "sid": "09b97ac6-1234-4ca4-a8c8-3101163790d3",
            "time": "2014-03-10T22:21:25.000Z",
            "is_vip_page": null,
            "item_id": "MLM439995608",
            "browser_data": {
                "os_device": null,
                "os_group": null,
                "group": null
            },
            "user_id": "87602717",
            "category_flags": {
                "category_1276_5m": false,
                "category_1182_5m": true,
                "category_1499_5m": false,
                "category_3937_5m": true,
                "category_1574_5m": false,
                "category_1384_5m": true,
                "category_1039_2m": false,
                "category_1953_5m": true,
                "category_1132_5m": false,
                "category_1367_2m": true,
                "category_1747_2m": false,
                "category_1246_5m": true,
                "category_1798_2m": false,
                "category_1039_5m": true,
                "category_1132_2m": false,
                "category_1144_5m": true,
                "category_1684_2m": false,
                "category_1574_2m": true,
                "category_1384_2m": false,
                "category_1051_2m": true,
                "category_1953_2m": false,
                "category_1648_5m": true,
                "category_1276_2m": false,
                "category_3937_2m": true,
                "category_1499_2m": false,
                "category_1747_5m": true,
                "category_1182_2m": false,
                "category_1071_2m": true,
                "category_1798_5m": false,
                "category_1246_2m": true,
                "category_1367_5m": false,
                "category_1071_5m": true,
                "category_1051_5m": false,
                "category_1144_2m": true
            },
            "category_path_from_root": "MLM1051%2CMLM3813%2CMLM5069%2CMLM16535%2CMLM39233"
        },
        {
            "leaf_category": "MLM51777",
            "creation_date": "2014-03-11T04:01:53.759Z",
            "sid": "09b97ac6-1234-4ca4-a8c8-3101163790d3",
            "time": "2014-03-10T22:47:39.000Z",
            "is_vip_page": null,
            "item_id": "MLM441469279",
            "browser_data": {
                "os_device": null,
                "os_group": null,
                "group": null
            },
            "user_id": "87602717",
            "category_flags": {
                "category_1276_5m": false,
                "category_1182_5m": true,
                "category_1499_5m": false,
                "category_3937_5m": true,
                "category_1574_5m": false,
                "category_1384_5m": true,
                "category_1039_2m": false,
                "category_1953_5m": true,
                "category_1132_5m": false,
                "category_1367_2m": true,
                "category_1747_2m": false,
                "category_1246_5m": true,
                "category_1798_2m": false,
                "category_1039_5m": true,
                "category_1132_2m": false,
                "category_1144_5m": true,
                "category_1684_2m": false,
                "category_1574_2m": true,
                "category_1384_2m": false,
                "category_1051_2m": true,
                "category_1953_2m": false,
                "category_1648_5m": true,
                "category_1276_2m": false,
                "category_3937_2m": true,
                "category_1499_2m": false,
                "category_1747_5m": true,
                "category_1182_2m": false,
                "category_1071_2m": true,
                "category_1798_5m": false,
                "category_1246_2m": true,
                "category_1367_5m": false,
                "category_1071_5m": true,
                "category_1051_5m": false,
                "category_1144_2m": true
            },
            "category_path_from_root": "MLM1051%2CMLM3813%2CMLM9397%2CMLM51732%2CMLM51722"
        }
    ],
    "last_seen": "2014-03-10T20:21:020Z"
}
]));
            response.end();
      },
      getMovements: function(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("El pathname es " + pathname)
        var uriRegExp = new RegExp('/fraud/transactions/users/(\\w+)');
        uriRegExp.exec(pathname);
        var userId = RegExp.$1;
        console.log("El userId es " + userId)

        var qs = url.parse(request.url, true).query;
        console.log("El qs es " + qs)

        if ( qs["event_type"] == "payment") {

            if(qs["role"] == "payer"){
                console.log("Entro al evento payment con userRole Payer")

                if( (qs["doc_number"] == "16649206091" || qs["doc_number"] == "09560748394") && qs["cross_type"] == "document"){
                  response.writeHead(200, {
                   'Content-Type' : 'text/plain; charset=utf-8'
                 });

                 response.write(JSON.stringify({"transactions_list":[{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Fatura do MercadoLivre","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-18T09:59:35.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":825890013,"total_paid_amount":3182.8,"payer_id":85836036,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"walletmlb@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-08-18T09:59:35.000-04:00","first_six_digits":null,"external_reference":"301342303","transaction_amount":3182.8,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-18T09:59:35.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"1000 Etiqueta Lacre Void Casca De Ovo Destrutível Garantia","shipping_cost":15.26,"coupon_id":null,"date_created":"2014-08-12T10:47:23.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":823084561,"total_paid_amount":49.75,"payer_id":85836036,"collector":{"id":72021437,"first_name":"LUIZ ANTONIO","nickname":"ETIQUETA CARIOCA","email":"vendasml@etiquetacarioca.com.br","last_name":"GOMES DE BRITO 10373090730"},"last_modified":"2014-08-12T21:52:01.000-04:00","first_six_digits":null,"external_reference":"859962870","transaction_amount":34.49,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-12T10:47:23.000-04:00","overpaid_amount":0,"payment_type":"account_money"}}]}));
                 response.end();
                }

                if(userId == 555666777 && qs["cross_type"] == "document") {

                     response.writeHead(200, {
                      'Content-Type' : 'text/plain; charset=utf-8'
                    });

                    response.write(JSON.stringify({"transactions_list": [{"payment": {"created_from": "963", "statement_descriptor": null, "reason": "Fatura do MercadoLivre", "shipping_cost": 0, "coupon_id": null, "date_created": new Date(), "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "scoring_execution_id": null, "id": 825890013, "total_paid_amount": 3182.8, "payer_id": 85836036, "collector": {"id": 99754138, "first_name": "Pagamentos", "nickname": "@99754138", "email": "walletmlb@mercadolibre.com", "last_name": "Meli"}, "last_modified": "2014-09-28T09:59:35.000-04:00", "first_six_digits": null, "external_reference": "301342303", "transaction_amount": 3182.8, "card": {"id": null, "issuer_id": null, "number_id": null }, "coupon_amount": null, "client_id": "CHO-Lite", "marketplace": "NONE", "status_code": null, "currency_id": "BRL", "authorization_date": null, "status": "approved", "payment_method_id": "account_money", "site_id": "MLB", "status_detail": "accredited", "operation_type": "regular_payment", "transaction_id": null, "last_four_digits": null, "installments": null, "account_money_amount": 0, "finance_charge": null, "authorization_code": null, "date_approved": "2014-08-18T09:59:35.000-04:00", "overpaid_amount": 0, "payment_type": "account_money"} }, {"payment": {"created_from": "7098342686239412", "statement_descriptor": null, "reason": "1000 Etiqueta Lacre Void Casca De Ovo Destrutível Garantia", "shipping_cost": 15.26, "coupon_id": null, "date_created": new Date(), "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "scoring_execution_id": null, "id": 823084561, "total_paid_amount": 49.75, "payer_id": 85836036, "collector": {"id": 72021437, "first_name": "LUIZ ANTONIO", "nickname": "ETIQUETA CARIOCA", "email": "vendasml@etiquetacarioca.com.br", "last_name": "GOMES DE BRITO 10373090730"}, "last_modified": "2014-08-12T21:52:01.000-04:00", "first_six_digits": null, "external_reference": "859962870", "transaction_amount": 34.49, "card": {"id": null, "issuer_id": null, "number_id": null }, "coupon_amount": 0, "client_id": "com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)", "marketplace": "MELI", "status_code": null, "currency_id": "BRL", "authorization_date": null, "status": "approved", "payment_method_id": "account_money", "site_id": "MLB", "status_detail": "accredited", "operation_type": "regular_payment", "transaction_id": null, "last_four_digits": null, "installments": null, "account_money_amount": 0, "finance_charge": null, "authorization_code": null, "date_approved": "2014-08-12T10:47:23.000-04:00", "overpaid_amount": 0, "payment_type": "account_money"} }, {"payment": {"created_from": "963", "statement_descriptor": null, "reason": "Ressarcimento do valor do frete, referente a troca.", "shipping_cost": 0, "coupon_id": null, "date_created": new Date(), "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "scoring_execution_id": null, "id": 819946991, "total_paid_amount": 20.6, "payer_id": 85836036, "collector": {"id": 161376920, "first_name": "Fábio", "nickname": "FABIOLINDOFFS", "email": "fabio.ferreiradasilva@live.com", "last_name": "Ferreira da Silva"}, "last_modified": "2014-08-07T10:56:15.000-04:00", "first_six_digits": null, "external_reference": null, "transaction_amount": 20.6, "card": {"id": null, "issuer_id": null, "number_id": null }, "coupon_amount": null, "client_id": "CHO-Lite", "marketplace": "NONE", "status_code": null, "currency_id": "BRL", "authorization_date": null, "status": "approved", "payment_method_id": "account_money", "site_id": "MLB", "status_detail": "accredited", "operation_type": "money_transfer", "transaction_id": null, "last_four_digits": null, "installments": null, "account_money_amount": 0, "finance_charge": null, "authorization_code": null, "date_approved": "2014-08-07T10:56:15.000-04:00", "overpaid_amount": 0, "payment_type": "account_money"} }, {"payment": {"created_from": "963", "statement_descriptor": null, "reason": "Fatura do MercadoLivre", "shipping_cost": 0, "coupon_id": null, "date_created": "2014-07-16T09:19:21.000-04:00", "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "scoring_execution_id": null, "id": 808990922, "total_paid_amount": 2790.06, "payer_id": 85836036, "collector": {"id": 99754138, "first_name": "Pagamentos", "nickname": "@99754138", "email": "walletmlb@mercadolibre.com", "last_name": "Meli"}, "last_modified": "2014-07-16T09:19:21.000-04:00", "first_six_digits": null, "external_reference": "293948245", "transaction_amount": 2790.06, "card": {"id": null, "issuer_id": null, "number_id": null }, "coupon_amount": null, "client_id": "CHO-Lite", "marketplace": "NONE", "status_code": null, "currency_id": "BRL", "authorization_date": null, "status": "approved", "payment_method_id": "account_money", "site_id": "MLB", "status_detail": "accredited", "operation_type": "regular_payment", "transaction_id": null, "last_four_digits": null, "installments": null, "account_money_amount": 0, "finance_charge": null, "authorization_code": null, "date_approved": "2014-07-16T09:19:21.000-04:00", "overpaid_amount": 0, "payment_type": "account_money"} }, {"payment": {"created_from": "963", "statement_descriptor": null, "reason": "Trimestralidade renovacao Plano Plus 2762014 a 2592014 YHKIFMIZSHF", "shipping_cost": 0, "coupon_id": null, "date_created": "2014-07-07T08:54:19.000-04:00", "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "scoring_execution_id": null, "id": 804367075, "total_paid_amount": 29, "payer_id": 85836036, "collector": {"id": 62267601, "first_name": "Regina", "nickname": "CALCULARFRETE", "email": "cobrancas@calcularfrete.com.br", "last_name": "T Montanari"}, "last_modified": "2014-07-07T08:54:18.000-04:00", "first_six_digits": null, "external_reference": "YHKIFMIZSHF", "transaction_amount": 29, "card": {"id": null, "issuer_id": null, "number_id": null }, "coupon_amount": null, "client_id": "CHO-Lite", "marketplace": "NONE", "status_code": null, "currency_id": "BRL", "authorization_date": null, "status": "approved", "payment_method_id": "account_money", "site_id": "MLB", "status_detail": "accredited", "operation_type": "regular_payment", "transaction_id": null, "last_four_digits": null, "installments": null, "account_money_amount": 0, "finance_charge": null, "authorization_code": null, "date_approved": "2014-07-07T08:54:18.000-04:00", "overpaid_amount": 0, "payment_type": "account_money"} }, {"payment": {"created_from": "7098342686239412", "statement_descriptor": null, "reason": "1000 Etiqueta Lacre Void Casca De Ovo Destrutível Garantia", "shipping_cost": 15.35, "coupon_id": null, "date_created": "2014-06-21T16:22:16.000-04:00", "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "scoring_execution_id": null, "id": 797544268, "total_paid_amount": 49.84, "payer_id": 85836036, "collector": {"id": 72021437, "first_name": "LUIZ ANTONIO", "nickname": "ETIQUETA CARIOCA", "email": "vendasml@etiquetacarioca.com.br", "last_name": "GOMES DE BRITO 10373090730"}, "last_modified": "2014-06-21T18:36:25.000-04:00", "first_six_digits": null, "external_reference": "846744710", "transaction_amount": 34.49, "card": {"id": null, "issuer_id": null, "number_id": null }, "coupon_amount": 0, "client_id": "com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)", "marketplace": "MELI", "status_code": null, "currency_id": "BRL", "authorization_date": null, "status": "approved", "payment_method_id": "account_money", "site_id": "MLB", "status_detail": "accredited", "operation_type": "regular_payment", "transaction_id": null, "last_four_digits": null, "installments": null, "account_money_amount": 0, "finance_charge": null, "authorization_code": null, "date_approved": "2014-06-21T16:22:16.000-04:00", "overpaid_amount": 0, "payment_type": "account_money"} } ] }));

                }else if(userId == 13976739 || userId == 65160657) {
                    response.writeHead(200, {
                      'Content-Type' : 'text/plain; charset=utf-8'
                    });
                    if(qs["cross_type"] == "document"){

                        response.write(JSON.stringify({"transactions_list":[{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Fatura do MercadoLivre","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-18T09:59:35.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":825890013,"total_paid_amount":3182.8,"payer_id":85836036,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"walletmlb@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-08-18T09:59:35.000-04:00","first_six_digits":null,"external_reference":"301342303","transaction_amount":3182.8,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-18T09:59:35.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"1000 Etiqueta Lacre Void Casca De Ovo Destrutível Garantia","shipping_cost":15.26,"coupon_id":null,"date_created":"2014-08-12T10:47:23.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},
                            "scoring_execution_id":null,"id":823084561,"total_paid_amount":49.75,"payer_id":85836036,"collector":{"id":72021437,"first_name":"LUIZ ANTONIO","nickname":"ETIQUETA CARIOCA","email":"vendasml@etiquetacarioca.com.br","last_name":"GOMES DE BRITO 10373090730"},"last_modified":"2014-08-12T21:52:01.000-04:00","first_six_digits":null,"external_reference":"859962870","transaction_amount":34.49,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-12T10:47:23.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Ressarcimento do valor do frete, referente a troca.","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-07T10:56:16.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":819946991,"total_paid_amount":20.6,"payer_id":85836036,"collector":{"id":161376920,"first_name":"Fábio","nickname":"FABIOLINDOFFS","email":"fabio.ferreiradasilva@live.com",
                            "last_name":"Ferreira da Silva"},"last_modified":"2014-08-07T10:56:15.000-04:00","first_six_digits":null,"external_reference":null,"transaction_amount":20.6,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"money_transfer","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-07T10:56:15.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Fatura do MercadoLivre","shipping_cost":0,"coupon_id":null,"date_created":"2014-07-16T09:19:21.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":808990922,"total_paid_amount":2790.06,"payer_id":85836036,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"walletmlb@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-07-16T09:19:21.000-04:00","first_six_digits":null,"external_reference":"293948245","transaction_amount":2790.06,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,
                            "status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-07-16T09:19:21.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Trimestralidade renovacao Plano Plus 2762014 a 2592014 YHKIFMIZSHF","shipping_cost":0,"coupon_id":null,"date_created":"2014-07-07T08:54:19.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":804367075,"total_paid_amount":29,"payer_id":85836036,"collector":{"id":62267601,"first_name":"Regina","nickname":"CALCULARFRETE","email":"cobrancas@calcularfrete.com.br","last_name":"T Montanari"},"last_modified":"2014-07-07T08:54:18.000-04:00","first_six_digits":null,"external_reference":"YHKIFMIZSHF","transaction_amount":29,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-07-07T08:54:18.000-04:00",
                            "overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"1000 Etiqueta Lacre Void Casca De Ovo Destrutível Garantia","shipping_cost":15.35,"coupon_id":null,"date_created":"2014-06-21T16:22:16.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":797544268,"total_paid_amount":49.84,"payer_id":85836036,"collector":{"id":72021437,"first_name":"LUIZ ANTONIO","nickname":"ETIQUETA CARIOCA","email":"vendasml@etiquetacarioca.com.br","last_name":"GOMES DE BRITO 10373090730"},"last_modified":"2014-06-21T18:36:25.000-04:00","first_six_digits":null,"external_reference":"846744710","transaction_amount":34.49,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-06-21T16:22:16.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Fatura do MercadoLivre","shipping_cost":0,"coupon_id":null,
                            "date_created":"2014-06-18T09:28:51.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":796392511,"total_paid_amount":3338.35,"payer_id":85836036,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"walletmlb@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-06-18T09:28:51.000-04:00","first_six_digits":null,"external_reference":"287573341","transaction_amount":3338.35,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-06-18T09:28:51.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"1566","statement_descriptor":null,"reason":"Recarga N° 3549255 Tel. 41 - 88215000 (Claro)","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-08T12:47:48.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":791841583,"total_paid_amount":18,"payer_id":85836036,"collector":{"id":21,"first_name":"CLARO","nickname":"GETNET_CLARO","email":"mpago@claro.com","last_name":"CLARO"},
                            "last_modified":"2014-06-08T12:47:48.000-04:00","first_six_digits":null,"external_reference":null,"transaction_amount":18,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"recharge","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"cellphone_recharge","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-06-08T12:47:48.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Fatura do MercadoLivre","shipping_cost":0,"coupon_id":null,"date_created":"2014-05-19T09:32:53.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":782050317,"total_paid_amount":3796.47,"payer_id":85836036,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"pagamentos@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-05-19T09:32:53.000-04:00","first_six_digits":null,"external_reference":"280649481","transaction_amount":3796.47,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money",
                            "site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-05-19T09:32:53.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Reembolso de Frete.","shipping_cost":0,"coupon_id":null,"date_created":"2014-05-16T16:32:17.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":780644576,"total_paid_amount":15.8,"payer_id":85836036,"collector":{"id":149773484,"first_name":"Anderson","nickname":"COAN5174994","email":"andercone@ibest.com.br","last_name":"Coimbra"},"last_modified":"2014-05-16T16:32:17.000-04:00","first_six_digits":null,"external_reference":null,"transaction_amount":15.8,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"money_transfer","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-05-16T16:32:17.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,
                            "reason":"Reembolso de valor gasto referente a troca de produto.","shipping_cost":0,"coupon_id":null,"date_created":"2014-04-30T10:55:50.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":772808520,"total_paid_amount":14.8,"payer_id":85836036,"collector":{"id":156240186,"first_name":"Vanderleia","nickname":"VANDERLEIA APARECIDA","email":"comprasevertonglinski@hotmail.com","last_name":"Aparecida Glinski"},"last_modified":"2014-04-30T10:55:50.000-04:00","first_six_digits":null,"external_reference":null,"transaction_amount":14.8,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"money_transfer","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-04-30T10:55:50.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":null,"statement_descriptor":null,"reason":"Transferencia a ML","shipping_cost":0,"coupon_id":null,"date_created":"2014-04-18T21:57:07.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":148639514,"total_paid_amount":3584.62,"payer_id":85836036,"collector":{"id":99754138,
                            "first_name":"Pagamentos","nickname":"@99754138","email":"pagamentos@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-04-18T21:57:07.000-04:00","first_six_digits":null,"external_reference":"275053148","transaction_amount":3584.62,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"/mlb/com.mercadopago.web.checkout.controllers.WalletPayMlController","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-04-18T21:57:07.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Trimestralidade renovacao Plano Plus 2732014 a 2562014 YFBZCMIZSHF","shipping_cost":0,"coupon_id":null,"date_created":"2014-04-01T18:00:40.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":760986488,"total_paid_amount":29,"payer_id":85836036,"collector":{"id":62267601,"first_name":"Regina","nickname":"CALCULARFRETE","email":"cobrancas@calcularfrete.com.br","last_name":"T Montanari"},"last_modified":"2014-04-01T18:00:40.000-04:00","first_six_digits":null,"external_reference":"YFBZCMIZSHF","transaction_amount":29,
                            "card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-04-01T18:00:40.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":"MERCADOPAGO","reason":"Adesivo Tuning Mini Pvc Transformers Autobot Emblema","shipping_cost":0.01,"coupon_id":null,"date_created":"2014-03-21T18:00:01.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":100817752881,"id":757060678,"total_paid_amount":28.9,"payer_id":85836036,"collector":{"id":56549422,"first_name":"ANA CECILIA MAR","nickname":"CECIPOLAR","email":"farma.nrs1@ig.com.br","last_name":"CONDES DE SOUZA"},"last_modified":"2014-03-21T21:21:29.000-04:00","first_six_digits":"527496","external_reference":"826009882","transaction_amount":28.89,"card":{"id":135447671,"issuer_id":"24","number_id":"YPOZILUKCYBLDHCFJZPNZGWDOHSVVKAYLXDCIZGM"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"BRL",
                            "authorization_date":"2014-03-21T18:00:01.000-04:00","status":"approved","payment_method_id":"master","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"333560186_76737b747f777f7c776f","last_four_digits":"3604","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"043354","date_approved":"2014-03-21T18:00:01.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Fatura do MercadoLivre","shipping_cost":0,"coupon_id":null,"date_created":"2014-03-17T16:47:30.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":755140717,"total_paid_amount":2170.28,"payer_id":85836036,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"pagamentos@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-03-18T15:36:57.000-04:00","first_six_digits":null,"external_reference":"269175856","transaction_amount":2170.28,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"postNewWorld","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,
                            "date_approved":"2014-03-17T16:47:30.000-04:00","overpaid_amount":0,"payment_type":"account_money"}}]}));

                    }
                    else{
                        response.write(JSON.stringify({"transactions_list":[{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Fatura do MercadoLivre","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-26T11:17:49.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":830419137,"total_paid_amount":151.64,"payer_id":13976739,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"walletmlb@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-08-26T11:17:49.000-04:00","first_six_digits":null,"external_reference":"303272489","transaction_amount":151.64,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-26T11:17:49.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"Porta Correspondência Triplo Fixo Acrinil","shipping_cost":0,"coupon_id":null,
                            "date_created":"2014-08-18T08:48:37.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":825952485,"total_paid_amount":46.9,"payer_id":13976739,"collector":{"id":149075584,"first_name":"RINALDO ANTONIO","nickname":"GLOBALMAGAZINE","email":"vendas@globalmagazine.com.br","last_name":"GARCIA ROMERA ME"},"last_modified":"2014-08-18T11:27:49.000-04:00","first_six_digits":null,"external_reference":"861620369","transaction_amount":46.9,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-18T08:48:37.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"Guilhotina Papel A4 C/ 30 Cm P/ Até 10 Folhas C/ Travamento","shipping_cost":0,"coupon_id":null,"date_created":"2014-07-28T08:49:00.000-04:00",
                            "atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":814523282,"total_paid_amount":46,"payer_id":13976739,"collector":{"id":35803587,"first_name":"DONDON COM. DE UTILIDADES E","nickname":"LOJADONOEL","email":"lojadonoel@gmail.com","last_name":"PRESENTES LTDA - ME"},"last_modified":"2014-07-28T11:38:04.000-04:00","first_six_digits":null,"external_reference":"855562526","transaction_amount":46,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-07-28T08:49:00.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7425","statement_descriptor":null,"reason":"Pagamento de Tarifa","shipping_cost":0,"coupon_id":null,"date_created":"2014-07-22T00:03:36.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":811535402,
                            "total_paid_amount":108.08,"payer_id":13976739,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"walletmlb@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-07-22T00:03:36.000-04:00","first_six_digits":null,"external_reference":"295178983","transaction_amount":108.08,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"mlrp","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"recurring_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-07-22T00:03:36.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":"MERCADOPAGO*MLIVRE","reason":"Mochila De Hidratação Hidrobag Aquabag Nautika Camel Back","shipping_cost":12.69,"coupon_id":null,"date_created":"2014-07-21T11:35:02.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101128577822,"id":811084684,"total_paid_amount":86.69,"payer_id":13976739,"collector":{"id":82820094,"first_name":"Prussik Adventure Artigos","nickname":"DELFIM_DOS","email":"prussikadventure@gmail.com","last_name":"Esportivos ltda - Me"},
                            "last_modified":"2014-07-21T14:01:51.000-04:00","first_six_digits":"453211","external_reference":"853738016","transaction_amount":74,"card":{"id":139122679,"issuer_id":"25","number_id":"HXBVXBXHMLAQLBZVAZCPVKIAYNDJNYNOXMQDNSYC"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":"2014-07-21T11:35:02.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"393192862_376773777775777f6571","last_four_digits":"8428","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"645860","date_approved":"2014-07-21T11:35:02.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":"MERCADOPAGO*MLIVRE","reason":"Repetidor Expansor Wi-fi Wireless Tp-link 300mbps Tl-wa850re","shipping_cost":11.29,"coupon_id":null,"date_created":"2014-07-07T10:56:10.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101098046486,"id":804532121,"total_paid_amount":90.19,"payer_id":13976739,"collector":{"id":139999046,"first_name":"Vanessa","nickname":"ATAK NETSHOP","email":"ataknetshop@hotmail.com","last_name":"Oliveira Dantas"},"last_modified":"2014-07-07T13:50:07.000-04:00",
                            "first_six_digits":"453211","external_reference":"850262423","transaction_amount":78.9,"card":{"id":139122679,"issuer_id":"25","number_id":"HXBVXBXHMLAQLBZVAZCPVKIAYNDJNYNOXMQDNSYC"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":"2014-07-07T10:56:10.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"385830019_69777d3c6f776f737f7e","last_four_digits":"8428","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"660822","date_approved":"2014-07-07T10:56:10.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"7425","statement_descriptor":null,"reason":"Pagamento de Tarifa","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-22T00:36:31.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":797778394,"total_paid_amount":78.61,"payer_id":13976739,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"walletmlb@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-06-22T00:36:31.000-04:00","first_six_digits":null,"external_reference":"288082094","transaction_amount":78.61,"card":{"id":null,"issuer_id":null,"number_id":null},
                            "coupon_amount":null,"client_id":"mlrp","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"recurring_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-06-22T00:36:31.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"Tênis Sapatênis Osklen Skf-030 Feminino - Pronta Entrega","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-12T23:04:23.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":794386018,"total_paid_amount":174.9,"payer_id":13976739,"collector":{"id":140915025,"first_name":"Tania","nickname":"MARIABCARVALHO","email":"carvalhotaniamb@gmail.com","last_name":"Carvalho"},"last_modified":"2014-06-13T01:05:15.000-04:00","first_six_digits":null,"external_reference":"844853619","transaction_amount":174.9,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money",
                            "site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-06-12T23:04:23.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"Tapete Porta Malas (bandeja) Honda City - Todos Anos","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-09T17:17:21.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":792586903,"total_paid_amount":87.9,"payer_id":13976739,"collector":{"id":80120792,"first_name":"KELLEN","nickname":"TAILON ACESSÓRIOS","email":"isaias_tailon@hotmail.com","last_name":"SOUZA"},"last_modified":"2014-06-09T21:08:35.000-04:00","first_six_digits":null,"external_reference":"843921153","transaction_amount":87.9,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,
                            "authorization_code":null,"date_approved":"2014-06-09T17:17:21.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"Ponteira Escape Capitiva, Honda City , C4 Pallas Aluminiun","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-09T12:13:22.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":792490381,"total_paid_amount":66.9,"payer_id":13976739,"collector":{"id":8294330,"first_name":"CARBOX RACING COMERCI","nickname":"CARBOX RACING","email":"carboxracing@gmail.com","last_name":"O E SERVICOS LTDA  ME"},"last_modified":"2014-06-09T15:38:14.000-04:00","first_six_digits":null,"external_reference":"843818686","transaction_amount":66.9,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-06-09T12:13:22.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7098342686239412",
                            "statement_descriptor":"MERCADOPAGO*MLIVRE","reason":"Jogo De Friso Lateral Pintado Honda City - Produto Novo","shipping_cost":0,"coupon_id":null,"date_created":"2014-05-29T10:59:54.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101004418471,"id":787333793,"total_paid_amount":124.9,"payer_id":13976739,"collector":{"id":89686695,"first_name":"AUTO VIDROS","nickname":"FERKAUTO","email":"vendas@ferkautoparts.com.br","last_name":"NIKKA LTDA ME"},"last_modified":"2014-05-29T10:59:54.000-04:00","first_six_digits":"453211","external_reference":"841205524","transaction_amount":124.9,"card":{"id":139122679,"issuer_id":"25","number_id":"HXBVXBXHMLAQLBZVAZCPVKIAYNDJNYNOXMQDNSYC"},"coupon_amount":null,"client_id":"buflo_web_desktop_mlb","marketplace":"MELI","status_code":"00","currency_id":"BRL","authorization_date":"2014-05-29T10:59:54.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"366207636_777e7777777f37777c75","last_four_digits":"8428","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"695175","date_approved":"2014-05-29T10:59:54.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"7425","statement_descriptor":null,"reason":"Pagamento de Tarifa","shipping_cost":0,"coupon_id":null,"date_created":"2014-05-22T00:09:21.000-04:00",
                            "atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":783548646,"total_paid_amount":93.52,"payer_id":13976739,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"pagamentos@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-05-22T00:09:21.000-04:00","first_six_digits":null,"external_reference":"281524823","transaction_amount":93.52,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"mlrp","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"recurring_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-05-22T00:09:21.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Fatura do MercadoLivre","shipping_cost":0,"coupon_id":null,"date_created":"2014-05-02T08:08:02.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":773204452,"total_paid_amount":36.76,"payer_id":13976739,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"pagamentos@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-05-02T08:08:02.000-04:00",
                            "first_six_digits":null,"external_reference":"277128713","transaction_amount":36.76,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-05-02T08:08:02.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7425","statement_descriptor":null,"reason":"Pagamento de Tarifa","shipping_cost":0,"coupon_id":null,"date_created":"2014-04-22T00:55:14.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":769241033,"total_paid_amount":3,"payer_id":13976739,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"pagamentos@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-04-22T00:55:14.000-04:00","first_six_digits":null,"external_reference":"275439121","transaction_amount":3,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"mlrp","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money",
                            "site_id":"MLB","status_detail":"accredited","operation_type":"recurring_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-04-22T00:55:14.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7425","statement_descriptor":null,"reason":"Pagamento de Tarifa","shipping_cost":0,"coupon_id":null,"date_created":"2014-03-22T01:05:14.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":757117215,"total_paid_amount":41.2,"payer_id":13976739,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"pagamentos@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-03-22T01:05:14.000-04:00","first_six_digits":null,"external_reference":"270075562","transaction_amount":41.2,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"mlrp","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"recurring_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-03-22T01:05:14.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},
                            {"payment":{"created_from":"1504","statement_descriptor":null,"reason":"Blu-ray - Bee Gees - In Our Own Time - Lacrado","shipping_cost":7,"coupon_id":null,"date_created":"2014-08-14T18:19:01.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":824674135,"total_paid_amount":35,"payer_id":27682722,"collector":{"id":78078427,"first_name":"SYLVIO","nickname":"SYLVIOJUNIOR2005","email":"sylviojunior2005@globo.com","last_name":"OLIVEIRA SANTOS JUNIOR"},"last_modified":"2014-08-19T13:18:24.000-04:00","first_six_digits":null,"external_reference":"860716352","transaction_amount":28,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"bolbradesco","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-15T04:22:40.000-04:00","overpaid_amount":0,"payment_type":"ticket"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":"MERCADOPAGO*MLIVRE","reason":"Adaptador Splitter Divisor De Fone E Microfone 2x P2m X 1 J2","shipping_cost":10,"coupon_id":null,
                            "date_created":"2014-07-28T13:26:22.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101145407796,"id":814800517,"total_paid_amount":19.9,"payer_id":27682722,"collector":{"id":44059237,"first_name":"FRANCAVIRTUAL","nickname":"FRANCAVIRTUAL INFO","email":"vendas2@francavirtual.com.br","last_name":"INFORMATICA"},"last_modified":"2014-07-28T16:59:26.000-04:00","first_six_digits":"444054","external_reference":"855661879","transaction_amount":9.9,"card":{"id":141255219,"issuer_id":"25","number_id":"5574829E891EF1B9B873BAB7DE7039DB67E5B502"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":"2014-07-28T13:26:22.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"397284838_357f7f7763626b77737b","last_four_digits":"4607","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"029928","date_approved":"2014-07-28T13:26:22.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"Mouse Wireless X Gamer 3200dpi Super Laser Multilaser Mo172","shipping_cost":9.04,"coupon_id":null,"date_created":"2014-07-22T07:28:26.000-04:00",
                            "atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":811483512,"total_paid_amount":59.03,"payer_id":27682722,"collector":{"id":85836036,"first_name":"Reinventar Recicladores","nickname":"REINVENTARCTBA","email":"reinventarcartuchos@hotmail.com","last_name":"de Cartuchos Ltda"},"last_modified":"2014-07-24T06:29:21.000-04:00","first_six_digits":null,"external_reference":"853998939","transaction_amount":49.99,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.shipping.gz.ShippingCostsGzMigrationJob-4","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"bolbradesco","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-07-23T03:59:20.000-04:00","overpaid_amount":0,"payment_type":"ticket"}},{"payment":{"created_from":"1504","statement_descriptor":null,"reason":"Itunes Gift Card $10 Dolares - Appstore Us Ipod Iphone Ipad","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-30T23:18:15.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":801642180,"total_paid_amount":28.5,"payer_id":27682722,"collector":{"id":53519021,
                            "first_name":"O&N","nickname":"WOWLAND","email":"marcio@wowgames.com.br","last_name":"PRESTACAO DE SERVICOS"},"last_modified":"2014-07-04T08:49:16.000-04:00","first_six_digits":null,"external_reference":"848773333","transaction_amount":28.5,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"bolbradesco","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-07-04T05:14:30.000-04:00","overpaid_amount":0,"payment_type":"ticket"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"Watch Dogs + Bonus - Ps4 Totalmente Em Português - Riosgames","shipping_cost":0,"coupon_id":null,"date_created":"2014-05-26T13:23:21.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":785872220,"total_paid_amount":99.89,"payer_id":27682722,"collector":{"id":144932570,"first_name":"HENRIQUE DE MEIRELLES","nickname":"RIOS GAMES","email":"suporte@riosgames.com.br","last_name":"RABELO RIOS 03412783510"},"last_modified":"2014-05-27T09:24:01.000-04:00","first_six_digits":null,
                            "external_reference":"840403664","transaction_amount":99.89,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"payments-backoffice","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"bolbradesco","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-05-27T09:24:01.000-04:00","overpaid_amount":0,"payment_type":"ticket"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"Dlc Addon Add-on Bf4 Premium R1 Ps4-primário","shipping_cost":0,"coupon_id":null,"date_created":"2014-05-26T13:15:05.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":785868909,"total_paid_amount":84.98,"payer_id":27682722,"collector":{"id":152725588,"first_name":"bruce","nickname":"DTUDOUMPOUCO70","email":"dtudoumpouco2@gmail.com","last_name":"cardoso"},"last_modified":"2014-05-27T11:52:22.000-04:00","first_six_digits":null,"external_reference":"840401412","transaction_amount":84.98,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"BRL",
                            "authorization_date":null,"status":"approved","payment_method_id":"bolbradesco","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-05-27T09:42:43.000-04:00","overpaid_amount":0,"payment_type":"ticket"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"Battlefield 4 Bf4 Psn Ps4 Original Dublado Sistema Primária","shipping_cost":0,"coupon_id":null,"date_created":"2014-04-07T16:25:31.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":763128479,"total_paid_amount":84.9,"payer_id":27682722,"collector":{"id":147271085,"first_name":"luiz gustavo","nickname":"BAURUDIGITALGAMING","email":"carlapicculi@gmail.com","last_name":"de souza"},"last_modified":"2014-04-08T19:41:17.000-04:00","first_six_digits":null,"external_reference":"829463536","transaction_amount":84.9,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"bolbradesco","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,
                            "installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-04-08T14:13:29.000-04:00","overpaid_amount":0,"payment_type":"ticket"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"Call Of Duty Ghosts Psn Cod4 Ps4 Português Sistema Primário","shipping_cost":0,"coupon_id":null,"date_created":"2014-03-24T00:08:48.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":757375940,"total_paid_amount":69,"payer_id":27682722,"collector":{"id":146933462,"first_name":"andre luiz","nickname":"ANDRELUIZPEDROSORODRIGUESDI","email":"andrelprdias@hotmail.com","last_name":"dias"},"last_modified":"2014-03-25T15:52:47.000-04:00","first_six_digits":null,"external_reference":"826348529","transaction_amount":69,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"bolbradesco","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-03-25T12:21:24.000-04:00","overpaid_amount":0,"payment_type":"ticket"}}]}));
                    }
                }else if(userId == 651606578) {
                    response.writeHead(200, {
                        'Content-Type' : 'text/plain; charset=utf-8'
                      });


                          response.write(JSON.stringify({"transactions_list":[{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Fatura do MercadoLivre","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-18T09:59:35.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":825890013,"total_paid_amount":3182.8,"payer_id":85836036,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"walletmlb@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-08-18T09:59:35.000-04:00","first_six_digits":null,"external_reference":"301342303","transaction_amount":3182.8,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-18T09:59:35.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"1000 Etiqueta Lacre Void Casca De Ovo Destrutível Garantia","shipping_cost":15.26,"coupon_id":null,"date_created":"2014-08-12T10:47:23.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":823084561,"total_paid_amount":49.75,"payer_id":85836036,"collector":{"id":72021437,"first_name":"LUIZ ANTONIO","nickname":"ETIQUETA CARIOCA","email":"vendasml@etiquetacarioca.com.br","last_name":"GOMES DE BRITO 10373090730"},"last_modified":"2014-08-12T21:52:01.000-04:00","first_six_digits":null,"external_reference":"859962870","transaction_amount":34.49,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-12T10:47:23.000-04:00","overpaid_amount":0,"payment_type":"account_money"}}]}));


                  }

            }
            else{
                if(qs["role"] == "collector"){
                    console.log("Entro al evento payment con userRole Collector")

                    if(qs["cross_type"] == "document" && (qs["doc_number"] == "09560748396" || qs["doc_number"] == "2342342343")){

                      response.writeHead(200, {
                       'Content-Type' : 'text/plain; charset=utf-8'
                     });

                     response.write(JSON.stringify({"transactions_list":[{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Fatura do MercadoLivre","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-18T09:59:35.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":825890013,"total_paid_amount":3182.8,"payer_id":85836036,"collector":{"id":99754138,"first_name":"Pagamentos","nickname":"@99754138","email":"walletmlb@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-08-18T09:59:35.000-04:00","first_six_digits":null,"external_reference":"301342303","transaction_amount":3182.8,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-18T09:59:35.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"7098342686239412","statement_descriptor":null,"reason":"1000 Etiqueta Lacre Void Casca De Ovo Destrutível Garantia","shipping_cost":15.26,"coupon_id":null,"date_created":"2014-08-12T10:47:23.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":823084561,"total_paid_amount":49.75,"payer_id":85836036,"collector":{"id":72021437,"first_name":"LUIZ ANTONIO","nickname":"ETIQUETA CARIOCA","email":"vendasml@etiquetacarioca.com.br","last_name":"GOMES DE BRITO 10373090730"},"last_modified":"2014-08-12T21:52:01.000-04:00","first_six_digits":null,"external_reference":"859962870","transaction_amount":34.49,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"BRL","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-12T10:47:23.000-04:00","overpaid_amount":0,"payment_type":"account_money"}}]}));
                     response.end();

                    }


                    if(userId == 555666777 && qs["cross_type"] == "document") {

                     response.writeHead(200, {
                      'Content-Type' : 'text/plain; charset=utf-8'
                    });

                    response.write(JSON.stringify({"transactions_list": [{"payment": {"created_from": "963", "statement_descriptor": null, "reason": "Fatura do MercadoLivre", "shipping_cost": 0, "coupon_id": null, "date_created": "2014-07-18T09:59:35.000-04:00", "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "scoring_execution_id": null, "id": 825890013, "total_paid_amount": 3182.8, "payer_id": 85836036, "collector": {"id": 99754138, "first_name": "Pagamentos", "nickname": "@99754138", "email": "walletmlb@mercadolibre.com", "last_name": "Meli"}, "last_modified": "2014-09-28T09:59:35.000-04:00", "first_six_digits": null, "external_reference": "301342303", "transaction_amount": 3182.8, "card": {"id": null, "issuer_id": null, "number_id": null }, "coupon_amount": null, "client_id": "CHO-Lite", "marketplace": "NONE", "status_code": null, "currency_id": "BRL", "authorization_date": null, "status": "approved", "payment_method_id": "account_money", "site_id": "MLB", "status_detail": "accredited", "operation_type": "regular_payment", "transaction_id": null, "last_four_digits": null, "installments": null, "account_money_amount": 0, "finance_charge": null, "authorization_code": null, "date_approved": "2014-08-18T09:59:35.000-04:00", "overpaid_amount": 0, "payment_type": "account_money"} }, {"payment": {"created_from": "7098342686239412", "statement_descriptor": null, "reason": "1000 Etiqueta Lacre Void Casca De Ovo Destrutível Garantia", "shipping_cost": 15.26, "coupon_id": null, "date_created": new Date(), "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "scoring_execution_id": null, "id": 823084561, "total_paid_amount": 49.75, "payer_id": 85836036, "collector": {"id": 72021437, "first_name": "LUIZ ANTONIO", "nickname": "ETIQUETA CARIOCA", "email": "vendasml@etiquetacarioca.com.br", "last_name": "GOMES DE BRITO 10373090730"}, "last_modified": "2014-08-12T21:52:01.000-04:00", "first_six_digits": null, "external_reference": "859962870", "transaction_amount": 34.49, "card": {"id": null, "issuer_id": null, "number_id": null }, "coupon_amount": 0, "client_id": "com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)", "marketplace": "MELI", "status_code": null, "currency_id": "BRL", "authorization_date": null, "status": "approved", "payment_method_id": "account_money", "site_id": "MLB", "status_detail": "accredited", "operation_type": "regular_payment", "transaction_id": null, "last_four_digits": null, "installments": null, "account_money_amount": 0, "finance_charge": null, "authorization_code": null, "date_approved": "2014-08-12T10:47:23.000-04:00", "overpaid_amount": 0, "payment_type": "account_money"} }, {"payment": {"created_from": "963", "statement_descriptor": null, "reason": "Ressarcimento do valor do frete, referente a troca.", "shipping_cost": 0, "coupon_id": null, "date_created": new Date(), "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "scoring_execution_id": null, "id": 819946991, "total_paid_amount": 20.6, "payer_id": 85836036, "collector": {"id": 161376920, "first_name": "Fábio", "nickname": "FABIOLINDOFFS", "email": "fabio.ferreiradasilva@live.com", "last_name": "Ferreira da Silva"}, "last_modified": "2014-08-07T10:56:15.000-04:00", "first_six_digits": null, "external_reference": null, "transaction_amount": 20.6, "card": {"id": null, "issuer_id": null, "number_id": null }, "coupon_amount": null, "client_id": "CHO-Lite", "marketplace": "NONE", "status_code": null, "currency_id": "BRL", "authorization_date": null, "status": "approved", "payment_method_id": "account_money", "site_id": "MLB", "status_detail": "accredited", "operation_type": "money_transfer", "transaction_id": null, "last_four_digits": null, "installments": null, "account_money_amount": 0, "finance_charge": null, "authorization_code": null, "date_approved": "2014-08-07T10:56:15.000-04:00", "overpaid_amount": 0, "payment_type": "account_money"} }, {"payment": {"created_from": "963", "statement_descriptor": null, "reason": "Fatura do MercadoLivre", "shipping_cost": 0, "coupon_id": null, "date_created": "2014-07-16T09:19:21.000-04:00", "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "scoring_execution_id": null, "id": 808990922, "total_paid_amount": 2790.06, "payer_id": 85836036, "collector": {"id": 99754138, "first_name": "Pagamentos", "nickname": "@99754138", "email": "walletmlb@mercadolibre.com", "last_name": "Meli"}, "last_modified": "2014-07-16T09:19:21.000-04:00", "first_six_digits": null, "external_reference": "293948245", "transaction_amount": 2790.06, "card": {"id": null, "issuer_id": null, "number_id": null }, "coupon_amount": null, "client_id": "CHO-Lite", "marketplace": "NONE", "status_code": null, "currency_id": "BRL", "authorization_date": null, "status": "approved", "payment_method_id": "account_money", "site_id": "MLB", "status_detail": "accredited", "operation_type": "regular_payment", "transaction_id": null, "last_four_digits": null, "installments": null, "account_money_amount": 0, "finance_charge": null, "authorization_code": null, "date_approved": "2014-07-16T09:19:21.000-04:00", "overpaid_amount": 0, "payment_type": "account_money"} }, {"payment": {"created_from": "963", "statement_descriptor": null, "reason": "Trimestralidade renovacao Plano Plus 2762014 a 2592014 YHKIFMIZSHF", "shipping_cost": 0, "coupon_id": null, "date_created": "2014-07-07T08:54:19.000-04:00", "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "scoring_execution_id": null, "id": 804367075, "total_paid_amount": 29, "payer_id": 85836036, "collector": {"id": 62267601, "first_name": "Regina", "nickname": "CALCULARFRETE", "email": "cobrancas@calcularfrete.com.br", "last_name": "T Montanari"}, "last_modified": "2014-07-07T08:54:18.000-04:00", "first_six_digits": null, "external_reference": "YHKIFMIZSHF", "transaction_amount": 29, "card": {"id": null, "issuer_id": null, "number_id": null }, "coupon_amount": null, "client_id": "CHO-Lite", "marketplace": "NONE", "status_code": null, "currency_id": "BRL", "authorization_date": null, "status": "approved", "payment_method_id": "account_money", "site_id": "MLB", "status_detail": "accredited", "operation_type": "regular_payment", "transaction_id": null, "last_four_digits": null, "installments": null, "account_money_amount": 0, "finance_charge": null, "authorization_code": null, "date_approved": "2014-07-07T08:54:18.000-04:00", "overpaid_amount": 0, "payment_type": "account_money"} }, {"payment": {"created_from": "7098342686239412", "statement_descriptor": null, "reason": "1000 Etiqueta Lacre Void Casca De Ovo Destrutível Garantia", "shipping_cost": 15.35, "coupon_id": null, "date_created": "2014-06-21T16:22:16.000-04:00", "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "scoring_execution_id": null, "id": 797544268, "total_paid_amount": 49.84, "payer_id": 85836036, "collector": {"id": 72021437, "first_name": "LUIZ ANTONIO", "nickname": "ETIQUETA CARIOCA", "email": "vendasml@etiquetacarioca.com.br", "last_name": "GOMES DE BRITO 10373090730"}, "last_modified": "2014-06-21T18:36:25.000-04:00", "first_six_digits": null, "external_reference": "846744710", "transaction_amount": 34.49, "card": {"id": null, "issuer_id": null, "number_id": null }, "coupon_amount": 0, "client_id": "com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)", "marketplace": "MELI", "status_code": null, "currency_id": "BRL", "authorization_date": null, "status": "approved", "payment_method_id": "account_money", "site_id": "MLB", "status_detail": "accredited", "operation_type": "regular_payment", "transaction_id": null, "last_four_digits": null, "installments": null, "account_money_amount": 0, "finance_charge": null, "authorization_code": null, "date_approved": "2014-06-21T16:22:16.000-04:00", "overpaid_amount": 0, "payment_type": "account_money"} } ] }));

                    }else if(qs["cross_type"] == "document"){
                        response.writeHead(200, {
                          'Content-Type' : 'text/plain; charset=utf-8'
                        });
                        response.write(JSON.stringify({"transactions_list":[{"payment":{"created_from":"963","statement_descriptor":null,"reason":"devolucion de dinero de envio","shipping_cost":0,"coupon_id":null,"date_created":"2014-09-04T18:41:23.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":837847090,"total_paid_amount":50,"payer_id":91688433,"collector":{"id":165140487,"first_name":"maria cecilia","nickname":"MARIACECILIALORDA","email":"cecilorda78@gmail.com","last_name":"lorda"},"last_modified":"2014-09-04T18:41:23.000-04:00","first_six_digits":null,"external_reference":null,"transaction_amount":50,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"money_transfer","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-09-04T18:41:23.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"devolucion del 50% del valor por falla de producto","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-15T17:57:13.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},
                            "scoring_execution_id":null,"id":825111292,"total_paid_amount":125,"payer_id":91688433,"collector":{"id":87167503,"first_name":"sabrina lorena","nickname":"SABRILOCO","email":"sabriloco@yahoo.com.ar","last_name":"cocha"},"last_modified":"2014-08-15T17:57:13.000-04:00","first_six_digits":null,"external_reference":null,"transaction_amount":125,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"money_transfer","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-15T17:57:13.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"devolucion biromes faltantes","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-11T14:46:29.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":822358527,"total_paid_amount":15,"payer_id":91688433,"collector":{"id":127431593,"first_name":"lujan","nickname":"LUJANMATTOS","email":"lujanmattos@gmail.com","last_name":"mattos"},"last_modified":"2014-08-11T14:46:29.000-04:00","first_six_digits":null,"external_reference":null,"transaction_amount":15,
                            "card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"money_transfer","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-11T14:46:29.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Factura de MercadoLibre","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-10T22:11:30.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":821804091,"total_paid_amount":4273.32,"payer_id":91688433,"collector":{"id":99628543,"first_name":"Pagos","nickname":"COBROS2013","email":"walletmla@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-08-10T22:11:30.000-04:00","first_six_digits":null,"external_reference":"299576647","transaction_amount":4273.32,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment",
                            "transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-10T22:11:30.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"devolucion sobrante de envio","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-07T16:02:58.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":820363431,"total_paid_amount":31,"payer_id":91688433,"collector":{"id":123736392,"first_name":"claudio","nickname":"LEDESMACLAUDIO95","email":"caiofann@hotmail.com","last_name":"ledesma"},"last_modified":"2014-08-07T16:02:58.000-04:00","first_six_digits":null,"external_reference":null,"transaction_amount":31,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"money_transfer","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-07T16:02:58.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"devolucion del pago de envio",
                            "shipping_cost":0,"coupon_id":null,"date_created":"2014-08-06T20:26:36.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":819691730,"total_paid_amount":40,"payer_id":91688433,"collector":{"id":134902781,"first_name":"carla daniela","nickname":"CARLADANIELAMERCADO","email":"carla_candidata11@hotmail.com","last_name":"mercado"},"last_modified":"2014-08-06T20:26:35.000-04:00","first_six_digits":null,"external_reference":null,"transaction_amount":40,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"money_transfer","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-06T20:26:35.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"DEVOLUCIÓN EN CONCEPTO DE PAGO DE ENVIO","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-01T15:04:31.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":817213978,"total_paid_amount":35,"payer_id":91688433,"collector":{"id":133653154,"first_name":"mirta","nickname":"MIRTACAAS",
                            "email":"mirtacan@hotmail.com.ar","last_name":"cañas"},"last_modified":"2014-08-01T15:04:30.000-04:00","first_six_digits":null,"external_reference":null,"transaction_amount":35,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"money_transfer","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-08-01T15:04:30.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":null,"statement_descriptor":null,"reason":"Transferencia a ML","shipping_cost":0,"coupon_id":null,"date_created":"2014-07-08T06:28:38.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":149465536,"total_paid_amount":3405.95,"payer_id":91688433,"collector":{"id":99628543,"first_name":"Pagos","nickname":"COBROS2013","email":"walletmla@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-07-08T06:28:45.000-04:00","first_six_digits":null,"external_reference":"291711676","transaction_amount":3405.95,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"/mla/com.mercadopago.web.checkout.controllers.WalletPayMlController",
                            "marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":null,"finance_charge":null,"authorization_code":null,"date_approved":"2014-07-08T06:28:38.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"Devolucion por pago de mas","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-22T18:28:45.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":797868553,"total_paid_amount":150,"payer_id":91688433,"collector":{"id":85533845,"first_name":"flavia paola","nickname":"FLAVIAPALVAREZ","email":"flaviapalvarez@yahoo.com.ar","last_name":"alvarez"},"last_modified":"2014-06-22T18:28:45.000-04:00","first_six_digits":null,"external_reference":null,"transaction_amount":150,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"money_transfer","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,
                            "finance_charge":null,"authorization_code":null,"date_approved":"2014-06-22T18:28:45.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":null,"statement_descriptor":null,"reason":"Transferencia a ML","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-08T19:02:06.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":149225071,"total_paid_amount":3657.87,"payer_id":91688433,"collector":{"id":99628543,"first_name":"Pagos","nickname":"COBROS2013","email":"walletmla@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-06-08T19:02:11.000-04:00","first_six_digits":null,"external_reference":"285112417","transaction_amount":3657.87,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"/mla/com.mercadopago.web.checkout.controllers.WalletPayMlController","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":null,"finance_charge":null,"authorization_code":null,"date_approved":"2014-06-08T19:02:06.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"REINTEGRO POR DIFERENCIA MENSAJERIA.",
                            "shipping_cost":0,"coupon_id":null,"date_created":"2014-05-21T21:41:14.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":783942421,"total_paid_amount":15,"payer_id":91688433,"collector":{"id":96263482,"first_name":"Emiliano","nickname":"ROJOGOMEZ","email":"emiliano.e.gomez@hotmail.com","last_name":"Gomez"},"last_modified":"2014-05-21T21:41:13.000-04:00","first_six_digits":null,"external_reference":null,"transaction_amount":15,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"money_transfer","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-05-21T21:41:13.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"963","statement_descriptor":null,"reason":"EN CONCEPTO DE DEVOLUCION POR COBRO DE MAS. TE PIDO MIL DISCULPAS POR LAS MOLESTIAS. YA LO INFORMAMOS A LA MENSAJERIA. MUCHAS GRACIAS ","shipping_cost":0,"coupon_id":null,"date_created":"2014-05-09T18:02:14.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":776975855,"total_paid_amount":10,"payer_id":91688433,
                            "collector":{"id":98527000,"first_name":"Valeria","nickname":"LAMEXICANA08","email":"alexabueno@hotmail.com","last_name":"Bueno"},"last_modified":"2014-05-09T18:02:14.000-04:00","first_six_digits":null,"external_reference":null,"transaction_amount":10,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"money_transfer","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-05-09T18:02:14.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":null,"statement_descriptor":null,"reason":"Transferencia a ML","shipping_cost":0,"coupon_id":null,"date_created":"2014-05-08T07:26:56.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":148913340,"total_paid_amount":2336.29,"payer_id":91688433,"collector":{"id":99628543,"first_name":"Pagos","nickname":"COBROS2013","email":"cobros@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-05-08T07:26:56.000-04:00","first_six_digits":null,"external_reference":"278295812","transaction_amount":2336.29,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,
                            "client_id":"/mla/com.mercadopago.web.checkout.controllers.WalletPayMlController","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-05-08T07:26:56.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":null,"statement_descriptor":null,"reason":"Transferencia a ML","shipping_cost":0,"coupon_id":null,"date_created":"2014-04-08T17:20:30.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":148415700,"total_paid_amount":1833.24,"payer_id":91688433,"collector":{"id":99628543,"first_name":"Pagos","nickname":"COBROS2013","email":"cobros@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-04-08T17:20:31.000-04:00","first_six_digits":null,"external_reference":"271567136","transaction_amount":1833.24,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"/mla/com.mercadopago.web.checkout.controllers.WalletPayMlController","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited",
                            "operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-04-08T17:20:31.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":"2568868276694852","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Planes Aviones Metal De La Pelicula/cars Blister Dusty","shipping_cost":60.99,"coupon_id":null,"date_created":"2014-08-10T19:59:08.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101175451563,"id":822114303,"total_paid_amount":110.98,"payer_id":135183032,"collector":{"id":108722549,"first_name":"antonella","nickname":"PINPON TOYS","email":"compras1click@gmail.com","last_name":"ribera"},"last_modified":"2014-08-12T07:08:51.000-04:00","first_six_digits":"430496","external_reference":"859508182","transaction_amount":49.99,"card":{"id":141728434,"issuer_id":"294","number_id":"FGDGRHGRYBUIAZWPJAXXTCGEGPILIQKLCTVBXKZP"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-08-10T19:59:08.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"405249009_777c797e77747a7c7a72","last_four_digits":"8661",
                            "installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"012550","date_approved":"2014-08-10T19:59:08.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"2568868276694852","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Loom Band Mambo Telar Fabrica Pulsera 600 Gomitas Ganchitos","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-09T08:56:54.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101173427360,"id":821458428,"total_paid_amount":139.99,"payer_id":135183032,"collector":{"id":18919887,"first_name":"German Enrique","nickname":"JUGUETERIAPEPINO","email":"jugueteriapepino@gmail.com","last_name":"Freyer"},"last_modified":"2014-08-09T12:04:37.000-04:00","first_six_digits":"430496","external_reference":"859223026","transaction_amount":139.99,"card":{"id":141728434,"issuer_id":"294","number_id":"FGDGRHGRYBUIAZWPJAXXTCGEGPILIQKLCTVBXKZP"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-08-09T08:56:55.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"404636894_77766e7776667a797979","last_four_digits":"8661","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"003756",
                            "date_approved":"2014-08-09T08:56:54.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"2568868276694852","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Mesa Ratona 36mm +4 Puff -la Mas Resistente- Envios $100caba","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-29T18:09:38.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101218371854,"id":832982251,"total_paid_amount":1230,"payer_id":37886966,"collector":{"id":85435461,"first_name":"Pablo","nickname":"MADER-DECO","email":"maderdeco@live.com.ar","last_name":"Ortega"},"last_modified":"2014-08-29T21:58:41.000-04:00","first_six_digits":"479375","external_reference":"877395658","transaction_amount":1230,"card":{"id":142532561,"issuer_id":"282","number_id":"AYTSKSTZYUSYKYUQXDCOBYTKLJCFQJKPSKGBETGQ"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-08-29T18:09:38.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"416480096_35777c6b7d3776776b76","last_four_digits":"7660","installments":3,"account_money_amount":0,"finance_charge":0,"authorization_code":"005188","date_approved":"2014-08-29T18:09:38.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},
                            {"payment":{"created_from":"963","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Groupon","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-19T22:16:30.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101196100127,"id":827124180,"total_paid_amount":259,"payer_id":37886966,"collector":{"id":66268233,"first_name":"Groupon","nickname":"GROUPON","email":"mp@groupon.com.ar","last_name":"Argentina Y Uruguay"},"last_modified":"2014-08-19T22:16:30.000-04:00","first_six_digits":"454640","external_reference":"4414085009250881","transaction_amount":259,"card":{"id":131489692,"issuer_id":"1","number_id":"96E787FCBF5153EDFDE60401CEDF384E04648C68"},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":"00","currency_id":"ARS","authorization_date":"2014-08-19T22:16:30.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"410754117_7d77757a73716f7f793d","last_four_digits":"1829","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"006026","date_approved":"2014-08-19T22:16:30.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"963","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Acolchado reversible de 2 plazas. Noches más abrigadas","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-19T21:51:34.000-04:00",
                            "atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101196079851,"id":826976351,"total_paid_amount":299,"payer_id":37886966,"collector":{"id":99708233,"first_name":"Letsbonus","nickname":"LETSBONUSCOM","email":"online_payment_ar@letsbonus.com","last_name":"Com"},"last_modified":"2014-08-19T21:51:34.000-04:00","first_six_digits":"454640","external_reference":"12219467","transaction_amount":299,"card":{"id":131489692,"issuer_id":"1","number_id":"96E787FCBF5153EDFDE60401CEDF384E04648C68"},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":"00","currency_id":"ARS","authorization_date":"2014-08-19T21:51:34.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"410745676_7777736d397865376571","last_four_digits":"1829","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"005726","date_approved":"2014-08-19T21:51:34.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"963","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Un organizador de zapatos bajo cama con capacidad para 12 pares de Sommer Collection.","shipping_cost":0,"coupon_id":null,"date_created":"2014-04-22T10:41:25.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":100903455151,"id":769110918,"total_paid_amount":99,"payer_id":37886966,
                            "collector":{"id":128708593,"first_name":"Club Cupon","nickname":"CLUBCUPON2012","email":"productoscc@clubcupon.com.ar","last_name":null},"last_modified":"2014-04-22T11:25:37.000-04:00","first_six_digits":"454640","external_reference":"4953723","transaction_amount":99,"card":{"id":131489692,"issuer_id":"1","number_id":"96E787FCBF5153EDFDE60401CEDF384E04648C68"},"coupon_amount":0,"client_id":"postNewWorld","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":"2014-04-22T11:22:56.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"346763058_77796d773b3e7c777676","last_four_digits":"1829","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"013444","date_approved":"2014-04-22T10:41:25.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}}]}));
                    }
                    else if(userId == 99708233) {
                        response.writeHead(200, {
                          'Content-Type' : 'text/plain; charset=utf-8'
                        });

                        response.write(JSON.stringify({"transactions_list":[{"payment":{"created_from":"963","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Caloventor frío/calor. La temperatura que vos querés","shipping_cost":0,"coupon_id":null,"date_created":"2014-04-26T10:26:20.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":100914473559,"id":771202094,"total_paid_amount":26,"payer_id":7945524,"collector":{"id":129225799,"first_name":"LetsBonus S.A.","nickname":"LLETSBONUSSA","email":"mp.producto@letsbonus.com","last_name":"LetsBonus S.A."},"last_modified":"2014-04-26T10:26:20.000-04:00","first_six_digits":"454657","external_reference":"11635731","transaction_amount":26,"card":{"id":78620578,"issuer_id":"338","number_id":"AB94638760160FAA16ECFB62F49D534B6FEABC3F"},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":"00","currency_id":"ARS","authorization_date":"2014-04-26T10:26:20.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"349098159_77776b7c677e7777736f","last_four_digits":"8812","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"003682","date_approved":"2014-04-26T10:26:20.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"963","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"compras","shipping_cost":0,
                            "coupon_id":null,"date_created":"2014-04-11T09:53:12.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":100876196108,"id":765071552,"total_paid_amount":6000,"payer_id":68810202,"collector":{"id":1451527,"first_name":"Edgardo","nickname":"SILLONEXPRESS","email":"sillonexpress@ciudad.com.ar","last_name":"Cwik"},"last_modified":"2014-04-11T09:53:12.000-04:00","first_six_digits":"450979","external_reference":"765068306","transaction_amount":6000,"card":{"id":128731379,"issuer_id":"1","number_id":"2FE228C8276174737FFD5A8719FD4223AFF8B6CA"},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":"00","currency_id":"ARS","authorization_date":"2014-04-11T09:53:12.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"money_transfer","transaction_id":"342571914_7367726777797f65777d","last_four_digits":"8520","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"004975","date_approved":"2014-04-11T09:53:12.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"963","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"compras","shipping_cost":0,"coupon_id":null,"date_created":"2014-03-31T20:58:25.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":100846631509,"id":760566601,"total_paid_amount":2500,"payer_id":68810202,
                            "collector":{"id":1451527,"first_name":"Edgardo","nickname":"SILLONEXPRESS","email":"sillonexpress@ciudad.com.ar","last_name":"Cwik"},"last_modified":"2014-03-31T21:00:20.000-04:00","first_six_digits":"430496","external_reference":"759484326","transaction_amount":2500,"card":{"id":137027929,"issuer_id":"294","number_id":"DD4BCE0A0F9E11BF5E358F91434A526A5063F220"},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":"00","currency_id":"ARS","authorization_date":"2014-03-31T21:00:20.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"money_transfer","transaction_id":"337774673_666e77736d777e637476","last_four_digits":"6571","installments":6,"account_money_amount":0,"finance_charge":0,"authorization_code":"005428","date_approved":"2014-03-31T21:00:20.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"2568868276694852","statement_descriptor":"MERCADOPAGO","reason":"Estantes Flotantes Con Ménsula Invisible","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-11T16:29:47.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101042845797,"id":793549783,"total_paid_amount":330,"payer_id":96464095,"collector":{"id":83198981,"first_name":"Alejandro","nickname":"ALEJANDRO_MNS","email":"alejandro_mns@hotmail.com","last_name":"Lopez"},"last_modified":"2014-06-11T19:10:33.000-04:00",
                            "first_six_digits":"603493","external_reference":"844514603","transaction_amount":330,"card":{"id":139536203,"issuer_id":"692","number_id":"DRCVVRMTOPKNBRYPLHKNBTMMZFCZBNIWEUSGOXSN"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-06-11T16:29:47.000-04:00","status":"approved","payment_method_id":"cencosud","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"373400541_747773797a7f357d7d77","last_four_digits":"4810","installments":3,"account_money_amount":0,"finance_charge":0,"authorization_code":"622886","date_approved":"2014-06-11T16:29:47.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"963","statement_descriptor":"MERCADOPAGO","reason":"Groupon","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-11T14:17:50.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101042504974,"id":793699629,"total_paid_amount":358,"payer_id":96464095,"collector":{"id":66268233,"first_name":"Groupon","nickname":"GROUPON","email":"mp@groupon.com.ar","last_name":"Argentina Y Uruguay"},"last_modified":"2014-06-11T14:17:50.000-04:00","first_six_digits":"603493","external_reference":"4414025105717763","transaction_amount":358,"card":{"id":139536203,"issuer_id":"692","number_id":"DRCVVRMTOPKNBRYPLHKNBTMMZFCZBNIWEUSGOXSN"},
                            "coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":"0","currency_id":"ARS","authorization_date":"2014-06-11T14:17:50.000-04:00","status":"approved","payment_method_id":"cencosud","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"373358061_777b3f377730736e6277","last_four_digits":"4810","installments":3,"account_money_amount":0,"finance_charge":0,"authorization_code":"686512","date_approved":"2014-06-11T14:17:50.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"2568868276694852","statement_descriptor":"MERCADOPAGO","reason":"Sandwichera Electrolux Cheff Snack","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-09T17:13:56.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101038655201,"id":792586122,"total_paid_amount":350,"payer_id":96464095,"collector":{"id":80461579,"first_name":"Liliana","nickname":"PLANETA53","email":"ladelfa53@hotmail.com","last_name":"basbous"},"last_modified":"2014-06-09T20:16:24.000-04:00","first_six_digits":"603493","external_reference":"843923394","transaction_amount":350,"card":{"id":139536203,"issuer_id":"692","number_id":"DRCVVRMTOPKNBRYPLHKNBTMMZFCZBNIWEUSGOXSN"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-06-09T17:13:56.000-04:00",
                            "status":"approved","payment_method_id":"cencosud","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"372157105_6666377d79767f7b797b","last_four_digits":"4810","installments":3,"account_money_amount":0,"finance_charge":0,"authorization_code":"602846","date_approved":"2014-06-09T17:13:56.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"5940","statement_descriptor":"MERCADOPAGO","reason":"Tostadora Moulinex Subito","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-09T06:51:37.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101036599794,"id":792210316,"total_paid_amount":450,"payer_id":96464095,"collector":{"id":80461579,"first_name":"Liliana","nickname":"PLANETA53","email":"ladelfa53@hotmail.com","last_name":"basbous"},"last_modified":"2014-06-09T10:20:47.000-04:00","first_six_digits":"603493","external_reference":"843734383","transaction_amount":450,"card":{"id":139536203,"issuer_id":"692","number_id":"DRCVVRMTOPKNBRYPLHKNBTMMZFCZBNIWEUSGOXSN"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-06-09T06:51:38.000-04:00","status":"approved","payment_method_id":"cencosud","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"371670182_7a6b737f63773d7e7f67",
                            "last_four_digits":"4810","installments":3,"account_money_amount":0,"finance_charge":0,"authorization_code":"637075","date_approved":"2014-06-09T06:51:37.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"963","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Salta","shipping_cost":0,"coupon_id":null,"date_created":"2014-03-13T15:39:13.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":100795248647,"id":753991218,"total_paid_amount":4209,"payer_id":62397845,"collector":{"id":129224806,"first_name":"LetsBonus S.A.","nickname":"LETSBONUSSALETSBONUSSA","email":"mpago.viajes@letsbonus.com","last_name":"LetsBonus S.A."},"last_modified":"2014-03-13T15:39:13.000-04:00","first_six_digits":"482469","external_reference":null,"transaction_amount":4209,"card":{"id":136475217,"issuer_id":"338","number_id":"9BFABB16E126BBC0E845EC7283A894FDE24E23E5"},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":"00","currency_id":"ARS","authorization_date":"2014-03-13T15:39:13.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"329869719_7b6e75777f37776f7776","last_four_digits":"6043","installments":3,"account_money_amount":0,"finance_charge":0,"authorization_code":"005618","date_approved":"2014-03-13T15:39:13.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},
                            {"payment":{"created_from":"2568868276694852","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Día Del Padre Perfume Natura Kaiak Masculino* Imperdible!","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-12T16:16:01.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101044497098,"id":793974384,"total_paid_amount":190,"payer_id":71596883,"collector":{"id":79984162,"first_name":"Maria Virginia","nickname":"[VIRIVENTAS]","email":"vir_79@hotmail.com","last_name":"Piola"},"last_modified":"2014-06-12T18:32:08.000-04:00","first_six_digits":"454832","external_reference":"844764737","transaction_amount":190,"card":{"id":61809354,"issuer_id":"1","number_id":"0110AB02A520E552C41EBF4A1F7B7FB6FE48EE42"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-06-12T16:16:01.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"373893895_7d6f737b75777369726f","last_four_digits":"8701","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"012091","date_approved":"2014-06-12T16:16:01.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"2568868276694852","statement_descriptor":"WWW.MERCADOPAGO.COM",
                            "reason":"Día Del Padre Perfume Natura Kaiak Masculino* Imperdible!","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-11T20:54:23.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101043287687,"id":793776200,"total_paid_amount":190,"payer_id":71596883,"collector":{"id":79984162,"first_name":"Maria Virginia","nickname":"[VIRIVENTAS]","email":"vir_79@hotmail.com","last_name":"Piola"},"last_modified":"2014-06-12T00:57:52.000-04:00","first_six_digits":"454832","external_reference":"844583516","transaction_amount":190,"card":{"id":61809354,"issuer_id":"1","number_id":"0110AB02A520E552C41EBF4A1F7B7FB6FE48EE42"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-06-11T20:54:23.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"373484266_3775777f377f777e3777","last_four_digits":"8701","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"005851","date_approved":"2014-06-11T20:54:23.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"2568868276694852","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Camisa Jeans De Gabardina Mujer Lisa Mangas Largas Colores","shipping_cost":0,"coupon_id":null,
                            "date_created":"2014-05-29T12:07:25.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101004620667,"id":787352926,"total_paid_amount":240,"payer_id":71596883,"collector":{"id":136439944,"first_name":"YESICA ROMINA","nickname":"OMG INDUMENTARIA","email":"omgindumentaria@hotmail.com.ar","last_name":"Souto"},"last_modified":"2014-05-29T14:37:38.000-04:00","first_six_digits":"454832","external_reference":"841226835","transaction_amount":240,"card":{"id":61809354,"issuer_id":"1","number_id":"0110AB02A520E552C41EBF4A1F7B7FB6FE48EE42"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-05-29T12:07:25.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"366228253_767e6b7d767e697b667f","last_four_digits":"8701","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"053207","date_approved":"2014-05-29T12:07:25.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"2568868276694852","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Notebook Compu Infantíl Con Pantalla Princesas","shipping_cost":0,"coupon_id":null,"date_created":"2014-04-28T10:24:25.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},
                            "scoring_execution_id":100919820938,"id":771914905,"total_paid_amount":175,"payer_id":71596883,"collector":{"id":91688433,"first_name":"luciana","nickname":"LUCIPIPU","email":"lucipipu@hotmail.com","last_name":"bertera"},"last_modified":"2014-04-29T18:17:46.000-04:00","first_six_digits":"454832","external_reference":"833684116","transaction_amount":175,"card":{"id":61809354,"issuer_id":"1","number_id":"0110AB02A520E552C41EBF4A1F7B7FB6FE48EE42"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-04-28T10:24:25.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"349778254_7e6a76766775736f7d75","last_four_digits":"8701","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"040822","date_approved":"2014-04-28T10:24:25.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"2568868276694852","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Lector Universal De Tarjetas De Memoria Verbatim Usb 2.0","shipping_cost":0,"coupon_id":null,"date_created":"2014-04-24T12:22:53.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":100909289554,"id":770534261,"total_paid_amount":115.42,"payer_id":71596883,
                            "collector":{"id":7055243,"first_name":"Fernando Pablo","nickname":"FSCOMPUTERS","email":"mercado@fscomputers.com.ar","last_name":"Stisman"},"last_modified":"2014-04-24T17:17:53.000-04:00","first_six_digits":"454832","external_reference":"832860653","transaction_amount":99,"card":{"id":61809354,"issuer_id":"1","number_id":"0110AB02A520E552C41EBF4A1F7B7FB6FE48EE42"},"coupon_amount":0,"client_id":"postNewWorld","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-04-24T12:22:54.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"348225072_6777777e677735747577","last_four_digits":"8701","installments":3,"account_money_amount":0,"finance_charge":16.42,"authorization_code":"010954","date_approved":"2014-04-24T12:22:53.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"2568868276694852","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Notebook Compu Infantíl Con Pantalla Princesas","shipping_cost":0,"coupon_id":null,"date_created":"2014-04-19T14:56:41.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":100896735836,"id":768477844,"total_paid_amount":204.03,"payer_id":71596883,"collector":{"id":91688433,"first_name":"luciana","nickname":"LUCIPIPU","email":"lucipipu@hotmail.com","last_name":"bertera"},"last_modified":"2014-04-19T17:25:13.000-04:00",
                            "first_six_digits":"454832","external_reference":"831801840","transaction_amount":175,"card":{"id":61809354,"issuer_id":"1","number_id":"0110AB02A520E552C41EBF4A1F7B7FB6FE48EE42"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-04-19T14:56:41.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"345794791_777e767b733a37766f71","last_four_digits":"8701","installments":3,"account_money_amount":0,"finance_charge":29.03,"authorization_code":"002960","date_approved":"2014-04-19T14:56:41.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"2568868276694852","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Lector Copiador Memorias Sd Micro Sd Sdhc Pro Usb Encore","shipping_cost":45.38,"coupon_id":null,"date_created":"2014-03-26T10:49:23.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":100830989186,"id":758654007,"total_paid_amount":145.36,"payer_id":71596883,"collector":{"id":12112268,"first_name":"JORGE","nickname":"GONDACK","email":"info@gondack.com.ar","last_name":"GONZALEZ"},"last_modified":"2014-03-26T13:03:23.000-04:00","first_six_digits":"454832","external_reference":"826887584","transaction_amount":99.98,"card":{"id":61809354,"issuer_id":"1",
                            "number_id":"0110AB02A520E552C41EBF4A1F7B7FB6FE48EE42"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-03-26T10:49:24.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"335392823_7c67797677777e757537","last_four_digits":"8701","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"011654","date_approved":"2014-03-26T10:49:23.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"963","statement_descriptor":"MERCADOLIBRE","reason":"Factura de MercadoLibre","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-04T15:37:16.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101162151532,"id":818413545,"total_paid_amount":175,"payer_id":10052120,"collector":{"id":99628543,"first_name":"Pagos","nickname":"COBROS2013","email":"walletmla@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-08-04T15:37:16.000-04:00","first_six_digits":"450979","external_reference":"298173191","transaction_amount":175,"card":{"id":61365513,"issuer_id":"1","number_id":"4DB0802084E9883CFB61E2AB22810FF236B0EBCE"},"coupon_amount":null,"client_id":"CHO-Lite","marketplace":"NONE","status_code":"00","currency_id":"ARS",
                            "authorization_date":"2014-08-04T15:37:16.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"401455624_776b7e6f7677317e6e69","last_four_digits":"4453","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"007296","date_approved":"2014-08-04T15:37:16.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":"2568868276694852","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Helicóptero Avatar Rc Mini Control Remoto Juguete Regalo","shipping_cost":0,"coupon_id":null,"date_created":"2014-05-13T08:55:38.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":100959698273,"id":778470272,"total_paid_amount":499.99,"payer_id":10052120,"collector":{"id":114292863,"first_name":"Lucas Ezequiel","nickname":"PLANETATEK","email":"planetatek@hotmail.com.ar","last_name":"Castro Elben"},"last_modified":"2014-05-13T14:16:54.000-04:00","first_six_digits":"450979","external_reference":"837157313","transaction_amount":499.99,"card":{"id":61365513,"issuer_id":"1","number_id":"4DB0802084E9883CFB61E2AB22810FF236B0EBCE"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-05-13T08:55:38.000-04:00","status":"approved","payment_method_id":"visa",
                            "site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"356574813_7d753f37777b7f7f7f7d","last_four_digits":"4453","installments":1,"account_money_amount":0,"finance_charge":0,"authorization_code":"002826","date_approved":"2014-05-13T08:55:38.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}}]}));

                    }
                    if(userId == 1451527) {
                        response.writeHead(200, {
                          'Content-Type' : 'text/plain; charset=utf-8'
                        });
                        response.write(JSON.stringify({"transactions_list":[{"payment":{"created_from":"2568868276694852","statement_descriptor":"WWW.MERCADOPAGO.COM","reason":"Aire Acondicionado York Gaia 4500fr F/c R410","shipping_cost":0,"coupon_id":null,"date_created":"2014-08-11T17:31:08.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":101177470679,"id":822541656,"total_paid_amount":16998,"payer_id":1451527,"collector":{"id":156071823,"first_name":"Praga Home","nickname":"PRAGAHOME","email":"ventas@pragahome.com.ar","last_name":"all in home S.A."},"last_modified":"2014-08-12T10:03:23.000-04:00","first_six_digits":"489467","external_reference":"859773335","transaction_amount":16998,"card":{"id":141816022,"issuer_id":"1026","number_id":"SGXJEOUZGLEUWFEKRDBMYCEVKQYBWYMRBOMJYQLU"},"coupon_amount":0,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","marketplace":"MELI","status_code":null,"currency_id":"ARS","authorization_date":"2014-08-11T17:31:09.000-04:00","status":"approved","payment_method_id":"visa","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":"405784551_6f733774763475737b76","last_four_digits":"7014","installments":12,"account_money_amount":0,"finance_charge":0,"authorization_code":"011454","date_approved":"2014-08-11T17:31:08.000-04:00","overpaid_amount":0,"payment_type":"credit_card"}},{"payment":{"created_from":null,"statement_descriptor":null,
                            "reason":"Transferencia a ML","shipping_cost":0,"coupon_id":null,"date_created":"2014-07-23T09:37:57.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":149668564,"total_paid_amount":15156.36,"payer_id":1451527,"collector":{"id":99628543,"first_name":"Pagos","nickname":"COBROS2013","email":"walletmla@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-07-23T09:38:04.000-04:00","first_six_digits":null,"external_reference":"295405524","transaction_amount":15156.36,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"/mla/com.mercadopago.web.checkout.controllers.WalletPayMlController","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":null,"finance_charge":null,"authorization_code":null,"date_approved":"2014-07-23T09:37:57.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":null,"statement_descriptor":null,"reason":"Transferencia a ML","shipping_cost":0,"coupon_id":null,"date_created":"2014-06-20T10:42:52.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":149324751,"total_paid_amount":13360.77,"payer_id":1451527,
                            "collector":{"id":99628543,"first_name":"Pagos","nickname":"COBROS2013","email":"walletmla@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-06-20T10:42:58.000-04:00","first_six_digits":null,"external_reference":"287855850","transaction_amount":13360.77,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"/mla/com.mercadopago.web.checkout.controllers.WalletPayMlController","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":null,"finance_charge":null,"authorization_code":null,"date_approved":"2014-06-20T10:42:52.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":null,"statement_descriptor":null,"reason":"Transferencia a ML","shipping_cost":0,"coupon_id":null,"date_created":"2014-05-25T20:00:40.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":149084268,"total_paid_amount":15918.25,"payer_id":1451527,"collector":{"id":99628543,"first_name":"Pagos","nickname":"COBROS2013","email":"walletmla@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-05-25T20:00:49.000-04:00","first_six_digits":null,"external_reference":"282095959","transaction_amount":15918.25,
                            "card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"/mla/com.mercadopago.web.checkout.controllers.WalletPayMlController","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved","payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":null,"finance_charge":null,"authorization_code":null,"date_approved":"2014-05-25T20:00:40.000-04:00","overpaid_amount":0,"payment_type":"account_money"}},{"payment":{"created_from":null,"statement_descriptor":null,"reason":"Transferencia a ML","shipping_cost":0,"coupon_id":null,"date_created":"2014-04-21T10:03:49.000-04:00","atm_transfer_reference":{"company_id":null,"transaction_id":null},"scoring_execution_id":null,"id":148671257,"total_paid_amount":9960.21,"payer_id":1451527,"collector":{"id":99628543,"first_name":"Pagos","nickname":"COBROS2013","email":"cobros@mercadolibre.com","last_name":"Meli"},"last_modified":"2014-04-21T10:03:50.000-04:00","first_six_digits":null,"external_reference":"275053985","transaction_amount":9960.21,"card":{"id":null,"issuer_id":null,"number_id":null},"coupon_amount":null,"client_id":"/mla/com.mercadopago.web.checkout.controllers.WalletPayMlController","marketplace":"NONE","status_code":null,"currency_id":"ARS","authorization_date":null,"status":"approved",
                            "payment_method_id":"account_money","site_id":"MLA","status_detail":"accredited","operation_type":"regular_payment","transaction_id":null,"last_four_digits":null,"installments":null,"account_money_amount":0,"finance_charge":null,"authorization_code":null,"date_approved":"2014-04-21T10:03:50.000-04:00","overpaid_amount":0,"payment_type":"account_money"}}]}));
                    }
                }
            }
            response.end();
        }
        if ( qs["event_type"] == "withdraw") {
            console.log("Entro a un evento de tipo withdraw")

            if( qs["doc_number"] == "089765432342" && qs["cross_type"] == "document"){
              response.writeHead(200, {
               'Content-Type' : 'text/plain; charset=utf-8'
             });

             response.write(JSON.stringify({"transactions_list":[{"amount":6861.1,"id":701848407,"last_modified":"2014-09-04T16:32:17.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-09-01T09:58:25.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTACO E COMERCIO LTDA ME","alias":"TRADERA IMPORTACAO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ","is_pep":"N"},"number":"8655/x","type":"checking_account"},"ow_operation_id":833982956},{"amount":5568.1,"id":701777797,"last_modified":"2014-09-01T10:13:57.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-08-27T12:17:56.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTACO E COMERCIO LTDA ME","alias":"TRADERA IMPORTACAO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ","is_pep":"N"},"number":"8655/x","type":"checking_account"},"ow_operation_id":831526484}]}));
             response.end();
            }

            if(userId == 555666777 && qs["cross_type"] == "document") {

                     response.writeHead(200, {
                      'Content-Type' : 'text/plain; charset=utf-8'
                    });

                    response.write(JSON.stringify({"transactions_list": [{"amount": 197, "id": 702421575, "last_modified": "2014-10-09T16:33:40.000-04:00", "currency_id": "BRL", "payer_bank": "citibank", "status": "approved", "site_id": "MLB", "date_created": new Date(), "user_id": 95471385, "status_detail": "approved", "bank_account": {"holder": "EDILAINE FÁTIMA MARTINS", "alias": "EDILAINE FÁTIMA MARTINS", "identification": {"number": "00947802690", "type": "CPF"}, "number": "59103/3", "type": "checking_account"}, "ow_operation_id": 854185481 }, {"amount": 217, "id": 702333241, "last_modified": "2014-10-04T01:47:00.000-04:00", "currency_id": "BRL", "payer_bank": "citibank", "status": "approved", "site_id": "MLB", "date_created": new Date(), "user_id": 95471385, "status_detail": "approved", "bank_account": {"holder": "EDILAINE FÁTIMA MARTINS", "alias": "EDILAINE FÁTIMA MARTINS", "identification": {"number": "00947802690", "type": "CPF"}, "number": "59103/3", "type": "checking_account"}, "ow_operation_id": 852129333 }, {"amount": 297, "id": 702275437, "last_modified": "2014-10-02T05:58:05.000-04:00", "currency_id": "BRL", "payer_bank": "citibank", "status": "approved", "site_id": "MLB", "date_created": new Date(), "user_id": 95471385, "status_detail": "approved", "bank_account": {"holder": "EDILAINE FÁTIMA MARTINS", "alias": "EDILAINE FÁTIMA MARTINS", "identification": {"number": "00947802690", "type": "CPF"}, "number": "59103/3", "type": "checking_account"}, "ow_operation_id": 849947705 }, {"amount": 397, "id": 702202341, "last_modified": "2014-09-25T22:03:02.000-04:00", "currency_id": "BRL", "payer_bank": "citibank", "status": "approved", "site_id": "MLB", "date_created": new Date(), "user_id": 95471385, "status_detail": "approved", "bank_account": {"holder": "EDILAINE FÁTIMA MARTINS", "alias": "EDILAINE FÁTIMA MARTINS", "identification": {"number": "00947802690", "type": "CPF"}, "number": "59103/3", "type": "checking_account"}, "ow_operation_id": 847623486 }, {"amount": 347, "id": 702013341, "last_modified": "2014-09-16T18:10:10.000-04:00", "currency_id": "BRL", "payer_bank": "citibank", "status": "approved", "site_id": "MLB", "date_created": "2014-09-11T03:05:27.000-04:00", "user_id": 95471385, "status_detail": "approved", "bank_account": {"holder": "EDILAINE FÁTIMA MARTINS", "alias": "EDILAINE FÁTIMA MARTINS", "identification": {"number": "00947802690", "type": "CPF"}, "number": "59103/3", "type": "checking_account"}, "ow_operation_id": 841899016 }, {"amount": 177, "id": 701874763, "last_modified": "2014-09-05T13:25:59.000-04:00", "currency_id": "BRL", "payer_bank": "citibank", "status": "approved", "site_id": "MLB", "date_created": "2014-09-11T03:05:27.000-04:00", "user_id": 95471385, "status_detail": "approved", "bank_account": {"holder": "EDILAINE FÁTIMA MARTINS", "alias": "EDILAINE FÁTIMA MARTINS", "identification": {"number": "00947802690", "type": "CPF"}, "number": "59103/3", "type": "checking_account"}, "ow_operation_id": 835530313 } ] }));

            }else if(userId == 143972023 || userId == 151457264) {
                response.writeHead(200, {
                  'Content-Type' : 'text/plain; charset=utf-8'
                });
                if(qs["cross_type"] == "document"){

                    response.write(JSON.stringify({"transactions_list":[{"amount":6861.1,"id":701848407,"last_modified":"2014-09-04T16:32:17.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-09-01T09:58:25.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ","is_pep":"N"},"number":"8655/x","type":"checking_account"},"ow_operation_id":833982956},{"amount":5568.1,"id":701777797,"last_modified":"2014-09-01T10:13:57.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-08-27T12:17:56.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ","is_pep":"N"},"number":"8655/x","type":"checking_account"},"ow_operation_id":831526484},{"amount":5019.81,"id":701732178,"last_modified":"2014-08-27T14:44:01.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-08-24T21:26:37.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ","is_pep":"Y"},"number":"8655/x","type":"checking_account"},"ow_operation_id":829511709},{"amount":6798.58,"id":701684265,"last_modified":"2014-08-26T11:05:26.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-08-21T09:35:55.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":827762218},{"amount":6251.35,"id":701579387,"last_modified":"2014-08-19T20:11:28.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-08-14T09:45:26.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":824420507},{"amount":5135.37,"id":701522865,"last_modified":"2014-08-14T10:46:22.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-08-11T08:34:25.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":822221058},{"amount":7532.88,"id":701484424,"last_modified":"2014-08-12T17:50:38.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-08-07T22:46:02.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":820920382},{"amount":6329.43,"id":701385368,"last_modified":"2014-08-07T06:08:37.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-08-01T13:46:42.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":817291680},{"amount":39139,"id":701303373,"last_modified":"2014-07-31T04:31:19.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-07-27T20:26:23.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":814598619},{"amount":14209,"id":701040564,"last_modified":"2014-07-11T23:49:05.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-07-08T10:42:37.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":805231957},{"amount":16456,"id":700934389,"last_modified":"2014-07-03T19:15:03.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-06-30T13:19:14.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":801336205},{"amount":12000,"id":700850906,"last_modified":"2014-06-27T15:43:39.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-06-24T09:39:09.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":798541220},{"amount":15299,"id":700750643,"last_modified":"2014-06-20T12:31:42.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-06-16T14:56:43.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":795659896},{"amount":12937,"id":700653290,"last_modified":"2014-06-12T15:57:27.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-06-09T13:09:53.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":792353743},{"amount":10455,"id":700578838,"last_modified":"2014-06-06T16:54:13.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-06-03T15:16:02.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":789540971},{"amount":8133,"id":700512949,"last_modified":"2014-06-03T14:34:38.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-05-29T15:25:19.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":787666341},{"amount":11927,"id":700480159,"last_modified":"2014-05-30T15:31:43.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-05-27T14:52:49.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":786424863},{"amount":7190,"id":700382460,"last_modified":"2014-05-23T13:48:51.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-05-20T14:53:57.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":782979139},{"amount":10106,"id":700281542,"last_modified":"2014-05-13T10:35:10.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-05-13T10:35:10.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":778502710},{"amount":4950,"id":700204697,"last_modified":"2014-05-07T10:18:28.000-04:00","currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-05-07T10:18:28.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":775471889},{"amount":14939,"id":10286273,"last_modified":null,"currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-04-14T10:18:04.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":148543833},{"amount":13588,"id":10111269,"last_modified":null,"currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-03-31T11:44:58.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":148244803},{"amount":10997,"id":10023922,"last_modified":null,"currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-03-24T12:43:04.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":148018634},{"amount":10191,"id":9936915,"last_modified":null,"currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-03-17T15:52:08.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":147837392},{"amount":14575,"id":9849351,"last_modified":null,"currency_id":"BRL","payer_bank":"bradesco_withdraw","status":"approved","site_id":"MLB","date_created":"2014-03-10T10:35:58.000-04:00","user_id":65779389,"status_detail":"approved","bank_account":{"holder":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","alias":"TRADERA IMPORTAÇÃO E COMERCIO LTDA ME","identification":{"number":"08169107000170","type":"CNPJ"},"number":"8655/x","type":"checking_account"},"ow_operation_id":147649297},{"amount":584,"id":701837399,"last_modified":"2014-09-03T15:15:34.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-08-31T18:49:29.000-04:00","user_id":59311520,"status_detail":"approved","bank_account":{"holder":"Roterdan Moura da Silva","alias":"Roterdan Moura da Silva","identification":{"number":"05513859793","type":"CPF"},"number":"01315/30","type":"checking_account"},"ow_operation_id":834070551},{"amount":159,"id":701691898,"last_modified":"2014-08-26T16:41:19.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-08-21T16:31:25.000-04:00","user_id":59311520,"status_detail":"approved","bank_account":{"holder":"Roterdan Moura da Silva","alias":"Roterdan Moura da Silva","identification":{"number":"05513859793","type":"CPF"},"number":"01315/30","type":"checking_account"},"ow_operation_id":827921497},{"amount":87,"id":701677977,"last_modified":"2014-08-25T12:48:27.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-08-20T20:50:34.000-04:00","user_id":59311520,"status_detail":"approved","bank_account":{"holder":"Roterdan Moura da Silva","alias":"Roterdan Moura da Silva","identification":{"number":"05513859793","type":"CPF"},"number":"01315/30","type":"checking_account"},"ow_operation_id":827646211},{"amount":393,"id":701335684,"last_modified":"2014-08-01T14:36:06.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-07-29T15:56:11.000-04:00","user_id":59311520,"status_detail":"approved","bank_account":{"holder":"Roterdan Moura da Silva","alias":"Roterdan Moura da Silva","identification":{"number":"05513859793","type":"CPF"},"number":"01315/30","type":"checking_account"},"ow_operation_id":815548994},{"amount":582,"id":701124188,"last_modified":"2014-07-17T13:25:57.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-07-14T18:45:10.000-04:00","user_id":59311520,"status_detail":"approved","bank_account":{"holder":"Roterdan Moura da Silva","alias":"Roterdan Moura da Silva","identification":{"number":"05513859793","type":"CPF"},"number":"01315/30","type":"checking_account"},"ow_operation_id":808054591}]}));
                }
                else{
                    response.write(JSON.stringify({"transactions_list":[{"amount":217,"id":701795070,"last_modified":"2014-09-02T18:19:07.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-08-28T11:20:09.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":831830517},{"amount":256.34,"id":701569541,"last_modified":"2014-08-18T16:40:33.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-08-13T17:23:24.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":823992644},{"amount":397,"id":701495435,"last_modified":"2014-08-13T22:44:51.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-08-08T16:54:00.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":821388861},{"amount":257,"id":701438341,"last_modified":"2014-08-08T10:11:56.000-04:00",
                        "currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-08-05T11:55:44.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":818991472},{"amount":117,"id":701392899,"last_modified":"2014-08-06T14:44:59.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-08-01T23:03:56.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":817506751},{"amount":87,"id":701320831,"last_modified":"2014-07-31T20:31:49.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-07-28T17:31:02.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":814892798},{"amount":167,"id":701288436,"last_modified":"2014-07-30T14:42:30.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-07-26T01:15:54.000-04:00",
                        "user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":813933946},{"amount":157,"id":701154397,"last_modified":"2014-07-21T14:10:36.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-07-16T18:23:28.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":809263219},{"amount":274,"id":700904070,"last_modified":"2014-07-02T17:32:29.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-06-27T16:15:21.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":800309636},{"amount":237,"id":700811858,"last_modified":"2014-06-25T18:11:19.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-06-20T18:35:07.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS",
                        "identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":797244277},{"amount":197,"id":700727625,"last_modified":"2014-06-18T10:06:15.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-06-14T16:55:54.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":794847229},{"amount":297,"id":700621251,"last_modified":"2014-06-11T14:54:04.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-06-06T14:13:07.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":791173501},{"amount":297,"id":700515399,"last_modified":"2014-06-03T11:35:07.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-05-29T18:01:06.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":787831815},
                        {"amount":177,"id":700417088,"last_modified":"2014-05-27T11:57:19.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-05-22T16:39:27.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":784168224},{"amount":247,"id":700339897,"last_modified":"2014-05-21T10:34:02.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-05-17T15:10:34.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":781449316},{"amount":97,"id":700192930,"last_modified":"2014-05-06T13:51:07.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-05-06T13:51:07.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":775161719},{"amount":127,"id":700167834,"last_modified":"2014-05-04T20:59:40.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved",
                        "site_id":"MLB","date_created":"2014-05-04T20:59:40.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":774293077},{"amount":247,"id":700132420,"last_modified":"2014-04-30T17:30:30.000-04:00","currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-04-30T17:30:30.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":773065069},{"amount":247,"id":10377471,"last_modified":null,"currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-04-22T18:57:54.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":148701376},{"amount":247,"id":10196686,"last_modified":null,"currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-04-07T08:59:37.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS",
                        "identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":148385608},{"amount":257,"id":10136682,"last_modified":null,"currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-04-02T00:03:15.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":148286028},{"amount":457,"id":9987934,"last_modified":null,"currency_id":"BRL","payer_bank":"citibank","status":"approved","site_id":"MLB","date_created":"2014-03-20T19:15:29.000-04:00","user_id":95471385,"status_detail":"approved","bank_account":{"holder":"EDILAINE FÁTIMA MARTINS","alias":"EDILAINE FÁTIMA MARTINS","identification":{"number":"00947802690","type":"CPF"},"number":"59103/3","type":"checking_account"},"ow_operation_id":147945321}]}));
                }
            }
            if(userId == 1451527) {
                response.writeHead(200, {
                  'Content-Type' : 'text/plain; charset=utf-8'
                });
                response.write(JSON.stringify({"transactions_list":[{"amount":9015.56,"id":701815414,"last_modified":"2014-09-03T11:51:51.000-04:00","currency_id":"ARS","payer_bank":"citibank","status":"approved","site_id":"MLA","date_created":"2014-08-29T13:40:48.000-04:00","user_id":1451527,"status_detail":"approved","bank_account":{"holder":"Edgardo Cwik","alias":"Edgardo Cwik","identification":{"number":"20130406549","type":"CUIT"},"number":"1500036700008232449950","type":"checking_account"},"ow_operation_id":833046519},{"amount":39772.52,"id":701803210,"last_modified":"2014-09-02T10:10:49.000-04:00","currency_id":"ARS","payer_bank":"citibank","status":"approved","site_id":"MLA","date_created":"2014-08-28T18:50:03.000-04:00","user_id":1451527,"status_detail":"approved","bank_account":{"holder":"Edgardo Cwik","alias":"Edgardo Cwik","identification":{"number":"20130406549","type":"CUIT"},"number":"1500036700008232449950","type":"checking_account"},"ow_operation_id":832272472},{"amount":9667.74,"id":701693799,"last_modified":"2014-08-26T10:36:01.000-04:00","currency_id":"ARS","payer_bank":"citibank","status":"approved","site_id":"MLA","date_created":"2014-08-21T18:10:48.000-04:00","user_id":1451527,"status_detail":"approved","bank_account":{"holder":"Edgardo Cwik","alias":"Edgardo Cwik","identification":{"number":"20130406549","type":"CUIT"},"number":"1500036700008232449950","type":"checking_account"},"ow_operation_id":828133664},{"amount":44842.94,"id":701643075,"last_modified":"2014-08-21T15:56:55.000-04:00","currency_id":"ARS",
                    "payer_bank":"citibank","status":"approved","site_id":"MLA","date_created":"2014-08-18T21:52:07.000-04:00","user_id":1451527,"status_detail":"approved","bank_account":{"holder":"Edgardo Cwik","alias":"Edgardo Cwik","identification":{"number":"20130406549","type":"CUIT"},"number":"1500036700008232449950","type":"checking_account"},"ow_operation_id":826381200},{"amount":3948.42,"id":701583141,"last_modified":"2014-08-20T11:57:53.000-04:00","currency_id":"ARS","payer_bank":"citibank","status":"approved","site_id":"MLA","date_created":"2014-08-14T13:16:08.000-04:00","user_id":1451527,"status_detail":"approved","bank_account":{"holder":"Edgardo Cwik","alias":"Edgardo Cwik","identification":{"number":"20130406549","type":"CUIT"},"number":"1500036700008232449950","type":"checking_account"},"ow_operation_id":824614476}]}));
            }
            response.end();
        }
    },

  deviceProfile : function(request, response) {
    response.writeHead(200, {
      'Content-Type' : 'text/plain; charset=utf-8'
    });

    //si viene una determinada session_id, la respuesta es diferente

    var parts = url.parse(request.url, true);
    var session_id;
    if (parts != null) {
      session_id = parts.query['session_id'];
      device_type = parts.query['device_type'];
    }

    if (device_type == "thm") {
      if (session_id != "000-fail-00") {
        response.write(JSON.stringify({
          "profiling_status": "DONE", "result": "account_login=91497189&account_login_first_seen=2011-07-01&account_login_last_event=2012-04-28&account_login_last_update=2012-04-28&account_login_result=success&account_login_score=0&account_login_worst_score=0&browser_language=es-419,es;q=0.8&browser_string=Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19&browser_string_hash=5655a3fe7bb1b162a5acb8cfd9c91937&css_image_loaded=yes&custom_match_4=5655a3fe7bb1b162a5acb8cfd9c91937&device_first_seen=2012-02-21&device_id=ba67f61c2a1e4df9b84424f11fe59df0&device_id_confidence=100.00&device_last_event=2012-04-28&device_last_update=2012-04-28&device_match_result=success&device_result=success&device_score=0&device_worst_score=0&enabled_ck=yes&enabled_fl=yes&enabled_im=yes&enabled_js=no&event_type=payment&flash_lang=es&flash_os=Windows XP&flash_version=WIN 11,2,202,235&fuzzy_device_first_seen=2012-02-21&fuzzy_device_id=2b08233722044686bc97a99259264041&fuzzy_device_id_confidence=100.00&fuzzy_device_last_event=2012-04-28&fuzzy_device_last_update=2012-04-28&fuzzy_device_match_result=success&fuzzy_device_result=success&fuzzy_device_score=0&fuzzy_device_worst_score=0&headers_name_value_hash=061c67f27ffe4ece75451bdab5186ae1&headers_order_string_hash=84b585dfcdbcae2e6b102ced04d8714c&http_referer=h9abICm8odo096H7JfcJc4fIMh!6723K&image_loaded=yes&local_attrib_1=mla&org_id=jk96mpy0&os=Windows NT 5.1&os_fonts_hash=1a32d0527a9c798c9416c37996051c5a&os_fonts_number=138&policy=default&policy_score=0&profiling_datetime=1335627050&reason_code=1month_ant_device&reason_code=Elevated Risk Persona&request_id=0FE6BF6B-98CB-45F0-A24B-737C96F63EB6&request_result=success&review_status=pass&risk_rating=neutral&screen_dpi=72&screen_res=1024x768&service_type=session-policy&session_id="+session_id+"&summary_risk_score=0&time_zone=-180&time_zone_dst_offset=0&transaction_id=405752020&true_ip=190.31.122.59&true_ip_city=Buenos Aires&true_ip_first_seen=2012-01-05&true_ip_geo=AR&true_ip_isp=Telecom Argentina S.A.&true_ip_last_event=2012-04-28&true_ip_last_update=2012-04-28&true_ip_latitude=-34.58750&true_ip_longitude=-58.67250&true_ip_organization=Telecom Argentina S.A.&true_ip_region=Distrito Federal&true_ip_result=success&true_ip_score=0&true_ip_worst_score=0&ua_browser=chrome&ua_os=winxp&ua_platform=chrome generic"})
        );
      } else {
      response.write(JSON.stringify({
          "profiling_status": "TIMEOUT", "result": null})
        );
      }
    } else if (device_type == "ml") {
      if (session_id == "51a79fb7e4b05cfdb2c2d443") {
        response.write(JSON.stringify({
"profiling_status":"DONE","result":"{\"_id\":\"51a79fb7e4b05cfdb2c2d443\",\"creation_date\":\"2013-05-30T14:51:35.805-04:00\",\"f_time_zone_offset\":null,\"flash_version\":null,\"fonts_hash\":null,\"fuuid\":null,\"hash\":\"12209c2b20df4c442e96d53051eabc4a2dbeb10d9320510fdda9d7bedd619303c83e3a6e6c783de74b85da0c7837af497ab145044a2eeea0485bd0b24859c6e8\",\"hits\":0,\"ips\":[\"177.96.86.212\"],\"js_time_zone_offset\":180,\"jsuuid\":\"83729C1C-B519-450D-A85C-4C7F6FD752F4-15:51:36 GMT-0300 (Hora oficial do Brasil)\",\"lang\":null,\"last_update_by_remember_me\":null,\"last_updated\":\"2013-05-30T14:51:35.805-04:00\",\"local_storage\":true,\"manufacturer\":null,\"os\":null,\"plugins\":{\"flash\":\"11.7\",\"java\":\"7\",\"pdf\":\"10.1.0\",\"quicktime\":\"7.7.3\",\"silverlight\":null,\"wmplayer\":null},\"remember_me_hits\":null,\"resolution\":\"800x1280x32\",\"risk\":0,\"sections\":[],\"server_string\":null,\"session_storage\":true,\"site_id\":null,\"status\":null,\"user_agent\":\"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.94 Safari/537.36\",\"user_id\":null}"}
          ));
      } else if (session_id == "5252cfc1e4b02732d321f089") {
        response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"_id\":\"5252cfc1e4b02732d321f089\",\"all_ips\":[\"186.137.186.88\"],\"creation_date\":\"2013-10-07T11:14:09.618-04:00\",\"device_id\":\"52372cabe4b04707a15c0e77\",\"dsids\":[],\"f_time_zone_offset\":180,\"flash_version\":\"WIN 11,8,800,175\",\"fonts_hash\":\"7a11c2eed6654b6f9673d48978791768caeb807600767dd7220173f9e51be628\",\"fuuid\":\"THPvcWNJHuEcuwyaC2KHXVB3-DSuCVW0VWmvA21cE1SqBk9GN-13:05:15 GMT-0300\",\"fuuids\":[\"THPvcWNJHuEcuwyaC2KHXVB3-DSuCVW0VWmvA21cE1SqBk9GN-13:05:15 GMT-0300\"],\"hash\":\"e440c22adb00c7f3829c31b89a8ec757308948d0d89d975615c2b1b23b684cd812e5b0156827fbf9345ebff43b23f392e69554e12c805f694f4835c8d8f5cee5\",\"hits\":1,\"ips\":[\"186.137.186.88\"],\"js_time_zone_offset\":180,\"jsuuid\":\"F57ECF9E-0F8D-4915-93DE-6086A6485BA8-13:05:08 UTC-0300\",\"jsuuids\":[\"F57ECF9E-0F8D-4915-93DE-6086A6485BA8-13:05:08 UTC-0300\"],\"lang\":\"es\",\"last_update_by_remember_me\":0,\"last_updated\":\"2013-10-07T11:19:12.838-04:00\",\"local_storage\":true,\"login_session_ids\":[],\"manufacturer\":\"Adobe Windows\",\"os\":\"Windows 7\",\"plugins\":{\"flash\":\"11\",\"java\":\"\",\"pdf\":\"\",\"quicktime\":null,\"silverlight\":\"\",\"wmplayer\":\"\"},\"remember_me_hits\":0,\"requests_attributes\":[],\"resolution\":\"768x1366x24\",\"risk\":0,\"sections\":[\"CHOOFF\"],\"server_string\":\"A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=t&PR=t&SP=f&SB=f&DEB=f&V=WIN%2011%2C8%2C800%2C175&M=Adobe%20Windows&R=1366x768&COL=color&AR=1.0&OS=Windows%207&ARCH=x86&L=es&IME=t&PR32=t&PR64=f&PT=ActiveX&AVD=f&LFD=f&WD=f&TLS=t&ML=5.1&DP=72\",\"session_storage\":true,\"site_id\":\"MLA\",\"status\":\"ACTIVE\",\"user_agent\":\"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; BRI/2)\",\"user_id\":145849979}"}));
      } else if (session_id == "5252cfc1e4b02732d321f090") {

        response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"disk_space\":4763,\"device_id\":\"538584fde4b0487c4db2d557\",\"user_id\":152205943,\"site_id\":null,\"last_ip\":\"189.241.206.52\",\"vendor_ids\":[{\"name\":\"serial\",\"value\":\"47903095bf16302a\"},{\"name\":\"android_id\",\"value\":\"8ad31ed23e975cd3\"},{\"name\":\"fsuuid\",\"value\":\"9aade7789ca98770\"},[{\"name\":\"serial\",\"value\":\"47903095bf16302a\"},{\"name\":\"android_id\",\"value\":\"8ad31ed23e975cd3\"},{\"name\":\"fsuuid\",\"value\":\"9aade7789ca98770\"}]],\"system_version\":\"4.1.2\",\"ips\":[\"189.241.196.35\",\"189.241.169.246\",\"189.241.174.211\",\"189.241.140.23\",\"189.241.212.204\",\"189.241.240.49\",\"189.241.207.136\",\"189.241.150.235\",\"189.241.151.13\",\"189.241.238.6\",\"189.241.194.249\",\"189.241.153.102\",\"189.241.255.253\",\"189.241.203.199\",\"189.241.204.57\",\"189.241.171.212\",\"189.241.151.184\",\"189.241.206.52\"],\"resolution\":\"480x800\",\"hits\":23,\"hits_map\":{\"01/06/2014\":1,\"02/06/2014\":1,\"03/06/2014\":2,\"08/05/2014\":3,\"10/05/2014\":1,\"12/05/2014\":2,\"13/05/2014\":2,\"14/05/2014\":1,\"15/05/2014\":1,\"17/05/2014\":1,\"20/05/2014\":1,\"22/05/2014\":1,\"25/05/2014\":1,\"26/05/2014\":1,\"27/05/2014\":1,\"28/05/2014\":2,\"29/05/2014\":1},\"last_updated\":\"2014-06-03T16:18:09.487-04:00\",\"vendor_specific_attributes\":{\"platform\":\"armeabi-v7a\",\"feature_nfc\":null,\"feature_accelerometer\":true,\"feature_bluetooth\":true,\"feature_flash\":true,\"feature_camera\":true,\"product\":\"goldenub\",\"feature_microphone\":true,\"feature_front_camera\":true,\"feature_touch_screen\":true,\"manufacturer\":\"samsung\",\"device\":\"golden\",\"brand\":\"samsung\",\"feature_gyroscope\":true,\"feature_compass\":true,\"screen_density\":1.5,\"feature_telephony\":true,\"feature_gps\":true},\"location\":{\"latitude\":19.63496,\"longitude\":-98.911865,\"timestamp\":1401800038},\"free_disk_space\":1569,\"creation_date\":\"2014-02-28T20:11:27.389-04:00\",\"is_new\":null,\"os\":\"android\",\"model\":\"GT-I8190L\",\"ram\":823408,\"_id\":\"72e26afb4f4dfdc7d466e789667bcb6c5c7517eaa7b55fa254a2c5a696a035d0\"}"}));
        //  response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"_id\":\"5252cfc1e4b02732d321f089\",\"all_ips\":[\"186.137.186.88\"],\"creation_date\":\"2013-10-07T11:14:09.618-04:00\",\"device_id\":\"52372cabe4b04707a15c0e77\",\"dsids\":[],\"f_time_zone_offset\":180,\"flash_version\":\"WIN 11,8,800,175\",\"fonts_hash\":\"7a11c2eed6654b6f9673d48978791768caeb807600767dd7220173f9e51be628\",\"fuuid\":\"THPvcWNJHuEcuwyaC2KHXVB3-DSuCVW0VWmvA21cE1SqBk9GN-13:05:15 GMT-0300\",\"fuuids\":[\"THPvcWNJHuEcuwyaC2KHXVB3-DSuCVW0VWmvA21cE1SqBk9GN-13:05:15 GMT-0300\"],\"hash\":\"e440c22adb00c7f3829c31b89a8ec757308948d0d89d975615c2b1b23b684cd812e5b0156827fbf9345ebff43b23f392e69554e12c805f694f4835c8d8f5cee5\",\"hits\":1,\"ips\":[\"186.137.186.88\"],\"js_time_zone_offset\":180,\"jsuuid\":\"F57ECF9E-0F8D-4915-93DE-6086A6485BA8-13:05:08 UTC-0300\",\"jsuuids\":[\"F57ECF9E-0F8D-4915-93DE-6086A6485BA8-13:05:08 UTC-0300\"],\"lang\":\"es\",\"last_update_by_remember_me\":0,\"last_updated\":\"2013-10-07T11:19:12.838-04:00\",\"local_storage\":true,\"login_session_ids\":[],\"manufacturer\":\"Adobe Windows\",\"os\":\"Windows 7\",\"plugins\":{\"flash\":\"11\",\"java\":\"\",\"pdf\":\"\",\"quicktime\":null,\"silverlight\":\"\",\"wmplayer\":\"\"},\"remember_me_hits\":0,\"requests_attributes\":[],\"resolution\":\"768x1366x24\",\"risk\":0,\"sections\":[\"CHOOFF\"],\"server_string\":\"A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=t&PR=t&SP=f&SB=f&DEB=f&V=WIN%2011%2C8%2C800%2C175&M=Adobe%20Windows&R=1366x768&COL=color&AR=1.0&OS=Windows%207&ARCH=x86&L=es&IME=t&PR32=t&PR64=f&PT=ActiveX&AVD=f&LFD=f&WD=f&TLS=t&ML=5.1&DP=72\",\"session_storage\":true,\"site_id\":\"MLA\",\"status\":\"ACTIVE\",\"user_agent\":\"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; BRI/2)\",\"user_id\":145849979}"}));
      //Agreagdo por mi
      } else if (session_id == "53444d2ee4b02504389c27tyh3") {
        response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"plugins\":{\"flash\":\"13\",\"silverlight\":{},\"pdf\":\"\",\"java\":\"\",\"wmplayer\":\"\",\"quicktime\":{}},\"ips\":[\"191.247.231.42\"],\"resolution\":\"768x1366x24\",\"dsids\":[\"b8085952-5577-4f16-8f4f-679ee15fd0ba-1450470611934\"],\"lang\":{},\"creation_date\":\"2015-12-18T16:30:08.726-04:00\",\"sections\":[],\"fonts_hash\":{},\"f_time_zone_offset\":{},\"_id\":\"6cfdf9cd5c01932f2a9387fd8f316ad3\",\"user_id\":{},\"last_update_by_remember_me\":0,\"server_string\":{},\"os\":{},\"fuuid\":{},\"local_storage\":true,\"status\":{},\"hash\":\"90e2d678cc802457210284302077d91190e66e7d8ed323eb81ad73e64278d24de1f7430f8075b6b7c2a1f739ba75051d74bd030563bb04efdd2facccf76bac45\",\"login_session_ids\":[],\"all_ips\":[\"191.247.231.42\"],\"current_ips\":[\"191.247.231.42\"],\"site_id\":{},\"device_id\":{},\"jsuuid\":\"4f0cdd92-9e4f-424f-ae6e-547ebd48dc62-1450470611950\",\"requests_attributes\":[{\"user_agent\":\"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; NMJB)\",\"ip\":\"191.247.231.42\"}],\"remember_me_hits\":0,\"flash_version\":{},\"hits\":0,\"fuuids\":[],\"manufacturer\":{},\"user_agent\":\"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; NMJB)\",\"last_updated\":\"2015-12-18T16:30:08.726-04:00\",\"session_storage\":true,\"fonts\":{\"os\":2914,\"other_os\":\"[]\",\"not_os\":-2050081164},\"jsuuids\":[\"4f0cdd92-9e4f-424f-ae6e-547ebd48dc62-1450470611950\"],\"js_time_zone_offset\":120}"}));
      } else if (session_id == "568ab5d9e4b002d21690916e") {
        response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"free_disk_space\":{},\"os\":{},\"model\":{},\"last_ip\":\"177.11.142.9\",\"location\":{},\"ips\":[\"177.11.142.9\"],\"disk_space\":{},\"site_id\":\"MLB\",\"device_id\":\"568ab5d9e4b002d21690916e\",\"resolution\":\"900x1600x24\",\"creation_date\":\"2016-01-04T14:07:47.732-04:00\",\"hits_map\":{},\"vendor_ids\":[],\"is_new\":{},\"hits\":1,\"_id\":{},\"ram\":{},\"notification_token\":{},\"user_id\":{},\"last_updated\":\"2016-01-04T14:07:47.732-04:00\",\"vendor_specific_attributes\":{},\"access_tokens\":[],\"system_version\":{}}"}))
      } else if (session_id == "564c8f35e4b038df94a51d1a") {
        response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"disk_space\":12519395328,\"device_id\":\"564c8f35e4b038df94a51d1a\",\"user_id\":201187080,\"notifications_id\":\"91706E4D-AEAF-4D19-BBD0-18615824F69A\",\"site_id\":\"MLA\",\"last_ip\":\"206.132.109.78\",\"system_version\":\"9.0.2\",\"ips\":[\"206.132.109.78\"],\"resolution\":\"414x736\",\"hits\":1,\"hits_map\":{\"04/01/2016\":1},\"last_updated\":\"2016-01-04T14:05:57.069-04:00\",\"vendor_specific_attributes\":{\"can_make_phone_calls\":true,\"cpu_count\":2,\"platform\":\"iPhone7,1\",\"device_family\":0,\"simulator\":false,\"feature_flash\":true,\"feature_camera\":true,\"device_idiom\":\"Phone\",\"device_model\":\"iPhone\",\"can_send_sms\":true,\"feature_front_camera\":true,\"device_name\":\"MP Lab iPhone 6Plus\",\"retina_display_capable\":false,\"video_camera_available\":true,\"device_languaje\":\"es-AR\"},\"location\":null,\"free_disk_space\":9261920256,\"creation_date\":\"2016-01-04T14:05:57.069-04:00\",\"is_new\":null,\"access_tokens\":[{\"client_id\":1945000207238192,\"access_token\":\"APP_USR-1945000207238192-010414-dad943f71b879e170811e016e5144d30__LC_LA__-201187080\"}],\"os\":\"iOS\",\"model\":\"N56AP\",\"ram\":1024458752,\"notification_token\":null,\"_id\":\"b43e84de900918a4469210369cf0027283fc017d92f9ea438733f5800cfe1738\",\"vendor_ids\":[{\"name\":\"vendor_id\",\"value\":\"91706E4D-AEAF-4D19-BBD0-18615824F69A\"},{\"name\":\"uuid\",\"value\":\"5881B874-563B-4B28-8DE1-252FC0DFAC8D\"}]}"}))
      } else if (session_id == "53444d2ee4b02504389c2786") {
        response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"_id\":\"53444d2ee4b02504389c2786\",\"all_ips\":[\"186.137.186.88\"],\"creation_date\":\"2013-10-07T11:14:09.618-04:00\",\"device_id\":\"5220541ae4b09d821901e887\",\"dsids\":[],\"f_time_zone_offset\":180,\"flash_version\":\"WIN 11,8,800,175\",\"fonts_hash\":\"7a11c2eed6654b6f9673d48978791768caeb807600767dd7220173f9e51be628\",\"fuuid\":\"THPvcWNJHuEcuwyaC2KHXVB3-DSuCVW0VWmvA21cE1SqBk9GN-13:05:15 GMT-0300\",\"fuuids\":[\"THPvcWNJHuEcuwyaC2KHXVB3-DSuCVW0VWmvA21cE1SqBk9GN-13:05:15 GMT-0300\"],\"hash\":\"e440c22adb00c7f3829c31b89a8ec757308948d0d89d975615c2b1b23b684cd812e5b0156827fbf9345ebff43b23f392e69554e12c805f694f4835c8d8f5cee5\",\"hits\":1,\"ips\":[\"186.137.186.88\"],\"js_time_zone_offset\":180,\"jsuuid\":\"F57ECF9E-0F8D-4915-93DE-6086A6485BA8-13:05:08 UTC-0300\",\"jsuuids\":[\"F57ECF9E-0F8D-4915-93DE-6086A6485BA8-13:05:08 UTC-0300\"],\"lang\":\"es\",\"last_update_by_remember_me\":0,\"last_updated\":\"2013-10-07T11:19:12.838-04:00\",\"local_storage\":true,\"login_session_ids\":[],\"manufacturer\":\"Adobe Windows\",\"os\":\"Windows 7\",\"plugins\":{\"flash\":\"11\",\"java\":\"\",\"pdf\":\"\",\"quicktime\":null,\"silverlight\":\"\",\"wmplayer\":\"\"},\"remember_me_hits\":0,\"requests_attributes\":[],\"resolution\":\"768x1366x24\",\"risk\":0,\"sections\":[\"CHOOFF\"],\"server_string\":\"A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=t&PR=t&SP=f&SB=f&DEB=f&V=WIN%2011%2C8%2C800%2C175&M=Adobe%20Windows&R=1366x768&COL=color&AR=1.0&OS=Windows%207&ARCH=x86&L=es&IME=t&PR32=t&PR64=f&PT=ActiveX&AVD=f&LFD=f&WD=f&TLS=t&ML=5.1&DP=72\",\"session_storage\":true,\"site_id\":\"MLA\",\"status\":\"ACTIVE\",\"user_agent\":\"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; BRI/2)\",\"user_id\":145849979,\"longitude\":\"+40.689060\",\"latitude\":\"-74.044636\"}"}));

      } else if (session_id == "541af410e4b0d4946f3ff45d_desktop"){ // device profile ml para un pago de desktop
        response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"_id\":\"541af410e4b0d4946f3ff45d_desktop\",\"all_ips\":[\"181.88.178.254\",\"206.132.109.90\",\"181.88.178.11\",\"190.3.68.234\"],\"creation_date\":\"2014-09-18T11:02:40.667-04:00\",\"current_ips\":[\"190.3.68.234\"],\"device_id\":\"5310e2c9e4b09fa0871df8c0\",\"dsids\":[],\"f_time_zone_offset\":180,\"flash_version\":\"MAC 15,0,0,152\",\"fonts\":null,\"fonts_hash\":\"08793ebdd4a1c3583b01b46476363cd228712aefc2d234b96b03a02c656ba84e\",\"fuuid\":\"I1gnghLZzCfbnUniBAsWLrd8-WPSuojO9YSqKY8W1ysAY85XK-15:08:37 GMT-0300\",\"fuuids\":[\"I1gnghLZzCfbnUniBAsWLrd8-WPSuojO9YSqKY8W1ysAY85XK-15:08:37 GMT-0300\"],\"hash\":\"d1efde9c9442e9ec32cf11928e869e99f7eb1ff2ac88dfedb4ea851aa5c25585f24c83f3d71e5d59c6f5ebd6f761a590ea289850c9f25bc6ec2cf43f185f824b\",\"hits\":29,\"ips\":[\"181.88.178.254\",\"206.132.109.90\",\"181.88.178.11\",\"190.3.68.234\"],\"js_time_zone_offset\":180,\"jsuuid\":\"F13993FB-CF0D-4DDA-AE09-AE68B6D2EE76-17:44:03 GMT-0300 (ART)\",\"jsuuids\":[\"F13993FB-CF0D-4DDA-AE09-AE68B6D2EE76-17:44:03 GMT-0300 (ART)\"],\"lang\":\"es\",\"last_update_by_remember_me\":0,\"last_updated\":\"2014-10-02T15:19:57.072-04:00\",\"local_storage\":true,\"login_session_ids\":[],\"manufacturer\":\"Adobe Macintosh\",\"os\":\"Mac OS 10.8.4\",\"plugins\":{\"flash\":\"15.0\",\"java\":\"\",\"pdf\":null,\"quicktime\":\"7.7.1\",\"silverlight\":null,\"wmplayer\":null},\"remember_me_hits\":0,\"requests_attributes\":[],\"resolution\":\"800x1280x24\",\"risk\":0,\"sections\":[\"CHOOFF\"],\"server_string\":\"A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=f&PR=t&SP=f&SB=f&DEB=f&V=MAC%2015%2C0%2C0%2C152&M=Adobe%20Macintosh&R=1280x800&COL=color&AR=1.0&OS=Mac%20OS%2010.8.4&ARCH=x86&L=es&PR32=t&PR64=t&PT=PlugIn&AVD=f&LFD=f&WD=f&TLS=t&ML=5.1&DP=72\",\"session_storage\":true,\"site_id\":\"MLM\",\"status\":\"ACTIVE\",\"user_agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/536.30.1 (KHTML, like Gecko) Version/6.0.5 Safari/536.30.1\",\"user_id\":156096288}"}))
      } else if (session_id == "7be807a05b55a142d5a2dcaa47c3ff557c3a25e45dad80ba3509605216e646ad_ios"){ // device profile ml para un pago de ios
        response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"disk_space\":343371168,\"device_id\":\"5372bc9ce4b0a5561c233c34\",\"user_id\":144358335,\"notifications_id\":\"80C806AB-7B33-47B0-A5AD-0D697549693C\",\"site_id\":\"MLB\",\"last_ip\":\"179.235.255.61\",\"system_version\":\"7.1.2\",\"ips\":[\"179.157.8.242\",\"177.183.45.108\",\"179.157.14.250\",\"179.216.50.132\",\"179.216.61.71\",\"179.253.102.144\",\"177.203.241.46\",\"179.235.255.61\"],\"resolution\":\"320x480\",\"hits\":51,\"hits_map\":{\"01/07/2014\":1,\"01/08/2014\":1,\"01/10/2014\":1,\"02/07/2014\":1,\"02/10/2014\":3,\"03/06/2014\":1,\"03/10/2014\":2,\"04/07/2014\":1,\"04/08/2014\":1,\"05/06/2014\":3,\"05/10/2014\":1,\"06/06/2014\":2,\"07/06/2014\":1,\"07/08/2014\":1,\"09/06/2014\":1,\"10/06/2014\":1,\"11/09/2014\":2,\"12/08/2014\":1,\"13/05/2014\":1,\"16/06/2014\":1,\"17/06/2014\":1,\"18/09/2014\":1,\"19/06/2014\":1,\"20/06/2014\":2,\"20/08/2014\":1,\"20/09/2014\":1,\"21/06/2014\":3,\"21/07/2014\":1,\"23/06/2014\":1,\"24/06/2014\":1,\"25/06/2014\":1,\"26/05/2014\":1,\"26/06/2014\":2,\"27/06/2014\":1,\"29/06/2014\":1,\"30/06/2014\":2,\"30/07/2014\":1,\"31/07/2014\":2},\"last_updated\":\"2014-10-05T19:28:00.670-04:00\",\"vendor_specific_attributes\":{\"can_make_phone_calls\":true,\"platform\":\"iPhone3,2\",\"device_family\":null,\"cpu_count\":1,\"simulator\":null,\"feature_flash\":true,\"feature_camera\":true,\"device_idiom\":\"Phone\",\"can_send_sms\":true,\"device_model\":\"iPhone\",\"feature_front_camera\":true,\"device_name\":\"Lauren rafaella nardi\",\"retina_display_capable\":true,\"video_camera_available\":true,\"device_languaje\":\"pt\"},\"location\":null,\"free_disk_space\":343371472,\"creation_date\":\"2014-05-13T20:45:16.572-04:00\",\"is_new\":null,\"os\":\"iOS\",\"model\":\"N90bAP\",\"ram\":529481728,\"notification_token\":null,\"_id\":\"7be807a05b55a142d5a2dcaa47c3ff557c3a25e45dad80ba3509605216e646ad\",\"vendor_ids\":[{\"name\":\"vendor_id\",\"value\":\"078BA02C-E02C-49C5-8CBE-29D4290C72DC\"},{\"name\":\"uuid\",\"value\":\"80C806AB-7B33-47B0-A5AD-0D697549693C\"},{\"name\":\"vendor_id\",\"value\":\"0FB80DA6-D2E0-49A0-B062-8B1D692A0015\"}]}"}))
      } else if (session_id == "b52276b013c36501ee2283ec0f84dc271d954c93adc47e8b010b6017aa6fdfbe_android"){ // device profile ml para un pago de android
        response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"disk_space\":2015,\"device_id\":\"5385355fe4b091392ac53ddf\",\"user_id\":67105318,\"notifications_id\":\"eb8b8b7a2f2f3326\",\"site_id\":\"MLB\",\"last_ip\":\"177.75.34.168\",\"system_version\":\"2.3.7\",\"ips\":[\"177.75.34.236\",\"177.48.198.1\",\"177.75.33.126\",\"177.75.33.252\",\"177.75.33.169\",\"177.75.33.228\",\"177.75.33.240\",\"191.162.200.134\",\"177.75.34.251\",\"177.75.34.171\",\"177.75.33.102\",\"177.75.33.251\",\"177.37.122.57\",\"177.75.34.68\",\"177.75.33.24\",\"177.75.33.48\",\"177.75.33.164\",\"177.75.44.221\",\"177.75.44.213\",\"177.75.34.174\",\"177.75.32.5\",\"177.48.217.23\",\"179.200.216.124\",\"177.75.34.212\",\"177.48.217.147\",\"177.75.34.141\",\"189.40.64.20\",\"191.160.195.170\",\"177.75.44.131\",\"189.40.65.174\",\"177.75.34.191\",\"191.166.212.213\",\"189.90.116.212\",\"177.75.34.27\",\"177.75.34.168\"],\"resolution\":\"480x854\",\"hits\":290,\"hits_map\":{\"01/09/2014\":1,\"01/10/2014\":2,\"02/09/2014\":1,\"02/10/2014\":4,\"03/09/2014\":2,\"03/10/2014\":2,\"04/09/2014\":3,\"04/10/2014\":3,\"05/09/2014\":2,\"05/10/2014\":3,\"06/09/2014\":1,\"06/10/2014\":1,\"08/09/2014\":2,\"09/09/2014\":2,\"10/09/2014\":1,\"11/09/2014\":2,\"12/09/2014\":1,\"13/09/2014\":1,\"14/09/2014\":2,\"15/08/2014\":3,\"16/08/2014\":2,\"16/09/2014\":2,\"17/08/2014\":2,\"17/09/2014\":1,\"18/08/2014\":3,\"18/09/2014\":2,\"19/08/2014\":3,\"19/09/2014\":1,\"20/08/2014\":3,\"20/09/2014\":2,\"21/08/2014\":3,\"21/09/2014\":1,\"22/08/2014\":1,\"22/09/2014\":3,\"23/08/2014\":3,\"23/09/2014\":3,\"24/08/2014\":2,\"24/09/2014\":4,\"25/08/2014\":2,\"25/09/2014\":3,\"26/08/2014\":2,\"26/09/2014\":3,\"27/08/2014\":2,\"27/09/2014\":2,\"28/08/2014\":3,\"28/09/2014\":2,\"29/08/2014\":1,\"29/09/2014\":3,\"30/08/2014\":1,\"30/09/2014\":3},\"last_updated\":\"2014-10-06T08:52:57.278-04:00\",\"vendor_specific_attributes\":{\"platform\":\"armeabi-v7a\",\"feature_nfc\":null,\"feature_accelerometer\":true,\"feature_bluetooth\":true,\"feature_flash\":true,\"feature_camera\":true,\"product\":\"ST25a_1261-3753\",\"feature_microphone\":true,\"feature_front_camera\":true,\"feature_touch_screen\":true,\"manufacturer\":\"Sony Ericsson\",\"device\":\"ST25a\",\"brand\":\"SEMC\",\"feature_gyroscope\":null,\"feature_compass\":true,\"screen_density\":1.5,\"feature_telephony\":true,\"feature_gps\":true},\"location\":null,\"free_disk_space\":1210,\"creation_date\":\"2014-03-09T00:33:27.656-04:00\",\"is_new\":null,\"os\":\"android\",\"model\":\"ST25a\",\"ram\":376920,\"notification_token\":\"APA91bGBN2IF4FbX0Q5NsWdTR3qpcr8nzsE6YhCGTS3dnIwyxkcNjSZQk_q6de3r46n5OLfJ8-nihZvY0emU7kecX4XqlpMH_vQibSWSiL-ycrqPmnjriflKSOkRcX9BmxU_yQoC8EfK\",\"_id\":\"b52276b013c36501ee2283ec0f84dc271d954c93adc47e8b010b6017aa6fdfbe\",\"vendor_ids\":[{\"name\":\"fsuuid\",\"value\":\"eb8b8b7a2f2f3326\"},{\"name\":\"android_id\",\"value\":\"1013855c51a4e1c\"},{\"name\":\"serial\",\"value\":\"BY900BAVS5\"}]}"}))
      } else if (session_id == "5250afe1e4b0654dd66515d0_web_mobile"){ // device profile ml para un pago de web mobile
        response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"_id\":\"5250afe1e4b0654dd66515d0\",\"all_ips\":[\"187.14.168.89\",\"189.24.192.47\",\"187.14.223.215\",\"189.24.201.19\"],\"creation_date\":\"2013-10-05T20:33:37.092-04:00\",\"current_ips\":[\"189.24.201.19\"],\"device_id\":\"523f2e51e4b030544dcdf988\",\"dsids\":[\"523f7224e4b0b0d5af5ecaf3\",\"5279a64ee4b0c7ef0bee0008\"],\"f_time_zone_offset\":null,\"flash_version\":null,\"fonts\":null,\"fonts_hash\":null,\"fuuid\":null,\"fuuids\":[],\"hash\":\"5fd68aa2e02957b20761731c54d73fcb346dd50f8161935858e7c1d3bd43be3ea091ce21a6f5213798ce55229bbbff6618289b25aac9376b4879d1840fd1d8e1\",\"hits\":14,\"ips\":[],\"js_time_zone_offset\":null,\"jsuuid\":null,\"jsuuids\":[],\"lang\":null,\"last_update_by_remember_me\":0,\"last_updated\":\"2014-10-03T00:01:29.427-04:00\",\"local_storage\":null,\"login_session_ids\":[\"ghy-100520-faqfwph2vgHB6hF9btJD00tnRqVPdk-__-67491102-__-1381030417067--MLB_4-MLB_2\",\"ghy-110522-1zkYIV0SD4YiHz9kiGE9OKzKyHHByK-__-67491102-__-1383714942249--MLB_3-MLB_1\",\"ghy-110523-vsXpIYvOSMAcYw7vyR12rltFUtfs87-__-67491102-__-1383717717064--MLB_2-MLB_4\",\"ghy-110612-ntByojRXtGToQ82nHFehFHfZqjBfEl-__-67491102-__-1383765106081--MLB_4-MLB_2\",\"ghy-110613-lxEwiUmLdMHmZm40aMpIz2NLz9ILGN-__-67491102-__-1383769810467--MLB_3-MLB_4\",\"ghy-110615-oW34E4ZsPdLHFrexJt2Y7MldixWp6G-__-67491102-__-1383777586874--MLB_1-MLB_2\",\"ghy-110617-3Zc6l3VSZkoVgswbFzGrPAGwXbIzEG-__-67491102-__-1383783305330--MLB_1-MLB_4\",\"ghy-110617-DkQXj47R4ibTpLkpnfS2RzBN44Kmvj-__-67491102-__-1383784549237--MLB_3-MLB_4\",\"ghy-110711-FH9UIB34sSxINQ4jjcN0VoZCecP0B3-__-67491102-__-1383847364750--MLB_4-MLB_3\",\"ghy-110715-1tlCvB16YDC8IzEwiMlZeuJ0ZZ3N8d-__-67491102-__-1383863672257--MLB_3-MLB_2\",\"ghy-110715-ddToP9CtFQ7VizxweDurJYShkaFSSI-__-67491102-__-1383863789147--MLB_2-MLB_3\",\"ghy-100223-bDVv91bCS69KKsHdQ63x8YqsqddM8l-__-67491102-__-1413517809364--MLB_3-MLB_5\"],\"manufacturer\":null,\"os\":null,\"plugins\":{\"flash\":null,\"java\":null,\"pdf\":null,\"quicktime\":null,\"silverlight\":null,\"wmplayer\":null},\"remember_me_hits\":0,\"requests_attributes\":[{\"ip\":\"187.14.168.89\",\"user_agent\":\"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.69 Safari/537.36\"},{\"ip\":\"189.24.192.47\",\"user_agent\":\"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36\"},{\"ip\":\"187.14.223.215\",\"user_agent\":\"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36\"},{\"ip\":\"189.24.201.19\",\"user_agent\":\"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36\"}],\"resolution\":null,\"risk\":0,\"sections\":[\"LoginGZ\",\"CHOON\"],\"server_string\":null,\"session_storage\":null,\"site_id\":\"MLB\",\"status\":\"ACTIVE\",\"user_agent\":null,\"user_id\":67491102}"}))
      } else if (session_id == "5654ac8ce4b0ce5e744fafdc"){ // device profile ml para un pago de web mobile
        response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"_id\":\"5250afe1e4b0654dd66515d0\",\"all_ips\":[\"187.14.168.89\",\"189.24.192.47\",\"187.14.223.215\",\"189.24.201.19\"],\"creation_date\":\"2013-10-05T20:33:37.092-04:00\",\"current_ips\":[\"189.24.201.19\"],\"device_id\":\"523f2e51e4b030544dcdf988\",\"dsids\":[\"523f7224e4b0b0d5af5ecaf3\",\"5279a64ee4b0c7ef0bee0008\"],\"f_time_zone_offset\":null,\"flash_version\":null,\"fonts\":null,\"fonts_hash\":null,\"fuuid\":null,\"fuuids\":[],\"hash\":\"5fd68aa2e02957b20761731c54d73fcb346dd50f8161935858e7c1d3bd43be3ea091ce21a6f5213798ce55229bbbff6618289b25aac9376b4879d1840fd1d8e1\",\"hits\":14,\"ips\":[],\"js_time_zone_offset\":null,\"jsuuid\":null,\"jsuuids\":[],\"lang\":null,\"last_update_by_remember_me\":0,\"last_updated\":\"2014-10-03T00:01:29.427-04:00\",\"local_storage\":null,\"login_session_ids\":[\"ghy-100520-faqfwph2vgHB6hF9btJD00tnRqVPdk-__-67491102-__-1381030417067--MLB_4-MLB_2\",\"ghy-110522-1zkYIV0SD4YiHz9kiGE9OKzKyHHByK-__-67491102-__-1383714942249--MLB_3-MLB_1\",\"ghy-110523-vsXpIYvOSMAcYw7vyR12rltFUtfs87-__-67491102-__-1383717717064--MLB_2-MLB_4\",\"ghy-110612-ntByojRXtGToQ82nHFehFHfZqjBfEl-__-67491102-__-1383765106081--MLB_4-MLB_2\",\"ghy-110613-lxEwiUmLdMHmZm40aMpIz2NLz9ILGN-__-67491102-__-1383769810467--MLB_3-MLB_4\",\"ghy-110615-oW34E4ZsPdLHFrexJt2Y7MldixWp6G-__-67491102-__-1383777586874--MLB_1-MLB_2\",\"ghy-110617-3Zc6l3VSZkoVgswbFzGrPAGwXbIzEG-__-67491102-__-1383783305330--MLB_1-MLB_4\",\"ghy-110617-DkQXj47R4ibTpLkpnfS2RzBN44Kmvj-__-67491102-__-1383784549237--MLB_3-MLB_4\",\"ghy-110711-FH9UIB34sSxINQ4jjcN0VoZCecP0B3-__-67491102-__-1383847364750--MLB_4-MLB_3\",\"ghy-110715-1tlCvB16YDC8IzEwiMlZeuJ0ZZ3N8d-__-67491102-__-1383863672257--MLB_3-MLB_2\",\"ghy-110715-ddToP9CtFQ7VizxweDurJYShkaFSSI-__-67491102-__-1383863789147--MLB_2-MLB_3\",\"ghy-100223-bDVv91bCS69KKsHdQ63x8YqsqddM8l-__-67491102-__-1413517809364--MLB_3-MLB_5\"],\"manufacturer\":null,\"os\":null,\"plugins\":{\"flash\":null,\"java\":null,\"pdf\":null,\"quicktime\":null,\"silverlight\":null,\"wmplayer\":null},\"remember_me_hits\":0,\"requests_attributes\":[{\"ip\":\"187.14.168.89\",\"user_agent\":\"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.69 Safari/537.36\"},{\"ip\":\"189.24.192.47\",\"user_agent\":\"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36\"},{\"ip\":\"187.14.223.215\",\"user_agent\":\"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36\"},{\"ip\":\"189.24.201.19\",\"user_agent\":\"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36\"}],\"resolution\":null,\"risk\":0,\"sections\":[\"LoginGZ\",\"CHOON\"],\"server_string\":null,\"session_storage\":null,\"site_id\":\"MLB\",\"status\":\"ACTIVE\",\"user_agent\":null,\"user_id\":67491102}"}))
      } else if (session_id == "5654ac8ce4b0ce5e744fafdc"){
        response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"_id\":\"5250afe1e4b0654dd66515d0\",\"all_ips\":[\"187.14.168.89\",\"189.24.192.47\",\"187.14.223.215\",\"189.24.201.19\"],\"creation_date\":\"2013-10-05T20:33:37.092-04:00\",\"current_ips\":[\"189.24.201.19\"],\"device_id\":\"523f2e51e4b030544dcdf988\",\"dsids\":[\"523f7224e4b0b0d5af5ecaf3\",\"5279a64ee4b0c7ef0bee0008\"],\"f_time_zone_offset\":null,\"flash_version\":null,\"fonts\":null,\"fonts_hash\":null,\"fuuid\":null,\"fuuids\":[],\"hash\":\"5fd68aa2e02957b20761731c54d73fcb346dd50f8161935858e7c1d3bd43be3ea091ce21a6f5213798ce55229bbbff6618289b25aac9376b4879d1840fd1d8e1\",\"hits\":14,\"ips\":[],\"js_time_zone_offset\":null,\"jsuuid\":null,\"jsuuids\":[],\"lang\":null,\"last_update_by_remember_me\":0,\"last_updated\":\"2014-10-03T00:01:29.427-04:00\",\"local_storage\":null,\"login_session_ids\":[\"ghy-100520-faqfwph2vgHB6hF9btJD00tnRqVPdk-__-67491102-__-1381030417067--MLB_4-MLB_2\",\"ghy-110522-1zkYIV0SD4YiHz9kiGE9OKzKyHHByK-__-67491102-__-1383714942249--MLB_3-MLB_1\",\"ghy-110523-vsXpIYvOSMAcYw7vyR12rltFUtfs87-__-67491102-__-1383717717064--MLB_2-MLB_4\",\"ghy-110612-ntByojRXtGToQ82nHFehFHfZqjBfEl-__-67491102-__-1383765106081--MLB_4-MLB_2\",\"ghy-110613-lxEwiUmLdMHmZm40aMpIz2NLz9ILGN-__-67491102-__-1383769810467--MLB_3-MLB_4\",\"ghy-110615-oW34E4ZsPdLHFrexJt2Y7MldixWp6G-__-67491102-__-1383777586874--MLB_1-MLB_2\",\"ghy-110617-3Zc6l3VSZkoVgswbFzGrPAGwXbIzEG-__-67491102-__-1383783305330--MLB_1-MLB_4\",\"ghy-110617-DkQXj47R4ibTpLkpnfS2RzBN44Kmvj-__-67491102-__-1383784549237--MLB_3-MLB_4\",\"ghy-110711-FH9UIB34sSxINQ4jjcN0VoZCecP0B3-__-67491102-__-1383847364750--MLB_4-MLB_3\",\"ghy-110715-1tlCvB16YDC8IzEwiMlZeuJ0ZZ3N8d-__-67491102-__-1383863672257--MLB_3-MLB_2\",\"ghy-110715-ddToP9CtFQ7VizxweDurJYShkaFSSI-__-67491102-__-1383863789147--MLB_2-MLB_3\",\"ghy-100223-bDVv91bCS69KKsHdQ63x8YqsqddM8l-__-67491102-__-1413517809364--MLB_3-MLB_5\"],\"manufacturer\":null,\"os\":null,\"plugins\":{\"flash\":null,\"java\":null,\"pdf\":null,\"quicktime\":null,\"silverlight\":null,\"wmplayer\":null},\"remember_me_hits\":0,\"requests_attributes\":[{\"ip\":\"187.14.168.89\",\"user_agent\":\"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.69 Safari/537.36\"},{\"ip\":\"189.24.192.47\",\"user_agent\":\"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36\"},{\"ip\":\"187.14.223.215\",\"user_agent\":\"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36\"},{\"ip\":\"189.24.201.19\",\"user_agent\":\"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36\"}],\"resolution\":null,\"risk\":0,\"sections\":[\"LoginGZ\",\"CHOON\"],\"server_string\":null,\"session_storage\":null,\"site_id\":\"MLB\",\"status\":\"ACTIVE\",\"user_agent\":null,\"user_id\":67491102}"}))
      } else if (session_id == "61c68f136fb9f43926499412"){
        response.write(JSON.stringify({"profiling_status":"DONE","result":"{\"_id\":\"61c68f136fb9f43926499412\",\"all_ips\":[\"187.14.168.89\",\"189.24.192.47\",\"187.14.223.215\",\"189.24.201.19\"],\"creation_date\":\"2013-10-05T20:33:37.092-04:00\",\"current_ips\":[\"189.24.201.19\"],\"device_id\":\"5548fc87e4b08a18c6cf5507\",\"dsids\":[\"523f7224e4b0b0d5af5ecaf3\",\"5279a64ee4b0c7ef0bee0008\"],\"f_time_zone_offset\":null,\"flash_version\":null,\"fonts\":null,\"fonts_hash\":null,\"fuuid\":null,\"fuuids\":[],\"hash\":\"5fd68aa2e02957b20761731c54d73fcb346dd50f8161935858e7c1d3bd43be3ea091ce21a6f5213798ce55229bbbff6618289b25aac9376b4879d1840fd1d8e1\",\"hits\":14,\"ips\":[],\"js_time_zone_offset\":null,\"jsuuid\":null,\"jsuuids\":[],\"lang\":null,\"last_update_by_remember_me\":0,\"last_updated\":\"2014-10-03T00:01:29.427-04:00\",\"local_storage\":null,\"login_session_ids\":[\"ghy-100520-faqfwph2vgHB6hF9btJD00tnRqVPdk-__-67491102-__-1381030417067--MLB_4-MLB_2\",\"ghy-110522-1zkYIV0SD4YiHz9kiGE9OKzKyHHByK-__-67491102-__-1383714942249--MLB_3-MLB_1\",\"ghy-110523-vsXpIYvOSMAcYw7vyR12rltFUtfs87-__-67491102-__-1383717717064--MLB_2-MLB_4\",\"ghy-110612-ntByojRXtGToQ82nHFehFHfZqjBfEl-__-67491102-__-1383765106081--MLB_4-MLB_2\",\"ghy-110613-lxEwiUmLdMHmZm40aMpIz2NLz9ILGN-__-67491102-__-1383769810467--MLB_3-MLB_4\",\"ghy-110615-oW34E4ZsPdLHFrexJt2Y7MldixWp6G-__-67491102-__-1383777586874--MLB_1-MLB_2\",\"ghy-110617-3Zc6l3VSZkoVgswbFzGrPAGwXbIzEG-__-67491102-__-1383783305330--MLB_1-MLB_4\",\"ghy-110617-DkQXj47R4ibTpLkpnfS2RzBN44Kmvj-__-67491102-__-1383784549237--MLB_3-MLB_4\",\"ghy-110711-FH9UIB34sSxINQ4jjcN0VoZCecP0B3-__-67491102-__-1383847364750--MLB_4-MLB_3\",\"ghy-110715-1tlCvB16YDC8IzEwiMlZeuJ0ZZ3N8d-__-67491102-__-1383863672257--MLB_3-MLB_2\",\"ghy-110715-ddToP9CtFQ7VizxweDurJYShkaFSSI-__-67491102-__-1383863789147--MLB_2-MLB_3\",\"ghy-100223-bDVv91bCS69KKsHdQ63x8YqsqddM8l-__-67491102-__-1413517809364--MLB_3-MLB_5\"],\"manufacturer\":null,\"os\":null,\"plugins\":{\"flash\":null,\"java\":null,\"pdf\":null,\"quicktime\":null,\"silverlight\":null,\"wmplayer\":null},\"remember_me_hits\":0,\"requests_attributes\":[{\"ip\":\"187.14.168.89\",\"user_agent\":\"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.69 Safari/537.36\"},{\"ip\":\"189.24.192.47\",\"user_agent\":\"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36\"},{\"ip\":\"187.14.223.215\",\"user_agent\":\"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36\"},{\"ip\":\"189.24.201.19\",\"user_agent\":\"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36\"}],\"resolution\":null,\"risk\":0,\"sections\":[\"LoginGZ\",\"CHOON\"],\"server_string\":null,\"session_storage\":null,\"site_id\":\"MLB\",\"status\":\"ACTIVE\",\"user_agent\":null,\"user_id\":67491102}"}))
      } else{
        response.write(JSON.stringify({
          "profiling_status": "TIMEOUT", "result": null})
        );
      }
    } else {
       response.write(JSON.stringify({
          "profiling_status": "FAIL", "result": null})
        );
    }
     response.end();

  },

    normalizeString: function(request, response) {
            response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"string_normalized":"são paulo"}));
            response.end();
    },

    normalizeStreet: function(request, response) {
            response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"street_name_normalized":"avenida cipriano del favero"}));
            response.end();
    },

    normalizeAddress: function(request, response) {



            response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"address_string":"avenida justo daract,2351,5700,juana koslay,san luis,argentina"}));
            response.write(JSON.stringify({"address_string":"avenida viento chorrillero,2351,5700,juana koslay,san luis,argentina"}));
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

exports.ping = scoringUtilsController.ping;
exports.emails = scoringUtilsController.emails;
exports.navigationData = scoringUtilsController.navigationData
exports.pld_risk = scoringUtilsController.pld_risk
exports.deviceProfile = scoringUtilsController.deviceProfile
exports.deviceSummary = scoringUtilsController.deviceSummary
exports.itemCategories = scoringUtilsController.itemCategories
exports.navegationSessions = scoringUtilsController.navegationSessions
exports.getMovements = scoringUtilsController.getMovements
exports.mitre = scoringUtilsController.mitre
exports.getPldRisk = scoringUtilsController.getPldRisk
exports.normalizeString = scoringUtilsController.normalizeString
exports.normalizeStreet = scoringUtilsController.normalizeStreet
exports.normalizeAddress = scoringUtilsController.normalizeAddress

// Mappings
urlMapping.add ([
    {
        pattern: '/fraud/device/profiles_summary/flow/(\\w+)/transaction/(\\w+)/type/(\\w+)',
        action: {
            'GET':scoringUtilsController.deviceSummary
        }
    },
    {
        pattern: '/fraud/device/profiles_summary/flow/(\\w+)/transaction/(\\w+)',
        action: {
            'GET':scoringUtilsController.deviceSummary
        }
    },
    {
        pattern: '^/fraud/users/(\\w+)/emails$',

        action: {
            'GET':scoringUtilsController.emails
        }
    },
    {
        pattern: '^/fraud/users/(\\w+)/navigation$',

        action: {
            'GET':scoringUtilsController.navigationData
        }
    },
    {
        pattern: '^/fraud/users/(\\w+)/pld_risk$',

        action: {
            'GET':scoringUtilsController.getPldRisk
        }
    },
    {
       pattern: '^/fraud/device/profile$',

        action: {
          'GET':scoringUtilsController.deviceProfile
       }
    },
    {
       pattern: '^/fraud/utils/order_items',

        action: {
          'POST':scoringUtilsController.itemCategories
       }
    },
    {
        pattern: '^/fraud/utils/ping',
        action: {
            'GET': scoringUtilsController.ping
        }
    },
    {
        pattern: '^/fraud/users/(\\w+)/navigation/sessions',
        action: {
            'GET': scoringUtilsController.navegationSessions
        }
    },
    {
        pattern: '^/fraud/browser_pattern/ping',
        action: {
            'GET': scoringUtilsController.ping
        }
    },
    {
        pattern: '^/fraud/transactions/.*',
        action: {
            'GET': scoringUtilsController.getMovements
        }
    },
    {
        pattern: '^/fraud/mitre',

         action: {
           'POST':scoringUtilsController.mitre
        }
     },
     {
        pattern: '^/fraud/addresses/normalization/string',

         action: {
           'POST':scoringUtilsController.normalizeString
        }
     },
     {
        pattern: '^/fraud/addresses/normalization/street',

         action: {
           'POST':scoringUtilsController.normalizeStreet
        }
     },
     {
        pattern: '^/fraud/addresses/normalization',

         action: {
           'POST':scoringUtilsController.normalizeAddress
        }
     }


    ]);
