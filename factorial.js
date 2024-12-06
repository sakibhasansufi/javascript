/*
 Write a function factorial that takes a non-negative
integer num as input and returns its factorial. The
factorial of a non-negative integer n, denoted as n!, is
the product of all positive integers less than or equal to
n. The factorial of 0 is defined as 1.

*/

function factorial (num){
	let fact = 1;
	for(let i=1; i<=num;i++){
		fact = fact * i
	}
	return fact;
}

console.log(factorial(4))

