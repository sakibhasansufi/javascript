// write a function to convert a string to camel case and snake case

function toCamelCase(str){
	str = str.trim().split(' ');
	str = str.map((curEle,index)=>{
		if(index===0){
			return curEle.toLowerCase()
		} else {
			return curEle.charAt(0).toUpperCase() + curEle.slice(1).toLowerCase();
		}
	})
	
	return str.join("");
};

console.log(toCamelCase("hello world gReat"));
