var querystring = require("querystring");
var applicationController = require("./controllers/applicationController");
var applicationSubscriptionController = require("./controllers/applicationSubscriptionController");
var accessTokenController = require("./controllers/accessTokenController");
var temporalGrantController = require("./controllers/temporalGrantController");
var deviceProfileController = require("./controllers/deviceProfileController");
var usersController = require("./controllers/usersController");
var sessionController = require("./controllers/sessionController");
var sessionDataController = require("./controllers/sessionDataController");
var authenticationAttemptController = require("./controllers/authenticationAttemptController");
var siteDomainsController = require("./controllers/siteDomainsController");
var secondFactorTokenController = require("./controllers/secondFactorTokenController");
var veriSignSecondFactorController = require("./controllers/veriSignSecondFactorController");
var secondFactorTransactionsController = require("./controllers/secondFactorTransactionsController");
var mpRestrictionsController = require("./controllers/mpRestrictionsController");
var sitesController = require("./controllers/sitesController");
var ldapAuthenticationController = require("./controllers/ldapAuthenticationController");
var arfEnrollmentController = require("./controllers/arfEnrollmentController");
var oldWorldSecretQuestionController = require("./controllers/oldWorldSecretQuestionController");
var emailsController = require("./controllers/emailsController");
var locationController = require("./controllers/locationController");
var collectionsController = require("./controllers/collectionsController");
var crmController = require("./controllers/crmController");
var cardsController = require("./controllers/cardsController");
var currencyConvertionController = require("./controllers/currencyConvertionController");
var testScoringJobsController = require("./controllers/testScoringJobsController"); // fverdini
var testScoringAdminApiController = require("./controllers/testScoringAdminApiController"); // fverdini
//jazcurra - Gateway mock - formccdata documentos en cero:
var gatewayTransactionsController = require("./controllers/gatewayTransactionsController");
var gatewayFormsDataController = require("./controllers/gatewayFormsDataController");
var userMarksController = require("./controllers/userMarksController");
var inkiruController = require("./controllers/inkiruController");
var accountUniquenessController = require("./controllers/accountUniquenessController");
var identityValidationController = require("./controllers/identityValidationController");

var url = require('url');

