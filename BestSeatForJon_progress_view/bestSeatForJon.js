


//get new arrays filled with open seats from main array

function returnIdealSeat (x) {
	
	var uniqueArrayOriginal = [];
	var i = 0;
	var lengthOfEmptySeats = [];
	while (i<x.length) {
		if (x[i]===false){
			var a = []
			while (x[i]===false){
				a.push(i);
				i++
			}
			uniqueArrayOriginal.push(a)
			var b = a.length
			lengthOfEmptySeats.push(b)
		}
		else {
		i++
		} 
	}
	console.log("\n")
	if (uniqueArrayOriginal.length === 0){
		return "There seem to be no seats left. Hoofuckingray! Go home"
	}

	if (uniqueArrayOriginal[0].length === x.length){
		return "Pick any fucking seat you want socially anxious person"
	}
	console.log("The row consists of" +" "+ x.length +" "+ "seats");
	console.log("There is/ are" + " " + uniqueArrayOriginal.length+ " " + "row(s) with a total of"+ " " + lengthOfEmptySeats+" " + "empty seats" )

//Do a  corner check. if I have them and if they matter

	var f = uniqueArrayOriginal[uniqueArrayOriginal.length-1]
	var w = f.length

	var firstArrayInUniqueArrayLenght = uniqueArrayOriginal[0].length
	var lastArrayInUniqueArrayLenght = w

	var leftcornerImportant = false
	var rightcornerImportant = false

	console.log(x)

	console.log("This is the original array of all available seats:")
	console.log(uniqueArrayOriginal)

	if(uniqueArrayOriginal[0][0] === 0 && f[w-1] ===x.length-1){
		leftcornerImportant = true && rightcornerImportant == true;
	}

	if(uniqueArrayOriginal[0][0] === 0 || f[w-1] ===x.length-1){
		var uniqueArray = uniqueArrayOriginal.slice(); 	
 		uniqueArray.sort(function(a,b){
       	return a.length<b.length
       	})

 		if(uniqueArrayOriginal[0][0] === 0){
			if(((firstArrayInUniqueArrayLenght*2)) >= (uniqueArray[0].length)){
				leftcornerImportant = true
			}
		}

		if(f[w-1] ===x.length-1){
			if(((lastArrayInUniqueArrayLenght*2)) >= (uniqueArray[0].length)){
				rightcornerImportant = true
			}
		}

		if(uniqueArrayOriginal[0][0] === 0){
			if(uniqueArrayOriginal[0].length > uniqueArrayOriginal[uniqueArrayOriginal.length-1].length){
				rightcornerImportant = false
			}
		}

		if(f[w-1] ===x.length-1){
			if(uniqueArrayOriginal[0].length < uniqueArrayOriginal[uniqueArrayOriginal.length-1].length){
				leftcornerImportant = false
			}
		}
	}
	console.log("The leftcornerImportant value is set to:"+" "+leftcornerImportant)
	console.log("The rightcornerImportant value is set to:"+" "+rightcornerImportant)

//if I have two corners that matter..or one doesn't matter but (onecorner*2)-1 is not applicable, I handle in here

	if (leftcornerImportant === true && rightcornerImportant === true) {
		console.log ("im in the true && true section")
		if (uniqueArrayOriginal.length === 2){
			if (uniqueArrayOriginal[0].length === uniqueArrayOriginal[uniqueArrayOriginal.length-1].length){
				console.log ("the cornors have the same length");
				// return "You're lucky, take seat"+" "+ uniqueArrayOriginal[0][0] +" "+ "Or seat" +" "+(x.length-1);
				console.log("You're lucky, take seat"+" "+ uniqueArrayOriginal[0][0] +" "+ "Or seat" +" "+(x.length-1))
			}
		}
		else if (uniqueArrayOriginal.length > 2) {
			console.log ("Apparently you have two cornors and" +" "+ (uniqueArrayOriginal.length-2) +" "+"other row(s) to choose from")
			if (((uniqueArrayOriginal[0].length*2)-1) > (uniqueArray[0].length)){
				console.log ("but the row(s) is/ are too fucked-up, so take seat" +" "+ uniqueArrayOriginal[0][0] +" "+ "Or seat" +" "+(x.length-1))
			}
			else {
				console.log("take seat"+" "+ uniqueArrayOriginal[0][0] +" "+ "or seat" +" "+(x.length-1));
				for (var a =1;a<uniqueArrayOriginal.length-1; a++) {
					if (uniqueArrayOriginal[a].length%2==0) {
       					// return "or seat"+" "+(uniqueArrayOriginal[a][0]+ (uniqueArrayOriginal[a].length/2)-1) + '\n' + "or seat"+" "+ (uniqueArrayOriginal[a][0]+ (uniqueArrayOriginal[a].length/2))
       					console.log ("or seat"+" "+(uniqueArrayOriginal[a][0]+ (uniqueArrayOriginal[a].length/2)-1)) 
       					console.log ("or seat"+" "+(uniqueArrayOriginal[a][0]+ (uniqueArrayOriginal[a].length/2)))
       				}
       				else if (uniqueArrayOriginal[a].length%2==1){
       					// return ("Or seat" +" "+ (uniqueArrayOriginal[a][0]+(uniqueArrayOriginal[a].length-1)/2));
       					console.log ("Or seat" +" "+ (uniqueArrayOriginal[a][0]+(uniqueArrayOriginal[a].length-1)/2));

       				}
				}	
			}
		}
	}

//if i have no corners or I do, but they don't matter

	else if (leftcornerImportant === false && rightcornerImportant === false) {
		console.log ("I'm in the false && false section")
		var uniqueArrayOriginalSlice = uniqueArrayOriginal.slice()
 		uniqueArrayOriginalSlice.sort(function(a,b){
       	return a.length<b.length
       	})
		console.log ("there are no free or less corner seats")
    	var i = 0;
    	while(i<uniqueArrayOriginalSlice.length-1){
    	   	if(uniqueArrayOriginalSlice[i].length > uniqueArrayOriginalSlice[i+1].length){
    	   		uniqueArrayOriginalSlice.pop(i+1);
    	   	}
    	   	else {
    	   		i++
   			}
    	}
   		if (uniqueArrayOriginalSlice[0].length%2==1){
    	    console.log ("you have" +" "+ uniqueArrayOriginalSlice.length +" "+ "(equally) fucked-up seat(s) to choose from. count starts at 0" )
    	   	for (var a in uniqueArrayOriginalSlice){
    	   		// return "seat" +" "+ (uniqueArrayOriginalSlice[a][0]+(uniqueArrayOriginalSlice[a].length-1)/2);
    	   		console.log ("seat" +" "+ (uniqueArrayOriginalSlice[a][0]+(uniqueArrayOriginalSlice[a].length-1)/2));
   			}
   		}
    	else {
    	   	console.log ("You have"+ " " + (uniqueArrayOriginalSlice.length*2) +" "+ "(equally) fucked-up seat(s) to choose. Count starts at 0")       		
    	   	for (var a in uniqueArrayOriginalSlice) {
    	   		// return "seat"+" "+(uniqueArrayOriginalSlice[a][0]+ (uniqueArrayOriginalSlice[a].length/2)-1) + '\n' + "seat"+" "+ (uniqueArrayOriginalSlice[a][0]+ (uniqueArrayOriginalSlice[a].length/2))
    	   		console.log("seat"+" "+(uniqueArrayOriginalSlice[a][0]+ (uniqueArrayOriginalSlice[a].length/2)-1))
    	   		console.log("seat"+" "+ (uniqueArrayOriginalSlice[a][0]+ (uniqueArrayOriginalSlice[a].length/2)))  	   	
    	   	}
        }
	}

//if I have one corner that matters

	else if (leftcornerImportant === false || rightcornerImportant === false) {
		console.log("Im in the false || false section")
		if(uniqueArrayOriginal.length < 2){
			console.log("Yay, just one option for you. Take seat:"+" "+uniqueArrayOriginal[0][0]);
		}
		if (uniqueArrayOriginal.length === 2){
			if (leftcornerImportant === true && rightcornerImportant === false){
				console.log ("You really want to take seat"+" "+ uniqueArrayOriginal[0][0]);
			}
			else if (rightcornerImportant === true && leftcornerImportant === false) {
				console.log("Just go to seat" + " " + (x.length-1))
			}
		}

		if (uniqueArrayOriginal.length > 2) {
			console.log ("Apparently you have one corner and" +" "+ (uniqueArrayOriginal.length-1) +" "+"other row(s) to choose from")
			if (((uniqueArrayOriginal[0].length*2)-1) > uniqueArray[0].length || 
				((uniqueArrayOriginal[uniqueArrayOriginal.length-1].length*2)-1) > uniqueArray[0].length){

				if (leftcornerImportant === true && rightcornerImportant === false) {
					console.log ("but the row(s) is/ are too fucked-up, so take seat" +" "+ uniqueArrayOriginal[0][0])
				}

				if (rightcornerImportant === true && leftcornerImportant === false){
					console.log ("but the row(s) is/ are too fucked-up, so take seat" +" "+(x.length-1))
				}
			}
			else if (((uniqueArrayOriginal[0].length*2)-1) <= uniqueArray[0].length || 
				((uniqueArrayOriginal[uniqueArrayOriginal.length-1].length*2)-1) <= uniqueArray[0].length) {

				if (leftcornerImportant === true && rightcornerImportant === false) {
					console.log("take seat"+" "+ uniqueArrayOriginal[0][0])
				}

				if (rightcornerImportant === true ){
					console.log("take seat"+" "+(x.length-1));
				}

				for (var a =1;a<uniqueArrayOriginal.length-1; a++) {
					if (uniqueArrayOriginal[a].length%2==0) {
       					// return "or seat"+" "+(uniqueArrayOriginal[a][0]+ (uniqueArrayOriginal[a].length/2)-1) + '\n' + "or seat"+" "+ (uniqueArrayOriginal[a][0]+ (uniqueArrayOriginal[a].length/2))
       					console.log ("or seat"+" "+(uniqueArrayOriginal[a][0]+ (uniqueArrayOriginal[a].length/2)-1)) 
       					console.log ("or seat"+" "+(uniqueArrayOriginal[a][0]+ (uniqueArrayOriginal[a].length/2)))
       				}
       				else if (uniqueArrayOriginal[a].length%2==1){
       					// return ("Or seat" +" "+ (uniqueArrayOriginal[a][0]+(uniqueArrayOriginal[a].length-1)/2));
       					console.log ("Or seat" +" "+ (uniqueArrayOriginal[a][0]+(uniqueArrayOriginal[a].length-1)/2));

       				}
				}	
			}
		}
	}

//What else am I missing?!

	else {
		console.log ("What the fuck did you put in here?") //this should probably be in the false && false section because the default value is set so...but I'm not sure yet..
	}
}

