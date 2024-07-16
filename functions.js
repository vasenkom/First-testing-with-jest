// A function that takes a string and returns it with the first character capitalized
function myString(string1) {
  let firstLetterCapitalize = string1.charAt(0).toUpperCase();
  let newString = firstLetterCapitalize + string1.slice(1);
  return newString;
}

// A reversedString function that takes a string and returns it reversed
function reversedString(string2) {
  let reverseString = string2.split("").reverse().join("");
  return reverseString;
}

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply
// Each of these functions should take two numbers and return the correct calculation
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  substract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”
function caesarCipher() {}

// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length
function analyzeArray(array1) {
  let average = array1.reduce((a, b) => a + b, 0) / array1.length;
  let min = Math.min(...array1);
  let max = Math.max(...array1);
  let length = array1.length;
  return { average, min, max, length };
}

module.exports = {
  myString,
  reversedString,
  calculator,
  caesarCipher,
  analyzeArray,
};
