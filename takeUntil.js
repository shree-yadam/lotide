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
  const emojiSuccess = "✅✅✅";
  const emojiFail = "🛑🛑🛑";
  if (eqArrays(actual, expected)) {
    console.log(`${emojiSuccess}Assertion Passed: [${actual}] === [${expected }]`);
  } else {
    console.log(`${emojiFail}Assertion Failed: [${actual}] !== [${expected }]`);
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
assertArraysEqual(takeUntil(data1, x => x === 1), []);
// callback never evaluates to true
assertArraysEqual(takeUntil(data1, x => x > 8), data1);
