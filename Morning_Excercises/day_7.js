// afternoon exercises :'c

// level 1.5

// write a function that counts the number of times a given letter
// appears in a string.
// example:
// "asdfsfjsaasdfas", "a" --> 4

function countLetter (x,y){
	var counter = 0;
	for (var i = 0; i<x.length-1;i++){
		if (x[i]===y){
			counter++
		}
	}
	return counter
}

console.log(countLetter("asdfsfjsaasdfas","a"))

// level 2

// Given a paragraph of text, write a function that finds
// the most common word.
// example:

// "a a a b asdf asdf b a b asdf jkl jkl asdf asdf asdf"
// --> "asdf"

function countWord (x){
	x = x.toLowerCase()	
	x = x.replace(/[.,;]/g,'')	
	x = x.split(" ")
	x = x.sort()

	var word = "";
	var wordCount = [];
	var counter = 0;
	var freq = 0;

	for (var i=0;i<x.length-1;i++){
		counter ++
		if (x[i] !== x[i+1]){
			wordCount.push(counter)
				if (counter > freq){
					word = x[i]
					freq = counter
				}
			counter = 0
		}
	}
	wordCount.sort(sortByNumber)
	return (word + " " + "appears" + " " + wordCount[wordCount.length-1] + " " + "times")
}

function sortByNumber (a,b) {
	return a - b;
}

var text = "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat" 

var text1 = "De marechaussees die zich normaal bezighouden met het controleren van paspoorten van reizigers naar niet-Schengenlanden, zijn door de terreurdreiging belast met meer aangescherpte veiligheidstaken. KLM laat desgevraagd aan de krant weten ongerust te zijn over de drukte op het vliegveld. Bij onvoldoende capaciteit komt ook onze functie als knooppunt voor doorgaande reizigers in gevaar. Een vlotte doorstroming is van essentieel belang. We verwachten dat de luchthaven ernstig oponthoud tijdig voorkomt."

console.log (countWord(text))
console.log (countWord(text1))