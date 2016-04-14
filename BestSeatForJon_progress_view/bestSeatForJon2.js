// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.



// First I wanto to single out all empty seats. where empty seats next to eachother should be singled-out in one part. 
// Then i can analyze that array.if there are no corner seats, the array can be processed differently. if there are two 
// corner seats that are relevant it can also be processed differently. and If there is one relevant corner seat it will have anoter way

function returnIdealSeat (x) {
	
	// var a = 0;
	// if (x[a] !== true || x[a] !== false){
	// 	return ("Please feed me a string of booleans")
	// 	a++
	// }

//Here I loop over the original array and making a new array

	var emptySeatArray = [];
	var i = 0;
	var lengthOfEmptySeats = [];

	while (i<x.length) {
		if (x[i]===false){
			var a = []
			while (x[i]===false){
				a.push(i);
				i++
			}
			emptySeatArray.push(a)
			var b = a.length
			lengthOfEmptySeats.push(b)
		}
		else {
		i++
		} 
	}

	if (emptySeatArray.length === 0){
		return ("There seem to be no seats left. Hoofuckingray! Go home")
	}

	if (emptySeatArray[0].length === x.length){
		return ("Pick any fucking seat you want socially anxious person")
	}
	console.log('\n')
	console.log("The row consists of" +" "+ x.length +" "+ "seats");
	console.log("There is/ are" + " " + emptySeatArray.length+ " " + "row(s) with a total of"+ " " + lengthOfEmptySeats+" " + "empty seats" )
	console.log(emptySeatArray)

//this will only be true if the seats are relevant

	var leftCornerSeat = false;
	var rightCornerSeat = false;

	var f = emptySeatArray[emptySeatArray.length-1]
	var w = f.length

	var sortedEmptySeatArray = emptySeatArray.slice(); 	
 	sortedEmptySeatArray.sort(function(a,b){
    return a.length<b.length
   	})

 	console.log(sortedEmptySeatArray)

 	if (emptySeatArray[0][0] === 0){
 		if(((emptySeatArray[0].length*2)-1) >= sortedEmptySeatArray[0].length){
 			leftCornerSeat = true;
 		}
 	}

 	if (f[w-1] ===x.length-1){
 		if (((f[w-1]*2)-1) >= sortedEmptySeatArray[0]){
 			rightCornerSeat = true;
 		}
 	}

 	console.log(leftCornerSeat)
 	console.log(rightCornerSeat)

 	if (leftCornerSeat === false && rightCornerSeat === false){

 		console.log ("I'm in the false && false section");
 		console.log ("too bad, no corners!")

 		var b = 0;
 		while (b < sortedEmptySeatArray.length-1){
 			if (sortedEmptySeatArray[0].length > sortedEmptySeatArray[b+1].length){
 				sortedEmptySeatArray.pop(b+1);
 			}
 			else {
 				b++;
 			}
 		}
 		console.log ("im here")
 		console.log (sortedEmptySeatArray)
   		if (sortedEmptySeatArray[0].length%2==1){
    	    console.log ("you have" +" "+ sortedEmptySeatArray.length +" "+ "(equally) fucked-up seat(s) to choose from.")
    	   	for (var a in sortedEmptySeatArray){
    	   		// return sortedEmptySeatArray[a][0]+(sortedEmptySeatArray[a].length-1)/2;
    	   		console.log ("seat" +" "+ (sortedEmptySeatArray[a][0]+(sortedEmptySeatArray[a].length-1)/2));
   			}
   		}
    	else {
    	   	console.log ("You have"+ " " + (sortedEmptySeatArray.length*2) +" "+ "(equally) fucked-up seat(s) to choose from.")       		
    	   	for (var a in sortedEmptySeatArray) {
    	   		// return "seat"+" "+(sortedEmptySeatArray[a][0]+ (sortedEmptySeatArray[a].length/2)-1) + '\n' + "seat"+" "+ (sortedEmptySeatArray[a][0]+ (sortedEmptySeatArray[a].length/2))
    	   		console.log("seat"+" "+(sortedEmptySeatArray[a][0]+ (sortedEmptySeatArray[a].length/2)-1))
    	   		console.log("seat"+" "+ (sortedEmptySeatArray[a][0]+ (sortedEmptySeatArray[a].length/2)))  	   	
    	   	}
        }
 	}

 	else if (leftCornerSeat === true && rightCornerSeat === false){
 		
 		console.log("I'm in the leftCornerSeat = true && rightCornerSeat = false section")
		
		// var sortedEmptySeatArrayTwo = emptySeatArray.slice(); 	
 	// 	sortedEmptySeatArrayTwo.sort(function(a,b){
  //   	return a.length<b.length
  //  		})

 		// if (((emptySeatArray[0].length*2)-1) > sortedEmptySeatArrayTwo[0].length){
 		// 	console.log ("yay, one best corner :D! Take seat")
 		// 	return emptySeatArray[0][0];
 		// }

 		// var b = 0;
 		// while (b < sortedEmptySeatArrayTwo.length-1){
 		// 	if (sortedEmptySeatArrayTwo[0].length > sortedEmptySeatArrayTwo[b+1].length){
 		// 		sortedEmptySeatArrayTwo.pop(b+1);
 		// 	}
 		// 	else {
 		// 		b++;
 		// 	}
 		// }
 		// console.log(sortedEmptySeatArrayTwo)
 		// console.log ("Apparently you have one corner and" +" "+ (sortedEmptySeatArrayTwo.length-1) +" "+"other row(s) to choose from")
 		console.log(emptySeatArray)
 		console.log ("The corner seat"+" "+ emptySeatArray[0][0])
 		var a =1
		while (a<emptySeatArray.length-1) {
			if (emptySeatArray[a].length == emptySeatArray[0].length*2 || emptySeatArray[a].length == ((emptySeatArray[0].length*2)-1) && emptySeatArray[a].length%2==0) {
  				console.log ("or seat"+" "+(emptySeatArray[a][0]+ (emptySeatArray[a].length/2)-1)) 
       			console.log ("or seat"+" "+(emptySeatArray[a][0]+ (emptySeatArray[a].length/2)))
   			// }
    		if (emptySeatArray[a].length == emptySeatArray[0].length*2 || emptySeatArray[a].length == ((emptySeatArray[0].length*2)-1) && emptySeatArray[a].length%2==1){
 				console.log ("Or seat" +" "+ (emptySeatArray[a][0]+(emptySeatArray[a].length-1)/2));
       		a++
       		}
       		
       	}
		}
 	}

 	else if (rightCornerSeat === true && leftCornerSeat === false){
 		
 		console.log("I'm in the rightCornerSeat = true && leftCornerSeat = false section")
		
		var sortedEmptySeatArrayThree = emptySeatArray.slice(); 	
 		sortedEmptySeatArrayThree.sort(function(a,b){
    	return a.length<b.length
   		})

 		if (((f.lenght*2)-1) > sortedEmptySeatArrayThree[0].length){
 			console.log ("yay, one best corner :D! Take seat")
 			return f[w-1];
 		}

 		var b = 0;
 		while (b < sortedEmptySeatArrayThree.length-1){
 			if (sortedEmptySeatArrayThree[0].length > sortedEmptySeatArrayThree[b+1].length){
 				sortedEmptySeatArrayThree.pop(b+1);
 			}
 			else {
 				b++;
 			}
 		}
 		console.log ("Apparently you have one corner and" +" "+ (sortedEmptySeatArrayThree.length-1) +" "+"other row(s) to choose from")
 		console.log ("The corner seat"+" "+ x.length-1)
		for (var a =1;a<sortedEmptySeatArrayThree.length-1; a++) {
			if (sortedEmptySeatArrayThree[a].length%2==0) {
       			// return "or seat"+" "+(sortedEmptySeatArrayThree[a][0]+ (sortedEmptySeatArrayThree[a].length/2)-1) + '\n' + "or seat"+" "+ (sortedEmptySeatArrayThree[a][0]+ (sortedEmptySeatArrayThree[a].length/2))
  				console.log ("or seat"+" "+(sortedEmptySeatArrayThree[a][0]+ (sortedEmptySeatArrayThree[a].length/2)-1)) 
       			console.log ("or seat"+" "+(sortedEmptySeatArrayThree[a][0]+ (sortedEmptySeatArrayThree[a].length/2)))
       			}
       		else if (sortedEmptySeatArrayThree[a].length%2==1){
       			// return ("Or seat" +" "+ (sortedEmptySeatArrayThree[a][0]+(sortedEmptySeatArrayThree[a].length-1)/2));
 				console.log ("Or seat" +" "+ (sortedEmptySeatArrayThree[a][0]+(sortedEmptySeatArrayThree[a].length-1)/2));
       		}
		}
 	}

 	else if (rightCornerSeat === true && leftCornerSeat === true){
 		
 		console.log("I'm in the rightCornerSeat = true && leftCornerSeat = true section")
		
		var sortedEmptySeatArrayFour = emptySeatArray.slice(); 	
 		sortedEmptySeatArrayFour.sort(function(a,b){
    	return a.length<b.length
   		})


 		// if (((f.lenght*2)-1) > sortedEmptySeatArrayFour[0].length){
 		// 	console.log ("yay, one best corner :D! Take seat")
 		// 	return f[w-1];
 		// }

 		var b = 0;
 		while (b < sortedEmptySeatArrayFour.length-1){
 			if (sortedEmptySeatArrayFour[0].length > sortedEmptySeatArrayFour[b+1].length){
 				sortedEmptySeatArrayFour.pop(b+1);
 			}
 			else {
 				b++;
 			}
 		}

 		if (sortedEmptySeatArrayFour.length <= 2){
 			if(emptySeatArray[0].length === f.lenght){
 				console.log ("Yay, two corners. Pick seat"+" "+ emptySeatArray[0][0]+" "+"or seat"+" "+ x.length-1)
 			}
 			if(emptySeatArray[0].length > f.length){
 				console.log ("The left corner is better. take seat"+" "+emptySeatArray[0][0]);
 			}
 			else{
 				console.log ("The ight corner is better. take seat"+" "+ x.length-1);
 			}
 		}

 		console.log ("Apparently you have two and" +" "+ (sortedEmptySeatArrayFour.length-1) +" "+"other row(s) to choose from")

		for (var a =1;a<sortedEmptySeatArrayFour.length-1; a++) {
			if (sortedEmptySeatArrayFour[a].length%2==0) {
       			// return "or seat"+" "+(sortedEmptySeatArrayFour[a][0]+ (sortedEmptySeatArrayFour[a].length/2)-1) + '\n' + "or seat"+" "+ (sortedEmptySeatArrayFour[a][0]+ (sortedEmptySeatArrayFour[a].length/2))
  				console.log ("or seat"+" "+(sortedEmptySeatArrayFour[a][0]+ (sortedEmptySeatArrayFour[a].length/2)-1)) 
       			console.log ("or seat"+" "+(sortedEmptySeatArrayFour[a][0]+ (sortedEmptySeatArrayFour[a].length/2)))
       			}
       		else if (sortedEmptySeatArrayFour[a].length%2==1){
       			// return ("Or seat" +" "+ (sortedEmptySeatArrayFour[a][0]+(sortedEmptySeatArrayFour[a].length-1)/2));
 				console.log ("Or seat" +" "+ (sortedEmptySeatArrayFour[a][0]+(sortedEmptySeatArrayFour[a].length-1)/2));
       		}
		}
 	}

}

var test1 = [false,false,false,true,false,false,false,false,false,true,false,true,false,false,false,false,false,true]
var test2 = [false,false,true,false,false,false,false,true,false,true,false,false,false,false,true]

// console.log (returnIdealSeat("im not an array"))
// console.log (returnIdealSeat([true,true,true]))
// console.log (returnIdealSeat([false,false,false]))
// console.log (returnIdealSeat([false,false,false,false,true,false,false,false]));
// console.log (returnIdealSeat([false,true,false,false,false,true,false,false,false,true]))
// console.log (returnIdealSeat([false,true,false,false,false,false,true,false,false,false,false,true]))
// console.log (returnIdealSeat([false,true,false,false,false,true,false,true,false,true]))
// console.log (returnIdealSeat([false,false,false,false,true,false,true,false,true]))
// console.log (returnIdealSeat([false,false,false,true,false,false,false,false,false,true,false,true,false,false,false,false,false,true]))
// console.log (returnIdealSeat([false,false,true,false,false,false,false,true,false,true,false,false,false,false,true]))
// console.log (returnIdealSeat(test1.reverse()))
// console.log (returnIdealSeat(test2.reverse()))
console.log (returnIdealSeat(test1));
// console.log (returnIdealSeat(test2))


