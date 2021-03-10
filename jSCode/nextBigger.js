'use strict';
function nextBigger(n) {
  const numberToArray = n.toString().split('');
  let lowestNumber = 100;
  let lowestPosition = 0;
  for (let i = numberToArray.length - 1; i >= 0; i--) {
    if (numberToArray[i] > numberToArray[i - 1]) {
      for (let indexI = i - 1; indexI < numberToArray.length; indexI++) {
        console.log(indexI);
        if (numberToArray[indexI] < lowestNumber) {
          console.log(lowestNumber);
          lowestNumber = numberToArray[indexI];
          lowestPosition = indexI;
        }
      }
      const tmp = numberToArray[i];
      numberToArray[i] = numberToArray[lowestPosition];
      numberToArray[lowestPosition] = tmp;
      break;
    }
  }
  const finalNumber = +numberToArray.join('');
  if (finalNumber === n) return -1;
  return finalNumber;
}
console.log(nextBigger(42321));
