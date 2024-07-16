const {
  myString,
  reversedString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./functions");

// A test for a function that takes a string and returns it with the first character capitalized
test("the first character is capitalized", () => {
  expect(myString("hello")).toBe("Hello");
});

// A test for a reversedString function that takes a string and returns it reversed
test("the string is reversed", () => {
  expect(reversedString("Abcd")).toBe("dcbA");
});

// A test for a calculator object that contains functions for the basic operations: add, subtract, divide, and multiply
test("test the calculation of calculator obj", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.substract(2, 1)).toBe(1);
  expect(calculator.multiply(2, 1)).toBe(2);
  expect(calculator.divide(2, 1)).toBe(2);
});

// A test for a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length
test("test average, min, max, and length", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.average).toBe(4);
  expect(result.min).toBe(1);
  expect(result.max).toBe(8);
  expect(result.length).toBe(6);
});
