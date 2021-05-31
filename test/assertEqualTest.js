const assertEqual = require('../assertEqual');

//TEST CODE
//Identical strings
assertEqual("Lighthouse Labs", "Lighthouse Labs");
//Non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp");
//Identical numbers
assertEqual(1,1);
//Non-dentical numbers
assertEqual(3,1);