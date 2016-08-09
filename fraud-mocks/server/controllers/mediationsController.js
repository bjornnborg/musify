var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var mediationsController = {

    ping : function(request, response) {
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });
        response.write(JSON.stringify({'msg':'pong'}));
        response.end();        
    },

    searchClaims : function(request, response){

        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        var url_parts = url.parse(request.url,true);

        var complainant_id = url_parts.query.complainant_id;
        var respondent_id = url_parts.query.respondent_id;

        response.write(JSON.stringify({"paging":{"offset":0,"limit":1,"total":785},"data":[{"respondent_id":51206166,"date_dispute_opened":null,"date_claim_closed":"2013-06-21T17:50:45.000-0400","date_dispute_closed":null,"date_created":"2013-06-19T18:02:37.056-0400","reason_detail":"CELULAR NÃO FUNCIONA COM PROBEMA","resolution":{"admin_id": null, "applied_to": ["complainant"], "bpp_applied": true, "date_created": "2014-02-28T07:16:16.194-0400", "last_updated": "2014-02-28T07:16:16.194-0400", "reason_id": null},"order_id":771869125,"complainant_role":"payer","amount":117.56,"id":47081313,"reason_claim_opened":"other","balance_block_status":"done_unavailable","reason_claim_closed":null,"evidences":[{"ar_evidence":{"attachments":[],"bank_account_holder_name":"Jos\u00e9CrystianTinocoGuerrero","bank_account_number":"123 456 123 456 890 207 656","bank_name":"Banorte","clabe":null,"date_paid":"06-Diciembre","message":null,"payment_amount":"1000.00","payment_detail":null,"payment_method":"DEP_O_TRANS","payment_receiver":null}}],"interactions":{"last_action":null,"last_action_responsible":null,"current_responsible":null,"available_actions":{"respondent":{"actions":[],"timeout":null},"mediator":{"actions":[],"timeout":null},"complainant":{"actions":[],"timeout":null}}},"fraud_status":null,"status":"claim_closed","sub_status":"initialized","reason_id":"other","site_id":"MLB","reason_dispute_closed":null,"status_detail":"by_complainant","complainant_id":16844255,"reason_dispute_opened":null,"date_claim_opened":"2013-06-19T18:02:37.033-0400","payments":[602097399],"last_updated":"2013-06-21T18:10:10.087-0400"},{"respondent_id":51206166,"date_dispute_opened":null,"date_claim_closed":"2013-06-21T17:50:45.000-0400","date_dispute_closed":null,"date_created":"2013-06-19T18:02:37.056-0400","reason_detail":"CELULAR NÃO FUNCIONA COM PROBEMA","resolution":{"admin_id": null, "applied_to": ["complainant"], "bpp_applied": true, "date_created": "2014-02-28T07:16:16.194-0400", "last_updated": "2014-02-28T07:16:16.194-0400", "reason_id": null},"order_id":771869125,"complainant_role":"payer","amount":117.56,"id":47081313,"reason_claim_opened":"other","balance_block_status":"done_unavailable","reason_claim_closed":null,"evidences":[{"br_evidence":{"attachments":[],"bank_account_holder_name":"Jos\u00e9CrystianTinocoGuerrero","bank_account_number":"1234561234 568902 07651","bank_name":"Banorte","clabe":null,"date_paid":"06-Diciembre","message":null,"payment_amount":"1000.00","payment_detail":null,"payment_method":"DEP_O_TRANS","payment_receiver":null}}],"interactions":{"last_action":null,"last_action_responsible":null,"current_responsible":null,"available_actions":{"respondent":{"actions":[],"timeout":null},"mediator":{"actions":[],"timeout":null},"complainant":{"actions":[],"timeout":null}}},"fraud_status":null,"status":"claim_closed","sub_status":"initialized","reason_id":"other","site_id":"MLB","reason_dispute_closed":null,"status_detail":"by_complainant","complainant_id":16844255,"reason_dispute_opened":null,"date_claim_opened":"2013-06-19T18:02:37.033-0400","payments":[602097399],"last_updated":"2013-06-21T18:10:10.087-0400"},{"respondent_id":51206166,"date_dispute_opened":null,"date_claim_closed":"2013-06-21T17:50:45.000-0400","date_dispute_closed":null,"date_created":"2013-06-19T18:02:37.056-0400","reason_detail":"CELULAR NÃO FUNCIONA COM PROBEMA","resolution":{"admin_id": null, "applied_to": ["complainant"], "bpp_applied": true, "date_created": "2014-02-28T07:16:16.194-0400", "last_updated": "2014-02-28T07:16:16.194-0400", "reason_id": null},"order_id":771869125,"complainant_role":"payer","amount":117.56,"id":47081313,"reason_claim_opened":"other","balance_block_status":"done_unavailable","reason_claim_closed":null,"evidences":[{"mx_evidence":{"attachments":[],"bank_account_holder_name":"Jos\u00e9CrystianTinocoGuerrero","bank_account_number":"CLAVE.123456123456890207652","bank_name":"Banorte","clabe":null,"date_paid":"06-Diciembre","message":null,"payment_amount":"1000.00","payment_detail":null,"payment_method":"DEP_O_TRANS","payment_receiver":null}}],"interactions":{"last_action":null,"last_action_responsible":null,"current_responsible":null,"available_actions":{"respondent":{"actions":[],"timeout":null},"mediator":{"actions":[],"timeout":null},"complainant":{"actions":[],"timeout":null}}},"fraud_status":null,"status":"claim_closed","sub_status":"initialized","reason_id":"other","site_id":"MLB","reason_dispute_closed":null,"status_detail":"by_complainant","complainant_id":16844255,"reason_dispute_opened":null,"date_claim_opened":"2013-06-19T18:02:37.033-0400","payments":[602097399],"last_updated":"2013-06-21T18:10:10.087-0400"},{"respondent_id":51206166,"date_dispute_opened":null,"date_claim_closed":"2013-06-21T17:50:45.000-0400","date_dispute_closed":null,"date_created":"2013-06-19T18:02:37.056-0400","reason_detail":"CELULAR NÃO FUNCIONA COM PROBEMA","resolution":{"admin_id": null, "applied_to": ["complainant"], "bpp_applied": true, "date_created": "2014-02-28T07:16:16.194-0400", "last_updated": "2014-02-28T07:16:16.194-0400", "reason_id": null},"order_id":771869125,"complainant_role":"payer","amount":117.56,"id":47081313,"reason_claim_opened":"other","balance_block_status":"done_unavailable","reason_claim_closed":null,"evidences":[{"dflt_evidence":{"attachments":[],"bank_account_holder_name":"Jos\u00e9CrystianTinocoGuerrero","bank_account_number":"123 456 123 456 890 207 653","bank_name":"Banorte","clabe":null,"date_paid":"06-Diciembre","message":null,"payment_amount":"1000.00","payment_detail":null,"payment_method":"DEP_O_TRANS","payment_receiver":null}}],"interactions":{"last_action":null,"last_action_responsible":null,"current_responsible":null,"available_actions":{"respondent":{"actions":[],"timeout":null},"mediator":{"actions":[],"timeout":null},"complainant":{"actions":[],"timeout":null}}},"fraud_status":null,"status":"claim_closed","sub_status":"initialized","reason_id":"other","site_id":"MLB","reason_dispute_closed":null,"status_detail":"by_complainant","complainant_id":16844255,"reason_dispute_opened":null,"date_claim_opened":"2013-06-19T18:02:37.033-0400","payments":[602097399],"last_updated":"2013-06-21T18:10:10.087-0400"},{"respondent_id":51206166,"date_dispute_opened":null,"date_claim_closed":"2013-06-21T17:50:45.000-0400","date_dispute_closed":null,"date_created":"2013-06-19T18:02:37.056-0400","reason_detail":"CELULAR NÃO FUNCIONA COM PROBEMA","resolution":null, "order_id":771869125,"complainant_role":"payer","amount":117.56,"id":47081313,"reason_claim_opened":"other","balance_block_status":"done_unavailable","reason_claim_closed":null,"evidences":[{"dflt_evidence":{"attachments":[],"bank_account_holder_name":"Jos\u00e9CrystianTinocoGuerrero","bank_account_number":"123 456 123 456 890 207 655","bank_name":"Banorte","clabe":null,"date_paid":"06-Diciembre","message":null,"payment_amount":"1000.00","payment_detail":null,"payment_method":"DEP_O_TRANS","payment_receiver":null}}],"interactions":{"last_action":null,"last_action_responsible":null,"current_responsible":null,"available_actions":{"respondent":{"actions":[],"timeout":null},"mediator":{"actions":[],"timeout":null},"complainant":{"actions":[],"timeout":null}}},"fraud_status":null,"status":"claim_closed","sub_status":"initialized","reason_id":"other","site_id":"MLB","reason_dispute_closed":null,"status_detail":"by_complainant","complainant_id":16844255,"reason_dispute_opened":null,"date_claim_opened":"2013-06-19T18:02:37.033-0400","payments":[602097399],"last_updated":"2013-06-21T18:10:10.087-0400"},{"respondent_id":51206166,"date_dispute_opened":null,"date_claim_closed":"2013-06-21T17:50:45.000-0400","date_dispute_closed":null,"date_created":"2013-06-19T18:02:37.056-0400","reason_detail":"CELULAR NÃO FUNCIONA COM PROBEMA","resolution":{"admin_id": null, "applied_to": ["respondent"], "bpp_applied": true, "date_created": "2014-02-28T07:16:16.194-0400", "last_updated": "2014-02-28T07:16:16.194-0400", "reason_id": null},"order_id":771869125,"complainant_role":"payer","amount":117.56,"id":47081313,"reason_claim_opened":"other","balance_block_status":"done_unavailable","reason_claim_closed":null,"evidences":[{"dflt_evidence":{"attachments":[],"bank_account_holder_name":"Jos\u00e9CrystianTinocoGuerrero","bank_account_number":"123 456 123 456 890 207 654","bank_name":"Banorte","clabe":null,"date_paid":"06-Diciembre","message":null,"payment_amount":"1000.00","payment_detail":null,"payment_method":"DEP_O_TRANS","payment_receiver":null}}],"interactions":{"last_action":null,"last_action_responsible":null,"current_responsible":null,"available_actions":{"respondent":{"actions":[],"timeout":null},"mediator":{"actions":[],"timeout":null},"complainant":{"actions":[],"timeout":null}}},"fraud_status":null,"status":"claim_closed","sub_status":"initialized","reason_id":"other","site_id":"MLB","reason_dispute_closed":null,"status_detail":"by_complainant","complainant_id":16844255,"reason_dispute_opened":null,"date_claim_opened":"2013-06-19T18:02:37.033-0400","payments":[602097399],"last_updated":"2013-06-21T18:10:10.087-0400"},{"respondent_id":51206166,"date_dispute_opened":null,"date_claim_closed":"2013-06-21T17:50:45.000-0400","date_dispute_closed":null,"date_created":"2013-06-19T18:02:37.056-0400","reason_detail":"CELULAR NÃO FUNCIONA COM PROBEMA","resolution":{"admin_id": null, "applied_to": ["complainant"], "bpp_applied": true, "date_created": "2014-02-28T07:16:16.194-0400", "last_updated": "2014-02-28T07:16:16.194-0400", "reason_id": null},"order_id":771869125,"complainant_role":"payer","amount":117.56,"id":47081313,"reason_claim_opened":"other","balance_block_status":"done_unavailable","reason_claim_closed":null,"evidences":[{"dflt_evidence":{"attachments":[],"bank_account_holder_name":"Jos\u00e9CrystianTinocoGuerrero","bank_account_number":"1234568","bank_name":"Banorte","clabe":null,"date_paid":"06-Diciembre","message":null,"payment_amount":"1000.00","payment_detail":null,"payment_method":"DEP_O_TRANS","payment_receiver":null}}],"interactions":{"last_action":null,"last_action_responsible":null,"current_responsible":null,"available_actions":{"respondent":{"actions":[],"timeout":null},"mediator":{"actions":[],"timeout":null},"complainant":{"actions":[],"timeout":null}}},"fraud_status":null,"status":"claim_closed","sub_status":"initialized","reason_id":"other","site_id":"MLB","reason_dispute_closed":null,"status_detail":"by_complainant","complainant_id":16844255,"reason_dispute_opened":null,"date_claim_opened":"2013-06-19T18:02:37.033-0400","payments":[602097399],"last_updated":"2013-06-21T18:10:10.087-0400"}]}));
        response.end();
        return;
    }

};

exports.searchClaims = mediationsController.searchClaims;
exports.ping = mediationsController.ping;

urlMapping.add ([{
        pattern: '^/mediations/claims/search?(\\w+)', 
        action: {
            'GET':mediationsController.searchClaims
       }       
    },
    {
        pattern: '^/mediations/echo',
        action: {
            'GET': mediationsController.ping
        }
    }
  ]);
