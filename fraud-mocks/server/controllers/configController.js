var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");
var contador = 0

var configController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write("pong");
            response.end();

        },

        configGet : function(request, response){
                        response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/fraud/admin/config/(\\w*)');
            uriRegExp.exec(pathname);

            var confId = RegExp.$1;

            console.log ("configId:"+confId);

            switch (confId) {               
                case "TEST01CC1CC2CC3CC4CC5CC6CC7CC8CC9CC10CC11C1":
                    response.write(JSON.stringify({"profile_id":"LOW","bottom_breakpoint":0,"max_allowed_amount":10000000,"reason_id":"","top_breakpoint":20,"sent_to_crm":false,"queue_id":"","has_too_aply_restriction":false}));
                    break;

                case "TEST02CC1CC2CC3CC4CC5CC6CC7CC8CC9CC10CC11C1":
                    response.write(JSON.stringify({"profile_id":"MIDLOW","bottom_breakpoint":0,"max_allowed_amount":10000000,"reason_id":"","top_breakpoint":20,"sent_to_crm":false,"queue_id":"","has_too_aply_restriction":false}));
                    break;

                case "TEST03CC1CC2CC3CC4CC5CC6CC7CC8CC9CC10CC11C1":
                    response.write(JSON.stringify({"profile_id":"MID","bottom_breakpoint":0,"max_allowed_amount":10000000,"reason_id":"","top_breakpoint":20,"sent_to_crm":false,"queue_id":"","has_too_aply_restriction":false}));
                    break;

                case "TEST04CC1CC2CC3CC4CC5CC6CC7CC8CC9CC10CC11C1":
                    response.write(JSON.stringify({"profile_id":"MIDHIGH","bottom_breakpoint":0,"max_allowed_amount":10000000,"reason_id":"","top_breakpoint":20,"sent_to_crm":false,"queue_id":"","has_too_aply_restriction":false}));
                    break;

                case "TEST05CC1CC2CC3CC4CC5CC6CC7CC8CC9CC10CC11C1":
                    response.write(JSON.stringify({"profile_id":"HIGH","bottom_breakpoint":0,"max_allowed_amount":10000000,"reason_id":"","top_breakpoint":20,"sent_to_crm":false,"queue_id":"","has_too_aply_restriction":false}));
                    break;

                case "TEST06CC1CC2CC3CC4CC5CC6CC7CC8CC9CC10CC11C1":
                    response.write(JSON.stringify({"profile_id":"MIDINH","bottom_breakpoint":0,"max_allowed_amount":10000000,"reason_id":"","top_breakpoint":20,"sent_to_crm":false,"queue_id":"","has_too_aply_restriction":false}));
                    break;

                case "anonymous_users_op":
                    response.write(JSON.stringify({"users": [20151999]}));
                    break;

                case "tree_industry_map":
                    response.write(JSON.stringify({"id":"tree_industry_map","description":"Mapeo de industria tree","content":[{"config_id":"REC","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_Payment_TO_MELI"},{"config_id":"STD","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI"},{"config_id":"OFF","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI"},{"config_id":"MIS","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_Instore"},{"config_id":"WLT","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_Payment_TO_MELI"},{"config_id":"MIS","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_Instore"},{"config_id":"OFF","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_OFF"},{"config_id":"REC","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_RECURRING"},{"config_id":"STD","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI"},{"config_id":"WLT","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_Payment_TO_MELI"},{"config_id":"OFF","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_OFF"},{"config_id":"REC","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_RECURRING"},{"config_id":"STD","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_STD"},{"config_id":"WLT","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_Payment_TO_MELI"},{"config_id":"MIS","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_Instore"},{"config_id":"OFF","flow_id":"MI","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI"},{"config_id":"STD","flow_id":"MI","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI"},{"config_id":"REC","flow_id":"MI","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI"},{"config_id":"WLT","flow_id":"MI","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI"},{"config_id":"MIS","flow_id":"MI","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI"},{"config_id":"OFF","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_OFF"},{"config_id":"REC","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_RECURRING"},{"config_id":"STD","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI"},{"config_id":"WLT","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_Payment_TO_MELI"},{"config_id":"MIS","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_Instore"},{"config_id":"OFF","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI"},{"config_id":"REC","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MP_Payment_TO_MELI"},{"config_id":"STD","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MODELO_MLV_STD"},{"config_id":"WLT","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MP_Payment_TO_MELI"},{"config_id":"MIS","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_Instore"},{"config_id":"STD","flow_id":"MI","industry_id":"test_industry","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_low","site_id":"MCO","tree_id":"ARBOL_LOW_CHO"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_low","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midlow","site_id":"MLV","tree_id":"ARBOL_MIDLOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_mid","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"STD","flow_id":"MI","industry_id":"test_low","site_id":"MLV","tree_id":"ARBOL_LOW_CHO"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_low","site_id":"MLV","tree_id":"ARBOL_LOW_CHO"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_low","site_id":"MLV","tree_id":"ARBOL_LOW_CHO"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midlow","site_id":"MLV","tree_id":"ARBOL_MIDLOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_mid","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"OFF","flow_id":"MI","industry_id":"expensive_coupons","site_id":"MLV","tree_id":"MP_SC_MI_CUPONES_CAROS"},{"config_id":"OFF","flow_id":"MI","industry_id":"coupons","site_id":"MLV","tree_id":"MP_SC_MI_OFF_CUPONES"},{"config_id":"OFF","flow_id":"MI","industry_id":"binary_coupons","site_id":"MLV","tree_id":"MP_SC_MI_OFF_CUPONES_BIN"},{"config_id":"OFF","flow_id":"MI","industry_id":"apparel","site_id":"MLV","tree_id":"MP_SC_MI_OFF_INDUMENTARIA"},{"config_id":"OFF","flow_id":"MI","industry_id":"gaming","site_id":"MLV","tree_id":"MP_SC_MI_VIRTUAL_GOODS"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_low","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_low","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLM","tree_id":"ARBOL_MIDHIGH"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLM","tree_id":"ARBOL_MIDHIGH"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midlow","site_id":"MLM","tree_id":"ARBOL_MIDLOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_low","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"images","site_id":"MLM","tree_id":"MP_SC_MI_IMAGENES"},{"config_id":"OFF","flow_id":"MI","industry_id":"gaming","site_id":"MLM","tree_id":"MP_SC_MI_JUEGOS_ONLINE"},{"config_id":"OFF","flow_id":"MI","industry_id":"coupons","site_id":"MLM","tree_id":"MP_SC_MI_OFF_CUPONES"},{"config_id":"OFF","flow_id":"MI","industry_id":"electronics_coupons","site_id":"MLM","tree_id":"MP_SC_MI_CUPONICA_ELECTRO"},{"config_id":"OFF","flow_id":"MI","industry_id":"universities","site_id":"MLM","tree_id":"MP_SC_MI_OFF_UTN"},{"config_id":"OFF","flow_id":"MI","industry_id":"infomercials","site_id":"MLM","tree_id":"MP_SC_MI_INFOMERCIALES"},{"config_id":"OFF","flow_id":"MI","industry_id":"tickets","site_id":"MLM","tree_id":"MP_SC_MI_TICKETS"},{"config_id":"OFF","flow_id":"MI","industry_id":"retailers","site_id":"MLM","tree_id":"MP_SC_MI_RETAILLER"},{"config_id":"OFF","flow_id":"MI","industry_id":"ecommerce","site_id":"MLM","tree_id":"MP_SC_OFF_ECOMMERCE_MLM"},{"config_id":"STD","flow_id":"MI","industry_id":"test_low","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midlow","site_id":"MLA","tree_id":"ARBOL_MIDLOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_mid","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLA","tree_id":"ARBOL_MIDHIGH"},{"config_id":"STD","flow_id":"MI","industry_id":"test_high","site_id":"MLA","tree_id":"arbol _MT_high"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_mid","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_high","site_id":"MLA","tree_id":"arbol _MT_high"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_low","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_midlow","site_id":"MLA","tree_id":"ARBOL_MIDLOW"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLA","tree_id":"ARBOL_MIDHIGH"},{"config_id":"MIS","flow_id":"MI","industry_id":"test_low","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MI","industry_id":"test_low","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MI","industry_id":"test_low","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MI","industry_id":"test_low","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midlow","site_id":"MLA","tree_id":"ARBOL_MIDLOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_mid","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLA","tree_id":"ARBOL_MIDHIGH"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_high","site_id":"MLA","tree_id":"arbol _MT_high"},{"config_id":"OFF","flow_id":"MI","industry_id":"travel_agencies","site_id":"MLA","tree_id":"MP_SC_MI_AGEN_VIAJES_OFF"},{"config_id":"OFF","flow_id":"MI","industry_id":"catering","site_id":"MLA","tree_id":"MP_SC_MI_CATERING"},{"config_id":"OFF","flow_id":"MI","industry_id":"charity","site_id":"MLA","tree_id":"MP_SC_MI_CHARITY"},{"config_id":"OFF","flow_id":"MI","industry_id":"car_dealer","site_id":"MLA","tree_id":"MP_SC_MI_CONCES_OFF"},{"config_id":"OFF","flow_id":"MI","industry_id":"images","site_id":"MLA","tree_id":"MP_SC_MI_IMAGENES"},{"config_id":"OFF","flow_id":"MI","industry_id":"autoparts","site_id":"MLA","tree_id":"MP_SC_MI_OFF_AUTOPARTES"},{"config_id":"OFF","flow_id":"MI","industry_id":"cloncom","site_id":"MLA","tree_id":"MP_SC_MI_OFF_CLONCOM"},{"config_id":"OFF","flow_id":"MI","industry_id":"coupons","site_id":"MLA","tree_id":"MP_SC_MI_OFF_CUPONES"},{"config_id":"OFF","flow_id":"MI","industry_id":"binary_coupons","site_id":"MLA","tree_id":"MP_SC_MI_OFF_CUPONES_BIN"},{"config_id":"OFF","flow_id":"MI","industry_id":"beauty_and_health","site_id":"MLA","tree_id":"MP_SC_MI_OFF_ESTETICA"},{"config_id":"OFF","flow_id":"MI","industry_id":"apparel","site_id":"MLA","tree_id":"MP_SC_MI_OFF_INDUMENTARIA"},{"config_id":"OFF","flow_id":"MI","industry_id":"universities","site_id":"MLA","tree_id":"MP_SC_MI_OFF_UTN"},{"config_id":"OFF","flow_id":"MI","industry_id":"bus_tickets","site_id":"MLA","tree_id":"MP_SC_MI_OMNIBUS"},{"config_id":"OFF","flow_id":"MI","industry_id":"binary_bus_tickets","site_id":"MLA","tree_id":"MP_SC_MI_OMNIBUS_BIN"},{"config_id":"OFF","flow_id":"MI","industry_id":"tickets","site_id":"MLA","tree_id":"MP_SC_MI_TICKETS"},{"config_id":"OFF","flow_id":"MI","industry_id":"gaming","site_id":"MLA","tree_id":"MP_SC_MI_GAMING"},{"config_id":"OFF","flow_id":"MI","industry_id":"gaming_online","site_id":"MLA","tree_id":"MP_SC_MI_JUEGOS_ONLINE"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_high","site_id":"MLB","tree_id":"arbol _MT_high"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_low","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLB","tree_id":"ARBOL_MIDHIGH"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_midlow","site_id":"MLB","tree_id":"ARBOL_MIDLOW_SEGURO"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_mid","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midinh","site_id":"MLB","tree_id":"TEST_MIDINH"},{"config_id":"STD","flow_id":"MI","industry_id":"test_mid","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLB","tree_id":"ARBOL_MIDHIGH"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midlow","site_id":"MLB","tree_id":"ARBOL_MIDLOW_SEGURO"},{"config_id":"STD","flow_id":"MI","industry_id":"test_high","site_id":"MLB","tree_id":"arbol _MT_high"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midinh","site_id":"MLB","tree_id":"TEST_MIDINH"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_low","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midlow","site_id":"MLB","tree_id":"ARBOL_MIDLOW_SEGURO"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_mid","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLB","tree_id":"ARBOL_MIDHIGH"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_high","site_id":"MLB","tree_id":"arbol _MT_high"},{"config_id":"OFF","flow_id":"MI","industry_id":"tickets","site_id":"MLB","tree_id":"MP_SC_MI_TICKETS"},{"config_id":"OFF","flow_id":"MI","industry_id":"ezconet","site_id":"MLB","tree_id":"MP_SC_MI_EZCONET"},{"config_id":"OFF","flow_id":"MI","industry_id":"gaming","site_id":"MLB","tree_id":"MP_SC_MI_GAMING"},{"config_id":"OFF","flow_id":"MI","industry_id":"micropayments","site_id":"MLB","tree_id":"MP_SC_MI_MICROPAYMENTS"},{"config_id":"OFF","flow_id":"MI","industry_id":"coupons","site_id":"MLB","tree_id":"MP_SC_MI_OFF_CUPONES"},{"config_id":"REC","flow_id":"MI","industry_id":"test_low","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"charity","site_id":"MCO","tree_id":"MP_SC_MI_CHARITY"},{"config_id":"REC","flow_id":"MI","industry_id":"test_low","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MI","industry_id":"test_low","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_control_group","site_id":"MLA","tree_id":"TEST_CONTROL_GROUP"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_control_group","site_id":"MLV","tree_id":"TEST_CONTROL_GROUP"},{"config_id":"PRE","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_Payment_TO_MELI"},{"config_id":"PRE","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MP_Payment_TO_MELI"},{"config_id":"PRE","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_Payment_TO_MELI"},{"config_id":"PRE","flow_id":"MI","industry_id":"default","site_id":"MLC","tree_id":"MP_Payment_TO_MELI"},{"config_id":"PRE","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_Payment_TO_MELI"},{"config_id":"PRE","flow_id":"MI","industry_id":"test_low","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"PRE","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_RECURRING"},{"config_id":"OFF","flow_id":"MI","industry_id":"charity","site_id":"MLM","tree_id":"MP_SC_MI_CHARITY"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_control_group","site_id":"MCO","tree_id":"TEST_CONTROL_GROUP"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_low","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLC","tree_id":"ARBOL_MIDHIGH"},{"config_id":"TLV","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_TELEVENTAS"},{"config_id":"TLV","flow_id":"MI","industry_id":"travel_agencies","site_id":"MLA","tree_id":"MP_SC_MI_TELEVENTAS_VIAJE"},{"config_id":"OFF","flow_id":"MI","industry_id":"travel_agencies","site_id":"MLM","tree_id":"MP_SC_MI_AGEN_VIAJES_OFF"},{"config_id":"OFF","flow_id":"MI","industry_id":"travel_agencies","site_id":"MCO","tree_id":"MP_SC_MI_AGEN_VIAJES_OFF"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midinh","site_id":"MLA","tree_id":"ARBOL_MIDINH"},{"config_id":"OFF","flow_id":"MI","industry_id":"travel_agencies","site_id":"MLB","tree_id":"MP_SC_MI_AGEN_VIAJES_OFF"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midhigh","site_id":"MCO","tree_id":"ARBOL_MIDHIGH"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_preference","site_id":"MLA","tree_id":"TEST_IS_RECEIVER_X"},{"config_id":"OPT","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OPT","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OPT","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OPT","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OPT","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"open_platform","site_id":"MLB","tree_id":"MP_SC_MI_OFF"},{"config_id":"STD","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"ACCOUNT_MONEY"},{"config_id":"STD","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"ACCOUNT_MONEY"},{"config_id":"STD","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"ACCOUNT_MONEY"},{"config_id":"STD","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"ACCOUNT_MONEY"},{"config_id":"STD","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"ACCOUNT_MONEY"},{"config_id":"STD","flow_id":"MT","industry_id":"default","site_id":"MLC","tree_id":"ACCOUNT_MONEY"},{"config_id":"OFF","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"ACCOUNT_MONEY"},{"config_id":"OFF","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"ACCOUNT_MONEY"},{"config_id":"OFF","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"ACCOUNT_MONEY"},{"config_id":"OFF","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"ACCOUNT_MONEY"},{"config_id":"OFF","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"ACCOUNT_MONEY"},{"config_id":"OFF","flow_id":"MT","industry_id":"default","site_id":"MLC","tree_id":"ACCOUNT_MONEY"},{"config_id":"WLT","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"TLV","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"TLV","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"TLV","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"TLV","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"TLV","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"PRE","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"PRE","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"PRE","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"PRE","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"PRE","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MT","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MT","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MT","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI_ARBOL_LOW"}],"cache_time":43200,"autor":"mfurlong"}));
                    break;

                case "api_risk_restriction_config":
                    response.write(JSON.stringify([{"flow_id": "MT","score_id": "MIDINH","restriction": "MONEY_OUT_PAY","site_id": "ALL"},{"flow_id": "MT","score_id": "HIGH","restriction": "FONDEO_DUDOSO","site_id": "ALL"}]));
                    break;

                case "customers_sla_time":
                    response.write(JSON.stringify([{"cust_id": 169753526,"time" : "30"},{"cust_id": 107370982,"time" : "30"},]));
                    break;
                case "SCO_LOADER_PRIORITY":
                    //response.write(JSON.stringify(SCP_PRIORITY));

                    var config = findConfig("SCO_LOADER_PRIORITY");
                    if (config != null) {
                        //response.write(JSON.stringify(config.content));
                        response.write(JSON.stringify(config));
                    }

                    break;

                default:
                    response.write(JSON.stringify({"id":"MLB_PMT_MTH","description":"Configuracion para unico punto de acreditacion","content":"visa","cache_time":"0S"}));
                    break;
            }

            response.end();
        },

        configGetContent : function(request, response){
                        response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/fraud/admin/config/(\\w*)/content');
            uriRegExp.exec(pathname);

            var confId = RegExp.$1;

            console.log ("configId:"+confId);
            switch (confId) {

                case "BAN_API_WHITELIST":
                    response.write(JSON.stringify({"collectors":["1233","1564","156"],"edomains":["gmail.com","hotmail.com"],"ips":["123,125,154","154.125.9"],"bines":["6548","4566","asdasd"]}));
                    break;
                
                case "ACCOUNT_EMAILS_LENGTH":
                    response.write(JSON.stringify({"email":5,"test":5}));
                    break;


                case "OPT_USER_LIST_ANONYMOUS":
                    contador = contador + 1
                    console.log("CONTADORRRRRRRRRRRRRRRR: " + contador)
                    response.write(JSON.stringify({"user_list":
                        [   {"site_id":'MLA' , "payer_id": 147688640},
                            {"site_id":'MLB' , "payer_id": 151211818},
                            {"site_id":'MLV' , "payer_id":156073372},
                            {"site_id":'MLM' , "payer_id": 158688643},
                            {"site_id":'MCO' , "payer_id": 160966655},
                            {"site_id":'MLA' , "payer_id" :196631504},
                            {"site_id":'MLB' , "payer_id" :196631468},
                            {"site_id":'MLV' , "payer_id" :196639694},
                            {"site_id":'MLC' , "payer_id" :196641556},
                            {"site_id":'MCO' , "payer_id" :196641557},
                            {"site_id":'MLA-test' , "payer_id": 127729747},
                            {"site_id":'MLB' , "payer_id": 128185910},
                            {"site_id":'MLV-test' , "payer_id": 132358972},
                            {"site_id":'MLM-test' , "payer_id" : 129210837},
                            {"site_id":'MCO-test' , "payer_id": 160967051}
                        ]
                    }));
                    break;

                case "OPT_USER_LIST":
                    response.write(JSON.stringify({"user_list":[179384711]}));
                    break;

                case "USER_FORCE_TO_OPT":
                    response.write(JSON.stringify({"user_list":[145697141]}));
                    break;

                case "TEST01CC1CC2CC3CC4CC5CC6CC7CC8CC9CC10CC11C1":
                    response.write(JSON.stringify({"profile_id":"LOW","bottom_breakpoint":0,"max_allowed_amount":10000000,"reason_id":"","top_breakpoint":20,"sent_to_crm":false,"queue_id":"","has_too_aply_restriction":false}));
                    break;

                case "TEST02CC1CC2CC3CC4CC5CC6CC7CC8CC9CC10CC11C1":
                    response.write(JSON.stringify({"profile_id":"MIDLOW","bottom_breakpoint":0,"max_allowed_amount":10000000,"reason_id":"","top_breakpoint":20,"sent_to_crm":false,"queue_id":"","has_too_aply_restriction":false}));
                    break;

                case "TEST03CC1CC2CC3CC4CC5CC6CC7CC8CC9CC10CC11C1":
                    response.write(JSON.stringify({"profile_id":"MID","bottom_breakpoint":0,"max_allowed_amount":10000000,"reason_id":"","top_breakpoint":20,"sent_to_crm":false,"queue_id":"","has_too_aply_restriction":false}));
                    break;

                case "TEST04CC1CC2CC3CC4CC5CC6CC7CC8CC9CC10CC11C1":
                    response.write(JSON.stringify({"profile_id":"MIDHIGH","bottom_breakpoint":0,"max_allowed_amount":10000000,"reason_id":"","top_breakpoint":20,"sent_to_crm":false,"queue_id":"","has_too_aply_restriction":false}));
                    break;

                case "TEST05CC1CC2CC3CC4CC5CC6CC7CC8CC9CC10CC11C1":
                    response.write(JSON.stringify({"profile_id":"HIGH","bottom_breakpoint":0,"max_allowed_amount":10000000,"reason_id":"","top_breakpoint":20,"sent_to_crm":false,"queue_id":"","has_too_aply_restriction":false}));
                    break;

                case "TEST06CC1CC2CC3CC4CC5CC6CC7CC8CC9CC10CC11C1":
                    response.write(JSON.stringify({"profile_id":"MIDINH","bottom_breakpoint":0,"max_allowed_amount":10000000,"reason_id":"","top_breakpoint":20,"sent_to_crm":false,"queue_id":"","has_too_aply_restriction":false}));
                    break;

                case "anonymous_users_op":
                    response.write(JSON.stringify({"users": [20151999]}));
                    break;

                case "tree_industry_map":
                    response.write(JSON.stringify({"id":"tree_industry_map","description":"Mapeo de industria tree","content":[{"config_id":"REC","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_Payment_TO_MELI"},{"config_id":"STD","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI"},{"config_id":"OFF","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI"},{"config_id":"MIS","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_Instore"},{"config_id":"WLT","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_Payment_TO_MELI"},{"config_id":"MIS","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_Instore"},{"config_id":"OFF","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_OFF"},{"config_id":"REC","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_RECURRING"},{"config_id":"STD","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI"},{"config_id":"WLT","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_Payment_TO_MELI"},{"config_id":"OFF","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_OFF"},{"config_id":"REC","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_RECURRING"},{"config_id":"STD","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_STD"},{"config_id":"WLT","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_Payment_TO_MELI"},{"config_id":"MIS","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_Instore"},{"config_id":"OFF","flow_id":"MI","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI"},{"config_id":"STD","flow_id":"MI","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI"},{"config_id":"REC","flow_id":"MI","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI"},{"config_id":"WLT","flow_id":"MI","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI"},{"config_id":"MIS","flow_id":"MI","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI"},{"config_id":"OFF","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_OFF"},{"config_id":"REC","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_RECURRING"},{"config_id":"STD","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI"},{"config_id":"WLT","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_Payment_TO_MELI"},{"config_id":"MIS","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_Instore"},{"config_id":"OFF","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI"},{"config_id":"REC","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MP_Payment_TO_MELI"},{"config_id":"STD","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MODELO_MLV_STD"},{"config_id":"WLT","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MP_Payment_TO_MELI"},{"config_id":"MIS","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_Instore"},{"config_id":"STD","flow_id":"MI","industry_id":"test_industry","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_low","site_id":"MCO","tree_id":"ARBOL_LOW_CHO"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_low","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midlow","site_id":"MLV","tree_id":"ARBOL_MIDLOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_mid","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"STD","flow_id":"MI","industry_id":"test_low","site_id":"MLV","tree_id":"ARBOL_LOW_CHO"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_low","site_id":"MLV","tree_id":"ARBOL_LOW_CHO"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_low","site_id":"MLV","tree_id":"ARBOL_LOW_CHO"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midlow","site_id":"MLV","tree_id":"ARBOL_MIDLOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_mid","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"OFF","flow_id":"MI","industry_id":"expensive_coupons","site_id":"MLV","tree_id":"MP_SC_MI_CUPONES_CAROS"},{"config_id":"OFF","flow_id":"MI","industry_id":"coupons","site_id":"MLV","tree_id":"MP_SC_MI_OFF_CUPONES"},{"config_id":"OFF","flow_id":"MI","industry_id":"binary_coupons","site_id":"MLV","tree_id":"MP_SC_MI_OFF_CUPONES_BIN"},{"config_id":"OFF","flow_id":"MI","industry_id":"apparel","site_id":"MLV","tree_id":"MP_SC_MI_OFF_INDUMENTARIA"},{"config_id":"OFF","flow_id":"MI","industry_id":"gaming","site_id":"MLV","tree_id":"MP_SC_MI_VIRTUAL_GOODS"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_low","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_low","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLM","tree_id":"ARBOL_MIDHIGH"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLM","tree_id":"ARBOL_MIDHIGH"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midlow","site_id":"MLM","tree_id":"ARBOL_MIDLOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_low","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"images","site_id":"MLM","tree_id":"MP_SC_MI_IMAGENES"},{"config_id":"OFF","flow_id":"MI","industry_id":"gaming","site_id":"MLM","tree_id":"MP_SC_MI_JUEGOS_ONLINE"},{"config_id":"OFF","flow_id":"MI","industry_id":"coupons","site_id":"MLM","tree_id":"MP_SC_MI_OFF_CUPONES"},{"config_id":"OFF","flow_id":"MI","industry_id":"electronics_coupons","site_id":"MLM","tree_id":"MP_SC_MI_CUPONICA_ELECTRO"},{"config_id":"OFF","flow_id":"MI","industry_id":"universities","site_id":"MLM","tree_id":"MP_SC_MI_OFF_UTN"},{"config_id":"OFF","flow_id":"MI","industry_id":"infomercials","site_id":"MLM","tree_id":"MP_SC_MI_INFOMERCIALES"},{"config_id":"OFF","flow_id":"MI","industry_id":"tickets","site_id":"MLM","tree_id":"MP_SC_MI_TICKETS"},{"config_id":"OFF","flow_id":"MI","industry_id":"retailers","site_id":"MLM","tree_id":"MP_SC_MI_RETAILLER"},{"config_id":"OFF","flow_id":"MI","industry_id":"ecommerce","site_id":"MLM","tree_id":"MP_SC_OFF_ECOMMERCE_MLM"},{"config_id":"STD","flow_id":"MI","industry_id":"test_low","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midlow","site_id":"MLA","tree_id":"ARBOL_MIDLOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_mid","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLA","tree_id":"ARBOL_MIDHIGH"},{"config_id":"STD","flow_id":"MI","industry_id":"test_high","site_id":"MLA","tree_id":"arbol _MT_high"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_mid","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_high","site_id":"MLA","tree_id":"arbol _MT_high"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_low","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_midlow","site_id":"MLA","tree_id":"ARBOL_MIDLOW"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLA","tree_id":"ARBOL_MIDHIGH"},{"config_id":"MIS","flow_id":"MI","industry_id":"test_low","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MI","industry_id":"test_low","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MI","industry_id":"test_low","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MI","industry_id":"test_low","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midlow","site_id":"MLA","tree_id":"ARBOL_MIDLOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_mid","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLA","tree_id":"ARBOL_MIDHIGH"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_high","site_id":"MLA","tree_id":"arbol _MT_high"},{"config_id":"OFF","flow_id":"MI","industry_id":"travel_agencies","site_id":"MLA","tree_id":"MP_SC_MI_AGEN_VIAJES_OFF"},{"config_id":"OFF","flow_id":"MI","industry_id":"catering","site_id":"MLA","tree_id":"MP_SC_MI_CATERING"},{"config_id":"OFF","flow_id":"MI","industry_id":"charity","site_id":"MLA","tree_id":"MP_SC_MI_CHARITY"},{"config_id":"OFF","flow_id":"MI","industry_id":"car_dealer","site_id":"MLA","tree_id":"MP_SC_MI_CONCES_OFF"},{"config_id":"OFF","flow_id":"MI","industry_id":"images","site_id":"MLA","tree_id":"MP_SC_MI_IMAGENES"},{"config_id":"OFF","flow_id":"MI","industry_id":"autoparts","site_id":"MLA","tree_id":"MP_SC_MI_OFF_AUTOPARTES"},{"config_id":"OFF","flow_id":"MI","industry_id":"cloncom","site_id":"MLA","tree_id":"MP_SC_MI_OFF_CLONCOM"},{"config_id":"OFF","flow_id":"MI","industry_id":"coupons","site_id":"MLA","tree_id":"MP_SC_MI_OFF_CUPONES"},{"config_id":"OFF","flow_id":"MI","industry_id":"binary_coupons","site_id":"MLA","tree_id":"MP_SC_MI_OFF_CUPONES_BIN"},{"config_id":"OFF","flow_id":"MI","industry_id":"beauty_and_health","site_id":"MLA","tree_id":"MP_SC_MI_OFF_ESTETICA"},{"config_id":"OFF","flow_id":"MI","industry_id":"apparel","site_id":"MLA","tree_id":"MP_SC_MI_OFF_INDUMENTARIA"},{"config_id":"OFF","flow_id":"MI","industry_id":"universities","site_id":"MLA","tree_id":"MP_SC_MI_OFF_UTN"},{"config_id":"OFF","flow_id":"MI","industry_id":"bus_tickets","site_id":"MLA","tree_id":"MP_SC_MI_OMNIBUS"},{"config_id":"OFF","flow_id":"MI","industry_id":"binary_bus_tickets","site_id":"MLA","tree_id":"MP_SC_MI_OMNIBUS_BIN"},{"config_id":"OFF","flow_id":"MI","industry_id":"tickets","site_id":"MLA","tree_id":"MP_SC_MI_TICKETS"},{"config_id":"OFF","flow_id":"MI","industry_id":"gaming","site_id":"MLA","tree_id":"MP_SC_MI_GAMING"},{"config_id":"OFF","flow_id":"MI","industry_id":"gaming_online","site_id":"MLA","tree_id":"MP_SC_MI_JUEGOS_ONLINE"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_high","site_id":"MLB","tree_id":"arbol _MT_high"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_low","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLB","tree_id":"ARBOL_MIDHIGH"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_midlow","site_id":"MLB","tree_id":"ARBOL_MIDLOW_SEGURO"},{"config_id":"WLT","flow_id":"MI","industry_id":"test_mid","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midinh","site_id":"MLB","tree_id":"TEST_MIDINH"},{"config_id":"STD","flow_id":"MI","industry_id":"test_mid","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLB","tree_id":"ARBOL_MIDHIGH"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midlow","site_id":"MLB","tree_id":"ARBOL_MIDLOW_SEGURO"},{"config_id":"STD","flow_id":"MI","industry_id":"test_high","site_id":"MLB","tree_id":"arbol _MT_high"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midinh","site_id":"MLB","tree_id":"TEST_MIDINH"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_low","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midlow","site_id":"MLB","tree_id":"ARBOL_MIDLOW_SEGURO"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_mid","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_MID"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLB","tree_id":"ARBOL_MIDHIGH"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_high","site_id":"MLB","tree_id":"arbol _MT_high"},{"config_id":"OFF","flow_id":"MI","industry_id":"tickets","site_id":"MLB","tree_id":"MP_SC_MI_TICKETS"},{"config_id":"OFF","flow_id":"MI","industry_id":"ezconet","site_id":"MLB","tree_id":"MP_SC_MI_EZCONET"},{"config_id":"OFF","flow_id":"MI","industry_id":"gaming","site_id":"MLB","tree_id":"MP_SC_MI_GAMING"},{"config_id":"OFF","flow_id":"MI","industry_id":"micropayments","site_id":"MLB","tree_id":"MP_SC_MI_MICROPAYMENTS"},{"config_id":"OFF","flow_id":"MI","industry_id":"coupons","site_id":"MLB","tree_id":"MP_SC_MI_OFF_CUPONES"},{"config_id":"REC","flow_id":"MI","industry_id":"test_low","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"charity","site_id":"MCO","tree_id":"MP_SC_MI_CHARITY"},{"config_id":"REC","flow_id":"MI","industry_id":"test_low","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MI","industry_id":"test_low","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_control_group","site_id":"MLA","tree_id":"TEST_CONTROL_GROUP"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_control_group","site_id":"MLV","tree_id":"TEST_CONTROL_GROUP"},{"config_id":"PRE","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_Payment_TO_MELI"},{"config_id":"PRE","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MP_Payment_TO_MELI"},{"config_id":"PRE","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_Payment_TO_MELI"},{"config_id":"PRE","flow_id":"MI","industry_id":"default","site_id":"MLC","tree_id":"MP_Payment_TO_MELI"},{"config_id":"PRE","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_Payment_TO_MELI"},{"config_id":"PRE","flow_id":"MI","industry_id":"test_low","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"PRE","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_RECURRING"},{"config_id":"OFF","flow_id":"MI","industry_id":"charity","site_id":"MLM","tree_id":"MP_SC_MI_CHARITY"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_control_group","site_id":"MCO","tree_id":"TEST_CONTROL_GROUP"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_low","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midhigh","site_id":"MLC","tree_id":"ARBOL_MIDHIGH"},{"config_id":"TLV","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_TELEVENTAS"},{"config_id":"TLV","flow_id":"MI","industry_id":"travel_agencies","site_id":"MLA","tree_id":"MP_SC_MI_TELEVENTAS_VIAJE"},{"config_id":"OFF","flow_id":"MI","industry_id":"travel_agencies","site_id":"MLM","tree_id":"MP_SC_MI_AGEN_VIAJES_OFF"},{"config_id":"OFF","flow_id":"MI","industry_id":"travel_agencies","site_id":"MCO","tree_id":"MP_SC_MI_AGEN_VIAJES_OFF"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midinh","site_id":"MLA","tree_id":"ARBOL_MIDINH"},{"config_id":"OFF","flow_id":"MI","industry_id":"travel_agencies","site_id":"MLB","tree_id":"MP_SC_MI_AGEN_VIAJES_OFF"},{"config_id":"STD","flow_id":"MI","industry_id":"test_midhigh","site_id":"MCO","tree_id":"ARBOL_MIDHIGH"},{"config_id":"OFF","flow_id":"MI","industry_id":"test_preference","site_id":"MLA","tree_id":"TEST_IS_RECEIVER_X"},{"config_id":"OPT","flow_id":"MI","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OPT","flow_id":"MI","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OPT","flow_id":"MI","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OPT","flow_id":"MI","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OPT","flow_id":"MI","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"OFF","flow_id":"MI","industry_id":"open_platform","site_id":"MLB","tree_id":"MP_SC_MI_OFF"},{"config_id":"STD","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"ACCOUNT_MONEY"},{"config_id":"STD","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"ACCOUNT_MONEY"},{"config_id":"STD","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"ACCOUNT_MONEY"},{"config_id":"STD","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"ACCOUNT_MONEY"},{"config_id":"STD","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"ACCOUNT_MONEY"},{"config_id":"STD","flow_id":"MT","industry_id":"default","site_id":"MLC","tree_id":"ACCOUNT_MONEY"},{"config_id":"OFF","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"ACCOUNT_MONEY"},{"config_id":"OFF","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"ACCOUNT_MONEY"},{"config_id":"OFF","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"ACCOUNT_MONEY"},{"config_id":"OFF","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"ACCOUNT_MONEY"},{"config_id":"OFF","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"ACCOUNT_MONEY"},{"config_id":"OFF","flow_id":"MT","industry_id":"default","site_id":"MLC","tree_id":"ACCOUNT_MONEY"},{"config_id":"WLT","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"TLV","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"TLV","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"TLV","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"TLV","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"TLV","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"PRE","flow_id":"MT","industry_id":"default","site_id":"MCO","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"PRE","flow_id":"MT","industry_id":"default","site_id":"MLA","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"PRE","flow_id":"MT","industry_id":"default","site_id":"MLB","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"PRE","flow_id":"MT","industry_id":"default","site_id":"MLM","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"PRE","flow_id":"MT","industry_id":"default","site_id":"MLV","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"REC","flow_id":"MT","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"WLT","flow_id":"MT","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI_ARBOL_LOW"},{"config_id":"MIS","flow_id":"MT","industry_id":"default","site_id":"MLC","tree_id":"MP_SC_MI_ARBOL_LOW"}],"cache_time":43200,"autor":"mfurlong"}));
                    break;

                case "api_risk_restriction_config":
                    response.write(JSON.stringify([{"flow_id": "MT","score_id": "MIDINH","restriction": "MONEY_OUT_PAY","site_id": "ALL"},{"flow_id": "MT","score_id": "HIGH","restriction": "FONDEO_DUDOSO","site_id": "ALL"}]));
                    break;

                case "customers_sla_time":
                    response.write(JSON.stringify([{"cust_id": 169753526,"time" : "30"},{"cust_id": 107370982,"time" : "30"}]));
                    break;

                case "address_abbreviation_dictionary":
                    response.write(JSON.stringify({"av":"avenida", "avda":"avenida", "blvd":"boulevard", "dr":"doctor"}));
                    break;

                case "address_orthography_dictionary":
                    response.write(JSON.stringify({"governador":"gobernador", "abenida":"avenida"}));
                    break;

                case "address_separators":
                    response.write(JSON.stringify([".",",",";",":","_","-"]));
                    break;

                case "mr_cross_limits":
                    response.write(JSON.stringify({"default": 180, "user_inhab": 730, "mp_restrictions": ["FRAUDE_TC", "FRAUDE_CRUCE", "MONEY_IN_TC", "MONEY_OUT_HI", "MONEY_OUT_PAY", "FONDEO_DUDOSO", "CHARGEBACK_COMP", "CHARGEBACK_VEND"]}));
                    break;
                    break;

                case "period_for_ss_jobs":
                    response.write(JSON.stringify({"from_hour_of_day":9,"from_minute":0,"from_second":0,"to_hour_of_day":22,"to_minute":0,"to_second":0}));
                    break;

                case "period_for_mt_jobs":
                    response.write(JSON.stringify({"from_hour_of_day":9,"from_minute":0,"from_second":0,"to_hour_of_day":22,"to_minute":0,"to_second":0}));
                    break;
                case "manual_review_cases_money_out":
                    response.write(JSON.stringify({"sub_type":"money_out_subtype","resolutions":[{"id":"Next","reasons":["reason 1","reason 2"]},{"id":"Pause","reasons":["B_P","reason 2"]},{"id":"Accept","reasons":["reason 1","reason 2"]}],"operators":[{"operators":["=","<>",">=","<=","<",">","RANGE"],"type":"Date"},{"operators":["=","<>",">=","<=","<",">","RANGE"],"type":"Integer"},{"operators":["=","<>",">=","<=","<",">","RANGE"],"type":"Double"},{"operators":["=","<>","LIST","NOT LIST"],"type":"String"},{"operators":["=","<>"],"type":"Boolean"},{"operators": ["=", "<>", "LIST", "NOT LIST"],"type": "List"}],"method":[{"name":"getUserInfo"},{"name":"lastModifiedPersonalData"},{"name":"crossesInfo"},{"parameter":true,"description":"cuantidad de cuestiones por fecha","name":"fromQuestionsInfo","paramValue":[0.5,2,7],"paramName":"ques_quantity"},{"parameter":true,"description":"cuantidad de cuestiones por fecha (received)","name":"toQuestionsInfo","paramValue":[0.5,2,7],"paramName":"ques_received_quantity"},{"parameter":true,"description":"cuantidad de cuestiones por fecha","name":"toBidsInfo","paramValue":[0.5,2,7],"paramName":"bids_quantity"},{"parameter":true,"description":"cuantidad de revisoes","name":"reviewsInfo","paramValue":[0.5,4],"paramName":"reviews_quantity"},{"name":"goldUserInfo"},{"name":"verificationStatusInfo"},{"name":"getEvents"},{"parameter":true,"description":"Categoria de Riesgo","name":"riskCategInfo","paramValue":[0.5,2,7],"paramName":"risk_categ"},{"parameter":true,"description":"Tpv","name":"tpvInfo","paramValue":[0.5,2,7],"paramName":"tpv"}],"type":"money_out","due_days":2,"actions":[{"values":["FTS","AAA"],"type":"verification"},{"values":["internal_control_seller"],"type":"immediatePayment"},{"values":["FRD_BOLETO","BBBB"],"type":"restriction"}],"fields_detail":[{"id": "client_id","behavior": "increment","description": "Client Id","type": "List"}, {"id":"last_modified_data","description":"fecha de última modificación","value":null,"type":"Date"},{"id":"last_modified_personal_data_date","description":"última fecha de modificación de datos personales","value":null,"type":"Date"},{"id":"registration_date","description":"fecha de registro","value":null,"type":"Date"},{"id":"crosses_quantity","description":"cantidad de crosses","value":"","type":"Integer"},{"id":"ques_quantity_12h","description":"cantidad de cuestiones 12h","value":0,"type":"Integer"},{"id":"ques_quantity_2d","description":"cantidad de cuestiones 2 días","value":0,"type":"Integer"},{"id":"ques_quantity_7d","description":"cantidad de cuestiones 7 días","value":0,"type":"Integer"},{"id":"tpv_12h","description":"TPV 12 horas","value":0,"type":"Double"},{"id":"tpv_2d","description":"TPV 2 días","value":0,"type":"Double"},{"id":"tpv_7d","description":"TPV 7 días","value":0,"type":"Double"},{"id":"reviews_quantity_7d","description":"Cantidad Comentarios en 7 días","value":0,"type":"Integer"},{"id":"reviews_quantity_12h","description":"Cantidad Comentarios en 12 horas","value":0,"type":"Integer"},{"id":"reviews_quantity_4d","description":"Cantidad Comentarios en 4 días","value":0,"type":"Integer"},{"id":"bids_quantity_12h","description":"Cantidad ofertas en 12 horas","value":0,"type":"Integer"},{"id":"bids_quantity_2d","description":"Cantidad ofertas en 2 días","value":0,"type":"Integer"},{"id":"bids_quantity_7d","description":"Cantidad ofertas en 7 días","value":0,"type":"Integer"},{"id":"ques_received_quantity_12h","description":"Cuestiones recibido 12h cantidad","value":0,"type":"Integer"},{"id":"risk_categ_7d","description":"Categoria de Riesgo en 7 días","value":0,"type":"Integer"},{"id":"ques_received_quantity_2d","description":"Cantidad preguntas recibido en 2 días","value":0,"type":"Integer"},{"id":"ques_received_quantity_7d","description":"Cantidad preguntas recibido en 7 días","value":0,"type":"Integer"},{"id":"event_quantity","description":"Cantidad de eventos","value":1,"type":"Integer"},{"id":"goldlist","description":"Estado que no permite restricciones","value":"","type":"String"},{"id":"type_user","description":"Tipo de usuario","value":null,"type":"String"},{"id":"verification_status","description":"Estado de verificación","value":"","type":"String"},{"id":"output_group","description":"Grupo de salida","value":null,"type":"String"},{"id":"user_type","description":"Tipo de usuario","value":"","type":"String"},{"id":"is_classified","description":"Clasifica","value":false,"type":"Boolean"},{"id":"is_core","description":"Core","value":false,"type":"Boolean"},{"id":"is_test_case","description":"usuario de testeo","value":null,"type":"String"},{"id":"user_type","description":"Tipo de usuario","value":"","type":"String"},{"id":"email_domain","description":"Email do usuario","value":"","type":"String"},{"id":"payer_registration_date","description":"Fecha de registro de usuario","value":null,"type":"Date"},{"id":"last_modified_personal_data_date","description":"Ultima fecha de modificacion del usuario","value":null,"type":"Date"},{"id":"deactive_account_crosses_quantity","description":"deactive Cantidad de cruces de la cuenta","value":null,"type":"Integer"},{"id":"crosses_quantity","description":"Cantidad_de cruces","value":null,"type":"Integer"}],"fields_case":[{"id":"_id","description":"Documento Mongodb","value":null,"type":"ObjectId"},{"id":"status","description":"estado del caso","value":"open","type":"String"},{"id":"type","description":"tipo del usuario del caso","value":"money_out","type":"String"},{"id":"id","description":"cust do usuario del caso","value":null,"type":"String"},{"id":"site_id","description":"site del caso","value":"","type":"String"},{"id":"date_created","description":"fecha creación del caso","value":null,"type":"Date"},{"id":"comment","description":"comentario del caso","value":null,"type":"String"},{"id":"last_updated","description":"fecha de actualización","value":null,"type":"Date"},{"id":"owner","description":"propietario del caso","value":null,"type":"String"},{"id":"is_test_case","description":"caso del teste","value":null,"type":"String"},{"id":"reg_version","description":"registro de versión","value":1,"type":"Integer"},{"id":"priority","description":"Prioridade del caso","value":1,"type":"Integer"},{"id":"due_date","param":2,"description":"Fecha prevista","value":null,"type":"Date"}]}));

                    break;
                case "manual_review_cases_tko":
                    response.write(JSON.stringify({"sub_type":"tko","resolutions":[{"id":"Next","reasons":["NEXT ALREADY ANALYSING AND INABILITADO - FRAUD","NEXT ALREADY ANALYSING AND INABILITADO - NO FRAUD","NEXT ALREADY ANALYSING AND INABILITADO - PAUSADO"]},{"id":"Accept","reasons":["WITHOUT SUSPICIONS OF TKO","FAST REHABILITATION","REHABILITATION WITH CALLED OK","REHABILITATION WITH CALLED N/A"]},{"id":"Deactive","reasons":["TKO CONFIRMED","TKO CONFIRMED PROFILE","TKO GROUP (C AND V HACKEADO)","PREV (ACCOUNT OF HACKER)","FRAUD CONFIRMED SELLER - PROFILE KNOWN","FRAUD CONFIRMED BUYER - PROFILE KNOWN","DUPL_INHAB_PERM"]}],"method":[{"description":"getUserInfo","name":"getUserInfo"},{"description":"lastModifiedPersonalData","name":"lastModifiedPersonalData"},{"description":"crossesInfo","name":"crossesInfo"},{"parameter":true,"description":"cuantidad de cuestiones por fecha","name":"fromQuestionsInfo","paramValue":[0.5,2,7],"paramName":"ques_quantity"},{"parameter":true,"description":"cuantidad de cuestiones por fecha (received)","name":"toQuestionsInfo","paramValue":[0.5,2,7],"paramName":"ques_received_quantity"},{"parameter":true,"description":"cuantidad de cuestiones por fecha","name":"toBidsInfo","paramValue":[0.5,2,7],"paramName":"bids_quantity"},{"parameter":true,"description":"cuantidad de revisoes","name":"reviewsInfo","paramValue":[0.5,4],"paramName":"reviews_quantity"},{"name":"goldUserInfo"},{"name":"verificationStatusInfo"},{"name":"getEvents"},{"parameter":true,"description":"Categoria de Riesgo","name":"riskCategInfo","paramValue":[0.5,2,7],"paramName":"risk_categ"},{"parameter":true,"description":"Tpv","name":"tpvInfo","paramValue":[0.5,2,7],"paramName":"tpv"}],"operators":[{"operators":["=","<>",">=","<=","<",">","RANGE"],"type":"Date"},{"operators":["=","<>",">=","<=","<",">","RANGE"],"type":"Integer"},{"operators":["=","<>",">=","<=","<",">","RANGE"],"type":"Double"},{"operators":["=","<>","LIST","NOT LIST"],"type":"String"},{"operators":["=","<>"],"type":"Boolean"}],"type":"tko","salesforce_param":[{"record":[{"id":"012F0000001K0fGIAS","name":"Restricciones"},{"id":"012F0000001JvT3IAK","name":"BACEN_SAC"},{"id":"012F0000001JvnFIAS","name":"BACEN_OUV"},{"id":"012F0000001K0WaIAK","name":"Minha conta está suspensa"}],"queue":[{"id":"a0GF000001D4n8EMAR","name":"BR - Compra/Cuenta"},{"id":"a0GF00000105PtnMAE","name":"BR - AC MercadoPago - Open CC"},{"id":"a0GF000000OHropMAD","name":"BR - MP Consulta CBK"},{"id":"a0GF000001NT72gMAD","name":"BR - MP - Reab CBK origem TKO"},{"id":"a0GF000000wDEs5MAG","name":"SAC - BR - AC Mercadopago"},{"id":"a0GF000000wDEjhMAG","name":"OUV - BR - AC Mercadopago"}]}],"actions":[{"values":["BUYPAY_ESCROW","RP2_BLCK_INHAB","BP_ESCROW_NOFTS","PN","PML_CONG_DOC","PML_CONG_CF","PML_CONG_DOC_CF","PML_ULT_DOC","PML_ULT_CF","PML_ULT_DOC_CF","POCF","POI_POCF","PML_PAUSA_CF","PML_PAUSA_DOCCF","PAUSA_TOTAL","RP2_PAUSA_BLKT","NV","DM","DOK","VF","POI","NNA","POL_SPAM","COMPCONT","FRDDOCC","MEDCVTAS","OTROS","PROS","MALCALIF","TKO","VENDCONT","FRDDOCV","DFNOMB","NNP","INHNNA","DUP_PERM","DUPL_INH_PERM","ROGUE_BIDDER","SHILL_BIDDER","MP_CHARGEBACK","PREV_INHAB_PERM","PAUSA_FTS","B_P","internal_control_seller","internal_control_buyer"],"type":"verification"},{"values":["TEMPLATE_FRAUD","PREV_FRAUD","PREV_FRAUD_ES"],"type":"solution"},{"values":["FRD_BOLETO","MONEY_OUT_HI","FONDEO_DUDOSO","TKO","TKO_REHAB"],"type":"restriction"},{"values":["internal_control_seller","internal_control_buyer"],"type":"immediatePayment"},{"values":["first_name","last_name","nickname","identification","phone","address","zip_code","city","email"],"type":"userInfo"}],"due_days":2,"fields_case":[{"id":"_id","description":"Documento Mongodb","value":null,"type":"ObjectId"},{"id":"status","description":"estado del caso","value":"open","type":"String"},{"id":"type","description":"tipo del usuario del caso","value":"tko","type":"String"},{"id":"id","description":"cust do usuario del caso","value":null,"type":"String"},{"id":"site_id","description":"site del caso","value":"","type":"String"},{"id":"date_created","description":"fecha creación del caso","value":null,"type":"Date"},{"id":"comment","description":"comentario del caso","value":null,"type":"String"},{"id":"last_updated","description":"fecha de actualización","value":null,"type":"Date"},{"id":"owner","description":"propietario del caso","value":null,"type":"String"},{"id":"is_test_case","description":"caso del teste","value":null,"type":"String"},{"id":"reg_version","description":"registro de versión","value":1,"type":"Integer"},{"id":"priority","description":"Prioridade del caso","value":1,"type":"Integer"},{"id":"due_date","param":2,"description":"Fecha prevista","value":null,"type":"Date"},{"id":"test_array_increment","behavior":"increment","description":"test array","type":"List"}],"fields_detail":[{"id":"is_test_case","description":"¿Es un caso de usuario de testeo?","type":"Boolean"},{"id":"due_date","description":"Fecha de vencimiento del caso.","type":"Date"},{"id":"worst_risk","description":"Riesgo del caso.","type":"Double"},{"id":"priority","description":"Prioridad del caso.","type":"Double"},{"id":"date_created","description":"Fecha de creación.","type":"Date"},{"id":"last_updated","description":"Última actualización.","type":"Date"},{"id":"points","description":"Puntos del usuario.","type":"Integer"},{"id":"last_modified_personal_data_date","description":"La última fecha de cambio de datos (PHONE, EMAIL, PWD)","type":"Date"},{"id":"deactive_account_crosses_quantity","description":"Cantidad de cruces con cuentas inhabilitadas.","type":"Integer"},{"id":"email_domain","description":"Dominio del email. ","type":"String"},{"id":"reviews_quantity_7d","description":"Casos anteriores revisados.","type":"Integer"},{"id":"bids_quantity_12h","description":"Cantidad de bids en las últimas 12 horas.","type":"Integer"},{"id":"bids_quantity_2d","description":"Cantidad de bids en los últimos 2 días.","type":"Integer"},{"id":"bids_quantity_7d","description":"Cantidad de bids en los últimos 7 días.","type":"Integer"},{"id":"ques_recieved_quantity_12h","description":"Cantidad de preguntas recibidas en las últimas 12 horas.","type":"Integer"},{"id":"ques_recieved_quantity_2d","description":"Cantidad de preguntas recibidas en los últimos 2 días.","type":"Integer"},{"id":"ques_recieved_quantity_7d","description":"Cantidad de preguntas recibidas en los últimos 7 días.","type":"Integer"},{"id":"ques_quantity_12h","description":"Cantidad de preguntas realizadas en las últimas 12 horas.","type":"Integer"},{"id":"ques_quantity_2d","description":"Cantidad de preguntas realizadas en los últimos 2 días.","type":"Integer"},{"id":"ques_quantity_7d","description":"Cantidad de preguntas realizadas en los últimos 7 días.","type":"Integer"},{"id":"risk_categ_7d","description":"Cantidad de publicaciones en categoría de riesgo en los últimos 7 días.","type":"Integer"},{"id":"tpv_12h","description":"TPV últimas 12 horas.","type":"Double"},{"id":"tpv_2d","description":"TPV últimos 2 días.","type":"Double"},{"id":"tpv_7d","description":"TPV últimos 7 días.","type":"Double"},{"id":"event_quantity","description":"Cantidad de eventos del usuario.","type":"Integer"},{"id":"is_goldlist","description":"Es usuario goldlist.","type":"Boolean"},{"id":"user_type","description":"Tipo de usuario","type":"String"},{"id":"output_group","description":"Grupo de salida","type":"String"},{"id":"verification_status","description":"Estado de verificación aplicado.","type":"String"},{"id":"is_core","description":"Core","type":"Boolean"},{"id":"is_classified","description":"Classified","type":"Boolean"},{"id":"subtype","behavior":"override","description":"El subtipo de caso","type":"String","paramValue":["TKO_MP","REHAB_MP","SCORING","SF-TKO","SF-REHABTKO","SF-TKO-HSP","SF-REHABTKO-HSP"]},{"id":"test_min","description":"test_min","behavior":"min","type":"Integer"},{"id":"test_max","description":"test_max","behavior":"max","type":"Integer"},{"id":"amount_override_false","description":"amount override false","type":"Double"},{"id":"amount_override_true","description":"amount override true","type":"Double","behavior":"override"},{"id":"amount_min","description":"amount min","type":"Double","behavior":"min"},{"id":"amount_max","description":"amount max","type":"Double","behavior":"max"},{"id":"amount_increment","description":"amount increment","type":"Double","behavior":"increment"},{"id":"test_array_increment","behavior":"increment","description":"test array","type":"List"},{"id":"sf_cases","behavior":"increment","description":"Salesforce cases","item":"sf_case_number","type":"List"},{"id":"withdraw_amount","description":"Withdraw amount","behavior":"increment","type":"Double"},{"id":"method_withdraw","behavior":"increment","description":"Values type money_out","type":"List"},{"id":"client_id","behavior":"increment","description":"Client Id","type":"List"},{"id":"claim_id","behavior":"override","description":"ID to mediations","type":"String"}]}));
                    break;
                case "manual_review_cases_test_config":
                    response.write(JSON.stringify({"resolutions": [{"id": "Next","reasons": ["reason 1","reason 2"]},{"id": "Accept","reasons": ["reason 1","reason 2"]}],"sub_type": "test_subtype","actions": [{"type": "verification","values": ["FTS","AAA"]},{"type": "restriction","values": ["FRD_BOLETO","BBBB"]}],"method": [{"name": "getUserInfo"},{"name": "lastModifiedPersonalData"},{"name": "crossesInfo"},{"parameter": true,"description": "cuantidad de cuestiones por fecha","name": "fromQuestionsInfo","paramValue": [0.5,2,7],"paramName": "ques_quantity"},{"parameter": true,"description": "cuantidad de cuestiones por fecha (received)","name": "toQuestionsInfo","paramValue": [0.5,2,7],"paramName": "ques_received_quantity"},{"parameter": true,"description": "cuantidad de cuestiones por fecha","name": "toBidsInfo","paramValue": [0.5,2,7],"paramName": "bids_quantity"},{"parameter": true,"description": "cuantidad de revisoes","name": "reviewsInfo","paramValue": [0.5,4],"paramName": "reviews_quantity"},{"name": "goldUserInfo"},{"name": "verificationStatusInfo"},{"name": "getEvents"},{"parameter": true,"description": "Categoria de Riesgo","name": "riskCategInfo","paramValue": [0.5,2,7],"paramName": "risk_categ"},{"parameter": true,"description": "Tpv","name": "tpvInfo","paramValue": [0.5,2,7],"paramName": "tpv"}],"operators": [{"operators": ["=","<>",">=","<=","<",">","RANGE"],"type": "Date"},{"operators": ["=","<>",">=","<=","<",">","RANGE"],"type": "Integer"},{"operators": ["=","<>",">=","<=","<",">","RANGE"],"type": "Double"},{"operators": ["=","<>","LIST","NOT LIST"],"type": "String"},{"operators": ["=","<>"],"type": "Boolean"}],"type": "money_out","due_days": 2,"fields_case": [{"id": "_id","description": "Documento Mongodb","value": null,"type": "ObjectId"},{"id": "status","description": "estado del caso","value": "open","type": "String"},{"id": "type","description": "tipo del usuario del caso","value": "money_out","type": "String"},{"id": "id","description": "cust do usuario del caso","value": null,"type": "String"},{"id": "site_id","description": "site del caso","value": "","type": "String"},{"id": "date_created","description": "fecha creación del caso","value": null,"type": "Date"},{"id": "comment","description": "comentario del caso","value": null,"type": "String"},{"id": "last_updated","description": "fecha de actualización","value": null,"type": "Date"},{"id": "owner","description": "propietario del caso","value": null,"type": "String"},{"id": "is_test_case","description": "caso del teste","value": null,"type": "String"},{"id": "reg_version","description": "registro de versión","value": 1,"type": "Integer"},{"id": "priority","description": "Prioridade del caso","value": 1,"type": "Integer"},{"id": "due_date","description": "Fecha prevista","value": null,"type": "Date","param": 2}],"fields_detail": [{"id": "registration_date","description": "fecha de registro","value": null,"type": "Date"},{"id": "crosses_quantity","description": "cantidad de crosses","value": "","type": "Integer"},{"id": "goldlist","description": "Estado que no permite restricciones","value": "","type": "String"},{"id": "is_classified","description": "Clasifica","value": false,"type": "Boolean"}]}));
                    break;
                case "manual_review_cases_test_not_found":
                    response.writeHead(404, {
                        'Content-Type' : 'application/json; charset=utf-8'
                    });
                    response.write(JSON.stringify({"message":"Invalid ID","error":"not_found","status":404,"cause":[]}));
                    response.end();
                case "manual_review_cases_money":
                    response.writeHead(404, {
                        'Content-Type' : 'application/json; charset=utf-8'
                    });
                    response.write(JSON.stringify({"message":"Invalid ID","error":"not_found","status":404,"cause":[]}));
                    response.end();
                case "mercadopago_sites":
                    response.write(JSON.stringify(["MLA","MLM","MLB","MLC","MCO","MLV","MPE"]));
                    break;
                case "SCO_LOADER_PRIORITY":
                    var config = findConfig("SCO_LOADER_PRIORITY");
                    if (config != null) {
                        response.write(JSON.stringify(config.content));
                        //response.write(config.content);
                    }
                    break;
                default:
                    response.write(JSON.stringify({"id":"MLB_PMT_MTH","description":"Configuracion para unico punto de acreditacion","content":"visa","cache_time":"0S"}));
                    break;
            }

            response.end();
        },

        getModel : function(request, response){
                        response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('^/fraud/models/(\\w*)');
            uriRegExp.exec(pathname);

            var modelId = RegExp.$1;

            var idRegExp = new RegExp('(\\w+)_(\\w+)_(\\w+)_(\\w+)');
            idRegExp.exec(modelId);

            var flow_id = RegExp.$1;
            var site_id = RegExp.$2;
            var scenario_id = RegExp.$3;
            var industry_id = RegExp.$4;

            if (industry_id == "default") {
                response.write(JSON.stringify({
                              "id": modelId,
                              "flow_id" : flow_id,
                              "site_id" : site_id,
                              "scenario_id" : scenario_id,
                              "industry_id" : industry_id,
                              "users" : [ ],
                              "distribution": [{"red": 60}, {"mantika" : 40}]
                            }));
            } else {
                 response.write(JSON.stringify({
                              "id": modelId,
                              "flow_id" : flow_id,
                              "site_id" : site_id,
                              "scenario_id" : scenario_id,
                              "industry_id" : industry_id,
                              "users" : [ {"user_id" : 107887}, {"user_id" : 106518}],
                              "distribution": [{"red": 60}, {"mantika" : 40}]
                            }));
            }

            response.end();
        },

    searchModels : function(request, response){

        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        var url_parts = url.parse(request.url,true);

        var flow_id = url_parts.query.flow_id
        var site_id = url_parts.query.site_id
        var scenario_id = url_parts.query.scenario_id
        var user_id = url_parts.query.user_id

        console.log("flow_id: " + flow_id);
        console.log("site_id: " + site_id);
        console.log("scenario_id: " + scenario_id);
        console.log("user_id: " + user_id);


       if (user_id == null || user_id == 107499056) {

           if(site_id == "MLA" && scenario_id == "STD"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLA_STD_MI_DEFAULT","site_id":"mla","industry_id":"default","users":[],"distribution":[{"ml":100}]},{"id":"MLA_STD_MI_874567213","site_id":"mla","industry_id":"mantika_874567213","users":[{"user_id":874567213}],"distribution":[{"mantika":100}]},{"id":"MLA_STD_MI_87456721","site_id":"mla","industry_id":"varios_87456721","users":[{"user_id":87456721}],"distribution":[{"control_group":5},{"martin_pozzer":30},{"ml":65}]},{"id":"MLA_STD_MI_123321","site_id":"mla","industry_id":"test_123321","users":[{"user_id":123321}],"distribution":[{"para_test":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLA" && scenario_id == "OFF"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLA_OFF_MI_DEFAULT","site_id":"mla","industry_id":"default","users":[],"distribution":[{"ml":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLA" && scenario_id == "WLT"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLA_WLT_MI_DEFAULT","site_id":"mla","industry_id":"default","users":[],"distribution":[{"ml":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLA" && scenario_id == "REC"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLA_REC_MI_DEFAULT","site_id":"mla","industry_id":"default","users":[],"distribution":[{"ml":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLA" && scenario_id == "OPT"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLA_OPT_MI_DEFAULT","site_id":"mla","industry_id":"default","users":[],"distribution":[{"ml":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLB" && scenario_id == "STD"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLB_STD__MI_DEFAULT","site_id":"mlb","industry_id":"default","users":[],"distribution":[{"ml":100}]},{"id":"MLB_STD_MI_874567213","site_id":"mlb","industry_id":"mantika_874567213","users":[{"user_id":874567213}],"distribution":[{"mantika":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLB" && scenario_id == "OFF"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLB_OFF_MI_DEFAULT","site_id":"mlb","industry_id":"default","users":[],"distribution":[{"ml":100}]},{"id":"MLB_OFF_MI_87456722","site_id":"mlb","industry_id":"martin_pozzer_off_87456722","users":[{"user_id":87456722}],"distribution":[{"martin_pozzer_off":100}]},{"id":"MLB_OFF_MI_87456721","site_id":"mlb","industry_id":"tree_provider_87456721","users":[{"user_id":87456721}],"distribution":[{"tree_provider":100}]}, {"id":"MLB_OFF_MI_874567215","site_id":"mlb","industry_id":"mantika_874567215","users":[{"user_id":874567215}],"distribution":[{"mantika":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLB" && scenario_id == "WLT"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLB_WLT_MI_DEFAULT","site_id":"mlb","industry_id":"default","users":[],"distribution":[{"ml":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLB" && scenario_id == "REC"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLB_REC_MI_DEFAULT","site_id":"mlb","industry_id":"default","users":[],"distribution":[{"ml":100}]},{"id":"MLB_REC_MI_87456722","site_id":"mlb","industry_id":"ml_87456722","users":[{"user_id":87456722}],"distribution":[{"ml":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLM" && scenario_id == "STD"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLM_STD_MI_DEFAULT","site_id":"mlm","industry_id":"default","users":[],"distribution":[{"nn_mp_mlm_on":85},{"mantika":15}]},{"id":"MLM_STD_MI_139502985","site_id":"mlm","industry_id":"nn_mp_v2_874567213","users":[{"user_id":139502985}],"distribution":[{"nn_mp_v2":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLM" && scenario_id == "OFF"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLM_OFF_MI_DEFAULT","site_id":"mco","industry_id":"default","users":[],"distribution":[{"ml":100}]},{"id":"MLM_OFF_MI_139502985","site_id":"mco","industry_id":"nn_mp_mlm_off_874567213","users":[{"user_id":139502985}],"distribution":[{"nn_mp_mlm_off":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLM" && scenario_id == "WLT"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLM_WLT_MI_DEFAULT","site_id":"mlm","industry_id":"default","users":[],"distribution":[{"ml":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLM" && scenario_id == "REC"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLM_REC_MI_DEFAULT","site_id":"mlm","industry_id":"default","users":[],"distribution":[{"ml":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLB" && scenario_id == "COF"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLB_COF_MI_DEFAULT","site_id":"mlb","industry_id":"default","users":[],"distribution":[{"mantika":60},{"neural_network_mp":40}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLB" && scenario_id == "GOF"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLB_GOF_DEFAULT","site_id":"mlb","industry_id":"default","users":[],"distribution":[{"mantika":40},{"neural_network_mp_off":60}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLA" && scenario_id == "MIS"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLA_MIS_MI_DEFAULT","site_id":"mla","industry_id":"default","users":[],"distribution":[{"ml":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLA" && scenario_id == "TLV"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLA_TLV_MI_DEFAULT","site_id":"mla","industry_id":"default","users":[],"distribution":[{"ml":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLB" && scenario_id == "TLV"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLB_TLV_MI_DEFAULT","site_id":"mla","industry_id":"default","users":[],"distribution":[{"ml":100}]}]}));
               response.end();
               return;
           }


           if(site_id == "MLC" && scenario_id == "STD"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLC_STD_MI_DEFAULT","site_id":"mlc","industry_id":"default","users":[],"distribution":[{"ml":100}]},{"id":"MLC_STD_MI_874567213","site_id":"mlc","industry_id":"mantika_874567213","users":[{"user_id":874567213}],"distribution":[{"mantika":100}]},{"id":"MLC_STD_MI_87456721","site_id":"mlc","industry_id":"varios_87456721","users":[{"user_id":87456721}],"distribution":[{"control_group":5},{"martin_pozzer":30},{"ml":65}]},{"id":"MLC_STD_MI_123321","site_id":"mlc","industry_id":"test_123321","users":[{"user_id":123321}],"distribution":[{"para_test":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MCO" && scenario_id == "STD"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MCO_STD_MI_DEFAULT","site_id":"mco","industry_id":"default","users":[],"distribution":[{"ml":100}]},{"id":"MCO_STD_MI_139502985","site_id":"mlc","industry_id":"nn_mp_mco_on_874567213","users":[{"user_id":139502985}],"distribution":[{"nn_mp_mco_on":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLV" && scenario_id == "STD"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLV_STD_MI_DEFAULT","site_id":"mlv","industry_id":"default","users":[],"distribution":[{"ml":100}]},{"id":"MLV_STD_MI_139502985","site_id":"mlc","industry_id":"nn_mp_mco_on_874567213","users":[{"user_id":139502985}],"distribution":[{"nn_mp_mco_on":100}]}]}));
               response.end();
               return;
           }

           if(site_id == "MLB" && scenario_id == "OPT"){
               response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":1},"results":[{"id":"MLB_OPT_MI_DEFAULT","site_id":"mlb","industry_id":"default","users":[],"distribution":[{"ml":100}]}]}));
               response.end();
               return;
           }

           response.write(JSON.stringify({
                               "paging": {
                                   "offset": 0,
                                   "limit": 10,
                                   "total": 1
                               },
                               "results": [
                                   { "id": "model_" + flow_id + "_" + site_id + "_" + scenario_id + "_default",
                                     "site_id" : site_id,
                                     "scenario_id" : scenario_id,
                                     "industry_id" : "default",
                                     "users" : [ ],
                                     "distribution": [{"red": 60}, {"mantika" : 40}]
                                   }
                               ]
                      }));

           response.end();
           return;

        }

        response.write(JSON.stringify({"paging":{"offset":0,"limit":10,"total":0},"results":[]}));

        response.end();
    },

    getMonitoQueries : function(request, response){
                        response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

        response.write(JSON.stringify([{"id": "delay_scoring_mi", "query": "select datediff(day,trunc(max(sco_creation_date)), current_date) from  scoring_mi.context", "description": "Cantidad de días desactualizado en scoring_mi", "fields_values_to_alert": {"days": 1 }, "comparison_operator": {"days": ">"}, "data_base": "redshift", "email_list": "fraud.prevention@mercadolibre.com, ntorres@mercadolibre.com", "email_subject": "Monitoreo de variables: scoring_mi atrasado", "email_content": "Cantidad de días atrasado: <br> <p> ##RESULT## </p>", "status": "active", "frequency": 2, "last_execution": "2015-11-12T11:40:38.000-03:00", "execution_status": null, "autor": "ntorres", "version": 1, "config_id": null, "flow_type": null, "site_id": null }]));
        response.end();
    },

    putMonitoQueries : function(request, response){
        response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

        response.write(JSON.stringify({"id":"query_test_0","query":"select top 10 scoring_id, op_creation_date, op_id, site_id, scoring_flow from scoring_mi.context","description":"testeando creacion de queries","fields_values_to_alert":{"scoring_id":null,"op_creation_date":null,"op_id":null,"site_id":null,"scoring_flow":null},"comparison_operator":{"scoring_id":"<>","op_creation_date":"<>","op_id":"<>","site_id":"<>","scoring_flow":"<>"},"data_base":"redshift","email_list":"[fraud.prevention@mercadolibre.com]","email_subject":"Monitoreo de variables form_cc_context con pocos registros","email_content":"Aca va el contenido del mail","status":"active","frequency":60,"last_execution":"2015-11-12T11:40:38.000-0300","execution_status":null,"autor":"ntorres","version":1,"config_id":null,"flow_type":null,"site_id":null}));
        response.end();
    },

    sendMail: function(request, response){
        response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

        response.write(JSON.stringify());
        response.end();
    },

    putConfig : function(request, response) {
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/fraud/admin/config/(\\w*)');
            uriRegExp.exec(pathname);

            var confId = RegExp.$1;

            console.log ("configId:"+confId);

            var conf = findConfig(confId);

            if (conf == null) {
                jsonHandler.showNotFoundResponse({message:"config "+confId+" not found"}, response);
                return;
            }

            jsonHandler.getContent(request, function(config){

                var now = new Date().toISOString()
                config.last_updated = now;

                config.content = JSON.stringify(config.content)

                console.log("chaging["+confId+"] with" + JSON.stringify(config));

                resourceManager.modifyResource("config", confId, config, response);

                jsonHandler.showOKResponse({message:"ok"}, response);
            });


    }

};

