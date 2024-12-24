// find out median
const number = [3,5,4,7,9,2,10];
const number2 = [1,2,3,4];

function median (arr){
	arr = arr.sort((a,b)=> a-b);
	let length = arr.length;
	let mid = Math.floor(length / 2);
	if(length % 2===0){
		return (arr[mid]+ arr[mid - 1])/2
	} else {
		return arr[mid]
	}
};

console.log(median(number));
console.log(median(number2));
