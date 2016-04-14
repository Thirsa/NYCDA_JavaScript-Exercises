var fs = require('fs');

var country = process.argv[2];
var text;
var jsonFile = './countries.json'

fs.readFile(jsonFile, function(err, data) {
	if (err) {
		throw err;
	}

	text = JSON.parse(data);
	// console.log(text);
	readsCountry(country)
});

function readsCountry (country) {
	var a = '';
	// var i = 0;
	for (var i =0;i<text.length;i++){
		if (country === text[i].name){
			// console.log (text[i])
			console.log ("country Name :" + text[i].name + '\n' + "Top Level Domain : " + text[i].topLevelDomain);
			// return text[i].topLevelDomain;
		}
	}
}
// var een = 'Zimbabwe'
// console.log (readsCountry(een));