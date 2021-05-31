const without = require("../without");
const assert = require("chai").assert;

describe("#without", () => {
  it("returns [2, 3] for input arguments [1, 2, 3] and [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it('returns ["1", "2"] for input arguments ["1", "2", "3"] and [1, 2, "3"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("check that inpiut array is unchanged ", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]); // no need to capture return value for this test case
    // Make sure the original array was not altered by the without function
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

  it("returns empty array if first argument is an empty array", () => {
    assert.deepEqual(without([], [1, 2, "3"]), []);
  });

  it("returns the same array if second argument is empty", () => {
    assert.deepEqual(without(["1", "2", "3"], []), ["1", "2", "3"]);
  });
});