(function(){
	'use strict';

	var http = require('http'), 
		urls = [process.argv[2], process.argv[3], process.argv[4]], 
		i = 0, len = urls.length;

	for(i; i < len; i++){
	
		http.get(urls[i], function(response){
		
			response.setEncoding('utf-8');
			var d1= '';
			response.on('data', function(chunk){
				d1 += chunk;
			});

			response.on('end', function(){
				console.log(d1);
			});

		});
	}
})();
