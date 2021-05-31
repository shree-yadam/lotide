const flatten = require("../flatten");
const assert = require("chai").assert;

describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5 ,6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5 ,6]);
  });

  it("should return [1, 2, 3, 4, 5 ,6] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5 ,6]);
  });

  it("should return [1, 2, 3, 4, 7, 8, 5, 6] for [1, 2, [3, 4, [7, 8]], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4, [7, 8]], 5, [6]]), [1, 2, 3, 4, 7, 8, 5, 6]);
  });

  it("should return [] for []", () => {
    assert.deepEqual(flatten([]), []);
  });
});
