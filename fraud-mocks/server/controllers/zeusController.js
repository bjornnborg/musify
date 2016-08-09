var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");


var zeusController = {
        
        echo: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
    }, 

    paymentsSearch : function(request, response){
        
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });
        
        var result = []; 
        
        result = [{"payment_id":715612696,"header":{"created_from":"7098342686239412","status":"approved","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","version":2,"id":715612696,"payer_id":"113193935","last_modified":"2014-01-02T19:26:54Z","external_reference":"810456414","client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","modified_from":"sincro"},"api_body":{"id":715612696,"site_id":"MLB","date_created":"2014-01-02T15:12:43.000-04:00","date_approved":"2014-01-02T15:12:43.000-04:00","last_modified":"2014-01-02T15:26:55.000-04:00","sponsor_id":null,"collector":{"id":93457972},"payer_id":113193935,"order_id":"810456414","external_reference":"810456414","reason":"50 Cent De Prata 1869 Governo Provisorio Espanha","transaction_amount":20,"currency_id":"BRL","total_paid_amount":20,"shipping_cost":0,"status":"approved","status_detail":"accredited","status_code":"0","payment_method_id":"master","finance_charge":0,"card":{"id":"128569922","number_id":"38F7CB2F19D47EACF6193FA00A1B6CF33EB9FFAD"},"issuer_id":24,"transaction_id":"300289316_7e357777767f7539677d","scoring_execution_id":100607720838,"statement_descriptor":"MERCADOPAGO","first_six_digits":"542820","last_four_digits":"6931","installments":1,"buyer_fee":0,"account_money_amount":0,"coupon_amount":0,"coupon_id":null,"activation_uri":null,"marketplace":"MELI","operation_type":"regular_payment","payment_method_reference_id":null,"differential_pricing_id":null,"risk_execution_id":979559668,"tags":[]},"timestamp":"2014-01-02T19:26:56Z"},{"payment_id":715612696,"header":{"created_from":"7098342686239412","status":"approved","site_id":"MLB","status_detail":"accredited","operation_type":"regular_payment","version":1,"id":715612696,"payer_id":"113193935","last_modified":"2014-01-02T19:12:43Z","external_reference":"810456414","client_id":"buflo_web_desktop_mlb","modified_from":"buflo_web_desktop_mlb"},"api_body":{"id":715612696,"site_id":"MLB","date_created":"2014-01-02T15:12:43.000-04:00","date_approved":"2014-01-02T15:12:43.000-04:00","last_modified":"2014-01-02T15:12:43.000-04:00","sponsor_id":null,"collector":{"id":93457972},"payer_id":113193935,"order_id":"810456414","external_reference":"810456414","reason":"50 Cent De Prata 1869 Governo Provisorio Espanha","transaction_amount":20,"currency_id":"BRL","total_paid_amount":20,"shipping_cost":0,"status":"approved","status_detail":"accredited","status_code":"0","payment_method_id":"master","finance_charge":0,"card":{"id":"128569922","number_id":"38F7CB2F19D47EACF6193FA00A1B6CF33EB9FFAD"},"issuer_id":24,"transaction_id":"300289316_7e357777767f7539677d","scoring_execution_id":100607720838,"statement_descriptor":"MERCADOPAGO","first_six_digits":"542820","last_four_digits":"6931","installments":1,"buyer_fee":0,"account_money_amount":0,"coupon_amount":0,"coupon_id":null,"activation_uri":null,"marketplace":"MELI","operation_type":"regular_payment","payment_method_reference_id":null,"differential_pricing_id":null,"risk_execution_id":979559668,"tags":[]},"timestamp":"2014-01-02T19:12:47Z"}];

          response.write(JSON.stringify(result));
          response.end();
        
        
   }

  
};

exports.echo = zeusController.echo;
exports.paymentsSearch = zeusController.paymentsSearch;

urlMapping.add ([
                 {
                     pattern: '^/paymentsSearch/ping',
                     action: {
                         'GET': zeusController.echo
                     }
                 },{
                     pattern: '^/paymentsSearch?',
                     action: {
                         'GET': zeusController.paymentsSearch
                     }
                 }
             ]);