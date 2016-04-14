//creating the instance of an object
function books (title, pages) {
	this.title = title;
	this.pages = pages;
}

//creating objects
var book1 = new books("mytitle",["hoela hoep", "blablabla","hooray"]);
var book2 = new books("Infinite Jest",["Written by David Foster Wallace","Hal Incandenza is the youngest of the Incandenza children.","As a child, he was very precocious."]);

//creating functions that read objects
function readb (x) {
	var title = x["title"];
	var body = '';
	for (var i = 0;i < x["pages"].length; i++) {
		body += '\n' + "Page" + " " +[i+1] + " : " + x["pages"][i];
	}
	return "Title :" + " " + title + body;
}

console.log (readb(book1))
console.log ()
console.log (readb(book2))