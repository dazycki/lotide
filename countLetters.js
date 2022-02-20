// FUNCTION IMPLEMENTATION ASSERT EQUAL
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION COUNT LETTERS
const countLetters = function (sentance) {
  const myArray = sentance.split("");
  const results = {};

  for (const letter of myArray) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
}

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = countLetters;

//TEST CASES
const result1 = countLetters("test sentance");

assertEqual(result1["t"], 3);
assertEqual(result1["e"], 3);
assertEqual(result1["s"], 2);
assertEqual(result1["n"], 2);
assertEqual(result1["c"], 1);

const result2 = countLetters("lighthouse in the house");

assertEqual(result2["l"], 1);
assertEqual(result2["i"], 2);
assertEqual(result2["g"], 1);
assertEqual(result2["h"], 4);
assertEqual(result2["t"], 2);
assertEqual(result2["o"], 2);
assertEqual(result2["u"], 2);
assertEqual(result2["s"], 2);
assertEqual(result2["e"], 3);
assertEqual(result2["n"], 1);
