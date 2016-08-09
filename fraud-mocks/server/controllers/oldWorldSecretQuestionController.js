var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var usersController = require("./usersController");
var urlMapping = require("../urlMapping");

var oldWorldSecretQuestionController = {
    createQuestion : function(request, response) {
        jsonHandler.getContent(request, function(questionArgs){
            var userId = getUserId(request);
            
            var user = usersController.getUserById(userId);
            
            if(!user){
                jsonHandler.showNotFoundResponse({message:"user not found"}, response);
                return;
            }
            
            resourceManager.saveTemporalResource('old_secret_question', userId, 60, questionArgs);
            
            jsonHandler.showOKResponse(questionArgs, response);
        });    
    },

    getSecretQuestion : function(request, response) {
        var userId = getUserId(request);
        
        resourceManager.getResource('old_secret_question', userId, response);
    }
};

function getUserId(request){
    var uriRegExp = new RegExp('.+userId=(\\w+)');
    uriRegExp.exec(request.url);
    var userId = RegExp.$1;
    return userId;
}

exports.createQuestion = oldWorldSecretQuestionController.createQuestion;
exports.getSecretQuestion = oldWorldSecretQuestionController.getSecretQuestion;

// Mappings
urlMapping.add ([{
        pattern: '^/services/account_recovery/secret_question.*$',
        action: {
            'POST':oldWorldSecretQuestionController.createQuestion,
            'GET':oldWorldSecretQuestionController.getSecretQuestion
        }
    }]);