function findConfig(configId) {
    var config =  resourceManager.searchResource("config", configId);
    console.log ("searching for:" + configId);
    console.log("findConfig -> found: " + JSON.stringify(config) );
    return config;

}

exports.ping = configController.ping;
exports.configGet = configController.configGet;
exports.searchModels = configController.searchModels;
exports.getModel = configController.getModel;
exports.configGetContent = configController.configGetContent;
exports.setConfig = configController.setConfig;


resourceManager.saveResource('config', {"id":"SCO_LOADER_PRIORITY","last_updated": new Date().toISOString(), "content":'[{"loader":"THMSessionQueryLoader","priority":730,"flows":[{"flow":"MI","priority":300,"sites":[{"site":"MLA","priority":200,"configs":[{"config":"STD","priority":100}]},{"site":"MLB","priority":530,"configs":[{"config":"STD","priority":430}]}]}]},{"loader":"CollectionLoader","priority":400, "flows":[{"flow":"MI","priority":300},{"flow":"MO","priority":350, "sites":[{"site":"MLA", "priority":333},{"site":"MLB", "priority":444}]}]},{"loader":"DeviceMLLoader","priority":268},{"loader":"FormCCDataLoaderByBin","priority":243},{"loader":"SenderOperationTicketLoader","priority":205},{"loader":"SenderRelatedOperationsLoader","priority":162},{"loader":"ReceiverAccountEmailsLoader","priority":156},{"loader":"ReceiverRelatedOperationsLoader","priority":138},{"loader":"SenderAccountEmailsLoader","priority":120},{"loader":"NewPreviousUserTcPaymentLoader","priority":115},{"loader":"FormCCDataLoaderByTc","priority":110},{"loader":"AccountUniquenessLoader","priority":109},{"loader":"OrdersLoader","priority":102},{"loader":"AccountUniquenessCrossLoader","priority":99},{"loader":"ShippingAddressLoader","priority":96},{"loader":"FormCCDataLoaderHasApprovedDocument","priority":84},{"loader":"IpAndCookieLogLoader","priority":82},{"loader":"FormCCDataLoaderByDoc","priority":73},{"loader":"FraudListTerroristLoader","priority":62},{"loader":"FormCCDataLoader","priority":61},{"loader":"VectorLoaderByBin","priority":58},{"loader":"CustomerPlusConnectedUsersLoader","priority":54},{"loader":"FormCCDataLoaderHasApprovedUser","priority":53},{"loader":"SmartIdParallelCrossesCustomersByCustomerLoader","priority":46},{"loader":"SenderODRLoader","priority":45},{"loader":"FraudListCustomerLoader","priority":42},{"loader":"CustomersLogLoader","priority":42},{"loader":"BureauLoader","priority":41},{"loader":"DeviceIdParallelCrossesCustomersByCustomerLoader","priority":35},{"loader":"SenderItemQuestionsLoader","priority":32},{"loader":"CrossesCustomersByCurrentDeviceV2Loader","priority":30},{"loader":"FraudListCreditCardLoader","priority":29},{"loader":"ContextLoader","priority":28},{"loader":"CheckRemedyVerifTCLoader","priority":27},{"loader":"ReceiverPlusCustomerConnectedDataLoader","priority":24},{"loader":"FraudListDocLoader","priority":22},{"loader":"BinCardLoader","priority":19},{"loader":"PreferenceItemsLoader","priority":16},{"loader":"KeystrokeLoader","priority":15},{"loader":"PreferenceLoader","priority":10},{"loader":"ItemLoader","priority":10},{"loader":"FraudListNormalizedAddress","priority":7},{"loader":"FormCCDataLoaderByPhone","priority":6},{"loader":"SenderRestrictionLoader","priority":5},{"loader":"BrowserPatternLoader","priority":500},{"loader":"DetailCrossesLoader","priority":2},{"loader":"RecurringDataLoader","priority":1},{"loader":"FraudListPhoneLoader","priority":1},{"loader":"OrderShippingLoader","priority":1}]'});

