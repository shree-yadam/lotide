const assertArraysEqual = require("../assertArraysEqual");
//TEST CASES
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => Pass
assertArraysEqual([1, 2, 3], [1, 2]); // => Fail
assertArraysEqual([], [1, 2, 3]); // => Fail
assertArraysEqual([1, 2, 3], []); // => Fail