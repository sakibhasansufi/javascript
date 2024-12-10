/*
Write a function to remove the duplicate value
*/

function removeDuplicate (arr) {
	let newarr = [...new Set(arr)];
	return newarr;
}

console.log(removeDuplicate([3,3,31,45,7,4,4]));
