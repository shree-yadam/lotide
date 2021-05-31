const findKey = require("../findKey");
const assert = require("chai").assert;

describe("#findKey", () => {
  it('should return "noma" when looking for value of starts = 2 in {"Blue Hill": {stars: 1}, "Akaleri": { stars: 3 }, "noma": {stars: 2 }, "elBulli": {stars: 3}, "Ora": {stars: 2},"Akelarre": {stars: 3}}', () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2),"noma");
  });
  it('returns "Akaleri" when looking for stars > 2 in {"Blue Hill": {stars: 1}, "Akaleri": { stars: 3 }, "noma": {stars: 2 }, "elBulli": {stars: 3}, "Ora": {stars: 2},"Akelarre": {stars: 3}}', () => {
    const testObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.strictEqual(findKey(testObj, x  => x.stars > 2), "Akaleri");
  });
  it("returns undefined when looking for key in empty object", () => {
    assert.strictEqual(findKey({}, x => x.name === "rain"), undefined);
  });
  it("returns first key if the callback always returns truthy value ", () => {
    const testObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.strictEqual(findKey(testObj, ()  => 3), "Blue Hill");
  });
  it("returns undefined if none of the keys have the required value", () => {
    const testObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.strictEqual(findKey(testObj, x  => x.stars === 4), undefined);
  });
});