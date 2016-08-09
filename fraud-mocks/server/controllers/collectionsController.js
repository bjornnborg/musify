var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var collectionsController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
        },
        searchCollection : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"paging":{"total":2,"limit":30,"offset":0},"results":[{"collection":{"id":60909576,"site_id":"MLA","date_created":"2011-10-25T11:00:15.000-04:00","date_approved":null,"last_modified":"2011-11-26T02:03:59.000-04:00","money_release_date":"2011-11-06T11:00:15.000-04:00","operation_type":"regular_payment","collector_id":42006339,"payer":{"id":72767153,"nickname":"@72767153","first_name":" ","last_name":"Carlos2","email":"carlos2@perez.com"},"external_reference":"OPERATION-ID-1234","reason":"Nombre","transaction_amount":50,"total_paid_amount":50,"currency_id":"ARS","shipping_cost":0,"status":"cancelled","status_detail":"expired","released":"yes","payment_type":"ticket","marketplace":"NONE"}},{"collection":{"id":82168289,"site_id":"MLA","date_created":"2012-02-02T14:18:26.000-04:00","date_approved":null,"last_modified":"2012-03-05T02:02:26.000-04:00","money_release_date":"2012-02-14T14:18:26.000-04:00","operation_type":"regular_payment","collector_id":42006339,"payer":{"id":1494067,"nickname":"MADRIANBARROSO","first_name":"Marcelo Adrian","last_name":"Barroso","phone":{"area_code":"02652","number":"15397968","extension":null},"email":"barrosomarcelo@gmail.com"},"external_reference":"RECIBO_000","reason":"Título (modificable)","transaction_amount":10,"total_paid_amount":10,"currency_id":"ARS","shipping_cost":0,"status":"cancelled","status_detail":"expired","released":"yes","payment_type":"atm","marketplace":"NONE"}}]}));
            response.end();
        },
        getSubscriptionURL : function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"callback":"http://ec2-174-129-128-211.compute-1.amazonaws.com/index.html"}));
            response.end();
        },
        ipnCallback : function(request, response){
            console.log("---> IPN Callback received (GET): " + JSON.stringify(url.parse(request.url, true).query));
            
            request.on('data', function (chunk) {
                console.log("---> IPN Callback received (POST): " + chunk);
            });
              
            request.on('end', function() {
                response.writeHead(200, "OK", {'MP-Header' : 'IPN Callback'});
                response.write("IPN Receiver response !!!");
                response.end();
              });
        },
        refunds : function(request, response){
              response.writeHead(201, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({'msg':'pong'}));
            response.end();        
        }
              
};

exports.searchCollection = collectionsController.searchCollection;
exports.getSubscriptionURL = collectionsController.getSubscriptionURL;
exports.ipnCallback = collectionsController.ipnCallback;
exports.refunds = collectionsController.refunds;
exports.ping = collectionsController.ping;

// Mappings
urlMapping.add ([{
        pattern: '^/collections/search/echo$',
        action: {
            'GET':collectionsController.ping
        }
    },{
        pattern: '^/collections/search\?.*$',
        action: {
            'GET':collectionsController.searchCollection
        }
    },{
        pattern: '^/collections/notifications/subscriptions/[0-9]+([?].+)?$',
        action: {
            'GET':collectionsController.getSubscriptionURL
        }
    },{
        pattern: '^/collections/notifications/subscriptions/echo$',
        action: {
            'GET':collectionsController.ping
        }
    },{
        pattern: '^/ipncallback',
        action: collectionsController.ipnCallback
    },
    {
        pattern: '^/collections/[0-9]+([?].+)?/refunds$',
        action: {
            'POST':collectionsController.refunds
        }
    }
    ]);