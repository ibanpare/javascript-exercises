const add = function(a, b) {
	return(a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(array) {
	let result = array.reduce((sum, item) => sum + item , 0);
  return result;
};

const multiply = function(array) {
  let result = array.reduce((product, item) => product * item , 1);
  return result;
};

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(number) {
  let result = 1;
  if(number === 0 || number === 1) return result;
	while(number > 1) {
    result *= number;
    number--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
