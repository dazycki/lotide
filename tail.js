const assertEqual = require('./assertEqual'); //"Pull in" assertEqual function

// FUNCTION IMPLEMENTATION FOR TAIL 
const tail = function (array) { //Function takes in an array
  let modArray = [];
  for (let i = 1; i < array.length; i++) {
    modArray.push(array[i]);
  }
  return modArray;
};

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = tail;