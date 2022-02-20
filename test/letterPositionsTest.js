const assert = require('chai').assert;
const letterPositions = require('../letterPositions'); //"Pull in" letterPositions function

//Test cases for letterPositions function
describe("#letterPositions", () => {
  let sentance1 = "hello";
  it("returns [0] for h in hello", () => {
    assert.deepEqual(letterPositions(sentance1).h, [0]);
  });
  it("returns [2, 3] for l in hello", () => {
    assert.deepEqual(letterPositions(sentance1).l, [2, 3]);
  });
  let sentance2 = "lighthouse in the house";
  it("returns [3, 5, 15, 18] for h in lighthouse in the house", () => {
    assert.deepEqual(letterPositions(sentance2).h, [3, 5, 15, 18]);
  });
});