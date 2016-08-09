var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var deviceMLController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(["pong"]));
            response.end();        
        },


        deviceProfiles: function(request, response){
                        response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            var result = [
                {"_id":"5080ab52e4b083ae970925be","creation_date":"2012-10-18T21:22:26.680-04:00",
                    "crosses":[
                        {"_id":"514908ade4b02760475b0afe","creation_date":"2013-03-19T20:54:05.159-04:00","detailed_status":{"site_status":"active"},"fuuid":"GluJ2g7xaqeEopzBSj3nLGXF-bkcXwuLcJoCGxutW3dgBCLdo-22:37:01 GMT-0300","ips":["177.35.217.3","177.34.177.254"],"last_updated":"2013-03-20T14:48:06.828-04:00","registration_date":"2009-12-22T15:18:34.000-04:00","score":"42","status":"active","user_id":97255784},
                        {"_id":"513a062be4b0141992e8fab6","creation_date":"2013-03-08T11:39:23.215-04:00","detailed_status":{"site_status":"active"},"fuuid":"GluJ2g7xaqeEopzBSj3nLGXF-bkcXwuLcJoCGxutW3dgBCLdo-22:37:01 GMT-0300","ips":["177.35.222.141"],"last_updated":"2013-03-13T10:54:52.668-04:00","registration_date":"2009-12-22T15:18:34.000-04:00","score":"42","status":"active","user_id":97255784},
                        {"_id":"51314fb5e4b0243d5b1acbdc","creation_date":"2013-03-01T21:02:45.459-04:00","detailed_status":{"site_status":"active"},"fuuid":"GluJ2g7xaqeEopzBSj3nLGXF-bkcXwuLcJoCGxutW3dgBCLdo-22:37:01 GMT-0300","ips":["177.35.216.219"],"last_updated":"2013-03-01T21:02:54.207-04:00","registration_date":"2009-12-22T15:18:34.000-04:00","score":"42","status":"active","user_id":97255784},
                        {"_id":"51217055e4b0ce97600d0aa3","creation_date":"2013-02-17T20:05:41.938-04:00","detailed_status":{"site_status":"active"},"fuuid":"GluJ2g7xaqeEopzBSj3nLGXF-bkcXwuLcJoCGxutW3dgBCLdo-22:37:01 GMT-0300","ips":["201.76.94.110"],"last_updated":"2013-02-20T20:08:05.312-04:00","registration_date":"2009-12-22T15:18:34.000-04:00","score":"42","status":"active","user_id":97255784},
                        {"_id":"5118e01de4b0e767346d74eb","creation_date":"2013-02-11T08:12:13.474-04:00","detailed_status":{"site_status":"active"},"fuuid":"GluJ2g7xaqeEopzBSj3nLGXF-bkcXwuLcJoCGxutW3dgBCLdo-22:37:01 GMT-0300","ips":["201.76.94.110"],"last_updated":"2013-02-11T09:01:55.122-04:00","registration_date":"2009-12-22T15:18:34.000-04:00","score":"42","status":"active","user_id":97255784},
                        {"_id":"51150f3de4b0d0668efed5df","creation_date":"2013-02-08T10:44:13.939-04:00","detailed_status":{"site_status":"active"},"fuuid":"GluJ2g7xaqeEopzBSj3nLGXF-bkcXwuLcJoCGxutW3dgBCLdo-22:37:01 GMT-0300","ips":["201.76.94.110"],"last_updated":"2013-02-08T10:44:23.423-04:00","registration_date":"2009-12-22T15:18:34.000-04:00","score":"42","status":"active","user_id":97255784}],
                    "f_time_zone_offset":null,"flash_version":null,"fonts_hash":null,"fuuid":"GluJ2g7xaqeEopzBSj3nLGXF-bkcXwuLcJoCGxutW3dgBCLdo-22:37:01 GMT-0300","hash":"5fd68aa2e02957b20761731c54d73fcb346dd50f8161935858e7c1d3bd43be3ea091ce21a6f5213798ce55229bbbff6618289b25aac9376b4879d1840fd1d8e1","hits":null,"ips":["201.76.84.17"],"js_time_zone_offset":null,"jsuuid":null,"lang":null,"last_updated":"2012-10-18T21:22:36.492-04:00","local_storage":null,"manufacturer":null,"os":null,"plugins":null,"resolution":null,"sections":["LGZ"],"server_string":null,"session_storage":null,"site_id":"MLB","status":null,"user_agent":null,"user_id":15652091},
                {"_id":"50b622d5e4b0b0db232e5f22","creation_date":"2012-11-28T10:42:29.426-04:00","crosses":[],"f_time_zone_offset":null,"flash_version":null,"fonts_hash":null,"fuuid":"0O4uT2zg1khJ68CEyzrjE4S9-B73fjEJ2Kdl3BkfKcXwarA80-09:00:06 GMT-0200","hash":"5fd68aa2e02957b20761731c54d73fcb346dd50f8161935858e7c1d3bd43be3ea091ce21a6f5213798ce55229bbbff6618289b25aac9376b4879d1840fd1d8e1","hits":null,"ips":["201.76.84.17"],"js_time_zone_offset":null,"jsuuid":null,"lang":null,"last_updated":"2012-12-06T07:00:11.705-04:00","local_storage":null,"manufacturer":null,"os":null,"plugins":null,"resolution":null,"sections":["LGZ"],"server_string":null,"session_storage":null,"site_id":"MLB","status":null,"user_agent":null,"user_id":15652091}
                ]

            response.write(JSON.stringify(result));
            response.end();
            
        },

         getDevices: function(request, response){
                        response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            var result = [
                                
                {"_id":"5080ab52e4b083ae970925be","creation_date":"2012-09-27T14:27:03.583-04:00","f_time_zone_offset":180,"flash_version":"WIN 11,3,31,331","fonts_hash":"63412120fbb44634b880a8b4decb1f58008ec0fe0c46dfeee7bb3f2f2c2cb284",
                  "fuuid":"GluJ2g7xaqeEopzBSj3nLGXF-bkcXwuLcJoCGxutW3dgBCLdo-22:37:01 GMT-0300","hash":"3a2f952c9432461e55dc21adb4a81c851c587319dce82f2d91432f46b80abef91d1ea9f8bb5f324265f994a69b651e6e259abc389317ce931fb7e55ad178e01e",
                  "hits":null,"ips":["201.76.92.202","187.39.208.4","201.76.84.17"],"js_time_zone_offset":180,"jsuuid":"CF4FE4E2-A450-4792-BE6F-5FA6AA2E0050-22:37:03 GMT-0300 (Hora oficial do Brasil)","lang":"pt",
                  "last_updated":"2012-10-03T23:19:35.247-04:00","local_storage":true,"manufacturer":"Google Pepper","os":"Windows 7","plugins":{"flash":"11.3","java":null,"pdf":null,"quicktime":null,"silverlight":null,"wmplayer":null},
                  "resolution":"768x1366x32","risk":0,"sections":["LGZ"],
                  "server_string":"A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=t&PR=t&SP=f&SB=f&DEB=f&V=WIN%2011%2C3%2C31%2C331&M=Google%20Pepper&R=1366x768&COL=color&AR=1.0&OS=Windows%207&ARCH=x86&L=pt&IME=t&PR32=t&PR64=f&PT=PlugIn&AVD=f&LFD=f&WD=f&TLS=t&ML=5.1&DP=72",
                  "session_storage":true,"site_id":"MLB","status":"ACTIVE","user_agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.79 Safari/537.4","user_id":15652091},
                {"_id":"50b622d5e4b0b0db232e5f22","creation_date":"2012-11-28T10:42:29.426-04:00","f_time_zone_offset":120,"flash_version":"WIN 11,4,402,287","fonts_hash":"2d368396a21fbc4c36aff5d7071f32da717964cd17fa269b2a1a6a8d285d2a28",
                  "fuuid":"0O4uT2zg1khJ68CEyzrjE4S9-B73fjEJ2Kdl3BkfKcXwarA80-09:00:06 GMT-0200","hash":"1ac393851650102626261b3705827266162ac4b3d64de65e54bd4dbb02b36f277963abaafc6f632957de9032de344f6161c118324b0d8973446abaf309a2b1f7",
                  "hits":null,"ips":["201.76.84.17"],"js_time_zone_offset":120,"jsuuid":"46A783A6-E328-42F8-AD56-4209C64CF45A-09:00:07 UTC-0200","lang":"pt","last_updated":"2012-12-06T07:00:11.705-04:00","local_storage":true,
                  "manufacturer":"Adobe Windows","os":"Windows 7","plugins":{"flash":"11","java":null,"pdf":null,"quicktime":null,"silverlight":null,"wmplayer":""},"resolution":"768x1366x32","risk":0,"sections":["LGZ"],
                  "server_string":"A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=t&PR=t&SP=f&SB=f&DEB=f&V=WIN%2011%2C4%2C402%2C287&M=Adobe%20Windows&R=1366x768&COL=color&AR=1.0&OS=Windows%207&ARCH=x86&L=pt&IME=t&PR32=t&PR64=t&PT=ActiveX&AVD=f&LFD=f&WD=f&TLS=t&ML=5.1&DP=72",
                  "session_storage":true,"site_id":"MLB","status":"ACTIVE","user_agent":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; GTB7.4; BTRS63689; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; AskTbORJ/5.15.2.23037)","user_id":15652091}
            ]

            response.write(JSON.stringify(result));
            response.end();
            
        },

        getProfileSession: function(request, response){
                        response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var sessionId = getSessionId(request);
            var result 
            switch(sessionId) {
                case 'huf-not-found-response':
                case '4d696f146f4763e53ee1ae6c40d2b134':
                    jsonHandler.showNotFoundResponse({
                    message:"device not found"
                    }, response);
                return;
                break
                default :
                    result = 
                    {"_id":"519a2e4de4b0a208ff028481","creation_date":"2013-05-20T10:08:13.442-04:00","f_time_zone_offset":180,"flash_version":"MAC 11,7,700,202","fonts_hash":"fcd2d4bddb0a877d4d752703485496384fd6fdc58acc345c549a1f0950e83f9f",
                    "fuuid":"mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16:12:47 GMT-0300","hash":"9b3641fcf9d3eda744b2745aed57ee06dc8a3b39dc8c8b0fbc0c82c74180621b510e638b6ec6869ae9529ae447f00601ce2c5ee4cc4289ade35c2765bf43cdcb","hits":null,
                    "ips":["200.41.238.50"],"dsids": ["53026cd9e4b0e571b9b20ea6"],"js_time_zone_offset":180,"jsuuid":"8A621F2D-2DBE-4803-B66D-6CED910F9019-19:58:29 GMT-0300 (ART)","lang":"en","last_update_by_remember_me":null,"last_updated":"2013-05-20T10:08:13.442-04:00","local_storage":true,
                    "manufacturer":"Google Pepper","os":"Mac OS 10.7.4","plugins":{"flash":"11.7","java":null,"pdf":null,"quicktime":"7.7.1","silverlight":null,"wmplayer":null},"remember_me_hits":null,"resolution":"800x1280x24","risk":0,"sections":[],
                    "server_string":"A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=t&PR=t&SP=f&SB=f&DEB=f&V=MAC%2011%2C7%2C700%2C202&M=Google%20Pepper&R=1280x800&COL=color&AR=1.0&OS=Mac%20OS%2010.7.4&ARCH=x86&L=en&IME=t&PR32=t&PR64=f&PT=PlugIn&AVD=f&LFD=f&WD=f&TLS=t&ML=5.1&DP=72",
                    "session_storage":true,"site_id":null,"status":null,"user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.65 Safari/537.31","user_id":null}
                break;

            }

            response.write(JSON.stringify(result));
            response.end();
            
        },

        currentDeviceProfile: function(request, response){
                        
            var profileId = getProfileId(request);

            if ("profileId-not-found-response" == profileId) {
                 jsonHandler.showNotFoundResponse({
                    message:"device not found"
                }, response);
                return;
            }

            if ("profileId-empty-response" == profileId) {
                 jsonHandler.showOKResponse({}, response);
                return;
            }


            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/internal/users/(.*)/device_profiles/(.*)');
            uriRegExp.exec(pathname);
            var userId = RegExp.$1;
            var sessionId = RegExp.$2;

            var result
            switch(sessionId) {
                case '4d696f146f4763e53ee1ae6c40d2b134' :
                        jsonHandler.showNotFoundResponse({
                            message:"device not found"
                        }, response);
                        return;
                break;

                default :
                    result = 
                        {"_id":"519a2e4de4b0a208ff028481","device_id":"519a2e4de4b0a208ff028481","all_ips":["200.41.238.50","123.123.123.123"],"creation_date":"2013-05-20T10:08:13.442-04:00","f_time_zone_offset":180,"flash_version":"MAC 11,7,700,202","fonts_hash":"fcd2d4bddb0a877d4d752703485496384fd6fdc58acc345c549a1f0950e83f9f",
                        "fuuid":"mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16:12:47 GMT-0300","hash":"9b3641fcf9d3eda744b2745aed57ee06dc8a3b39dc8c8b0fbc0c82c74180621b510e638b6ec6869ae9529ae447f00601ce2c5ee4cc4289ade35c2765bf43cdcb","hits":null,
                        "ips":["200.41.238.50"],"js_time_zone_offset":180,"jsuuid":"8A621F2D-2DBE-4803-B66D-6CED910F9019-19:58:29 GMT-0300 (ART)","lang":"en","last_update_by_remember_me":null,"last_updated":"2013-05-20T10:08:13.442-04:00","local_storage":true,
                        "manufacturer":"Google Pepper","os":"Mac OS 10.7.4","plugins":{"flash":"11.7","java":null,"pdf":null,"quicktime":"7.7.1","silverlight":null,"wmplayer":null},"remember_me_hits":null,"resolution":"800x1280x24","risk":0,"sections":[],
                        "server_string":"A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=t&PR=t&SP=f&SB=f&DEB=f&V=MAC%2011%2C7%2C700%2C202&M=Google%20Pepper&R=1280x800&COL=color&AR=1.0&OS=Mac%20OS%2010.7.4&ARCH=x86&L=en&IME=t&PR32=t&PR64=f&PT=PlugIn&AVD=f&LFD=f&WD=f&TLS=t&ML=5.1&DP=72",
                        "session_storage":true,"site_id":null,"status":null,"user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.65 Safari/537.31","user_id":null}
                    break;
            }
            
            

            response.write(JSON.stringify(result));
            response.end();
            
        },

        computeScoringForAccountUniqueness : function(request, response) {
            jsonHandler.getContent(request, function(data) {
                var scoring = searchUniquenessScore(data.user_id);//resourceManager.searchResource('fake_device_scoring_account_uniqueness', data.user_id);
                
                if(scoring == null){     
                    console.log("Score not found! Creating one!");                               
                    scoring = deviceMLController.buildDeviceScoring(data);
                    scoring.id = data.user_id;
                    resourceManager.saveResource('fake_device_scoring_account_uniqueness', scoring);
                }
                
                var profile;
                
                if(data.session_id){
                    profile = resourceManager.searchResource('device_profile_sessions', data.session_id);
                    scoring.is_session = true;
                }else {
                    profile = resourceManager.searchResource('user_devices', data.device_profile_id);
                    scoring.is_session = false;
                }
                
                scoring.section = data.section;
                
                scoring.device_profile = profile;

                console.log("Returning " + JSON.stringify(scoring));

                
                jsonHandler.showOKResponse(scoring, response);
            });
    },

    computeSecondScoringForAccountUniqueness : function(request, response) {

        var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('^/internal/device_profiles/device_scoring/account_uniqueness/(.*)/extended_scoring');
            uriRegExp.exec(pathname);
            var scoreId = RegExp.$1;

        jsonHandler.getContent(request, function(data) {            
            var score

            if(scoreId == 222222){
                //MID
                score = {"apply_buy_eq_pay":"apply_error","creation_date":"2014-03-13T17:17:58.454-04:00","device_id":"53221e1be4b0b47e358acd6b","extended_rules":[{"name":"has_free_pass_tc","result":false,"value":false},{"name":"is_in_bl","result":true,"value":false},{"name":"crosses_count","result":false,"value":1},{"name":"deactive_users_count","result":false,"value":0},{"name":"close_site_since_users_count","result":false,"value":1}],"risk":"MID","scoring_id":"780e3d8d22ae8077d9ae9a3ad27953a4ffd1e4cb6b355bc8aef53e97dec358f05fc883173449c7db1b82c5ba8e652a14","user_id":155455675}
            }else if(scoreId == 333333 || scoreId == 4005 ){
                //LOW
                score = {"apply_buy_eq_pay":"apply_error","creation_date":"2014-03-13T17:17:58.454-04:00","device_id":"53221e1be4b0b47e358acd6b","extended_rules":[{"name":"has_free_pass_tc","result":false,"value":false},{"name":"is_in_bl","result":true,"value":false},{"name":"crosses_count","result":false,"value":1},{"name":"deactive_users_count","result":false,"value":0},{"name":"close_site_since_users_count","result":false,"value":1}],"risk":"LOW","scoring_id":"780e3d8d22ae8077d9ae9a3ad27953a4ffd1e4cb6b355bc8aef53e97dec358f05fc883173449c7db1b82c5ba8e652a14","user_id":155455675}
            }else{
                //HIGH
                score = {"apply_buy_eq_pay":"apply_error","creation_date":"2014-03-13T17:17:58.454-04:00","device_id":"53221e1be4b0b47e358acd6b","extended_rules":[{"name":"has_free_pass_tc","result":false,"value":false},{"name":"is_in_bl","result":true,"value":false},{"name":"crosses_count","result":false,"value":1},{"name":"deactive_users_count","result":false,"value":0},{"name":"close_site_since_users_count","result":false,"value":1}],"risk":"HIGH","scoring_id":"780e3d8d22ae8077d9ae9a3ad27953a4ffd1e4cb6b355bc8aef53e97dec358f05fc883173449c7db1b82c5ba8e652a14","user_id":155455675}
            }

            jsonHandler.showOKResponse(score, response);
        });    
    },

    searchScoringForAccountUniqueness : function(request, response) {
        var userId = getUserId(request);
        if (userId == null) {
            jsonHandler.showBadRequestResponse({'message':"bad request"}, response);
        } else {
            var score = searchUniquenessScore(userId);
            if (score) {
               jsonHandler.showOKResponse(score, response); 
            } else {
                jsonHandler.showNotFoundResponse({'message':"score not found"}, response); 
            }
        }
    },


    buildDeviceScoring : function(data){
        var risk = "LOW";
        var ruleExecution = [{"name":"more_than10_accounts", "result":false,"value":[]}];
        if (data.risk) {
            risk = data.risk;
        }
        if (data.rule_executions) {
            ruleExecution = data.rule_executions
        }
        scoring = {
                "risk":risk,
                "device_profile":null,
                "user_id":data.user_id,
                "creation_date":new Date(),
                "validation":{status:"not_validated", creation_date:new Date()},
                "user_feedback":{feedback:"not_reported", creation_date:new Date()},
                "rule_executions" : ruleExecution
        };
        return scoring;
    },

    putAnonymousMobileDeviceProfiles : function(request, response) {
        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('^/internal/anonymous_mobile_device_profiles/(.*)');
        uriRegExp.exec(pathname);
        var cardTokenId = RegExp.$1;

        jsonHandler.getContent(request, function(data) {

            if (typeof cardTokenId == 'undefined' || !cardTokenId) {
                jsonHandler.showBadRequestResponse({'message':"cardTokenId can not be null"}, response);
                return;
            }

            if (cardTokenId && typeof cardTokenId == 'string' && cardTokenId.indexOf("0000") === 0) {
                response.writeHead(cardTokenId.substr(cardTokenId.length-3), {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({message: "Mocked response"}));
                response.end();
                return;
            }

            if (!data.site_id ||
                !data.os ||
                !data.model ||
                !data.vendor_ids) {

                jsonHandler.showBadRequestResponse({'message':"The following parameters are mandatory: [site_id, os, model, vendor_ids]"}, response);
                return;

            }

            var info = {
                "disk_space": null,
                "device_id": "547e0009e4b0cfcf0b2434b8",
                "user_id": null,
                "notifications_id": "e32d56927f33d31a",
                "site_id": data.site_id,
                "last_ip": null,
                "system_version": null,
                "ips": [],
                "resolution": null,
                "hits": 1,
                "hits_map": {
                  "08/10/2015": 1
                },
                "last_updated": "2015-10-08T13:48:33.192-04:00",
                "vendor_specific_attributes": [],
                "location": null,
                "free_disk_space": null,
                "creation_date": "2015-10-08T13:48:33.192-04:00",
                "is_new": true,
                "access_tokens": [],
                "os": data.os,
                "model": data.model,
                "ram": null,
                "notification_token": null,
                "_id": "4cadc8c51d3026b3f685015deb48e17d077d27ae5efed1bfeaef6e225cb2f8d2",
                "vendor_ids": data.vendor_ids
            }
            jsonHandler.showOKResponse(info, response);

        });
    },

    putAnonymousDeviceProfiles : function(request, response) {

        jsonHandler.getContent(request, function(data) {
            var info

            if (!data.site_id ||
                !data.session_id ||
                !data.section) {

                jsonHandler.showBadRequestResponse({'message':"The following parameters are mandatory: [site_id, session_id, section]"}, response);
                return;

            }

            info = {}
            jsonHandler.showOKResponse(info, response);

        });
    },
    getAnonymousDeviceProfiles : function(request, response) {

        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        var sessionId = getAnonymousSessionId(request);
        //sessionId '4d696f146f4763e53ee1ae6c40d2b134'
         var result
        switch (sessionId) {
            case '4d696f146f4763e53ee1ae6c40d2b134' :
            result = 
                    {"_id":"f74653ff572a30a97647ae1c27700512ebfe3b6fba90b3b24bc2257aa3c41d06","all_ips":[],"creation_date":"2015-12-08T22:24:00.109-04:00","current_ips":[],
                    "device_id":"566790c0e4b02fc0da05876e","dsids":[],"f_time_zone_offset":null,"flash_version":null,"fonts":null,"fonts_hash":null,"fuuid":null,"fuuids":[],
                    "hash":"1f5bc03a6d9d14e38a7c64b1bd44d480112832d0c0e8f914411f2b28e75336ce0c59c94991064179b6c8d76879884f8933899a5bb541838c1763ac9a14cb7c09","hits":1,"ips":[],
                    "js_time_zone_offset":null,"jsuuid":null,"jsuuids":[],"lang":null,"last_update_by_remember_me":null,"last_updated":"2015-12-08T22:24:00.109-04:00","local_storage":null,
                    "login_session_ids":[],"manufacturer":null,"os":"iOS","plugins":null,"remember_me_hits":null,"requests_attributes":[],"resolution":"320x568","sections":[],
                    "server_string":null,"session_storage":null,"site_id":"MLA","status":null,"user_agent":null,"user_id":null}

            break;
            default :
                    jsonHandler.showNotFoundResponse({
                        message:"device not found"
                    }, response);
                    return;
        }

        response.write(JSON.stringify(result));
        response.end();
    },

    getAnonymousMobileDeviceProfiles : function(request, response) {

        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });
        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('^/internal/anonymous_mobile_device_profiles/(.*)');
        uriRegExp.exec(pathname);
        var sessionId = RegExp.$1;
        //sessionId '4d696f146f4763e53ee1ae6c40d2b134'
        var result
        switch (sessionId) {
            case '4d696f146f4763e53ee1ae6c40d2b134' :
            result = 
                    {"disk_space":533958656,"device_id":"566790c0e4b02fc0da05876e","user_id":null,"notifications_id":"0B3463E0-205C-4FE4-951A-E57EBF146C32","site_id":"MLA",
                    "last_ip":null,"system_version":"9.1","ips":[],"resolution":"320x568","hits":1,"hits_map":{"08/12/2015":1},"last_updated":"2015-12-08T22:24:00.109-04:00",
                    "vendor_specific_attributes":{"can_make_phone_calls":true,"device_family":0,"platform":"iPhone5,3","cpu_count":2,"simulator":false,"feature_flash":true,
                    "feature_camera":true,"device_idiom":"Phone","can_send_sms":true,"device_model":"iPhone","feature_front_camera":true,"device_name":"iPhone de m@nu",
                    "retina_display_capable":true,"video_camera_available":true,"device_languaje":"es-AR"},"location":null,"free_disk_space":2162036736,"creation_date":"2015-12-08T22:24:00.109-04:00",
                    "is_new":null,"access_tokens":[],"os":"iOS","model":"N48AP","ram":1064304640,"notification_token":null,"_id":"f74653ff572a30a97647ae1c27700512ebfe3b6fba90b3b24bc2257aa3c41d06",
                    "vendor_ids":[{"name":"vendor_id","value":"0B3463E0-205C-4FE4-951A-E57EBF146C32"},{"name":"uuid","value":"A5080E84-8227-4592-8E14-2D76DD756851"}]}

            break;
            default :
                    jsonHandler.showNotFoundResponse({
                        message:"device not found"
                    }, response);
                    return;
        }

        response.write(JSON.stringify(result));
        response.end();
    }
    

};

