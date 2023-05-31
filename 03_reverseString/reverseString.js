const reverseString = function(string) {
    let result = "" ;
    let letters = string.split("") ;
    letters.reverse() ;
    result = letters.join("") ;
    return result ;
    
};

// Do not edit below this line
module.exports = reverseString;
