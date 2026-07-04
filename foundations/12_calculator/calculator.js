const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
  //return arr.reduce((total, current) => total + current, 0); // another way using reduce()
};

const multiply = function(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
  //return arr.reduce((product, current) => product * current); // another way using reduce()
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(a) {
  let result = 1;
	for (let i = a; i > 0; i--) {
    result *= i;
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
