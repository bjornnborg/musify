var url = require('url');
var crypto = require('crypto');
var dateFormatter = require('../services/dateFormatter');
var usersController = require("./usersController");
var urlMapping = require("../urlMapping");

var accessTokenController = {
    _accessTokens : [],

    createAdminAccessToken : function(request, response) {
        var data = '';
        // called when a new chunk of data was received
        request.addListener('data', function(chunk) {
            data += chunk;
        });

        // called when all chunks of data have been received
        request.addListener('end', function() {
            var accessToken = JSON.parse(data);
            var user = usersController.getUserById(accessToken.user_id);
            accessToken.status = user.status.site_status;
            accessToken.scopes = accessToken.scopes.sort();
            accessToken.expires_in = 23400;
            
            var hasher = crypto.createHash('md5');
            hasher.update(data);
            var now = dateFormatter.DateFormatter.format(new Date(), 'mdH');
            var accessTokenKey = 'ADM-' + accessToken.client_id + '-' + now + '-' + hasher.digest('hex') + '-' + accessToken.admin_id  + '-' + accessToken.user_id;
            var accessTokenEntry = {
                'key' : accessTokenKey,
                'value' : accessToken
            };
            accessTokenController._accessTokens.push(accessTokenEntry);
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            var responseValue = {
                'access_token' : accessTokenKey,
                'expires_in' : accessToken.expires_in,
                'scopes' : accessToken.scopes
            };
            response.write(JSON.stringify(responseValue));
            response.end();
        });
    },

    
    createAccessToken : function(request, response) {
        var data = '';
        // called when a new chunk of data was received
        request.addListener('data', function(chunk) {
            data += chunk;
        });

        // called when all chunks of data have been received
        request.addListener('end', function() {
            var accessToken = JSON.parse(data);
            var user = usersController.getUserById(accessToken.user_id);
            accessToken.status = user.status.site_status;
            accessToken.scopes = accessToken.scopes.sort();
            accessToken.expires_in = 10800;
            
            var hasher = crypto.createHash('md5');
            hasher.update(data);
            var now = dateFormatter.DateFormatter.format(new Date(), 'mdH');
            var accessTokenKey = 'APP_USR-' + accessToken.client_id + '-' + now + '-' + hasher.digest('hex') + '-' + accessToken.user_id;
            var accessTokenEntry = {
                'key' : accessTokenKey,
                'value' : accessToken
            };
            accessTokenController._accessTokens.push(accessTokenEntry);
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            var responseValue = {
                'access_token' : accessTokenKey,
                'expires_in' : accessToken.expires_in,
                'scopes' : accessToken.scopes
            };
            response.write(JSON.stringify(responseValue));
            response.end();
        });
    },

    getAccessToken : function(request, response) {
        // called when all chunks of data have been received
        request.addListener('end', function() {
            // Extract appId
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/auth/access_token/(.+)');
            uriRegExp.exec(pathname);
            var accessTokenKey = RegExp.$1;
            // lookup by id
            var position = accessTokenController._findAccessTokenPositionByKey(accessTokenKey);

            if (position != -1) {
                var accessToken = accessTokenController._accessTokens[position];
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify(accessToken.value));
                response.end();
            } else {
                response.writeHead(404, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({
                    'msg' : 'AccessToken not found '
                }));
                response.end();
            }

        });
    },

    _findAccessTokenPositionByKey : function(key) {
        for ( var i = 0; i < accessTokenController._accessTokens.length; i++) {
            var accessToken = accessTokenController._accessTokens[i];
            if (accessToken.key == key) {
                return i;
            }
        }
        return -1;
    },

     getToken : function(request, response) {
         response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
                       
        response.write(JSON.stringify({"access_token":"APP_USR-4821394854758689-111810-1f33cad1967d264ac54b6d1fdb3aba39__A_M__-194150622","refresh_token":"TG-564c8c0be4b0f72904beaad6-194150622","live_mode":true,"user_id":194150622,"token_type":"bearer","expires_in":21600,"scope":"offline_access read write"}));        
        response.end();
    }
};

exports.createAccessToken = accessTokenController.createAccessToken;
exports.createAdminAccessToken = accessTokenController.createAdminAccessToken;
exports.getAccessToken = accessTokenController.getAccessToken;

// Mappings
urlMapping.add ([{
        pattern: '^/auth/access_token$',
        action: {
            'POST':accessTokenController.createAccessToken
        }
    }, {
        pattern: '^/auth/admin/access_token$',
        action: {
            'POST':accessTokenController.createAdminAccessToken
        }
    }, {
        pattern: '^/auth/access_token/.+$',
        action: {
            'GET':accessTokenController.getAccessToken
        }
    }, {
        pattern: '^/auth/admin/access_token/.+$',
        action: {
            'GET':accessTokenController.getAccessToken
        }
    }, {
        pattern: '^/oauth/token?',
        action: {
            'POST':accessTokenController.getToken
        }
    }]);