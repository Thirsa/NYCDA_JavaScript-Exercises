// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.

function returnIdealSeat (x) {

//Here I'm looping over my given array of booleans to create a new array with arrays in it that contains all the empty seets next to eachother

var array = x.split(true);
console.log (array);

//Here I'm setting some conditionals in order to place my new array in on of the four possibilities. see furter down below for those
// 	var leftCornerSeat = false;
// 	var rightCornerSeat = false;

// 	var f = emptySeatArray[emptySeatArray.length-1]
// 	var w = f.length
	
// 	var sortedEmptySeatArray = emptySeatArray.slice(); 	
//  	sortedEmptySeatArray.sort(function(a,b){
//     return a.length<b.length
//    	})

//  	var conRightOne = f[w-1]*2
//  	var conRightTwo = (f[w-1]*2)-1

//   	if (emptySeatArray[0][0] === 0){
//  		if(emptySeatArray[0].length*2 >= sortedEmptySeatArray[0].length || (emptySeatArray[0].length*2)-1 >= sortedEmptySeatArray[0].length){
//  			leftCornerSeat = true;
//  		}
//  	}
//  	if (f[w-1] ===x.length-1){
//  		if (conRightOne >= sortedEmptySeatArray[0] || conRightTwo >= sortedEmptySeatArray[0].length){
//  			rightCornerSeat = true;
//  		}
//  	}
// 	if(emptySeatArray[0][0] === 0){
// 		if(emptySeatArray[0].length > emptySeatArray[emptySeatArray.length-1].length){
// 			rightCornerSeat = false
// 		}
// 	}
// 	if(f[w-1] ===x.length-1){
// 		if(emptySeatArray[0].length < emptySeatArray[emptySeatArray.length-1].length){
// 			leftCornerSeat = false
// 		}
// 	}

// //Here my sections start and the output wil happen. There are four sections and you can basically tell them apart by format.
// //The first if condition lets you know in which section you are.

// //I also have to mention one last thing... I haven't figured out how to use 'return' without it messing with my code... 
// //In this particular exercise that is...

//  	if (leftCornerSeat === false && rightCornerSeat === false){
//  		console.log ("Im in the false && false section")

//  		var sliceFFSeatArray = emptySeatArray.slice();
//  		sliceFFSeatArray.sort(function(a,b){
//     	return a.length<b.length})

//     	for (var a in sliceFFSeatArray){
//     		if (sliceFFSeatArray[a].length === sliceFFSeatArray[0].length){
//     			if (sliceFFSeatArray[0].length%2==1){
//     				console.log (sliceFFSeatArray[a][0]+(sliceFFSeatArray[a].length-1)/2)
//     			}
//     			else if (sliceFFSeatArray[0].length%2==0){
//     	   			console.log("seat"+" "+(sliceFFSeatArray[a][0]+ (sliceFFSeatArray[a].length/2)-1))
//     	   			console.log("seat"+" "+ (sliceFFSeatArray[a][0]+ (sliceFFSeatArray[a].length/2)))
//     			}
//     		}
//     	}
//  	}

//  	else if (leftCornerSeat === true && rightCornerSeat === false){
//  		console.log ("Im in the true && false section")

//  		var sliceFFSeatArrayTwo = emptySeatArray.slice();

//     	console.log (0)
//     	for (var a = 1;a<sliceFFSeatArrayTwo.length;a++){
//     		if (sliceFFSeatArrayTwo[a].length === sliceFFSeatArrayTwo[0].length*2 || sliceFFSeatArrayTwo[a].length === (sliceFFSeatArrayTwo[0].length*2)-1){
//     			if (sliceFFSeatArrayTwo[a].length%2==1){
//     				console.log (sliceFFSeatArrayTwo[a][0]+(sliceFFSeatArrayTwo[a].length-1)/2)
//     			}
//     			else if (sliceFFSeatArrayTwo[a].length%2==0){
//     	   			console.log((sliceFFSeatArrayTwo[a][0]+ (sliceFFSeatArrayTwo[a].length/2)-1))
//     	   			console.log((sliceFFSeatArrayTwo[a][0]+ (sliceFFSeatArrayTwo[a].length/2)))
//     			}
//     		}
//     	}
//  	}

//  	else if (leftCornerSeat === false && rightCornerSeat === true){
//  		console.log ("Im in the false && true section")

//  		var sliceFFSeatArrayThree = emptySeatArray.slice();

//     	console.log (x.length-1)
//     	for (var a = 0; a < sliceFFSeatArrayThree.length-1;a++){
//     		if (sliceFFSeatArrayThree[a].length === w*2 || sliceFFSeatArrayThree[a].length === (w*2)-1){
//     			if (sliceFFSeatArrayThree[a].length%2==1){
//     				console.log (sliceFFSeatArrayThree[a][0]+(sliceFFSeatArrayThree[a].length-1)/2)
//     			}
//     			else if (sliceFFSeatArrayThree[a].length%2==0){
//     	   			console.log((sliceFFSeatArrayThree[a][0]+ (sliceFFSeatArrayThree[a].length/2)-1))
//     	   			console.log((sliceFFSeatArrayThree[a][0]+ (sliceFFSeatArrayThree[a].length/2)))
//     			}
//     		}
//     	}
//  	}

//  	else if (leftCornerSeat === true && rightCornerSeat === true){
//  		console.log ("Im in the true && true section")

//  		var sliceFFSeatArrayFour = emptySeatArray.slice();

//     	console.log (0 + x.length-1)
//     	for (var a = 1; a < sliceFFSeatArrayFour.length-1;a++){
//     		if (sliceFFSeatArrayFour[a].length === w*2 || sliceFFSeatArrayFour[a].length === (w*2)-1){
//     			if (sliceFFSeatArrayFour[a].length%2==1){
//     				console.log (sliceFFSeatArrayFour[a][0]+(sliceFFSeatArrayFour[a].length-1)/2)
//     			}
//     			else if (sliceFFSeatArrayFour[a].length%2==0){
//     	   			console.log((sliceFFSeatArrayFour[a][0]+ (sliceFFSeatArrayFour[a].length/2)-1))
//     	   			console.log((sliceFFSeatArrayFour[a][0]+ (sliceFFSeatArrayFour[a].length/2)))
//     			}
//     		}
//     	}
//  	}
}

// var test = [false,false,true,false,false,false,true,false,false,false,false,true]

// console.log (returnIdealSeat([true,false,false,false,true,false,false,false,true]))
// console.log (returnIdealSeat([true,false,false,false,false,true,false,false,false,false,true]))
// console.log (returnIdealSeat([false,false,true,false,false,false,true,false,false,false,false,true]))
// console.log (returnIdealSeat(test.reverse()))

// console.log("5:" + returnIdealSeat([true, false, false, true, false, false, false, true]));
// console.log("1:" + returnIdealSeat([true, false]));
// console.log("2 or 6:" + returnIdealSeat([true, false, false, false, true, false, false]));
// console.log("0 or 4:" + returnIdealSeat([false, false, true, false, false, false, true]));

// console.log("edges:");

// var frontEdge = [false, false, false, true, false, false, false, false, true];

// console.log("0: " + returnIdealSeat(frontEdge));
// console.log("8: " + returnIdealSeat(frontEdge.reverse()));
// console.log("0:" + returnIdealSeat([false, false, false, true, false, false, false, true]));
// console.log("7:" + returnIdealSeat([true, false, false, false, true, false, false, false]));
// console.log("0:" + returnIdealSeat([false, false, true, false]));
console.log("3:" + returnIdealSeat([false, true, false, false]));