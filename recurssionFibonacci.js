// using recurssion to find fibonacci value
function fibonacci (num){
	if(num<=1){
		return num
	} else {
		return fibonacci(num-1) + fibonacci(num-2)
	}
};

console.log(fibonacci(5))
