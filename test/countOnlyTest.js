const countOnly = require("../countOnly");
const assert = require("chai").assert;

describe("#countOnly", () => {
  it("should return {} if second argument is {}", () => {
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
    const result1 = countOnly(firstNames, {});
    assert.deepEqual(result1, {});
  });
  it('should return {Jason: 1, Karima: , Fang: 2} for inputs ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"] and { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }', () => {
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
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result1, {Jason: 1, Fang: 2});
  });
  it("should return {} if first argument is []", () => {
    const result1 = countOnly([], {Jason: 1, Fang: 2});
    assert.deepEqual(result1, {});
  });
});