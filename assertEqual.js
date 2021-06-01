/* Create assertEqual function which compares two values it takes in and prints out a message telling us if they match or not. */

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

//TEST CODE
//Identical strings
assertEqual("Lighthouse Labs", "Lighthouse Labs"); // => Pass
//Non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp"); //=> Fail
//Identical numbers
assertEqual(1,1); // => Pass
//Non-dentical numbers
assertEqual(3,1); //=> Fail

module.exports = assertEqual;