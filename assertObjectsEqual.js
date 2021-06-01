const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  //get check mark emoji
  const emojiSuccess = "✅✅✅";
  //get stop emoji
  const emojiFail = "🛑🛑🛑";
  if (eqObjects(actual, expected)) {
    console.log(`${emojiSuccess}Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${emojiFail}Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

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

module.exports = assertObjectsEqual;