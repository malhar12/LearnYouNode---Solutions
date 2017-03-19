(function(){
	'use strict';

	var fs = require('fs');

	module.exports = function(dirPath, dirExt, callback){
		
		fs.readdir(dirPath, function(err, list){
			if(err) return callback(err);

			var i = 0, 
			    len = list.length, 
			    filterList = [];

			for(i; i < len; i++){
				if(list[i].indexOf('.' + dirExt) > -1){
					filterList.push(list[i]);
				}
			}

			callback(null, filterList);
		});
		
	};
})();
