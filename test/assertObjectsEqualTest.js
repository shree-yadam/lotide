const assertObjectsEqual = require("../assertObjectsEqual");

const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object2 = {
  b: 2,
  c: 3,
  a: 1
};

const object3 = {
  a: 1,
  b: 2
};

assertObjectsEqual(object1, object2); // => true
assertObjectsEqual(object1, object3); // => false
