const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};


const sum = function(numbers) {
	let total = 0;
	for (let number of numbers) {
		total += number;
	}
	return total;
};
//the "proper way": 
//return numbers.reduce((total, current) => total + current, 0);


const multiply = function(numbers) {
	let product = 1;
	for (let number of numbers) {
		product *= number;
	}
	return product;
};
//the "proper way":
//return numbers.reduce((product, current) => product * current, 1);

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};
//the "proper way":
//if (n === 0 || n === 1) return 1;
//return n * factorial(n - 1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
