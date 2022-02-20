const assertEqual = require('./assertEqual'); //"Pull in" assertEqual function

const eqArrays = function (arr1, arr2) { //Takes in 2 arrays
  if (arr1.length !== arr2.length) return false; //Checks if both arrays are the same length
  for (let i = 0; i < arr1.length; i++) { //Checks that both arrays have identical items
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true; //If all conditions pass will return true
};

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = eqArrays;
