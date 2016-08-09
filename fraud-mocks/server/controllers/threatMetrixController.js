var url = require('url');
var querystring = require('querystring');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var threatMetrixController = {
	getTHM : function(request, response) {
		response.writeHead(200, {
			'Content-Type' : 'text/plain; charset=utf-8'
		});

//si viene una determinada session_id, la respuesta es diferente (con el mismo device que el mock de cruces) 

		var parts = url.parse(request.url, true);
		var session_id; 
		if (parts != null) {
			session_id = parts.query['session_id'];
		}

		if (session_id == "035ff32a-8c30-4fe4-a066-5f753a4a4060") {

			response.write("account_login=91497189&account_login_first_seen=2011-07-01&account_login_last_event=2012-04-28&account_login_last_update=2012-04-28&account_login_result=success&account_login_score=0&account_login_worst_score=0&browser_language=es-419,es;q=0.8&browser_string=Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19&browser_string_hash=5655a3fe7bb1b162a5acb8cfd9c91937&css_image_loaded=yes&custom_match_4=5655a3fe7bb1b162a5acb8cfd9c91937&device_first_seen=2012-02-21&device_id=ba67f61c2a1e4df9b84424f11fe59df0&device_id_confidence=100.00&device_last_event=2012-04-28&device_last_update=2012-04-28&device_match_result=success&device_result=success&device_score=0&device_worst_score=0&enabled_ck=yes&enabled_fl=yes&enabled_im=yes&enabled_js=no&event_type=payment&flash_lang=es&flash_os=Windows XP&flash_version=WIN 11,2,202,235&fuzzy_device_first_seen=2012-02-21&fuzzy_device_id=2b08233722044686bc97a99259264041&fuzzy_device_id_confidence=100.00&fuzzy_device_last_event=2012-04-28&fuzzy_device_last_update=2012-04-28&fuzzy_device_match_result=success&fuzzy_device_result=success&fuzzy_device_score=0&fuzzy_device_worst_score=0&headers_name_value_hash=061c67f27ffe4ece75451bdab5186ae1&headers_order_string_hash=84b585dfcdbcae2e6b102ced04d8714c&http_referer=h9abICm8odo096H7JfcJc4fIMh!6723K&image_loaded=yes&local_attrib_1=mla&org_id=jk96mpy0&os=Windows NT 5.1&os_fonts_hash=1a32d0527a9c798c9416c37996051c5a&os_fonts_number=138&policy=default&policy_score=0&profiling_datetime=1335627050&reason_code=1month_ant_device&request_id=0FE6BF6B-98CB-45F0-A24B-737C96F63EB6&request_result=success&review_status=pass&risk_rating=neutral&screen_dpi=72&screen_res=1024x768&service_type=session-policy&session_id="+session_id+"&summary_risk_score=0&time_zone=-180&time_zone_dst_offset=0&transaction_id=405752020&true_ip=190.31.122.59&true_ip_city=Buenos Aires&true_ip_first_seen=2012-01-05&true_ip_geo=AR&true_ip_isp=Telecom Argentina S.A.&true_ip_last_event=2012-04-28&true_ip_last_update=2012-04-28&true_ip_latitude=-34.58750&true_ip_longitude=-58.67250&true_ip_organization=Telecom Argentina S.A.&true_ip_region=Distrito Federal&true_ip_result=success&true_ip_score=0&true_ip_worst_score=0&ua_browser=chrome&ua_os=winxp&ua_platform=chrome generic");
			response.end();
		}
		else
		{
			response.write("account_login=91497189&account_login_first_seen=2011-07-01&account_login_last_event=2012-04-28&account_login_last_update=2012-04-28&account_login_result=success&account_login_score=0&account_login_worst_score=0&browser_language=es-419,es;q=0.8&browser_string=Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19&browser_string_hash=5655a3fe7bb1b162a5acb8cfd9c91937&css_image_loaded=yes&custom_match_4=5655a3fe7bb1b162a5acb8cfd9c91937&device_first_seen=2012-02-21&device_id=cbf8f27d32eb475e90d73b357bd36e52&device_id_confidence=100.00&device_last_event=2012-04-28&device_last_update=2012-04-28&device_match_result=success&device_result=success&device_score=0&device_worst_score=0&enabled_ck=yes&enabled_fl=yes&enabled_im=yes&enabled_js=no&event_type=payment&flash_lang=es&flash_os=Windows XP&flash_version=WIN 11,2,202,235&fuzzy_device_first_seen=2012-02-21&fuzzy_device_id=0cf57392b6e647cf8d690aa6f9e26850&fuzzy_device_id_confidence=100.00&fuzzy_device_last_event=2012-04-28&fuzzy_device_last_update=2012-04-28&fuzzy_device_match_result=success&fuzzy_device_result=success&fuzzy_device_score=0&fuzzy_device_worst_score=0&headers_name_value_hash=061c67f27ffe4ece75451bdab5186ae1&headers_order_string_hash=84b585dfcdbcae2e6b102ced04d8714c&http_referer=h9abICm8odo096H7JfcJc4fIMh!6723K&image_loaded=yes&local_attrib_1=mla&org_id=jk96mpy0&os=Windows NT 5.1&os_fonts_hash=1a32d0527a9c798c9416c37996051c5a&os_fonts_number=138&policy=default&policy_score=0&profiling_datetime=1335627050&reason_code=1month_ant_device&request_id=0FE6BF6B-98CB-45F0-A24B-737C96F63EB6&request_result=success&review_status=pass&risk_rating=neutral&screen_dpi=72&screen_res=1024x768&service_type=session-policy&session_id="+session_id+"&summary_risk_score=0&time_zone=-180&time_zone_dst_offset=0&transaction_id=405752020&true_ip=190.31.122.59&true_ip_city=Buenos Aires&true_ip_first_seen=2012-01-05&true_ip_geo=AR&true_ip_isp=Telecom Argentina S.A.&true_ip_last_event=2012-04-28&true_ip_last_update=2012-04-28&true_ip_latitude=-34.58750&true_ip_longitude=-58.67250&true_ip_organization=Telecom Argentina S.A.&true_ip_region=Distrito Federal&true_ip_result=success&true_ip_score=0&true_ip_worst_score=0&ua_browser=chrome&ua_os=winxp&ua_platform=chrome generic");
			response.end();
		}
	}
};

exports.getTHM = threatMetrixController.getTHM;

// Mappings
urlMapping.add ([{
		pattern: '^/api/session-query?$',
		action: {
			'GET':threatMetrixController.getTHM
		}
	}]);
