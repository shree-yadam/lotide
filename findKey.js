/*
Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*/

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

function findKey(obj, callback) {
  for (let elem in obj) {
    if (callback(obj[elem])) {
      return elem;
    }
  }
  return undefined;
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));  // => "noma"

//TEST CASES with assertEqual
const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

//General
assertEqual(findKey(testObj, x  => x.stars > 2), "Akaleri");

//Empty object
assertEqual(findKey({}, x => x.name === "rain"), undefined);

//Truthy value
assertEqual(findKey(testObj, ()  => 3), "Blue Hill");

//  valaid property with value that doesn't exist
assertEqual(findKey(testObj, x  => x.stars === 4), undefined);