const eqArrays = require("./eqArrays");

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
    } else if (typeof obj1[k] === 'object') {
      if (typeof obj2[k] !== 'object') {
        return false;
      }
      if (!eqObjects(obj1[k], obj2[k])) {
        return false;
      }
    } else if (obj1[k] !== obj2[k]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;