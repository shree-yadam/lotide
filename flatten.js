/*
Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
*/

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

const flatten = function(arr) {
  let result = [];
  for (let elem of arr) {
    if (Array.isArray(elem)) {
      result.push(...elem);
    } else {
      result.push(elem);
    }
  }
  return result;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5 ,6]);
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5 ,6]);