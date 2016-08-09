var jsonHandler = require("../services/jsonHandler");
var resources = [];
var resourceId = 1;


function cleanResources(type,response){
    resources[type] = [];
    
    jsonHandler.showOKResponse({msg:'Deleted All '+ type +' resources'}, response);
}

function deleteResource(type, id, response){
    var resource = searchResource(type, id);

    if (!resource) {
        showNotFoundResponse(response, type, id);
        return;
    }
    
    getResourcesByType(type)[id] = null;
    
    jsonHandler.showOKResponse({msg:'Deleted'}, response);
}

function saveTemporalResource(type, id, secondsToLive, resource){
    if(secondsToLive == -1){
        var expireTime = -1;
    }else{
        var currentMillis = new Date().getTime();
        expireTime = currentMillis + secondsToLive*1000;
    }
    
    if (resource.id == null) {
    resource.id = id;
    }   
        
    getResourcesByType(type)[resource.id] = {
        value: resource,
        expireTime: expireTime
    };
    
    //log("save["+type+","+resource.id+"]:" + JSON.stringify(getResourcesByType(type)[resource.id].value));   

    return resource;
}

function saveTemporalRequestResource(type, secondsToLive, request, response){
    jsonHandler.getContent(request, function (resource){
        if(resource.id != null){
            saveTemporalResource(type, resource.id, secondsToLive, resource);
        }else{
            saveTemporalResource(type, resourceId++, secondsToLive, resource);
        }
        jsonHandler.showOKResponse(resource, response);
    });
};

function saveRequestResource(type, request, response) {
    saveTemporalRequestResource(type, -1, request, response);
};

function saveResource(type, id, resource) {
    saveTemporalResource(type, id, -1, resource);
};

function saveResource(type, resource) {
    saveTemporalResource(type, resourceId++, -1, resource);
};

function getResource(type, id, response){
    var resource = searchResource(type, id);

    if (!resource) {
        showNotFoundResponse(response, type, id);
        return;
    } 
    
    jsonHandler.showOKResponse(resource, response);
};

function searchResource(type, id){
    var resource = getResourcesByType(type)[id];

    if (resource && (resource.expireTime == -1 || resource.expireTime > new Date().getTime())) {
        return resource.value;
    }
    
    return null;
}

function showNotFoundResponse(response, type, id){
    jsonHandler.showNotFoundResponse({msg: type + ' not found: ' + id}, response);
}

function getResourcesByType(type){
    if (!resources[type]) {
        resources[type] = [];
    }
    
    return resources[type];
}

function modifyResource(type, id, newResource,response){
    var resource = searchResource(type, id);

    if (!resource) {
        showNotFoundResponse(response, type, id);
        return;
    }   
    
    saveTemporalResource(type,id,-1,newResource);

    return true;
}

function log(msg) {
    if (console) {
      console.log(msg);
    }
}

exports.saveResource = saveResource;
exports.saveTemporalRequestResource = saveTemporalRequestResource;
exports.saveRequestResource = saveRequestResource;
exports.saveTemporalResource = saveTemporalResource;
exports.getResource = getResource;
exports.deleteResource = deleteResource;
exports.searchResource = searchResource;
exports.getResourcesByType = getResourcesByType;
exports.resources = resources;
exports.cleanResources = cleanResources;
exports.modifyResource = modifyResource;
