//Prototype practice

function Emaillist (name) {
	this.name = name;
	this.list = [];
	};

Emaillist.prototype.addEmail = function (x) {
	this.list.push(x);
};

Emaillist.prototype.sendEmailToAll = function (x) {
	return "Email content" + '\n' + x + '\n' + "sending email to" + '\n' + this.list;
}

var user1 = new Emaillist ("thirsa")
user1.addEmail("thirsadeboer@gmail.com")

var user2 = new Emaillist ("dummy")
user2.addEmail("dummy@dummypage.com")

console.log (user1.sendEmailToAll("hi"));
console.log (user2.sendEmailToAll("Hello"));
