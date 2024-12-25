// write a function to find out how many times a number is repeated
function repeat (arr){
	let obj = {};
	for(let i=0; i<arr.length; i++){
		let count = 0;
		for(let j=0; j<arr.length; j++){
			if(arr[i]===arr[j]){
				count++;
			}
		}
		obj[arr[i]]=count
	}
	return obj;
};

console.log(repeat([2,3,4,4,2,2,2,4,1,1,5,6,6]))
