/* Implement middle which will take in an array and return the middle-most element(s) of the given array. */

const middle = function(arr) {
  if (arr.length <= 2 || arr === undefined) {
    return [];
  }
  const result = [];
  if (arr.length % 2 !== 0) {
    result.push(arr[(arr.length - 1) / 2]);
  } else {
    result.push(arr[arr.length / 2 - 1]);
    result.push(arr[arr.length / 2]);
  }
  return result;
};

module.exports = middle;