//resourceManager.saveResource('config', {"id":"SCO_LOADER_PRIORITY","last_updated": new Date().toISOString(), "content":'[[priority:730, loader:THMSessionQueryLoader], [priority:400, loader:CollectionLoader], [priority:268, loader:DeviceMLLoader], [priority:243, loader:FormCCDataLoaderByBin], [priority:205, loader:SenderOperationTicketLoader], [priority:162, loader:SenderRelatedOperationsLoader], [priority:156, loader:ReceiverAccountEmailsLoader], [priority:138, loader:ReceiverRelatedOperationsLoader], [priority:120, loader:SenderAccountEmailsLoader], [priority:115, loader:NewPreviousUserTcPaymentLoader], [priority:110, loader:FormCCDataLoaderByTc], [priority:109, loader:AccountUniquenessLoader], [priority:102, loader:OrdersLoader], [priority:99, loader:AccountUniquenessCrossLoader], [priority:96, loader:ShippingAddressLoader], [priority:84, loader:FormCCDataLoaderHasApprovedDocument], [priority:82, loader:IpAndCookieLogLoader], [priority:73, loader:FormCCDataLoaderByDoc], [priority:62, loader:FraudListTerroristLoader], [priority:61, loader:FormCCDataLoader], [priority:58, loader:VectorLoaderByBin], [priority:54, loader:CustomerPlusConnectedUsersLoader], [priority:53, loader:FormCCDataLoaderHasApprovedUser], [priority:46, loader:SmartIdParallelCrossesCustomersByCustomerLoader], [priority:45, loader:SenderODRLoader], [priority:42, loader:FraudListCustomerLoader], [priority:42, loader:CustomersLogLoader], [priority:41, loader:BureauLoader], [priority:35, loader:DeviceIdParallelCrossesCustomersByCustomerLoader], [priority:32, loader:SenderItemQuestionsLoader], [priority:30, loader:CrossesCustomersByCurrentDeviceV2Loader], [priority:29, loader:FraudListCreditCardLoader], [priority:28, loader:ContextLoader], [priority:27, loader:CheckRemedyVerifTCLoader], [priority:24, loader:ReceiverPlusCustomerConnectedDataLoader], [priority:22, loader:FraudListDocLoader], [priority:19, loader:BinCardLoader], [priority:16, loader:PreferenceItemsLoader], [priority:15, loader:KeystrokeLoader], [priority:10, loader:PreferenceLoader], [priority:10, loader:ItemLoader], [priority:7, loader:FraudListNormalizedAddress], [priority:6, loader:FormCCDataLoaderByPhone], [priority:5, loader:SenderRestrictionLoader], [priority:500, loader:BrowserPatternLoader], [priority:2, loader:DetailCrossesLoader], [priority:1, loader:RecurringDataLoader], [priority:1, loader:FraudListPhoneLoader], [priority:1, loader:OrderShippingLoader]]'});



