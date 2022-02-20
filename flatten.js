// FLATTEN FUNCTION
const flatten = function(arg) { //Takes in an array
  let merged = []; //Initializes where new array result will be stored
  if (Array.isArray(arg)) { //Checks if argument is an array
    merged = [].concat.apply([], arg); //Add all elements from arg to new array
  }
  return merged; //Returns new arr
};

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = flatten;

