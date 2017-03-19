(function(){
	'use strict';

	var http = require('http');

	http.get(process.argv[2], function(response){
	
		response.setEncoding('utf-8');

		response.on('data', function(data){
			console.log(data.toString());
		});	

		response.on('error', function(err){
			console.log(err);
		});
	});
})();
