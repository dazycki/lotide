const eqArrays = require('../eqArrays'); //"Pull in" head function
const assertEqual = require('../assertEqual'); //"Pull in" assertEqual function

//Test cases for eqArrays function
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["Dave", 1, "Bob"], ["Dave", 1, "Bob"]), true); // => should PASS
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([1, 2, "3"], ["3", 2, 1]), true); // => should FAIL