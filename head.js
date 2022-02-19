const assertEqual = require('./assertEqual'); //Define assertEqual

// FUNCTION IMPLEMENTATION FOR HEAD 
const head = function (array) { //Function takes in an array
  return array[0]; //Fuction will return first item from array
};

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = head;