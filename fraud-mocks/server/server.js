var http = require("http");
var router = require("./router");

function start() {
	function onRequest(request, response) {
		router.handle(request, response);
	}
	
	http.createServer(onRequest).listen(8888);

	console.log("Server has started.");

	//VARIABLES GLOBALES UTILIZADAS PARA REINTENTOS EN FRAUD SUBSCRIBERS
	global.retryPaySearch = 0;
	global.retryPayLegacy = 0;
	global.retryPayRCha=0;
	global.retryUserCard=0;
	global.retryCardId = 0;
	global.retryDevice = 0;
	global.retryWithDoc = 0;
	global.retryPhone = 0;
	global.retryUsShp = 0;
	//
}

exports.start = start;
