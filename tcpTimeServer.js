(function(){
	'use strict';

	var net = require('net'),
		server = net.createServer(function(socket){
			
			var date = new Date(), 
				data = date.getFullYear().toString();
			        data += '-';
				if(date.getMonth() < 10){
					data += '0' + (date.getMonth() + 1).toString();
				} else {
				        data += (date.getMonth() + 1).toString();
				}
			        data += '-';
				if(date.getDate() < 10){
					data += '0' + date.getDate().toString();
				} else {
				        data += date.getDate().toString();
				}
			        data += ' ';
				if(date.getHours() < 10){
					data += '0' + date.getHours().toString();
				} else {
				        data += date.getHours().toString();
				}
			        data += ':';
				if(date.getMinutes() < 10){
					data += '0' + date.getMinutes().toString() + '\n';
				} else {
			       		data += date.getMinutes().toString() + '\n';
				}
			socket.write(data);

			socket.end();

			socket.on('error', function(err){
				console.log(err);
			});

		});
	
	server.listen(process.argv[2]);
})();
