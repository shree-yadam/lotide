const eqArrays = require('./eqArrays');
/*
Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
*/

const assertArraysEqual = function(actual, expected) {
  const emojiSuccess = "✅✅✅";
  const emojiFail = "🛑🛑🛑";
  if (eqArrays(actual, expected)) {
    console.log(`${emojiSuccess}Assertion Passed: [${actual}] === [${expected }]`);
  } else {
    console.log(`${emojiFail}Assertion Failed: [${actual}] !== [${expected }]`);
  }
};

module.exports = assertArraysEqual;