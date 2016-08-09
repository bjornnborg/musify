var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var usersController = require("./usersController");
var urlMapping = require("../urlMapping");

var secondFactorTransactionsController = {

    getTransaction : function(request, response) {
        var transactionId = getTransactionId(request);
        if (transactionId == "") {
            showBadRequestResponse(response);
        } else {
            resourceManager.getResource('transaction_id', transactionId, response);
        }
    },

    createTransaction : function(request, response) {
        jsonHandler.getContent(request, function(transactionArgs) {
            var userId = transactionArgs.user_id;
            transactionId = createTransactionId(userId);
            jsonHandler.showOKResponse({
                transaction_id : transactionId
            }, response);
        });
    },

    updateTransaction : function(request, response) {
        var transactionId = getTransactionId(request);
        if (transactionId == "") {
            showBadRequestResponse(response);
        } else {
            jsonHandler.getContent(request, function(transactionArgs) {
                if (isValidTransaction(transactionId)) {
                    updateTransaction(transactionId);
                    jsonHandler.showOKResponse({
                        msg : "Success"
                    }, response);
                } else {
                    jsonHandler.showNotFoundResponse({
                        message : "Invalid session_data_key:" + transactionId,
                        error : "not_found",
                        status : 404,
                        "cause" : []
                    }, response);
                }
            });
        }
    },

    deleteTransaction : function(request, response) {
        var transactionId = getTransactionId(request);
        if (transactionId == "") {
            showBadRequestResponse(response);
        } else {
            resourceManager.deleteResource('transaction_id', transactionId, response);
        }
    }
};

function updateTransaction(transactionId) {
    transaction = resourceManager.searchResource('transaction_id', transactionId);
    resourceManager.getResourcesByType('transaction_id')[transactionId] = null;
    resourceManager.saveTemporalResource('transaction_id', transactionId, -1, {
        transaction_data : {
            user_id : transaction.transaction_data.user_id,
            status : "closed"
        }
    });
}

function showBadRequestResponse(response) {
    jsonHandler.showNotFoundResponse({
        "message" : "The following parameters are mandatory: transaction_id",
        "error" : "bad_request",
        "status" : 400,
        "cause" : []
    }, response);
}

function isValidTransaction(transactionId) {
    transaction = resourceManager.searchResource('transaction_id', transactionId);
    return transaction != null;
}

function createTransactionId(userId) {
    var transactionId = new Date().getTime() + Math.floor(Math.random() * 100000) + "nico" + '';
    resourceManager.saveTemporalResource('transaction_id', transactionId, -1, {
        transaction_data : {
            user_id : userId,
            status : "open"
        }
    });
    return transactionId;
}

function getTransactionId(request) {
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/internal/2fa/transactions/(\\w+)');
    uriRegExp.exec(pathname);
    var transactionIdKey = RegExp.$1;
    return transactionIdKey;

}

exports.getTransaction = secondFactorTransactionsController.getTransaction;
exports.createTransaction = secondFactorTransactionsController.createTransaction;
exports.updateTransaction = secondFactorTransactionsController.updateTransaction;
exports.deleteTransaction = secondFactorTransactionsController.deleteTransaction;

// Mappings
urlMapping.add ([{
        pattern: '^/internal/2fa/transaction(/)?$',
        action: {
            'POST':secondFactorTransactionsController.createTransaction
        }
    }, {
        pattern: '^/internal/2fa/transaction/(\\w+)?$',
        action: {
            'GET':secondFactorTransactionsController.getTransaction,
            'PUT':secondFactorTransactionsController.updateTransaction,
            'DELETE':secondFactorTransactionsController.deleteTransaction
        }
    }]);