// level 1
// Write a function that takes in two parameters: 1 array and 1 number, "x".
// Return a new array that contains the only the numbers in the original that
// were divisible by "x".

// examples:
// [2,3,4], 2 --> [2,4]
// [5,10,11,4,0], 5 --> [5, 10, 0]
// [5,10,11,4,0], 2 --> [10, 4, 0]

function numberDivByX1(y,x) {
	return y.filter(function(y){
		return y%x === 0
	})
}

function func(y,x){
	return y.filter(function(huh){
		return huh % x===0;
	})
}

var numbers1 = [5,10,11,4,0]
var numbers2 = 5

// console.log (numberDivByX1(numbers1, numbers2))
// console.log (filters([5,10,11,4,0],5))
// console.log (func([5,10,11,4,0],5))

// console.log (numberDivByX([5,10,11,4,0],5))	

// level 1.5
// Write a function that, given a sorted array of integers, finds whether a certain integer is present.
// Return the index of that integer if it is present, and return -1 if it is not

console.log("first one")

function returnIndex1(x,y){
	return (x.indexOf(y))
}

console.log ("second one")

function returnIndex2(x, y){
	return x.map(function(x) {
		return x === y;
	})
	return (oops.indexOf(true))
}

function check (x,y){
	return (returnIndex2(x,y).indexOf(true))
}

console.log ("third one")

function bla (x, y) { //returns as soon as it found the first one
	for (var i = 0; i<x.length; i++){
		console.log (x[i])
		if (x[i] === y){
			return i
		}
	}
	return -1
}

console.log ("")

function bla1 (x, y) { //checks all positions!
	var newArray = []
	for (var i = 0; i<x.length; i++){
		if (x[i] === y){
			newArray.push(i)
		}
	}
	
	if(newArray.length>0){
		return newArray
	}
	else{
	return -1		
	}
}

function arraySlice(x,y) {
	while (x.length>0){
		if(x[x.length-1]!== y){
			console.log (x(x.length-1))
		(x.length-1).pop()
		}
		console.log (x[(x.length-1)])
		return x.indexOf(x[(x.length-1)])
	}
}


function ugh(x,y) {
	if(x[y]===y){
		console.log ("im here")
		return x.indexOf(y)
	}
	if(x[y] < y){
		console.log ("nope, here")
		var uhh = x.pop(x[y]);
		console.log (x)
		console.log (uhh)
	}
	else {
		console.log ("hahaha")
		var ehh = x.pop(y)
		console.log (x)
		console.log (ehh)
	}

}

console.log (returnIndex1([1,5,8],9))
// console.log (check([1,5,8,5],5))	
// console.log (bla([1,5,8],5))
// console.log (bla1([1,3,5,8,3],3))
// console.log (arraySlice([1,3,5,8,3],3))
// console.log (ugh([1,3,5,8,9],3))

// level 2.5
// Take the previous function, and figure out how to find a given element without looking at all of them.
// Hint: remember that the array is sorted.

function returnIndex (x,y){
	while (x[y]===undefined){
		y=y-1
		console.log ("hello")

	}
	return x[y]
}


var testCase = ([1,2,3,4,4,5,7],5)
console.log ("hello")
// console.log (returnIndex(testCase))