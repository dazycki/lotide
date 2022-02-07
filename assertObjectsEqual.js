// FUNCTION IMPLEMENTATION EQUAL OBJECTS
const eqObjects = function (object1, object2) {
  let objKeys1 = Object.keys(object1);
  objKeys1.sort();
  let objKeys2 = Object.keys(object2);
  objKeys2.sort();
  if (objKeys1.length !== objKeys2.length) {
    return false;
  } else {
    for (const value of objKeys1) {
      if (Array.isArray(objKeys1[value])) {
        if (!(eqArrays(object1[value], object2[value]))) {
          return false;
        }
      } else if (objKeys1[value] !== objKeys2[value]) {
        return false;
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION ASSERT EQUAL OBJECTS
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
