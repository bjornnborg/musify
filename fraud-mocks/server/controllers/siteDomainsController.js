var url = require('url');
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var siteDomainsController = {
        getSiteDomain : function(request, response){
            var domain = getDomain(request);
            var uriRegExp = new RegExp('.+(..)');
            uriRegExp.exec(domain);
            var country = RegExp.$1;
            var siteDomain;

            if(country == "br"){
                siteDomain = {id: "mercadolivre.com.br", site_id: "MLB", country_id: "BR", locale:"pt_BR", tag:"ML"};
            }else if(country == "cr"){
                siteDomain = {id: "mercadolibre.co.cr", site_id: "MCR", country_id: "CR", locale:"es_CR", tag:"ML"};
            }else if(country == "ve"){
                siteDomain = {id: "mercadolibre.com.ve", site_id: "MLV", country_id: "VE", locale:"es_VE", tag:"ML"};
            }else if(country == "mx"){
                siteDomain = {id: "mercadolibre.com.mx", site_id: "MLM", country_id: "MX", locale:"es_MX", tag:"ML"};
            }else{
                siteDomain = {id: "mercadolibre.com.ar", site_id: "MLA", country_id: "AR", locale:"es_AR", tag:"ML"};
            }
            
            jsonHandler.showOKResponse(siteDomain, response);
        }
};

function getDomain(request){
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/site_domains/(.*)');
    uriRegExp.exec(pathname);
    var domain = RegExp.$1;
    
    return domain;
}

exports.getSiteDomain = siteDomainsController.getSiteDomain;

// Mappings
urlMapping.add ([{
        pattern: '^/site_domains/.*$',
        action: {
            'GET':siteDomainsController.getSiteDomain
        }
    }]);