function searchUniquenessScore(userId) {
    var scores = resourceManager.getResourcesByType('fake_device_scoring_account_uniqueness');
    for(s in scores) {
        var score = scores[s].value;
        console.log("score: " + JSON.stringify(score));
        if (score.user_id == userId) {
            console.log("Score Found!" + JSON.stringify(score));
            return score;
        }
    }
    return null;
}
function getAnonymousSessionId(request) {
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/internal/anonymous_device_profiles/(.*)');
    uriRegExp.exec(pathname);
    var sessionId = RegExp.$1;
    return sessionId;
}

function getSessionId(request) {
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/internal/device_profiles/session/(.*)');
    uriRegExp.exec(pathname);
    var sessionId = RegExp.$1;
    return sessionId;
}


function getProfileId(request) {
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/internal/users/(.*)/device_profiles/(.*)');
    uriRegExp.exec(pathname);
    var profileId = RegExp.$2;
    return profileId;
}

function getUserId(request) {
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/internal/users/(.*)/device_scoring/account_uniqueness');
    uriRegExp.exec(pathname);
    var userId = RegExp.$1;
    return userId;
}


exports.ping = deviceMLController.ping;
exports.deviceProfiles = deviceMLController.deviceProfiles;
exports.getDevices = deviceMLController.getDevices;
exports.getProfileSession = deviceMLController.getProfileSession;
exports.computeScoringForAccountUniqueness = deviceMLController.computeScoringForAccountUniqueness;
exports.searchScoringForAccountUniqueness = deviceMLController.searchScoringForAccountUniqueness;
exports.computeSecondScoringForAccountUniqueness = deviceMLController.computeSecondScoringForAccountUniqueness;
exports.putAnonymousMobileDeviceProfiles = deviceMLController.putAnonymousMobileDeviceProfiles;
exports.putAnonymousDeviceProfiles = deviceMLController.putAnonymousDeviceProfiles;

