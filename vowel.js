/*
write function to find how many vowels from a string
*/

function findVowel(str){
	let count = 0; 
	let vowel = 'aeiouAEIOU';
	for(let i = 0; i<str.length; i++){
		if(vowel.includes(str[i])){
			count = count+1
		}
	}
	return count;
}

console.log("number of vowels is",findVowel("Hello my name is khan"));