var urlMapper = {
    handlers : [ {
        uriRegExp : '^/ping$',
        actions : [ {
            method : 'GET',
            handle : applicationController.ping
        } ]
    }, {
        uriRegExp : '^/my_internal/users(\\w+)$',
        actions : [ {
            method : 'GET',
            handle : usersController.ping
        } ]
    },{
        uriRegExp : '^/users/$',
        actions : [ {
            method : 'GET',
            handle : usersController.ping
        } ]
    }, {
        
        uriRegExp : '^/users/[0-9]+/cards$',
        actions : [ {
            method : 'GET',
            handle : cardsController.getCards
        } ]
    }, {
        uriRegExp : '^/countries/.*$',
        actions : [ {
            method : 'GET',
            handle : locationController.getState
        } ]
    }, {
        uriRegExp : '^/states/.*$',
        actions : [ {
            method : 'GET',
            handle : locationController.getCity
        } ]
    }, {
        uriRegExp : '^/cities/(\\w+)$',
        actions : [ {
            method : 'GET',
            handle : locationController.getCityInfo
        } ]
    }, {
        uriRegExp : '^/user/500$',
        actions : [ {
            method : 'POST',
            handle : usersController.activate500User
        } ]
    }, {
        uriRegExp : '^/users/activate$',
        actions : [ {
            method : 'POST',
            handle : usersController.activateUser
        } ]
    }, {
        uriRegExp : '^/users/(\\w+)/default_address$',
        actions : [ {
            method : 'GET',
            handle : usersController.defaultAddress
        } ]
    }, {
        uriRegExp : '^/internal/2fa/transactions(/)?$',
        actions : [ {
            method : 'POST',
            handle : secondFactorTransactionsController.createTransaction
        } ]
    }, {
        uriRegExp : '^/internal/2fa/transactions/(\\w+)?$',
        actions : [ {
            method : 'GET',
            handle : secondFactorTransactionsController.getTransaction
        }, {
            method : 'PUT',
            handle : secondFactorTransactionsController.updateTransaction
        }, {
            method : 'DELETE',
            handle : secondFactorTransactionsController.deleteTransaction
        } ]
    }, {
        uriRegExp : '^/internal/users/.*/2fa/tokens(/)?$',
        actions : [ {
            method : 'GET',
            handle : secondFactorTokenController.getUserTokensInfo
        }, {
            method : 'PUT',
            handle : secondFactorTokenController.activateUser
        } ]
    }, {
        uriRegExp : '^/internal/users/\\w+/2fa/tokens/\\w+$',
        actions : [ {
            method : 'GET',
            handle : secondFactorTokenController.getUserTokenInfo
        }, {
            method : 'DELETE',
            handle : secondFactorTokenController.deleteAssociatedUserTo2fa
        } ]
    }, {
        uriRegExp : '^/internal/users/\\w+/2fa/tokens/otp$',
        actions : [ {
            method : 'POST',
            handle : secondFactorTokenController.validateUser
        } ]
    }, {
        uriRegExp : '^/internal/users/\\w+/2fa/?$',
        actions : [ {
            method : 'GET',
            handle : secondFactorTokenController.getUserStatus
        } ]
    }, {
        uriRegExp : '^/internal/users/\\w+/2fa/reset$',
        actions : [ {
            method : 'GET',
            handle : secondFactorTokenController.resetUser
        } ]
    }, {
        uriRegExp : '^/users/(\\w+)/secondary_authentication_factors/enrollment_request/?$',
        actions : [ {
            method : 'GET',
            handle : arfEnrollmentController.getRequest
        }, {
            method : 'POST',
            handle : arfEnrollmentController.createRequest
        }]
    }, {
        uriRegExp : '^/users/(\\w+)/secondary_authentication_factors/force_enrollment_request/?$',
        actions : [ {
            method : 'DELETE',
            handle : arfEnrollmentController.deleteRequest
        }, {
            method : 'POST',
            handle : arfEnrollmentController.forceCreateRequest
        }]
    },{
        uriRegExp : '^/applications(/)?$',
        actions : [ {
            method : 'POST',
            handle : applicationController.createApp
        } ]
    }, {
        uriRegExp : '^/users/\\w+/applications/\\w+$',
        actions : [ {
            method : 'DELETE',
            handle : applicationSubscriptionController.removeSubscription
        }, {
            method : 'GET',
            handle : applicationSubscriptionController.getSubscription
        } ]
    }, {
        uriRegExp : '^/applications/\\w+$',
        actions : [ {
            method : 'GET',
            handle : applicationController.getApp
        }, {
            method : 'DELETE',
            handle : applicationController.removeApp
        } ]
    }, {
        uriRegExp : '^/users/\\w+/applications$',
        actions : [ {
            method : 'POST',
            handle : applicationSubscriptionController.createSubscription
        } ]
    }, {
        uriRegExp : '^/auth/access_token$',
        actions : [ {
            method : 'POST',
            handle : accessTokenController.createAccessToken
        } ]
    }, {
        uriRegExp : '^/auth/admin/access_token$',
        actions : [ {
            method : 'POST',
            handle : accessTokenController.createAdminAccessToken
        } ]
    }, {
        uriRegExp : '^/auth/access_token/.+$',
        actions : [ {
            method : 'GET',
            handle : accessTokenController.getAccessToken
        } ]
    }, {
        uriRegExp : '^/auth/admin/access_token/.+$',
        actions : [ {
            method : 'GET',
            handle : accessTokenController.getAccessToken
        } ]
    }, {
        uriRegExp : '^(/internal|/auth)/temporal_grant(/)?$',
        actions : [ {
            method : 'POST',
            handle : temporalGrantController.createGrant
        } ]
    }, {
        uriRegExp : '^(/internal|/auth)/temporal_grant/.+$',
        actions : [ {
            method : 'GET',
            handle : temporalGrantController.getGrant
        }, {
            method : 'DELETE',
            handle : temporalGrantController.removeGrant
        } ]
    }, {
        uriRegExp : '^/users/search.*?$',
        actions : [ {
            method : 'GET',
            handle : usersController.findUser
        } ]
    }, {
        uriRegExp : '^/users(/[0-9]+)?$',
        actions : [ {
            method : 'POST',
            handle : usersController.createUser
        }, {
            method : 'GET',
            handle : usersController.getUser
        } ]
    }, 
    {
        uriRegExp : '^/internal/users/.*?$',
        actions : [ {
            method : 'PUT',
            handle : usersController.updateUser
        } , {
            method : 'GET',
            handle : usersController.getUser
        }]
    }, {
        uriRegExp : '^/auth/user_session.*$',
        actions : [ {
            method : 'POST',
            handle : sessionController.createSecureSession
        }, {
            method : 'GET',
            handle : sessionController.getSession
        }, {
            method : 'DELETE',
            handle : sessionController.deleteSession
        }, {
            method : 'PURGE',
            handle : sessionController.purgeSessions
        } ]
    }, {
        uriRegExp : '^/internal/user_session/legacy(/)?$',
        actions : [ {
            method : 'POST',
            handle : sessionController.createLegacySession
        } ]
    }, {
        uriRegExp : '^/internal/session_data.*$',
        actions : [ {
            method : 'POST',
            handle : sessionDataController.createSessionData
        }, {
            method : 'GET',
            handle : sessionDataController.getSessionData
        }, {
            method : 'DELETE',
            handle : sessionDataController.deleteSessionData
        } ]
    }, {
        uriRegExp : '^/internal/authentication_attempt/stats.*$',
        actions : [ {
            method : 'GET',
            handle : authenticationAttemptController.getStats
        } ]
    }, {
        uriRegExp : '^/internal/authentication_attempt.*$',
        actions : [ {
            method : 'POST',
            handle : authenticationAttemptController.createAttempt
        } ]

    }, {
        uriRegExp : '^/site_domains/.*$',
        actions : [ {
            method : 'GET',
            handle : siteDomainsController.getSiteDomain
        } ]
    },{
        uriRegExp : '^/sites/.*$',
        actions : [ {
            method : 'GET',
            handle : sitesController.getSite
        } ]
    }, {
        uriRegExp : '^/auth/users/.*/operators/.*/sessions/?$',
        actions : [ {
            method : 'GET',
            handle : sessionController.getOperatorSessions
        } ]
    }, {
        uriRegExp : '^/auth/users/.*/sessions/?$',
        actions : [ {
            method : 'GET',
            handle : sessionController.getUserSessions
        } ]
    }, {
        uriRegExp : '^/internal/user_session/(.+)/related_sessions/?$',
        actions : [ {
            method : 'GET',
            handle : sessionController.getRelatedSessions
        }, {
            method : 'PUT',
            handle : sessionController.addRelatedSession
        } ]
    }, {
        uriRegExp : '^/jm/services/restrictionsservice/v1.0/global_restrictions/level/$',
        actions : [ {
            method : 'GET',
            handle : mpRestrictionsController.getRestriction
        }, {
            method : 'POST',
            handle : mpRestrictionsController.createRestriction
        }, {
            method : 'DELETE',
            handle : mpRestrictionsController.deleteRestriction
        } ]
    },{
        uriRegExp : '^/internal/application_credentials/?$',
        actions : [ {
            method : 'GET',
            handle : applicationController.validateCredentials
        } ]
    },{
        uriRegExp : '^/permissions/ldapauthentication/?$',
        actions : [ {
            method : 'POST',
            handle : ldapAuthenticationController.authenticate
        } ]
    },{
        uriRegExp : '^/services/account_recovery/secret_question.*$',
        actions : [ {
            method : 'POST',
            handle : oldWorldSecretQuestionController.createQuestion
        },{
            method : 'GET',
            handle : oldWorldSecretQuestionController.getSecretQuestion
        } ]
    },{
        uriRegExp : '^/internal/email.*$',
        actions : [ {
            method : 'POST',
            handle : emailsController.sendEmail
        },{
            method : 'GET',
            handle : emailsController.isOK
        }]
    },{
        uriRegExp : '^/scopes.*$',
        actions : [{
            method : 'GET',
            handle : applicationController.getScopes
        } ]
    },{
        uriRegExp : '^/collections/search/echo$',
        actions : [ {
            method : 'GET',
            handle : collectionsController.ping
        } ]
    },{
        uriRegExp : '^/collections/search\?.*$',
        actions : [ {
            method : 'GET',
            handle : collectionsController.searchCollection
        } ]
    },{
        uriRegExp : '^/collections/notifications/subscriptions/[0-9]+([?].+)?$',
        actions : [ {
            method : 'GET',
            handle : collectionsController.getSubscriptionURL
        } ]
    },{
        uriRegExp : '^/collections/notifications/subscriptions/echo$',
        actions : [ {
            method : 'GET',
            handle : collectionsController.ping
        } ]
    },{
        uriRegExp : '^/ipncallback',
        actions : [ {
            method : 'GET',
            handle : collectionsController.ipnCallback
        }, {
            method : 'POST',
            handle : collectionsController.ipnCallback
        } ]
    },{
        uriRegExp : '^/crm/users/[0-9]+/verification_status',
        actions : [ {
            method : 'GET',
            handle : crmController.getVerificationStatus
        }, {
            method : 'POST',
            handle : crmController.postVerificationStatus
        } ]
    },{
        uriRegExp : '^/crm/users_full/jalive',
        actions : [ {
            method : 'GET',
            handle : crmController.ping
        } ]
    },{
        uriRegExp : '^/currency_conversions/search',
        actions : [ {
            method : 'GET',
            handle : currencyConvertionController.getConvertion
        } ]
    },{
        uriRegExp : '^/jm/services/scoring/credit_card/jalive',
        actions : [ {
            method : 'GET',
            handle : cardsController.jalive
        } ]
    }],



    findRequestHandler : function(request, response) {
        var handlerFound = false;
        var urlObject = url.parse(request.url);
        var pathname = urlObject.pathname;
        for ( var i = 0; i < urlMapper.handlers.length && !handlerFound; i++) {
            var h = urlMapper.handlers[i];
            var regExp = new RegExp(h.uriRegExp);
            // console.log("match: "+regExp.exec(pathname));
            if (regExp.exec(pathname)) {
                for ( var j = 0; j < h.actions.length; j++) {
                    var action = h.actions[j];
                    // console.log("action: "+ JSON.stringify(action));
                    if (action.method === request.method) {
                        if (typeof action.handle != "function") {
                            console.log ("Request handler is not a function");
                            console.log ("Action: " + JSON.stringify (h));
                            break;
                        }
                        
                        action.handle(request, response);
                        if (request.url.indexOf("/ping") == -1) {
                            console.log(action.method + ' ' + request.url);
                        }
                        handlerFound = true;
                    }
                }
            }
        }

        if (!handlerFound) {
            var msg = 'No request handler found for ' + JSON.stringify(urlObject);
            console.log(msg);
            response.writeHead(404, {
                'Content-Type' : 'application/json'
            });
            response.write(msg);
            response.end();
        }

    }
};

exports.findRequestHandler = urlMapper.findRequestHandler;