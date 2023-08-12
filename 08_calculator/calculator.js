const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
};

const multiply = function(array) {
  let product = 1; // why do you think this needs to be 1?
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
}

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(number) {
	return Math.factorial(number);
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
