const tail = require('../tail');
const assert = require("chai").assert;

//TEST CASE 1 original array not modified
describe("#tail", () => {
  it("Should not change length of original array", () => {
    let testArr1 = [1, 2, 3];
    tail(testArr1);
    assert.strictEqual(testArr1.length, 3);
  });

  it("Length of array returned should be 1 less than length of original array", () => {
    let testArr2 = ["Hello", "Lighthouse", "Labs"];
    let result2 = tail(testArr2);
    assert.strictEqual(result2.length, 2);
  });

  it('Should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('Should return empty array if inlout is empty array', () => {
    assert.deepEqual(tail([]),[]);
  });

  it('Should return array of length 0 if empty array i passed', () => {
    assert.equal(tail([]).length,0);
  });
});