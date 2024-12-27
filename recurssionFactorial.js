// find factorial of a number using recurssion method
function recurssion (num){
	if(num===1){
		return 1;
	} else {
		return num* recurssion(num-1)
	}
};

console.log(recurssion(5))
