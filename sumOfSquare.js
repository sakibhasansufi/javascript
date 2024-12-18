// Write a function to calculate the sum of squares of all elements in an array.

function sumOfArray (arr){
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum = sum+ arr[i] * arr[i]
	}
	return sum;
}

console.log(sumOfArray([1,2,3]));
