// write a function that takes in three parameters and returns the sum of those three parameters

function returnSum (x, y, z) {
	return x+y+z;
}

console.log (returnSum);
console.log (returnSum(3,4,5));
console.log (returnSum(0,1,333));

// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s

function returnLastchar (x) {
	var i = (x.length -1);
	return x[i];
}

console.log (returnLastchar);
console.log (returnLastchar("hoelahoep"));
console.log (returnLastchar("lastcharacter"));

// write a function that takes in one parameter and returns the cube of that parameter

function returnCube (x) {
	return x*x*x;
}

console.log (returnCube)
console.log (returnCube(4));
console.log (returnCube(7));

// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

function returnReverse (x) {
	var a ='';
	for (var i=x.length-1;i>=0;i--){
		a += x[i];
	}
	return a;
}
console.log (returnReverse);
console.log (returnReverse("reverse"));
console.log (returnReverse("esrever"));

// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the secend array as values.

function returnObject (x,y) {
	// console.log (x.length)
	// var l = ;
	var object = {};
	for (var i=0;i<x.length;i++)
	{
		// console.log(x[i]);
		object[x[i]]=y[i]
	}
	return object;
}

// var object = {};

console.log (returnObject)
console.log (returnObject(['key1','key2','key3'], ['value1','value2','value3']));
console.log (returnObject(['key7','key8','key9'],['value7','value8','value9']));

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
// examples:
// { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }
// { a: "x", b: "y", c: "z" } --> { keys: ["a", "b", "c"], values: ["x", "y", "z"] }

var object2 = {
	key1:"value1", 
	key2:"value2", 
	key3:"value3",
	key4:"value4"
};

var object3 = {
	key5:"value5",
	key6:"value6",
	key7:"value7"
}

var otherObject = {};

function returnObject2 (x) {
	var array1 = [];
	var array2 = [];
	for (var i in x){
		if (x.hasOwnProperty(i)){
			while (i<x.length){
				i++;
			}
				array1.push(i);
				array2.push(x[i]);
		}
	}
	otherObject["keys"]=array1
	otherObject["values"]=array2
	return otherObject;
}

console.log(returnObject2);
console.log(returnObject2(object2));
console.log(returnObject2(object3));

//OPTIONAL:

// write a function that takes in two parameters, x and n, and computes x to the nth power
// you may not use Math.* functions

function returnNthPower (x,n) {
	var a = 1;
	if (n<0){
		n = n*-1;
		for (var i=1;i<=n;i++){
			a *=1/x
			}
		}
	else {
		for (var i=1;i<=n;i++){
			a *=x
			}
		}
	return a;
}

console.log(returnNthPower)
console.log(returnNthPower(5,-2));
console.log(returnNthPower(2,-8));


