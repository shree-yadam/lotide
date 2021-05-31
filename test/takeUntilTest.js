const takeUntil = require("../takeUntil");
const assert = require("chai").assert;

describe("#takeUntil", () => {
  it("returns [1] for input [1, 2, 5, 7, 2, -1, 2, 4, 5] with callback that returns true for even numbers", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x % 2 === 0), [1]);
  });

  it("returns [] for input [] with any callback", () => {
    assert.deepEqual(takeUntil([], x => x % 2 === 0), []);
  });

  it("returns [] for input [1, 2, 5, 7, 2, -1, 2, 4, 5] with callback that always return truthy value", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x === 1), []);
  });

  it("returns [1, 2, 5, 7, 2, -1, 2, 4, 5] for input [1, 2, 5, 7, 2, -1, 2, 4, 5] with callback that never evaluates to true", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x > 8), data1);
  });
});