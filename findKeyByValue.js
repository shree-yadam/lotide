/*
Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
*/

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

module.exports = findKeyByValue;