/*
Implement without which will return a subset of a given array, removing unwanted elements.
*/

const without = function(source, itemsToRemove) {
  let result = [];
  if (source.length === 0 || itemsToRemove.length === 0) {
    result = source.slice();
    return result;
  }
  for (let srcItem of source) {
    if (!itemsToRemove.includes(srcItem)) {
      result.push(srcItem);
    }
  }
  return result;
};

module.exports = without;