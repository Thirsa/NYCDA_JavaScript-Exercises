
//level 0.8: write a function that reverses a string

function reverse (x) {
	var newString = "";
	for (var i = x.length-1; i>=0; i--){
		newString += x[i];
	}
	return newString;
}

function reverse1 (x){
	x=reverse(x)
	return x
}

var string = "Hello";
var string1 = "Thirsa"
console.log (reverse(string))
console.log (reverse1(string1))

//level 1: calculate the average height of a person, given the following data structure

function averageHeight (x) {
	var allHeights = 0;
	for (var i = 0; i < x.length; i++){
		var object = x[i]
		for (var key in x[i]) {
			var obj = object[key]
			allHeights += obj;
		}
	}
	return allHeights/x.length;
}

var people = [{ sara: 179 }, { alex: 168 }, { kevin: 186 }, { kevin2: 210}];
var morePeople = [{ spot: 40 }, { fido: 50 }, { puddles: 40}];

console.log (averageHeight(people))
console.log (averageHeight(morePeople))

// level 2: write a function that takes in one parameter "n" and returns the nth prime number

function returnPrimeNumber (x) {

	// var allPrimeNumbers [];
	// var firstNumber = 0;
	// if()
	// if ()
}

