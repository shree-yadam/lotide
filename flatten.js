/*
Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
*/
const flatten = function(arr) {
  let result = [];
  for (let elem of arr) {
    if (Array.isArray(elem)) {
      result.push(...flatten(elem));
    } else {
      result.push(elem);
    }
  }
  return result;
};

module.exports = flatten;