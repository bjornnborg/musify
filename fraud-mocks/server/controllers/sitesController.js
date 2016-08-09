var url = require('url');
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var sitesController = {
        getSite : function(request, response){
            var siteId = getSite(request);

            if(siteId == "MLA"){
                site = {id: "MLA", sale_fees_mode:"pay_mock"};
            }else if(siteId == "MCR"){
                site = {id: "MCR", sale_fees_mode:"pay_mock"};
            }else if(siteId == "MLB"){
                site = {id: "MLB", sale_fees_mode:"pay_mock"};
            }else if(siteId == "MLV"){
                site = {id: "MLV", sale_fees_mode:"pay_mock"};
            }else if(siteId == "MCO"){
                site = {id: "MCO", sale_fees_mode:"pay_mock"};
            }else if(siteId == "MLM"){
                site = {id: "MLM", sale_fees_mode:"pay_mock"};
            }else{
                site = {id: "MLA", sale_fees_mode:"pay_mock"};
            }
            
            jsonHandler.showOKResponse(site, response);
        },

        //kzaporojets 03082012: mock que devuelve todos los sitios
        getSites: function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            response.write('[{"id":"MLA","name":"Argentina"},{"id":"MLB","name":"Brasil"},{"id":"MCO","name":"Colombia"},{"id":"MCR","name":"Costa Rica"},{"id":"MEC","name":"Ecuador"},{"id":"MLC","name":"Chile"},{"id":"MLM","name":"Mexico"},{"id":"MLU","name":"Uruguay"},{"id":"MLV","name":"Venezuela"},{"id":"MPA","name":"Panamá"},{"id":"MPE","name":"Perú"},{"id":"MPT","name":"Portugal"},{"id":"MRD","name":"Dominicana"}]');
            response.end();

        }

        /*


        fs.readFile('jsons/item_search', 'utf8', function (err, data) {
            if (err) {
                console.log('Error: ' + err);
                return;
            }


        });


        */
};

function getSite(request){
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/sites/(.*)');
    uriRegExp.exec(pathname);
    var siteId = RegExp.$1;
    
    return siteId;
}

exports.getSite = sitesController.getSite;

// Mappings
urlMapping.add ([{
        pattern: '^/sites/(MLA|MCR|MLB|MLV|MCO|MLM)',
        action: {
            'GET':sitesController.getSite
        }
    }, 
    {
        pattern: '^/sites',
        action: {
            'GET':sitesController.getSites
        }
    }
    ]);