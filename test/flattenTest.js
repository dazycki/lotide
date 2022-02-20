const assert = require('chai').assert;
const flatten = require('../flatten'); //"Pull in" flatten function

//Test cases for flatten function
describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns ['abc', 'efg', 'hij', 'bob', 'james'] for ['abc', ['efg', 'hij'], ['bob', 'james']", () => {
    assert.deepEqual(flatten(['abc', ['efg', 'hij'], 'bob']), ['abc', 'efg', 'hij', 'bob']);
  });
});