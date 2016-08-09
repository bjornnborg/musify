var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var manualReviewController = {
    ping : function(request, response) {
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });
        response.write(JSON.stringify({
            "message" : "UsersFullService: OK!"
        }));
        response.end();
    },

    search : function(request, response) {
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        var data = url.parse(request.url, true).query;

        if (data["operation_id"] == 334456789) {

            response.write(JSON.stringify({
                "id" : 334456789,
                "salesforce_id" : 111111
            }));
            response.end();
        }
        else if (data["operation_id"] == 335456789) {

            response.write(JSON.stringify({
                "id" : 335456789,
                "salesforce_id" : 111111
            }));
            response.end();
        }
        else if (data["operation_id"] == 332456789) {

            response.write(JSON.stringify({
                "id" : 332456789,
                "salesforce_id" : 111111
            }));
            response.end();
        } else if (data["operation_id"] == 333456789) {

            response.write(JSON.stringify({
                "id" : 333456789,
                "salesforce_id" : 111222
            }));
            response.end();
        } else {
            response.write(JSON.stringify({}));
            response.end();
        }
    },

    getManualReview : function(request, response) {
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('/manual_review/(.*)');
        uriRegExp.exec(pathname);
        var paymentIdOw = RegExp.$1;

        if (paymentIdOw == 112233) {
            response.write(JSON.stringify({
                "id" : 112233,
                "salesforce_id" : 123458
            }));
            response.end();
        }
        else if (paymentIdOw == 333222111) {
            response.write(JSON.stringify({
                "id" : 333222111,
                "salesforce_id" : 111111
            }));
            response.end();
        }
        else if (paymentIdOw == 132456790) {
            response.write(JSON.stringify({
                "id" : 132456790,
                "salesforce_id" : 111111
            }));
            response.end();
        }
        else if (paymentIdOw == 334456789) {
            response.write(JSON.stringify({
                "id" : 334456789,
                "salesforce_id" : 111111
            }));
            response.end();
        }
        else if (paymentIdOw == 332456789) {
            response.write(JSON.stringify({
                "id" : 332456789,
                "salesforce_id" : 111111
            }));
            response.end();
        }else if (paymentIdOw == 335456789) {
            response.write(JSON.stringify({
                "id" : 332456789,
                "salesforce_id" : 111111
            }));
            response.end();
        } else if (paymentIdOw == 333456789) {
            response.write(JSON.stringify({
                "id" : 333456789,
                "salesforce_id" : 111222
            }));
            response.end();
        } else {
            response.write(JSON.stringify({}));
            response.end();
        }
    },
    postPayment : function(request, response) {
        response.writeHead(201, {
            'Content-Type' : 'application/json; charset=utf-8'
        });
        response.write(JSON.stringify({}));
        response.end();
    },
    putPayment : function(request, response) {
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });
        response.write(JSON.stringify({}));
        response.end();
    },
    getCrosses : function(request, response) {
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        var pathname = url.parse(request.url).pathname;
        var uriRegExp = new RegExp('/fraud/scoring/(\\d+)');
        uriRegExp.exec(pathname);

        var userId = RegExp.$1;

        console.log("el  userId es: " + userId);
        if (userId==160511611){
             response.write(JSON.stringify([
                {
                    "cross_type" : "payer",
                    "crosses" : {
                        "shippings" : [],
                        "doc" : 1,
                        "device_ml" : 12,
                        "tc" : 3,
                        "smart" : 5,
                        "shared_ip" : [ "189.203.218.196", "187.174.97.57", "189.242.133.111", "201.175.134.102", "201.175.140.2", "148.244.83.195", "187.174.97.11", "189.254.162.25",
                                "187.135.119.88", "187.162.89.161", "201.144.85.210", "189.203.217.102", "189.203.218.6", "201.175.140.222", "201.175.140.89", "201.175.143.54", "189.203.217.120",
                                "189.203.218.150", "187.141.102.198", "201.175.141.38", "187.233.182.188", "187.253.132.114", "201.154.197.195", "189.203.218.251", "190.99.100.48", "201.175.143.99",
                                "189.203.217.135", "201.175.134.133", "187.191.2.37", "189.203.217.54", "201.175.130.10", "187.135.119.116", "187.141.84.87", "187.233.165.139", "201.175.140.254",
                                "201.175.140.178", "189.128.140.210", "201.132.87.66", "201.175.142.89", "189.128.190.189", "172.16.60.45", "201.124.119.122", "187.210.112.50", "189.203.217.252" ],
                        "shipping" : 1,
                        "device_thm" : 7
                    },
                    "user" : {
                        "status" : "active",
                        "alternative_phone" : "2225759855",
                        "area_code" : " ",
                        "points" : 29,
                        "verified_country_code" : "52",
                        "has_mp_restriction" : false,
                        "email" : "victoriafranco0302@outlook.com",
                        "name" : "Ramírez Gómez, Victoria",
                        "id" : 147471100,
                        "registration_date" : "2013-10-14T16:59:07.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : false,
                        "verified_phone_number" : "0442223693402",
                        "nickname" : "VIKY0302",
                        "blacklist" : [],
                        "alternative_area_code" : "",
                        "phone" : "2223693402",
                        "address" : "Privada San Jorge 53"
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 2
                    }
                } ]));
            response.end();
        } else {
            if (userId==160511600){
             response.write(JSON.stringify([
                {
                    "cross_type" : "other",
                    "crosses" : {
                        "shippings" : [ {
                            "zip_code" : "72700",
                            "street_number" : "53"
                        } ],
                        "doc" : 1,
                        "device_ml" : 3,
                        "tc" : 1,
                        "smart" : 2,
                        "shared_ip" : [ "189.128.140.210", "189.203.218.150" ],
                        "shipping" : 1,
                        "device_thm" : 2
                    },
                    "user" : {
                        "status" : "active",
                        "alternative_phone" : "2851263",
                        "area_code" : "222",
                        "points" : 21,
                        "has_mp_restriction" : false,
                        "email" : "jcdavic@hotmail.com",
                        "name" : "aguilera daniel, victor david",
                        "id" : 36848832,
                        "registration_date" : "2003-12-13T11:07:24.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : false,
                        "blacklist" : [],
                        "alternative_area_code" : "222",
                        "nickname" : "JCDAVIC",
                        "phone" : "6141586",
                        "address" : "Prol. Lago de Patzcuaro 1318 Colonia Manantiales"
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 0
                    }
                },
                {
                    "cross_type" : "other",
                    "crosses" : {
                        "shippings" : [],
                        "doc" : 0,
                        "device_ml" : 2,
                        "tc" : 0,
                        "smart" : 1,
                        "shared_ip" : [],
                        "shipping" : 0,
                        "device_thm" : 1
                    },
                    "user" : {
                        "status" : "deactive",
                        "alternative_phone" : "",
                        "area_code" : " ",
                        "points" : 0,
                        "has_mp_restriction" : false,
                        "email" : "vdadmrra@hotmail.com",
                        "name" : "Daniel, David",
                        "id" : 150557123,
                        "registration_date" : "2013-12-08T21:32:12.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : true,
                        "blacklist" : [],
                        "alternative_area_code" : "",
                        "nickname" : "DADA550240",
                        "phone" : "2223693402",
                        "address" : null
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 0
                    }
                },
                {
                    "cross_type" : "other",
                    "crosses" : {
                        "shippings" : [],
                        "doc" : 0,
                        "device_ml" : 2,
                        "tc" : 0,
                        "smart" : 0,
                        "shared_ip" : [],
                        "shipping" : 0,
                        "device_thm" : 0
                    },
                    "user" : {
                        "status" : "active",
                        "alternative_phone" : "",
                        "area_code" : " ",
                        "points" : 0,
                        "has_mp_restriction" : false,
                        "email" : "alfonsoroman@outlook.com",
                        "name" : "DANIEL, VICTOR A",
                        "id" : 150212267,
                        "registration_date" : "2013-12-02T15:56:09.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : false,
                        "blacklist" : [],
                        "alternative_area_code" : "",
                        "nickname" : "DANIELVICTOR0102",
                        "phone" : "2223693402",
                        "address" : null
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 0
                    }
                },
                {
                    "cross_type" : "collector",
                    "crosses" : {
                        "shippings" : [],
                        "doc" : 0,
                        "device_ml" : 1,
                        "tc" : 0,
                        "smart" : 0,
                        "shared_ip" : [],
                        "shipping" : 0,
                        "device_thm" : 0
                    },
                    "user" : {
                        "status" : "deactive",
                        "alternative_phone" : "",
                        "area_code" : " ",
                        "points" : 0,
                        "has_mp_restriction" : false,
                        "email" : "armestomodel_2908@hotmail.com",
                        "name" : "roman, rosa",
                        "id" : 136958038,
                        "registration_date" : "2013-04-21T12:34:37.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : true,
                        "blacklist" : [],
                        "alternative_area_code" : "",
                        "nickname" : "ROMANROSA86",
                        "phone" : "2226141586",
                        "address" : null
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 0
                    }
                },
                {
                    "cross_type" : "payer",
                    "crosses" : {
                        "shippings" : [],
                        "doc" : 1,
                        "device_ml" : 12,
                        "tc" : 3,
                        "smart" : 5,
                        "shared_ip" : [ "189.203.218.196", "187.174.97.57", "189.242.133.111", "201.175.134.102", "201.175.140.2", "148.244.83.195", "187.174.97.11", "189.254.162.25",
                                "187.135.119.88", "187.162.89.161", "201.144.85.210", "189.203.217.102", "189.203.218.6", "201.175.140.222", "201.175.140.89", "201.175.143.54", "189.203.217.120",
                                "189.203.218.150", "187.141.102.198", "201.175.141.38", "187.233.182.188", "187.253.132.114", "201.154.197.195", "189.203.218.251", "190.99.100.48", "201.175.143.99",
                                "189.203.217.135", "201.175.134.133", "187.191.2.37", "189.203.217.54", "201.175.130.10", "187.135.119.116", "187.141.84.87", "187.233.165.139", "201.175.140.254",
                                "201.175.140.178", "189.128.140.210", "201.132.87.66", "201.175.142.89", "189.128.190.189", "172.16.60.45", "201.124.119.122", "187.210.112.50", "189.203.217.252" ],
                        "shipping" : 1,
                        "device_thm" : 7
                    },
                    "user" : {
                        "status" : "active",
                        "alternative_phone" : "2225759855",
                        "area_code" : " ",
                        "points" : 29,
                        "verified_country_code" : "52",
                        "has_mp_restriction" : false,
                        "email" : "victoriafranco0302@outlook.com",
                        "name" : "Ramírez Gómez, Victoria",
                        "id" : 160511600,
                        "registration_date" : "2013-10-14T16:59:07.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : false,
                        "verified_phone_number" : "0442223693402",
                        "nickname" : "VIKY0302",
                        "blacklist" : [],
                        "alternative_area_code" : "",
                        "phone" : "2223693402",
                        "address" : "Privada San Jorge 53"
                    },
                    "identity" : {
                        "phone" : true, 
                        "doc"   : true, 
                        "recaptcha" : true
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 2
                    }
                } ]));
            response.end();
        }

        if (userId==176856382){
          jsonHandler.showInternalServerErrorResponse({'message':"Internal Error"}, response);
        }

        if (userId==176856383){
          jsonHandler.showBadRequestResponse({'message':"Bad Request"}, response);
        }

        if (userId==160511601){
             response.write(JSON.stringify([
                {
                    "cross_type" : "other",
                    "crosses" : {
                        "shippings" : [ {
                            "zip_code" : "72700",
                            "street_number" : "53"
                        } ],
                        "doc" : 1,
                        "device_ml" : 3,
                        "tc" : 1,
                        "smart" : 2,
                        "shared_ip" : [ "189.128.140.210", "189.203.218.150" ],
                        "shipping" : 1,
                        "device_thm" : 2
                    },
                    "user" : {
                        "status" : "active",
                        "alternative_phone" : "2851263",
                        "area_code" : "222",
                        "points" : 21,
                        "has_mp_restriction" : false,
                        "email" : "jcdavic@hotmail.com",
                        "name" : "aguilera daniel, victor david",
                        "id" : 36848832,
                        "registration_date" : "2003-12-13T11:07:24.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : false,
                        "blacklist" : [],
                        "alternative_area_code" : "222",
                        "nickname" : "JCDAVIC",
                        "phone" : "6141586",
                        "address" : "Prol. Lago de Patzcuaro 1318 Colonia Manantiales"
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 0
                    }
                },
                {
                    "cross_type" : "collector",
                    "crosses" : {
                        "shippings" : [],
                        "doc" : 0,
                        "device_ml" : 0,
                        "tc" : 0,
                        "smart" : 0,
                        "shared_ip" : [],
                        "shipping" : 0,
                        "device_thm" : 0
                    },
                    "user" : {
                        "status" : "deactive",
                        "alternative_phone" : "",
                        "area_code" : " ",
                        "points" : 0,
                        "has_mp_restriction" : false,
                        "email" : "armestomodel_2908@hotmail.com",
                        "name" : "roman, rosa",
                        "id" : 136958038,
                        "registration_date" : "2013-04-21T12:34:37.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : true,
                        "blacklist" : [],
                        "alternative_area_code" : "",
                        "nickname" : "ROMANROSA86",
                        "phone" : "2226141586",
                        "address" : null
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 0
                    }
                },
                {
                    "cross_type" : "payer",
                    "crosses" : {
                        "shippings" : [],
                        "doc" : 1,
                        "device_ml" : 12,
                        "tc" : 3,
                        "smart" : 5,
                        "shared_ip" : [ "189.203.218.196", "187.174.97.57", "189.242.133.111", "201.175.134.102", "201.175.140.2", "148.244.83.195", "187.174.97.11", "189.254.162.25",
                                "187.135.119.88", "187.162.89.161", "201.144.85.210", "189.203.217.102", "189.203.218.6", "201.175.140.222", "201.175.140.89", "201.175.143.54", "189.203.217.120",
                                "189.203.218.150", "187.141.102.198", "201.175.141.38", "187.233.182.188", "187.253.132.114", "201.154.197.195", "189.203.218.251", "190.99.100.48", "201.175.143.99",
                                "189.203.217.135", "201.175.134.133", "187.191.2.37", "189.203.217.54", "201.175.130.10", "187.135.119.116", "187.141.84.87", "187.233.165.139", "201.175.140.254",
                                "201.175.140.178", "189.128.140.210", "201.132.87.66", "201.175.142.89", "189.128.190.189", "172.16.60.45", "201.124.119.122", "187.210.112.50", "189.203.217.252" ],
                        "shipping" : 1,
                        "device_thm" : 7
                    },
                    "user" : {
                        "status" : "active",
                        "alternative_phone" : "2225759855",
                        "area_code" : " ",
                        "points" : 29,
                        "verified_country_code" : "52",
                        "has_mp_restriction" : false,
                        "email" : "victoriafranco0302@outlook.com",
                        "name" : "Ramírez Gómez, Victoria",
                        "id" : 147471100,
                        "registration_date" : "2013-10-14T16:59:07.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : false,
                        "verified_phone_number" : "0442223693402",
                        "nickname" : "VIKY0302",
                        "blacklist" : [],
                        "alternative_area_code" : "",
                        "phone" : "2223693402",
                        "address" : "Privada San Jorge 53"
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 2
                    }
                } ]));
            response.end();
        }



        response.write(JSON.stringify([
                {
                    "cross_type" : "other",
                    "crosses" : {
                        "shippings" : [ {
                            "zip_code" : "72700",
                            "street_number" : "53"
                        } ],
                        "doc" : 1,
                        "device_ml" : 3,
                        "tc" : 1,
                        "smart" : 2,
                        "shared_ip" : [ "189.128.140.210", "189.203.218.150" ],
                        "shipping" : 1,
                        "device_thm" : 2
                    },
                    "user" : {
                        "status" : "active",
                        "alternative_phone" : "2851263",
                        "area_code" : "222",
                        "points" : 21,
                        "has_mp_restriction" : false,
                        "email" : "jcdavic@hotmail.com",
                        "name" : "aguilera daniel, victor david",
                        "id" : 36848832,
                        "registration_date" : "2003-12-13T11:07:24.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : false,
                        "blacklist" : [],
                        "alternative_area_code" : "222",
                        "nickname" : "JCDAVIC",
                        "phone" : "6141586",
                        "address" : "Prol. Lago de Patzcuaro 1318 Colonia Manantiales"
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 0
                    }
                },
                {
                    "cross_type" : "other",
                    "crosses" : {
                        "shippings" : [],
                        "doc" : 0,
                        "device_ml" : 2,
                        "tc" : 0,
                        "smart" : 1,
                        "shared_ip" : [],
                        "shipping" : 0,
                        "device_thm" : 1
                    },
                    "user" : {
                        "status" : "deactive",
                        "alternative_phone" : "",
                        "area_code" : " ",
                        "points" : 0,
                        "has_mp_restriction" : false,
                        "email" : "vdadmrra@hotmail.com",
                        "name" : "Daniel, David",
                        "id" : 150557123,
                        "registration_date" : "2013-12-08T21:32:12.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : true,
                        "blacklist" : [],
                        "alternative_area_code" : "",
                        "nickname" : "DADA550240",
                        "phone" : "2223693402",
                        "address" : null
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 0
                    }
                },
                {
                    "cross_type" : "other",
                    "crosses" : {
                        "shippings" : [],
                        "doc" : 0,
                        "device_ml" : 2,
                        "tc" : 0,
                        "smart" : 0,
                        "shared_ip" : [],
                        "shipping" : 0,
                        "device_thm" : 0
                    },
                    "user" : {
                        "status" : "active",
                        "alternative_phone" : "",
                        "area_code" : " ",
                        "points" : 0,
                        "has_mp_restriction" : false,
                        "email" : "alfonsoroman@outlook.com",
                        "name" : "DANIEL, VICTOR A",
                        "id" : 150212267,
                        "registration_date" : "2013-12-02T15:56:09.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : false,
                        "blacklist" : [],
                        "alternative_area_code" : "",
                        "nickname" : "DANIELVICTOR0102",
                        "phone" : "2223693402",
                        "address" : null
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 0
                    }
                },
                {
                    "cross_type" : "other",
                    "crosses" : {
                        "shippings" : [],
                        "doc" : 0,
                        "device_ml" : 1,
                        "tc" : 0,
                        "smart" : 0,
                        "shared_ip" : [],
                        "shipping" : 0,
                        "device_thm" : 0
                    },
                    "user" : {
                        "status" : "deactive",
                        "alternative_phone" : "",
                        "area_code" : " ",
                        "points" : 0,
                        "has_mp_restriction" : false,
                        "email" : "armestomodel_2908@hotmail.com",
                        "name" : "roman, rosa",
                        "id" : 136958038,
                        "registration_date" : "2013-04-21T12:34:37.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : true,
                        "blacklist" : [],
                        "alternative_area_code" : "",
                        "nickname" : "ROMANROSA86",
                        "phone" : "2226141586",
                        "address" : null
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 0
                    }
                },
                {
                    "cross_type" : "payer",
                    "crosses" : {
                        "shippings" : [],
                        "doc" : 1,
                        "device_ml" : 12,
                        "tc" : 3,
                        "smart" : 5,
                        "shared_ip" : [ "189.203.218.196", "187.174.97.57", "189.242.133.111", "201.175.134.102", "201.175.140.2", "148.244.83.195", "187.174.97.11", "189.254.162.25",
                                "187.135.119.88", "187.162.89.161", "201.144.85.210", "189.203.217.102", "189.203.218.6", "201.175.140.222", "201.175.140.89", "201.175.143.54", "189.203.217.120",
                                "189.203.218.150", "187.141.102.198", "201.175.141.38", "187.233.182.188", "187.253.132.114", "201.154.197.195", "189.203.218.251", "190.99.100.48", "201.175.143.99",
                                "189.203.217.135", "201.175.134.133", "187.191.2.37", "189.203.217.54", "201.175.130.10", "187.135.119.116", "187.141.84.87", "187.233.165.139", "201.175.140.254",
                                "201.175.140.178", "189.128.140.210", "201.132.87.66", "201.175.142.89", "189.128.190.189", "172.16.60.45", "201.124.119.122", "187.210.112.50", "189.203.217.252" ],
                        "shipping" : 1,
                        "device_thm" : 7
                    },
                    "user" : {
                        "status" : "active",
                        "alternative_phone" : "2225759855",
                        "area_code" : " ",
                        "points" : 29,
                        "verified_country_code" : "52",
                        "has_mp_restriction" : false,
                        "email" : "victoriafranco0302@outlook.com",
                        "name" : "Ramírez Gómez, Victoria",
                        "id" : 147471100,
                        "registration_date" : "2013-10-14T16:59:07.000-04:00",
                        "site_id" : "MLM",
                        "has_verif_status" : false,
                        "verified_phone_number" : "0442223693402",
                        "nickname" : "VIKY0302",
                        "blacklist" : [],
                        "alternative_area_code" : "",
                        "phone" : "2223693402",
                        "address" : "Privada San Jorge 53"
                    },
                    "payment_summary" : {
                        "last_3_days_payments_qty" : 0,
                        "last_30_days_payments_qty" : 2
                    }
                } ]));
            response.end();
        }
    },
    indexCases : function(request, response) {

        jsonHandler.getContent(request, function(topicsArgs){

            var _id = topicsArgs._id;
            var id = topicsArgs.id;

            delete topicsArgs["id"];

            topicsArgs["user_id"] = id;

            console.log("indexando caso: " + JSON.stringify(topicsArgs));

            resourceManager.saveTemporalResource('manualReviewCases',_id,-1,topicsArgs);

            jsonHandler.showOKResponse({message:"resource created","status":201,"id":44556677}, response);

        });
    },
    indexPayment : function(request, response) {

        jsonHandler.getContent(request, function(topicsArgs){

            var _id = topicsArgs._id;

            console.log("indexando payment: " + JSON.stringify(topicsArgs));

            resourceManager.saveTemporalResource('manualReviewPayments',_id,-1,topicsArgs);

            jsonHandler.showOKResponse({message:"resource created","status":201,"id":44556677}, response);

        });

    },


    ping : function(request, response) {
        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });
        response.write(JSON.stringify({
            "message" : "UsersFullService: OK!"
        }));
        response.end();
    },

    createCaseAll : function(request, response){
          response.writeHead(201, {
            'Content-Type' : 'application/json; charset=utf-8'
        });
        response.write(JSON.stringify({'msg':'pong'}));
        response.end();
    },

    indexAction : function(request, response) {

        jsonHandler.getContent(request, function(topicsArgs){

            var _id = topicsArgs._id;

            console.log("indexando action: " + JSON.stringify(topicsArgs));

            resourceManager.saveTemporalResource('manualReviewActions',_id,-1,topicsArgs);

            jsonHandler.showOKResponse({message:"resource created","status":201,"id":44556677}, response);

        });

    },
    getIndexPayment : function(request, response) {

        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        var url_parts = url.parse(request.url,true);

        var id = url_parts.query.id;

        console.log("get indexado id: " + id);

        var resp = resourceManager.searchResource('manualReviewPayments', id);

        console.log("get indexado resp: " + resp);

        if (resp != null ) {

            response.write(JSON.stringify({"data":resp}));


        }else{
            response.write(JSON.stringify({"data":[]}));
        }

        response.end();

    },
    getIndexAction : function(request, response) {

        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        var url_parts = url.parse(request.url,true);

        var id = url_parts.query.id;

        console.log("get indexado id: " + id);

        var resp = resourceManager.searchResource('manualReviewActions', id);

        console.log("get indexado resp: " + resp);

        if (resp != null ) {

            response.write(JSON.stringify({"data":resp}));


        }else{
            response.write(JSON.stringify({"data":[]}));
        }

        response.end();

    },
    getIndexCases : function(request, response) {

        response.writeHead(200, {
            'Content-Type' : 'application/json; charset=utf-8'
        });

        var url_parts = url.parse(request.url,true);

        var id = url_parts.query.id;

        console.log("get indexado id: " + id);

        var resp = resourceManager.searchResource('manualReviewCases', id);

        console.log("get indexado resp: " + resp);

        if (resp != null ) {

            response.write(JSON.stringify({"data":resp}));


        }else{
            response.write(JSON.stringify({"data":[]}));
        }

        response.end();

    },
    searchCases: function(request, response) {
        response.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });

        var url_parts = url.parse(request.url,true);

        var last_seller = url_parts.query.last_seller;
        var status = url_parts.query.status;
        var _id = url_parts.query._id;
        var id = url_parts.query.id;
        var type = url_parts.query.type;

        console.log("last_seller: " + last_seller);
        console.log("status: " + status);
        console.log("_id: " + _id);


        if (request.url.indexOf("/manual_review/cases/search?site_id=MLA&type=user&last_seller=969343&owner=null&status=open&sort=due_date:asc,date_created:asc") != -1
            || request.url.indexOf("/manual_review/cases/search?site_id=MLA&type=test&last_seller=969343&owner=null&status=open&sort=due_date:asc,date_created:asc") != -1 ||
            request.url.indexOf('/manual_review/cases/search?site_id=MLA&type=user&is_identity_valid=false&owner=null&status=open&sort=due_date:asc,date_created:asc') != -1) {
            response.write(JSON.stringify(
                {
                    "paging": {
                        "total": 0,
                        "limit": 50,
                        "offset": 0
                    },
                    "results": []
                }));
        } else if (request.url.indexOf("/manual_review/cases/search?status=closed&id=165395433") != -1) {
            response.write(JSON.stringify(
                {
                    "paging": {
                        "total": 0,
                        "limit": 50,
                        "offset": 0
                    },
                    "results": []
                }));

        } else if (request.url.indexOf("/manual_review/cases/search%3Fid=147460417") != -1) {
            response.write(JSON.stringify(
                {
                    "paging": {
                        "total": 0,
                        "limit": 50,
                        "offset": 0
                    },
                    "results": [
                                {
                                  "_id": "55bda803e4b085402c0d34e6",
                                  "status": "open",
                                  "type": "money_out",
                                  "id": "147460417",
                                  "site_id": "MLA",
                                  "date_created": "2015-08-02T01:17:55.789-04:00",
                                  "comment": "PF MP. Cuenta guest sin cruces de riesgo: cruce por IP y doc 11320845 con pagos antiguos con log. Tit coincide, no macheo datos. Pago off bajo riesgo.",
                                  "last_updated": "2015-08-26T22:59:27.633-04:00",
                                  "owner": "wcarvalho",
                                  "is_test_case": "N",
                                  "due_date": null,
                                  "priority": 24.134400000000003,
                                  "detail": {},
                                  "second_revision": null,
                                  "reg_version": 5,
                                  "period_30days": null,
                                  "rule_id": 180,
                                  "assigned_date": "2015-08-03T16:26:36.032-04:00"
                                }
                            ]
                }));


              } else if (request.url.indexOf("/manual_review/cases/search?sf_cases.sf_case_number=40776787") != -1) {
                response.write(JSON.stringify(
                  {
                    "paging": {
                      "total": 0,
                      "limit": 50,
                      "offset": 0
                    },
                    "results": [
                      {
                        "_id": "56eaf58fe4b05a1c25677a9c",
                        "status": "closed",
                        "type": "tko",
                        "id": "8289569",
                        "site_id": "MLB",
                        "date_created": "2016-03-17T14: 21: 03.913-04: 00",
                        "comment": "Cadastropassoupeloprocessodereabilita��odetko, semnovosind�ciosdeumanovainvas�o,permanecenomesmostatus.PS",
                        "last_updated": "2016-03-19T06: 44: 51.624-04: 00",
                        "owner": "spereira",
                        "is_test_case": "N",
                        "due_date": "2016-03-19T14: 21: 03.913-04: 00",
                        "priority": 1,
                        "detail": {
                          "crosses_quantity": 29,
                          "classified_items_quantity_2d": 0,
                          "pxq_7d": 0,
                          "bids_quantity_7d": 0,
                          "last_modified_personal_data_date": "2016-03-17T09: 25: 02.000-04: 00",
                          "tpv_7d": 0,
                          "ques_received_quantity_12h": 0,
                          "payer_registration_date": "2002-02-19T00: 00: 00.000-04: 00",
                          "goldlist": "N",
                          "tpv_12h": 0,
                          "reviews_quantity_12h": 0,
                          "risk_categ_7d": 0,
                          "points": 46,
                          "classified_items_quantity_7d": 0,
                          "deactive_account_crosses_quantity": 0,
                          "event_quantity": 0,
                          "ques_quantity_7d": 0,
                          "gmv_7d": 0,
                          "tpv_2d": 0,
                          "ques_received_quantity_2d": 0,
                          "pxq_12h": 0,
                          "user_type": "normal",
                          "gmv_2d": 0,
                          "pxq_2d": 0,
                          "ques_quantity_12h": 0,
                          "risk_categ_2d": 0,
                          "email_domain": "gmail.com",
                          "bids_quantity_12h": 0,
                          "classified_items_quantity_12h": 0,
                          "sf_cases": [
                            {
                              "sf_history": [
                                {
                                  "sf_field": "created",
                                  "sf_old_value": "",
                                  "sf_created_date_his": "2016-03-17T18: 20: 59.000+0000",
                                  "sf_new_value": ""
                                },
                                {
                                  "sf_field": "Status",
                                  "sf_old_value": "Nuevo",
                                  "sf_created_date_his": "2016-03-17T18: 22: 26.000+0000",
                                  "sf_new_value": "Abierto"
                                }
                              ],
                              "sf_current_queue_id": "a0GF000000IA7yNMAT",
                              "sf_comment": [
                                {
                                  "sf_comment_body": "Conforme(Logcaso: Den-STKO56911619), FoiConfirmadoque(ERICBORGESID8289569), SofreuTKOperiodo17/03/201602: 00Apartirdosseguintesindicios: -AlteraCAo(regiaodeacesso).-LogdeRecuperacao/EstornonamesmaFAQAreabilitacaoserarealizadaaposoresetdosfatoresdeseguranca, enviadoemailaousuariocomoprocedimentoderecuperacaodecontanestemesmolog.PSML",
                                  "sf_created": "2016-03-17T18: 21: 44.000+0000",
                                  "sf_created_by": "TassioRibeiro"
                                }
                              ],
                              "sf_request_other": "",
                              "sf_status": "Abierto",
                              "sf_description": "-",
                              "sf_id": "500F000000rKm6XIAS",
                              "sf_owner_id": "005F00000045uTVIAY",
                              "sf_case_number": "40776787",
                              "sf_created_date": "2016-03-17T18: 20: 57.000+0000",
                              "sf_origin": "Portaldeayuda",
                              "sf_current_queue_name": "TassioRibeiro",
                              "sf_prev_queue_id": "a0GF000000IA7yNMAT",
                              "sf_record_type_id": "012F0000001K0WfIAK",
                              "sf_record_type_name": "TKO"
                            }
                          ],
                          "bids_quantity_2d": 0,
                          "subtype": "SF-TKO",
                          "gmv_12h": 0,
                          "verification_status": "DOK",
                          "risk_categ_12h": 0,
                          "reviews_quantity_4d": 0,
                          "ques_received_quantity_7d": 0,
                          "ques_quantity_2d": 0
                        },
                        "second_revision": null,
                        "reg_version": 4,
                        "period_30days": null,
                        "rule_id": 1312,
                        "assigned_date": "2016-03-19T06: 35: 40.121-04: 00"
                      }
                    ]
                  }));


        } else if (request.url.indexOf("/manual_review/cases/search?site_id=MLA&last_seller=969343&owner=null&status=open&sort=due_date:asc,date_created:asc") != -1) {
            response.write(JSON.stringify(
                {
                    "paging": {
                        "total": 0,
                        "limit": 50,
                        "offset": 0
                    },
                    "results": []
                }));
        } else if (request.url.indexOf("/manual_review/cases/search?site_id=MLA&last_seller=5305304&owner=null&status=open&sort=due_date:asc,date_created:asc") != -1
                        || request.url.indexOf("/manual_review/cases/search?last_seller=325625") != -1
                        || request.url.indexOf("/manual_review/cases/search?site_id=MLA&type=user&last_seller=5305304&owner=null&status=open&sort=due_date:asc,date_created:asc") != -1
                        || request.url.indexOf("/manual_review/cases/search?site_id=MLA&type=test&last_seller=325625&pending_review_payment_quantity[range]=3:10&owner=null&status=open&sort=due_date:asc,date_created:asc") != -1) {


            response.write(JSON.stringify(
                {
                    "paging": {
                        "offset": 0,
                        "limit": 100,
                        "total": 1
                    },
                    "results": [
                        {
                            "_id": "53616a93e4b0675ee5ac4930",
                            "status": "open",
                            "type": "user",
                            "id": "20705799",
                            "site_id": "MLB",
                            "date_created": "2014-04-30T17:26:43.368-04:00",
                            "comment": null,
                            "last_updated": null,
                            "owner": null,
                            "last_seller": 39297069,
                            "last_marketplace": "MELI",
                            "is_test_case": "N",
                            "due_date": null,
                            "pending_review_payment_quantity": 1,
                            "pending_review_payment_amount": 10.7,
                            "worst_risk": 0,
                            "priority": 0,
                            "detail": {
                                "last_bin": "542974",
                                "newest_collector_registration_date": "2007-09-18T15:07:04.000-04:00",
                                "is_cc_safety": "N",
                                "questions_quantity_15d": 0,
                                "last_categ": "Arte e Artesanato",
                                "crosses_quantity": 16,
                                "last_ip_region": "rio de janeiro",
                                "last_modified_personal_data_date": "2014-03-20T10:41:19.000-04:00",
                                "validated_phone": "Y",
                                "bids_quantity_15d": 1,
                                "email_domain": "yahoo.com.br",
                                "use_mercadoenvios": "Y",
                                "payer_registration_date": "2012-01-17T18:01:47.000-04:00",
                                "is_shipping_safety": "Y",
                                "shippings_quantity_15d": 1,
                                "credit_cards_quantity_15d": 1,
                                "identifications_quantity_15d": 1,
                                "has_payments_data_in_greylist": "N",
                                "approved_payment_amount_15d": 0,
                                "points": 0,
                                "crosses_quantity_with_payments_2d": 0,
                                "deactive_account_crosses_quantity": 2,
                                "approved_payment_quantity_15d": 0,
                                "last_zip_code": "28035040"
                            },
                            "reg_version": 1
                        }
                    ]
                }));
        } else if (_id=="53616a93e4b0675ee5ac4946") {
            response.write(JSON.stringify(
                {
                    "paging": {
                        "total": 0,
                        "limit": 50,
                        "offset": 0
                    },
                    "results": []
                }));
        } else if (_id=="53616a93e4b0675ee5ac4947") {
                response.write(JSON.stringify(
                    {
                        "paging": {
                            "offset": 0,
                            "limit": 100,
                            "total": 1
                        },
                        "results": [
                            {
                                "_id": "53616a93e4b0675ee5ac4930",
                                "status": "open",
                                "type": "user",
                                "id": "20705799",
                                "site_id": "MLB",
                                "date_created": "2014-04-30T17:26:43.368-04:00",
                                "comment": null,
                                "last_updated": null,
                                "owner": null,
                                "is_test_case": "N",
                                "due_date": null,
                                "priority": 0,
                                "detail": {
                                    "last_seller": 39297069,
                                    "last_marketplace": "MELI",
                                    "pending_review_payment_quantity": 1,
                                    "pending_review_payment_amount": 10.7,
                                    "worst_risk": 0,
                                   "last_bin": "542974",
                                    "newest_collector_registration_date": "2007-09-18T15:07:04.000-04:00",
                                    "is_cc_safety": "N",
                                    "questions_quantity_15d": 0,
                                    "last_categ": "Arte e Artesanato",
                                    "crosses_quantity": 16,
                                    "last_ip_region": "rio de janeiro",
                                    "last_modified_personal_data_date": "2014-03-20T10:41:19.000-04:00",
                                    "validated_phone": "Y",
                                    "bids_quantity_15d": 1,
                                    "email_domain": "yahoo.com.br",
                                    "use_mercadoenvios": "Y",
                                    "payer_registration_date": "2012-01-17T18:01:47.000-04:00",
                                    "is_shipping_safety": "Y",
                                    "shippings_quantity_15d": 1,
                                    "credit_cards_quantity_15d": 1,
                                    "identifications_quantity_15d": 1,
                                    "has_payments_data_in_greylist": "N",
                                    "approved_payment_amount_15d": 0,
                                    "points": 0,
                                    "crosses_quantity_with_payments_2d": 0,
                                    "deactive_account_crosses_quantity": 2,
                                    "approved_payment_quantity_15d": 0,
                                    "last_zip_code": "28035040"
                                },
                                "reg_version": 4
                            }
                        ]
                    }));
        } else if (type == "aml_user" && id =="161471719") {
            response.write(JSON.stringify(
                 {"paging": {"offset": 0, "limit": 100, "total": 1 },
                  "results": [{"_id": "54404beae4b041e4bd0924c9", "status": "open", "type": "aml_user", "id": "161471719", "site_id": "MLB", "date_created": "2014-10-19T18:51:22.816-04:00", "comment": "Produto n?o e possui compara??o", "last_updated": "2014-10-20T07:10:40.686-04:00", "owner": "legaladmin", "is_test_case": "N", "due_date": "2014-10-20T18:51:22.817-04:00", "priority": 1, "detail": {"withdraw_crosses_total_amount_30days": 208.33, "payment_crosses_total_amount_30days": 451.21, "collection_crosses_total_amount_30days": 396.74, "withdraw_events_qty": 12, "payments_events_qty": 19, "collections_events_qty": 3, "registrations_events_qty": 0, "ofac": true, "pep": true, "points": 0, "user_type": "normal", "email_domain": "gmail.com", "payer_registration_date": "2014-09-22T21:11:01Z"}, "second_revision": null, "reg_version": 3, "actions": [] } ] }
                ))
        } else if (type == "aml_user" && id =="11223344") {
            response.write(JSON.stringify(
                 {"paging": {"offset": 0, "limit": 100, "total": 3 },
                  "results": [{"_id": "54404beae4b041e4bd0924c9", "status": "open", "type": "aml_user", "id": "11223344", "site_id": "MLB", "date_created": "2014-10-19T18:51:22.816-04:00", "comment": "Produto n?o e possui compara??o", "last_updated": "2014-10-20T07:10:40.686-04:00", "owner": "legaladmin", "is_test_case": "N", "due_date": "2014-10-20T18:51:22.817-04:00", "priority": 1, "detail": {"withdraw_crosses_total_amount_30days": 208.33, "payment_crosses_total_amount_30days": 451.21, "collection_crosses_total_amount_30days": 396.74, "withdraw_events_qty": 12, "payments_events_qty": 19, "collections_events_qty": 3, "registrations_events_qty": 0, "ofac": true, "pep": true, "points": 0, "user_type": "normal", "email_domain": "gmail.com", "payer_registration_date": "2014-09-22T21:11:01Z"}, "second_revision": null, "reg_version": 3, "actions": [] },
                              {"_id": "54404beae4b041e4bd0924c8", "status": "closed", "type": "aml_user", "id": "11223344", "site_id": "MLB", "date_created": "2014-10-16T18:51:22.816-04:00", "comment": "Produto n?o e possui compara??o", "last_updated": "2014-10-17T07:10:40.686-04:00", "owner": "prodrigues", "is_test_case": "N", "due_date": "2014-10-18T18:51:22.817-04:00", "priority": 1, "detail": {"withdraw_crosses_total_amount_30days": 208.33, "payment_crosses_total_amount_30days": 451.21, "collection_crosses_total_amount_30days": 396.74, "withdraw_events_qty": 12, "payments_events_qty": 19, "collections_events_qty": 3, "registrations_events_qty": 0, "ofac": true, "pep": true, "points": 0, "user_type": "normal", "email_domain": "gmail.com", "payer_registration_date": "2014-09-22T21:11:01Z"}, "second_revision": null, "reg_version": 3, "actions": [{"_id": "5440f930e4b0b8bb4bf4a3cf", "action_status": "finalized", "date_created": "2014-10-16T07:10:40.757-04:00", "last_updated": "2014-10-16T07:10:40.757-04:00", "action_date": "2014-10-16T07:10:40.757-04:00", "case_id": "54404beae4b041e4bd0924c8", "case_type": "aml_user", "action_type": null, "resolution": "ARCHIVE", "admin_id": "pedrogonzales", "flow": "manual", "reason": "SOME_REASON", "site_id": "MLB", "reg_version": 1, "detail": {"sent_by": null } } ] },
                              {"_id": "54404beae4b041e4bd0924c7", "status": "closed", "type": "aml_user", "id": "11223344", "site_id": "MLB", "date_created": "2014-10-14T18:51:22.816-04:00", "comment": "Produto n?o e possui compara??o", "last_updated": "2014-10-15T07:10:40.686-04:00", "owner": "prodrigues", "is_test_case": "N", "due_date": "2014-10-18T16:51:22.817-04:00", "priority": 1, "detail": {"withdraw_crosses_total_amount_30days": 208.33, "payment_crosses_total_amount_30days": 451.21, "collection_crosses_total_amount_30days": 396.74, "withdraw_events_qty": 12, "payments_events_qty": 19, "collections_events_qty": 3, "registrations_events_qty": 0, "ofac": true, "pep": true, "points": 0, "user_type": "normal", "email_domain": "gmail.com", "payer_registration_date": "2014-09-22T21:11:01Z"}, "second_revision": {"status": "REANALYSIS_SUP", "admin_id": "prodrigues", "date_created": "2014-10-17T07:10:40.757-04:00", "comment": "Comentario por segunda revisión"}, "reg_version": 3, "actions": [{"_id": "5440f930e4b0b8bb4bf4a3cf", "action_status": "finalized", "date_created": "2014-10-17T07:10:40.757-04:00", "last_updated": "2014-10-17T07:10:40.757-04:00", "action_date": "2014-10-17T07:10:40.757-04:00", "case_id": "54404beae4b041e4bd0924c8", "case_type": "aml_user", "action_type": null, "resolution": "REANALYSIS_SUP", "admin_id": "juanperez", "flow": "manual", "reason": "SOME_REASON2", "site_id": "MLB", "reg_version": 1, "detail": {"sent_by": "REANALYSIS_TL"} }, {"_id": "5440f930e4b0b8bb4bf4a3cf", "action_status": "finalized", "date_created": "2014-10-15T07:10:40.757-04:00", "last_updated": "2014-10-15T07:10:40.757-04:00", "action_date": "2014-10-15T07:10:40.757-04:00", "case_id": "54404beae4b041e4bd0924c8", "case_type": "aml_user", "action_type": null, "resolution": "REANALYSIS_TL", "admin_id": "hugosoto", "flow": "manual", "reason": "SOME_REASON1", "site_id": "MLB", "reg_version": 1, "detail": {"sent_by": null } }, {"_id": "5440f930e4b0b8bb4bf4a3cf", "action_status": "finalized", "date_created": "2014-10-18T07:10:40.757-04:00", "last_updated": "2014-10-18T07:10:40.757-04:00", "action_date": "2014-10-18T07:10:40.757-04:00", "case_id": "54404beae4b041e4bd0924c8", "case_type": "aml_user", "action_type": null, "resolution": "ARCHIVE", "admin_id": "prodrigues", "flow": "manual", "reason": "SOME_REASON3", "site_id": "MLB", "reg_version": 1, "detail": {"sent_by": "REANALYSIS_SUP"} } ] } ] }
                ))
        } else if ((request.url.indexOf("/manual_review/cases/search?site_id=MLA&type=user&last_seller=39297071&owner=null&status=open&sort=due_date:asc,date_created:asc") != -1) ||
                   (request.url.indexOf("/manual_review/cases/search?site_id=MLA&type=money_out&tpv_7d[gt]=23.0&owner=null&status=open&sort=due_date:asc,date_created:asc") != -1)){


            response.write(JSON.stringify(
                {
                    "paging": {
                        "offset": 0,
                        "limit": 100,
                        "total": 1
                    },
                    "results": [
                        {
                            "_id": "53616a93e4b0675ee5ac1111",
                            "status": "open",
                            "type": "user",
                            "id": "20705799",
                            "site_id": "MLB",
                            "date_created": "2014-04-30T17:26:43.368-04:00",
                            "comment": null,
                            "last_updated": null,
                            "owner": null,
                            "last_seller": 39297069,
                            "last_marketplace": "MELI",
                            "is_test_case": "N",
                            "due_date": null,
                            "pending_review_payment_quantity": 1,
                            "pending_review_payment_amount": 10.7,
                            "worst_risk": 0,
                            "priority": 0,
                            "detail": {
                                "last_bin": "542974",
                                "newest_collector_registration_date": "2007-09-18T15:07:04.000-04:00",
                                "is_cc_safety": "N",
                                "questions_quantity_15d": 0,
                                "last_categ": "Arte e Artesanato",
                                "crosses_quantity": 16,
                                "last_ip_region": "rio de janeiro",
                                "last_modified_personal_data_date": "2014-03-20T10:41:19.000-04:00",
                                "validated_phone": "Y",
                                "bids_quantity_15d": 1,
                                "email_domain": "yahoo.com.br",
                                "use_mercadoenvios": "Y",
                                "payer_registration_date": "2012-01-17T18:01:47.000-04:00",
                                "is_shipping_safety": "Y",
                                "shippings_quantity_15d": 1,
                                "credit_cards_quantity_15d": 1,
                                "identifications_quantity_15d": 1,
                                "has_payments_data_in_greylist": "N",
                                "approved_payment_amount_15d": 0,
                                "points": 0,
                                "crosses_quantity_with_payments_2d": 0,
                                "deactive_account_crosses_quantity": 2,
                                "approved_payment_quantity_15d": 0,
                                "last_zip_code": "28035040"
                            },
                            "reg_version": 1
                        }
                    ]
                }));
        } else{
            response.write(JSON.stringify(
                    {
                        "paging": {
                            "offset": 0,
                            "limit": 100,
                            "total": 153
                        },
                        "results": [
                            {
                                "_id": "53616a93e4b0675ee5ac4930",
                                "status": "open",
                                "type": "user",
                                "id": "20705799",
                                "site_id": "MLB",
                                "date_created": "2014-04-30T17:26:43.368-04:00",
                                "comment": null,
                                "last_updated": null,
                                "owner": null,
                                "last_seller": 39297069,
                                "last_marketplace": "MELI",
                                "is_test_case": "N",
                                "due_date": null,
                                "pending_review_payment_quantity": 1,
                                "pending_review_payment_amount": 10.7,
                                "worst_risk": 0,
                                "priority": 0,
                                "detail": {
                                    "last_bin": "542974",
                                    "newest_collector_registration_date": "2007-09-18T15:07:04.000-04:00",
                                    "is_cc_safety": "N",
                                    "questions_quantity_15d": 0,
                                    "last_categ": "Arte e Artesanato",
                                    "crosses_quantity": 16,
                                    "last_ip_region": "rio de janeiro",
                                    "last_modified_personal_data_date": "2014-03-20T10:41:19.000-04:00",
                                    "validated_phone": "Y",
                                    "bids_quantity_15d": 1,
                                    "email_domain": "yahoo.com.br",
                                    "use_mercadoenvios": "Y",
                                    "payer_registration_date": "2012-01-17T18:01:47.000-04:00",
                                    "is_shipping_safety": "Y",
                                    "shippings_quantity_15d": 1,
                                    "credit_cards_quantity_15d": 1,
                                    "identifications_quantity_15d": 1,
                                    "has_payments_data_in_greylist": "N",
                                    "approved_payment_amount_15d": 0,
                                    "points": 0,
                                    "crosses_quantity_with_payments_2d": 0,
                                    "deactive_account_crosses_quantity": 2,
                                    "approved_payment_quantity_15d": 0,
                                    "last_zip_code": "28035040"
                                },
                                "reg_version": 1
                            }
                        ]
                    }));
        }

        response.end();

    },
    searchActions: function(request, response) {
        response.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });

        var url_parts = url.parse(request.url,true);

        var last_seller = url_parts.query.last_seller;
        var status = url_parts.query.status;
        var _id = url_parts.query._id;

        console.log("last_seller: " + last_seller);
        console.log("status: " + status);
        console.log("_id: " + _id);


        if (_id=="53fd9180e4b0a3286cf922f4") {
            response.write(JSON.stringify(
                {
                    "paging": {
                        "total": 0,
                        "limit": 50,
                        "offset": 0
                    },
                    "results": []
                }));
        } else if (_id=="53fd9180e4b0a3286cf922f3") {
                response.write(JSON.stringify(
                    {
                        "paging": {
                            "offset": 0,
                            "limit": 100,
                            "total": 1
                        },
                        "results": [
                             {
                                "_id": "53fd9180e4b0a3286cf922f2",
                                "action_status": "pending",
                                "payment_status": "in_process",
                                "payment_status_detail": "pending_review_manual",
                                "last_modification_date": "2014-08-27T04:06:24.799-04:00",
                                "payment_id": 830852968,
                                "payment_id_ow": 690540335,
                                "transaction_id": "414707955_303736777f7b3277357f",
                                "payment_version": 1,
                                "case_id": "53fd917fe4b0a3286cf922f1",
                                "creation_date": "2014-08-27T04:06:24.799-04:00",
                                "total_paid_amount": 100,
                                "total_paid_dollar_amount": 7.63,
                                "currency_id": "MXN",
                                "collector": 148240961,
                                "action": null,
                                "admin_id": null,
                                "flow": "auto",
                                "reason": null,
                                "site_id": "MLM",
                                "profile_id": "MIDHIGH",
                                "action_date": null,
                                "chargeback_status": null,
                                "chargeback_date": null,
                                "reg_version": 1 }
                        ]
                    }));
        } else{
            response.write(JSON.stringify(
                    {
                        "paging": {
                            "offset": 0,
                            "limit": 100,
                            "total": 1
                        },
                        "results": [
                             {
                                "_id": "53fd9a03e4b0a3286cf922fd",
                                "action_status": "finalized",
                                "payment_status": "approved",
                                "payment_status_detail": "accredited",
                                "last_modification_date": "2014-08-27T04:49:34.443-04:00",
                                "payment_id": 830855420,
                                "payment_id_ow": 690542653,
                                "transaction_id": "414708343_66727777327b7d7f766b",
                                "payment_version": 1,
                                "case_id": "53fd9a02e4b0a3286cf922fc",
                                "creation_date": "2014-08-27T04:42:43.968-04:00",
                                "total_paid_amount": 100,
                                "total_paid_dollar_amount": 7.63,
                                "currency_id": "MXN",
                                "collector": 148240961,
                                "action": null,
                                "admin_id": null,
                                "flow": "auto",
                                "reason": null,
                                "site_id": "MLM",
                                "profile_id": "MIDHIGH",
                                "action_date": null,
                                "chargeback_status": null,
                                "chargeback_date": null,
                                "reg_version": 20
                            }
                        ]
                    }));
        }

        response.end();

    }
};
exports.search = manualReviewController.search;
exports.postPayment = manualReviewController.postPayment;
exports.getCrosses = manualReviewController.getCrosses;
exports.putPayment = manualReviewController.putPayment;
exports.indexCases = manualReviewController.indexCases;
exports.indexPayment = manualReviewController.indexPayment;
exports.getIndexPayment = manualReviewController.getIndexPayment;
exports.getIndexCases = manualReviewController.getIndexCases;
exports.searchCases = manualReviewController.searchCases;
exports.indexAction = manualReviewController.indexAction;
exports.getIndexAction = manualReviewController.getIndexAction;
exports.createCaseAll = manualReviewController.createCaseAll;

