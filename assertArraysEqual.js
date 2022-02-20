const eqArrays = require('./eqArrays'); //"Pull in" eqArrays function

// FUNCTION IMPLEMENTATION ASSERT ARRAYS EQUALS
const assertArraysEqual = function (arr1, arr2) { //Takes in 2 arrays
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`); //Return if arrays are equal
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`); //Return if arrays are NOT equal
  }
};

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = assertArraysEqual;