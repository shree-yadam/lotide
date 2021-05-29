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

const map = function(arr, func) {
  const result = [];
  for (let item of arr) {
    result.push(func(item));
  }
  return result;
};

const words = ["ground", "control", "to", "major", "tom"];

//TEST CASES
//pass in an array of strings and callback func
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

//empty array in place of words
assertArraysEqual(map([], word => word[0]), []);

//pass array of objects
const testObj = [{a:1, b:2, c:3}, {d:4, e:5}, {f: 6, g:7, h:8, i: 9}];
assertArraysEqual(map(testObj, x => Object.keys(x).length), [3, 2, 4]);

//array of int ...math op
assertArraysEqual(map([1, 2, 3, 4, 5], x => x * x), [1, 4, 9, 16, 25]);