//require nod-emoji package for emojis
const emoji = require('node-emoji');

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertArraysEqual = function(actual, expected) {
  //get check mark emoji
  const emojiSuccess = emoji.get('white_check_mark');
  //get stop emoji
  const emojiFail = emoji.get('octagonal_sign');
  if (eqArrays(actual, expected)) {
    console.log(`${emojiSuccess + emojiSuccess + emojiSuccess}Assertion Passed: [${actual}] === [${expected }]`);
  } else {
    console.log(`${emojiFail + emojiFail + emojiFail}Assertion Failed: [${actual}] !== [${expected }]`);
  }
};

const letterPositions = function(str) {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() !== " ") {
      if (result[str[i].toLowerCase()]) {
        result[str[i].toLowerCase()].push(i);
      } else {
        result[str[i].toLowerCase()] = [i];
      }
    }
  }
  return result;
};

const result = letterPositions("hello");
assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);
