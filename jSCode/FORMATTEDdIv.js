'use strict';

function FormattedDivision(num1, num2) {
  const amount = num1 / num2;

  const sol = new Intl.NumberFormat('en-IN', { minimumFractionDigits: 4 }).format(amount);

  return sol;
}

console.log(FormattedDivision(503394930, 43));
