var url = require('url');
var querystring = require('querystring');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");
/**
* @author kzaporojets 03/08/2012- mockeo de api de categories
**/
var categoriesController = {
	getAll : function(request, response) {

		  var file = 'jsons/categories_all';
		  var fs = require('fs');
		  response.setHeader('Content-Type', 'application/json;charset=UTF-8')
		  response.setHeader('Content-Encoding', 'gzip')
		response.writeHead(200, {
			'Content-Type' : 'application/json; charset=utf-8'
		});

		  var filestream = fs.createReadStream(file);
		  filestream.on('data', function(chunk) {
		    response.write(chunk);
		  });
		  filestream.on('end', function() {
		    response.end();
		  });

	},
	getCategory : function(request, response) {

        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('^/categories/(\\w+)');
        uriRegExp.exec(pathname);
        var categoryId = RegExp.$1;


        if (categoryId == 'MLA27364') {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"id":"MLA27364","name":"Leon","picture":null,"permalink":null,"total_items_in_this_category":62,"path_from_root":[{"id":"MLA1743","name":"Autos, Motos y Otros"},{"id":"MLA1744","name":"Autos y Camionetas"},{"id":"MLA6109","name":"Seat"},{"id":"MLA27364","name":"Leon"}],"children_categories":[],"attribute_types":"attributes","settings":{"adult_content":false,"buying_allowed":false,"buying_modes":["classified"],"coverage_areas":"not_allowed","currencies":["ARS","USD"],"fragile":false,"immediate_payment":"optional","item_conditions":["new","used","not_specified"],"items_reviews_allowed":false,"max_description_length":50000,"max_pictures_per_item":15,"max_sub_title_length":70,"max_title_length":60,"price":"required","restrictions":[],"rounded_address":false,"seller_contact":"optional","shipping_modes":["not_specified","custom"],"shipping_options":[],"shipping_profile":"not_allowed","show_contact_information":true,"simple_shipping":"not_allowed","stock":"required","tags":[],"vip_subdomain":"auto","mirror_category":null,"listing_allowed":true,"maximum_price":null,"minimum_price":null}}));
            response.end();        
        } else if (categoryId == 'MLB5115') {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"id":"MLB5115","name":"Outras Marcas","picture":null,"permalink":null,"total_items_in_this_category":7717,"path_from_root":[{"id":"MLB1430","name":"Calçados, Roupas e Bolsas"},{"id":"MLB1456","name":"Óculos"},{"id":"MLB8378","name":"De Sol"},{"id":"MLB5115","name":"Outras Marcas"}],"children_categories":[],"attribute_types":"none","settings":{"adult_content":false,"buying_allowed":true,"buying_modes":["auction","buy_it_now"],"coverage_areas":"not_allowed","currencies":["BRL"],"immediate_payment":"optional","item_conditions":["new","not_specified","used"],"items_reviews_allowed":false,"listing_allowed":true,"max_description_length":50000,"max_pictures_per_item":12,"max_sub_title_length":70,"max_title_length":60,"maximum_price":null,"minimum_price":null,"mirror_category":null,"price":"required","restrictions":[],"rounded_address":false,"seller_contact":"not_allowed","shipping_modes":["custom","me1","me2","not_specified"],"shipping_options":["carrier","custom"],"shipping_profile":"optional","show_contact_information":false,"simple_shipping":"optional","stock":"required","vip_subdomain":"produto","tags":["others"]}}));
            response.end();        
        } else if (categoryId == 'MLB108806') {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"id":"MLB108806","name":"Suéters","picture":null,"permalink":null,"total_items_in_this_category":1658,"path_from_root":[{"id":"MLB1430","name":"Calçados, Roupas e Bolsas"},{"id":"MLB108803","name":"Casacos, Jaquetas e Coletes"},{"id":"MLB108806","name":"Suéters"}],"children_categories":[{"id":"MLB108809","name":"Feminino","total_items_in_this_category":967},{"id":"MLB70135","name":"Masculino","total_items_in_this_category":632},{"id":"MLB112673","name":"Menina","total_items_in_this_category":29},{"id":"MLB112674","name":"Menino","total_items_in_this_category":30}],"attribute_types":"variations","settings":{"adult_content":false,"buying_allowed":true,"buying_modes":["auction","buy_it_now"],"coverage_areas":"not_allowed","currencies":["BRL"],"immediate_payment":"optional","item_conditions":["new","not_specified","used"],"items_reviews_allowed":false,"listing_allowed":false,"max_description_length":50000,"max_pictures_per_item":36,"max_sub_title_length":70,"max_title_length":60,"maximum_price":null,"minimum_price":null,"mirror_category":null,"price":"required","restrictions":[],"rounded_address":false,"seller_contact":"not_allowed","shipping_modes":["custom","me1","me2","not_specified"],"shipping_options":["carrier","custom"],"shipping_profile":"optional","show_contact_information":false,"simple_shipping":"optional","stock":"required","vip_subdomain":"produto","tags":[]}}));
            response.end();        
         } else if (categoryId == 'MLB108111') {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"id":"MLB108111","name":"Suéters","picture":null,"permalink":null,"total_items_in_this_category":1658,"path_from_root":[{"id":"MLB1430","name":"Calçados, Roupas e Bolsas"},{"id":"MLB108803","name":"Casacos, Jaquetas e Coletes"},{"id":"MLB108806","name":"Suéters"}],"children_categories":[{"id":"MLB108809","name":"Feminino","total_items_in_this_category":967},{"id":"MLB70135","name":"Masculino","total_items_in_this_category":632},{"id":"MLB112673","name":"Menina","total_items_in_this_category":29},{"id":"MLB112674","name":"Menino","total_items_in_this_category":30}],"attribute_types":"variations","settings":{"adult_content":false,"buying_allowed":true,"buying_modes":["auction","buy_it_now"],"coverage_areas":"not_allowed","currencies":["BRL"],"immediate_payment":"optional","item_conditions":["new","not_specified","used"],"items_reviews_allowed":false,"listing_allowed":false,"max_description_length":50000,"max_pictures_per_item":36,"max_sub_title_length":70,"max_title_length":60,"maximum_price":null,"minimum_price":null,"mirror_category":null,"price":"required","restrictions":[],"rounded_address":false,"seller_contact":"not_allowed","shipping_modes":["custom","me1","me2","not_specified"],"shipping_options":["carrier","custom"],"shipping_profile":"optional","show_contact_information":false,"simple_shipping":"optional","stock":"required","vip_subdomain":"produto","tags":[]}}));
            response.end();        
        }  else if (categoryId == 'MLB38268') {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"id":"MLB38268","name":"Sony","picture":null,"permalink":null,"total_items_in_this_category":2913,"path_from_root":[{"id":"MLB1039","name":"Câmeras e Acessórios"},{"id":"MLB4239","name":"Pilhas, Carregadores e Bateria"},{"id":"MLB7045","name":"Carregadores"},{"id":"MLB9522","name":"De Baterias"},{"id":"MLB38268","name":"Sony"}],"children_categories":[],"attribute_types":"none","settings":{"adult_content":false,"buying_allowed":true,"buying_modes":["buy_it_now","auction"],"coverage_areas":"not_allowed","currencies":["BRL"],"fragile":false,"immediate_payment":"optional","item_conditions":["not_specified","used","new"],"items_reviews_allowed":false,"listing_allowed":true,"max_description_length":50000,"max_pictures_per_item":12,"max_sub_title_length":70,"max_title_length":60,"maximum_price":null,"minimum_price":null,"mirror_category":"MLB38159","price":"required","restrictions":[],"rounded_address":false,"seller_contact":"not_allowed","shipping_modes":["me1","custom","me2","not_specified"],"shipping_options":["custom","carrier"],"shipping_profile":"optional","show_contact_information":false,"simple_shipping":"optional","stock":"required","vip_subdomain":"produto","tags":[]}}));
            response.end();        
         } else if (categoryId == 'MLB44076') {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"id":"MLB44076","name":"Modeladores","picture":null,"permalink":null,"total_items_in_this_category":1754,"path_from_root":[{"id":"MLB1246","name":"Saúde e Beleza"},{"id":"MLB1263","name":"Cuidados com o Cabelo"},{"id":"MLB5404","name":"Chapinhas e Modeladores"},{"id":"MLB44076","name":"Modeladores"}],"children_categories":[],"attribute_types":"none","settings":{"adult_content":false,"buying_allowed":true,"buying_modes":["buy_it_now","auction"],"coverage_areas":"not_allowed","currencies":["BRL"],"fragile":false,"immediate_payment":"optional","item_conditions":["used","not_specified","new"],"items_reviews_allowed":false,"listing_allowed":true,"max_description_length":50000,"max_pictures_per_item":12,"max_sub_title_length":70,"max_title_length":60,"maximum_price":null,"minimum_price":null,"mirror_category":null,"price":"required","restrictions":[],"rounded_address":false,"seller_contact":"not_allowed","shipping_modes":["me1","me2","custom","not_specified"],"shipping_options":["carrier","custom"],"shipping_profile":"optional","show_contact_information":false,"simple_shipping":"optional","stock":"required","vip_subdomain":"produto","tags":[]}}));
            response.end();        
        } else if (categoryId == 'MLB5802') {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"id":"MLB5802","name":"Outros","picture":"http://resources.mlstatic.com/category/images/e501fc4c-f7f3-470c-94c6-7df2902a8ee2.png","permalink":null,"total_items_in_this_category":151352,"path_from_root":[{"id":"MLB5672","name":"Acessórios para Veículos"},{"id":"MLB5802","name":"Outros"}],"children_categories":[],"attribute_types":"none","settings":{"adult_content":false,"buying_allowed":true,"buying_modes":["auction","buy_it_now"],"coverage_areas":"not_allowed","currencies":["BRL"],"fragile":false,"immediate_payment":"optional","item_conditions":["not_specified","used","new"],"items_reviews_allowed":false,"listing_allowed":true,"max_description_length":50000,"max_pictures_per_item":12,"max_sub_title_length":70,"max_title_length":60,"maximum_price":null,"minimum_price":null,"mirror_category":null,"price":"required","restrictions":[],"rounded_address":false,"seller_contact":"not_allowed","shipping_modes":["me1","not_specified","custom"],"shipping_options":["custom"],"shipping_profile":"optional","show_contact_information":false,"simple_shipping":"optional","stock":"required","vip_subdomain":"produto","tags":["others"]}}));
            response.end();        
        } else if (categoryId == 'MLV62587') {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"id":"MLV62587","name":"Otros","picture":null,"permalink":null,"total_items_in_this_category":847,"path_from_root":[{"id":"MLV1430","name":"Ropa, Zapatos y Accesorios"},{"id":"MLV5208","name":"Zapatos"},{"id":"MLV9255","name":"Sandalias"},{"id":"MLV62587","name":"Otros"}],"children_categories":[],"attribute_types":"none","settings":{"adult_content":false,"buying_allowed":true,"buying_modes":["buy_it_now","auction"],"coverage_areas":"not_allowed","currencies":["VEF"],"fragile":false,"immediate_payment":"optional","item_conditions":["new","not_specified","used"],"items_reviews_allowed":false,"listing_allowed":true,"max_description_length":50000,"max_pictures_per_item":12,"max_sub_title_length":70,"max_title_length":60,"maximum_price":null,"minimum_price":null,"mirror_category":null,"price":"required","restrictions":[],"rounded_address":false,"seller_contact":"not_allowed","shipping_modes":["not_specified","custom","me1"],"shipping_options":["custom","carrier"],"shipping_profile":"optional","show_contact_information":false,"simple_shipping":"optional","stock":"required","vip_subdomain":"articulo","tags":["others"]}}));
            response.end();        
        } else if (categoryId == 'MLB38269') {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"id":"MLB38269","name":"Otros","picture":null,"permalink":null,"total_items_in_this_category":847,"path_from_root":[{"id":"MLB1000","name":"Ropa, Zapatos y Accesorios"},{"id":"MLV5208","name":"Zapatos"},{"id":"MLV9255","name":"Sandalias"},{"id":"MLV62587","name":"Otros"}],"children_categories":[],"attribute_types":"none","settings":{"adult_content":false,"buying_allowed":true,"buying_modes":["buy_it_now","auction"],"coverage_areas":"not_allowed","currencies":["VEF"],"fragile":false,"immediate_payment":"optional","item_conditions":["new","not_specified","used"],"items_reviews_allowed":false,"listing_allowed":true,"max_description_length":50000,"max_pictures_per_item":12,"max_sub_title_length":70,"max_title_length":60,"maximum_price":null,"minimum_price":null,"mirror_category":null,"price":"required","restrictions":[],"rounded_address":false,"seller_contact":"not_allowed","shipping_modes":["not_specified","custom","me1"],"shipping_options":["custom","carrier"],"shipping_profile":"optional","show_contact_information":false,"simple_shipping":"optional","stock":"required","vip_subdomain":"articulo","tags":["others"]}}));
            response.end();        
        } else {
	    response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            response.write(JSON.stringify({
                "id": "MLB7890",
                "name": "Samsung - Otros Modelos",
                "permalink": null,
                "total_items_in_this_category": 2340,
                "path_from_root": [
                    {
                        "id": "MLB1051",
                        "name": "Celulares y Teléfonos"
                    },
                    {
                        "id": "MLB1055",
                        "name": "Celulares"
                    },
                    {
                        "id": "MLB3519",
                        "name": "Samsung"
                    },
                    {
                        "id": "MLB7890",
                        "name": "Samsung - Otros Modelos"
                    }
                ],
                "children_categories": [],
                "attribute_types": "none",
                "settings": {
                    "adult_content": false,
                    "buying_allowed": true,
                    "buying_modes": [
                        "auction",
                        "buy_it_now"
                    ],
                    "coverage_areas": "not_allowed",
                    "currencies": [
                        "ARS"
                    ],
                    "immediate_payment": "optional",
                    "item_conditions": [
                        "new",
                        "not_specified",
                        "used"
                    ],
                    "items_reviews_allowed": false,
                    "listing_allowed": true,
                    "max_pictures_per_item": 6,
                    "maximum_price": null,
                    "minimum_price": null,
                    "mirror_category": null,
                    "price": "required",
                    "rounded_address": false,
                    "seller_contact": "not_allowed",
                    "shipping_modes": [
                        "custom",
                        "me2",
                        "not_specified"
                    ],
                    "shipping_options": [
                        "carrier",
                        "custom"
                    ],
                    "shipping_profile": "optional",
                    "show_contact_information": false,
                    "simple_shipping": "optional",
                    "stock": "required",
                    "vip_subdomain": "articulo",
                    "tags": []
                }
            }));
	    
	    response.end();
        }
	}

};


//exports.executeSearch = itemSearchController.executeSearch;

// Mappings
urlMapping.add ([{
	//"http://internal.mercadolibre.com/sites/MLA/categories/all"
		pattern: '^/sites/.*/categories/all',
		action: {
			'GET':categoriesController.getAll
		}
	},
	{
	        //"http://internal.mercadolibre.com/sites/MLA/categories/all"
	                pattern: '^/categories/',
	                action: {
	                        'GET':categoriesController.getCategory
	                }
	        }
]);
