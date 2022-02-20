const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue'); //"Pull in" findKeyByValue function

//Test cases for findKeyByValue function
describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };
  it("returns 'drama' for 'The Wire'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  const spicyLevel = {
    chili: "mild",
    habenero: "medium",
    reaper: "hot"
  };
  it("returns 'chili' for 'mild'", () => {
    assert.deepEqual(findKeyByValue(spicyLevel, "mild"), "chili");
  });
});