//FUNCTION IMPLEMENTATION

const countLetters = function(str) {
  const result = {};
  for (let elem of str) {
    if (elem !== " ") {
      if (result[elem.toLowerCase()]) {
        result[elem.toLowerCase()] += 1;
      } else {
        result[elem.toLowerCase()] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;