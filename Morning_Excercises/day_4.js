// NORMING BLEXERCISES D: :C

// LEVEL 9.9.0.8

var blep = [{
        x: 10,
        not_x: 11
    }, {
        x: 5,
        not_x: 11
    }, {
        x: 6,
        not_x: 11
    }, {
        x: 7,
        not_x: 11
    }
];

// add all the "x's" together in this array

function returnX(array) {
    var sum = 0;
    for (var i=0;i<array.length;i++){
        var obj = array[i];
        for (var key in obj){
            if (key==="x"){
                sum += obj[key]
            }
        }
    }
    return sum
}

console.log (returnX(blep))

// LEVEL 1.5

// write a function that computes the nth fibonacci number. A fibonacci number is equal to the sum

function nthFib(x) {
    var array = [1] 
    for (i=array[array.length-1];;i=i+array[array.length-2]){
        array.push(i)
    }  
    return (array[x-1])
}

console.log(nthFib(1))
console.log(nthFib(2))
console.log(nthFib(3))
console.log(nthFib(4))
console.log(nthFib(5))
console.log(nthFib(6))
console.log(nthFib(7))
console.log(nthFib(8))
console.log(nthFib(19))


function nthFib(x) {
    var array = [1] 
    for (i=1;;i=i+array[array.length-2]){
        array.push(i)
        if (array.length > x){
            return (array[x-1])
        }
    }  
}

console.log(nthFib(1))
console.log(nthFib(2))
console.log(nthFib(3))
console.log(nthFib(4))
console.log(nthFib(5))
console.log(nthFib(6))
console.log(nthFib(7))
console.log(nthFib(8))
console.log(nthFib(19))


// Y2 = 1
// y = 1 + 1(2)
// x = 1

function fibo (x){
    var previousNumber = 1;
    var previousPreviousNumber = 0;
    var currentNumber = 1;
    
    if(x === 1) {
        return 1;
    }
    
    if(x === 2) {
        return 1;
    }
    
    for (var i = 2; i <= x; i++){
        currentNumber = previousNumber + previousPreviousNumber;
        previousPreviousNumber = previousNumber;        
        previousNumber = currentNumber;
    }

    return currentNumber;
}

console.log(fibo (1));
console.log(fibo (2));
console.log(fibo (3));
console.log(fibo (4));
console.log(fibo (5));
console.log(fibo (6));
console.log(fibo (7));
console.log(fibo (8));
console.log(fibo (9));

// Thijs' version
function f(maxNum){
    var a = 1;
    var b = 1;
    var c = 1;
    var count = 0;
    while(count < maxNum-2){
        c = a+b;
        a = b;
        b = c;
        count++;
    }
    return(c)
}

console.log(f(1))
console.log(f(2))
console.log(f(3))
console.log(f(4))
console.log(f(5))
console.log(f(6))
console.log(f(7))



//Inessa

// RECURSION:
function fib(x) {
    if (x === 0) {
        return 0;
    } else if (x === 1) {
        return 1;
    } else {
        return fib(x-1)+fib(x-2);
    }
}
console.log(fib(1));
console.log(fib(5));
console.log(fib(8));
console.log(fib(1000));

// i.e.

// f(5) = 5

// f(6) = 8

// here's the first few:

// 1, 1, 2, 3, 5, 8, 13, 21