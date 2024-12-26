// find mode 
function mode (arr){
	arr = arr.sort((a,b)=>a-b);
	let count = {};
	let maxNum = 0;
	let mode;
	for(let element of arr){
		count[element] = (count[element] || 0)+1;
		if(count[element]>maxNum){
			maxNum=count[element];
			mode = element;
		}
	}
	return mode;
};

console.log(mode([2,4,5,2,1,4,6,6,6,6]));
