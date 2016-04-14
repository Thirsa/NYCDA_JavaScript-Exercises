//Make module excersize


function sum (x, y) {
	return "the sum of x and y =" + ' ' + (x+y);
};

function difference (x, y) {
	return "the difference of x and y =" + ' ' + (x-y);
};

function product (x, y) {
	return "the product of x and y =" + ' ' + (x*y);
};

// var een = 5
// var two = 6

// console.log (sum(een,two));
// console.log (difference(een));
// console.log (product(een));

module.exports = {
	sum: sum,
	difference: difference,
	product: product
};

//calling the math method in miscellaneous/math

// var math = require ('./miscellaneous/math'); //when called, make sure the path is correct

// var sum = math.sum(5,6);
// var difference = math.difference((-50),(-600));
// var product = math.product(5,6);

// console.log (sum);
// console.log (difference);
// console.log (product);