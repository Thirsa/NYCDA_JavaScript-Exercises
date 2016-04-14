// Level 1

// Write a function that takes in two integers and returns the one which is
// closest to 0. If they are the same distance from 0, return either of them.
// example:
// 2, 3 returns 2
// -5, 6 returns -5
// -1, -1 returns -1


function returnCloseToZero1(x, y) {
	if (x*x - y*y < 0){
		return x
	}
	else {
		return y
	}
}

// Or

function returnCloseToZero (x, y) {
	if (x === y){
		return x
	}
	else {
		if (x < 0 || y < 0) {

			if (x<0 && y<0){
				x = x*-1
				y = y*-1
				if (x-y>0){
					return y*-1
				}
				else {
					return x*-1
				}
			}

			else if (x<0 && y>=0) {
				x = x*-1
				if(x-y>0){
					return y
				}
				else {
					return x*-1
				}

			}
			else if (x>=0 && y<0){
				y=y*-1
				if(x-y>0){
					return y*-1
				}
				else {
					return x
				}
			}
		}
		if (x-y > 0){
			return y
		}
		else {
			return x
		}
	}
}

console.log(returnCloseToZero(3,3));
console.log(returnCloseToZero(-3,3));

console.log(returnCloseToZero(3,-3));
console.log(returnCloseToZero(-3,-3));

console.log(returnCloseToZero(5,6));
console.log(returnCloseToZero(6,5));

console.log(returnCloseToZero(-5,-6));
console.log(returnCloseToZero(-6,-5));

console.log(returnCloseToZero(-5, 6));
console.log(returnCloseToZero(-6, 5));

console.log(returnCloseToZero(5, -6));
console.log(returnCloseToZero(6, -5));

console.log ("returnCloseToZero1")

console.log(returnCloseToZero1(3,3));
console.log(returnCloseToZero1(-3,3));

console.log(returnCloseToZero1(3,-3));
console.log(returnCloseToZero1(-3,-3));

console.log(returnCloseToZero1(5,6));
console.log(returnCloseToZero1(6,5));

console.log(returnCloseToZero1(-5,-6));
console.log(returnCloseToZero1(-6,-5));

console.log(returnCloseToZero1(-5, 6));
console.log(returnCloseToZero1(-6, 5));

console.log(returnCloseToZero1(5, -6));
console.log(returnCloseToZero1(6, -5));



/* Level 1 */
// Determine whether a given string is a palindrome. "radar", "racecar", "kayak" are all palindromes.

// function palindromes(x) {
// 	if (x)
// 	var halfLength = (x.length-1)/2
// 	var firstHalf = x.substr(0,0+halfLength)
// 	var a = ((x.length-1)-halfLength)
// 	var secHalf = x.substr(halfLength+1, x.length-1)
// 	console.log (halfLength)
// 	console.log (firstHalf)
// 	console.log (secHalf)

// 	if (firstHalf===secHalf.reverse()){
// 		return true
// 	}
// 	else {
// 		return false
// 	}
// }

// console.log (palindromes("radar"))

/* Level 1 */
// Determine whether a given string is a palindrome. "radar", "racecar", "kayak" are all palindromes.
function isPalindrome(string) {
    var reversed = string.split('').reverse().join('');
    return reversed == string;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("not racecar"));

/* Level 1.5 */
// Take your previous function and upgrade it: account for spaces and punctuation.
// So, for example, "A man, a plan, a canal: Panama" now counts as a palindrome.
function isPalindrome2(string) {
    var strippedString = "";
    for (var i = 0; i < string.length; i++) {
        if (' ,.:?!\'\"'.indexOf(string[i]) === -1) {
            strippedString += string[i];
        }
    }

    var reverseStrippedString = "";
    for (var j = strippedString.length - 1; j >= 0; j--) {
        reverseStrippedString += strippedString[j];
    }

    return strippedString.toLowerCase() == reverseStrippedString.toLowerCase()
}

console.log("true: " + isPalindrome2("A man, a plan, a canal: Panama"));
console.log("false: " + isPalindrome2("butt"));

var string = "a man, a plan, a canal, panama";

var string2 = "kayak";
var string3 = "racecar";
var string4 = "toot";
var string5 = "liliana";
var string6 = "pagano";

var string7 = "   a a b      c 23453452353543253212348194183cbaa";

function isPalindrome3(string) {
    var forward = 0;
    var backward = string.length - 1;
    while(forward < backward) {
        if(!isLetter(string[forward])) {
            forward++;
            continue;
        }

        if(!isLetter(string[backward])) {
            backward--;
            continue;
        }

        if(string[forward] !== string[backward]) {
            return false;
        }

        forward++;
        backward--;
    }

    return true;
}


function isLetter(character) {
    return character.match(/[a-z]/i) !== null;
}


console.log(isLetter("a"));
console.log(isLetter("Z"));
console.log(isLetter("b"));
console.log(isLetter("2"));
console.log(isLetter("-"));
console.log(isLetter("`"));
console.log(isLetter(" "));

console.log("true: " + isPalindrome3(string));
console.log("true: " + isPalindrome3(string2));
console.log("true: " + isPalindrome3(string3));
console.log("true: " + isPalindrome3(string4));
console.log("false: " + isPalindrome3(string5));
console.log("false: " + isPalindrome3(string6));
console.log("true: " + isPalindrome3(string7));

function isPalindrome4(string) {
    var array = string.replace(/[^a-z]/gi,'').split('');
    return array.slice().join('') === array.reverse().join('');
}

console.log("***********");

console.log("true: " + isPalindrome4(string));
console.log("true: " + isPalindrome4(string2));
console.log("true: " + isPalindrome4(string3));
console.log("true: " + isPalindrome4(string4));
console.log("false: " + isPalindrome4(string5));
console.log("pagano, false: " + isPalindrome4(string6));
console.log("true: " + isPalindrome4(string7));


function reverseString (string) {
    var x = '';
    for (var i = string.length - 1; i >= 0; i--) // i decrement here because i want to have the reverse of the string
        x += string[i];
    return x;
}

var isItAPalindrome = function (string) {
    return string === reverseString(string);
}

console.log(isItAPalindrome('fuckkilian'));
console.log(isItAPalindrome('anna'));
console.log(isItAPalindrome('meetsysteem'));
console.log(isItAPalindrome('koeniseenoenemeloen'));
console.log(isItAPalindrome('Sore was I ere I saw Eros')) // Will this work?