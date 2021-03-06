"use strict";

// console.log(digital_root(456));

//My solution

const digital_root = (n) => {
  if (n < 10) return n;
  const numberArray = n.toString().split("").map(Number);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const numberSum = numberArray.reduce(reducer);
  return digital_root(numberSum);
};

//Clever solution via Math.CodeWars.

// function digital_root(n) {
//   return ((n - 1) % 9) + 1;
// }

console.log(digital_root(456));
