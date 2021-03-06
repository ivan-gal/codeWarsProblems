// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

'use strict';

function incrementString(strng) {
  let letterString = '';
  let numberString = '';

  for (const char in strng) {
    if (strng[char].charCodeAt(0) < 65) {
      letterString = strng.slice(0, char);
      numberString = strng.slice(char);
      break;
    } else {
      letterString = strng;
      numberString = 0;
    }
  }

  let numberInt = +numberString + 1;
  while (numberInt.toString().length < numberString.length) {
    numberInt = `0${numberInt}`;
  }

  const mixString = letterString + numberInt;

  return mixString;
}

console.log(incrementString('foo002'));
console.log(incrementString('foo052'));
console.log(incrementString('foo212'));
console.log(incrementString('foo'));
console.log(incrementString('foo2'));
