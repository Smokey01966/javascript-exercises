const repeatString = function(string, numberOfTimes) {
    let result="" ;
    if(numberOfTimes < 0){
        result="ERROR" ;
        return result ;
    }
    for(let i = 0; i < numberOfTimes; i++){
        result += string ;
    }
    return result ;
};

// Do not edit below this line
module.exports = repeatString;
