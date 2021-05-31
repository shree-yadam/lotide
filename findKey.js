/*
Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*/

const findKey = function(obj, callback) {
  for (let elem in obj) {
    if (callback(obj[elem])) {
      return elem;
    }
  }
  return undefined;
};

module.exports = findKey;