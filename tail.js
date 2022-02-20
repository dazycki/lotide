const assertEqual = require('./assertEqual'); //"Pull in" assertEqual function

// FUNCTION IMPLEMENTATION FOR TAIL 
const tail = function (array) { //Function takes in an array
  let modArray = []; //Results will be pushed to empty array
  for (let i = 1; i < array.length; i++) {
    modArray.push(array[i]); //Push items to new array starting at the second element
  }
  return modArray; //Returns new array
};

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = tail;