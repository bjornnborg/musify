var urlMapping = require("./urlMapping");

var querystring = require("querystring");
var accountUniquenessController = require("./controllers/accountUniquenessController");
var identityValidationController = require("./controllers/identityValidationController");
var applicationController = require("./controllers/applicationController");
var deviceMLController = require("./controllers/deviceMLController");
var applicationSubscriptionController = require("./controllers/applicationSubscriptionController");
var accessTokenController = require("./controllers/accessTokenController");
var temporalGrantController = require("./controllers/temporalGrantController");
var usersController = require("./controllers/usersController");
var sessionController = require("./controllers/sessionController");

var fraudSessionController = require("./controllers/fraudSessionController");


var sessionDataController = require("./controllers/sessionDataController");
var authenticationAttemptController = require("./controllers/authenticationAttemptController");
var siteDomainsController = require("./controllers/siteDomainsController");
var secondFactorTokenController = require("./controllers/secondFactorTokenController");
var veriSignSecondFactorController = require("./controllers/veriSignSecondFactorController");
var secondFactorTransactionsController = require("./controllers/secondFactorTransactionsController");
var mpRestrictionsController = require("./controllers/mpRestrictionsController");
var categoriesController = require("./controllers/categoriesController");
var sitesController = require("./controllers/sitesController");
var ldapAuthenticationController = require("./controllers/ldapAuthenticationController");
var arfEnrollmentController = require("./controllers/arfEnrollmentController");
var oldWorldSecretQuestionController = require("./controllers/oldWorldSecretQuestionController");
var emailsController = require("./controllers/emailsController");
var locationController = require("./controllers/locationController");
var collectionsController = require("./controllers/collectionsController");
var crmController = require("./controllers/crmController");
var paymentSearchController = require("./controllers/paymentSearchController");
var validationServiceController = require("./controllers/validationServiceController");
var owRestrictionController = require("./controllers/owRestrictionController");
var cardsController = require("./controllers/cardsController");
var cardsv2Controller = require("./controllers/cardsv2Controller");
var facebookController = require("./controllers/facebookController");
var mlPaymentsController = require("./controllers/mlPaymentsController");
var moderationsController = require("./controllers/moderationsController");
var crossesController = require("./controllers/crossesController");
var owScoringCreditCardController = require("./controllers/owScoringCreditCardController");
var scoringTreeController = require("./controllers/scoringTreeController");
var threatMetrixController = require("./controllers/threatMetrixController");
var oldWorldBlackListController = require("./controllers/oldWorldBlackListController");
var melicloudController = require("./controllers/melicloudController");
var ivsController = require("./controllers/ivsController");
var paymentsController = require("./controllers/paymentsController");
var fraudScoringController = require("./controllers/fraudScoringController");
var fraudCoreController = require("./controllers/fraudCoreController");
var currencyController = require("./controllers/currencyController");
var scoringOffController = require("./controllers/scoringOffController");
var itemSearchController = require("./controllers/itemSearchController");
var owBlackListController = require("./controllers/owBlackListController");
var scoringController = require("./controllers/scoringController");
var bigqueueController = require("./controllers/bigqueueController");
var spnController = require("./controllers/spnController");
var configController = require("./controllers/configController");
var fraudlistController = require("./controllers/fraudlistController");
var herculesController = require("./controllers/herculesController");
var testScoringJobsController = require("./controllers/testScoringJobsController"); // fverdini
var configController = require("./controllers/configController");
//jazcurra - Gateway mock - formccdata documentos en cero:
var gatewayTransactionsController = require("./controllers/gatewayTransactionsController");
var gatewayFormsDataController = require("./controllers/gatewayFormsDataController");
var gatewayController = require("./controllers/gatewayController");
var inboundCallController = require("./controllers/inboundCallController");
var userMarksController = require("./controllers/userMarksController");
//
var deviceController = require("./controllers/deviceController");
var shippingController = require("./controllers/shippingController");
var inkiruController = require("./controllers/inkiruController");


var emailProvidersController = require("./controllers/emailProvidersController");
var scoringUtilsController = require("./controllers/scoringUtilsController");
var analyticsExportController = require("./controllers/analyticsExportController");
var withdrawController = require("./controllers/withdrawController");
var fraudlistSubscriberController = require("./controllers/fraudlistSubscriberController");

var questionsController = require("./controllers/questionsController");

var mantikaController = require("./controllers/mantikaController");


var pmtHstIndexController = require("./controllers/pmtHstIndexController");
var paymentHistoryController = require("./controllers/paymentHistoryController");

var ordersController = require("./controllers/ordersController");

var dejavu = require("./controllers/dejavuController");

var mediationsController = require("./controllers/mediationsController");
var zeusController = require("./controllers/zeusController");
var spoofedUserController = require("./controllers/spoofedUserController");

var mercadopagoAccountController = require("./controllers/mercadopagoAccountController");

//var deviceProfileController = require("./controllers/deviceProfileController");
var manualReviewController = require("./controllers/manualReviewController");
var keystrokeController = require("./controllers/keystrokeController");
var instoresController = require("./controllers/instoresController");
var bureauController = require("./controllers/bureauController");

var chargebacksController = require("./controllers/chargebacksController");

var preapprovalController = require("./controllers/preapprovalController");
var mitreController  = require("./controllers/mitreController");
var rfcController  = require("./controllers/rfcController");
var riskController  = require("./controllers/riskController");
var vectorController  = require("./controllers/vectorController");

var url = require('url');

var router = {
     handle: function(request, response) {
        var handlerFound = false;
        var urlObject = url.parse(request.url);

        var pathname = urlObject.pathname;
        for (var i in global.urlHandlers) {
            var h = global.urlHandlers[i];

            if (h.pattern.exec(pathname)) {
                var handler =
                    (typeof h.action[request.method] == "function") ?
                        h.action[request.method] :
                    (
                        (typeof h.action == "function") ?
                            h.action:
                            function () {
                                console.log("Request handler is not a function");
                                console.log("Action: " + JSON.stringify (h));
                            }
                    )

                try {
                    handler (request, response);
                } catch(e) {
                    console.log("Error on uri: "+request.url + "e:" + e);
                } 
                if (request.url.indexOf("/ping") == -1) {
                    console.log("(RX:"+h.pattern+") " + request.method + ' -> ' + request.url);
                }
                handlerFound = true;
                break;
            }
        }

        if (!handlerFound) {
            var msg = 'No request handler found for ' + request.url;
            console.log(msg);
            response.writeHead(404, {
                'Content-Type' : 'application/json'
            });
            response.write(msg);
            response.end();
        }

    }
};

exports.handle = router.handle;
