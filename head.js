/* Create a function head which returns first item in the array */
const assertEqual = require('./assertEqual');

const head = function(arr) {
  if (arr === undefined || arr.length === 0) {
    return undefined;
  }
  return arr[0];
};

module.exports = head;