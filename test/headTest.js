const head = require('../head');
const assert = require('chai').assert;

//TEST CASES

describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns '1' for ['1']", () => {
    assert.strictEqual(head(['1']), '1');
  });

  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns undefined for undefined", () => {
    assert.strictEqual(head(undefined), undefined);
  });
});