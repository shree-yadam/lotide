const tail = require('../tail');
const assertEqual = require('../assertEqual');

//TEST CASE 1 original array not modified
let testArr1 = [1, 2, 3];
tail(testArr1);
assertEqual(testArr1.length, 3);

//Test Cases 2
let testArr2 = ["Hello", "Lighthouse", "Labs"];
let result2 = tail(testArr2);
assertEqual(result2.length, 2);
for (let i = 0; i < result2.length; i++) {
  assertEqual(result2[i], testArr2[i + 1]);
}

//Test Case 3  single element array
let testArr3 = ["Hello"];
let result3 = tail(testArr3);
assertEqual(result3.length, 0);

//Test Case 3  empty array
let testArr4 = [];
let result4 = tail(testArr4);
assertEqual(result4.length, 0);