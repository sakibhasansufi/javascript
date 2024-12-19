// write a function to find the minimum number from an Array

function minmum (arr){
	let min = arr[0];
	for(let i=0; i< arr.length; i++){
		if(min>arr[i]){
			min = arr[i]; 
		}
	}
	
	return min;
};

console.log(minmum([45,8,79,4,56]))
