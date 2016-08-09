var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var identityValidationController = {
    closeCaseManualReview: function(request, response) {
        jsonHandler.getContent(request, function(data) {
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('^/internal/auth/identity/user/(\\d+)/manual_review');
            uriRegExp.exec(pathname);
            var userId = RegExp.$1;
            var status = data.status
            var json = {
                "id": userId,
                "status" : status,
                "user_id" : userId
            }
            resourceManager.saveResource('identity_validation', json);

            response.writeHead(200, {
              'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({ "message": "ok" }));
            response.end();
        });
    },

    getIdentityByUser: function(request, response) {
        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('^/internal/auth/identity/user/(\\d+)');
        uriRegExp.exec(pathname);
        var userId = RegExp.$1;
        var identity = resourceManager.searchResource('identity_validation', userId);
        if(!identity && userId != 661){
            jsonHandler.showNotFoundResponse({
                    message:"No identity was found"
                }, response);
        }else if(userId != 661){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(identity));
            response.end();
        }else{
             response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
             response.write(JSON.stringify({"id":"57697553abcf1558431d1400","type":"person","user_id":75263622,"site_id":"MLB","platform_id":"ml","is_test":false,"flow_data":{"ms_hard_validation":{"was_called":true,"status":"valid","called":true,"metrics":null},"ms":{"was_called":false,"status":"in_process","called":false,"metrics":null},"uniqueness":{"was_called":false,"status":"valid","called":false,"metrics":null},"second_score_approve":{"was_called":false,"status":"valid","called":false,"metrics":null},"second_score_speed_up":{"was_called":false,"status":"valid","called":false,"metrics":null}},"challenges":[{"country_code":"55","phone_number":"18997555188","is_new":true,"validation_code":"7942","twilio_detail":{"phone_number":"+5518997555188","carrier":{"mobile_network_code":"06","name":"Vivo","mobile_country_code":"724","error_code":null,"type":"mobile"},"add_ons":null,"national_format":"(18) 99755-5188","country_code":"BR","url":"https://lookups.twilio.com/v1/PhoneNumbers/+5518997555188?Type=carrier","caller_name":null},"type":"phone","success":true,"completed":true,"date_created":"2016-06-21T13:12:12.928-04:00","last_updated":"2016-06-27T15:02:54.618-04:00"},{"doc_front_url":"http://identity.adminml.com/auth/identity/57697553abcf1558431d1400/documentation/image/1c82736facd6e961ee0d0bd1e2660d05dd0d3f35.jpeg?caller.id=75263622","doc_back_url":"http://identity.adminml.com/auth/identity/57697553abcf1558431d1400/documentation/image/d99a7ebc9e8df6be356432a7bdc1a78d6181b4bb.jpeg?caller.id=75263622","number":"RJ0122854229","doc_type":"rg_v1","source":"upload","tags":["by_layout"],"most_similar_document":{"doc_url":"http://identity.adminml.com/auth/identity/576fbee0abcf153fe8420496/documentation/image/f0ebe4a824a8c4e573a52dd518144c9355197295.jpeg?caller.id=64913864","score":0.18252279,"user_id":64913864,"phash_score":0.573242926764325,"face_phash_score":0.6928797550758844},"type":"documentation","success":true,"completed":true,"date_created":"2016-06-27T15:00:04.901-04:00","last_updated":"2016-06-27T15:02:54.618-04:00"}],"device_detail":{},"encrypt_version":"","date_created":"2016-06-21T13:11:47.024-04:00","last_updated":"2016-06-27T15:02:54.618-04:00"}));
             response.end();

        }
    }
};

exports.closeCaseManualReview = identityValidationController.closeCaseManualReview;
exports.getIdentityByUser = identityValidationController.getIdentityByUser;

// Mappings
urlMapping.add (
    [
        {
            pattern: '^/internal/auth/identity/user/(\\d+)/manual_review',
            action: {
                'PUT':identityValidationController.closeCaseManualReview
            }
        },
        {
            pattern: '^/internal/auth/identity/user/(\\d+)',
            action: {
                'GET':identityValidationController.getIdentityByUser
            }
        }
    ]);
