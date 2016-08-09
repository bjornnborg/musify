function getContent(request, callback){
    var data = '';
    
    request.addListener('data', function(chunk) {
        data += chunk;
    });
    
    request.addListener('end', function() {
        var resource = JSON.parse(data);
        callback(resource);
    });
    
}
function showNotModifiedResponse(object,response){
    showResponse(object, 304, response);
}

function showNotFoundResponse(object, response){
    showResponse(object, 404, response);
}

function showOKResponse(object, response){
    showResponse(object, 200, response);
}

function showNoContentResponse(response){
    showResponse(null, 204, response);
}

function showBadRequestResponse(object,response){
    showResponse(object, 400, response);
}

function showForbidenResponse(object,response){
    showResponse(object, 403, response);
}

function showInternalServerErrorResponse(object,response){
    showResponse(object, 500, response);
}

function showServiceUnavailableResponse(object,response){
    showResponse(object, 503, response);
}

function showResponse(object, statusCode, response){
    response.writeHead(statusCode, {
        'Content-Type' : 'application/json; charset=utf-8'
    });
    response.write(JSON.stringify(object));
    response.end();
}

exports.showServiceUnavailableResponse = showServiceUnavailableResponse;
exports.showInternalServerErrorResponse = showInternalServerErrorResponse;
exports.showNotModifiedResponse = showNotModifiedResponse;
exports.getContent = getContent;
exports.showNotFoundResponse = showNotFoundResponse;
exports.showOKResponse = showOKResponse;
exports.showBadRequestResponse = showBadRequestResponse;
exports.showResponse = showResponse;
exports.showNoContentResponse = showNoContentResponse;
exports.showForbidenResponse = showForbidenResponse;