// Mappings
urlMapping.add ([
         {
            pattern: '^/fraud/config/ping',
            action: {
                'GET': configController.ping
            }
         },
         {
            pattern: '^/fraud/admin/ping',
            action: {
                'GET': configController.ping
            }
         },{
            pattern: '^/fraud/admin/config/ping',
            action: {
                'GET': configController.ping
            }
        },{
            pattern: '^/fraud/admin/config/(\\w*)/content',
            action: {
                'GET': configController.configGetContent
            }
        },{
            pattern: '^/fraud/admin/config/(\\w*)',
            action: {
                'GET': configController.configGet,
                'PUT': configController.putConfig
            }
        },{
            pattern: '^/fraud/models/search?',
            action: {
                'GET': configController.searchModels
            }
        },{
            pattern: '^/fraud/models/(\\w+)',
            action: {
                'GET': configController.getModel
            }
        },{
            pattern: '^/fraud/config/monitor/queries/search?',
            action: {
                'GET': configController.getMonitoQueries
            }
        },{
            pattern: '^/fraud/config/monitor/queries/(\\w+)',
            action: {
                'PUT': configController.putMonitoQueries
            }
        },{
            pattern: '^/internal/email/(\\w+)',
            action: {
                'POST': configController.sendMail
            }
        }


    ////spnscoring/scoring
]);
