var url = require('url');
var querystring = require('querystring');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var melicloudController = {
	ping : function(request, response) {
		response.writeHead(200, {
			'Content-Type' : 'text/plain; charset=utf-8'
		});
		response.write("pong");
		response.end();        
	},
	getListOfServers : function(request, response) {
		var pathname = url.parse(request.url).pathname;
		var uriRegExp = new RegExp("/pools/([\\w\\-]*)/servers$");
		var resp = uriRegExp.exec(pathname);
	    var poolName = RegExp.$1;

		if(poolName == "fraud-scoringapi-webserver-master") {
			response.writeHead(200, {
				'Content-Type' : 'application/json; charset=utf-8'
			});
			response.write(JSON.stringify(["0000005d.melicloud.com","00000067.melicloud.com","00000104.melicloud.com","00000232.melicloud.com","00000233.melicloud.com"]));
			response.end();
		} else if(poolName == "fraud-matias-webserver-master") {
			response.writeHead(200, {
				'Content-Type' : 'application/json; charset=utf-8'
			});
			//response.write(JSON.stringify(["10.12.0.148:8090/scoringLite"]));
			response.write(JSON.stringify(["10.12.0.118:8080/fraud-scoringoff"]));
			response.end();
		} else if(poolName == "fraud-other") {
			response.writeHead(200, {
				'Content-Type' : 'application/json; charset=utf-8'
			});
			response.write(JSON.stringify(["i-00000000-aaa.melicloud.com"]));
			response.end();
		} else if(poolName == "fail") {
			response.writeHead(503, {
				'Content-Type' : 'application/json; charset=utf-8'
			});
			response.write(JSON.stringify(["Service Unavailable"]));
			response.end();
		} else if(poolName == "fraud-ban-redis-shard-master") {
			response.writeHead(200, {
				'Content-Type' : 'application/json; charset=utf-8'
			});
			response.write(JSON.stringify(["localhost:6379","localhost:6380"]));
			response.end();
		}else {
			response.writeHead(200, {
				'Content-Type' : 'application/json; charset=utf-8'
			});
			response.write(JSON.stringify([]));
			response.end();
		}
	},

	getInstances : function(request, response) {
		var pathname = url.parse(request.url).pathname;
		var uriRegExp = new RegExp("/compute/pools/([\\w\\-]*)/instances$");
		var resp = uriRegExp.exec(pathname);
	    var poolName = RegExp.$1;
	    if(poolName == "fraud-ban-redis-shard-master") {
			response.writeHead(200, {
				'Content-Type' : 'application/json; charset=utf-8'
			});
			response.write(JSON.stringify(["localhost:6379","localhost:6380"]));
			response.end();
		}else {
			response.writeHead(200, {
				'Content-Type' : 'application/json; charset=utf-8'
			});
			response.write(JSON.stringify([]));
			response.end();
		}
	},
	getListMemcacheServers : function(request, response) {
		response.writeHead(200, {
			'Content-Type' : 'application/json; charset=utf-8'
		});
		//response.write(JSON.stringify(["10.12.0.148:8090/scoringLite"]));
		response.write(JSON.stringify({"cluster": "fraud-scoring-utils","department": "fraud","datacenters": {"vir": {"instances": [{"host": "localhost","port": 11211,"size": 1024,"datacenter": "vir"}],"loss_risk": {"current": 0.06666666666666667,"instances": [{"host": "fraud-scoring-utils-992.melidynamic.com","port": 2585,"size": 1024,"datacenter": "vir"}]}}}}));
		response.end();
	}
};

exports.ping = melicloudController.ping;
exports.getListOfServers = melicloudController.getListOfServers;
exports.getInstances = melicloudController.getInstances;
exports.getListMemcacheServers = melicloudController.getListMemcacheServers;

// Mappings
urlMapping.add ([{
		pattern: '^/pools/ping',
		action: {
			'GET':melicloudController.ping
		}
	},{
		pattern: '^/pools/[\\w\\-]*/servers',
		action: {
			'GET':melicloudController.getListOfServers
		}
	},{
		pattern: '^/compute/pools/[\\w\\-]*/instances',
		action: {
			'GET':melicloudController.getInstances
		}
	},{
		pattern: '^/cache/memcached/clusters/[\\w\\-]+',
		action: {
			'GET':melicloudController.getListMemcacheServers
		}
	}
]);
