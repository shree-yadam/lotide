const letterPositions = function(str) {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() !== " ") {
      if (result[str[i].toLowerCase()]) {
        result[str[i].toLowerCase()].push(i);
      } else {
        result[str[i].toLowerCase()] = [i];
      }
    }
  }
  return result;
};

module.exports = letterPositions;