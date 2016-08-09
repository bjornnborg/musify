var url = require('url');
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var applicationSubscriptionController = {
    _subscriptions : [],
    _subscriptionsIds : 200000,

    createSubscription : function(request, response) {
        var data = '';
        // called when a new chunk of data was received
        request.addListener('data', function(chunk) {
            data += chunk;
        });

        // called when all chunks of data have been received
        request.addListener('end', function() {
            // extract userId from url
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/users/(\\w+)/applications');
            uriRegExp.exec(pathname);
            var userId = RegExp.$1;

            var subscriptionData = JSON.parse(data);
            subscriptionData.user_id = userId;
            subscriptionData.id = applicationSubscriptionController._subscriptionsIds++;

            var position = applicationSubscriptionController._findSubscritionByUserIdAndAppId(subscriptionData.user_id, subscriptionData.app_id);
            if (position != -1) {
                applicationSubscriptionController._subscriptions[position] = subscriptionData;
            } else {
                applicationSubscriptionController._subscriptions.push(subscriptionData);
            }
            response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(subscriptionData));
            response.end();
        });
    },

    removeSubscription : function(request, response) {
        // extract userId from url
        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('/users/(\\w+)/applications/(\\w+)');
        uriRegExp.exec(pathname);
        var userId = RegExp.$1;
        var appId = RegExp.$2;

        var position = applicationSubscriptionController._findSubscritionByUserIdAndAppId(userId, appId);
        if(position != -1){
            var subscription = applicationSubscriptionController._subscriptions[position];
            applicationSubscriptionController._subscriptions.splice(position);
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(subscription));
            response.end();
        }else{
            response.writeHead(404, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({
                'msg' : 'Authorization not found',
                'cause' : 'authorization_not_found'
            }));
            response.end();
        }
    },

    getSubscription : function(request, response) {
        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('/users/(\\w+)/applications/(\\w+)');
        uriRegExp.exec(pathname);
        var userId = RegExp.$1;
        var appId = RegExp.$2;

        var position = applicationSubscriptionController._findSubscritionByUserIdAndAppId(userId, appId);

        if (position != -1) {
            var subscription = applicationSubscriptionController._subscriptions[position];
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(subscription));
            response.end();
        } else {
            response.writeHead(404, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({
                'msg' : 'Authorization not found',
                'cause' : 'authorization_not_found'
            }));
            response.end();
        }
    },

    _findSubscritionByUserIdAndAppId : function(userId, appId) {
        for ( var i = 0; i < applicationSubscriptionController._subscriptions.length; i++) {
            var s = applicationSubscriptionController._subscriptions[i];
            if (s.user_id == userId && s.app_id == appId) {
                return i;
            }
        }
        return -1;
    }

};

exports.createSubscription = applicationSubscriptionController.createSubscription;
exports.removeSubscription = applicationSubscriptionController.removeSubscription;
exports.getSubscription = applicationSubscriptionController.getSubscription;

// Mappings
urlMapping.add ([{
        pattern: '^/users/\\w+/applications/\\w+$',
        action: {
            'DELETE':applicationSubscriptionController.removeSubscription,
            'GET':applicationSubscriptionController.getSubscription
        }
    }, {
        pattern: '^/users/\\w+/applications$',
        action: {
            'POST':applicationSubscriptionController.createSubscription
        }
    }]);