// console.log (returnIdealSeat([true,false,false,false,false,false,true,false,false,false,false,false,true]));
// console.log (returnIdealSeat([false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false]));
// console.log (returnIdealSeat([false,false,false,false,true,false,false,false,false,false]));
console.log (returnIdealSeat([false,true,false,true,true,false,true,false,true,false,true]));
// console.log (returnIdealSeat([true,true,true,true,true,true,true,true,true,true,true,true]))
// console.log (returnIdealSeat([false,false,false,false,false,false,false,false,false,false,false]))
// console.log (returnIdealSeat([false,false,true,false,false,false,true,false,false]))
// console.log (returnIdealSeat([false,false,false,true,false,false,false,false,false,false,true,false]))
// console.log (returnIdealSeat([false,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,false,false,true,false,true,true,false,true,false,true,false,false,false,true,false]))
// console.log (returnIdealSeat([true,false,true,false,false,true,false,false,true,false,true,false]))

// var frontEdge = [false, false, false, true, false, false, false, false, true];


// console.log("5:" + returnIdealSeat([true, false, false, true, false, false, false, true]));
// console.log("1:" + returnIdealSeat([true, false]));
// console.log("2 or 6:" + returnIdealSeat([true, false, false, false, true, false, false]));
// console.log("0 or 4:" + returnIdealSeat([false, false, true, false, false, false, true]));

// console.log('\n'+"edges:");
// console.log("0: " + returnIdealSeat(frontEdge));
// console.log("8: " + returnIdealSeat(frontEdge.reverse()));

// console.log("0:" + returnIdealSeat([false, false, false, true, false, false, false, true]));
// console.log("7:" + returnIdealSeat([true, false, false, false, true, false, false, false]));
// console.log("0:" + returnIdealSeat([false, false, true, false]));
// console.log("3:" + returnIdealSeat([false, true, false, false]));


// console.log (returnIdealSeat([false,false,false,true,false,false,false,false,true,true]))