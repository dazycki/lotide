const middle = require('../middle'); //"Pull in" middle function
const assertArraysEqual = require('../assertArraysEqual'); //"Pull in" assertArraysEqual function

//Test cases for middle function
// middle([1]) // => []
assertArraysEqual(middle([1]), []);

// middle([1, 2]) // => []
assertArraysEqual(middle([1, 2]), []);

// middle([1, 2, 3]) // => [2]
assertArraysEqual(middle([1, 2, 3]), [2]);

// middle([1, 2, 3, 4, 5]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// middle([1, 2, 3, 4]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);