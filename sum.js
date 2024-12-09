/*
write a function that takes a number and return thesum of its digit
*/

function number (num){
	let arr = Array.from(String(num), Number);
	console.log(arr);
	return arr.reduce((acc,cur)=> acc +=cur,0)
	
}

console.log(number(1234));
