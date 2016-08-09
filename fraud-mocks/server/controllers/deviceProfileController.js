var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

//var retryDevice = 0;

var deviceController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(["pong"]));
            response.end();
        },


        searchDevices: function(request, response){

         var data = url.parse(request.url, true).query;

     if(data["transaction_id"] == 7456397 && global.retryDevice == 0){
             jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                global.retryDevice++;
                return;
            }


  var result = [];
            if(isSearch(request)) {
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });



result = {
"results": [
{
"account_login": "115866041",
"account_login_first_seen": "2012-06-30",
"account_login_last_event": "2013-01-18",
"account_login_last_update": "2013-01-18",
"account_login_result": "success",
"account_login_score": "0",
"account_login_worst_score": "0",
"browser_language": "es-ES,es;q=0.8",
"browser_string": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",
"browser_string_hash": "96509afe0a371e760df9502dc74f1202",
"css_image_loaded": "yes",
"custom_count_1": "106700",
"custom_count_2": "1",
"custom_count_3": "1",
"custom_match_1": "3653fa1453150a46e5bfa155c1a07140",
"custom_match_3": "a4f23670e1833f3fdb077ca70bbd5d66",
"custom_match_4": "2b2eb87432b6856e3df0f8841e3fd40a",
"custom_match_5": "3af4573c6249dd19a19560a381044106",
"custom_match_6": "4ebf7a808570f08d43d6b9556802dca6",
"custom_match_7": "abaced7da54e8fae423a9713d1d46087",
"custom_match_8": "ddef79117f59cf6e82cc98da03013780",
"device_first_seen": "2012-11-04",
"device_id": "bebae91ce95f4a288b9f5f83b9f25359",
"device_id_confidence": "100.00",
"device_last_event": "2013-01-18",
"device_last_update": "2013-01-18",
"device_match_result": "success",
"device_result": "success",
"device_score": "0",
"device_worst_score": "0",
"enabled_ck": "yes",
"enabled_fl": "yes",
"enabled_im": "yes",
"enabled_js": "no",
"event_type": "login",
"flash_lang": "es",
"flash_os": "Windows 7",
"flash_version": "WIN 11,5,31,5",
"fuzzy_device_first_seen": "2012-09-16",
"fuzzy_device_id": "8ab650a6656c4327992dfb0ee968dcb8",
"fuzzy_device_id_confidence": "100.00",
"fuzzy_device_last_event": "2013-01-18",
"fuzzy_device_last_update": "2013-01-18",
"fuzzy_device_match_result": "success",
"fuzzy_device_result": "success",
"fuzzy_device_score": "0",
"fuzzy_device_worst_score": "0",
"headers_name_value_hash": "3daf363893aa7cf27f04a3b6ddfbfd23",
"headers_order_string_hash": "84b585dfcdbcae2e6b102ced04d8714c",
"http_os_signature": "Windows vista or 7 or 8",
"http_referer": "9c1gAiNiCBI8J0LO0OGL9bk!IJEFdNlk",
"image_loaded": "yes",
"local_attrib_1": "mla",
"local_attrib_3": "listing",
"org_id": "jk96mpy0",
"os": "Windows NT 6.1",
"os_fonts_hash": "4f556ead19232bd1e655a7bdc16bef79",
"os_fonts_number": "260",
"policy": "hispanos_login",
"policy_score": "0",
"profiled_domain": "syi.mercadolibre.com.ar",
"profiled_domain_first_seen": "2012-07-09",
"profiled_domain_last_event": "2013-01-18",
"profiled_domain_last_update": "2013-01-18",
"profiled_domain_result": "success",
"profiled_domain_score": "0",
"profiled_domain_worst_score": "0",
"profiled_url": "https://syi.mercadolibre.com.ar/sell/sell?execution=e1s2",
"profiling_datetime": "1358519953",
"reason_code": "Region",
"request_id": "09BEC143-724A-47BD-BC1E-B356E865DE84",
"request_result": "success",
"review_status": "pass",
"risk_rating": "neutral",
"screen_dpi": "72",
"service_type": "session-policy",
"session_id": "edf0f40a-661e-4c59-a6a5-9143c18f222c",
"summary_risk_score": "0",
"tcp_os_signature": "Windows vista or 7 or 8",
"time_zone": "-180",
"time_zone_dst_offset": "60",
"transaction_id": "447114239",
"true_ip": "186.136.169.128",
"true_ip_city": "Buenos Aires",
"true_ip_first_seen": "2012-07-02",
"true_ip_geo": "AR",
"true_ip_isp": "Cablevision S.A.",
"true_ip_last_event": "2013-01-18",
"true_ip_last_update": "2013-01-18",
"true_ip_latitude": "-34.58750",
"true_ip_longitude": "-58.67250",
"true_ip_organization": "Cablevision S.A.",
"true_ip_region": "Distrito Federal",
"true_ip_result": "success",
"true_ip_score": "0",
"true_ip_worst_score": "0",
"ua_browser": "chrome",
"ua_os": "win7",
"ua_platform": "chrome generic\n",
"flow_type": "payment"
}
],
"paging": {
"offset": 0,
"limit": 10,
"total": 1
}
};

            }else {
                result = [{"results":[],"paging":{"offset":0,"limit":10,"total":0}}];
            }

            response.write(JSON.stringify(result));
            response.end();
            
        },

        getDevice: function(request, response){

            jsonHandler.showNotFoundResponse({message: 'No records with given params were found'}, response);
 
        }

};

function isSearch(request) {
    var pathname = url.parse(request.url).pathname;
    console.log("pathname: " + pathname);
    return pathname.indexOf("search") != -1 ;
}

exports.ping = deviceController.ping;
exports.getDevice = deviceController.getDevice;
exports.searchDevices = deviceController.searchDevices;


// Mappings
urlMapping.add ([
{
pattern: '^/fraud/usermarks/ping',
action: {
'GET':deviceController.ping
}
},

{
pattern: '^/fraud/devices/sessions/(\\w+)',
        action: {
            'GET':deviceController.searchDevices
        }
    },/*{

pattern: '^/fraud/device',
action: {
'GET':deviceController.getDevice
}
}*/
 ]);