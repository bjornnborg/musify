var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var vectorController = {
  ping: function(request, response) {
    response.writeHead(200, {
      'Content-Type' : 'application/json; charset=utf-8'
    });
    response.write(JSON.stringify({"message":"PONG"}));
    response.end();
  },
  getBin : function(request, response){
    response.writeHead(200, {
      'Content-Type' : 'application/json; charset=utf-8'
    });

    //Parsear la URL
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('^/fraud/vector/bin/(\\w+)');
    uriRegExp.exec(pathname);

    var bin = RegExp.$1;
    var result

    if (bin == 123456 || bin == 376675) {

      response.write(JSON.stringify({
        "bin": bin,

        "approved_1h_count": 1,
        "approved_1h_dol_amount": 10.01,

        "approved_4h_count": 2,
        "approved_4h_dol_amount": 20.02,

        "approved_12h_count": 3,
        "approved_12h_dol_amount": 30.03,

        "approved_1d_count": 4,
        "approved_1d_dol_amount": 40.04,

        "inhab_1h_count": 5,
        "inhab_1h_dol_amount": 50.05,

        "inhab_4h_count": 6,
        "inhab_4h_dol_amount": 60.06,

        "inhab_12h_count": 7,
        "inhab_12h_dol_amount": 70.07,

        "inhab_1d_count": 8,
        "inhab_1d_dol_amount": 80.08,

        "rejected_1h_count": 9,
        "rejected_1h_dol_amount": 90.09,

        "rejected_4h_count": 10,
        "rejected_4h_dol_amount": 100.10,

        "rejected_12h_count": 11,
        "rejected_12h_dol_amount": 110.11,

        "rejected_1d_count": 12,
        "rejected_1d_dol_amount": 120.12,

        "other_1h_count": 13,
        "other_1h_dol_amount": 130.13,

        "other_4h_count": 14,
        "other_4h_dol_amount": 140.14,

        "other_12h_count": 15,
        "other_12h_dol_amount": 150.15,

        "other_1d_count": 16,
        "other_1d_dol_amount": 160.16,

        "total_1h_count": 17,
        "total_1h_dol_amount": 170.17,

        "total_4h_count": 18,
        "total_4h_dol_amount": 180.18,

        "total_12h_count": 19,
        "total_12h_dol_amount": 190.19,

        "total_1d_count": 20,
        "total_1d_dol_amount": 200.20,

      }))

    } else {

      response.write(JSON.stringify({
        "bin": bin,

        "approved_1h_count": 0,
        "approved_1h_dol_amount": 0.0,

        "approved_4h_count": 0,
        "approved_4h_dol_amount": 0.0,

        "approved_12h_count": 0,
        "approved_12h_dol_amount": 0.0,

        "approved_1d_count": 0,
        "approved_1d_dol_amount": 0.0,

        "inhab_1h_count": 0,
        "inhab_1h_dol_amount": 0.0,

        "inhab_4h_count": 0,
        "inhab_4h_dol_amount": 0.0,

        "inhab_12h_count": 0,
        "inhab_12h_dol_amount": 0.0,

        "inhab_1d_count": 0,
        "inhab_1d_dol_amount": 0.0,

        "rejected_1h_count": 0,
        "rejected_1h_dol_amount": 0.0,

        "rejected_4h_count": 0,
        "rejected_4h_dol_amount": 0.0,

        "rejected_12h_count": 0,
        "rejected_12h_dol_amount": 0.0,

        "rejected_1d_count": 0,
        "rejected_1d_dol_amount": 0.0,

        "other_1h_count": 0,
        "other_1h_dol_amount": 0.0,

        "other_4h_count": 0,
        "other_4h_dol_amount": 0.0,

        "other_12h_count": 0,
        "other_12h_dol_amount": 0.0,

        "other_1d_count": 0,
        "other_1d_dol_amount": 0.0,

        "total_1h_count": 0,
        "total_1h_dol_amount": 0.0,

        "total_4h_count": 0,
        "total_4h_dol_amount": 0.0,

        "total_12h_count": 0,
        "total_12h_dol_amount": 0.0,

        "total_1d_count": 0,
        "total_1d_dol_amount": 0.0,

      }))
    }

    response.end();
  },
  getCollections : function(request, response){

    //Parsear la URL
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('^/fraud/vector/collections/(\\w+)');
    uriRegExp.exec(pathname);

    var collector = RegExp.$1;
    var result;

    if (collector == 1234 || collector == 151457264 || collector == 151457299) {
      response.writeHead(200, {
      'Content-Type' : 'application/json; charset=utf-8'
      });
      response.write(JSON.stringify([
        {
          "collector": collector,
          "hash": "H01",
          "status": "approved",
          "status_detail": "accredited",
          "operation_type": "regular_payment",
          "payment_type": "credit_card",
          "amount": 10.0,
          "count": 1,
          "dollar_amount": 5.0
        },
        {
          "collector": collector,
          "hash": "H03",
          "status": "approved",
          "status_detail": "accredited",
          "operation_type": "regular_payment",
          "payment_type": "credit_card",
          "amount": 30.0,
          "count": 3,
          "dollar_amount": 15.0
        }
      ]));

      response.end();
      return;
    }

    response.writeHead(200, {
      'Content-Type' : 'application/json; charset=utf-8'
    });
    response.write(JSON.stringify([]));
    response.end();

  },
  getOperations : function(request, response){

    //Parsear la URL
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('^/fraud/vector/operations/(\\w+)');
    uriRegExp.exec(pathname);

    var payer = Number(RegExp.$1);
    var result;


    if (payer == 1234 || payer == 151457264 || payer == 151457299 || payer == 99) {
      response.writeHead(200, {
        'Content-Type' : 'application/json; charset=utf-8'
      });
      response.write(JSON.stringify([
        {
          "payer": payer,
          "hash": "H01",
          "status": "approved",
          "status_detail": "accredited",
          "operation_type": "regular_payment",
          "payment_type": "credit_card",
          "amount": 10.0,
          "count": 1,
          "dollar_amount": 5.0
        },
        {
          "payer": payer,
          "hash": "H03",
          "status": "approved",
          "status_detail": "accredited",
          "operation_type": "regular_payment",
          "payment_type": "credit_card",
          "amount": 30.0,
          "count": 3,
          "dollar_amount": 15.0
        }
      ]));

      response.end();
      return;

    } else if (payer == 8745672131 || payer == 123123) {
      response.writeHead(200, {
        'Content-Type' : 'application/json; charset=utf-8'
      });
      response.write(JSON.stringify([
        {
          "payer": payer,
          "hash": "H01",
          "status": "approved",
          "status_detail": "accredited",
          "operation_type": "regular_payment",
          "payment_type": "credit_card",
          "amount": 10.0,
          "count": 2,
          "dollar_amount": 5.0
        }
      ]));

      response.end();
      return;
    }

    response.writeHead(200, {
      'Content-Type' : 'application/json; charset=utf-8'
    });
    response.write(JSON.stringify([]));
    response.end();

  },
  getCollectorPayerOperations : function(request, response){

    //Parsear la URL
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('^/fraud/vector/collections/(\\w+)/payer/(\\w+)');
    uriRegExp.exec(pathname);

    var collector = RegExp.$1;
    var payer = RegExp.$2;
    var result;

    if (collector == 1234 || collector == 151457264) {
      if (payer == 1234 || payer == 151457264) {
        response.writeHead(200, {
        'Content-Type' : 'application/json; charset=utf-8'
        });
        response.write(JSON.stringify([
          {
            "collector": collector,
            "payer": payer,
            "hash": "H01",
            "status": "approved",
            "status_detail": "accredited",
            "operation_type": "regular_payment",
            "payment_type": "credit_card",
            "amount": 10.0,
            "count": 1,
            "dollar_amount": 5.0
          },
          {
            "collector": collector,
            "payer": payer,
            "hash": "H03",
            "status": "approved",
            "status_detail": "accredited",
            "operation_type": "regular_payment",
            "payment_type": "credit_card",
            "amount": 30.0,
            "count": 3,
            "dollar_amount": 15.0
          }
        ]));

        response.end();
        return;
      }
    }

    if (collector == 8745672131 && payer == 151457264) {
      response.writeHead(200, {
        'Content-Type' : 'application/json; charset=utf-8'
      });
      response.write(JSON.stringify([
        {
          "collector": collector,
          "payer": payer,
          "hash": "H01",
          "status": "approved",
          "status_detail": "accredited",
          "operation_type": "regular_payment",
          "payment_type": "credit_card",
          "amount": 10.0,
          "count": 1,
          "dollar_amount": 5.0
        }
      ]));

      response.end();
      return;
    }
    response.writeHead(200, {
      'Content-Type' : 'application/json; charset=utf-8'
    });
    response.write(JSON.stringify([]));
    response.end();
  }

};

exports.ping = vectorController.ping;
exports.getBin = vectorController.getBin;

// Mappings
urlMapping.add ([
  {
    pattern: '^/fraud/vector/ping',
    action: {
      'GET':vectorController.ping
    }
  },{
    pattern: '^/fraud/vector/bin/(\\w+)',
    action: {
      'GET':vectorController.getBin
    }
  },{
    pattern: '^/fraud/vector/collections/(\\w+)$',
    action: {
      'GET':vectorController.getCollections
    }
  },{
    pattern: '^/fraud/vector/operations/(\\w+)$',
    action: {
      'GET':vectorController.getOperations
    }
  },{
    pattern: '^/fraud/vector/collections/(\\w+)/payer/(\\w+)$',
    action: {
      'GET':vectorController.getCollectorPayerOperations
    }
  }
]);
