const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("should return true for both arguments being equal arrays", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("should return false for both arguments being not equal arrays but with same length", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 3]));
  });

  it("should return false if second argument array is shorter than first", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2]));
  });

  it("should return false if second argument array is longer than first", () => {
    assert.isFalse(eqArrays([1, 2], [3, 2, 3]));
  });

  it("should return false if one of the arguments is an empty array and another is not", () => {
    assert.isFalse(eqArrays([], [3, 2, 3]));
  });

  it("should return true if both arrays are empty", () => {
    assert.isTrue(eqArrays([], []));
  });

  it("should return true for the 2 arguments with nested arrays [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it("should return false for the 2 arguments having different ensted elements eg: [[2, 3], [4]], [[2, 3], [4, 5]]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });

  it("should return false for the teo arguments [[2, 3], [4]], [[2, 3], 4]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });

  it("should return true for the two arguments [[2, 3, [2, 4, 5, [2, 3, 4]]], [4]], [[2, 3, [2, 4, 5, [2, 3, 4]]], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3, [2, 4, 5, [2, 3, 4]]], [4]], [[2, 3, [2, 4, 5, [2, 3, 4]]], [4]]));
  });

  it("should return false for the 2 arguments [[2, 3, [2, 4, 5, [2, 3, 4]]], [4]], [[2, 3], [4, 5]]", () => {
    assert.isFalse(eqArrays([[2, 3, [2, 4, 5, [2, 3, 4]]], [4]], [[2, 3], [4, 5]]));
  });
});