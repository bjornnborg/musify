var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var usersController = require("./usersController");
var urlMapping = require("../urlMapping");

var arfEnrollmentController = {
    createRequest : function(request, response) {
        var userId = getUserId(request);
        
        console.log(userId);
        
        var user = usersController.getUserById(userId);
        
        console.log(user);
        
        if(!user){
            jsonHandler.showNotFoundResponse({message:"user not found"}, response);
            return;
        }
        
        if(!user.points || user.points < 15){
            jsonHandler.showBadRequestResponse({message:"error"}, response);
            return;
        }
        
        var enrollmentRequest = {
                enrollment_required:true
        };
        
        resourceManager.saveTemporalResource('arfEnrollment', userId, 60, enrollmentRequest);
        
        jsonHandler.showOKResponse(enrollmentRequest, response);
    },

    getRequest : function(request, response) {
        var userId = getUserId(request);
        
        var enrollmentRequest = resourceManager.searchResource('arfEnrollment', userId);
        
        if(!enrollmentRequest){
            jsonHandler.showNotFoundResponse({
                    enrollment_required:false
            }, response);
            return;
        }
        
        jsonHandler.showOKResponse(enrollmentRequest, response);
        
    }, forceCreateRequest: function(request, response) {
        var userId = getUserId(request);

        var enrollmentRequest = {
                enrollment_required:true
        };
        
        resourceManager.saveTemporalResource('arfEnrollment', userId, 60, enrollmentRequest);
        
        jsonHandler.showOKResponse(enrollmentRequest, response);
    }, deleteRequest: function(request, response) {
        var userId = getUserId(request);

        resourceManager.deleteResource('arfEnrollment', userId, response);
    }
};

function getUserId(request){
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/users/([^/]+)/.*');
    uriRegExp.exec(pathname);
    var userId = RegExp.$1;
    return userId;
}

exports.createRequest = arfEnrollmentController.createRequest;
exports.getRequest = arfEnrollmentController.getRequest;
exports.forceCreateRequest = arfEnrollmentController.forceCreateRequest;
exports.deleteRequest = arfEnrollmentController.deleteRequest;


// Mappings
urlMapping.add ([{
        pattern: '^/users/(\\w+)/secondary_authentication_factors/enrollment_request/?$',
        action: {
            'GET':arfEnrollmentController.getRequest,
            'POST':arfEnrollmentController.createRequest
        }
    }, {
        pattern: '^/users/(\\w+)/secondary_authentication_factors/force_enrollment_request/?$',
        action: {
            'DELETE':arfEnrollmentController.deleteRequest,
            'POST':arfEnrollmentController.forceCreateRequest
        }
    }]);