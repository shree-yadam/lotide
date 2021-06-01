/*
Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
*/

const findKeyByValue = function(obj, val) {
  for (const k in obj) {
    if (obj[k] === val) {
      return k;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;