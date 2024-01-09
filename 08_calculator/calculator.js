const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  };
  return sum;

};

const multiply = function(array) {
  let total = [array[0]];
  for (let i = 1; i < array.length; i++) {
    total = array[i] * total;
  };
  return total;

};

const power = function(num1, num2) {
  return num1 ** num2;

};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;


  for (let i = num - 1; i >= 1; i--) {
    num = num*i;
  };

  return num;
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
