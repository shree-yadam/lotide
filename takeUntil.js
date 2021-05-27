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

const takeUntil = function(array, callback) {
  const result = [];
  for (let elem of array) {
    if (callback(elem)) {
      break;
    } else {
      result.push(elem);
    }
  }
  return result;
};

//Expected output
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//TEST CASES
assertArraysEqual(takeUntil(data1, x => x % 2 === 0), [1]);
assertArraysEqual(takeUntil([], x => x % 2 === 0), []);