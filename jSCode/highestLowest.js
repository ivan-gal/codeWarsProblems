"use strict";

//Mine

function highAndLow(numbers) {
  let numbersOrdered = numbers.split(" ").sort((a, b) => a - b);
  return numbersOrdered[numbersOrdered.length - 1] + " " + numbersOrdered[0];
}

// Better

function highAndLowCodeWars(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
