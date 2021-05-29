//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //get check mark emoji
  const emojiSuccess = "✅✅✅";
  //get stop emoji
  const emojiFail = "🛑🛑🛑";
  if (actual === expected) {
    console.log(`${emojiSuccess}Assertion Passed: [${actual}] === [${expected }]`);
  } else {
    console.log(`${emojiFail}Assertion Failed: [${actual}] !== [${expected }]`);
  }
};

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

const result = countLetters("lighthouse in the house");
assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
assertEqual(result['g'], 1);
assertEqual(result['h'], 4);
assertEqual(result['t'], 2);
assertEqual(result['o'], 2);
assertEqual(result['u'], 2);
assertEqual(result['s'], 2);
assertEqual(result['e'], 3);
assertEqual(result['n'], 1);