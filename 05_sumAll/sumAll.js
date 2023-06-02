const sumAll = function(num1, num2) {
    let result = 0;
    let top = 0;
    let bottom = 0;
    
    /* check inputs for errors */
    if (typeof num1 !== "number" || typeof num2 !=="number" || num1 < 0 || num2 < 0){
        return "ERROR" ;
    }
   
   /* decide wich input should be top and bottom */
    if (num1 > num2){
        top = num1
        bottom = num2
    } else {
        top = num2 ;
        bottom = num1 ;
    }
    
    /* sum all values from bottom - top inclusive */
    for (let i = bottom; i < top+1; i++){
        result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
