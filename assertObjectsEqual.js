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

module.exports = assertObjectsEqual;