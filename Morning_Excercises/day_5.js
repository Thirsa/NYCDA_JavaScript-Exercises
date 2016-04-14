/* Level 0.2 */

// Write a function that, given a string, "doubles" it. For example, "bun" becomes "bunbun".
// Print out the doubled string to the console.

function dubble(x) {
	return x+x
}

console.log (dubble("bun"))

// level 1.5

// given two arrays that contain integers with no duplicates, create a function that determines
// whether they contain the exact same elements.
// examples:
// [1, 2, 3], [3, 2, 1] --> true
// [1, 2, 3], [2, 3, 4] --> false

function sameNumbers (x,y) {
	var a = 0;
	var i = 0;
	while (i<x.length-1 && a<y.length-1){
		if (x[i]===y[a]){

			console.log ("x[i]" + x[i])
			console.log ("y[a]" + y[a])


			if (i === x.length-1 && a === y.length-1){
				return true
			}

			i++;
			a++;
		}
		else{
			a++
			if(a===y.length-1){
				return false
			}
		}
	}
}

console.log(sameNumbers([1,2,3],[1,2,4]))
// console.log(sameNumbers([1,2,3],[3,2,1]))

// level 1

// given two arrays that contain integers with no duplicates, create a function that determines
// whether they contain the exact same elements.
// examples:
// [1, 2, 3], [3, 2, 1] --> true
// [1, 2, 3], [2, 3, 4] --> false

var trop = [1, 2, 3];
var snob = [3, 2, 1];
var poop = [2,3,1]
var cob = [2,2,2];
// [1, 2, 3], [2, 3, 4] --> false

function exacter (bol,com) {
    bol.sort(function(a, b){return a-b});
    com.sort(function(a, b){return a-b});
    var counter = 0;

    if(bol.length !== com.length) {
        return false;
    }
    
    for (var i = 0; i < bol.length; i++) {
        if (bol[i] === com[i]) {
            counter++;
        }
    }
    
    if (counter === bol.length) {
        return true;
    } else {
        return false;
    }
}

console.log('**********Roberto************')
console.log(exacter([1,2,3], [1,2,3,4]));
console.log(exacter([1,2,3], [1,2,3]));
console.log(exacter(trop,cob));
console.log(exacter(trop,snob));
console.log(exacter(poop,cob));
console.log(exacter(poop,snob));

console.log('**********Thijs************')

function sameElements(array1, array2){
    return array1.sort().toString()===array2.sort().toString()
}
console.log(sameElements([1, 2, 3], [3, 2, 1]))
console.log(sameElements(['1', '2', '3'], [3, 2, 1]))
console.log(sameElements([1, 2, 3], [2, 3, 4]))
console.log(sameElements([1, 'a', 3], [3, 'a', 1]))
console.log(sameElements(["[1,2,3]"],[1,2,3]));


console.log('**********Jon************')
function checkSame(a1, a2) {
    a1 = a1.sort(); 
    a2 = a2.sort();
    
    if(a1.length !== a2.length) {
        return false;
    }
    
    for(var i = 0; i < a1.length; i++) {
        if(a1[i] !== a2[i]) {
            return false;
        }
    }
    
    return true;
}

console.log(checkSame([1,2,3],[1,2,4]));
console.log(checkSame([1,2,3,4],[1,2,4]));
console.log(checkSame([1,2],[2,1]));

console.log('**********ALEX************')


var array1 = [1, 2, 3];
var array2 = [3, 2, 1];
var array3 = [2, 3, 4];
var counter = 0;

function findDuplicates(x, y) {
    if(x.length !== y.length) {
        return false;
    }
    
    for (var i = 0; i < x.length; i++) {
        for (var z = 0; z < y.length; z++) {
            if (x[i] === y[z]) {
                counter++;
                if (counter === x.length) {
                    return true;
                }
            }
        }
    }

    return false;
}

console.log(findDuplicates([2],[2,2,2]));
console.log(findDuplicates(array1, array2));
console.log(findDuplicates(array2, array3));
console.log(findDuplicates(array1, array3));
console.log(findDuplicates([2,2,3],[2,3,3]));

/* level 1 */
// write a function that determines the ‘nth’ triangle number.
/**
 * For example, f(4) = 10 and f(5) = 15
 * A triangle number is the number of
 * dots in a given triangle (shown below)
 *    .
 *   . .
 *  . . .
 * . . . .
 * imagine bowling pins
 */

function triangleNumber(x) {
	var pins = 0;
	var i = 0;
	while (x>0){
		var line = (x-i)
		pins += x-i
		i++;
		if(line === 1){
			return pins
		}
	}
}


function triangleNumber(x) {
    var pins = 0;
    var i = 0;
    while (x !== i){
        pins += x-i
        i++;
    }

    return pins;
}

console.log(triangleNumber(1))
console.log(triangleNumber(2))
console.log(triangleNumber(3))
console.log(triangleNumber(4))
console.log(triangleNumber(5))
console.log(triangleNumber(6))
