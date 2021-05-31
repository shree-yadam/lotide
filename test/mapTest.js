const map = require("../map");
const assert = require("chai").assert;

describe("#map", () => {
  it('should return ["g", "c", "t", "m", "t"] for array ["ground", "control", "to", "major", "tom"] with callback to return 0th element', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it("should return empty array for [] with any callback", () => {
    assert.deepEqual(map([], word => word[0]), []);
  });

  it("should return [3, 2, 4] for [{a:1, b:2, c:3}, {d:4, e:5}, {f: 6, g:7, h:8, i: 9}] with callback that finds number of keys", () => {
    const testObj = [{a:1, b:2, c:3}, {d:4, e:5}, {f: 6, g:7, h:8, i: 9}];
    assert.deepEqual(map(testObj, x => Object.keys(x).length), [3, 2, 4]);
  });

  it("should return [1, 4, 9, 16, 25] for [1, 2, 3, 4, 5] with callback that finds square of elements", () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], x => x * x), [1, 4, 9, 16, 25]);
  });
});