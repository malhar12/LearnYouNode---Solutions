(function(){
	var fs = require('fs');
	fs.readdir(process.argv[2], function(err, list){
		if(err){
			console.log(err);
			process.exit(0);
		}

		var i = 0, len = list.length;
		for(i; i < len; i++){
			if(list[i].indexOf('.' + process.argv[3]) > -1){
				console.log(list[i]);
			}
		}
	});
})();
