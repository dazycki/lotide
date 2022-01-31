// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //Comparing non-identical strings
assertEqual(1, 1); //Comparing identical numbers
assertEqual("test", "test"); //Comparing identical strings
assertEqual(4, 1); // Comparing non-identical numbers