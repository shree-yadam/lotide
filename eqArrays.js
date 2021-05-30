/*
Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
*/

//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //get check mark emoji
  const emojiSuccess = "✅✅✅";
  //get stop emoji
  const emojiFail = "🛑🛑🛑";
  if (actual === expected) {
    console.log(`${emojiSuccess}Assertion Passed: [${actual}] === [${expected }]`);
  } else {
    console.log(`${emojiFail}Assertion Failed: [${actual}] !== [${expected }]`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        if (!Array.isArray(arr2[i])) {
          return false;
        }
        if (!eqArrays(arr1[i], arr2[i])) {
          return false;
        }
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

//TEST CASES:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [3, 2]), false);
assertEqual(eqArrays([1, 2], [3, 2, 3]), false);
assertEqual(eqArrays([], [3, 2, 3]), false);
assertEqual(eqArrays([], []), true);

//NESTED ARRAYS
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([[2, 3, [2, 4, 5, [2, 3, 4]]], [4]], [[2, 3, [2, 4, 5, [2, 3, 4]]], [4]]), true);
assertEqual(eqArrays([[2, 3, [2, 4, 5, [2, 3, 4]]], [4]], [[2, 3], [4, 5]]), false);