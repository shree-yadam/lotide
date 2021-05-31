const takeUntil = function(array, callback) {
  const result = [];
  for (let elem of array) {
    if (callback(elem)) {
      break;
    } else {
      result.push(elem);
    }
  }
  return result;
};

module.exports = takeUntil;