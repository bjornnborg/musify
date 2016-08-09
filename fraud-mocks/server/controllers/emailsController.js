var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var veriSignService = require("./veriSignSecondFactorController");
var usersController = require("./usersController");
var urlMapping = require("../urlMapping");

var emailsController = {
               
    sendEmail : function(request, response) {
        jsonHandler.showOKResponse({status:'sended'},response);
    },

    isOK : function(request, response) {
        jsonHandler.showOKResponse('pong', response);
    }
};


exports.sendEmail = emailsController.sendEmail;
exports.isOK = emailsController.isOK;

// Mappings
urlMapping.add ([{
        pattern: '^/internal/email.*$',
        action: {
            'POST':emailsController.sendEmail,
            'GET':emailsController.isOK
        }
    }]);