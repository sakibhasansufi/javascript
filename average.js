/* chattenge: alcutate the Average

// Write a function called calculateAverage that takes an
array of numbers as input and returns the average of those
numbers.

find the average.
*/

function average (arr){
	let num = 0;
	for(let i =0;i<arr.length;i++){
		num = num + arr[i];
	}
	let avg = num/arr.length;
	return avg;
	
}
console.log("the average is =",average([1,2,3,4,5,6,7,8,9]));
