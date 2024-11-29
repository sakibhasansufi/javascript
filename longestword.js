/* 
Write a function that takes a string as input and returns the longest word in the string. If there are multiple words with the same length, return the first one that appears. 

1. If the input is empty or contain white space, the function should return false.
*/

const findLongestWord = (str) =>{
    if(str.trim().length === 0){
        return false;
    }

    words = str.split(" ");
    // words = words.sort((a,b)=>a.length-b.length);
    // console.log(words);
    // return words.at(-1);

    return words.reduce((a,b)=>a.length>b.length?a:b);


}

console.log(findLongestWord("The Quick Brown fox jumps over the lazy dog"));