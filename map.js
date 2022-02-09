// FUNCTION IMPLEMENTATION ASSERT ARRAYS EQUALS
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

// FUNCTION IMPLEMENTATION MAPS
const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["cherry", "ruby", "pink", "rose", "sunset"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//TEST CASES
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map(words, word => word + "s"), ['grounds', 'controls', 'tos', 'majors', 'toms']);
assertArraysEqual(map(words, word => word[1]), ['r', 'o', 'o', 'a', 'o']);
