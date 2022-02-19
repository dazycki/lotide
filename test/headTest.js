const head = require('../head'); //"Pull in" head function
const assertEqual = require('../assertEqual'); //"Pull in" assertEqual function

//Test cases for head function
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);