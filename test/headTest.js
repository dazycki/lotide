const head = require('../head'); //"Pull in" head function
const assertEqual = require('../assertEqual'); //"Pull in" assertEqual function

//Test cases for head function
assertEqual(head([5, 6, 7]), 5); //Should return true/ pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Should return true/ pass
assertEqual(head([1]), 1); //Should return true/ pass