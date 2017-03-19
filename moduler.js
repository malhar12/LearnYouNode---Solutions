(function(){
	'use strict';

	var reDir = require('./readDirModule.js');

	reDir(process.argv[2], process.argv[3], function(err, data){
		if(err){
			console.log(err);
		}

		var i = 0, 
		    len = data.length;

		for(i; i< len; i++){
			console.log(data[i]);
		}
	});
})();
