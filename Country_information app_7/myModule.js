var fs = require('fs');
 
  // 
  // Start the prompt 
  // 
  
  // function justSomething(result) {


// }


// justSomething();

function jsonFileReader (filename, callback) {
fs.readFile(filename, function(err, data) {
	if (err) {
		throw err;
	}

	var text = JSON.parse(data);
	callback(text);
});
}

// module.exports.MyFunction1 = justSomething;
module.exports.MyFunction = jsonFileReader;