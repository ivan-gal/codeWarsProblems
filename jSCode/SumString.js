'use strict';

//Awful solution, don't use ever, brute forced.

function sumStrings(a, b) {
  let maxArray = [];
  let minArray = [];
  console.log(a.length);
  console.log(b.length);
  if (a.length > b.length) {
    for (let letter of a) {
      maxArray.push(letter);
    }
    for (let letter of b) {
      minArray.push(letter);
    }
  } else {
    for (let letter of b) {
      maxArray.push(letter);
    }
    for (let letter of a) {
      minArray.push(letter);
    }
  }

  const sumArray = [];
  const whereItStarts = maxArray.length - minArray.length;
  for (let i = 0; i < whereItStarts; i++) {
    minArray.unshift('0');
  }
  console.log(minArray);

  for (let i = 0; i < maxArray.length; i++) {
    sumArray[i] = +maxArray[i];
  }

  console.log(sumArray);

  for (let i = 0; i < minArray.length; i++) {
    sumArray[i] = +sumArray[i] + +minArray[i];
  }
  for (let index = 0; index < sumArray.length; index++) {
    for (let i = 0; i < sumArray.length; i++) {
      if (sumArray[i] >= 10 && i > 0) {
        sumArray[i] = +sumArray[i] - 10;
        sumArray[i - 1] = +sumArray[i - 1] + 1;
      }
    }
  }
  console.log(sumArray);
  if (sumArray[0] === 0) {
    sumArray.shift();
  }

  return sumArray.join('');
}

console.log(sumStrings('21893', '7'));
// console.log(sumStrings('324312312312312321', '2424323232321134314312412'));
// console.log(sumStrings('3243123123123123', '242432323232231'));
