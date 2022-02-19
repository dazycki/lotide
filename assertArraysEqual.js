// FUNCTION IMPLEMENTATION ASSERT ARRAYS EQUALS
const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
