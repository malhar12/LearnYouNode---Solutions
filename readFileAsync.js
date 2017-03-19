(function(){
  'use strict';
  
  var fs = require('fs');
	fs.readFile(process.argv[2], function(error, data){
	  if(error){
	  	process.exit(0);
	  }
	  
	  var fileContent = data.toString().split('\n');
	  console.log(fileContent.length - 1);
	});
})();
