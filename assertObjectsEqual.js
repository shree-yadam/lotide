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

const eqObjects = function(obj1, obj2) {
  //check number of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const k in obj1) {
    if (Array.isArray(obj1[k])) {
      if (!eqArrays(obj1[k], obj2[k])) {
        return false;
      }
    } else if (obj1[k] !== obj2[k]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  //get check mark emoji
  const emojiSuccess = emoji.get('white_check_mark');
  //get stop emoji
  const emojiFail = emoji.get('octagonal_sign');
  if (eqObjects(actual, expected)) {
    console.log(`${emojiSuccess + emojiSuccess + emojiSuccess}Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${emojiFail + emojiFail + emojiFail}Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object2 = {
  b: 2,
  c: 3,
  a: 1
};

const object3 = {
  a: 1,
  b: 2
};

assertObjectsEqual(object1, object2); // => true
assertObjectsEqual(object1, object3); // => false