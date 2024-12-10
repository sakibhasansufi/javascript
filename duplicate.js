/*
Write a function to remove the duplicate value
*/

function removeDuplicate (arr) {
	let uniqueValue = [];
	for(let i=0; i< arr.length; i++){
		let newElement = arr[i];
		if(!uniqueValue.includes(newElement)){
			uniqueValue.push(newElement)
		}	
	}
	return uniqueValue;
}

console.log(removeDuplicate([3,3,31,45,7,4,4]));
