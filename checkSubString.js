// write a function to check if a given string strats with a substring


function checkSubString(str,subStr) {
	
	// return str.toLowerCase().startsWith(subStr.toLowerCase());
	return str.toLowerCase().slice(0,subStr.length) === subStr;
};

console.log(checkSubString("hello world","hello")); 
