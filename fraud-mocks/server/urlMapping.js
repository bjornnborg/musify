var util = require('util');

var urlMapping = {
	add: function (handler) {

		global.urlHandlers == null && (global.urlHandlers = []);

		if (util.isArray(handler)) {
			for (var f = 0; f < handler.length; f++) {
				this.add(handler[f]);
			}
		} else {
			var pattern;
			if (util.isRegExp(handler.pattern)) {
				pattern = handler.pattern.toString();
			} else {
				pattern = handler.pattern;
				try {
					handler.pattern = new RegExp (pattern);
				} catch (e) {
					console.log("Invalid pattern: "+pattern);
					return;
				}
			}

			if (handler.pattern == null || handler.action == null) {
				console.log("Invalid handler: "+JSON.stringify (handler));
				return;
			}

			if (global.urlHandlers[pattern] != null) {
				console.log("Pattern exists: "+pattern);
			} else {
				global.urlHandlers[pattern] = handler;
				console.log ("Added pattern: "+pattern);
			}
		}
	}
};

exports.add = urlMapping.add;
