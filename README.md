# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sdyadam/lotide`

**Require it:**

`const _ = require('@sdyadam/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
 
  tail,
  middle,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
* `head(array)`: Function which takes an array as argument and returns the first element of the array
* `tail(array)`: Takes an array as an argument and returns an array with everything except the head(first element)
* `middle(array)`: takes in an array and returns an array with the middle-most element(s) of the given array.
* `countLetters(sentence)`: The function takes in a sentence (as a string) and then return a count of each of the letters in that sentence as an object with the letters as keys.
* `countOnly(items, itemsToCount)`: takes in aan array of items and an array of itemsToCount from items and returns counts for the items given in itemsToCount that are also present in items as an object with the items as keys.
* `eqArrays(array1, array2)`: takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(obj1, obj2)`: takes in two objects and returns true or false, based on a perfect match.
* `findKey(obj, callback)`:  takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `findKeyByValue(obj, value)`: takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `flatten(array)`: takes in an array containing elements including nested arrays of elements, and returns a "flattened" version of the array.
* `letterPositions(str)`: takes in a string str and returns an object with the keys as the characters in the string and the values as an array of all the indices (zero-based positions) in the string where each character is found.
* `map(arr, callback)`: takes in two arguments: an array to map and a callback function. The map function will return a new array based on the results of the callback function performed on each element of the input array.
* `takeUntil(arr, callback)`: takes in two arguments: an array to map and a callback function. It returns a slice of the array with elements taken from the beginning until the callback returns a truthy value.
* `without(array1, array2)`: takes in two arrays and returns a subset of array1, removing unwanted elements given in array2.
* `assertEqual(actual, expected)`: compares two values it takes in and prints out a message telling if they match or not. Values cannot be arrays or objects
* `assertArraysEqual(actualArr, expectedArr)`: takes in two arrays and prints out a message telling if they match or not.
* `assertObjectsEqual(actualArr, expectedArr)`:takes in two objects and prints out a message telling if they match or not.