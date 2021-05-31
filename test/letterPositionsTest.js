const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it("should return {h: [0], e: [1], l: [2, 3], o: [4]} for letter positions in 'hello'", () => {
    assert.deepEqual(letterPositions("hello"), {h: [0], e: [1], l: [2, 3], o: [4]});
  });
  it("should return {} for letter positions in ''", () => {
    assert.deepEqual(letterPositions(""), {});
  });
});