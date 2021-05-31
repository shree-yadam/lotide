const assertEqual = require('./assertEqual');

/* Create a function tail which returns tail of an  array : everything except for the first item (head) of the provided array */

const tail = function(arr) {
  if (arr === undefined) {
    return undefined;
  }
  if (arr.length < 2) {
    return [];
  }
  return arr.slice(1);
};

module.exports = tail;