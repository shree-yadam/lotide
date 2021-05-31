const assertEqual = require('../assertEqual');

//TEST CODE
//Identical strings
assertEqual("Lighthouse Labs", "Lighthouse Labs"); // => Pass
//Non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp"); //=> Fail
//Identical numbers
assertEqual(1,1); // => Pass
//Non-dentical numbers
assertEqual(3,1); //=> Fail