var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var usersController = require("./usersController");
var urlMapping = require("../urlMapping");

var veriSignSecondFactorController = {

    resetUser : function(request, response) {
        var userId = getUserId(request);
        resetUserCredentials(userId);
    },

    activateUser : function(request, response) {
        var userId = getUserId(request);
        jsonHandler.getContent(request, function(userToken) {
            putCredential(userId, userToken,response);
        });
    },

    getUserTokenInfo : function(request, response) {
        var tokenId = getTokenId(request);
        var userId = getUserId(request);
        getTokenInfo(tokenId, userId,response);
    },

    deleteAssociatedUserTo2fa : function(request, response) {
        var tokenId = getTokenId(request);
        var userId = getUserId(request);
        deleteToken(tokenId, userId,response);
    },

    validateUser : function(request, response) {
        var userId = getUserId(request);
        jsonHandler.getContent(request, function(tokenData) {
            validateToken(userId, tokenData,response);
        });
    }
};

function isValidOTP(otp) {
    return otp == "111222";
}

function blockUserCredential(tokenId) {
    resourceManager.getResourcesByType('token_data')[tokenId] = null;
    resourceManager.saveTemporalResource('token_data', tokenId, -1, getTokenData(tokenId, "LOCKED"));
}

function userHasTokenId(resource, tokenId) {
    return resource.indexOf(tokenId) >= 0;
}

function isValidUser(userId) {
    var searchedUser = usersController.getUserById(userId);
    return searchedUser != null;
}

function deleteCredentialFromUser(tokenId, userId) {
    var userObject = resourceManager.searchResource('user_token_data', userId);
    var resource = userObject.user_credentials;
    var idx = resource.indexOf(tokenId);
    if (idx != -1)
        resource.splice(idx, 1);
    resourceManager.saveTemporalResource('user_token_data', userId, -1, {
        user_credentials : resource
    });

}

function getTokenData(tokenId, status) {
    return {
        alias : "NEW_PEPE",
        credential_id : tokenId,
        status : status,
        type : "STANDARD_OTP"
    };
}

function getUserId(request) {
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/users/(\\w+)/2fa.*');
    uriRegExp.exec(pathname);
    var userIdKey = RegExp.$1;
    return userIdKey;

}

function getTokenId(request) {
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/users/(\\w+)/2fa/tokens/(\\w+)');
    uriRegExp.exec(pathname);
    var tokenDataKey = RegExp.$2;
    return tokenDataKey;
}

function getAttempt(userId, tokenId) {
    var attempt = resourceManager.searchResource('credential_attempt', userId + tokenId);

    if (!attempt) {
        attempt = saveAttempt({
            user_id : userId,
            token_id : tokenId,
            stats : 0
        });
    }
    return attempt;
}

function saveAttempt(attempt) {
    return resourceManager.saveTemporalResource('credential_attempt', attempt.user_id + attempt.token_id, -1, attempt);
}

// **********
function resetUserCredentials(userId) {
    resourceManager.getResourcesByType('user_token_data')[userId] = null;
}

function asociateUserToken(userToken, userId) {
    resourceManager.saveTemporalResource('user_token_data', userId, -1, {
        user_credentials : [ userToken.token_id, "NCHE10008081", "NCHE10008082", "NCHE10008083" ]
    });
}

function asociateTokenData(userToken, tokenData) {
    resourceManager.saveTemporalResource('token_data', userToken.token_id, -1, tokenData);
    resourceManager.saveTemporalResource('token_data', "NCHE10008081", -1, getTokenData("NCHE10008081", "DISABLED"));
    resourceManager.saveTemporalResource('token_data', "NCHE10008082", -1, getTokenData("NCHE10008082", "LOCKED"));
    resourceManager.saveTemporalResource('token_data', "NCHE10008083", -1, getTokenData("NCHE10008083", "INACTIVE"));
}

// **********
function putCredential(userId, userToken,response) {
    if (isValidUser(userId)) {
        if (userToken.token_id == "VSME898989") {
            var tokenData = getTokenData(userToken.token_id, "ENABLED");
            asociateUserToken(userToken, userId);
            asociateTokenData(userToken, tokenData);
            jsonHandler.showOKResponse({
                status : "Success"
            }, response);
        } else {
            jsonHandler.showBadRequestResponse({
                msg : 'crendential_id not valid'
            }, response);
        }
    } else {
        jsonHandler.showNotFoundResponse({
            msg : 'user_id not found'
        }, response);
    }
}

function getTokenInfo(tokenId, userId,response) {
    if (isValidUser(userId)) {
        var userObject = resourceManager.searchResource('user_token_data', userId);
        var resource = userObject.user_credentials;
        if (userHasTokenId(resource, tokenId)) {
            resourceManager.getResource('token_data', tokenId, response);
        } else {
            jsonHandler.showBadRequestResponse({
                msg : "token_data not found: " + tokenId
            }, response);
        }
    } else {
        jsonHandler.showNotFoundResponse({
            msg : 'user_id not found'
        }, response);
    }
}

function deleteToken(tokenId, userId,response) {
    deleteCredentialFromUser(tokenId, userId, response);
    resourceManager.deleteResource('token_data', tokenId, response);
}

function validateToken(userId, tokenData,response) {
    if (isValidUser(userId)) {
        if (isValidOTP(tokenData.otp)) {
            jsonHandler.showOKResponse({
                msg : "Success"
            }, response);
        } else {
            var attempt = getAttempt(userId, "VSME898989");
            if (attempt.stats >= 10) {
                blockUserCredential("VSME898989");
            } else {
                attempt.stats++;
                saveAttempt(attempt);
            }
            jsonHandler.showBadRequestResponse({
                msg : 'otp invalid'
            }, response);
        }
    } else {
        jsonHandler.showNotFoundResponse({
            msg : 'user_id not found'
        }, response);
    }
}

exports.resetUser = veriSignSecondFactorController.resetUser;
exports.activateUser = veriSignSecondFactorController.activateUser;
exports.getUserTokenInfo = veriSignSecondFactorController.getUserTokenInfo;
exports.deleteAssociatedUserTo2fa = veriSignSecondFactorController.deleteAssociatedUserTo2fa;
exports.validateUser = veriSignSecondFactorController.validateUser;

exports.putCredential = putCredential;
exports.getTokenInfo = getTokenInfo;
exports.deleteToken = deleteToken;
exports.validateToken = validateToken;
exports.resetUserCredentials = resetUserCredentials;

// Mappings
urlMapping.add ([]);