'use strict';

function factorial(n) {
  // Add some code
  if (n < 0) {
    return null;
  }

  const factArray = [1];
  const factSize = 1;
  let carry;
  let prod;
  let digit;
  for (let x = 2; x <= n; x++) {
    // multiply each digit
    carry = 0;
    for (let i = 0; i < factArray.length; i++) {
      prod = factArray[i] * x + carry;
      digit = prod % 10;
      carry = Math.floor(prod / 10);
      factArray[i] = digit;
      if (i === factArray.length - 1) {
        while (carry > 0) {
          digit = carry % 10;
          carry = Math.floor(carry / 10);
          factArray.push(digit);
        }
        break;
      }
    }
  }
  let strFactorial = '';
  for (let i = factArray.length - 1; i >= 0; i--) {
    strFactorial += '' + factArray[i];
  }
  return strFactorial;
}

console.log(factorial(80));
