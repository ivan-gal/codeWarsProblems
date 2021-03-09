'use strict';

function multiply(a, b) {
  const firstNumber = a.split('');
  console.log(firstNumber);
  const multiplyArray = [];

  for (let i = 0; i <= a.length - 1; i++) {
    const numberS = +firstNumber[i] * +b;
    const numberExp = +numberS * Math.pow(10, a.length - i - 1);
    multiplyArray[i] = numberExp;
    console.log(multiplyArray);
  }
  let finalSum = 0;
  for (let value of multiplyArray) {
    finalSum += +value;
  }
  return finalSum.toString();
}

console.log(multiply('11', '85'));
