const map = function(arr, func) {
  const result = [];
  for (let item of arr) {
    result.push(func(item));
  }
  return result;
};

module.exports = map;