//Write a function that returns the area of a circle, given the radius.

function circleArea (x) {
	return Math.PI*(x*x); //The ² doesn't seem to work? I still have to figure that out..
}

var one = 6
var two = 4

console.log (circleArea(one));
console.log (circleArea(two));

console.log ("----------------------------")
//Given a string, create a function that returns the last character in that string.

function lastchar (x) {
	var charcount = x.length;
	return x[charcount-1];
}

var three = "hoeljkgfhdjkghesjleg"
var four = "heyyouscaryscaryman"

console.log (lastchar(three));
console.log (lastchar(four));

console.log ("----------------------------")
//Write a function that takes in one parameter "length" and prints out that many stars.

function stars (x) {
	var i = Array(x+1).join("*");
	return i
}

var five = 5
var six = 7

console.log (stars(five));
console.log (stars(six));

console.log ("----------------------------")
//Now, write a function that takes in one parameter "length" and prints out a square of stars.

function stars2 (x) {
	var i = 1;
	var a = "*"
	while (i<x){
		a +="*"
		i++;
	}
		var b = a
		var e=1
		while (e<x){
			b+= '\n'+a
			e++
		}
	return b;
}

var seven = 5
var eight = 7

console.log (stars2(seven));
console.log (stars2(eight));

console.log ("----------------------------")
//Given an array of integers, write a function that finds the average and returns it.

function average (x) {
	var i = 0;
	var a = 0;
		while (i<x.length) {
		a += x[i];
		i++;
		}
console.log (a);
	// var i = '';						I was just experimenting with the two 'variations'. you can totally ignore this.
	// var a = 0;
	// for (i=0; i<x.length;i++) {
	// 	a += x[i]
	// }	
	return a/x.length;
}

var myArray = [1,2,3,4,600,44]
var myArray2 = [9,8,7,6,5]

console.log (average(myArray))
console.log (average(myArray2))

console.log ("----------------------------")
//Write a function that takes in two arrays of integers 
//and returns the largest common integer. 
//If there are no common integers, return 'undefined'.

function highestcom (x, y) {
var common = 0;
	for (var i=0;i<x.length;i++){
		for (var a=0;a<y.length;a++){
			if (x[i] === y[a] && x[i] >common)
				common = x[i]
		}
	}
	if (common == 0){
		return;
		}
	else return common;
}

var nine = [3,800,4,5,6,7]
var ten = [4,6,7,8,9,800]

var eleven = [3,6,8,9,4,5]
var twelve = [8,6,4,3,6,7]

console.log (highestcom(nine,ten));
console.log (highestcom(eleven,twelve));