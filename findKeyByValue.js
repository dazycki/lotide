// FUNCTION IMPLEMENTATION FIND KEY BY VALUE
const findKeyByValue = function (object, value) {
  let objKeys = Object.keys(object); //Creates an array based off objects keys
  for (const key of objKeys) { //Loops through created array
    if (object[key] === value) { //Checks if the property is equal to inputted value
      return key; //Returns key that matches
    }
  }
}

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = findKeyByValue;

