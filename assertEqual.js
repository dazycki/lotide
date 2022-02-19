// FUNCTION IMPLEMENTATION FOR ASSERT EQUAL
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); //Will be returned if actual is the same as expected
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`); //Will be returned if actual is NOT the same as expected
  }
};

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = assertEqual;