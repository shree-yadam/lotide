/*
Implement without which will return a subset of a given array, removing unwanted elements.
*/

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

const without = function(source, itemsToRemove) {
  let result = [];
  if (source.length === 0 || itemsToRemove.length === 0) {
    result = source.slice();
    return result;
  }
  for (let srcItem of source) {
    if (!itemsToRemove.includes(srcItem)) {
      result.push(srcItem);
    }
  }
  return result;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([], [1, 2, "3"]), []);
assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"]);