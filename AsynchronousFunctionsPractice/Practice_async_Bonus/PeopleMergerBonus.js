//BONUS:
// Read in N files from a people directory, and merge all of the files in the directory into a peopleComplete.json file

var fs = require ('fs')
var path = './dir/'
var newFile = './allpeaople2.txt'
var totalFiles = 0;
var allNames = [];

readFiles (path, function(data){
	writeFile(data);
});
	console.log("I´m done!") //where do i put this to have this called when everything is done?

function readFiles (path, callback) {
	fs.readdir (path,function(err, data)
	{
		if (err){
			throw err;
		}
		// console.log (data);
		totalFiles = data;
		data.forEach(function(fileName)
		{
			fs.readFile(path + fileName, function(err, data)
			{
				if (err)
				{
					throw err;
				}
				// console.log (data);
				data = JSON.parse(data.toString());
				data.forEach(function(data)
				{
					allNames.push(data);
					callback(allNames);
				})
			})
		})
	})
}

function writeFile (data) {
	fs.writeFile (newFile, data.sort(), function (err)
	{
	if (err) {
		throw err;
	}
	// console.log (newFile)
	})
}