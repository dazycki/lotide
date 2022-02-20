const eqArrays = require('./eqArrays'); //"Pull in" eqArrays function

// FUNCTION IMPLEMENTATION EQUAL OBJECTS
const eqObjects = function(object1, object2) {//Takes in 2 objects
  let objKeys1 = Object.keys(object1); //Creates array of object1's keys
  objKeys1.sort(); //Sorts array in ascending order
  let objKeys2 = Object.keys(object2); //Creates array of object2's keys
  objKeys2.sort(); //Sorts array in ascending order
  if (objKeys1.length !== objKeys2.length) { //Checks if both objects have same number of keys
    return false;
  } else {
    for (const value of objKeys1) { //Loops through object1
      if (Array.isArray(objKeys1[value])) { //Checks if key is storing array
        if (!(eqArrays(object1[value], object2[value]))) {//Checks if object1 and object2's arrays are equal for a given key-value pair
          return false;
        }
      } else if (objKeys1[value] !== objKeys2[value]) { //Checks if object1 and object2's other key-value pairs are equal
        return false;
      }
    }
  }
  return true; //If no checks fail true will be returned
};

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = eqObjects;
