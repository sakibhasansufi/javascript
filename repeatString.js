function repeatString (str,num){
	 let res = str;
    for(let i = 1; i < num; i++){
        res = res + str;   
    }
    return res;
};

console.log(repeatString("abc",5)); //abcabcabcabcabc
