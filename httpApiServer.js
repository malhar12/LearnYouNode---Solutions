(function(){
	'use strict';

	var http = require('http'), 
		urlMod = require('url'),
		server = http.createServer(function(request, response){
			var reqURL = urlMod.parse(request.url, true), 
			    apiPath = reqURL.pathname, 
			    apiQuery = reqURL.query;
				var date = new Date(apiQuery.iso), responseObj, 
					parseTime = function (date){
						return {
							"hour": date.getHours(),
							"minute": date.getMinutes(), 
							"second": date.getSeconds()
						};
					}, 
			       		unixTime = function(date){
						return {
							"unixtime": date.getTime()
						};
					};	
				if(apiPath.includes('parsetime')){
					responseObj = parseTime(date);
				} else if(apiPath.includes('unixtime')){
					responseObj = unixTime(date);
				}	

				response.writeHead(200, {'Content-Type': 'application/json'});
				response.end(JSON.stringify(responseObj));	
		}).listen(process.argv[2]);

})();
