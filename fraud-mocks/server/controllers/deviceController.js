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

            if(data["transaction_id"] == 122333444 || data["transaction_id"] == 987019315){
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                result = [{"results":[],"paging":{"offset":0,"limit":10,"total":0}}];
                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if(data["transaction_id"] == 122333445){
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                result = {"results":[{"account_login":"82415951","account_login_first_seen":"2014-12-01","account_login_last_event":"2015-08-25","account_login_last_update":"2015-08-25","account_login_result":"success","account_login_score":"0","account_login_worst_score":"0","agent_type":"browser_computer","browser_string":"Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; GWX:DOWNLOADED; rv:11.0) like Gecko","browser_string_hash":"f5a453c455966114eb58906d1e7e51a5","css_image_loaded":"yes","custom_match_3":"28babf6d2fac1061231b0cd86de17cb2","custom_match_4":"f5a453c455966114eb58906d1e7e51a5","custom_policy_score":"-15","device_id":"0191ad3f681645049e470ac21b793826","device_id_confidence":"100.00","device_match_result":"new_device","device_result":"not found","dns_ip":"177.19.209.99","dns_ip_city":"recife","dns_ip_geo":"BR","dns_ip_isp":"global village telecom","dns_ip_latitude":"-8.06202","dns_ip_longitude":"-34.87893","dns_ip_organization":"global village telecom","dns_ip_region":"pernambuco","enabled_ck":"yes","enabled_fl":"no","enabled_im":"yes","enabled_js":"yes","event_type":"payment","fuzzy_device_first_seen":"2015-08-24","fuzzy_device_id":"cff67cbe61324c8f8fbb4bfffe953fef","fuzzy_device_id_confidence":"90.79","fuzzy_device_last_event":"2015-08-25","fuzzy_device_last_update":"2015-08-25","fuzzy_device_match_result":"success","fuzzy_device_result":"success","fuzzy_device_score":"0","fuzzy_device_worst_score":"0","headers_name_value_hash":"40eb1113d9831c6e6d987a089b5cb9b5","headers_order_string_hash":"77e845c99c6dc6d6223ca9cb92da45fd","honeypot_fingerprint":"b750c26ea9ffd1e5f55bd6a5ac78ee15d7d1daaa","honeypot_fingerprint_check":"true","honeypot_fingerprint_match":"match_exact","http_os_signature":"Windows vista or 7 or 8","http_referer_domain":"www.mercadopago.com","http_referer_domain_assert_history":"NEGATIVE_HISTORY","http_referer_domain_first_seen":"2012-07-09","http_referer_domain_last_event":"2015-08-25","http_referer_domain_last_update":"2015-08-25","http_referer_domain_result":"success","http_referer_domain_score":"0","http_referer_domain_worst_score":"-29","http_referer_url":"https://www.mercadopago.com/mlb/checkout/sendmoney","image_loaded":"yes","js_fonts_hash":"cb63de1f75e7b1fb3cca0322cded76bb","js_fonts_number":"225","local_attrib_1":"mlb","org_id":"jk96mpy0","os":"Windows NT 6.1","page_time_on":"108219","plugin_adobe_acrobat":"7.0/later","plugin_hash":"e4bd5b614066d0577780d477462f9ec3","plugin_windows_media_player":"12.0.7601.18840","policy":"default","policy_score":"-15","profiled_domain":"www.mercadopago.com","profiled_domain_first_seen":"2014-08-14","profiled_domain_last_event":"2015-08-25","profiled_domain_last_update":"2015-08-25","profiled_domain_result":"success","profiled_domain_score":"0","profiled_domain_worst_score":"0","profiled_url":"https://www.mercadopago.com/mlb/checkout/start?d4f8b403b64ecd2aff9dbc088463fa66","profiling_datetime":"1440471667","reason_code":"Elevated Risk Persona; Elevated Risk Persona (Risker); Possible Cookie Wiping; Day_ant_device; SameSmartID_distinctDeviceANDTrueIP_v2","request_duration":"82","request_id":"E9E20B54-0694-4AB5-8425-4C9F252A6682","request_result":"success","review_status":"pass","risk_rating":"low","screen_color_depth":"24","service_type":"session-policy","session_id":"ff1d96fa-a668-4cd4-b6f1-cc6aeb668f2f","summary_risk_score":"-15","time_zone":"-180","time_zone_dst_offset":"60","transaction_id":"1287361326","true_ip":"187.115.188.186","true_ip_city":"joao pessoa","true_ip_first_seen":"2014-08-06","true_ip_geo":"BR","true_ip_isp":"global village telecom","true_ip_last_event":"2015-08-25","true_ip_last_update":"2015-08-25","true_ip_latitude":"-7.07878","true_ip_longitude":"-34.84346","true_ip_organization":"global village telecom","true_ip_region":"paraiba","true_ip_result":"success","true_ip_score":"0","true_ip_worst_score":"0","ua_browser":"ie 11.0","ua_os":"win7","ua_platform":"ie 11.0 for desktop\n","flow_type":"payment"}],"paging":{"offset":0,"limit":10,"total":1}};
                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if(data["transaction_id"] == 1266724352 || data["transaction_id"] == 1263255410){
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                result = {"results":[{"account_login":"82415951","account_login_first_seen":"2014-12-01","account_login_last_event":"2015-08-25","account_login_last_update":"2015-08-25","account_login_result":"success","account_login_score":"0","account_login_worst_score":"0","agent_type":"browser_computer","browser_string":"Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; GWX:DOWNLOADED; rv:11.0) like Gecko","browser_string_hash":"f5a453c455966114eb58906d1e7e51a5","css_image_loaded":"yes","custom_match_3":"28babf6d2fac1061231b0cd86de17cb2","custom_match_4":"f5a453c455966114eb58906d1e7e51a5","custom_policy_score":"-15","device_id":"0191ad3f681645049e470ac21b7938aa","device_id_confidence":"100.00","device_match_result":"new_device","device_result":"not found","dns_ip":"177.19.209.99","dns_ip_city":"recife","dns_ip_geo":"BR","dns_ip_isp":"global village telecom","dns_ip_latitude":"-8.06202","dns_ip_longitude":"-34.87893","dns_ip_organization":"global village telecom","dns_ip_region":"pernambuco","enabled_ck":"yes","enabled_fl":"no","enabled_im":"yes","enabled_js":"yes","event_type":"payment","fuzzy_device_first_seen":"2015-08-24","fuzzy_device_id":"cff67cbe61324c8f8fbb4bfffe953faa","fuzzy_device_id_confidence":"90.79","fuzzy_device_last_event":"2015-08-25","fuzzy_device_last_update":"2015-08-25","fuzzy_device_match_result":"success","fuzzy_device_result":"success","fuzzy_device_score":"0","fuzzy_device_worst_score":"0","headers_name_value_hash":"40eb1113d9831c6e6d987a089b5cb9b5","headers_order_string_hash":"77e845c99c6dc6d6223ca9cb92da45fd","honeypot_fingerprint":"b750c26ea9ffd1e5f55bd6a5ac78ee15d7d1daaa","honeypot_fingerprint_check":"true","honeypot_fingerprint_match":"match_exact","http_os_signature":"Windows vista or 7 or 8","http_referer_domain":"www.mercadopago.com","http_referer_domain_assert_history":"NEGATIVE_HISTORY","http_referer_domain_first_seen":"2012-07-09","http_referer_domain_last_event":"2015-08-25","http_referer_domain_last_update":"2015-08-25","http_referer_domain_result":"success","http_referer_domain_score":"0","http_referer_domain_worst_score":"-29","http_referer_url":"https://www.mercadopago.com/mlb/checkout/sendmoney","image_loaded":"yes","js_fonts_hash":"cb63de1f75e7b1fb3cca0322cded76bb","js_fonts_number":"225","local_attrib_1":"mlb","org_id":"jk96mpy0","os":"Windows NT 6.1","page_time_on":"108219","plugin_adobe_acrobat":"7.0/later","plugin_hash":"e4bd5b614066d0577780d477462f9ec3","plugin_windows_media_player":"12.0.7601.18840","policy":"default","policy_score":"-15","profiled_domain":"www.mercadopago.com","profiled_domain_first_seen":"2014-08-14","profiled_domain_last_event":"2015-08-25","profiled_domain_last_update":"2015-08-25","profiled_domain_result":"success","profiled_domain_score":"0","profiled_domain_worst_score":"0","profiled_url":"https://www.mercadopago.com/mlb/checkout/start?d4f8b403b64ecd2aff9dbc088463fa66","profiling_datetime":"1440471667","reason_code":"Elevated Risk Persona; Elevated Risk Persona (Risker); Possible Cookie Wiping; Day_ant_device; SameSmartID_distinctDeviceANDTrueIP_v2","request_duration":"82","request_id":"E9E20B54-0694-4AB5-8425-4C9F252A6682","request_result":"success","review_status":"pass","risk_rating":"low","screen_color_depth":"24","service_type":"session-policy","session_id":"ff1d96fa-a668-4cd4-b6f1-cc6aeb668f2f","summary_risk_score":"-15","time_zone":"-180","time_zone_dst_offset":"60","transaction_id":"1287361326","true_ip":"187.115.188.186","true_ip_city":"joao pessoa","true_ip_first_seen":"2014-08-06","true_ip_geo":"BR","true_ip_isp":"global village telecom","true_ip_last_event":"2015-08-25","true_ip_last_update":"2015-08-25","true_ip_latitude":"-7.07878","true_ip_longitude":"-34.84346","true_ip_organization":"global village telecom","true_ip_region":"paraiba","true_ip_result":"success","true_ip_score":"0","true_ip_worst_score":"0","ua_browser":"ie 11.0","ua_os":"win7","ua_platform":"ie 11.0 for desktop\n","flow_type":"payment"}],"paging":{"offset":0,"limit":10,"total":1}};
                response.write(JSON.stringify(result));
                response.end();
                return;
            }
           
           	if(data["transaction_id"] == 1264439282 || data["transaction_id"] == 1264059772 || data["transaction_id"] == 1262911484 || data["transaction_id"] == 984558668 ){
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                result = {"results":[{"account_login":"82415951","account_login_first_seen":"2014-12-01","account_login_last_event":"2015-08-25","account_login_last_update":"2015-08-25","account_login_result":"success","account_login_score":"0","account_login_worst_score":"0","agent_type":"browser_computer","browser_string":"Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; GWX:DOWNLOADED; rv:11.0) like Gecko","browser_string_hash":"f5a453c455966114eb58906d1e7e51a5","css_image_loaded":"yes","custom_match_3":"28babf6d2fac1061231b0cd86de17cb2","custom_match_4":"f5a453c455966114eb58906d1e7e51a5","custom_policy_score":"-15","device_id":"bebae91ce95f4a288b9f5f83b9f253bb","device_id_confidence":"100.00","device_match_result":"new_device","device_result":"not found","dns_ip":"177.19.209.99","dns_ip_city":"recife","dns_ip_geo":"BR","dns_ip_isp":"global village telecom","dns_ip_latitude":"-8.06202","dns_ip_longitude":"-34.87893","dns_ip_organization":"global village telecom","dns_ip_region":"pernambuco","enabled_ck":"yes","enabled_fl":"no","enabled_im":"yes","enabled_js":"yes","event_type":"payment","fuzzy_device_first_seen":"2015-08-24","fuzzy_device_id":"cff67cbe61324c8f8fbb4bfffe953fbb","fuzzy_device_id_confidence":"90.79","fuzzy_device_last_event":"2015-08-25","fuzzy_device_last_update":"2015-08-25","fuzzy_device_match_result":"success","fuzzy_device_result":"success","fuzzy_device_score":"0","fuzzy_device_worst_score":"0","headers_name_value_hash":"40eb1113d9831c6e6d987a089b5cb9b5","headers_order_string_hash":"77e845c99c6dc6d6223ca9cb92da45fd","honeypot_fingerprint":"b750c26ea9ffd1e5f55bd6a5ac78ee15d7d1daaa","honeypot_fingerprint_check":"true","honeypot_fingerprint_match":"match_exact","http_os_signature":"Windows vista or 7 or 8","http_referer_domain":"www.mercadopago.com","http_referer_domain_assert_history":"NEGATIVE_HISTORY","http_referer_domain_first_seen":"2012-07-09","http_referer_domain_last_event":"2015-08-25","http_referer_domain_last_update":"2015-08-25","http_referer_domain_result":"success","http_referer_domain_score":"0","http_referer_domain_worst_score":"-29","http_referer_url":"https://www.mercadopago.com/mlb/checkout/sendmoney","image_loaded":"yes","js_fonts_hash":"cb63de1f75e7b1fb3cca0322cded76bb","js_fonts_number":"225","local_attrib_1":"mlb","org_id":"jk96mpy0","os":"Windows NT 6.1","page_time_on":"108219","plugin_adobe_acrobat":"7.0/later","plugin_hash":"e4bd5b614066d0577780d477462f9ec3","plugin_windows_media_player":"12.0.7601.18840","policy":"default","policy_score":"-15","profiled_domain":"www.mercadopago.com","profiled_domain_first_seen":"2014-08-14","profiled_domain_last_event":"2015-08-25","profiled_domain_last_update":"2015-08-25","profiled_domain_result":"success","profiled_domain_score":"0","profiled_domain_worst_score":"0","profiled_url":"https://www.mercadopago.com/mlb/checkout/start?d4f8b403b64ecd2aff9dbc088463fa66","profiling_datetime":"1440471667","reason_code":"Elevated Risk Persona; Elevated Risk Persona (Risker); Possible Cookie Wiping; Day_ant_device; SameSmartID_distinctDeviceANDTrueIP_v2","request_duration":"82","request_id":"E9E20B54-0694-4AB5-8425-4C9F252A6682","request_result":"success","review_status":"pass","risk_rating":"low","screen_color_depth":"24","service_type":"session-policy","session_id":"ff1d96fa-a668-4cd4-b6f1-cc6aeb668f2f","summary_risk_score":"-15","time_zone":"-180","time_zone_dst_offset":"60","transaction_id":"1287361326","true_ip":"187.115.188.186","true_ip_city":"joao pessoa","true_ip_first_seen":"2014-08-06","true_ip_geo":"BR","true_ip_isp":"global village telecom","true_ip_last_event":"2015-08-25","true_ip_last_update":"2015-08-25","true_ip_latitude":"-7.07878","true_ip_longitude":"-34.84346","true_ip_organization":"global village telecom","true_ip_region":"paraiba","true_ip_result":"success","true_ip_score":"0","true_ip_worst_score":"0","ua_browser":"ie 11.0","ua_os":"win7","ua_platform":"ie 11.0 for desktop\n","flow_type":"payment"}],"paging":{"offset":0,"limit":10,"total":1}};
                response.write(JSON.stringify(result));
                response.end();
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

            jsonHandler.showNotFoundResponse({message:  'No records with given params were found'}, response);
 
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
