/*
Write a function to find the maximum number from an array
 */
 
 function maximumNumber (arr){
	return Math.min(...arr); 
 }
 
 console.log(maximumNumber([1,5,65,4,32]));
