const assert = require('chai').assert;
const countOnly = require('../countOnly'); //"Pull in" countOnly function

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  it("returns 1 for Jason", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result["Jason"], 1);
  });
  it("returns undefined for Agouhanna", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result["Agouhanna"], undefined);
  });
  it("returns 2 for Fang", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result["Fang"], 2);
  });
});