// Read in a file, named "people1.json", which contains a list of people.
// Read in another file, named "people2.json", which contains another list of people.
// After both of these files have been read, write a new file called "peopleComplete.txt" which contains a sorted list of all the people from the first two files.

var fs = require('fs');
var firstJsonFile = './people.json'
var secJsonFile = './people2.json'
var text1;
var text2;


function complete() {
	var a = text1.concat(text2);
	fs.writeFile("./peopleComplete.txt", a.sort(), function(err) {
		if (err) {
			throw err;
		}
	});
	// console.log ("The names have been merged")
}

fs.readFile(firstJsonFile, function(err, data) {
	if (err) {
		throw err;
	}
	text1 = JSON.parse(data.toString());
	// console.log(text1);
	complete()
});

fs.readFile(secJsonFile, function(err, data) {
	if (err) {
		throw err;
	}
	text2 = JSON.parse(data.toString());
	// console.log(text2)
	complete()
});