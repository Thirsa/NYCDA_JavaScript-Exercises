var prompt = require('prompt');
var myModule = require ('./myModule.js');
// var country = require ('./myModule.js');
// var country = process.argv[2];
var jsonFile = './countries.json'
var country;

var userPrompt = {
	properties: {
	discription: "Please enter the name of the country",
	type: 'string',
	required: true
}
};

 prompt.start(); 
 prompt.get('userPrompt', function (err, result) {
    // console.log (result.country);
    // var inputt = 'countrey';
    country = result.userPrompt;
  	console.log (userPrompt.length)
    if (userPrompt.length > 0) {

	myModule.MyFunction(jsonFile, function(text) {
		for (var i =0;i<text.length;i++){
			if (country === text[i].name){
				console.log ("country Name :" + text[i].name + '\n' + "Top Level Domain : " + text[i].topLevelDomain);
			}
		}
	});
	}

	else {
		console.log ("Your input was not the name of a country")
	}
});
	




