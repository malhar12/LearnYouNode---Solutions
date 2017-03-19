(function(){
	'use strict';

	var http = require('http');

	http.get(process.argv[2], function(response){

		var dataBuffer = '', count = 0;
		
		response.setEncoding('utf-8');

		response.on('data', function(chunk){
			//count++;
			dataBuffer += chunk;
			//console.log(chunk);
		});

		response.on('end', function(data){
			console.log(dataBuffer.length);
			console.log(dataBuffer);
		});
	
	});
})();
