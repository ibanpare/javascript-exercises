const convertToCelsius = function(temperature) {
  let celsiusTemperature = (temperature - 32) * 5 / 9;
  return roundedCelsiusTemperature = Math.round(celsiusTemperature * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  let fahreneitTemperature = temperature * 9 / 5 + 32;
  return roundedFahreneitTemperature = Math.round(fahreneitTemperature * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
