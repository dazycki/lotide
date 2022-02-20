const assert = require('chai').assert;
const eqArrays = require('../eqArrays'); //"Pull in" eqArrays function

//Test cases for eqArrays function
describe("#eqArrays", () => {
  it("returns true when comparing [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false when comparing [1, 2, 3] and [1, 2, 2]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 2]), false);
  });
  it("returns false when comparing ['Dave', 1, 'Bob'] and ['Dave', 1, 'Bob']", () => {
    assert.deepEqual(eqArrays(['Dave', 1, 'Bob'], ['Dave', 1, 'Bob']), true);
  });
});