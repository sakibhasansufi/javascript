// write a function to check if the character is upper or lower
function checkCase (char){
	if(char===char.toUpperCase()){
		return 'Uppper case'
	} else {
		return 'Lower Case';
	}
	
	return char;
};

console.log(checkCase("P"))
