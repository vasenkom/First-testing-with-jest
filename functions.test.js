const myStringF = require("./functions");

// A test for a capitalize function that takes a string and returns it with the first character capitalized
test("the first character is capitalized", () => {
  let myString = myStringF();
  let firstLetter = myString.charAt(0);
  expect(firstLetter).toBe(firstLetter.toUpperCase());
});
