var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var mpRestrictionsController = {
    createRestriction : function(request, response) {
        jsonHandler.getContent(request, function(restrictionData) {
            resourceManager.saveResource('restriction', restrictionData);
            jsonHandler.showOKResponse(restrictionData, response);
        });
    },
    getRestriction : function(request, response) {
        var queryStringObj = url.parse(request.url, true).query;
        var restrictionId = searchRestriction(queryStringObj);
        resourceManager.getResource('restriction', restrictionId, response);
    },
    deleteRestriction : function(request, response) {
        var queryStringObj = url.parse(request.url, true).query;
        var restrictionId = searchRestriction(queryStringObj);
        resourceManager.deleteResource('restriction', restrictionId, response);
    }
};

function searchRestriction(q) {
    var restrictions = resourceManager.getResourcesByType('restriction');
    for ( var id in restrictions) {
        if(restrictions[id]){
            var restriction = restrictions[id].value;
            if ( (restriction.user_id + '') == q.userId && restriction.site_id.toLowerCase() == q.siteId.toLowerCase()
                    && restriction.action_id.toLowerCase() == q.actionId.toLowerCase()) {
                return id;
            }
        }
    }

    return null;
}

resourceManager.saveResource('restriction', {"user_id":50, "site_id": "MLM", "action_id":"PAG_TC_PROC", "status":"SERVICE_STATUS_OK", level:0});
resourceManager.saveResource('restriction', {"user_id":40, "site_id": "MLM", "action_id":"PAG_TC_PROC", "status":"SERVICE_STATUS_OK", level:0});

resourceManager.saveResource('restriction', {"user_id":30, "site_id": "MLM", "action_id":"PAG_TC_PROC", "status":"SERVICE_STATUS_OK", level:0});
resourceManager.saveResource('restriction', {"user_id":20, "site_id": "MLM", "action_id":"PAG_TC_PROC", "status":"SERVICE_STATUS_OK", level:0});
resourceManager.saveResource('restriction', {"user_id":21, "site_id": "MLM", "action_id":"PAG_TC_PROC", "status":"SERVICE_STATUS_OK", level:1});


exports.createRestriction = mpRestrictionsController.createRestriction;
exports.getRestriction = mpRestrictionsController.getRestriction;
exports.deleteRestriction = mpRestrictionsController.deleteRestriction;

// Mappings
urlMapping.add ([{
        pattern: '^/jm/services/restrictionsservice/v1.0/global_restrictions/level/$',
        action: {
            'GET':mpRestrictionsController.getRestriction,
            'POST':mpRestrictionsController.createRestriction,
            'DELETE':mpRestrictionsController.deleteRestriction
        }
    },{
        pattern: '^/jm/services/restrictionsservice/v1.0/global_restrictions/level$',
        action: {
            'GET':mpRestrictionsController.getRestriction,
            'POST':mpRestrictionsController.createRestriction,
            'DELETE':mpRestrictionsController.deleteRestriction
        }
    }]);