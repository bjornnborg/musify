var url = require('url');
var crypto = require('crypto');
var dateFormatter = require('../services/dateFormatter');
var urlMapping = require("../urlMapping");

var temporalGrantController = {
    _grants : [],

    createGrant : function(request, response) {
        var data = '';
        // called when a new chunk of data was received
        request.addListener('data', function(chunk) {
            data += chunk;
        });

        // called when all chunks of data have been received
        request.addListener('end', function() {
            var grant = JSON.parse(data);
            grant.creation_date = new Date();
            var hasher = crypto.createHash('md5');
            hasher.update(data+grant.creation_date.toUTCString());
            var grantKey = hasher.digest('hex');
            var grantEntry = {
                'key' : grantKey,
                'value' : grant
            };
            temporalGrantController._grants.push(grantEntry);
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            var responseValue = {
                'temporal_grant_code' : grantKey
            };
            response.write(JSON.stringify(responseValue));
            response.end();
        });
    },

    getGrant : function(request, response) {
        // called when all chunks of data have been received
        request.addListener('end', function() {
            // Extract appId
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('(/internal|/auth)/temporal_grant/(.+)');
            uriRegExp.exec(pathname);
            var grantKey = RegExp.$2;
            // lookup by id
            var position = temporalGrantController._findGrantPositionByKey(grantKey);

            if (position != -1) {
                var grant = temporalGrantController._grants[position];
                if( grant.value.creation_date.getTime() + grant.value.expire_time * 1000 >= new Date().getTime() ){
                    response.writeHead(200, {
                        'Content-Type' : 'application/json; charset=utf-8'
                    });
                    response.write(JSON.stringify(grant.value));
                }else{
                    response.writeHead(404, {
                        'Content-Type' : 'application/json; charset=utf-8'
                    });
                    response.write(JSON.stringify({
                        'msg' : 'Grant not found '
                    }));                   
                }
                response.end();
            } else {
                response.writeHead(404, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({
                    'msg' : 'Grant not found '
                }));
                response.end();
            }

        });
    },

    removeGrant : function(request, response) {
        // called when all chunks of data have been received
        request.addListener('end', function() {
            // Extract appId
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('(/internal|/auth)/temporal_grant/(.+)');
            uriRegExp.exec(pathname);
            var grantKey = RegExp.$2;
            // lookup by id
            var position = temporalGrantController._findGrantPositionByKey(grantKey);

            if (position != -1) {
                var grant = temporalGrantController._grants[position];
                temporalGrantController._grants.splice(position, 1);
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify(grant.value));
                response.end();
            } else {
                response.writeHead(404, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({
                    'msg' : 'Grant not found '
                }));
                response.end();
            }

        });
    },

    _findGrantPositionByKey : function(key) {
        for ( var i = 0; i < temporalGrantController._grants.length; i++) {
            var grant = temporalGrantController._grants[i];
            if (grant.key == key) {
                return i;
            }
        }
        return -1;
    }
};

exports.createGrant = temporalGrantController.createGrant;
exports.getGrant = temporalGrantController.getGrant;
exports.removeGrant = temporalGrantController.removeGrant;

// Mappings
urlMapping.add ([{
        pattern: '^(/internal|/auth)/temporal_grant(/)?$',
        action: {
            'POST':temporalGrantController.createGrant
        }
    }, {
        pattern: '^(/internal|/auth)/temporal_grant/.+$',
        action: {
            'GET':temporalGrantController.getGrant,
            'DELETE':temporalGrantController.removeGrant
        }
    }]);