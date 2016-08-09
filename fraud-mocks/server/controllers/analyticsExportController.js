var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var analyticsExportController = {
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write("pong");
            response.end();        
        },
        getSavepoints : function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(
                {
                    "savepoint_id": 1,
                    "schedule_id": 2,
                    "execution_date": "2013-03-28T00:00:00.000-0400",
                    "scheduled_date": "2013-03-27T00:00:00.000-0400",
                    "date_from": "2013-02-01T00:00:00.000-0400",
                    "date_to": "2013-02-28T00:00:00.000-0400", 
                    "parameters": "[{\"@3P\":\"MLV\"},{\"@1P\":\"\$DATE_FROM\$\"}, {\"@2P\":\"\$DATE_TO\$\"}]",
                    "status": "success",
                    "stack": "un stack", 
                    "saved_to": "un path"
                }
              ));

            response.end();
        },
        getSchedules : function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(
                {
                    "schedule_id": 2,
                    "query_id": "odr_cases",
                    "version_id": 1,
                    "parameters": "[{\"@3P\":\"MLV\"},{\"@1P\":\"\$DATE_FROM\$\"}, {\"@2P\":\"\$DATE_TO\$\"}]",
                    "start_date": "2005-06-30T19:33:50.000-0300", 
                    "end_date": "2005-06-30T19:33:50.000-0300", 
                    "batch_interval": "monthly", 
                    "schedule": "monthly", 
                    "status": "started", 
                    "execution_start_date": "2005-06-30T19:33:50.000-0300", 
                    "description": "schedule de la query de odr_cases"
                }
              ));

            response.end();
        },
        getQueries : function(request, response){

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify(
                {
                    "query_id": "odr_cases",
                    "version_id": 1,
                    "query": "SELECT * FROM ODR_CASES...",
                    "separator": "\\t",
                    "description": "primera version de la query de ODR_CASES"
                }
              ));

            response.end();
        }
};

exports.getSavepoints = analyticsExportController.getSavepoints;
exports.getSchedules = analyticsExportController.getSchedules;
exports.getQueries = analyticsExportController.getQueries;
exports.ping = analyticsExportController.ping;

// Mappings
urlMapping.add ([{
        pattern: '^/fraud/analytics/export/ping',
        action: {
            'GET':analyticsExportController.ping
        }
    },
    {
        pattern: '^/fraud/analytics/export/savepoints/(\\w+)',
        action: {
            'GET':analyticsExportController.getSavepoints
        }
    },
    {
        pattern: '^/fraud/analytics/export/schedules/(\\w+)',
        action: {
            'GET':analyticsExportController.getSchedules
        }
    },
    {
        pattern: '^/fraud/analytics/export/queries/(\\w+)/(\\w+)',
        action: {
            'GET':analyticsExportController.getQueries
        }
    }

    ]);
