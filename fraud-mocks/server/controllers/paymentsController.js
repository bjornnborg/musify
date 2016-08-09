var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var dateFormatter = require('../services/dateFormatter');

//kzaporojets 06072012: mock para la api de payments
var paymentsController = {

        echo: function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

//{"detail":"GZ Payments API is UP."}
            response.write(JSON.stringify({"detail":"GZ Payments API is UP."}))
            response.end(); 
        },
        putPayment : function(request, response) {

            var paymentId = request.url.match(/payments\/(\d+)/)[1];

            if (paymentId==700000001){

                response.writeHead(400, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({}));
                response.end();
                return;
            }

            if (paymentId==700000002){

                response.writeHead(503, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({}));
                response.end();
                return;
            }

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({}));
            response.end();
        },

        getPaymentMock : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

	    var data = url.parse(request.url, true).query;
            var paymentId = request.url.match(/payments\/(\d+)/)[1];
		

	    if(paymentId == 123 )
	    {
                response.write(JSON.stringify({"id":64514020,"site_id":"MLB","date_created":"2011-11-14T17:08:24.000-04:00","date_approved":"2011-11-16T11:21:38.000-04:00","last_modified":"2011-11-16T14:38:24.000-04:00","collector":{"id":47123825},"payer_id":35789611,"order_id":"701425912","reason":"mportado","transaction_amount":249,"currency_id":"BRL","total_paid_amount":320.89,"shipping_cost":35, "status":"pending","status_detail":"pending_online_validation","payment_method_id":"master","finance_charge":36.89,"last_four_digits":"7228","installments":6,"buyer_fee":13.99,"marketplace":"MELI","operation_type":"regular_payment"})); 
	    } else if (paymentId == 48665683){
                response.write(JSON.stringify({"id":48665683,"site_id":"MLA","date_created":"2011-11-14T17:08:24.000-04:00","date_approved":"2011-11-16T11:21:38.000-04:00","last_modified":"2011-11-16T14:38:24.000-04:00","collector":{"id":47123825},"payer_id":35789611,"order_id":"701425912","reason":"mportado","transaction_amount":249,"currency_id":"BRL","total_paid_amount":320.89,"shipping_cost":35, "status":"pending","status_detail":"pending_online_validation","payment_method_id":"master","finance_charge":36.89,"last_four_digits":"7228","installments":6,"buyer_fee":13.99,"marketplace":"MELI","operation_type":"regular_payment"})); 
            } else if (paymentId == 00001){
                
		response.writeHead(404, {
			'Content-Type' : 'application/json; charset=utf-8'
		});

            response.write(JSON.stringify({"Message":"Payment not found!"}));
            }

            else if (paymentId == 78787878) {
                response.write(JSON.stringify({
                                                "id": 78787878,
                                                "site_id": "MLA",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 925705,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            }

            else if (paymentId == 44719569999) {
                response.write(JSON.stringify({
                                                "id": 44719569999,
                                                "site_id": "MLA",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 925705,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "post_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            }
             else if (paymentId == 6017389663) {
                response.write(JSON.stringify({
                                                "id": 6017389663,
                                                "site_id": "MLA",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 925705,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA488"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "post_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            }
            else if (paymentId == 447195678) {

                response.write(JSON.stringify({
                                                "id": 447195678,
                                                "site_id": "MLA",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616379,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "4C0144A5E7C2F08BF017B0BA60E6C0BCC37EC1C9"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 

            }

            else if (paymentId == 44719561096) {

                response.write(JSON.stringify({
                                                "id": 44719561096,
                                                "site_id": "MLA",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616379,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 

            }


            else if (paymentId == 601738727 || paymentId == 64514020){
                response.write(JSON.stringify({
                                                "id": 662863052,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616379,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            } 
	    
            else if (paymentId == 756782221){
                response.write(JSON.stringify({
                                                "id": 756782221,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674001,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }
	    
            else if (paymentId == 756892711){
                response.write(JSON.stringify({
                                                "id": 756892711,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674002,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }
	    
            else if (paymentId == 756782237){
                response.write(JSON.stringify({
                                                "id": 756782237,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674003,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }
	    
	    
	    

            else if (paymentId == 601738123){
                response.write(JSON.stringify({
                                                "id": 601738123,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }
            else if (paymentId == 6017389669){
                response.write(JSON.stringify({
                                                "id": 6017389669,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "ABCDEMBDQ3564SDASASDASDA"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }
            else if (paymentId == 694844449){
                response.write(JSON.stringify({
                                                "id": 662863052,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "payment_type": "credit_card",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }
            else if (paymentId == 694844466){
                response.write(JSON.stringify({
                                                "id": 662863052,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "payment_type": "credit_card",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }
            else if (paymentId == 777782899){
                response.write(JSON.stringify({
                                                "id": 777782899,
                                                "site_id": "MLA",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "999930289",
                                                "payment_type": "credit_card",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }
            else if (paymentId == 777782880){
                response.write(JSON.stringify({
                                                "id": 777782880,
                                                "site_id": "MLA",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278777
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "999930215",
                                                "payment_type": "credit_card",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }
            else if (paymentId == 777782999){
                response.write(JSON.stringify({
                                                "id": 777782999,
                                                "site_id": "MLA",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278777
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "999930215",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "payment_type": "credit_card",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "shippOff_1",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }
            else if (paymentId == 7777829997){
                response.write(JSON.stringify({
                                                "id": 7777829997,
                                                "site_id": "MLA",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278777
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "999930215",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "payment_type": "credit_card",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "shippOff_2",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }
            else if (paymentId == 447195614){
                response.write(JSON.stringify({
                                                "id": 447195614,
                                                "site_id": "MLA",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278777
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "999930215",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "payment_type": "credit_card",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "9D0E11DE2936441DF0E3EDBC970A756A1F2DA425"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "shippOff_1",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            } else if (paymentId == 132456789) {
                response.write(JSON.stringify({
                                                "id": 132456789,
                                                "site_id": "MLA",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "in_process",
                                                "payment_type": "credit_card",
                                                "status_detail": "pending_review_manual",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }else if (paymentId == 132456790) {
                response.write(JSON.stringify({
                    "id": 132456790,
                    "site_id": "MLB",
                    "date_created": "2013-09-13T13:24:59.000-04:00",
                    "date_approved": "2013-09-13T13:24:59.000-04:00",
                    "last_modified": "2013-09-13T13:42:58.000-04:00",
                    "sponsor_id": null,
                    "collector": {
                        "id": 52278681
                    },
                    "payer_id": 130616376,
                    "order_id": "788780509",
                    "external_reference": "788780509",
                    "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                    "transaction_amount": 159.9,
                    "currency_id": "BRL",
                    "total_paid_amount": 204.24,
                    "shipping_cost": 31,
                    "status": "in_process",
                    "payment_type": "credit_card",
                    "status_detail": "pending_review_manual",
                    "status_code": "00",
                    "payment_method_id": "visa",
                    "finance_charge": 13.34,
                    "card": {
                        "id": "58640286",
                        "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                    },
                    "issuer_id": 25,
                    "transaction_id": "251577016_7f737a733776777c797d",
                    "scoring_execution_id": 100425674855,
                    "statement_descriptor": "MERCADOPAGO",
                    "first_six_digits": "421848",
                    "last_four_digits": "1837",
                    "installments": 3,
                    "buyer_fee": 6.99,
                    "account_money_amount": 0,
                    "coupon_amount": 0,
                    "coupon_id": null,
                    "activation_uri": null,
                    "marketplace": "MELI",
                    "operation_type": "regular_payment",
                    "payment_method_reference_id": null,
                    "differential_pricing_id": null,
                    "risk_execution_id": 724501643
                })); 

            }
            else if (paymentId == 133456790) {
                response.write(JSON.stringify({
                                                "id": 133456790,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "payment_type": "credit_card",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "in_process",
                                                "status_detail": "pending_review_manual",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            } 
            
            else if (paymentId == 133456789) {
                response.write(JSON.stringify({
                                                "id": 133456789,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "payment_type": "credit_card",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "in_process",
                                                "status_detail": "pending_review_manual",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }
            else if (paymentId == 133456700) {
                response.write(JSON.stringify({
                                                "id": 133456700,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616370,
                                                "order_id": "788780509",
                                                "payment_type": "credit_card",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "in_process",
                                                "status_detail": "pending_review_manual",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }

              else if (paymentId == 134456789) {
                response.write(JSON.stringify({
                                                "id": 134456789,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "payment_type": "credit_card",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }  else if (paymentId == 135456789) {
                response.write(JSON.stringify({
                                                "id": 135456789,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payment_type": "credit_card",
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "rejected",
                                                "status_detail": "cc_rejected_high_risk",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }  else if (paymentId == 234456789) {
                response.write(JSON.stringify({
                                                "id": 234456789,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payment_type": "credit_card",
                                                "payer_id": 130616377,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "rejected",
                                                "status_detail": "cc_rejected_high_risk",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }  else if (paymentId == 235456789) {
                response.write(JSON.stringify({
                                                "id": 235456789,
                                                "site_id": "MLB",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payment_type": "credit_card",
                                                "payer_id": 130616377,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "rejected",
                                                "status_detail": "cc_rejected_high_risk",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            }  else if (paymentId == 135456000) {
                                    response.write(JSON.stringify({
                                                                    "id": 135456000,
                                                                    "site_id": "MLB",
                                                                    "date_created": "2014-04-10T12:07:24.000-04:00",
                                                                    "date_approved": "2014-04-10T12:07:24.000-04:00",
                                                                    "last_modified": "2014-04-10T15:30:10.000-04:00",
                                                                    "sponsor_id": null,
                                                                    "collector": {
                                                                        "id": 52278681
                                                                    },
                                                                    "payer_id": 130616376,
                                                                    "order_id": "830144765",
                                                                    "external_reference": "830144765",
                                                                    "merchant_order_id": null,
                                                                    "reason": "Egeo Man Des. Colônia 100ml O Boticario",
                                                                    "transaction_amount": 62.8,
                                                                    "currency_id": "BRL",
                                                                    "total_paid_amount": 77.23,
                                                                    "shipping_cost": 14.43,
                                                                    "overpaid_amount": 0,
                                                                    "status": "approved",
                                                                    "status_detail": "accredited",
                                                                    "status_code": null,
                                                                    "payment_method_id": "account_money",
                                                                    "payment_type": "account_money",
                                                                    "account_money_amount": 0,
                                                                    "coupon_amount": 0,
                                                                    "coupon_id": null,
                                                                    "activation_uri": null,
                                                                    "marketplace": "MELI",
                                                                    "marketplace_fee": 0,
                                                                    "operation_type": "regular_payment",
                                                                    "payment_method_reference_id": null,
                                                                    "differential_pricing_id": null,
                                                                    "risk_execution_id": null,
                                                                    "tags": []
                                                                }
                                         )); 
        
        } else if (paymentId == 123456) {
                var now = dateFormatter.DateFormatter.format(new Date(), 'Y-m-d');
                var nowTime = dateFormatter.DateFormatter.format(new Date(), 'H:i:s');
                var completeTime = now + 'T' + nowTime + '.000-04:00'
                response.write(JSON.stringify({"id":64514020,"payment_type":"credit_card","site_id":"MLB","date_created":completeTime,"date_approved":completeTime,"last_modified":completeTime,"collector":{"id":47123825},"payer_id":35789611,"order_id":"701425912","reason":"mportado","transaction_amount":249,"currency_id":"BRL","total_paid_amount":320.89,"shipping_cost":35, "status":"in_process","status_detail":"pending_review_manual","payment_method_id":"master","finance_charge":36.89,"last_four_digits":"7228","installments":6,"buyer_fee":13.99,"marketplace":"MELI","operation_type":"regular_payment"})); 
            
            
        } else if (paymentId == 149847050) {
            var now = dateFormatter.DateFormatter.format(new Date(), 'Y-m-d');
            var nowTime = dateFormatter.DateFormatter.format(new Date(), 'H:i:s');
            var completeTime = now + 'T' + nowTime + '.000-04:00'
            response.write(JSON.stringify({
                "id": 149847050,
                "site_id": "MLC",
                "date_created": "2014-08-13T22:24:47.000-04:00",
                "date_approved": "2014-08-13T22:24:47.000-04:00",
                "last_modified": "2014-08-13T22:32:06.000-04:00",
                "sponsor_id": null,
                "collector": {
                    "id": 57472822
                },
                "payer_id": 163969104,
                "order_id": "254125632",
                "external_reference": "254125632",
                "merchant_order_id": null,
                "reason": "Cuna Moises",
                "currency_id": "CLP",
                "transaction_amount": 70000,
                "total_paid_amount": 70000,
                "shipping_cost": 0,
                "overpaid_amount": null,
                "status": "in_process",
                "status_detail": "pending_review_manual",
                "status_code": null,
                "payment_method_id": "presto",
                "payment_type": "credit_card",
                "account_money_amount": 0,
                "coupon_amount": 0,
                "coupon_id": null,
                "activation_uri": null,
                "marketplace": "MELI",
                "marketplace_fee": 0,
                "operation_type": "regular_payment",
                "payment_method_reference_id": null,
                "differential_pricing_id": null,
                "risk_execution_id": null,
                "tags": [],
                "refunds": [],
                "amount_refunded": 0
            })); 
        
        
        } else if (paymentId == 134456711) {
                response.write(JSON.stringify({
                                                "id": 134456711,
                                                "site_id": "MLC",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payment_type": "credit_card",
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "pending",
                                                "status_detail": "pending",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            } else if (paymentId == 135456712) {
                response.write(JSON.stringify({
                                                "id": 135456712,
                                                "site_id": "MLC",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payment_type": "credit_card",
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "pending",
                                                "status_detail": "pending",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            } else if (paymentId == 134456713) {
                response.write(JSON.stringify({
                                                "id": 134456713,
                                                "site_id": "MCO",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payment_type": "credit_card",
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "pending",
                                                "status_detail": "pending",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            } else if (paymentId == 135456714) {
                response.write(JSON.stringify({
                                                "id": 135456714,
                                                "site_id": "MCO",
                                                "date_created": "2013-09-13T13:24:59.000-04:00",
                                                "date_approved": "2013-09-13T13:24:59.000-04:00",
                                                "last_modified": "2013-09-13T13:42:58.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 52278681
                                                },
                                                "payment_type": "credit_card",
                                                "payer_id": 130616376,
                                                "order_id": "788780509",
                                                "external_reference": "788780509",
                                                "reason": "Hd Notebook 500gb Sata Toshiba Samsung Seagate # Centro Rj #",
                                                "transaction_amount": 159.9,
                                                "currency_id": "BRL",
                                                "total_paid_amount": 204.24,
                                                "shipping_cost": 31,
                                                "status": "pending",
                                                "status_detail": "pending",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "finance_charge": 13.34,
                                                "card": {
                                                    "id": "58640286",
                                                    "number_id": "B370C8CEE58001A57661EB3EC6DD00B20C4E6235"
                                                },
                                                "issuer_id": 25,
                                                "transaction_id": "251577016_7f737a733776777c797d",
                                                "scoring_execution_id": 100425674855,
                                                "statement_descriptor": "MERCADOPAGO",
                                                "first_six_digits": "421848",
                                                "last_four_digits": "1837",
                                                "installments": 3,
                                                "buyer_fee": 6.99,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "MELI",
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 724501643
                                            })); 
            
            } else if (paymentId == 899057528) {
                response.write(JSON.stringify({
                                                "id": 899057528,
                                                "site_id": "MLB",
                                                "date_created": "2014-11-17T11:00:04.000-04:00",
                                                "date_approved": "2014-11-17T13:26:54.000-04:00",
                                                "last_modified": "2014-11-17T13:26:54.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 99388154,
                                                    "email": "money@paymentwall.com",
                                                    "phone": {
                                                        "number": "57079920",
                                                        "area_code": "41",
                                                        "extension": null
                                                    }
                                                },
                                                "payer_id": 60512612,
                                                "order_id": "w46853976",
                                                "external_reference": "w46853976",
                                                "merchant_order_id": 77824526,
                                                "reason": "Paymentwall Order w46853976",
                                                "currency_id": "BRL",
                                                "transaction_amount": 50,
                                                "total_paid_amount": 50,
                                                "shipping_cost": 0,
                                                "overpaid_amount": 0,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "payment_type": "credit_card",
                                                "finance_charge": 0,
                                                "card": {
                                                    "id": "142851283",
                                                    "number_id": "ZWZHIPOELQJPVFOKIAHTBDHCLUSQYGIKXJSFIVVQ"
                                                },
                                                "transaction_id": "467006814_78767f777d367a7c777e",
                                                "scoring_execution_id": 101421610465,
                                                "issuer_id": 25,
                                                "statement_descriptor": "MERCADOPAGO*",
                                                "first_six_digits": "498442",
                                                "last_four_digits": "4330",
                                                "installments": 1,
                                                "buyer_fee": 0,
                                                "authorization_code": "017661",
                                                "transaction_order_id": null,
                                                "capture": true,
                                                "installment_amount": null,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "NONE",
                                                "marketplace_fee": 0,
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 1815508025,
                                                "tags": [],
                                                "refunds": [],
                                                "amount_refunded": 0,
                                                "available_actions": []
                                            })); 
            
            } else if (paymentId == 899057529) {
                response.write(JSON.stringify({
                                                "id": 899057529,
                                                "site_id": "MLB",
                                                "date_created": "2014-11-17T11:00:04.000-04:00",
                                                "date_approved": "2014-11-17T13:26:54.000-04:00",
                                                "last_modified": "2014-11-17T13:26:54.000-04:00",
                                                "sponsor_id": null,
                                                "collector": {
                                                    "id": 99388154,
                                                    "email": "money@paymentwall.com",
                                                    "phone": {
                                                        "number": "57079920",
                                                        "area_code": "41",
                                                        "extension": null
                                                    }
                                                },
                                                "payer_id": 123344,
                                                "order_id": "w46853976",
                                                "external_reference": "w46853976",
                                                "merchant_order_id": 77824526,
                                                "reason": "Paymentwall Order w46853976",
                                                "currency_id": "BRL",
                                                "transaction_amount": 50,
                                                "total_paid_amount": 50,
                                                "shipping_cost": 0,
                                                "overpaid_amount": 0,
                                                "status": "approved",
                                                "status_detail": "accredited",
                                                "status_code": "00",
                                                "payment_method_id": "visa",
                                                "payment_type": "credit_card",
                                                "finance_charge": 0,
                                                "card": {
                                                    "id": "142851283",
                                                    "number_id": "4C0144A5E7C2F08BF017B0BA60E6C0BCC37EC0001"
                                                },
                                                "transaction_id": "467006814_78767f777d367a7c777e",
                                                "scoring_execution_id": 101421610465,
                                                "issuer_id": 25,
                                                "statement_descriptor": "MERCADOPAGO*",
                                                "first_six_digits": "498442",
                                                "last_four_digits": "4330",
                                                "installments": 1,
                                                "buyer_fee": 0,
                                                "authorization_code": "017661",
                                                "transaction_order_id": null,
                                                "capture": true,
                                                "installment_amount": null,
                                                "account_money_amount": 0,
                                                "coupon_amount": 0,
                                                "coupon_id": null,
                                                "activation_uri": null,
                                                "marketplace": "NONE",
                                                "marketplace_fee": 0,
                                                "operation_type": "regular_payment",
                                                "payment_method_reference_id": null,
                                                "differential_pricing_id": null,
                                                "risk_execution_id": 1815508025,
                                                "tags": [],
                                                "refunds": [],
                                                "amount_refunded": 0,
                                                "available_actions": []
                                            })); 
            
            } else if (paymentId == 1019591745 || paymentId == 1019591746 || paymentId == 1019591747 || paymentId == 1019591748) {
                response.write(JSON.stringify({
                                                  "id": 1019591745,
                                                  "site_id": "MCO",
                                                  "date_created": "2015-01-22T09:34:55.000-04:00",
                                                  "date_approved": "2015-01-22T09:34:55.000-04:00",
                                                  "last_modified": "2015-01-22T09:34:55.000-04:00",
                                                  "sponsor_id": null,
                                                  "collector": {
                                                    "id": 169885973,
                                                    "email": "walletmco2014@melipayments.com",
                                                    "phone": {
                                                      "number": "26644323324",
                                                      "area_code": null,
                                                      "extension": null
                                                    }
                                                  },
                                                  "payer_id": 140046216,
                                                  "order_id": "45953769",
                                                  "external_reference": "CBK_45953769",
                                                  "merchant_order_id": 101563722,
                                                  "reason": "Factura de MercadoLibre",
                                                  "currency_id": "COP",
                                                  "transaction_amount": 39725,
                                                  "total_paid_amount": 39725,
                                                  "shipping_cost": 0,
                                                  "overpaid_amount": 0,
                                                  "status": "approved",
                                                  "status_detail": "accredited",
                                                  "status_code": "00",
                                                  "payment_method_id": "visa",
                                                  "payment_type": "credit_card",
                                                  "finance_charge": 0,
                                                  "card": {
                                                    "id": "145903314",
                                                    "number_id": "QWMSIZTUOVOJUUBCVEEWVGSFQTRGOAHBLEFJMISA"
                                                  },
                                                  "transaction_id": "510222170_77753776776c33737277",
                                                  "scoring_execution_id": 101602051236,
                                                  "issuer_id": 205,
                                                  "statement_descriptor": "MERCADOPAGO",
                                                  "first_six_digits": "474638",
                                                  "last_four_digits": "2304",
                                                  "installments": 1,
                                                  "buyer_fee": 0,
                                                  "authorization_code": "345408",
                                                  "transaction_order_id": "333637028",
                                                  "capture": true,
                                                  "installment_amount": 39725,
                                                  "account_money_amount": 0,
                                                  "coupon_amount": 0,
                                                  "coupon_id": null,
                                                  "activation_uri": null,
                                                  "marketplace": "NONE",
                                                  "marketplace_fee": 0,
                                                  "operation_type": "regular_payment",
                                                  "payment_method_reference_id": null,
                                                  "differential_pricing_id": null,
                                                  "risk_execution_id": 2531277305,
                                                  "tags": [],
                                                  "refunds": [],
                                                  "amount_refunded": 0,
                                                  "available_actions": []
                                                })); 
            
            }else if (paymentId == 123457) {  //Mock for CasesFunctionalTests.test_newJson on remedies-manual_review
                var now = dateFormatter.DateFormatter.format(new Date(), 'Y-m-d');
                var nowTime = dateFormatter.DateFormatter.format(new Date(), 'H:i:s');
                var completeTime = now + 'T' + nowTime + '.000-04:00'
                response.write(JSON.stringify({"id":64514020,"payment_type":"credit_card","site_id":"MLB","date_created":completeTime,"date_approved":completeTime,"last_modified":completeTime,"collector":{"id":47123825},"payer_id":35789612,"order_id":"701425912","reason":"mportado","transaction_amount":249,"currency_id":"BRL","total_paid_amount":320.89,"shipping_cost":35, "status":"in_process","status_detail":"pending_review_manual","payment_method_id":"master","finance_charge":36.89,"last_four_digits":"7228","installments":6,"buyer_fee":13.99,"marketplace":"MELI","operation_type":"regular_payment"}));

            } 
            else if (paymentId == 789123456) {  //Mock for subscriber shippiongoff
                var now = dateFormatter.DateFormatter.format(new Date(), 'Y-m-d');
                var nowTime = dateFormatter.DateFormatter.format(new Date(), 'H:i:s');
                var completeTime = now + 'T' + nowTime + '.000-04:00'
                response.write(JSON.stringify({"id":64514020, "transaction_id": "test_cho_off","payment_type":"credit_card","site_id":"MLB","date_created":completeTime,"date_approved":completeTime,"last_modified":completeTime,"collector":{"id":47123825},"payer_id":35789612,"order_id":"701425912","reason":"mportado","transaction_amount":249,"currency_id":"BRL","total_paid_amount":320.89,"shipping_cost":35, "status":"in_process","status_detail":"pending_review_manual","payment_method_id":"master","finance_charge":36.89,"last_four_digits":"7228","installments":6,"buyer_fee":13.99,"marketplace":"MELI","operation_type":"regular_payment"}));

            }            
            else if (paymentId == 800000001) {
                var now = dateFormatter.DateFormatter.format(new Date(), 'Y-m-d');
                var nowTime = dateFormatter.DateFormatter.format(new Date(), 'H:i:s');
                var completeTime = now + 'T' + nowTime + '.000-04:00'
                response.write(JSON.stringify({"id":800000001,"payment_type":"credit_card","site_id":"MLB","date_created":completeTime,"date_approved":completeTime,"last_modified":completeTime,"collector":{"id":47123825},"payer_id":100000000,"order_id":"701425912","reason":"mportado","transaction_amount":249,"currency_id":"BRL","total_paid_amount":320.89,"shipping_cost":35, "status":"rejected","status_detail":"cc_rejected_high_risk","payment_method_id":"master","finance_charge":36.89,"last_four_digits":"7228","installments":6,"buyer_fee":13.99,"marketplace":"MELI","operation_type":"regular_payment"}));

            } else {

                //fecha actual 
                var now = dateFormatter.DateFormatter.format(new Date(), 'Y-m-d');
                var nowTime = dateFormatter.DateFormatter.format(new Date(), 'H:i:s');
                var completeTime = now + 'T' + nowTime + '.000-04:00'
                response.write(JSON.stringify({"id":64514020,"site_id":"MLB","date_created":completeTime,"date_approved":completeTime,"last_modified":completeTime,"collector":{"id":47123825},"payer_id":35789611,"order_id":"701425912","reason":"mportado","transaction_amount":249,"currency_id":"BRL","total_paid_amount":320.89,"shipping_cost":35, "status":"pending","status_detail":"pending_online_validation","payment_method_id":"master","finance_charge":36.89,"last_four_digits":"7228","installments":6,"buyer_fee":13.99,"marketplace":"MELI","operation_type":"regular_payment"})); 
            }

			response.end();		
	}

};

exports.getPaymentMock = paymentsController.getPaymentMock;

// Mappings
urlMapping.add ([
    {
        pattern: '^/payments/echo',
        action: {
            'GET':paymentsController.echo
        }
    },
    {
        pattern: '^/payments/\\d+$',
        action: {
            'GET':paymentsController.getPaymentMock,
            'PUT':paymentsController.putPayment
        }
    }
]);
