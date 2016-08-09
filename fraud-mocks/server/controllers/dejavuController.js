var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var dejavuController = {
        metadata: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({
                "fields": {
                    "time": {
                        "order": "0",
                        "format": "yyyy-MM-dd HH:mm:ss"
                    },
                    "proxy_host": {
                        "order": "1"
                    },
                    "upstream_http_x_libra_upstreamhost": {
                        "order": "2"
                    },
                    "status": {
                        "order": "3"
                    },
                    "request_time": {
                        "order": "4"
                    },
                    "upstream_status": {
                        "order": "5"
                    },
                    "upstream_response_time": {
                        "order": "6"
                    },
                    "upstream_addr": {
                        "order": "7"
                    },
                    "http_x_forwarded_for": {
                        "order": "8"
                    },
                    "request_length": {
                        "order": "9"
                    },
                    "bytes_sent": {
                        "order": "10"
                    },
                    "request_method": {
                        "order": "11"
                    },
                    "scheme": {
                        "order": "12"
                    },
                    "request_uri": {
                        "order": "13"
                    },
                    "http_referer": {
                        "order": "14"
                    },
                    "nginx_host": {
                        "order": "15"
                    },
                    "http_host": {
                        "order": "16"
                    },
                    "http_user_agent": {
                        "order": "17"
                    },
                    "request_body": {
                        "order": "18"
                    },
                    "http_x_ssl_early_termination": {
                        "order": "19"
                    },
                    "response_headers": {
                        "order": "20"
                    },
                    "request_headers": {
                        "order": "21"
                    },
                    "http_cookie": {
                        "order": "22"
                    },
                    "http_x_public": {
                        "order": "23"
                    },
                    "x_request_id": {
                        "order": "24"
                    },
                    "x_device_type": {
                        "order": "25"
                    },
                    "x_device_forced_dektop": {
                        "order": "26"
                    },
                    "x_device_js": {
                        "order": "27"
                    },
                    "sid": {
                        "order": "28"
                    },
                    "page_id": {
                        "order": "29"
                    },
                    "site_id": {
                        "order": "30"
                    },
                    "dejavu_request_data": {
                        "order": "31"
                    },
                    "dejavu_response_data": {
                        "order": "32"
                    },
                    "user_id": {
                        "order": "33"
                    },
                    "user_nick": {
                        "order": "34"
                    },
                    "geoip": {
                        "order": "35"
                    },
                    "source": {
                        "order": "36"
                    }
                },
                "separators": {
                    "fields": "\t"
                }
            }));
            response.end();        
        },

    elasticsearch : function(request, response){

        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        var url_parts = url.parse(request.url,true);
        var sid = url_parts.query.sid
        
        console.log("sid: " + sid);
        if (sid == "abcd-1234-5678-0") {
        response.writeHead(404, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        } else {
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });
        response.write(JSON.stringify({
                               "paging": {
                                   "offset": 0,
                                   "limit": 10,
                                   "total": 2
                               },
                               "results": [
                                    {
            "request_id": "b43c862e-374e-44b1-bc71-26c479f01b9f",
            "sid": "602719fc-7597-4a71-a18a-439541286cbb",
            "time": "2014-03-10T15:51:10.000Z",
            "user_id": "119220924",
            "item_id": null,
            "leaf_category": null,
            "category_path_from_root": null,
            "category_flags": {
                "category_1276_5m": false,
                "category_1182_5m": false,
                "category_1499_5m": false,
                "category_3937_5m": false,
                "category_1574_5m": false,
                "category_1384_5m": false,
                "category_1039_2m": false,
                "category_1953_5m": false,
                "category_1367_2m": false,
                "category_1132_5m": false,
                "category_1747_2m": false,
                "category_1798_2m": false,
                "category_1246_5m": false,
                "category_1039_5m": false,
                "category_1132_2m": false,
                "category_1144_5m": false,
                "category_1684_2m": false,
                "category_1574_2m": false,
                "category_1384_2m": false,
                "category_1051_2m": false,
                "category_1953_2m": false,
                "category_1648_5m": false,
                "category_1276_2m": false,
                "category_3937_2m": false,
                "category_1747_5m": false,
                "category_1499_2m": false,
                "category_1182_2m": false,
                "category_1798_5m": false,
                "category_1071_2m": false,
                "category_1246_2m": false,
                "category_1367_5m": false,
                "category_1071_5m": false,
                "category_1051_5m": false,
                "category_1144_2m": false
            },
            "browser_data": {
                "os_device": null,
                "os_group": null,
                "group": null
            },
            "is_vip_page": null,
            "creation_date": "2014-03-10T20:56:42.291Z"
        },{
            "request_id": "b43c862e-374e-44b1-bc71-26c479f01b9f",
            "sid": "602719fc-7597-4a71-a18a-439541286cbb",
            "time": "2014-03-10T15:51:10.000Z",
            "user_id": "119220924",
            "item_id": null,
            "leaf_category": null,
            "category_path_from_root": "MLM123123",
            "category_flags": {
                "category_1276_5m": false,
                "category_1182_5m": false,
                "category_1499_5m": false,
                "category_3937_5m": false,
                "category_1574_5m": false,
                "category_1384_5m": false,
                "category_1039_2m": false,
                "category_1953_5m": false,
                "category_1367_2m": false,
                "category_1132_5m": false,
                "category_1747_2m": false,
                "category_1798_2m": false,
                "category_1246_5m": false,
                "category_1039_5m": false,
                "category_1132_2m": false,
                "category_1144_5m": false,
                "category_1684_2m": false,
                "category_1574_2m": false,
                "category_1384_2m": false,
                "category_1051_2m": false,
                "category_1953_2m": false,
                "category_1648_5m": false,
                "category_1276_2m": false,
                "category_3937_2m": false,
                "category_1747_5m": false,
                "category_1499_2m": false,
                "category_1182_2m": false,
                "category_1798_5m": false,
                "category_1071_2m": false,
                "category_1246_2m": false,
                "category_1367_5m": false,
                "category_1071_5m": false,
                "category_1051_5m": false,
                "category_1144_2m": false
            },
            "browser_data": {
                "os_device": null,
                "os_group": null,
                "group": null
            },
            "is_vip_page": null,
            "creation_date": "2014-03-10T20:56:42.291Z"
        }
                               ]
                      }));
            }
           response.end();
           return;
           
        }
};

exports.metadata = dejavuController.metadata;
exports.elasticsearch = dejavuController.elasticsearch

// Mappings
urlMapping.add ([
                {
                pattern: '^/interop/streams/topics/dejavu-stream/metadata',
                action: {
                    'GET':dejavuController.metadata
                    }
                },
                {
                pattern: '^/fraud/browser_pattern/search',
                action: {
                    'GET':dejavuController.elasticsearch
                    }
                }
 ]);
