(function(){
  'use strict';
  var fs = require('fs'), 
      filePath = process.argv[2], 
      buffer = fs.readFileSync(filePath), 
      fileContent = buffer.toString(), 
      fileArr = fileContent.split('\n');

  console.log(fileArr.length - 1);
})();
