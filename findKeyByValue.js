/*
Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
*/

//require nod-emoji package for emojis
const emoji = require('node-emoji');

//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //get check mark emoji
  const emojiSuccess = emoji.get('white_check_mark');
  //get stop emoji
  const emojiFail = emoji.get('octagonal_sign');
  if (actual === expected) {
    console.log(`${emojiSuccess + emojiSuccess + emojiSuccess}Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`${emojiFail + emojiFail + emojiFail}Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKeyByValue = function(obj, val) {
  console.log(obj);
  console.log("input val: " + val);
  for (const k in obj) {
    console.log("Key: " + k);
    console.log("Value: " + obj[k]);
    if (obj[k] === val) {
      console.log("found");
      return k;
    }
  }
  console.log("not found");
  return undefined;
};

//TEST CASES
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);