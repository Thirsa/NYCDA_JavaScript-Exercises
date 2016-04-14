//write a function that takes in an array of numbers and 
//checks whether each number is less than the previous one

//return true if all of them fit the condition, otherwise return false


function checkIfNumberIsLess(string) {
	for (var i = 1; i<string.length;i++){
		if (string[i]>=string[i-1]){
			return false
		}
		// else {
		// 	return false			
		// }
	}
	return true	
}


function checkLess(array) {
    for(var i = 1; i < array.length; i++) {
        if(array[i] >= array[i-1]) {
            return false;
        }
    }
    return true;
}



// var array0 = [1]
var array = [1,2,3,4,5,6,7,8]
var array1 = [1,2,3,4,5,6,8,7]

console.log (checkIfNumberIsLess(array))
console.log (checkIfNumberIsLess(array1))