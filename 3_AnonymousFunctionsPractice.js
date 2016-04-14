
//create functions within functions

function findSum (a,b) {
	return (a+b)
}
//
console.log (findSum(2,3))

function findProduct (a,b) {
	return (a*b)
}

console.log (findProduct(2,3))
//

function threeOperation (x, operation) {
	return operation(x, 3);	
}
console.log (threeOperation(4,findSum))
console.log (threeOperation(5,findSum))
console.log (threeOperation(4,findProduct))
console.log (threeOperation(5,findProduct))