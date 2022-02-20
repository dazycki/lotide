const tail = require('../tail'); //"Pull in" head function
const assertEqual = require('../assertEqual'); //"Pull in" assertEqual function

//Test cases for tails function
// Test Case 1: Check the returned array elements
const result1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result1.length, 2); // ensure we get back two elements
assertEqual(result1[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result1[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
const result2 = tail([1, 2, 3, 4, 5]);
assertEqual(result2.length, 4); // ensure we get back four elements
assertEqual(result2[0], 2); // ensure first element is "2"
assertEqual(result2[1], 3); // ensure second element is "3"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: An array with only one element should yield an empty array for its tail
const result3 = tail([1]);
assertEqual(result3.length, 0); // ensure it returns an empty array

// Test Case: An empty array should yield an empty array for its tail
const result4 = tail([]);
assertEqual(result3.length, 0); // ensure it returns an empty array