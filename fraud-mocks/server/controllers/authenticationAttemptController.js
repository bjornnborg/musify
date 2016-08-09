var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var usersController = require("./usersController");
var urlMapping = require("../urlMapping");

var authenticationAttemptController = {
    createAttempt : function(request, response) {
        jsonHandler.getContent(request, function(attemptArgs) {
            var user = usersController.searchUser(attemptArgs.user);

            if (!user) {
                var error = {
                    "message" : "No se pudo encontrar el usuario: " + attemptArgs.user
                };
                jsonHandler.showNotFoundResponse(error, response);
                return;
            }

            var attempt = getAttempt(attemptArgs.user, attemptArgs.ip);

            var pwdValidationResult;

            var pwd = attemptArgs.password.toLowerCase();
            if ( pwd == "qatest" || pwd == "operator_qatest" || pwd == "ñacañaca") {
                attempt.attempts = 0;
                pwdValidationResult = "PASS";
                if(pwd == "qatest" || pwd == "ñacañaca"){
                    user.groups = ["DFLT|null"];
                    user.scopes = ["read", "write"];
                    user.operator_id = 0;
                }else{
                    user.groups = ["CUE"];
                    user.scopes = ["billing_read_charges"];
                    user.operator_id = 20;
                }
            } else{
                attempt.attempts++;
                pwdValidationResult = "INVALID_PWD";
            }
            
            saveAttempt(attempt);
            user.user_id = user.id;
            
            var attemptResult = {
                "result" : pwdValidationResult,
                "stats" : attempt,
                "user" : user
            };

            jsonHandler.showOKResponse(attemptResult, response);
        });
    },
    getStats : function(request, response) {
        var query = url.parse(request.url, true).query;
        var attempt = getAttempt(query["user"], query["ip"]);

        jsonHandler.showOKResponse(attempt, response);
    }
};

function getAttempt(user, ip) {
    var attempt = resourceManager.searchResource('attempt', user + ip);

    if (!attempt) {
        attempt = saveAttempt({
            user : user,
            ip : ip,
            attempts : 0
        });
    }

    return attempt;
}

function saveAttempt(attempt) {
    return resourceManager.saveTemporalResource('attempt', attempt.user + attempt.ip, 48 * 60 * 60, attempt);
}

exports.createAttempt = authenticationAttemptController.createAttempt;
exports.getStats = authenticationAttemptController.getStats;

// Mappings
urlMapping.add ([{
        pattern: '^/internal/authentication_attempt/stats.*$',
        action: {
            'GET':authenticationAttemptController.getStats
        }
    }, {
        pattern: '^/internal/authentication_attempt.*$',
        action: {
            'POST':authenticationAttemptController.createAttempt
        }
    }]);