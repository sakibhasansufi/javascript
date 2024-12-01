/* You are required to implement a function generateHash that generates a hash tag from a given input string.
The hash tag should be constructed as follows:

1.The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
2.If the length of the input string is greater than 280 characters or if the input string is empty or
contains only whitespace, the function should return false.
Otherwise, the function should return the generated hash tag prefixed with # */


const generateHash =(str) =>{
    if(str.length > 280 || str.trim().length === 0){
        return false;
    };
    str = str.split(" ");
    // str = str.map((currentValue)=> currentValue.replace(currentValue[0],currentValue[0].toUpperCase()));
    str= str.map((currentValue)=> currentValue.charAt(0).toUpperCase()+currentValue.slice(1));
    str= `#${str.join("")}`;
    return str;

};

console.log(generateHash("this is my second day of learning javascript"));
