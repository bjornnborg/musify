var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var fraudScoringController = {


        getResults: function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            var url_parts = url.parse(request.url,true);

            var user = url_parts.query.seller_id
            
            var tels = url_parts.query.tels
            
            console.log("fraudScoringController(seller_id,tels): " + user +" , "+ tels);
            
            var result = {"paging":{"offset":0,"limit":100,"total":2},"results":[{"_id":"MLU424528328","id":"424528328","site_id":"MLU","seller_id":"63383907","tels":["099557189"],"date_created":"2015-02-17T19:14:02.194Z","reg_version":"1"},{"_id":"MLU424546691","id":"424546691","site_id":"MLU","seller_id":"63383907","tels":["111"],"date_created":"2015-02-18T13:03:39.198Z","reg_version":"1"}]};
            response.write(JSON.stringify(result));
            response.end();        
        }
};


exports.getResults = fraudScoringController.getResults;
//resourceManager.saveResource('blacklist', 'DOC-123' ,[{"id":16690597,"admin_id":68537621,"approval_admin_id":68537621,"approval_dt":"2012-07-20T16:58:28.000-04:00","approval_user_admin":null,"category":"blacklist","comments":"INSERT BLACKLIST_MP Mig/ type_doc: DNI","cust_id":null,"flow":"MIG","from_app":"MP3","ins_dt":"2012-07-20T16:58:22.000-04:00","platform":"MP","reason":"FRAUDE_MP","reference_id":-1,"site_id":"MLA","status":"active","trunc_value":null,"type":"DOC","user_admin":null,"value":"27166944"}]);

// Mappings
urlMapping.add ([{
        pattern: '^/multiscoring_elastic_search/item_telephone/search',
        action: {
            'GET':fraudScoringController.getResults
        }
    }]);