// Mappings
urlMapping.add (
    [
        {
            pattern: '^/admin/devices/ping',
            action: {
                'GET':deviceMLController.ping
            }
        },
        {
            pattern: '^/internal/users/(.*)/device_profiles/crosses',
            action: {
                'GET':deviceMLController.deviceProfiles
            }
        },{
            pattern: '^/internal/users/(.*)/device_profiles/(.*)',
            action: {
                'GET':deviceMLController.currentDeviceProfile
            }
        },
        {
            pattern: '^/internal/device_profiles/session/(.*)',
            action: {
                'GET':deviceMLController.getProfileSession
            }
        },
        {
            pattern: '^/admin/device_profiles.*',
            action: {
                'GET':deviceMLController.getDevices
            }
        },
        {
            pattern: '^/internal/device_profiles/device_scoring/account_uniqueness/(.*)/extended_scoring',
            action: {
                'POST':deviceMLController.computeSecondScoringForAccountUniqueness
            }
        }, 

        {
            pattern: '^/internal/device_profiles/device_scoring/account_uniqueness',
            action: {
                'POST':deviceMLController.computeScoringForAccountUniqueness
            }
        },
        {
            pattern: '^/internal/anonymous_mobile_device_profiles/(.*)',
            action: {
                'PUT':deviceMLController.putAnonymousMobileDeviceProfiles,
                'GET':deviceMLController.getAnonymousMobileDeviceProfiles
            }
        },
        {
            pattern: '^/internal/anonymous_device_profiles',
            action: {
                'PUT':deviceMLController.putAnonymousDeviceProfiles,
                'GET':deviceMLController.getAnonymousDeviceProfiles
            }
        },
        {
            pattern: '^/internal/users/(.*)/device_scoring/account_uniqueness',
            action: {
                'GET':deviceMLController.searchScoringForAccountUniqueness
            }
        }
    
    ]);
