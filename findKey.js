// FUNCTION IMPLEMENTATION ASSERT EQUAL
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION FIND KEY
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) return key;
  }
};

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = findKey;

//TEST CASES
const testFunc1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(testFunc1, "noma");

const testFunc2 = findKey({
  "Horror": { movie: "Scream" },
  "Action": { movie: "Batman" },
  "Comedy": { movie: "Step Brothers" },
}, x => x.movie === "Batman"); // => "Action"

assertEqual(testFunc2, "Action");
