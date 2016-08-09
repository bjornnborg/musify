var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

//var retryPaySearch = 0;

//var retryPayLegacy = 0;

//var retryPayRCha = 0;

var paymentSearchController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"message":"UsersFullService: OK!"}));
            response.end();
        },
        getLastPayment : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var data = url.parse(request.url, true).query;

            if (data["payer_id"] == 143972033){
                response.write(JSON.stringify({
                    "paging": {
                        "total": 2,
                        "limit": 30,
                        "offset": 0
                    },
                    "results":[{"payment":{"id":831838997,"site_id":"MLB","date_created":"2014-08-28T12:47:53.000-04:00","date_approved":"2014-08-28T12:48:40.000-04:00","last_modified":"2014-08-28T21:26:07.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215319323,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":143972023,"email":"hclembrancinhas@gmail.com","nickname":"HERCULANOPRADO","first_name":"HERCULANO SANTOS","last_name":"PRADO 28093069828","phone":{"area_code":null,"number":"22998342874","extension":null}},"payer_id":143972033,"merchant_order_id":null,"external_reference":"877021639","reason":"Frisador De Flor De Eva - Papoula Portuguesa G - 12cmx10cm","currency_id":"BRL","transaction_amount":23.9,"total_paid_amount":39.94,"shipping_cost":14.05,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":1.99,"installments":2,"buyer_fee":5.24,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"683932","authorization_date":"2014-08-28T19:38:59.000-04:00","transaction_id":"415590025_766676377773766b763b","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":831828376,"site_id":"MLB","date_created":"2014-08-28T12:13:47.000-04:00","date_approved":"2014-08-28T12:13:47.000-04:00","last_modified":"2014-08-28T19:31:08.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215177172,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":143972023,"email":"carlos_ilhabela@yahoo.com.br","nickname":"CARLOS_ILHA","first_name":"carlos","last_name":"wilson","phone":{"area_code":"12","number":"97145934","extension":null}},"payer_id":143972033,"merchant_order_id":null,"external_reference":"877010541","reason":"Frisador De Flor De Eva - Kit Rosas M / Forma Resina Resiste","currency_id":"BRL","transaction_amount":18,"total_paid_amount":28.63,"shipping_cost":10.63,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":0,"installments":1,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"634609","authorization_date":"2014-08-28T12:13:47.000-04:00","transaction_id":"415576368_7d3777776f346f677f76","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}}]
                }));
                response.end();
                return;
            }

            if (data["payer_id"] == 32435460){
                response.write(JSON.stringify({"paging":{"total":5,"limit":30,"offset":0},"results":[{"payment":{"id":1266724352,"site_id":"MLB","date_created":"2015-08-05T21:22:46.000-04:00","date_approved":null,"last_modified":"2015-08-06T12:51:25.000-04:00","created_from":"7098342686239412","last_modified_by":189109309,"last_modified_from":"7098342686239412 - 172.16.75.154, 172.16.25.29","client_id":"buflo_web_desktop_mlb","scoring_execution_id":102288780143,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":156547436,"email":null,"nickname":null,"first_name":null,"last_name":null,"phone":{"area_code":null,"number":null,"extension":null}},"payer_id":189109309,"merchant_order_id":null,"external_reference":"983007408","reason":"Ssd Hd Kingston V300 120gb 2.5 Sata Iii","currency_id":"BRL","transaction_amount":239.99,"total_paid_amount":269.81,"shipping_cost":16.39,"overpaid_amount":0,"account_money_amount":0,"status":"rejected","status_detail":"cc_rejected_high_risk","status_code":"00","payment_type":"credit_card","payment_method_id":"master","first_six_digits":"515590","last_four_digits":"3759","finance_charge":13.43,"installments":2,"installment_amount":null,"deferred_period":null,"buyer_fee":5.24,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":156084372,"number_id":"HIWKFNTJUEALSCNIIQUYDMEXFZXSSWASOLFIRCKF","issuer_id":"24"},"authorization_code":"224462","authorization_date":null,"transaction_id":"678486298_6b7f77797b627f757f67","transaction_order_id":null,"coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0,"capture":"true","available_actions":[]}},{"payment":{"id":1263255410,"site_id":"MLB","date_created":"2015-08-01T02:19:12.000-04:00","date_approved":"2015-08-03T19:54:59.000-04:00","last_modified":"2015-08-17T15:13:56.000-04:00","created_from":"7098342686239412","last_modified_by":157916856,"last_modified_from":"462703093538339","client_id":"payments-revision","scoring_execution_id":102269580145,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":157916856,"email":null,"nickname":null,"first_name":null,"last_name":null,"phone":{"area_code":null,"number":null,"extension":null}},"payer_id":189109309,"merchant_order_id":null,"external_reference":"980765529","reason":"Mouse Sem Fio Com Adaptador Wirelless","currency_id":"BRL","transaction_amount":18.99,"total_paid_amount":33.58,"shipping_cost":14.59,"overpaid_amount":0,"account_money_amount":0,"status":"charged_back","status_detail":"reimbursed","status_code":"0","payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409603","last_four_digits":"8798","finance_charge":0,"installments":1,"installment_amount":null,"deferred_period":null,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":155881777,"number_id":"NQMJIPTLJEBKXUXNFAXBKLWFCSNNFFUSWJOZJJJH","issuer_id":"25"},"authorization_code":"691014","authorization_date":"2015-08-03T19:54:59.000-04:00","transaction_id":"673120563_797f67763672737e7a6a","transaction_order_id":null,"coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0,"capture":"true","available_actions":[]}},{"payment":{"id":1264439282,"site_id":"MLB","date_created":"2015-08-03T14:20:53.000-04:00","date_approved":"2015-08-04T20:18:54.000-04:00","last_modified":"2015-08-05T05:06:00.000-04:00","created_from":"7098342686239412","last_modified_by":189109309,"last_modified_from":null,"client_id":"buflo_web_desktop_mlb","scoring_execution_id":102284620863,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":60921142,"email":"atendimento@connectshop.com.br","nickname":"CONNECTSHOP.ML","first_name":"KARINA BARROS DA","last_name":"SILVA 33102711880","phone":{"area_code":"(","number":"11)","extension":"2305-3369"}},"payer_id":189109309,"merchant_order_id":null,"external_reference":"981596263","reason":"Rádio Ht Dual Band(uhf+vhf) Baofeng Uv-5r 12x Sem Juros","currency_id":"BRL","transaction_amount":119.99,"total_paid_amount":143.5,"shipping_cost":23.51,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"master","first_six_digits":"515590","last_four_digits":"3759","finance_charge":0,"installments":1,"installment_amount":null,"deferred_period":null,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"number_id":"HIWKFNTJUEALSCNIIQUYDMEXFZXSSWASOLFIRCKF","issuer_id":"24"},"authorization_code":"185162","authorization_date":"2015-08-04T20:18:54.000-04:00","transaction_id":"677120538_397f7774757b7f7f6d6f","transaction_order_id":null,"coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0,"capture":"true","available_actions":[]}},{"payment":{"id":1264059772,"site_id":"MLB","date_created":"2015-08-02T23:31:46.000-04:00","date_approved":"2015-08-02T23:31:46.000-04:00","last_modified":"2015-08-17T15:13:32.000-04:00","created_from":"7098342686239412","last_modified_by":20749341,"last_modified_from":"462703093538339","client_id":"buflo_web_desktop_mlb","scoring_execution_id":102274941843,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":20749341,"email":null,"nickname":null,"first_name":null,"last_name":null,"phone":{"area_code":null,"number":null,"extension":null}},"payer_id":189109309,"merchant_order_id":null,"external_reference":"981364118","reason":"Monoculo Luneta Atlas Super Potente Alcance De 8 Km","currency_id":"BRL","transaction_amount":19.9,"total_paid_amount":34.37,"shipping_cost":14.47,"overpaid_amount":0,"account_money_amount":0,"status":"charged_back","status_detail":"reimbursed","status_code":"0","payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409603","last_four_digits":"8798","finance_charge":0,"installments":1,"installment_amount":null,"deferred_period":null,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":155881777,"number_id":"NQMJIPTLJEBKXUXNFAXBKLWFCSNNFFUSWJOZJJJH","issuer_id":"25"},"authorization_code":"614444","authorization_date":"2015-08-02T23:31:46.000-04:00","transaction_id":"674620657_7f797477757a7773673a","transaction_order_id":null,"coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0,"capture":"true","available_actions":[]}},{"payment":{"id":1262911484,"site_id":"MLB","date_created":"2015-08-01T02:12:30.000-04:00","date_approved":"2015-08-01T02:12:30.000-04:00","last_modified":"2015-08-17T15:13:47.000-04:00","created_from":"7098342686239412","last_modified_by":55594210,"last_modified_from":"462703093538339","client_id":"buflo_web_desktop_mlb","scoring_execution_id":102269701215,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":55594210,"email":null,"nickname":null,"first_name":null,"last_name":null,"phone":{"area_code":null,"number":null,"extension":null}},"payer_id":189109309,"merchant_order_id":null,"external_reference":"980763195","reason":"Teclado Numerico Usb Targus Akp10us","currency_id":"BRL","transaction_amount":34,"total_paid_amount":49.05,"shipping_cost":15.05,"overpaid_amount":0,"account_money_amount":0,"status":"charged_back","status_detail":"reimbursed","status_code":"0","payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409603","last_four_digits":"8798","finance_charge":0,"installments":1,"installment_amount":null,"deferred_period":null,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"number_id":"NQMJIPTLJEBKXUXNFAXBKLWFCSNNFFUSWJOZJJJH","issuer_id":"25"},"authorization_code":"622780","authorization_date":"2015-08-01T02:12:30.000-04:00","transaction_id":"673120301_6d7e777f6e75777b7577","transaction_order_id":null,"coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0,"capture":"true","available_actions":[]}}]}));
                response.end();
                return;
            }

            if (data["collector_id"] == 143972033){
                response.write(JSON.stringify({
                    "paging": {
                        "total": 2,
                        "limit": 30,
                        "offset": 0
                    },
                    "results": [{"payment":{"id":831838997,"site_id":"MLB","date_created":"2014-08-28T12:47:53.000-04:00","date_approved":"2014-08-28T12:48:40.000-04:00","last_modified":"2014-08-28T21:26:07.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215319323,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":143972033,"email":"hclembrancinhas@gmail.com","nickname":"HERCULANOPRADO","first_name":"HERCULANO SANTOS","last_name":"PRADO 28093069828","phone":{"area_code":null,"number":"22998342874","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"877021639","reason":"Frisador De Flor De Eva - Papoula Portuguesa G - 12cmx10cm","currency_id":"BRL","transaction_amount":23.9,"total_paid_amount":39.94,"shipping_cost":14.05,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":1.99,"installments":2,"buyer_fee":5.24,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"683932","authorization_date":"2014-08-28T19:38:59.000-04:00","transaction_id":"415590025_766676377773766b763b","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":831828376,"site_id":"MLB","date_created":"2014-08-28T12:13:47.000-04:00","date_approved":"2014-08-28T12:13:47.000-04:00","last_modified":"2014-08-28T19:31:08.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215177172,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":143972033,"email":"carlos_ilhabela@yahoo.com.br","nickname":"CARLOS_ILHA","first_name":"carlos","last_name":"wilson","phone":{"area_code":"12","number":"97145934","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"877010541","reason":"Frisador De Flor De Eva - Kit Rosas M / Forma Resina Resiste","currency_id":"BRL","transaction_amount":18,"total_paid_amount":28.63,"shipping_cost":10.63,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":0,"installments":1,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"634609","authorization_date":"2014-08-28T12:13:47.000-04:00","transaction_id":"415576368_7d3777776f346f677f76","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}}]
                }));
                response.end();
                return;
            }

            if (data["collector_id"] == 143972040){
                response.write(JSON.stringify({"paging":{"total":2,"limit":30,"offset":0},"results":[{"payment":{"id":831838997,"site_id":"MLB","date_created":"2014-08-28T12:47:53.000-04:00","date_approved":"2014-08-28T12:48:40.000-04:00","last_modified":"2014-08-28T21:26:07.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215319323,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":143972040,"email":"hclembrancinhas@gmail.com","nickname":"HERCULANOPRADO","first_name":"HERCULANO SANTOS","last_name":"PRADO 28093069828","phone":{"area_code":null,"number":"22998342874","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"877021639","reason":"Frisador De Flor De Eva - Papoula Portuguesa G - 12cmx10cm","currency_id":"BRL","transaction_amount":23.9,"total_paid_amount":39.94,"shipping_cost":14.05,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":1.99,"installments":2,"buyer_fee":5.24,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"683932","authorization_date":"2014-08-28T19:38:59.000-04:00","transaction_id":"415590025_766676377773766b763b","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":831828376,"site_id":"MLB","date_created":"2014-08-28T12:13:47.000-04:00","date_approved":"2014-08-28T12:13:47.000-04:00","last_modified":"2014-08-28T19:31:08.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215177172,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":143972040,"email":"carlos_ilhabela@yahoo.com.br","nickname":"CARLOS_ILHA","first_name":"carlos","last_name":"wilson","phone":{"area_code":"12","number":"97145934","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"877010541","reason":"Frisador De Flor De Eva - Kit Rosas M / Forma Resina Resiste","currency_id":"BRL","transaction_amount":18,"total_paid_amount":28.63,"shipping_cost":10.63,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":0,"installments":1,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"634609","authorization_date":"2014-08-28T12:13:47.000-04:00","transaction_id":"415576368_7d3777776f346f677f76","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}}]}));
                response.end();
                return;
            }

            if (data["collector_id"] == 143972041){
                response.write(JSON.stringify({"paging":{"total":2,"limit":30,"offset":0},"results":[{"payment":{"id":831838997,"site_id":"MLB","date_created":"2014-08-28T12:47:53.000-04:00","date_approved":"2014-08-28T12:48:40.000-04:00","last_modified":"2014-08-28T21:26:07.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215319323,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":143972041,"email":"hclembrancinhas@gmail.com","nickname":"HERCULANOPRADO","first_name":"HERCULANO SANTOS","last_name":"PRADO 28093069828","phone":{"area_code":null,"number":"22998342874","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"877021639","reason":"Frisador De Flor De Eva - Papoula Portuguesa G - 12cmx10cm","currency_id":"BRL","transaction_amount":23.9,"total_paid_amount":39.94,"shipping_cost":14.05,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":1.99,"installments":2,"buyer_fee":5.24,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"683932","authorization_date":"2014-08-28T19:38:59.000-04:00","transaction_id":"415590025_766676377773766b763b","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":831828376,"site_id":"MLB","date_created":"2014-08-28T12:13:47.000-04:00","date_approved":"2014-08-28T12:13:47.000-04:00","last_modified":"2014-08-28T19:31:08.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215177172,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":143972041,"email":"carlos_ilhabela@yahoo.com.br","nickname":"CARLOS_ILHA","first_name":"carlos","last_name":"wilson","phone":{"area_code":"12","number":"97145934","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"877010541","reason":"Frisador De Flor De Eva - Kit Rosas M / Forma Resina Resiste","currency_id":"BRL","transaction_amount":18,"total_paid_amount":28.63,"shipping_cost":10.63,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":0,"installments":1,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"634609","authorization_date":"2014-08-28T12:13:47.000-04:00","transaction_id":"415576368_7d3777776f346f677f76","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}}]}));
                response.end();
                return;
            }

            if (data["payer_id"] == 143972050){
                response.write(JSON.stringify({"paging":{"total":2,"limit":30,"offset":0},"results":[{"payment":{"id":831838997,"site_id":"MLB","date_created":"2014-08-28T12:47:53.000-04:00","date_approved":"2014-08-28T12:48:40.000-04:00","last_modified":"2014-08-28T21:26:07.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215319323,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":1439372041,"email":"hclembrancinhas@gmail.com","nickname":"HERCULANOPRADO","first_name":"HERCULANO SANTOS","last_name":"PRADO 28093069828","phone":{"area_code":null,"number":"22998342874","extension":null}},"payer_id":143972050,"merchant_order_id":null,"external_reference":"877021639","reason":"Frisador De Flor De Eva - Papoula Portuguesa G - 12cmx10cm","currency_id":"BRL","transaction_amount":23.9,"total_paid_amount":39.94,"shipping_cost":14.05,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":1.99,"installments":2,"buyer_fee":5.24,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"683932","authorization_date":"2014-08-28T19:38:59.000-04:00","transaction_id":"415590025_766676377773766b763b","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":831828376,"site_id":"MLB","date_created":"2014-08-28T12:13:47.000-04:00","date_approved":"2014-08-28T12:13:47.000-04:00","last_modified":"2014-08-28T19:31:08.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215177172,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":1439772041,"email":"carlos_ilhabela@yahoo.com.br","nickname":"CARLOS_ILHA","first_name":"carlos","last_name":"wilson","phone":{"area_code":"12","number":"97145934","extension":null}},"payer_id":143972050,"merchant_order_id":null,"external_reference":"877010541","reason":"Frisador De Flor De Eva - Kit Rosas M / Forma Resina Resiste","currency_id":"BRL","transaction_amount":18,"total_paid_amount":28.63,"shipping_cost":10.63,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":0,"installments":1,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"634609","authorization_date":"2014-08-28T12:13:47.000-04:00","transaction_id":"415576368_7d3777776f346f677f76","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}}]}));
                response.end();
                return;
            }

            if (data["payer_id"] == 143972051){
                response.write(JSON.stringify({"paging":{"total":2,"limit":30,"offset":0},"results":[{"payment":{"id":831838997,"site_id":"MLB","date_created":"2014-08-28T12:47:53.000-04:00","date_approved":"2014-08-28T12:48:40.000-04:00","last_modified":"2014-08-28T21:26:07.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215319323,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":1439372041,"email":"hclembrancinhas@gmail.com","nickname":"HERCULANOPRADO","first_name":"HERCULANO SANTOS","last_name":"PRADO 28093069828","phone":{"area_code":null,"number":"22998342874","extension":null}},"payer_id":143972051,"merchant_order_id":null,"external_reference":"877021639","reason":"Frisador De Flor De Eva - Papoula Portuguesa G - 12cmx10cm","currency_id":"BRL","transaction_amount":23.9,"total_paid_amount":39.94,"shipping_cost":14.05,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":1.99,"installments":2,"buyer_fee":5.24,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"683932","authorization_date":"2014-08-28T19:38:59.000-04:00","transaction_id":"415590025_766676377773766b763b","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":831828376,"site_id":"MLB","date_created":"2014-08-28T12:13:47.000-04:00","date_approved":"2014-08-28T12:13:47.000-04:00","last_modified":"2014-08-28T19:31:08.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215177172,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":1439772041,"email":"carlos_ilhabela@yahoo.com.br","nickname":"CARLOS_ILHA","first_name":"carlos","last_name":"wilson","phone":{"area_code":"12","number":"97145934","extension":null}},"payer_id":143972050,"merchant_order_id":null,"external_reference":"877010541","reason":"Frisador De Flor De Eva - Kit Rosas M / Forma Resina Resiste","currency_id":"BRL","transaction_amount":18,"total_paid_amount":28.63,"shipping_cost":10.63,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":0,"installments":1,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"634609","authorization_date":"2014-08-28T12:13:47.000-04:00","transaction_id":"415576368_7d3777776f346f677f76","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}}]}));
                response.end();
                return;
            }

            if (data["id"] == 1132046019){
                response.write(JSON.stringify({"paging": {"offset": 0, "limit": 10, "total": 1 }, "results": [{"payment": {"id": 1026382295, "site_id": "MLM", "date_created": "2015-02-02T22:37:15.000-04:00", "date_approved": "2015-02-03T19:25:52.000-04:00", "last_modified": "2015-02-03T22:23:54.000-04:00", "created_from": "3327670111192129", "last_modified_by": 38118634, "last_modified_from": "3327670111192129", "client_id": "com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)", "scoring_execution_id": 101650674055, "operation_type": "regular_payment", "sponsor_id": null, "collector": {"id": 78366189, "email": "ventas@guerrerobiker.com.mx", "nickname": "GUERREROBIKER", "first_name": "HERNANDO GABRIEL", "last_name": "ESCOBEDO", "phone": {"area_code": "0155", "number": "53612016", "extension": null } }, "payer_id": 38118634, "merchant_order_id": null, "external_reference": "923734736", "reason": "Chamarra De Dama Piel Con Protecciones Motociclista", "currency_id": "MXN", "transaction_amount": 3200, "total_paid_amount": 3400, "shipping_cost": 200, "overpaid_amount": 0, "account_money_amount": 0, "status": "in_process", "status_detail": "pending_review_manual", "status_code": "0", "payment_type": "credit_card", "payment_method_id": "visa", "first_six_digits": "477291", "last_four_digits": "2880", "finance_charge": 0, "installments": 1, "installment_amount": 3400, "deferred_period": null, "buyer_fee": 0, "statement_descriptor": "MERCADOPAGO", "card": {"id": 147630291, "number_id": "PRWIFPCHJQZUWMPWKVCGTLCKEVXZYQOCPMUJYHJQ", "issuer_id": "158"}, "authorization_code": null, "authorization_date": null, "transaction_id": "518375046_34717b77757b737a6c77", "transaction_order_id": "517540", "coupon_id": null, "coupon_amount": null, "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "activation_uri": null, "marketplace": "MELI", "tags": [], "refunds": [], "amount_refunded": 0, "capture": "true", "available_actions": [] } }]}));
                response.end();
                return;
            }

            if (data["operation_type"] == "pos_payment"){
                response.write(JSON.stringify({
                    "paging": {
                        "total": 1,
                        "limit": 30,
                        "offset": 0
                    },
                    "results": [ {"payment": {"id": 831838999, "site_id": "MLB", "date_created": dateNow, "date_approved": "2014-08-28T12:13:47.000-04:00", "last_modified": "2014-08-28T19:31:08.000-04:00", "created_from": "7098342686239412", "last_modified_by": 143972023, "last_modified_from": null, "client_id": "postNewWorld", "scoring_execution_id": 101215177172, "operation_type": "pos_payment", "sponsor_id": null, "collector": {"id": 123123, "email": "carlos_ilhabela@yahoo.com.br", "nickname": "CARLOS_ILHA", "first_name": "carlos", "last_name": "wilson", "phone": {"area_code": "12", "number": "97145934", "extension": null } }, "payer_id": 143972023, "merchant_order_id": null, "external_reference": "877010541", "reason": "Frisador De Flor De Eva - Kit Rosas M / Forma Resina Resiste", "currency_id": "BRL", "transaction_amount": 18, "total_paid_amount": 28.63, "shipping_cost": 10.63, "overpaid_amount": 0, "account_money_amount": 0, "status": "approved", "status_detail": "accredited", "status_code": null, "payment_type": "credit_card", "payment_method_id": "visa", "first_six_digits": "409602", "last_four_digits": "4405", "finance_charge": 0, "installments": 1, "buyer_fee": 0, "statement_descriptor": "MERCADOPAGO*MLIVRE", "card": {"id": 137095470, "number_id": "FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU", "issuer_id": "25"}, "authorization_code": "634609", "authorization_date": "2014-08-28T12:13:47.000-04:00", "transaction_id": "415576368_7d3777776f346f677f76", "coupon_id": null, "coupon_amount": 0, "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "activation_uri": null, "marketplace": "MELI", "tags": ["Chip"], "refunds": [], "amount_refunded": 0 } } ]
                }));
                response.end();
                return;
            }

            if (data["caller.id"] == 123123 || data["payer_id"] == 123123){
                response.write(JSON.stringify({
                    "paging": {
                        "total": 2,
                        "limit": 30,
                        "offset": 0
                    },
                    "results": [{"payment": {"id": 831838997, "site_id": "MLB", "date_created": dateNow, "date_approved": "2014-08-28T12:48:40.000-04:00", "last_modified": "2014-08-28T21:26:07.000-04:00", "created_from": "7098342686239412", "last_modified_by": 143972023, "last_modified_from": null, "client_id": "postNewWorld", "scoring_execution_id": 101215319323, "operation_type": "pos_payment", "sponsor_id": null, "collector": {"id": 111111, "email": "hclembrancinhas@gmail.com", "nickname": "HERCULANOPRADO", "first_name": "HERCULANO SANTOS", "last_name": "PRADO 28093069828", "phone": {"area_code": null, "number": "22998342874", "extension": null } }, "payer_id": 123123, "merchant_order_id": null, "external_reference": "877021639", "reason": "Frisador De Flor De Eva - Papoula Portuguesa G - 12cmx10cm", "currency_id": "BRL", "transaction_amount": 23.9, "total_paid_amount": 39.94, "shipping_cost": 14.05, "overpaid_amount": 0, "account_money_amount": 0, "status": "approved", "status_detail": "accredited", "status_code": null, "payment_type": "credit_card", "payment_method_id": "visa", "first_six_digits": "409602", "last_four_digits": "4405", "finance_charge": 1.99, "installments": 2, "buyer_fee": 5.24, "statement_descriptor": "MERCADOPAGO*MLIVRE", "card": {"id": 137095470, "number_id": "FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU", "issuer_id": "25"}, "authorization_code": "683932", "authorization_date": "2014-08-28T19:38:59.000-04:00", "transaction_id": "415590025_766676377773766b763b", "coupon_id": null, "coupon_amount": 0, "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "activation_uri": null, "marketplace": "MELI", "tags": ["Manual"], "refunds": [], "amount_refunded": 0 } }, {"payment": {"id": 831838998, "site_id": "MLB", "date_created": dateNow, "date_approved": "2014-08-28T12:13:47.000-04:00", "last_modified": "2014-08-28T19:31:08.000-04:00", "created_from": "7098342686239412", "last_modified_by": 143972023, "last_modified_from": null, "client_id": "postNewWorld", "scoring_execution_id": 101215177172, "operation_type": "regular_payment", "sponsor_id": null, "collector": {"id": 22222, "email": "carlos_ilhabela@yahoo.com.br", "nickname": "CARLOS_ILHA", "first_name": "carlos", "last_name": "wilson", "phone": {"area_code": "12", "number": "97145934", "extension": null } }, "payer_id": 123123, "merchant_order_id": null, "external_reference": "877010541", "reason": "Frisador De Flor De Eva - Kit Rosas M / Forma Resina Resiste", "currency_id": "BRL", "transaction_amount": 18, "total_paid_amount": 28.63, "shipping_cost": 10.63, "overpaid_amount": 0, "account_money_amount": 0, "status": "approved", "status_detail": "accredited", "status_code": null, "payment_type": "credit_card", "payment_method_id": "visa", "first_six_digits": "409602", "last_four_digits": "4405", "finance_charge": 0, "installments": 1, "buyer_fee": 0, "statement_descriptor": "MERCADOPAGO*MLIVRE", "card": {"id": 137095470, "number_id": "FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU", "issuer_id": "25"}, "authorization_code": "634609", "authorization_date": "2014-08-28T12:13:47.000-04:00", "transaction_id": "415576368_7d3777776f346f677f76", "coupon_id": null, "coupon_amount": 0, "atm_transfer_reference": {"company_id": null, "transaction_id": null }, "activation_uri": null, "marketplace": "MELI", "tags": [], "refunds": [], "amount_refunded": 0 } } ]
                }));
                response.end();
                return;
            }


            if (data["caller.id"] == 151457299){
                response.write(JSON.stringify(  {"paging":{"total":1,"limit":30,"offset":0},"results":[{"payment":{"id":831838997,"site_id":"MLB","date_created":dateNow,"date_approved":"2014-08-28T12:48:40.000-04:00","last_modified":"2014-08-28T21:26:07.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215319323,"operation_type":"pos_payment","sponsor_id":null,"collector":{"id":111111,"email":"hclembrancinhas@gmail.com","nickname":"HERCULANOPRADO","first_name":"HERCULANO SANTOS","last_name":"PRADO 28093069828","phone":{"area_code":null,"number":"22998342874","extension":null}},"payer_id":123123,"merchant_order_id":null,"external_reference":"877021639","reason":"Frisador De Flor De Eva - Papoula Portuguesa G - 12cmx10cm","currency_id":"BRL","transaction_amount":23.9,"total_paid_amount":39.94,"shipping_cost":14.05,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":1.99,"installments":2,"buyer_fee":5.24,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"683932","authorization_date":"2014-08-28T19:38:59.000-04:00","transaction_id":"415590025_766676377773766b763b","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":["Manual"],"refunds":[],"amount_refunded":0}}]}));
                response.end();
                return;
            }

            if (data["collector_id"] == 151457299){
                if (data["offset"] == 0) {
                    response.write(JSON.stringify({"paging":{"total":1,"limit":data["limit"],"offset":0},"results":[
                        {"payment":{"id":824919831,"site_id":"MLB","date_created":dateNow,"date_approved":"2014-08-15T11:44:03.000-04:00","last_modified":"2014-08-15T14:50:38.000-04:00","created_from":"2568868276694852","last_modified_by":92446440,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":101187111581,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":data["collector_id"],"email":"outletcomputacion@gmail.com","nickname":"OUTLETCOMPUTACION","first_name":"Adriana","last_name":"Rodriguez","phone":{"area_code":null,"number":"(11) 4545-7337","extension":null}},"payer_id":92446440,"merchant_order_id":null,"external_reference":"860872069","reason":"Samsung Galaxy S3 I9300 Quadcore 1.4ghz Led 8 Mp Libres Gtia","currency_id":"ARS","transaction_amount":3799.99,"total_paid_amount":3799.99,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cabal","first_six_digits":"589657","last_four_digits":"8204","finance_charge":0,"installments":3,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":138590298,"number_id":"ZLEYYNRBHWWFSNVHLGMWIEWPLCTJWLEAOOVVTIEK","issuer_id":"688"},"authorization_code":"071552","authorization_date":"2014-08-15T11:44:03.000-04:00","transaction_id":"408179521_6f776764777137776d77","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"capture":"true","available_actions":[]}}
                    ]}));
                } else {
                    response.write(JSON.stringify({"paging":{"total":1,"limit":data["limit"],"offset":data["offset"]},"results":[]}));
                }
                response.end();
                return;
            }

            if (data["collector_id"] == 99){
                response.write(JSON.stringify(  {"paging":{"total":1,"limit":30,"offset":0},"results":[
                    {"payment":{"id":824919831,"site_id":"MLA","date_created":dateNow,"date_approved":"2014-08-15T11:44:03.000-04:00","last_modified":"2014-08-15T14:50:38.000-04:00","created_from":"2568868276694852","last_modified_by":92446440,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":101187111581,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":data["collector_id"],"email":"outletcomputacion@gmail.com","nickname":"OUTLETCOMPUTACION","first_name":"Adriana","last_name":"Rodriguez","phone":{"area_code":null,"number":"(11) 4545-7337","extension":null}},"payer_id":92446440,"merchant_order_id":null,"external_reference":"860872069","reason":"Samsung Galaxy S3 I9300 Quadcore 1.4ghz Led 8 Mp Libres Gtia","currency_id":"ARS","transaction_amount":3799.99,"total_paid_amount":3799.99,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cabal","first_six_digits":"589657","last_four_digits":"8204","finance_charge":0,"installments":3,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":138590298,"number_id":"ZLEYYNRBHWWFSNVHLGMWIEWPLCTJWLEAOOVVTIEK","issuer_id":"688"},"authorization_code":"071552","authorization_date":"2014-08-15T11:44:03.000-04:00","transaction_id":"408179521_6f776764777137776d77","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"capture":"true","available_actions":[]}}
                ]}));
                response.end();
                return;
            }

            if (data["caller.id"] == 161471719|| data["payer_id"] == 161471719){
                response.write(JSON.stringify(  {"paging":{"total":0,"limit":30,"offset":0},"results":[]}));
                response.end();
                return;
            }

            //Pruebas para monto acumulado aml

            if (data["payer_id"] == 143972035 && data["status"] == "approved"){
                jsonHandler.showServiceUnavailableResponse({"msg":{"details":"error"}}, response);
                return;
            }

            if (data["payer_id"] == 143972034 && data["offset"] == 5){
                response.write(JSON.stringify({"paging":{"total":7,"limit":10,"offset":5},"results":[{"payment":{"id":824919831,"site_id":"MLA","date_created":"2014-08-15T11:44:03.000-04:00","date_approved":"2014-08-15T11:44:03.000-04:00","last_modified":"2014-08-15T14:50:38.000-04:00","created_from":"2568868276694852","last_modified_by":92446440,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":101187111581,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":111644313,"email":"outletcomputacion@gmail.com","nickname":"OUTLETCOMPUTACION","first_name":"Adriana","last_name":"Rodriguez","phone":{"area_code":null,"number":"(11) 4545-7337","extension":null}},"payer_id":92446440,"merchant_order_id":null,"external_reference":"860872069","reason":"Samsung Galaxy S3 I9300 Quadcore 1.4ghz Led 8 Mp Libres Gtia","currency_id":"ARS","transaction_amount":3799.99,"total_paid_amount":3799.99,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cabal","first_six_digits":"589657","last_four_digits":"8204","finance_charge":0,"installments":3,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":138590298,"number_id":"ZLEYYNRBHWWFSNVHLGMWIEWPLCTJWLEAOOVVTIEK","issuer_id":"688"},"authorization_code":"071552","authorization_date":"2014-08-15T11:44:03.000-04:00","transaction_id":"408179521_6f776764777137776d77","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"capture":"true","available_actions":[]}},{"payment":{"id":820061619,"site_id":"MLA","date_created":"2014-08-07T12:01:18.000-04:00","date_approved":"2014-08-07T12:01:18.000-04:00","last_modified":"2014-08-07T12:01:18.000-04:00","created_from":"963","last_modified_by":92446440,"last_modified_from":"963","client_id":"CHO-Lite","scoring_execution_id":null,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":99628543,"email":"walletmla@mercadolibre.com","nickname":"COBROS2013","first_name":"Pagos","last_name":"Meli","phone":{"area_code":"011","number":"53528000","extension":null}},"payer_id":92446440,"merchant_order_id":47677281,"external_reference":"299112840","reason":"Factura de MercadoLibre","currency_id":"ARS","transaction_amount":1053.22,"total_paid_amount":1053.22,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"account_money","payment_method_id":"account_money","first_six_digits":null,"last_four_digits":null,"finance_charge":null,"installments":null,"buyer_fee":null,"statement_descriptor":null,"coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"NONE","tags":[],"refunds":[],"amount_refunded":0,"available_actions":[]}}]}));
                response.end();
                return;
            }

            if (data["payer_id"] == 143972034 && data["offset"] == 5){
                response.write(JSON.stringify({"paging":{"total":7,"limit":10,"offset":5},"results":[{"payment":{"id":824919831,"site_id":"MLA","date_created":"2014-08-15T11:44:03.000-04:00","date_approved":"2014-08-15T11:44:03.000-04:00","last_modified":"2014-08-15T14:50:38.000-04:00","created_from":"2568868276694852","last_modified_by":92446440,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":101187111581,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":111644313,"email":"outletcomputacion@gmail.com","nickname":"OUTLETCOMPUTACION","first_name":"Adriana","last_name":"Rodriguez","phone":{"area_code":null,"number":"(11) 4545-7337","extension":null}},"payer_id":92446440,"merchant_order_id":null,"external_reference":"860872069","reason":"Samsung Galaxy S3 I9300 Quadcore 1.4ghz Led 8 Mp Libres Gtia","currency_id":"ARS","transaction_amount":3799.99,"total_paid_amount":3799.99,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cabal","first_six_digits":"589657","last_four_digits":"8204","finance_charge":0,"installments":3,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":138590298,"number_id":"ZLEYYNRBHWWFSNVHLGMWIEWPLCTJWLEAOOVVTIEK","issuer_id":"688"},"authorization_code":"071552","authorization_date":"2014-08-15T11:44:03.000-04:00","transaction_id":"408179521_6f776764777137776d77","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"capture":"true","available_actions":[]}},{"payment":{"id":820061619,"site_id":"MLA","date_created":"2014-08-07T12:01:18.000-04:00","date_approved":"2014-08-07T12:01:18.000-04:00","last_modified":"2014-08-07T12:01:18.000-04:00","created_from":"963","last_modified_by":92446440,"last_modified_from":"963","client_id":"CHO-Lite","scoring_execution_id":null,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":99628543,"email":"walletmla@mercadolibre.com","nickname":"COBROS2013","first_name":"Pagos","last_name":"Meli","phone":{"area_code":"011","number":"53528000","extension":null}},"payer_id":92446440,"merchant_order_id":47677281,"external_reference":"299112840","reason":"Factura de MercadoLibre","currency_id":"ARS","transaction_amount":1053.22,"total_paid_amount":1053.22,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"account_money","payment_method_id":"account_money","first_six_digits":null,"last_four_digits":null,"finance_charge":null,"installments":null,"buyer_fee":null,"statement_descriptor":null,"coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"NONE","tags":[],"refunds":[],"amount_refunded":0,"available_actions":[]}}]}));
                response.end();
                return;
            }

            if (data["collector_id"] == 143972034 && data["offset"] == 5){
                response.write(JSON.stringify({"paging":{"total":7,"limit":10,"offset":5},"results":[{"payment":{"id":824919831,"site_id":"MLA","date_created":"2014-08-15T11:44:03.000-04:00","date_approved":"2014-08-15T11:44:03.000-04:00","last_modified":"2014-08-15T14:50:38.000-04:00","created_from":"2568868276694852","last_modified_by":92446440,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":101187111581,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":111644313,"email":"outletcomputacion@gmail.com","nickname":"OUTLETCOMPUTACION","first_name":"Adriana","last_name":"Rodriguez","phone":{"area_code":null,"number":"(11) 4545-7337","extension":null}},"payer_id":92446440,"merchant_order_id":null,"external_reference":"860872069","reason":"Samsung Galaxy S3 I9300 Quadcore 1.4ghz Led 8 Mp Libres Gtia","currency_id":"ARS","transaction_amount":3799.99,"total_paid_amount":3799.99,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cabal","first_six_digits":"589657","last_four_digits":"8204","finance_charge":0,"installments":3,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":138590298,"number_id":"ZLEYYNRBHWWFSNVHLGMWIEWPLCTJWLEAOOVVTIEK","issuer_id":"688"},"authorization_code":"071552","authorization_date":"2014-08-15T11:44:03.000-04:00","transaction_id":"408179521_6f776764777137776d77","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"capture":"true","available_actions":[]}},{"payment":{"id":820061619,"site_id":"MLA","date_created":"2014-08-07T12:01:18.000-04:00","date_approved":"2014-08-07T12:01:18.000-04:00","last_modified":"2014-08-07T12:01:18.000-04:00","created_from":"963","last_modified_by":92446440,"last_modified_from":"963","client_id":"CHO-Lite","scoring_execution_id":null,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":99628543,"email":"walletmla@mercadolibre.com","nickname":"COBROS2013","first_name":"Pagos","last_name":"Meli","phone":{"area_code":"011","number":"53528000","extension":null}},"payer_id":92446440,"merchant_order_id":47677281,"external_reference":"299112840","reason":"Factura de MercadoLibre","currency_id":"ARS","transaction_amount":1053.22,"total_paid_amount":1053.22,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"account_money","payment_method_id":"account_money","first_six_digits":null,"last_four_digits":null,"finance_charge":null,"installments":null,"buyer_fee":null,"statement_descriptor":null,"coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"NONE","tags":[],"refunds":[],"amount_refunded":0,"available_actions":[]}}]}));
                response.end();
                return;
            }

            else if (data["payer_id"] == 143972034 && data["offset"] == null){
                response.write(JSON.stringify({"paging":{"total":7,"limit":5,"offset":0},"results":[{"payment":{"id":887684961,"site_id":"MLA","date_created":"2014-10-29T11:45:04.000-04:00","date_approved":"2014-10-29T11:45:04.000-04:00","last_modified":"2014-10-29T16:12:24.000-04:00","created_from":"2568868276694852","last_modified_by":92446440,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":101363924943,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":49661672,"email":"dateco1@hotmail.com","nickname":"DATECO","first_name":"dario","last_name":"dimperio","phone":{"area_code":"011","number":"50310090","extension":null}},"payer_id":92446440,"merchant_order_id":null,"external_reference":"894162758","reason":"Nuevo Teléfono Inalámbrico Siemens Gigaset A120 Duo Oferta!","currency_id":"ARS","transaction_amount":899,"total_paid_amount":899,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cabal","first_six_digits":"589657","last_four_digits":"8204","finance_charge":0,"installments":3,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"number_id":"ZLEYYNRBHWWFSNVHLGMWIEWPLCTJWLEAOOVVTIEK","issuer_id":"688"},"authorization_code":"079331","authorization_date":"2014-10-29T11:45:05.000-04:00","transaction_id":"454050068_3d747d7b77667d7b7f6d","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0,"capture":"true","available_actions":[]}},{"payment":{"id":881782065,"site_id":"MLA","date_created":"2014-10-23T15:50:18.000-04:00","date_approved":"2014-10-23T15:50:18.000-04:00","last_modified":"2014-10-23T18:50:41.000-04:00","created_from":"2568868276694852","last_modified_by":92446440,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":101350812286,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":40528465,"email":"ventasnacetech@gmail.com","nickname":"NACETECH","first_name":"Ignacio","last_name":"Pomiró","phone":{"area_code":"011","number":"52588784","extension":null}},"payer_id":92446440,"merchant_order_id":null,"external_reference":"892740277","reason":"Pc Monitor Lcd Led 19 Samsung O Lg Widescreen 3 Años Gtia","currency_id":"ARS","transaction_amount":1689.99,"total_paid_amount":1689.99,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cabal","first_six_digits":"589657","last_four_digits":"8204","finance_charge":0,"installments":3,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"number_id":"ZLEYYNRBHWWFSNVHLGMWIEWPLCTJWLEAOOVVTIEK","issuer_id":"688"},"authorization_code":"068459","authorization_date":"2014-10-23T15:50:18.000-04:00","transaction_id":"450849302_7f37777f75776767737e","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0,"capture":"true","available_actions":[]}},{"payment":{"id":856062538,"site_id":"MLA","date_created":"2014-10-08T09:18:22.000-04:00","date_approved":"2014-10-08T09:18:22.000-04:00","last_modified":"2014-10-08T09:18:22.000-04:00","created_from":"963","last_modified_by":92446440,"last_modified_from":"963","client_id":"CHO-Lite","scoring_execution_id":null,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":99628543,"email":"walletmla@mercadolibre.com","nickname":"COBROS2013","first_name":"Pagos","last_name":"Meli","phone":{"area_code":"011","number":"53528000","extension":null}},"payer_id":92446440,"merchant_order_id":64470063,"external_reference":"314649004","reason":"Factura de MercadoLibre","currency_id":"ARS","transaction_amount":694.52,"total_paid_amount":694.52,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"account_money","payment_method_id":"account_money","first_six_digits":null,"last_four_digits":null,"finance_charge":null,"installments":null,"buyer_fee":null,"statement_descriptor":null,"coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"NONE","tags":[],"refunds":[],"amount_refunded":0,"available_actions":[]}},{"payment":{"id":844683256,"site_id":"MLA","date_created":"2014-09-16T14:46:50.000-04:00","date_approved":"2014-09-16T14:46:50.000-04:00","last_modified":"2014-09-16T21:45:09.000-04:00","created_from":"5940","last_modified_by":92446440,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":null,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":159127122,"email":"preciosdivertidos@hotmail.com","nickname":"PRECIOSDIVERTIDOS","first_name":"Guido","last_name":"Saadia","phone":{"area_code":null,"number":"(11)5570-9140","extension":null}},"payer_id":92446440,"merchant_order_id":null,"external_reference":"882437375","reason":"Nicer Dicer Plus Nuevo Cortador Tritura Frutas Verduras Tv !","currency_id":"ARS","transaction_amount":244.32,"total_paid_amount":244.32,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"account_money","payment_method_id":"account_money","first_six_digits":null,"last_four_digits":null,"finance_charge":null,"installments":null,"buyer_fee":null,"statement_descriptor":null,"coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0,"available_actions":[]}},{"payment":{"id":840469431,"site_id":"MLA","date_created":"2014-09-09T08:51:35.000-04:00","date_approved":"2014-09-09T08:51:35.000-04:00","last_modified":"2014-09-09T08:51:35.000-04:00","created_from":"963","last_modified_by":92446440,"last_modified_from":"963","client_id":"CHO-Lite","scoring_execution_id":null,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":99628543,"email":"walletmla@mercadolibre.com","nickname":"COBROS2013","first_name":"Pagos","last_name":"Meli","phone":{"area_code":"011","number":"53528000","extension":null}},"payer_id":92446440,"merchant_order_id":56321416,"external_reference":"306801886","reason":"Factura de MercadoLibre","currency_id":"ARS","transaction_amount":1979.13,"total_paid_amount":1979.13,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"account_money","payment_method_id":"account_money","first_six_digits":null,"last_four_digits":null,"finance_charge":null,"installments":null,"buyer_fee":null,"statement_descriptor":null,"coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"NONE","tags":[],"refunds":[],"amount_refunded":0,"available_actions":[]}}]}));
                response.end();
                return;
            }

            else if (data["collector_id"] == 143972034 && data["offset"] == null){
                response.write(JSON.stringify({"paging":{"total":7,"limit":5,"offset":0},"results":[{"payment":{"id":887684961,"site_id":"MLA","date_created":"2014-10-29T11:45:04.000-04:00","date_approved":"2014-10-29T11:45:04.000-04:00","last_modified":"2014-10-29T16:12:24.000-04:00","created_from":"2568868276694852","last_modified_by":92446440,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":101363924943,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":49661672,"email":"dateco1@hotmail.com","nickname":"DATECO","first_name":"dario","last_name":"dimperio","phone":{"area_code":"011","number":"50310090","extension":null}},"payer_id":92446440,"merchant_order_id":null,"external_reference":"894162758","reason":"Nuevo Teléfono Inalámbrico Siemens Gigaset A120 Duo Oferta!","currency_id":"ARS","transaction_amount":899,"total_paid_amount":899,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cabal","first_six_digits":"589657","last_four_digits":"8204","finance_charge":0,"installments":3,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"number_id":"ZLEYYNRBHWWFSNVHLGMWIEWPLCTJWLEAOOVVTIEK","issuer_id":"688"},"authorization_code":"079331","authorization_date":"2014-10-29T11:45:05.000-04:00","transaction_id":"454050068_3d747d7b77667d7b7f6d","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0,"capture":"true","available_actions":[]}},{"payment":{"id":881782065,"site_id":"MLA","date_created":"2014-10-23T15:50:18.000-04:00","date_approved":"2014-10-23T15:50:18.000-04:00","last_modified":"2014-10-23T18:50:41.000-04:00","created_from":"2568868276694852","last_modified_by":92446440,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":101350812286,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":40528465,"email":"ventasnacetech@gmail.com","nickname":"NACETECH","first_name":"Ignacio","last_name":"Pomiró","phone":{"area_code":"011","number":"52588784","extension":null}},"payer_id":92446440,"merchant_order_id":null,"external_reference":"892740277","reason":"Pc Monitor Lcd Led 19 Samsung O Lg Widescreen 3 Años Gtia","currency_id":"ARS","transaction_amount":1689.99,"total_paid_amount":1689.99,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cabal","first_six_digits":"589657","last_four_digits":"8204","finance_charge":0,"installments":3,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"number_id":"ZLEYYNRBHWWFSNVHLGMWIEWPLCTJWLEAOOVVTIEK","issuer_id":"688"},"authorization_code":"068459","authorization_date":"2014-10-23T15:50:18.000-04:00","transaction_id":"450849302_7f37777f75776767737e","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0,"capture":"true","available_actions":[]}},{"payment":{"id":856062538,"site_id":"MLA","date_created":"2014-10-08T09:18:22.000-04:00","date_approved":"2014-10-08T09:18:22.000-04:00","last_modified":"2014-10-08T09:18:22.000-04:00","created_from":"963","last_modified_by":92446440,"last_modified_from":"963","client_id":"CHO-Lite","scoring_execution_id":null,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":99628543,"email":"walletmla@mercadolibre.com","nickname":"COBROS2013","first_name":"Pagos","last_name":"Meli","phone":{"area_code":"011","number":"53528000","extension":null}},"payer_id":92446440,"merchant_order_id":64470063,"external_reference":"314649004","reason":"Factura de MercadoLibre","currency_id":"ARS","transaction_amount":694.52,"total_paid_amount":694.52,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"account_money","payment_method_id":"account_money","first_six_digits":null,"last_four_digits":null,"finance_charge":null,"installments":null,"buyer_fee":null,"statement_descriptor":null,"coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"NONE","tags":[],"refunds":[],"amount_refunded":0,"available_actions":[]}},{"payment":{"id":844683256,"site_id":"MLA","date_created":"2014-09-16T14:46:50.000-04:00","date_approved":"2014-09-16T14:46:50.000-04:00","last_modified":"2014-09-16T21:45:09.000-04:00","created_from":"5940","last_modified_by":92446440,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":null,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":159127122,"email":"preciosdivertidos@hotmail.com","nickname":"PRECIOSDIVERTIDOS","first_name":"Guido","last_name":"Saadia","phone":{"area_code":null,"number":"(11)5570-9140","extension":null}},"payer_id":92446440,"merchant_order_id":null,"external_reference":"882437375","reason":"Nicer Dicer Plus Nuevo Cortador Tritura Frutas Verduras Tv !","currency_id":"ARS","transaction_amount":244.32,"total_paid_amount":244.32,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"account_money","payment_method_id":"account_money","first_six_digits":null,"last_four_digits":null,"finance_charge":null,"installments":null,"buyer_fee":null,"statement_descriptor":null,"coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0,"available_actions":[]}},{"payment":{"id":840469431,"site_id":"MLA","date_created":"2014-09-09T08:51:35.000-04:00","date_approved":"2014-09-09T08:51:35.000-04:00","last_modified":"2014-09-09T08:51:35.000-04:00","created_from":"963","last_modified_by":92446440,"last_modified_from":"963","client_id":"CHO-Lite","scoring_execution_id":null,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":99628543,"email":"walletmla@mercadolibre.com","nickname":"COBROS2013","first_name":"Pagos","last_name":"Meli","phone":{"area_code":"011","number":"53528000","extension":null}},"payer_id":92446440,"merchant_order_id":56321416,"external_reference":"306801886","reason":"Factura de MercadoLibre","currency_id":"ARS","transaction_amount":1979.13,"total_paid_amount":1979.13,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"account_money","payment_method_id":"account_money","first_six_digits":null,"last_four_digits":null,"finance_charge":null,"installments":null,"buyer_fee":null,"statement_descriptor":null,"coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"NONE","tags":[],"refunds":[],"amount_refunded":0,"available_actions":[]}}]}));
                response.end();
                return;
            }


            if (data["payer_id"] == 143972023 && data["status"] == "approved"){
                console.log("Pagos para el usuario 143972023");
                response.write(JSON.stringify({"paging":{"total":8,"limit":30,"offset":0},"results":[{"payment":{"id":831838997,"site_id":"MLB","date_created":"2014-08-28T12:47:53.000-04:00","date_approved":"2014-08-28T12:48:40.000-04:00","last_modified":"2014-08-28T21:26:07.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215319323,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":98899444,"email":"hclembrancinhas@gmail.com","nickname":"HERCULANOPRADO","first_name":"HERCULANO SANTOS","last_name":"PRADO 28093069828","phone":{"area_code":null,"number":"22998342874","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"877021639","reason":"Frisador De Flor De Eva - Papoula Portuguesa G - 12cmx10cm","currency_id":"BRL","transaction_amount":23.9,"total_paid_amount":39.94,"shipping_cost":14.05,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":1.99,"installments":2,"buyer_fee":5.24,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"683932","authorization_date":"2014-08-28T19:38:59.000-04:00","transaction_id":"415590025_766676377773766b763b","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":831828376,"site_id":"MLB","date_created":"2014-08-28T12:13:47.000-04:00","date_approved":"2014-08-28T12:13:47.000-04:00","last_modified":"2014-08-28T19:31:08.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"postNewWorld","scoring_execution_id":101215177172,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":54826565,"email":"carlos_ilhabela@yahoo.com.br","nickname":"CARLOS_ILHA","first_name":"carlos","last_name":"wilson","phone":{"area_code":"12","number":"97145934","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"877010541","reason":"Frisador De Flor De Eva - Kit Rosas M / Forma Resina Resiste","currency_id":"BRL","transaction_amount":18,"total_paid_amount":28.63,"shipping_cost":10.63,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":0,"installments":1,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"634609","authorization_date":"2014-08-28T12:13:47.000-04:00","transaction_id":"415576368_7d3777776f346f677f76","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":828933618,"site_id":"MLB","date_created":"2014-08-23T08:47:13.000-04:00","date_approved":"2014-08-23T08:47:13.000-04:00","last_modified":"2014-08-23T11:13:01.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":101203765222,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":42867910,"email":"crmmoldeseresinas@outlook.com","nickname":"FRISADORES","first_name":"CRISTIANO MONTEIRO","last_name":"monteiro","phone":{"area_code":null,"number":"11 974368092","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"868165398","reason":"Kit Frisador Eva - Rosa  G","currency_id":"BRL","transaction_amount":40,"total_paid_amount":54.4,"shipping_cost":10.85,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":3.55,"installments":3,"buyer_fee":6.99,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"671087","authorization_date":"2014-08-23T08:47:13.000-04:00","transaction_id":"412653737_637f797e727f76717e7a","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":828928403,"site_id":"MLB","date_created":"2014-08-23T08:09:56.000-04:00","date_approved":"2014-08-23T08:09:56.000-04:00","last_modified":"2014-08-23T10:34:03.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":101203672196,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":146288362,"email":"david@jodane.com","nickname":"FANTOCHES JODANE","first_name":"JDNA INDUSTRIA E COME","last_name":"RCIO DE FANTOCHES LTDA","phone":{"area_code":"19","number":"38617619","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"868162576","reason":"Fantoche Plus Menina Negra","currency_id":"BRL","transaction_amount":23.9,"total_paid_amount":34.72,"shipping_cost":9.09,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":1.73,"installments":2,"buyer_fee":5.24,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"695457","authorization_date":"2014-08-23T08:09:57.000-04:00","transaction_id":"412648168_757f6f7b717e6f777777","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":828748376,"site_id":"MLB","date_created":"2014-08-23T08:06:00.000-04:00","date_approved":"2014-08-23T08:06:00.000-04:00","last_modified":"2014-08-23T10:33:48.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":101203670816,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":146288362,"email":"david@jodane.com","nickname":"FANTOCHES JODANE","first_name":"JDNA INDUSTRIA E COME","last_name":"RCIO DE FANTOCHES LTDA","phone":{"area_code":"19","number":"38617619","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"868162147","reason":"Fantoche Plus Menina Branca","currency_id":"BRL","transaction_amount":23.9,"total_paid_amount":34.72,"shipping_cost":9.09,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":1.73,"installments":2,"buyer_fee":5.24,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"655829","authorization_date":"2014-08-23T08:06:00.000-04:00","transaction_id":"412647741_7d6e776d377d6b797b73","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":821226341,"site_id":"MLB","date_created":"2014-08-08T13:28:18.000-04:00","date_approved":"2014-08-16T17:49:10.000-04:00","last_modified":"2014-08-16T20:31:01.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":101189638142,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":14835627,"email":"marcelootavio@outlook.com","nickname":"MACELO_LK","first_name":"MARCELO OTAVIO MARTINS","last_name":"LOCADORA ME","phone":{"area_code":null,"number":"1129676446","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"859051085","reason":"Bíblia Revelada Di Nelson  Versículo Por Versículo","currency_id":"BRL","transaction_amount":76.99,"total_paid_amount":94.38,"shipping_cost":11.22,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":6.17,"installments":3,"buyer_fee":6.99,"statement_descriptor":"MERCADOPAGO*MLIVRE","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"690897","authorization_date":"2014-08-16T17:49:11.000-04:00","transaction_id":"408968980_777b6f3d73777e777c7f","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":784123439,"site_id":"MLB","date_created":"2014-05-22T14:24:12.000-04:00","date_approved":"2014-05-26T10:10:36.000-04:00","last_modified":"2014-05-26T12:23:42.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":"7098342686239412","client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":null,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":82831953,"email":"clubedagrife@gmail.com","nickname":"CLUBEDAGRIFE","first_name":"Fabricio","last_name":"Villagio","phone":{"area_code":null,"number":"011983617449","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"839603184","reason":"Armação Oculos De Grau Wayfarer Retrô Fashion - Modelo Geek","currency_id":"BRL","transaction_amount":16.89,"total_paid_amount":16.89,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"ticket","payment_method_id":"bolbradesco","first_six_digits":null,"last_four_digits":null,"finance_charge":null,"installments":null,"buyer_fee":null,"statement_descriptor":null,"coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":"https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=784123439&payment_method_reference_id=655775840&caller_id=143972023&comB=644A82FBECBEE12133ADC9A4208F00D4598BB2C5882B8A1165F9242C5A8B3CD3218B785E6B68742BB297E226A97C138EFBE020B485BA8CEDD12EA028480EB1411B6C7AB21EEA5C485BB4E65364A97A9310F46A1FF3C1A6C3FCD4E71E46597D31935C05A2D5764953B0583903CBF6D60982042629E4B46A0DBF654459A727D514","marketplace":"MELI","tags":[]}},{"payment":{"id":761460016,"site_id":"MLB","date_created":"2014-04-02T20:28:52.000-04:00","date_approved":"2014-04-02T20:28:52.000-04:00","last_modified":"2014-04-07T13:24:48.000-04:00","created_from":"7098342686239412","last_modified_by":143972023,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":100852515027,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":110796474,"email":"erica.c.oliver@hotmail.com","nickname":"ERICACRUZOLIVEIRA","first_name":"ERICA","last_name":"CRUZ OLIVEIRA","phone":{"area_code":null,"number":"(79)99233630","extension":null}},"payer_id":143972023,"merchant_order_id":null,"external_reference":"828508142","reason":"Lembrancinha Para Aniversario Ou Decoraçao,boneca Barbie Eva","currency_id":"BRL","transaction_amount":18,"total_paid_amount":36,"shipping_cost":18,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"409602","last_four_digits":"4405","finance_charge":0,"installments":1,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":137095470,"number_id":"FQSQNZWHEZZRXSFQKADFFCAAULURITFVSJALWTWU","issuer_id":"25"},"authorization_code":"685177","authorization_date":"2014-04-02T20:28:53.000-04:00","transaction_id":"338712394_677f777977777b777f7f","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}}]}));
                response.end();
                return;
            }

            else if (data["payer_id"] == 77023354 && data["status"] == "approved"){
                console.log("Pagos para el usuario 77023354");
                response.write(JSON.stringify({"paging":{"total":17,"limit":30,"offset":0},"results":[{"payment":{"id":833965074,"site_id":"MLA","date_created":"2014-09-01T10:04:28.000-04:00","date_approved":"2014-09-01T10:04:28.000-04:00","last_modified":"2014-09-01T10:04:28.000-04:00","created_from":"5940","last_modified_by":77023354,"last_modified_from":"5940","client_id":"vip-mla","scoring_execution_id":101222531590,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":156247745,"email":"blanqueriabigcool@gmail.com","nickname":"BIGANDCOOL","first_name":"Uriel","last_name":"Cohen","phone":{"area_code":null,"number":"1146114605","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"877970340","reason":"Cortinas De Ambiente Lisas 2 Paños Oferta!!","currency_id":"ARS","transaction_amount":219.98,"total_paid_amount":219.98,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":"0","payment_type":"credit_card","payment_method_id":"cencosud","first_six_digits":"603493","last_four_digits":"1002","finance_charge":0,"installments":15,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":120607956,"number_id":"9E63BE2C7F88ED16ED10A7848B0626256F083B21","issuer_id":"692"},"authorization_code":"692482","authorization_date":"2014-09-01T10:04:28.000-04:00","transaction_id":"417478309_767f3774777d3f767b73","coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":834246257,"site_id":"MLA","date_created":"2014-09-01T09:53:11.000-04:00","date_approved":"2014-09-01T09:53:11.000-04:00","last_modified":"2014-09-01T09:53:11.000-04:00","created_from":"5940","last_modified_by":77023354,"last_modified_from":"5940","client_id":"vip-mla","scoring_execution_id":101222473521,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":51370211,"email":"pablomiranda211089@gmail.com","nickname":"CAÑASYCERCOS","first_name":"pablo","last_name":"miranda","phone":{"area_code":null,"number":"47364446","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"877949272","reason":"Cerco De Cañas - Cañas Por Unidad - Pergolas -  Caña Quemada","currency_id":"ARS","transaction_amount":120,"total_paid_amount":120,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":"0","payment_type":"credit_card","payment_method_id":"cencosud","first_six_digits":"603493","last_four_digits":"1002","finance_charge":0,"installments":15,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":120607956,"number_id":"9E63BE2C7F88ED16ED10A7848B0626256F083B21","issuer_id":"692"},"authorization_code":"688676","authorization_date":"2014-09-01T09:53:11.000-04:00","transaction_id":"417425176_7b77773477336f797c75","coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":834245821,"site_id":"MLA","date_created":"2014-09-01T09:52:00.000-04:00","date_approved":"2014-09-01T09:52:00.000-04:00","last_modified":"2014-09-01T09:52:00.000-04:00","created_from":"5940","last_modified_by":77023354,"last_modified_from":"5940","client_id":"vip-mla","scoring_execution_id":101222512896,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":51370211,"email":"pablomiranda211089@gmail.com","nickname":"CAÑASYCERCOS","first_name":"pablo","last_name":"miranda","phone":{"area_code":null,"number":"47364446","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"877966628","reason":"Cerco De Cañas - Cañas Por Unidad - Pergolas -  Caña Quemada","currency_id":"ARS","transaction_amount":960,"total_paid_amount":960,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":"0","payment_type":"credit_card","payment_method_id":"cencosud","first_six_digits":"603493","last_four_digits":"1002","finance_charge":0,"installments":15,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":120607956,"number_id":"9E63BE2C7F88ED16ED10A7848B0626256F083B21","issuer_id":"692"},"authorization_code":"688294","authorization_date":"2014-09-01T09:52:00.000-04:00","transaction_id":"417472136_7775397b7269777a7677","coupon_id":null,"coupon_amount":null,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[],"refunds":[],"amount_refunded":0}},{"payment":{"id":822433971,"site_id":"MLA","date_created":"2014-08-11T18:21:04.000-04:00","date_approved":"2014-08-11T18:21:04.000-04:00","last_modified":"2014-08-12T10:12:10.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":101177668558,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":82433805,"email":"elmosc2@hotmail.com","nickname":"ELMOSC","first_name":"hugo","last_name":"sanchez","phone":{"area_code":"011","number":"1560527140","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"859792457","reason":"Buzon Para Pared","currency_id":"ARS","transaction_amount":310,"total_paid_amount":310,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cencosud","first_six_digits":"603493","last_four_digits":"1002","finance_charge":0,"installments":6,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":120607956,"number_id":"9E63BE2C7F88ED16ED10A7848B0626256F083B21","issuer_id":"692"},"authorization_code":"677266","authorization_date":"2014-08-11T18:21:05.000-04:00","transaction_id":"405802605_3a657c38667f75673d33","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":822547259,"site_id":"MLA","date_created":"2014-08-11T17:58:09.000-04:00","date_approved":"2014-08-11T17:58:09.000-04:00","last_modified":"2014-08-12T10:09:51.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":101177628832,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":99348039,"email":"gustavo110466@hotmail.com","nickname":"ALVAREZG9393","first_name":"gustavo","last_name":"alvarez","phone":{"area_code":null,"number":"15 5834 1629","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"859785648","reason":"Mensula Para Alero De 75 X 30 Cm. Travesaño Recto","currency_id":"ARS","transaction_amount":292,"total_paid_amount":292,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cencosud","first_six_digits":"603493","last_four_digits":"1002","finance_charge":0,"installments":6,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":120607956,"number_id":"9E63BE2C7F88ED16ED10A7848B0626256F083B21","issuer_id":"692"},"authorization_code":"666630","authorization_date":"2014-08-11T17:58:09.000-04:00","transaction_id":"405846825_34777f7f6f676f767876","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":822425842,"site_id":"MLA","date_created":"2014-08-11T17:53:29.000-04:00","date_approved":"2014-08-11T17:53:29.000-04:00","last_modified":"2014-08-12T10:09:30.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":101177618675,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":99348039,"email":"gustavo110466@hotmail.com","nickname":"ALVAREZG9393","first_name":"gustavo","last_name":"alvarez","phone":{"area_code":null,"number":"15 5834 1629","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"859781793","reason":"Mensula Para Alero De 75 X 30 Cm.con Rulos","currency_id":"ARS","transaction_amount":340,"total_paid_amount":340,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cencosud","first_six_digits":"603493","last_four_digits":"1002","finance_charge":0,"installments":6,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":120607956,"number_id":"9E63BE2C7F88ED16ED10A7848B0626256F083B21","issuer_id":"692"},"authorization_code":"664507","authorization_date":"2014-08-11T17:53:29.000-04:00","transaction_id":"405845369_7e7f666f796e37697d77","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":817694656,"site_id":"MLA","date_created":"2014-08-02T22:20:16.000-04:00","date_approved":"2014-08-02T22:20:16.000-04:00","last_modified":"2014-08-03T00:50:04.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":101158912496,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":76273825,"email":"ventas@elgrantiburon.com","nickname":"EL GRAN TIBURON","first_name":"Javier","last_name":"Djemdjemian","phone":{"area_code":"011","number":"46124970","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"857202384","reason":"Encendedor Zippo Vintage Chrom Made In Usa 28099","currency_id":"ARS","transaction_amount":324,"total_paid_amount":324,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"450843","last_four_digits":"8381","finance_charge":0,"installments":6,"buyer_fee":0,"statement_descriptor":"WWW.MERCADOPAGO.COM","card":{"id":141471600,"number_id":"SZGXERZYEVXXIWAKVBKJLIPLABTZWOAYNNEKIASL","issuer_id":"297"},"authorization_code":"008996","authorization_date":"2014-08-02T22:20:16.000-04:00","transaction_id":"400656941_66777377666e773f7777","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":815436704,"site_id":"MLA","date_created":"2014-07-29T14:46:51.000-04:00","date_approved":"2014-07-29T14:46:51.000-04:00","last_modified":"2014-07-29T17:16:41.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":101148714550,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":18609977,"email":"pinturas_line@hotmail.com","nickname":"PINTURASONLINE","first_name":"Mariano Micelli","last_name":"Micelli","phone":{"area_code":"011","number":"46128600","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"856010184","reason":"Enduido Plastico Alba X 10 Lts.","currency_id":"ARS","transaction_amount":177,"total_paid_amount":177,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cencosud","first_six_digits":"603493","last_four_digits":"1002","finance_charge":0,"installments":6,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":120607956,"number_id":"9E63BE2C7F88ED16ED10A7848B0626256F083B21","issuer_id":"692"},"authorization_code":"639884","authorization_date":"2014-07-29T14:46:51.000-04:00","transaction_id":"398009585_7f37737b727f7d737333","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":815434572,"site_id":"MLA","date_created":"2014-07-29T14:39:17.000-04:00","date_approved":"2014-07-29T14:39:17.000-04:00","last_modified":"2014-07-29T17:16:08.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":101148607604,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":146643080,"email":"distribuidora_alvear@yahoo.com.ar","nickname":"DISTRIBUIDORAALVEAR","first_name":"distribuidora","last_name":"alvear","phone":{"area_code":"11","number":"15-58702707","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"855981359","reason":"Pileta Acero Inox Ariel Simple De Apoyar O Pegar","currency_id":"ARS","transaction_amount":202,"total_paid_amount":202,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cencosud","first_six_digits":"603493","last_four_digits":"1002","finance_charge":0,"installments":6,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":120607956,"number_id":"9E63BE2C7F88ED16ED10A7848B0626256F083B21","issuer_id":"692"},"authorization_code":"637822","authorization_date":"2014-07-29T14:39:17.000-04:00","transaction_id":"398036651_7f77637a376e75766f7f","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":815434231,"site_id":"MLA","date_created":"2014-07-29T14:38:13.000-04:00","date_approved":"2014-07-29T14:38:13.000-04:00","last_modified":"2014-07-29T17:16:03.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":101148652413,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":139802766,"email":"electro_mol@hotmail.com","nickname":"ELECTROMOL","first_name":"JAVIER","last_name":"NOLASCO","phone":{"area_code":null,"number":"1140545992","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"856007478","reason":"Cable 2.5mm Rollo Normalizado 100 Mts Electricidad Unipolar","currency_id":"ARS","transaction_amount":339.96,"total_paid_amount":339.96,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cencosud","first_six_digits":"603493","last_four_digits":"1002","finance_charge":0,"installments":6,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":120607956,"number_id":"9E63BE2C7F88ED16ED10A7848B0626256F083B21","issuer_id":"692"},"authorization_code":"637537","authorization_date":"2014-07-29T14:38:13.000-04:00","transaction_id":"398036242_677376667937656a7e79","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":815433864,"site_id":"MLA","date_created":"2014-07-29T14:36:55.000-04:00","date_approved":"2014-07-29T14:36:55.000-04:00","last_modified":"2014-07-29T17:16:01.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":101148605433,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":94053778,"email":"info@rivafer.com.ar","nickname":"RIVAFER","first_name":"Elina Alcira","last_name":"Feinstein","phone":{"area_code":"011","number":"48651497","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"856007154","reason":"Calefon Electrico Ducha Enlozado 20lts Super Oferta!!!","currency_id":"ARS","transaction_amount":199.99,"total_paid_amount":199.99,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cencosud","first_six_digits":"603493","last_four_digits":"1002","finance_charge":0,"installments":6,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":120607956,"number_id":"9E63BE2C7F88ED16ED10A7848B0626256F083B21","issuer_id":"692"},"authorization_code":"637196","authorization_date":"2014-07-29T14:36:55.000-04:00","transaction_id":"398005400_7d6f757f39797f7f677e","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":781125399,"site_id":"MLA","date_created":"2014-05-16T20:38:29.000-04:00","date_approved":"2014-05-16T20:38:29.000-04:00","last_modified":"2014-05-17T00:01:39.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":100970662896,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":131020544,"email":"luckmar2000@yahoo.com.ar","nickname":"LUCKMAR2000","first_name":"antonio","last_name":"marincovic","phone":{"area_code":" ","number":" ","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"838173309","reason":"Velador Iluminaciòn Hogar Habitacion Hotel Hostel Oferta!","currency_id":"ARS","transaction_amount":78,"total_paid_amount":78,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cencosud","first_six_digits":"603493","last_four_digits":"1002","finance_charge":0,"installments":12,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":120607956,"number_id":"9E63BE2C7F88ED16ED10A7848B0626256F083B21","issuer_id":"692"},"authorization_code":"657346","authorization_date":"2014-05-16T20:38:29.000-04:00","transaction_id":"358775297_6373777c67757e773b73","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":781125321,"site_id":"MLA","date_created":"2014-05-16T20:37:50.000-04:00","date_approved":"2014-05-16T20:37:50.000-04:00","last_modified":"2014-05-17T00:01:37.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":100970776532,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":131020544,"email":"luckmar2000@yahoo.com.ar","nickname":"LUCKMAR2000","first_name":"antonio","last_name":"marincovic","phone":{"area_code":null,"number":"1158536145","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"836539430","reason":"Velador Iluminaciòn Hogar Habitacion Hotel Hostel Oferta!","currency_id":"ARS","transaction_amount":78,"total_paid_amount":78,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cencosud","first_six_digits":"603493","last_four_digits":"1002","finance_charge":0,"installments":12,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":120607956,"number_id":"9E63BE2C7F88ED16ED10A7848B0626256F083B21","issuer_id":"692"},"authorization_code":"657231","authorization_date":"2014-05-16T20:37:50.000-04:00","transaction_id":"358861496_3533767f673f7977357b","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":765333258,"site_id":"MLA","date_created":"2014-04-11T12:57:37.000-04:00","date_approved":"2014-04-11T12:57:37.000-04:00","last_modified":"2014-04-11T17:02:51.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":100876623879,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":65933082,"email":"ventas@viveroelbambu.com.ar","nickname":"VELBAMBU","first_name":"christian fernando","last_name":"haro","phone":{"area_code":"011","number":"15 3394-4476","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"830383840","reason":"Bolsa De Tierra C/abono Orgánico De 25dm3 Oferta Primavera","currency_id":"ARS","transaction_amount":238.68,"total_paid_amount":389.04,"shipping_cost":95,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"450815","last_four_digits":"8657","finance_charge":55.36,"installments":3,"buyer_fee":16.59,"statement_descriptor":"WWW.MERCADOPAGO.COM","card":{"id":137280445,"number_id":"ZHUJNFUFKLRXQQWOUBHIJOTCDCJOBVMIKJUMGDOO","issuer_id":"1"},"authorization_code":"002809","authorization_date":"2014-04-11T12:57:37.000-04:00","transaction_id":"342670761_6f757d3f777777657777","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":764190074,"site_id":"MLA","date_created":"2014-04-09T07:04:15.000-04:00","date_approved":"2014-04-09T07:04:15.000-04:00","last_modified":"2014-04-09T10:43:23.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":100869978570,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":106741272,"email":"info@nexcam.com.ar","nickname":"NEXCAM2013","first_name":"Gustavo","last_name":"Cillis","phone":{"area_code":null,"number":"46312420","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"829264384","reason":"Camaras De Seguridad Domo  Jaula Protector Gabinete, Cctv","currency_id":"ARS","transaction_amount":102,"total_paid_amount":102,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"450815","last_four_digits":"8657","finance_charge":0,"installments":1,"buyer_fee":0,"statement_descriptor":"WWW.MERCADOPAGO.COM","card":{"id":137280445,"number_id":"ZHUJNFUFKLRXQQWOUBHIJOTCDCJOBVMIKJUMGDOO","issuer_id":"1"},"authorization_code":"003322","authorization_date":"2014-04-09T07:04:15.000-04:00","transaction_id":"341492180_37347f7c66767779737b","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":761471582,"site_id":"MLA","date_created":"2014-04-02T21:14:31.000-04:00","date_approved":"2014-04-02T21:14:31.000-04:00","last_modified":"2014-04-03T00:34:50.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay02)","scoring_execution_id":100852629270,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":49804053,"email":"misalerces@gmail.com","nickname":"MISALERCES","first_name":"SEBASTIAN RICARDO","last_name":"BARTIROMO","phone":{"area_code":null,"number":"4641 8704","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"828518619","reason":"Fabrica De Cajones Canastos Y Cestos De Mimbre","currency_id":"ARS","transaction_amount":120,"total_paid_amount":120,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"visa","first_six_digits":"450843","last_four_digits":"4612","finance_charge":0,"installments":3,"buyer_fee":0,"statement_descriptor":"WWW.MERCADOPAGO.COM","card":{"id":132279948,"number_id":"B31271EB8EDA75EA5C3570195E81F6342BD25AC7","issuer_id":"297"},"authorization_code":"003869","authorization_date":"2014-04-02T21:14:31.000-04:00","transaction_id":"338738152_3b716f6f7b7973737667","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}},{"payment":{"id":759927896,"site_id":"MLA","date_created":"2014-03-30T20:13:43.000-04:00","date_approved":"2014-03-30T20:13:43.000-04:00","last_modified":"2014-03-30T23:02:17.000-04:00","created_from":"2568868276694852","last_modified_by":77023354,"last_modified_from":null,"client_id":"com.mercadopago.job.paymentpendingmlcharges.PaymentPendingMLChargesJob(pay01)","scoring_execution_id":100843410795,"operation_type":"regular_payment","sponsor_id":null,"collector":{"id":138292544,"email":"outletdediseno@gmail.com","nickname":"OUTLET.DE.DISEÑO","first_name":"Outlet de Diseño","last_name":"Outlet de Diseño","phone":{"area_code":null,"number":"1539273229","extension":null}},"payer_id":77023354,"merchant_order_id":null,"external_reference":"827298391","reason":"Set De Bar Coctelera + 6 Accesorios","currency_id":"ARS","transaction_amount":430,"total_paid_amount":430,"shipping_cost":0,"overpaid_amount":0,"account_money_amount":0,"status":"approved","status_detail":"accredited","status_code":null,"payment_type":"credit_card","payment_method_id":"cencosud","first_six_digits":"603493","last_four_digits":"1002","finance_charge":0,"installments":6,"buyer_fee":0,"statement_descriptor":"MERCADOPAGO","card":{"id":120607956,"number_id":"9E63BE2C7F88ED16ED10A7848B0626256F083B21","issuer_id":"692"},"authorization_code":"675572","authorization_date":"2014-03-30T20:13:43.000-04:00","transaction_id":"337215788_6f76657777667d30777d","coupon_id":null,"coupon_amount":0,"atm_transfer_reference":{"company_id":null,"transaction_id":null},"activation_uri":null,"marketplace":"MELI","tags":[]}}]}));
                response.end();
                return;
            }

            else if(data["sort"] == "date_created" && data["caller.id"] != 99){

                response.write(JSON.stringify({"paging":{"total":4,"limit":5,"offset":0},"results":[{"payment":{"id":9685321,"site_id":"MLB","date_created":dateNow,"date_approved":"2011-11-18T11:15:46.000-04:00","last_modified":"2011-11-18T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":68397902,"email":"pagamento@aikade.com","nickname":"AIKADE","first_name":"BROSZ COBRANCAS DE INTERNET","last_name":"BROSZ","phone":{"area_code":"11","number":"11","extension":null}},"payer_id":14317716,"external_reference":"382026","reason":"Aikade","transaction_amount":59.9,"total_paid_amount":59.9,"currency_id":"BRL","shipping_cost":34.5,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":null,"finance_charge":0,"installments":3,"buyer_fee":9.99,"marketplace":"NONE"}},{"payment":{"id":7702982,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T18:49:00.000-04:00","last_modified":"2012-01-11T16:21:49.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"21","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4G 4S","transaction_amount":139.9,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":15.6,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":13.98,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":77041426,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T19:05:39.000-04:00","last_modified":"2012-01-19T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"83979693","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4g 4s","transaction_amount":139.9,"total_paid_amount":169.48,"currency_id":"BRL","shipping_cost":15.6,"status":"refunded","status_detail":"refunded","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":29.58,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":425331915,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-07-25T10:35:17.000-04:00","last_modified":"2012-07-25T14:06:21.000-04:00","operation_type":"regular_payment","collector":{"id":45657320,"email":"thia2008@hotmail.com","nickname":"THIAHOT","first_name":"Thiara","last_name":"Oliveira Nascimento","phone":{"area_code":"11","number":"11 28073992","extension":null}},"payer_id":14317716,"external_reference":"723154740","reason":"Lavadora De Alta Press\\u00E3o Lava Jato 127v","transaction_amount":229,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":43,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"358","finance_charge":35.33,"installments":6,"buyer_fee":13.99,"card_id":40162155,"marketplace":"MELI"}}]}));
                response.end();
                return;
            }

            if(data["caller.id"] == 555666777 && data["operation_type"] == "random_charge"){

                if(global.retryPayRCha == 0){
                    jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                    global.retryPayRCha++;
                    return;
                }
                response.write(JSON.stringify({"paging":{"total":4,"limit":5,"offset":0},"results":[{"payment":{"id":9685321,"site_id":"MLB","date_created":dateNow,"date_approved":"2011-11-18T11:15:46.000-04:00","last_modified":"2011-11-18T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":68397902,"email":"pagamento@aikade.com","nickname":"AIKADE","first_name":"BROSZ COBRANCAS DE INTERNET","last_name":"BROSZ","phone":{"area_code":"11","number":"11","extension":null}},"payer_id":14317716,"external_reference":"382026","reason":"Aikade","transaction_amount":59.9,"total_paid_amount":59.9,"currency_id":"BRL","shipping_cost":34.5,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":null,"finance_charge":0,"installments":3,"buyer_fee":9.99,"marketplace":"NONE"}},{"payment":{"id":7702982,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T18:49:00.000-04:00","last_modified":"2012-01-11T16:21:49.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"21","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4G 4S","transaction_amount":139.9,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":15.6,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":13.98,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":77041426,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T19:05:39.000-04:00","last_modified":"2012-01-19T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"83979693","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4g 4s","transaction_amount":139.9,"total_paid_amount":169.48,"currency_id":"BRL","shipping_cost":15.6,"status":"refunded","status_detail":"refunded","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":29.58,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":425331915,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-07-25T10:35:17.000-04:00","last_modified":"2012-07-25T14:06:21.000-04:00","operation_type":"regular_payment","collector":{"id":45657320,"email":"thia2008@hotmail.com","nickname":"THIAHOT","first_name":"Thiara","last_name":"Oliveira Nascimento","phone":{"area_code":"11","number":"11 28073992","extension":null}},"payer_id":14317716,"external_reference":"723154740","reason":"Lavadora De Alta Press\\u00E3o Lava Jato 127v","transaction_amount":229,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":43,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"358","finance_charge":35.33,"installments":6,"buyer_fee":13.99,"card_id":40162155,"marketplace":"MELI"}}]}));
                response.end();
                return;
            }

            if(data["caller.id"] == 555666788 && data["operation_type"] == "random_charge"){

                if(global.retryPayRCha == 0){
                    jsonHandler.showInternalServerErrorResponse({"msg":"Server returned error code 404 in get a /cards/search?user_id=555666788&status=active, metric:not_found, data:[message:Cards Not Found]] - json: null","status":404}, response);
                    global.retryPayRCha++;
                    return;
                }
                response.write(JSON.stringify({"paging":{"total":4,"limit":5,"offset":0},"results":[{"payment":{"id":9685321,"site_id":"MLB","date_created":dateNow,"date_approved":"2011-11-18T11:15:46.000-04:00","last_modified":"2011-11-18T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":68397902,"email":"pagamento@aikade.com","nickname":"AIKADE","first_name":"BROSZ COBRANCAS DE INTERNET","last_name":"BROSZ","phone":{"area_code":"11","number":"11","extension":null}},"payer_id":14317716,"external_reference":"382026","reason":"Aikade","transaction_amount":59.9,"total_paid_amount":59.9,"currency_id":"BRL","shipping_cost":34.5,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":null,"finance_charge":0,"installments":3,"buyer_fee":9.99,"marketplace":"NONE"}},{"payment":{"id":7702982,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T18:49:00.000-04:00","last_modified":"2012-01-11T16:21:49.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"21","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4G 4S","transaction_amount":139.9,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":15.6,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":13.98,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":77041426,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T19:05:39.000-04:00","last_modified":"2012-01-19T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"83979693","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4g 4s","transaction_amount":139.9,"total_paid_amount":169.48,"currency_id":"BRL","shipping_cost":15.6,"status":"refunded","status_detail":"refunded","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":29.58,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":425331915,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-07-25T10:35:17.000-04:00","last_modified":"2012-07-25T14:06:21.000-04:00","operation_type":"regular_payment","collector":{"id":45657320,"email":"thia2008@hotmail.com","nickname":"THIAHOT","first_name":"Thiara","last_name":"Oliveira Nascimento","phone":{"area_code":"11","number":"11 28073992","extension":null}},"payer_id":14317716,"external_reference":"723154740","reason":"Lavadora De Alta Press\\u00E3o Lava Jato 127v","transaction_amount":229,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":43,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"358","finance_charge":35.33,"installments":6,"buyer_fee":13.99,"card_id":40162155,"marketplace":"MELI"}}]}));
                response.end();
                return;
            }

            if(data["caller.id"] == 555666777 && data["operation_type"] == null){

                if(global.retryPaySearch == 0){

                    jsonHandler.showInternalServerErrorResponse({"message":"PInternal Error","status":500}, response);
                    global.retryPaySearch++;
                    return;
                }
                response.write(JSON.stringify({"paging":{"total":4,"limit":5,"offset":0},"results":[{"payment":{"id":9685321,"site_id":"MLB","date_created":dateNow,"date_approved":"2011-11-18T11:15:46.000-04:00","last_modified":"2011-11-18T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":68397902,"email":"pagamento@aikade.com","nickname":"AIKADE","first_name":"BROSZ COBRANCAS DE INTERNET","last_name":"BROSZ","phone":{"area_code":"11","number":"11","extension":null}},"payer_id":14317716,"external_reference":"382026","reason":"Aikade","transaction_amount":59.9,"total_paid_amount":59.9,"currency_id":"BRL","shipping_cost":34.5,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":null,"finance_charge":0,"installments":3,"buyer_fee":9.99,"marketplace":"NONE"}},{"payment":{"id":7702982,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T18:49:00.000-04:00","last_modified":"2012-01-11T16:21:49.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"21","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4G 4S","transaction_amount":139.9,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":15.6,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":13.98,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":77041426,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T19:05:39.000-04:00","last_modified":"2012-01-19T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"83979693","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4g 4s","transaction_amount":139.9,"total_paid_amount":169.48,"currency_id":"BRL","shipping_cost":15.6,"status":"refunded","status_detail":"refunded","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":29.58,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":425331915,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-07-25T10:35:17.000-04:00","last_modified":"2012-07-25T14:06:21.000-04:00","operation_type":"regular_payment","collector":{"id":45657320,"email":"thia2008@hotmail.com","nickname":"THIAHOT","first_name":"Thiara","last_name":"Oliveira Nascimento","phone":{"area_code":"11","number":"11 28073992","extension":null}},"payer_id":14317716,"external_reference":"723154740","reason":"Lavadora De Alta Press\\u00E3o Lava Jato 127v","transaction_amount":229,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":43,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"358","finance_charge":35.33,"installments":6,"buyer_fee":13.99,"card_id":40162155,"marketplace":"MELI"}}]}));
                response.end();
                return;
            }

            if(data["caller.id"] == 65160658 ){

                if(global.retryPaySearch == 0){

                    jsonHandler.showInternalServerErrorResponse({"message":"PInternal Error","status":500}, response);
                    global.retryPaySearch++;
                    return;
                }
                response.write(JSON.stringify({"paging":{"total":4,"limit":5,"offset":0},"results":[{"payment":{"id":9685321,"site_id":"MLB","date_created":dateNow,"date_approved":"2011-11-18T11:15:46.000-04:00","last_modified":"2011-11-18T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":68397902,"email":"pagamento@aikade.com","nickname":"AIKADE","first_name":"BROSZ COBRANCAS DE INTERNET","last_name":"BROSZ","phone":{"area_code":"11","number":"11","extension":null}},"payer_id":14317716,"external_reference":"382026","reason":"Aikade","transaction_amount":59.9,"total_paid_amount":59.9,"currency_id":"BRL","shipping_cost":34.5,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":null,"finance_charge":0,"installments":3,"buyer_fee":9.99,"marketplace":"NONE"}},{"payment":{"id":7702982,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T18:49:00.000-04:00","last_modified":"2012-01-11T16:21:49.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"21","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4G 4S","transaction_amount":139.9,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":15.6,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":13.98,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":77041426,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T19:05:39.000-04:00","last_modified":"2012-01-19T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"83979693","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4g 4s","transaction_amount":139.9,"total_paid_amount":169.48,"currency_id":"BRL","shipping_cost":15.6,"status":"refunded","status_detail":"refunded","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":29.58,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":425331915,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-07-25T10:35:17.000-04:00","last_modified":"2012-07-25T14:06:21.000-04:00","operation_type":"regular_payment","collector":{"id":45657320,"email":"thia2008@hotmail.com","nickname":"THIAHOT","first_name":"Thiara","last_name":"Oliveira Nascimento","phone":{"area_code":"11","number":"11 28073992","extension":null}},"payer_id":14317716,"external_reference":"723154740","reason":"Lavadora De Alta Press\\u00E3o Lava Jato 127v","transaction_amount":229,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":43,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"358","finance_charge":35.33,"installments":6,"buyer_fee":13.99,"card_id":40162155,"marketplace":"MELI"}}]}));
                response.end();
                return;
            }

            if(data["caller.id"] == 65160657 ||  data["payer_id"] == 65160657){

                if(global.retryPaySearch == 0){

                    jsonHandler.showInternalServerErrorResponse({"message":"PInternal Error","status":500}, response);
                    global.retryPaySearch++;
                    return;
                }
                response.write(JSON.stringify({"paging":{"total":4,"limit":5,"offset":0},"results":[{"payment":{"id":9685321,"site_id":"MLB","date_created":dateNow,"date_approved":"2011-11-18T11:15:46.000-04:00","last_modified":"2011-11-18T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":68397902,"email":"pagamento@aikade.com","nickname":"AIKADE","first_name":"BROSZ COBRANCAS DE INTERNET","last_name":"BROSZ","phone":{"area_code":"11","number":"11","extension":null}},"payer_id":14317716,"external_reference":"382026","reason":"Aikade","transaction_amount":59.9,"total_paid_amount":59.9,"currency_id":"BRL","shipping_cost":34.5,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":null,"finance_charge":0,"installments":3,"buyer_fee":9.99,"marketplace":"NONE"}},{"payment":{"id":7702982,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T18:49:00.000-04:00","last_modified":"2012-01-11T16:21:49.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"21","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4G 4S","transaction_amount":139.9,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":15.6,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":13.98,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":77041426,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T19:05:39.000-04:00","last_modified":"2012-01-19T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"83979693","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4g 4s","transaction_amount":139.9,"total_paid_amount":169.48,"currency_id":"BRL","shipping_cost":15.6,"status":"refunded","status_detail":"refunded","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":29.58,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":425331915,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-07-25T10:35:17.000-04:00","last_modified":"2012-07-25T14:06:21.000-04:00","operation_type":"regular_payment","collector":{"id":45657320,"email":"thia2008@hotmail.com","nickname":"THIAHOT","first_name":"Thiara","last_name":"Oliveira Nascimento","phone":{"area_code":"11","number":"11 28073992","extension":null}},"payer_id":14317716,"external_reference":"723154740","reason":"Lavadora De Alta Press\\u00E3o Lava Jato 127v","transaction_amount":229,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":43,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"358","finance_charge":35.33,"installments":6,"buyer_fee":13.99,"card_id":40162155,"marketplace":"MELI"}}]}));
                response.end();
                return;
            }

            //Mock para fraud subscribers
            if ((data["caller.id"] == 12345 && data["operation_type"] == "random_charge") || data["caller.id"] == 980474810 || data["caller.id"] == 87456721){

                response.write(JSON.stringify({
                    "paging": {
                        "total": 3,
                        "limit": 30,
                        "offset": 0
                    },
                    "results": [
                        {
                            "payment": {
                                "id": 126860210,
                                "site_id": "MLA",
                                "date_created": "2013-03-12T00:00:00.000-04:00",
                                "date_approved": "2013-03-12T19:22:27.000-04:00",
                                "last_modified": "2013-03-13T12:12:40.000-04:00",
                                "operation_type": "random_charge",
                                "sponsor_id": null,
                                "collector": {
                                    "id": 12345,
                                    "email": "lucio_nqn@hotmail.com",
                                    "nickname": "LUCIO_NQN_DRA",
                                    "first_name": "Lucio",
                                    "last_name": "Llancapan",
                                    "phone": {
                                        "area_code": null,
                                        "number": null,
                                        "extension": null
                                    }
                                },
                                "payer_id": 12345,
                                "external_reference": null,
                                "reason": null,
                                "currency_id": "ARS",
                                "transaction_amount": 1.16,
                                "total_paid_amount": 1.16,
                                "shipping_cost": 0,
                                "account_money_amount": 0,
                                "status": "approved",
                                "status_detail": "accredited",
                                "status_code": null,
                                "payment_type": "credit_card",
                                "payment_method_id": "visa",
                                "first_six_digits": "454640",
                                "last_four_digits": "4578",
                                "finance_charge": 0,
                                "installments": 1,
                                "buyer_fee": 0,
                                "card_id": 55696615,
                                "atm_transfer_reference": {
                                    "company_id": null,
                                    "transaction_id": null
                                },
                                "activation_uri": null,
                                "marketplace": "NONE"
                            }
                        },
                        {
                            "payment": {
                                "id": 127424078,
                                "site_id": "MLA",
                                "date_created": "2013-03-19T00:00:00.000-04:00",
                                "date_approved": "2013-03-19T00:16:36.000-04:00",
                                "last_modified": "2013-03-19T00:41:20.000-04:00",
                                "operation_type": "random_charge",
                                "sponsor_id": null,
                                "collector": {
                                    "id": 12345,
                                    "email": "lucio_nqn@hotmail.com",
                                    "nickname": "LUCIO_NQN_DRA",
                                    "first_name": "Lucio",
                                    "last_name": "Llancapan",
                                    "phone": {
                                        "area_code": null,
                                        "number": null,
                                        "extension": null
                                    }
                                },
                                "payer_id": 12345,
                                "external_reference": null,
                                "reason": null,
                                "currency_id": "ARS",
                                "transaction_amount": 1.48,
                                "total_paid_amount": 1.48,
                                "shipping_cost": 0,
                                "account_money_amount": 0,
                                "status": "approved",
                                "status_detail": "accredited",
                                "status_code": null,
                                "payment_type": "credit_card",
                                "payment_method_id": "visa",
                                "first_six_digits": "454640",
                                "last_four_digits": "4578",
                                "finance_charge": 0,
                                "installments": 1,
                                "buyer_fee": 0,
                                "card_id": 55696616,
                                "atm_transfer_reference": {
                                    "company_id": null,
                                    "transaction_id": null
                                },
                                "activation_uri": null,
                                "marketplace": "NONE"
                            }
                        },
                        {
                            "payment": {
                                "id": 127425932,
                                "site_id": "MLA",
                                "date_created": "2013-03-19T00:00:00.000-04:00",
                                "date_approved": "2013-03-19T00:46:23.000-04:00",
                                "last_modified": "2013-03-19T00:46:23.000-04:00",
                                "operation_type": "random_charge",
                                "sponsor_id": null,
                                "collector": {
                                    "id": 12345,
                                    "email": "lucio_nqn@hotmail.com",
                                    "nickname": "LUCIO_NQN_DRA",
                                    "first_name": "Lucio",
                                    "last_name": "Llancapan",
                                    "phone": {
                                        "area_code": null,
                                        "number": null,
                                        "extension": null
                                    }
                                },
                                "payer_id": 12345,
                                "external_reference": null,
                                "reason": null,
                                "currency_id": "ARS",
                                "transaction_amount": 1.9,
                                "total_paid_amount": 1.9,
                                "shipping_cost": 0,
                                "account_money_amount": 0,
                                "status": "approved",
                                "status_detail": "accredited",
                                "status_code": null,
                                "payment_type": "credit_card",
                                "payment_method_id": "visa",
                                "first_six_digits": "454640",
                                "last_four_digits": "4578",
                                "finance_charge": 0,
                                "installments": 1,
                                "buyer_fee": 0,
                                "card_id": 55696617,
                                "atm_transfer_reference": {
                                    "company_id": null,
                                    "transaction_id": null
                                },
                                "activation_uri": null,
                                "marketplace": "NONE"
                            }
                        }
                    ]
                }));
                response.end();
                return;
            }

            //Mock para fraud subscribers - doc de venezuela
            if (data["caller.id"] == 44444 && data["operation_type"] == "random_charge"){

                response.write(JSON.stringify({
                    "paging": {
                        "total": 3,
                        "limit": 30,
                        "offset": 0
                    },
                    "results": [
                        {
                            "payment": {
                                "id": 126860210,
                                "site_id": "MLV",
                                "date_created": "2013-03-12T00:00:00.000-04:00",
                                "date_approved": "2013-03-12T19:22:27.000-04:00",
                                "last_modified": "2013-03-13T12:12:40.000-04:00",
                                "operation_type": "random_charge",
                                "sponsor_id": null,
                                "collector": {
                                    "id": 44444,
                                    "email": "lucio_nqn@hotmail.com",
                                    "nickname": "LUCIO_NQN_DRA",
                                    "first_name": "Lucio",
                                    "last_name": "Llancapan",
                                    "phone": {
                                        "area_code": null,
                                        "number": null,
                                        "extension": null
                                    }
                                },
                                "payer_id": 44444,
                                "external_reference": null,
                                "reason": null,
                                "currency_id": "ARS",
                                "transaction_amount": 1.16,
                                "total_paid_amount": 1.16,
                                "shipping_cost": 0,
                                "account_money_amount": 0,
                                "status": "approved",
                                "status_detail": "accredited",
                                "status_code": null,
                                "payment_type": "credit_card",
                                "payment_method_id": "visa",
                                "first_six_digits": "454640",
                                "last_four_digits": "4578",
                                "finance_charge": 0,
                                "installments": 1,
                                "buyer_fee": 0,
                                "card_id": 999468419,
                                "atm_transfer_reference": {
                                    "company_id": null,
                                    "transaction_id": null
                                },
                                "activation_uri": null,
                                "marketplace": "NONE"
                            }
                        },
                        {
                            "payment": {
                                "id": 127424078,
                                "site_id": "MLV",
                                "date_created": "2013-03-19T00:00:00.000-04:00",
                                "date_approved": "2013-03-19T00:16:36.000-04:00",
                                "last_modified": "2013-03-19T00:41:20.000-04:00",
                                "operation_type": "random_charge",
                                "sponsor_id": null,
                                "collector": {
                                    "id": 44444,
                                    "email": "lucio_nqn@hotmail.com",
                                    "nickname": "LUCIO_NQN_DRA",
                                    "first_name": "Lucio",
                                    "last_name": "Llancapan",
                                    "phone": {
                                        "area_code": null,
                                        "number": null,
                                        "extension": null
                                    }
                                },
                                "payer_id": 44444,
                                "external_reference": null,
                                "reason": null,
                                "currency_id": "ARS",
                                "transaction_amount": 1.48,
                                "total_paid_amount": 1.48,
                                "shipping_cost": 0,
                                "account_money_amount": 0,
                                "status": "approved",
                                "status_detail": "accredited",
                                "status_code": null,
                                "payment_type": "credit_card",
                                "payment_method_id": "visa",
                                "first_six_digits": "454640",
                                "last_four_digits": "4578",
                                "finance_charge": 0,
                                "installments": 1,
                                "buyer_fee": 0,
                                "card_id": 879468419,
                                "atm_transfer_reference": {
                                    "company_id": null,
                                    "transaction_id": null
                                },
                                "activation_uri": null,
                                "marketplace": "NONE"
                            }
                        }

                    ]
                }));
                response.end();
                return;
            }

             if (data["payment_type"] == "ticket" && data["caller.id"] != 99){

                response.write(JSON.stringify({
    "paging": {
        "total": 9,
        "limit": 50,
        "offset": 0
    },
    "results": [
        {
            "payment": {
                "id": 594547443,
                "site_id": "MLB",
                "date_created": "2013-05-21T07:37:56.000-04:00",
                "date_approved": "2013-05-23T01:44:16.000-04:00",
                "last_modified": "2013-06-08T17:47:14.000-04:00",
                "operation_type": "regular_payment",
                "sponsor_id": null,
                "collector": {
                    "id": 77945322,
                    "email": "internet@kmabrasil.com.br",
                    "nickname": "KMABRASIL",
                    "first_name": "KMA",
                    "last_name": "BRASIL ",
                    "phone": {
                        "area_code": "11",
                        "number": "28871757",
                        "extension": null
                    }
                },
                "payer_id": 116078570,
                "external_reference": "767550471",
                "reason": "Capacímetro Digital Hikari Hcp-100 - Mede Qualquer Capacitor",
                "currency_id": "BRL",
                "transaction_amount": 79.9,
                "total_paid_amount": 96.9,
                "shipping_cost": 17,
                "account_money_amount": 0,
                "status": "approved",
                "status_detail": "accredited",
                "status_code": null,
                "payment_type": "ticket",
                "payment_method_id": "bolbradesco",
                "first_six_digits": null,
                "last_four_digits": null,
                "finance_charge": null,
                "installments": null,
                "buyer_fee": null,
                "statement_descriptor": null,
                "coupon_id": null,
                "coupon_amount": null,
                "atm_transfer_reference": {
                    "company_id": null,
                    "transaction_id": null
                },
                "activation_uri": "https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=594547443&payment_method_reference_id=520597569&caller_id=116078570",
                "marketplace": "MELI",
                "tags": []
            }
        },
        {
            "payment": {
                "id": 602423063,
                "site_id": "MLB",
                "date_created": "2013-06-14T15:03:00.000-04:00",
                "date_approved": "2013-06-18T12:55:35.000-04:00",
                "last_modified": "2013-06-18T12:55:35.000-04:00",
                "operation_type": "regular_payment",
                "sponsor_id": null,
                "collector": {
                    "id": 96700628,
                    "email": "vendas@ahcomprei.com.br",
                    "nickname": "AHCOMPREI",
                    "first_name": "MR BENVENHO",
                    "last_name": "E CIA LTDA",
                    "phone": {
                        "area_code": "   ",
                        "number": "32542800",
                        "extension": null
                    }
                },
                "payer_id": 116078570,
                "external_reference": "772025638",
                "reason": "Kit 2 Driver Profissional C\\/ Corneta Cl +2 Super Tweeter Tsr",
                "currency_id": "BRL",
                "transaction_amount": 89.99,
                "total_paid_amount": 119.59,
                "shipping_cost": 29.6,
                "account_money_amount": 0,
                "status": "approved",
                "status_detail": "accredited",
                "status_code": null,
                "payment_type": "ticket",
                "payment_method_id": "bolbradesco",
                "first_six_digits": null,
                "last_four_digits": null,
                "finance_charge": null,
                "installments": null,
                "buyer_fee": null,
                "statement_descriptor": null,
                "coupon_id": null,
                "coupon_amount": 0,
                "atm_transfer_reference": {
                    "company_id": null,
                    "transaction_id": null
                },
                "activation_uri": "https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=602423063&payment_method_reference_id=526075859&caller_id=116078570",
                "marketplace": "MELI",
                "tags": []
            }
        },
        {
            "payment": {
                "id": 602345118,
                "site_id": "MLB",
                "date_created": "2013-06-15T00:44:46.000-04:00",
                "date_approved": "2013-06-19T12:50:28.000-04:00",
                "last_modified": "2013-06-19T12:58:02.000-04:00",
                "operation_type": "regular_payment",
                "sponsor_id": null,
                "collector": {
                    "id": 41013048,
                    "email": "vendas@rklshop.com.br",
                    "nickname": "RKLSHOP",
                    "first_name": "ROQUE FRANCISCO",
                    "last_name": "CARDOSO FILHO",
                    "phone": {
                        "area_code": "11",
                        "number": "11",
                        "extension": null
                    }
                },
                "payer_id": 116078570,
                "external_reference": "772103322",
                "reason": "Mouse Wireless Sem Fio 2.4ghz Usb Alcance 10m Notebook Pc",
                "currency_id": "BRL",
                "transaction_amount": 43.88,
                "total_paid_amount": 55.87,
                "shipping_cost": 11.99,
                "account_money_amount": 0,
                "status": "approved",
                "status_detail": "accredited",
                "status_code": null,
                "payment_type": "ticket",
                "payment_method_id": "bolbradesco",
                "first_six_digits": null,
                "last_four_digits": null,
                "finance_charge": null,
                "installments": null,
                "buyer_fee": null,
                "statement_descriptor": null,
                "coupon_id": null,
                "coupon_amount": null,
                "atm_transfer_reference": {
                    "company_id": null,
                    "transaction_id": null
                },
                "activation_uri": "https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=602345118&payment_method_reference_id=526190552&caller_id=116078570",
                "marketplace": "MELI",
                "tags": []
            }
        },
        {
            "payment": {
                "id": 626380301,
                "site_id": "MLB",
                "date_created": "2013-07-26T00:32:23.000-04:00",
                "date_approved": "2013-07-29T18:43:11.000-04:00",
                "last_modified": "2013-07-29T18:43:18.000-04:00",
                "operation_type": "regular_payment",
                "sponsor_id": null,
                "collector": {
                    "id": 139771452,
                    "email": "zunairpontonet@gmail.com",
                    "nickname": "ZUNAIR.NET",
                    "first_name": "Dalva",
                    "last_name": "Alvarenga Freire",
                    "phone": {
                        "area_code": " ",
                        "number": " ",
                        "extension": null
                    }
                },
                "payer_id": 116078570,
                "external_reference": "779452180",
                "reason": "Placa Sinal Tv 32 Lcd H Buster Hbtv 32d03hd",
                "currency_id": "BRL",
                "transaction_amount": 195,
                "total_paid_amount": 240,
                "shipping_cost": 45,
                "account_money_amount": 0,
                "status": "refunded",
                "status_detail": "refunded",
                "status_code": null,
                "payment_type": "ticket",
                "payment_method_id": "bolbradesco",
                "first_six_digits": null,
                "last_four_digits": null,
                "finance_charge": null,
                "installments": null,
                "buyer_fee": null,
                "statement_descriptor": null,
                "coupon_id": null,
                "coupon_amount": null,
                "atm_transfer_reference": {
                    "company_id": null,
                    "transaction_id": null
                },
                "activation_uri": "https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=626380301&payment_method_reference_id=542240263&caller_id=116078570",
                "marketplace": "MELI",
                "tags": []
            }
        },
        {
            "payment": {
                "id": 628460414,
                "site_id": "MLB",
                "date_created": "2013-07-30T14:41:29.000-04:00",
                "date_approved": "2013-08-01T13:05:19.000-04:00",
                "last_modified": "2013-08-02T19:59:40.000-04:00",
                "operation_type": "regular_payment",
                "sponsor_id": null,
                "collector": {
                    "id": 136381908,
                    "email": "mega.chipsce@gmail.com",
                    "nickname": "MMEGACHIP",
                    "first_name": "Rodrigo",
                    "last_name": "Pinheiro Menezes ",
                    "phone": {
                        "area_code": "   ",
                        "number": "   ",
                        "extension": null
                    }
                },
                "payer_id": 116078570,
                "external_reference": "780189894",
                "reason": "Tda8954 Th Smd \\/ Tda 8954th Smd - Original - Oferta",
                "currency_id": "BRL",
                "transaction_amount": 89.7,
                "total_paid_amount": 106.2,
                "shipping_cost": 16.5,
                "account_money_amount": 0,
                "status": "approved",
                "status_detail": "accredited",
                "status_code": null,
                "payment_type": "ticket",
                "payment_method_id": "bolbradesco",
                "first_six_digits": null,
                "last_four_digits": null,
                "finance_charge": null,
                "installments": null,
                "buyer_fee": null,
                "statement_descriptor": null,
                "coupon_id": null,
                "coupon_amount": 0,
                "atm_transfer_reference": {
                    "company_id": null,
                    "transaction_id": null
                },
                "activation_uri": "https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=628460414&payment_method_reference_id=543557937&caller_id=116078570",
                "marketplace": "MELI",
                "tags": []
            }
        },
        {
            "payment": {
                "id": 633746941,
                "site_id": "MLB",
                "date_created": "2013-08-05T14:25:37.000-04:00",
                "date_approved": "2013-08-06T20:13:25.000-04:00",
                "last_modified": "2013-08-17T14:48:04.000-04:00",
                "operation_type": "regular_payment",
                "sponsor_id": null,
                "collector": {
                    "id": 26283257,
                    "email": "contato@servplacas.com.br",
                    "nickname": "SERVPLACAS",
                    "first_name": "TRINDADE E DEUS LTDA ? ME",
                    "last_name": "de Deus",
                    "phone": {
                        "area_code": "43",
                        "number": "43",
                        "extension": null
                    }
                },
                "payer_id": 116078570,
                "external_reference": "781291112",
                "reason": "Placa Principal De V\\u00EDdeo H-buster Hbtv-4203fd, Hbtv 3203",
                "currency_id": "BRL",
                "transaction_amount": 235,
                "total_paid_amount": 249.8,
                "shipping_cost": 14.8,
                "account_money_amount": 0,
                "status": "approved",
                "status_detail": "accredited",
                "status_code": null,
                "payment_type": "ticket",
                "payment_method_id": "bolbradesco",
                "first_six_digits": null,
                "last_four_digits": null,
                "finance_charge": null,
                "installments": null,
                "buyer_fee": null,
                "statement_descriptor": null,
                "coupon_id": null,
                "coupon_amount": 0,
                "atm_transfer_reference": {
                    "company_id": null,
                    "transaction_id": null
                },
                "activation_uri": "https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=633746941&payment_method_reference_id=547305525&caller_id=116078570",
                "marketplace": "MELI",
                "tags": []
            }
        },
        {
            "payment": {
                "id": 647747315,
                "site_id": "MLB",
                "date_created": "2013-08-25T00:14:15.000-04:00",
                "date_approved": "2013-08-27T15:30:13.000-04:00",
                "last_modified": "2013-09-16T11:53:44.000-04:00",
                "operation_type": "regular_payment",
                "sponsor_id": null,
                "collector": {
                    "id": 84003458,
                    "email": "best.choise@terra.com.br",
                    "nickname": "BEST CHOISE",
                    "first_name": "Carla",
                    "last_name": "Cristine Correa Valdes",
                    "phone": {
                        "area_code": "011",
                        "number": "011",
                        "extension": null
                    }
                },
                "payer_id": 116078570,
                "external_reference": "785072000",
                "reason": "Cole\\u00E7\\u00E3o Betty Boop Salvat",
                "currency_id": "BRL",
                "transaction_amount": 13.9,
                "total_paid_amount": 29.9,
                "shipping_cost": 16,
                "account_money_amount": 0,
                "status": "refunded",
                "status_detail": "bpp_refunded",
                "status_code": null,
                "payment_type": "ticket",
                "payment_method_id": "bolbradesco",
                "first_six_digits": null,
                "last_four_digits": null,
                "finance_charge": null,
                "installments": null,
                "buyer_fee": null,
                "statement_descriptor": null,
                "coupon_id": null,
                "coupon_amount": null,
                "atm_transfer_reference": {
                    "company_id": null,
                    "transaction_id": null
                },
                "activation_uri": "https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=647747315&payment_method_reference_id=557334033&caller_id=116078570",
                "marketplace": "MELI",
                "tags": []
            }
        },
        {
            "payment": {
                "id": 678547992,
                "site_id": "MLB",
                "date_created": "2013-10-15T09:04:50.000-04:00",
                "date_approved": "2013-10-16T15:40:02.000-04:00",
                "last_modified": "2013-10-17T20:42:35.000-04:00",
                "operation_type": "regular_payment",
                "sponsor_id": null,
                "collector": {
                    "id": 10956178,
                    "email": "vendasgshop@hotmail.com",
                    "nickname": "G. SHOP",
                    "first_name": "MAURICIO",
                    "last_name": "GAGLIARDI FILHO",
                    "phone": {
                        "area_code": "15",
                        "number": "15",
                        "extension": null
                    }
                },
                "payer_id": 116078570,
                "external_reference": "794729187",
                "reason": "Celular Smartphone Genesis Gp351 3g Dual Chip Wi-fi Android",
                "currency_id": "BRL",
                "transaction_amount": 244.99,
                "total_paid_amount": 261.99,
                "shipping_cost": 17,
                "account_money_amount": 0,
                "status": "approved",
                "status_detail": "accredited",
                "status_code": null,
                "payment_type": "ticket",
                "payment_method_id": "bolbradesco",
                "first_six_digits": null,
                "last_four_digits": null,
                "finance_charge": null,
                "installments": null,
                "buyer_fee": null,
                "statement_descriptor": null,
                "coupon_id": null,
                "coupon_amount": 0,
                "atm_transfer_reference": {
                    "company_id": null,
                    "transaction_id": null
                },
                "activation_uri": "https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=678547992&payment_method_reference_id=578996255&caller_id=116078570&comB=4A106F8F78D113D9F9CE2C09840DDF4418C149097C7F5D33A57B69D99C95392DBCBA5BB3F34D4AAFAC621488DFAAB540DF2C61D6C01606D43494412FA1CDDF2DE4F3BEC2CC9F45DE9C492E25AD5CAB00F475AF8262DA09C2C017CE9148FCAD22518BE2081A75DE373ED26FEEDC714506B944C5D249C295867EFB0C8B04314CA4",
                "marketplace": "MELI",
                "tags": []
            }
        },
        {
            "payment": {
                "id": 697811597,
                "site_id": "MLB",
                "date_created": "2013-11-27T00:00:02.000-04:00",
                "date_approved": "2013-11-28T10:25:51.000-04:00",
                "last_modified": "2013-11-28T10:25:51.000-04:00",
                "operation_type": "regular_payment",
                "sponsor_id": null,
                "collector": {
                    "id": 85134341,
                    "email": "tecvideoeletronica2008@hotmail.com",
                    "nickname": "TECVIDEOELETRONICA2008",
                    "first_name": "givanildo",
                    "last_name": "anulino targino",
                    "phone": {
                        "area_code": "83",
                        "number": "96009582",
                        "extension": null
                    }
                },
                "payer_id": 116078570,
                "external_reference": "803318179",
                "reason": "Medidor De Esr Ou Capamiter, Frete Grátis",
                "currency_id": "BRL",
                "transaction_amount": 160,
                "total_paid_amount": 160,
                "shipping_cost": 0,
                "account_money_amount": 0,
                "status": "approved",
                "status_detail": "accredited",
                "status_code": null,
                "payment_type": "ticket",
                "payment_method_id": "bolbradesco",
                "first_six_digits": null,
                "last_four_digits": null,
                "finance_charge": null,
                "installments": null,
                "buyer_fee": null,
                "statement_descriptor": null,
                "coupon_id": null,
                "coupon_amount": 0,
                "atm_transfer_reference": {
                    "company_id": null,
                    "transaction_id": null
                },
                "activation_uri": "https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=697811597&payment_method_reference_id=592769089&caller_id=116078570&comB=5360E15F47BE9F40A0E88A2A7BCB3DFF703FAAABD8F363A2A21E9F976ADA143B24736C35F9AFF79E4D986AA79C50D9F6265380FBFE071262B9386F598C36ACD5B4234FBDE724A1980CB72F98A4E560D0F34C96C973F049D3A3692114A11F10F2B232D2F97165A8E9D0211990FC4BD5FF794D433202E0CDE2AD99060C8301F332",
                "marketplace": "MELI",
                "tags": []
            }
        }
    ]
}));
                response.end();
                return;
            }

            // Mocks de datos para ivs por email
            if ((data["caller.id"] == 65665635 && !(data.status == "cancelled" && data.status_detail == "expired")) ||
                (data["caller.id"] == 65700670 && data.status_detail == 'pending_waiting_for_remedy,pending_additional_info,pending_online_validation,pending_review_manual,pending_review_auto') ||
                (data["caller.id"] == 65700670 && data.status == "cancelled" && data.status_detail == "expired")) {
                    response.write(JSON.stringify({"paging":{"total":0,"limit":5,"offset":0},"results":[]}));
                }  else if (data["caller.id"] == 12345 && data["end_date"]=="NOW") { //se usa en fraudlist-subscribers
                    response.write(JSON.stringify({"paging":{"total":1,"limit":5,"offset":0},"results":[{"payment":{"id":65543725,"site_id":"MLA","date_created":"2012-04-05T13:33:01.000-04:00","date_approved":"2012-04-05T13:35:05.000-04:00","last_modified":"2012-04-23T12:24:08.000-04:00","operation_type":"regular_payment","collector":{"id":27559173},"payer_id":101033408,"external_reference":"711805958","reason":"Escova Progressiva Definitiva 60ml Ph Frizz-frete Gratis))))","transaction_amount":80,"total_paid_amount":87.19,"currency_id":"BRL","shipping_cost":0,"status":"cancelled","status_detail":"by_collector","payment_type":"credit_card","payment_method_id":"master","last_four_digits":"9315","finance_charge":7.19,"installments":3,"buyer_fee":9.99,"card_id":51646186,"marketplace":"MELI"}}]}));
                }  else if (data["caller.id"] == 65665635 && data.status == "cancelled" && data.status_detail == "expired") {
                    response.write(JSON.stringify({"paging":{"total":3,"limit":5,"offset":0},"results":[{"payment":{"id":411613804,"site_id":"MLA","date_created":"2012-04-05T13:33:01.000-04:00","date_approved":"2012-04-05T13:35:05.000-04:00","last_modified":"2012-04-23T12:24:08.000-04:00","operation_type":"regular_payment","collector":{"id":27559173},"payer_id":101033408,"external_reference":"711805958","reason":"Escova Progressiva Definitiva 60ml Ph Frizz-frete Gratis))))","transaction_amount":80,"total_paid_amount":87.19,"currency_id":"BRL","shipping_cost":0,"status":"cancelled","status_detail":"by_collector","payment_type":"credit_card","payment_method_id":"master","last_four_digits":"9315","finance_charge":7.19,"installments":3,"buyer_fee":9.99,"card_id":51646186,"marketplace":"MELI"}},{"payment":{"id":86677665,"site_id":"MLB","date_created":"2012-02-24T11:48:05.000-04:00","date_approved":"2012-02-24T11:48:05.000-04:00","last_modified":"2012-03-05T12:14:27.000-04:00","operation_type":"regular_payment","collector":{"id":82603716},"payer_id":101033408,"external_reference":"708253579","reason":"Calça Em Cotton 8 P/ Ginastica Fitness Aerobica Academia.","transaction_amount":14.5,"total_paid_amount":67.57,"currency_id":"BRL","shipping_cost":47.5,"status":"cancelled","status_detail":"by_payer","payment_type":"credit_card","payment_method_id":"master","last_four_digits":"8370","finance_charge":0,"installments":3,"buyer_fee":9.99,"card_id":50197585,"marketplace":"MELI"}},{"payment":{"id":85311183,"site_id":"MLB","date_created":"2012-02-16T13:29:41.000-04:00","date_approved":null,"last_modified":"2012-03-19T02:47:55.000-04:00","operation_type":"regular_payment","collector":{"id":28642556,"email":"atacado.lingerie@yahoo.com.br","nickname":"MODASATACADO","first_name":"MARCIA APARECIDA","last_name":"GONÇALVES VESTUARIO ME","phone":{"area_code":"19","number":"36813830","extension":null}},"payer_id":101033408,"external_reference":"3216","reason":"PEDIDO #3216 na loja.","transaction_amount":87.85,"total_paid_amount":91.36,"currency_id":"BRL","shipping_cost":0,"status":"cancelled","status_detail":"expired","payment_type":"credit_card","payment_method_id":"master","last_four_digits":"8370","finance_charge":0,"installments":3,"buyer_fee":9.99,"card_id":50197585,"marketplace":"NONE"}}]}));
                } else if(data["caller.id"] == 100 && data.status_detail == 'pending_waiting_for_remedy,pending_additional_info,pending_online_validation,pending_review_manual,pending_review_auto') {
                    response.write(JSON.stringify({"paging":{"total":1,"limit":5,"offset":0},"results":[{"payment":{"id":411613804,"site_id":"MLB","date_created":"2012-05-09T10:46:21.000-04:00","date_approved":null,"last_modified":"2012-05-09T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":95851263,"email":"valicell@ig.com.br","nickname":"VALICELL","first_name":"Antonio Carlos","last_name":"Andrade","phone":{"area_code":"19","number":"19 41170228","extension":"0"}},"payer_id":112747379,"external_reference":"714942108","reason":"Celular Motorola Ex115 Dual Chip Câmera 3.0mp + 3 Brindes","transaction_amount":139.9,"total_paid_amount":180.49,"currency_id":"BRL","shipping_cost":25.7,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"master","last_four_digits":"6678","finance_charge":40.59,"installments":3,"buyer_fee":9.99,"card_id":100,"marketplace":"MELI"}}]}));
                } else if(data["caller.id"] == 101 && data.status_detail == 'pending_waiting_for_remedy,pending_additional_info,pending_online_validation,pending_review_manual,pending_review_auto') {
                    response.write(JSON.stringify({"paging":{"total":1,"limit":5,"offset":0},"results":[{"payment":{"id":411613804,"site_id":"MLB","date_created":"2012-05-09T10:46:21.000-04:00","date_approved":null,"last_modified":"2012-05-09T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":95851263,"email":"valicell@ig.com.br","nickname":"VALICELL","first_name":"Antonio Carlos","last_name":"Andrade","phone":{"area_code":"19","number":"19 41170228","extension":"0"}},"payer_id":112747379,"external_reference":"714942108","reason":"Celular Motorola Ex115 Dual Chip Câmera 3.0mp + 3 Brindes","transaction_amount":139.9,"total_paid_amount":180.49,"currency_id":"BRL","shipping_cost":25.7,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"master","last_four_digits":"6678","finance_charge":40.59,"installments":3,"buyer_fee":9.99,"card_id":0,"marketplace":"MELI"}}]}));
                } else if (data.status_detail == 'pending_waiting_for_remedy,pending_additional_info,pending_online_validation,pending_review_manual,pending_review_auto') {
                    response.write(JSON.stringify({"paging":{"total":1,"limit":5,"offset":0},"results":[{"payment":{"id":411613804,"site_id":"MLA","date_created":"2012-05-09T10:46:21.000-04:00","date_approved":null,"last_modified":"2012-05-09T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":95851263,"email":"valicell@ig.com.br","nickname":"VALICELL","first_name":"Antonio Carlos","last_name":"Andrade","phone":{"area_code":"19","number":"19 41170228","extension":"0"}},"payer_id":112747379,"external_reference":"714942108","reason":"Celular Motorola Ex115 Dual Chip Câmera 3.0mp + 3 Brindes","transaction_amount":139.9,"total_paid_amount":180.49,"currency_id":"BRL","shipping_cost":25.7,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"master","last_four_digits":"6678","finance_charge":40.59,"installments":3,"buyer_fee":9.99,"card_id":52475488,"marketplace":"MELI"}}]}));
                } else {
                    // Fin mocks de datos para ivs por email

                    //Mocks de datos para loader de scoringLite (ReceiverRelatedOperationsService - SenderRelatedOperationsService)
                    var strYear = new Date().getFullYear().toString()
                    var currMonth = new Date().getMonth()+1
                    if (currMonth < 10) { currMonth = '0' + currMonth; }
                    var strMonth = currMonth.toString()
                    var dateNow =  strYear+"-"+strMonth+"-"+"01T10:35:17.000-04:00"


                    if(data["caller.id"] == 12345){
                            response.write(JSON.stringify({"paging":{"total":4,"limit":5,"offset":0},"results":[{"payment":{"id":65543725,"site_id":"MLB","date_created":dateNow,"date_approved":"2011-11-18T11:15:46.000-04:00","last_modified":"2011-11-18T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":68397902,"email":"pagamento@aikade.com","nickname":"AIKADE","first_name":"BROSZ COBRANCAS DE INTERNET","last_name":"BROSZ","phone":{"area_code":"11","number":"11","extension":null}},"payer_id":14317716,"external_reference":"382026","reason":"Aikade","transaction_amount":59.9,"total_paid_amount":59.9,"currency_id":"BRL","shipping_cost":34.5,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":null,"finance_charge":0,"installments":3,"buyer_fee":9.99,"marketplace":"NONE"}},{"payment":{"id":77029843,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T18:49:00.000-04:00","last_modified":"2012-01-11T16:21:49.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"21","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4G 4S","transaction_amount":139.9,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":15.6,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":13.98,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":77041426,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T19:05:39.000-04:00","last_modified":"2012-01-19T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"83979693","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4g 4s","transaction_amount":139.9,"total_paid_amount":169.48,"currency_id":"BRL","shipping_cost":15.6,"status":"refunded","status_detail":"refunded","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":29.58,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":425331915,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-07-25T10:35:17.000-04:00","last_modified":"2012-07-25T14:06:21.000-04:00","operation_type":"regular_payment","collector":{"id":45657320,"email":"thia2008@hotmail.com","nickname":"THIAHOT","first_name":"Thiara","last_name":"Oliveira Nascimento","phone":{"area_code":"11","number":"11 28073992","extension":null}},"payer_id":14317716,"external_reference":"723154740","reason":"Lavadora De Alta Press\\u00E3o Lava Jato 127v","transaction_amount":229,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":43,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"358","finance_charge":35.33,"installments":6,"buyer_fee":13.99,"card_id":40162155,"marketplace":"MELI"}}]}));
                            //Mock para la carga del flag si un user tuvo un pago viejo aprobado. (HAS_APRROVED_PAYMENT_TC valor de context)
                    } else if (data["caller.id"] == 980474810 && data["status"] == "approved" && data["card_number_id"] == "3D82B8EFA4454D590D9922013216AC4CE99855A6") {
                            response.write(JSON.stringify({"paging":{"total":2,"limit":1,"offset":0},"results":[{"payment":{"id":405980615,"site_id":"MLB","date_created":"2012-04-03T11:28:57.000-04:00","date_approved":"2012-04-03T11:28:57.000-04:00","last_modified":"2012-04-03T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":28306075,"email":"achei@acheigourmet.com.br","nickname":"ACHEI GOURMET","first_name":"Marcos","last_name":"Martuscelli","phone":{"area_code":"11","number":"72527770","extension":null}},"payer_id":25812115,"external_reference":"711594633","reason":"Potinho De Vidro Para Brigadeiro E Doces De Colher","transaction_amount":110,"total_paid_amount":142,"currency_id":"BRL","shipping_cost":32,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"master","last_four_digits":"9829","finance_charge":32,"installments":1,"buyer_fee":0,"card_id":51595255,"marketplace":"MELI"}}]}));
                    } else if (data["caller.id"] == 12346){
                            response.write(JSON.stringify({"paging":{"total":4,"limit":5,"offset":0},"results":[{"payment":{"id":65543725,"site_id":"MLB","date_created":dateNow,"date_approved":"2011-11-18T11:15:46.000-04:00","last_modified":"2011-11-18T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":68397902,"email":"pagamento@aikade.com","nickname":"AIKADE","first_name":"BROSZ COBRANCAS DE INTERNET","last_name":"BROSZ","phone":{"area_code":"11","number":"11","extension":null}},"payer_id":14317716,"external_reference":"382026","reason":"Aikade","transaction_amount":59.9,"total_paid_amount":59.9,"currency_id":"BRL","shipping_cost":34.5,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":null,"finance_charge":0,"installments":3,"buyer_fee":9.99,"marketplace":"NONE"}},{"payment":{"id":77029843,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T18:49:00.000-04:00","last_modified":"2012-01-11T16:21:49.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"21","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4G 4S","transaction_amount":139.9,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":15.6,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":13.98,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":77041426,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-01-09T19:05:39.000-04:00","last_modified":"2012-01-19T00:00:00.000-04:00","operation_type":"regular_payment","collector":{"id":24898973,"email":"ro.escramo@gmail.com","nickname":"RE.BRANDAO2003","first_name":"Rosalina","last_name":"Escramozina","phone":{"area_code":"21","number":"83979693","extension":null}},"payer_id":14317716,"external_reference":"705146897","reason":"Element Case Vapor Pro Spectra E Black Ops P\\/ Iphone 4g 4s","transaction_amount":139.9,"total_paid_amount":169.48,"currency_id":"BRL","shipping_cost":15.6,"status":"refunded","status_detail":"refunded","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"1409","finance_charge":29.58,"installments":3,"buyer_fee":9.99,"marketplace":"MELI"}},{"payment":{"id":425331915,"site_id":"MLB","date_created":dateNow,"date_approved":"2012-07-25T10:35:17.000-04:00","last_modified":"2012-07-25T14:06:21.000-04:00","operation_type":"regular_payment","collector":{"id":45657320,"email":"thia2008@hotmail.com","nickname":"THIAHOT","first_name":"Thiara","last_name":"Oliveira Nascimento","phone":{"area_code":"11","number":"11 28073992","extension":null}},"payer_id":14317716,"external_reference":"723154740","reason":"Lavadora De Alta Press\\u00E3o Lava Jato 127v","transaction_amount":229,"total_paid_amount":null,"currency_id":"BRL","shipping_cost":43,"status":"approved","status_detail":"accredited","payment_type":"credit_card","payment_method_id":"visa","last_four_digits":"358","finance_charge":35.33,"installments":6,"buyer_fee":13.99,"card_id":40162155,"marketplace":"MELI"}}]}));
                    } else {
                        response.write(JSON.stringify({"paging":{"total":0,"limit":1,"offset":0},"results":[]}));
                    }
                }

                response.end();
        },

        getv1LastPayment : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            var data = url.parse(request.url, true).query;

            if (data["id"] == 112){
                response.write(JSON.stringify({"paging":{"total":1,"limit":30,"offset":0},"results":[{"id":112,"api_version":"2","date_created":"2015-09-09T08:42:21.000-04:00","date_approved":"2015-09-09T08:42:23.000-04:00","date_last_updated":"2015-09-09T08:42:23.000-04:00","money_release_date":null,"collector":{"id":18676287,"first_name":"ClickBus","phone":{"extension":"","area_code":"   ","number":"       "},"email":"payments@clickbus.com","nickname":"CLICKBUS","last_name":"Bus Servi\\u00E7os Agendamento Ltda"},"operation_type":"regular_payment","issuer_id":24,"payment_method_id":"master","payment_type_id":"credit_card","status":"approved","status_detail":"accredited","currency_id":"BRL","description":"Viagem de Goiania, GO para Alvorada do Norte, GO - Pedido: L5473P","live_mode":true,"site_id":"MLB","transaction_id":"716513014_3632387576777f7e6e67","coupon_id":null,"risk_execution_id":13149775330,"available_actions":[],"payer":{"id":1932401,"first_name":"Murilo","phone":{"extension":"","area_code":"62","number":"82236569"},"email":"murilojcarmo@gmail.com","nickname":"MJDOCARMO","identification":{"number":"","type":null},"last_name":"Jose do carmo","type":"guest"},"order":{},"external_reference":"1207077","transaction_amount":77.68,"transaction_amount_refunded":0,"transaction_amount_refunded_collector":0,"coupon_amount":0,"shipping_cost":0,"differential_pricing_id":19458113,"transaction_details":{"net_received_amount":72.4,"total_paid_amount":77.68,"overpaid_amount":0,"external_resource_url":null,"installment_amount":25.89,"financial_institution":null,"payment_method_reference_id":null},"captured":true,"binary_mode":false,"call_for_authorize_id":null,"card":{"id":null,"first_six_digits":"554927","expiration_month":11,"cardholder":{"identification":{"number":"017.120.08102","type":"CPF"},"name":"Murilo Jose Carmo"},"expiration_year":2020,"date_created":"2015-09-09T04:42:23.831-04:00","date_last_updated":"2015-09-09T04:42:23.832-04:00","last_four_digits":"0173"},"statement_descriptor":"MERCADOPAGO*ClickBus","installments":3,"notification_url":null,"refunds":[],"additional_info":{"payer":{"first_name":"Murilo","phone":{"area_code":null,"number":"(62) 9670-8062"},"address":null,"registration_date":null,"last_name":"Jose do Carmo"},"items":[{"id":1902967,"title":"Passagem de &ocirc;nibus de Goiania, GO para Alvorada do Norte, GO","picture_url":null,"description":"Origem: Goiania, GO - Destino: Alvorada do Norte, GO - Partida: 09/09/2015 13:00 - Chegada: 09/09/2015 20:30 - Passageiro: Murilo Jose do Carmo","category_id":null,"quantity":1,"unit_price":65}],"shipments":{"receiver_address":{"floor":null,"zip_code":5700,"street_name":"Av. San Martin","apartment":null}}},"fee_details":[{"amount":3.1,"fee_payer":"collector","type":"mercadopago_fee"},{"amount":2.18,"fee_payer":"collector","type":"financing_fee"}]}]}));
                response.end();
                return;
            }

            if (data["id"] == 113){
                response.write(JSON.stringify({"paging": {"total": 1, "limit": 30, "offset": 0 }, "results": [{"id": 113, "api_version": "2", "date_created": "2015-09-09T08:42:21.000-04:00", "date_approved": "2015-09-09T08:42:23.000-04:00", "date_last_updated": "2015-09-09T08:42:23.000-04:00", "money_release_date": null, "collector": {"id": 18676287, "first_name": "ClickBus", "phone": {"extension": "", "area_code": "   ", "number": "       "}, "email": "payments@clickbus.com", "nickname": "CLICKBUS", "last_name": "Bus Servi\\u00E7os Agendamento Ltda"}, "operation_type": "regular_payment", "issuer_id": 24, "payment_method_id": "master", "payment_type_id": "credit_card", "status": "approved", "status_detail": "accredited", "currency_id": "BRL", "description": "Viagem de Goiania, GO para Alvorada do Norte, GO - Pedido: L5473P", "live_mode": true, "site_id": "MLB", "transaction_id": "716513014_3632387576777f7e6e67", "coupon_id": null, "risk_execution_id": 13149775330, "available_actions": [], "payer": {"id": 1932401, "first_name": "Murilo", "phone": {"extension": "", "area_code": "62", "number": "82236569"}, "email": "murilojcarmo@gmail.com", "nickname": "MJDOCARMO", "identification": {"number": "", "type": null }, "last_name": "Jose do carmo", "type": "guest"}, "order": {}, "external_reference": "1207077", "transaction_amount": 77.68, "transaction_amount_refunded": 0, "transaction_amount_refunded_collector": 0, "coupon_amount": 0, "shipping_cost": 0, "differential_pricing_id": 19458113, "transaction_details": {"net_received_amount": 72.4, "total_paid_amount": 77.68, "overpaid_amount": 0, "external_resource_url": null, "installment_amount": 25.89, "financial_institution": null, "payment_method_reference_id": null }, "captured": true, "binary_mode": false, "call_for_authorize_id": null, "card": {"id": null, "first_six_digits": "554927", "expiration_month": 11, "cardholder": {"identification": {"number": "017.120.08102", "type": "CPF"}, "name": "Murilo Jose Carmo"}, "expiration_year": 2020, "date_created": "2015-09-09T04:42:23.831-04:00", "date_last_updated": "2015-09-09T04:42:23.832-04:00", "last_four_digits": "0173"}, "statement_descriptor": "MERCADOPAGO*ClickBus", "installments": 3, "notification_url": null, "refunds": [], "additional_info": {"payer": {"first_name": "Murilo", "phone": {"area_code": null, "number": "(62) 9670-8062"}, "address": null, "registration_date": null, "last_name": "Jose do Carmo"}, "items": [{"id": 1902967, "title": "Passagem de &ocirc;nibus de Goiania, GO para Alvorada do Norte, GO", "picture_url": null, "description": "Origem: Goiania, GO - Destino: Alvorada do Norte, GO - Partida: 09/09/2015 13:00 - Chegada: 09/09/2015 20:30 - Passageiro: Murilo Jose do Carmo", "category_id": null, "quantity": 1, "unit_price": 65 } ], "shipments": {"receiver_address": {"floor": null, "zip_code": null, "street_name": null, "apartment": null } } }, "fee_details": [{"amount": 3.1, "fee_payer": "collector", "type": "mercadopago_fee"}, {"amount": 2.18, "fee_payer": "collector", "type": "financing_fee"} ] } ] }));
                response.end();
                return;
            }

            if (data["status"] == "approved"){
                response.write(JSON.stringify({"paging": {"total": 1, "limit": 30, "offset": 0 }, "results": [{"id": 113, "api_version": "2", "date_created": "2015-09-09T08:42:21.000-04:00", "date_approved": "2015-09-09T08:42:23.000-04:00", "date_last_updated": "2015-09-09T08:42:23.000-04:00", "money_release_date": null, "collector": {"id": 18676287, "first_name": "ClickBus", "phone": {"extension": "", "area_code": "   ", "number": "       "}, "email": "payments@clickbus.com", "nickname": "CLICKBUS", "last_name": "Bus Servi\\u00E7os Agendamento Ltda"}, "operation_type": "regular_payment", "issuer_id": 24, "payment_method_id": "master", "payment_type_id": "credit_card", "status": "approved", "status_detail": "accredited", "currency_id": "BRL", "description": "Viagem de Goiania, GO para Alvorada do Norte, GO - Pedido: L5473P", "live_mode": true, "site_id": "MLB", "transaction_id": "716513014_3632387576777f7e6e67", "coupon_id": null, "risk_execution_id": 13149775330, "available_actions": [], "payer": {"id": 1932401, "first_name": "Murilo", "phone": {"extension": "", "area_code": "62", "number": "82236569"}, "email": "murilojcarmo@gmail.com", "nickname": "MJDOCARMO", "identification": {"number": "", "type": null }, "last_name": "Jose do carmo", "type": "guest"}, "order": {}, "external_reference": "1207077", "transaction_amount": 77.68, "transaction_amount_refunded": 0, "transaction_amount_refunded_collector": 0, "coupon_amount": 0, "shipping_cost": 0, "differential_pricing_id": 19458113, "transaction_details": {"net_received_amount": 72.4, "total_paid_amount": 77.68, "overpaid_amount": 0, "external_resource_url": null, "installment_amount": 25.89, "financial_institution": null, "payment_method_reference_id": null }, "captured": true, "binary_mode": false, "call_for_authorize_id": null, "card": {"id": null, "first_six_digits": "554927", "expiration_month": 11, "cardholder": {"identification": {"number": "017.120.08102", "type": "CPF"}, "name": "Murilo Jose Carmo"}, "expiration_year": 2020, "date_created": "2015-09-09T04:42:23.831-04:00", "date_last_updated": "2015-09-09T04:42:23.832-04:00", "last_four_digits": "0173"}, "statement_descriptor": "MERCADOPAGO*ClickBus", "installments": 3, "notification_url": null, "refunds": [], "additional_info": {"payer": {"first_name": "Murilo", "phone": {"area_code": null, "number": "(62) 9670-8062"}, "address": null, "registration_date": null, "last_name": "Jose do Carmo"}, "items": [{"id": 1902967, "title": "Passagem de &ocirc;nibus de Goiania, GO para Alvorada do Norte, GO", "picture_url": null, "description": "Origem: Goiania, GO - Destino: Alvorada do Norte, GO - Partida: 09/09/2015 13:00 - Chegada: 09/09/2015 20:30 - Passageiro: Murilo Jose do Carmo", "category_id": null, "quantity": 1, "unit_price": 65 } ], "shipments": {"receiver_address": {"floor": null, "zip_code": null, "street_name": null, "apartment": null } } }, "fee_details": [{"amount": 3.1, "fee_payer": "collector", "type": "mercadopago_fee"}, {"amount": 2.18, "fee_payer": "collector", "type": "financing_fee"} ] } ] }));
                response.end();
                return;
            }

            response.write(JSON.stringify({"paging":{"total":0,"limit":1,"offset":0},"results":[]}));
            response.end();
            return;
        },

        getLegacyPayment : function(request, response){
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

            var data = url.parse(request.url, true).query;

            var payment_id=data["payment_id"];
            if(payment_id== 1266724352 || payment_id== 1263255410 || payment_id== 1264439282 || payment_id == 1264059772 || payment_id== 1262911484) {
                    response.write(JSON.stringify({"payer_id":189109309,"payment_id":payment_id,"ow_payment_id":payment_id}))

            } else if(data["payment_id"] == 65543725){

                    response.write(JSON.stringify({"payer_id":12345,"payment_id":65543725,"ow_payment_id":4246435}));

            } else if(data["payment_id"] == 9685321){

                    if(global.retryPayLegacy == 0){
                        jsonHandler.showInternalServerErrorResponse({"message":"Internal Error","status":500}, response);
                        global.retryPayLegacy++;
                        return;
                    }

                    response.write(JSON.stringify({"payer_id":555666777,"payment_id":9685321,"ow_payment_id":7456397}));
            } else{
                    response.writeHead(404, {'Content-Type' : 'application/json; charset=utf-8'});
                    response.write(JSON.stringify({"code":130,"message":"Invalid Id"}));
            }

            response.end();

        },

        getBackOffice : function(request, response){
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

            var data = url.parse(request.url, true).query;

            if(data["payment_id"] == 1023707357)
            {
                    response.write(JSON.stringify({"paging":{"total":1,"limit":30,"offset":0},"results":[{"payment_date":"2015-01-29T00:00:00.000-0400","last_status":"processing|","status":"processed","site_id":"MLB","date_created":"2015-01-29T10:10:47.138-0400","home_banking":false,"bank_code":"237","file_name":"CB290115100000.ret","version":2,"id":6248113447,"payer_id":27849125,"last_modified":"2015-01-29T10:10:47.138-0400","total_paid_amount":69.85,"file_id":6248055396,"payment_reference":817705713,"payment_id":1023707357,"process_result":"","payment_method":"bolbradesco","post_processing_information":{"customer_status_mapping":"accredited"},"agency_code":"2922"}]}));

            } else if(data["payment_id"] == 889103916){

                    response.write(JSON.stringify({"paging":{"total":2,"limit":30,"offset":0},"results":[{"payment_date":"2014-11-03T00:00:00.000-0400","last_status":"processing|","status":"processed","site_id":"MLB","date_created":"2014-11-04T13:55:21.904-0400","home_banking":false,"bank_code":"001","file_name":"CB041114080941.ret","version":2,"id":5535848709,"payer_id":105542066,"last_modified":"2014-11-04T13:55:21.904-0400","total_paid_amount":10.5,"file_id":5535971197,"payment_reference":731534669,"payment_id":889103916,"process_result":"","payment_method":"bolbradesco","post_processing_information":{"customer_status_mapping":"accredited"},"agency_code":"0756"},{"payment_date":"2014-11-03T00:00:00.000-0400","last_status":"processing|","status":"processed","site_id":"MLB","date_created":"2014-11-04T13:55:21.904-0400","home_banking":false,"bank_code":"001","file_name":"CB041114080941.ret","version":2,"id":5535848709,"payer_id":105542066,"last_modified":"2014-11-04T13:55:21.904-0400","total_paid_amount":10.5,"file_id":5535971197,"payment_reference":731534669,"payment_id":889103916,"process_result":"","payment_method":"bolbradesco","post_processing_information":{"customer_status_mapping":"accredited"},"agency_code":"0008"}]}));

            } else if(data["payment_id"] == 889103917){

                    response.write(JSON.stringify({"paging":{"total":1,"limit":30,"offset":0},"results":[{"payment_date":"2014-11-03T00:00:00.000-0400","last_status":"processing|","status":"processed","site_id":"MLB","date_created":"2014-11-04T13:55:21.904-0400","home_banking":false,"bank_code":"001","file_name":"CB041114080941.ret","version":2,"id":5535848709,"payer_id":105542066,"last_modified":"2014-11-04T13:55:21.904-0400","total_paid_amount":10.5,"file_id":5535971197,"payment_reference":731534669,"payment_id":889103916,"process_result":"","payment_method":"bolbradesco","post_processing_information":{"customer_status_mapping":"accredited"},"agency_code":"0757"}]}));
            } else{
                    response.writeHead(404, {'Content-Type' : 'application/json; charset=utf-8'});
                    response.write(JSON.stringify({"code":130,"message":"Invalid Id"}));
            }

            response.end();
        },

        getAgencyInfo : function(request, response){
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

            var data = url.parse(request.url, true).query;

            if(data["bank_code"] == "237" && data["agency_code"] == "2922")
            {
                    response.write(JSON.stringify([{"cnpj":"60746948","sequential_cnpj":"5822","dv_cnpj":"27","bank_code":"237","institution_name":"BANCO BRADESCO S.A. ","cod_segment":"Banco Múltiplo","agency_code":"2922","agency_name":"BAIRRO BENFICA,URB.RIO DE JANEIRO, RJ ","adress":"RUA CAPITAO FELIX, 111 - LOJAS SLJ E SSL","cod_number":null,"complement":null,"neighborhood":"BENFICA ","cep":"20.920-310","city":"RIO DE JANEIRO","uf":"RJ","start_date":"2000-03-16T00:00:00.000-0400","ddd":"21","phone":"38602196"}]));

            } else if(data["bank_code"] == "001" && data["agency_code"] == "0008"){

                    response.write(JSON.stringify([{"cnpj":"000000","sequential_cnpj":"8","dv_cnpj":"68","bank_code":"001","institution_name":"BANCO DO BRASIL S.A.","cod_segment":"Banco do Brasil - Banco Múltiplo","agency_code":"0008","agency_name":"S.PUBLICO FORTALEZA ","adress":"AV.SANTOS DUMONT,2828 ","cod_number":null,"complement":"5.ANDAR ","neighborhood":"ALDEOTA ","cep":"60.150-162","city":"FORTALEZA ","uf":"CE","start_date":"1913-08-14T00:00:00.000-0400","ddd":"85","phone":"33660800"}]));

            } else if(data["bank_code"] == "001" && data["agency_code"] == "0756"){

                    response.write(JSON.stringify([{"cnpj":"000000","sequential_cnpj":"756","dv_cnpj":"4","bank_code":"001","institution_name":"BANCO DO BRASIL S.A.","cod_segment":"Banco do Brasil - Banco Múltiplo","agency_code":"0756","agency_name":"PORTAO-CURITIBA ","adress":"R.CARLOS DIETZSCH,137 ","cod_number":13,"complement":"VIA RAPIDA CENTRO-BAIRRO","neighborhood":"PORTAO","cep":"80.330-000","city":"CURITIBA","uf":"PR","start_date":"1972-01-03T00:00:00.000-0400","ddd":"41","phone":"33141000"}]));

            } else if(data["bank_code"] == "001" && data["agency_code"] == "0757"){

                    response.write(JSON.stringify([{"cnpj":"7237373","sequential_cnpj":"8","dv_cnpj":"4","bank_code":"004","institution_name":"BANCO DO NORDESTE DO BRASIL S.A.","cod_segment":"Banco Múltiplo","agency_code":"0008","agency_name":"BEZERROS","adress":"RUA CORONEL BEZERRA, 147","cod_number":null,"complement":null,"neighborhood":"CENTRO","cep":"55.660-000","city":"BEZERROS","uf":"PE","start_date":"1964-06-18T00:00:00.000-0400","ddd":"81","phone":"37281234"}
                        ,{"cnpj":"7237373","sequential_cnpj":"221","dv_cnpj":"7","bank_code":"004","institution_name":"BANCO DO NORDESTE DO BRASIL S.A.","cod_segment":"Banco Múltiplo","agency_code":"0008","agency_name":"AGÊNCIA CASCAVEL","adress":"AVENIDA PREFEITO VITORIANO ANTUNES","cod_number":"2397.0","complement":null,"neighborhood":"CENTRO","cep":"62.850-000","city":"CASCAVEL","uf":"CE","start_date":"2012-10-18T00:00:00.000-0400","ddd":"85","phone":"33349300"}
                        ]));
            } else{
                    response.writeHead(404, {'Content-Type' : 'application/json; charset=utf-8'});
                    response.write(JSON.stringify({"code":130,"message":"Invalid Id"}));
            }

            response.end();
        }

};

exports.getLastPayment = paymentSearchController.getLastPayment;
exports.ping = paymentSearchController.ping;
exports.getLegacyPayment = paymentSearchController.getLegacyPayment;
exports.getBackOffice = paymentSearchController.getBackOffice;
exports.getAgencyInfo = paymentSearchController.getAgencyInfo;

// Mappings
urlMapping.add ([
    {
        pattern: '^/payments/search$',
        action: {
            'GET':paymentSearchController.getLastPayment
        }
    },{
        pattern: '^/payments/search/echo',
        action: {
            'GET':paymentSearchController.ping
        }
    },{
        pattern: '^/payments/legacy/search$',
        action: {
            'GET':paymentSearchController.getLegacyPayment
        }
    },{
        pattern: '^/payments/backoffice/search$',
        action: {
            'GET':paymentSearchController.getBackOffice
        }
    },{
        pattern: '^/offline_payment_agencies/search$',
        action: {
            'GET':paymentSearchController.getAgencyInfo
        }
    },{
        pattern: '^/v1/payments/search$',
        action: {
            'GET':paymentSearchController.getv1LastPayment
        }
    }
]);
