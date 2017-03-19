(function(){
	'use strict';

	var http = require('http'), 
		server  = http.createServer(function(request, response){
			
			if(request.method === 'POST'){
				
				var dataStr = '';

				request.on('data', function(chunk){
					dataStr += chunk.toString().toUpperCase() + ',';		
				});

				request.on('end', function(){
					response.writeHead(200, {'Content-Type': 'text/plain'});
					var dataBody = dataStr.split(','), i = 0, len = dataBody.length;

					for(i;i < len - 1;i++){
						response.write(dataBody[i]);
					}

					response.end();
				});

			}
		}).listen(process.argv[2]);
})();
