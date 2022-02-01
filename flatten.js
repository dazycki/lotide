const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function (arg) {
  let merged = [];
  if (Array.isArray(arg)) {
    merged = [].concat.apply([], arg);
  }
  return merged;
};

//Test Cases
assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]); //PASS
assertArraysEqual((flatten(["abc", ["efg", "hij"], "bob"])), ['abc', 'efg', 'hij', 'bob']); //PASS
