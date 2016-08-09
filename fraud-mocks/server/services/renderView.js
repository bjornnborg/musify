var fs = require('fs');

function render(view, response){
    console.log("view: " + "views/"+view+".htm");
    fs.readFile("views/"+view+".htm" ,function (err, data){
        response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        response.write(data);
        response.end();
    });    
}

function renderResourcesForPath(path, contentType, response){
    fs.readFile(path ,function (err, data){
        response.writeHead(200, {'Content-Type': contentType,'Content-Length':data.length});
        response.write(data);
        response.end();
    });    
}

function renderResourcesForBuffer(buffer, contentType, response){
    response.writeHead(200, {'Content-Type': contentType,'Content-Length':buffer.length});
    response.write(buffer);
    response.end();       
}

exports.render = render;
exports.renderResourcesForPath = renderResourcesForPath;
exports.renderResourcesForBuffer = renderResourcesForBuffer;