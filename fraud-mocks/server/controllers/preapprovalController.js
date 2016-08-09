var url = require('url');
var querystring = require('querystring');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var preapprovalController = {
        search : function(request, response) {

                response.writeHead(200, {
                        'Content-Type' : 'application/json; charset=utf-8'
                });

                
                var pathname = url.parse(request.url).pathname;
                var uriRegExp = new RegExp('/preapproval/(\\w+)');
                uriRegExp.exec(pathname);
                var preapprovalId = RegExp.$1;
                
                console.log("preapprovalId es: " + preapprovalId);
            
                if(preapprovalId == "c443d71026ec48f59f692e68022ee4ff4"){
                    response.write(JSON.stringify({"id":"e5261f9105dd4bdeb72afb838e11ec16","payer_id":54095079,"payer_email":"nico_kpo_15@hotmail.com","back_url":"http://debitoautomatico.sanlorenzovuelve.com.ar/tramiteFinalizado.php","collector_id":141462280,"application_id":88202888477908022,"status":"authorized","reason":"APORTE FIDEICOMISO CASLA","external_reference":"16628-S3PSm","date_created":"2013-09-15T07:36:21.563-04:00","last_modified":"2014-07-16T08:01:47.260-04:00","init_point":"https://www.mercadopago.com/mla/debits/new?preapproval_id=e5261f9105dd4bdeb72afb838e11ec16","sandbox_init_point":"https://sandbox.mercadopago.com/mla/debits/new?preapproval_id=e5261f9105dd4bdeb72afb838e11ec16","summarized":{"quotas":12,"charged_quantity":9,"pending_charge_quantity":3,"charged_amount":2160,"pending_charge_amount":720,"semaphore":"green","last_charged_date":"2014-07-16T08:01:47.053-04:00","last_charged_amount":240},"next_payment_date":"2014-08-15T07:36:49.000-04:00","card_id":"130910151","payment_method_id":"visa"}));
                    response.end();
                    return;
                }

                if(preapprovalId == "c443d71026ec48f59f692e68022ee4ff3"){
                    response.write(JSON.stringify({"id":"e5261f9105dd4bdeb72afb838e11ec16","payer_id":54095079,"payer_email":"nico_kpo_15@hotmail.com","back_url":"http://debitoautomatico.sanlorenzovuelve.com.ar/tramiteFinalizado.php","collector_id":141462280,"application_id":88202888477908022,"status":"authorized","reason":"APORTE FIDEICOMISO CASLA","external_reference":"16628-S3PSm","date_created":"2013-09-15T07:36:21.563-04:00","last_modified":"2014-07-16T08:01:47.260-04:00","init_point":"https://www.mercadopago.com/mla/debits/new?preapproval_id=e5261f9105dd4bdeb72afb838e11ec16","sandbox_init_point":"https://sandbox.mercadopago.com/mla/debits/new?preapproval_id=e5261f9105dd4bdeb72afb838e11ec16","auto_recurring":{"frequency":1,"frequency_type":"months","transaction_amount":240,"currency_id":"ARS"},"summarized":{"quotas":12,"charged_quantity":9,"pending_charge_quantity":3,"charged_amount":2160,"pending_charge_amount":720,"semaphore":"green","last_charged_date":"2014-07-16T08:01:47.053-04:00","last_charged_amount":240},"next_payment_date":"2014-08-15T07:36:49.000-04:00","card_id":"130910151","payment_method_id":"visa"}));
                    response.end();
                    return;
                }
                
                if(preapprovalId == "c443d71026ec48f59f692e68022ee4ff2"){
                    response.write(JSON.stringify({"id":"e5261f9105dd4bdeb72afb838e11ec16","payer_id":54095079,"payer_email":"nico_kpo_15@hotmail.com","back_url":"http://debitoautomatico.sanlorenzovuelve.com.ar/tramiteFinalizado.php","collector_id":141462280,"application_id":88202888477908022,"status":"authorized","reason":"APORTE FIDEICOMISO CASLA","external_reference":"16628-S3PSm","date_created":"2013-09-15T07:36:21.563-04:00","last_modified":"2014-07-16T08:01:47.260-04:00","init_point":"https://www.mercadopago.com/mla/debits/new?preapproval_id=e5261f9105dd4bdeb72afb838e11ec16","sandbox_init_point":"https://sandbox.mercadopago.com/mla/debits/new?preapproval_id=e5261f9105dd4bdeb72afb838e11ec16","auto_recurring":{"frequency":1,"frequency_type":"months","transaction_amount":240,"currency_id":"ARS","start_date":"2013-09-15T07:36:49.000-04:00","end_date":"2014-09-14T07:36:49.000-04:00"},"summarized":{"quotas":12,"charged_quantity":9,"pending_charge_quantity":3,"charged_amount":2160,"pending_charge_amount":720,"semaphore":"green","last_charged_date":"2014-07-16T08:01:47.053-04:00","last_charged_amount":240},"next_payment_date":"2014-08-15T07:36:49.000-04:00","card_id":"130910151","payment_method_id":"visa"}));
                    response.end();
                    return;
                }
                //completo
                response.write(JSON.stringify({"id":"e5261f9105dd4bdeb72afb838e11ec16","payer_id":54095079,"payer_email":"nico_kpo_15@hotmail.com","back_url":"http://debitoautomatico.sanlorenzovuelve.com.ar/tramiteFinalizado.php","collector_id":141462280,"application_id":8820288847790802,"status":"authorized","reason":"APORTE FIDEICOMISO CASLA","external_reference":"16628-S3PSm","date_created":"2013-09-15T07:36:21.563-04:00","last_modified":"2014-07-16T08:01:47.260-04:00","init_point":"https://www.mercadopago.com/mla/debits/new?preapproval_id=e5261f9105dd4bdeb72afb838e11ec16","sandbox_init_point":"https://sandbox.mercadopago.com/mla/debits/new?preapproval_id=e5261f9105dd4bdeb72afb838e11ec16","auto_recurring":{"frequency":1,"frequency_type":"months","transaction_amount":240,"currency_id":"ARS","start_date":"2013-09-15T07:36:49.000-04:00","end_date":"2014-09-14T07:36:49.000-04:00"},"summarized":{"quotas":12,"charged_quantity":9,"pending_charge_quantity":3,"charged_amount":2160,"pending_charge_amount":720,"semaphore":"green","last_charged_date":"2014-07-16T08:01:47.053-04:00","last_charged_amount":240},"next_payment_date":"2014-08-15T07:36:49.000-04:00","card_id":"130910151","payment_method_id":"visa"}));
                response.end();
                
        },
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"detail":"GZ Subscription API is UP."}));
            response.end();        
        }

}
;




exports.search = preapprovalController.search;
exports.ping = preapprovalController.ping;


// Mappings
urlMapping.add ([
{
    pattern: '^/preapproval/echo',
    action: {
            'GET':preapprovalController.ping
    }
},
        {
                pattern: '^/preapproval/(\\w+)',
                action: {
                        'GET':preapprovalController.search
                }
        }

        

]);


