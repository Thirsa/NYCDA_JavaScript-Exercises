
for (var x = 1; x <101; x++) {
	var y = x;
	if (y%3==0 && y%5==0)
		{y = 'fizzbuzz'}
	if (y%3==0)
		{y = 'Fizz'}
	if (y%5==0)
		{y = 'buzz'}
	console.log (y);
}	