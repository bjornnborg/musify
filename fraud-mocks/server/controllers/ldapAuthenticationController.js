var url = require('url');
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var ldapAuthenticationController = {
        authenticate : function(request, response){
            jsonHandler.getContent(request, function(data) {
               if ( data.login.toLowerCase() == 'testcrm' &&
                    data.password.toLowerCase() == 'qatest' ){
                   jsonHandler.showOKResponse({'user_login':data.login, 'authenticated':true}, response);
               }else{
                   jsonHandler.showBadRequestResponse({'message': 'Error validando las credenciales del Usuario: '+data.login, 'error':'invalid_grant'}, response);
               }
            });
        },

        ldapcust : function(request, response){

          var data = url.parse(request.url, true).query;
           if (data.ldap == 'fraudMP'){
               jsonHandler.showOKResponse({'user_login':data.ldap, 'authenticated':true, 'admin_id' : 123456}, response);
           }else{
               jsonHandler.showBadRequestResponse({'message': 'Error validando las credenciales del Usuario: '+data.login, 'error':'invalid_grant'}, response);
           }
            
        }


};


exports.authenticate = ldapAuthenticationController.authenticate;
exports.ldapcust = ldapAuthenticationController.ldapcust;

// Mappings
urlMapping.add ([{
        pattern: '^/permissions/ldapauthentication/?$',
        action: {
            'POST':ldapAuthenticationController.authenticate
        }
    },{
        pattern: '^/hercules/mapping/ldapcust?$',
        action: {
            'GET':ldapAuthenticationController.ldapcust
        }
    }
    ]);

///hercules/mapping/ldapcust