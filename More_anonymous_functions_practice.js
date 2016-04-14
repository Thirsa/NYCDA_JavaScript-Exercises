function bloopAppender (x) {
	return x + "bloop"
}

function doubler (x) {
	return x + x
}

function changeString (word, firstOperation, secondOperation) {
	var a = firstOperation(word);
	var b = secondOperation(a);
	return b
}

console.log (changeString("I'm a fish!",bloopAppender,doubler));
console.log (changeString("I'm a fish!", doubler, bloopAppender));
console.log (changeString("I like bloops!",bloopAppender, bloopAppender))
console.log (changeString("wurzle_flurble_", doubler, doubler))