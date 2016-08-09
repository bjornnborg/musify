var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var veriSignService = require("./veriSignSecondFactorController");
var usersController = require("./usersController");
var urlMapping = require("../urlMapping");

var secondFactorTokenController = {
               
    resetUser : function(request, response) {
        var userId = getUserId(request);
        veriSignService.resetUserCredentials(userId);
    },

    activateUser : function(request, response) {
        var userId = getUserId(request);
        jsonHandler.getContent(request, function(tokenDataArgs) {
        veriSignService.putCredential(userId,tokenDataArgs,response);
        });
    },

    getUserStatus : function(request, response) {
        var userId = getUserId(request);
        getStatus(userId,response);
    },

    getUserTokensInfo : function(request, response) {
        var userId = getUserId(request);
        getUserData(userId,response);
    },

    getUserTokenInfo : function(request, response) {
        var tokenId = getTokenId(request);
        var userId = getUserId(request);
        veriSignService.getTokenInfo(tokenId,userId,response);
    },

    deleteAssociatedUserTo2fa : function(request, response) {
        var tokenId = getTokenId(request);
        var userId = getUserId(request);
        veriSignService.deleteToken(tokenId,userId,response);
    },

    validateUser : function(request, response) {
        var userId = getUserId(request);
        jsonHandler.getContent(request, function(tokenDataArgs) {
        veriSignService.validateToken(userId,tokenDataArgs,response);
        });
    }
};

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

function getStatus(userId,response) {
    if (isValidUser(userId)) {
        var userObject = resourceManager.searchResource('user_token_data', userId);
        if (isUserNew(userObject, userId)) {
            setUser2faToken(userId,"NEW");
        } else {
            var resource = userObject.user_credentials;
            if (haveEnabledToken(resource)) {
                setUser2faToken(userId,"ENABLED");
            } else {
                setUser2faToken(userId,"DISABLED");
            }
        }
    } else {
        setUser2faToken(userId, "NOT_REQUIRED");
    }
    resourceManager.getResource('user_status', userId, response);
}

function setUser2faToken(userId, status) {
    resourceManager.saveTemporalResource('user_status', userId, -1, {
        status : status
    });
}

function isEnabledToken(tokenId) {
    var tokenData = resourceManager.searchResource('token_data', tokenId);
    return tokenData.status == "ENABLED";
}

function haveEnabledToken(resource) {
    return resource.some(isEnabledToken);
}

function getUserData(userId,response) {
    resourceManager.getResource('user_token_data', userId, response);
}

function isValidUser(userId) {
    var searchedUser = usersController.getUserById(userId);
    return searchedUser != null;
}

function isUserNew(userObject, userId) {
    return userObject == null;
}


exports.resetUser = secondFactorTokenController.resetUser;
exports.getUserStatus = secondFactorTokenController.getUserStatus;
exports.getUserTokensInfo = secondFactorTokenController.getUserTokensInfo;
exports.activateUser = secondFactorTokenController.activateUser;
exports.getUserTokenInfo = secondFactorTokenController.getUserTokenInfo;
exports.deleteAssociatedUserTo2fa = secondFactorTokenController.deleteAssociatedUserTo2fa;
exports.validateUser = secondFactorTokenController.validateUser;

// Mappings
urlMapping.add ([{
        pattern: '^/internal/users/.*/2fa/tokens(/)?$',
        action: {
            'GET':secondFactorTokenController.getUserTokensInfo,
            'PUT':secondFactorTokenController.activateUser
        }
    }, {
        pattern: '^/internal/users/\\w+/2fa/tokens/\\w+$',
        action: {
            'GET':secondFactorTokenController.getUserTokenInfo,
            'DELETE':secondFactorTokenController.deleteAssociatedUserTo2fa
        }
    }, {
        pattern: '^/internal/users/\\w+/2fa/tokens/otp$',
        action: {
            'POST':secondFactorTokenController.validateUser
        }
    }, {
        pattern: '^/internal/users/\\w+/2fa/?$',
        action: {
            'GET':secondFactorTokenController.getUserStatus
        }
    }, {
        pattern: '^/internal/users/\\w+/2fa/reset$',
        action: {
            'GET':secondFactorTokenController.resetUser
        }
    }]);