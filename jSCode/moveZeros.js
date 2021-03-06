'use strict';

const moveZeros = function (arr) {
  // TODO: Program
  //Loop thru the numbers.

  for (const numbers of arr) {
    //check if there are zeros in it.

    if (numbers === 0) {
      const returnedZero = +arr.splice(arr.indexOf(numbers), 1).toString();
      arr.splice(arr.length, 0, returnedZero);
    }
  }
  return arr;
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
