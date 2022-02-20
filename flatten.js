// FUNCTION IMPLEMENTATION ASSERT EQUAL
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION ASSERT ARRAYS EQUALS
const assertArraysEqual = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
      return false;
    } else {
      console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
      return true;
    }
  }
};

// FLATTEN FUNCTION
const flatten = function (arg) {
  let merged = [];
  if (Array.isArray(arg)) {
    merged = [].concat.apply([], arg);
  }
  return merged;
};

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = flatten;

//Test Cases
assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]); //PASS
assertArraysEqual((flatten(["abc", ["efg", "hij"], "bob"])), ['abc', 'efg', 'hij', 'bob']); //PASS
