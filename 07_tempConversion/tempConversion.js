const convertToCelsius = function(tempF) {
  let result = "ERROR" ;
  result = Math.round(((tempF - 32) * (5/9)) * 10) /10 ;
  return result ;
};

const convertToFahrenheit = function(tempC) {
  let result = "ERROR" ;
  result = Math.round(((tempC * (9/5) ) + 32) * 10) /10 ;
  return result ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
