const assert = require('chai').assert;
const eqObjects = require('../eqObjects'); //"Pull in" eqObjects function

//Test cases for eqObjects function
describe("#tail", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  it("returns true when comparing ab and ba", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  const abc = { a: "1", b: "2", c: "3" };
  it("returns false when comparing ab and abc", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
});
