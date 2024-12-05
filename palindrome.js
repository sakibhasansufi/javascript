/*Write a function to determine whether a given string is
a palindrome or not. A palindrome is a word, phrase,
number, or other sequence of characters that reads the same
forward and backward, ignoring spaces, punctuation, and
capitalization.
*/

function isPalindrome (str) {
	str = str.toLowerCase();
	let reverse_str = str.split("").reverse().join("");
	console.log(reverse_str);
	return str === reverse_str ? "Palindrome" : "Not a palindrome" ;
}

console.log(isPalindrome("Radar"));