// Mappings
urlMapping.add([ {
    pattern : '^/manual_review/search.*',
    action : {
        'GET' : manualReviewController.search
    }
}, {
    pattern : '^/manual_review/crosses/(\\d+)',
    action : {
        'GET' : manualReviewController.getCrosses
    }
}
, {
    pattern : '^/manual_review/indexer/ping',
    action : {
        'GET' : manualReviewController.ping
    }
}
, {
    pattern : '^/manual_review/cases/index',
    action : {
        'POST' : manualReviewController.indexCases
    }
}, {
    pattern : '^/manual_review_search/cases/index',
    action : {
        'POST' : manualReviewController.indexCases
    }
}, {
    pattern : '^/manual_review/cases/get_index',
    action : {
        'GET' : manualReviewController.getIndexCases
    }
}, {
    pattern : '^/manual_review/cases/search',
    action : {
        'GET' : manualReviewController.searchCases
    }
}, {
    pattern : '^/manual_review/payment_actions/search',
    action : {
        'GET' : manualReviewController.searchActions
    }
}
, {
    pattern : '^/manual_review/payment_actions/index',
    action : {
        'POST' : manualReviewController.indexPayment
    }
},
{
    pattern : '^/manual_review_search/actions/index',
    action : {
        'POST' : manualReviewController.indexAction
    }
},{
    pattern : '^/manual_review_search/payment_actions/index',
    action : {
        'POST' : manualReviewController.indexPayment
    }
},  {
    pattern: '^/manual_review/all_cases',
    action: {
        'POST':manualReviewController.createCaseAll
    }
 },{
    pattern : '^/manual_review/payment_actions/get_index',
    action : {
        'GET' : manualReviewController.getIndexPayment
    }
}, {
    pattern : '^/manual_review/actions/get_index',
    action : {
        'GET' : manualReviewController.getIndexAction
    }
},{
    pattern : '^/manual_review/.*',
    action : {
        'PUT' : manualReviewController.putPayment,
        'POST' : manualReviewController.postPayment,
        'GET' : manualReviewController.getManualReview
    }
} ]);
