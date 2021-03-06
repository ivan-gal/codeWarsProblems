"use strict";

// const orderNum = (n) => {
//   for (let i = 9; i >= 0; i--) {
//     const regEx = /i/;
//     if (regEx.test(n)) return n;
//     return 2;
//   }
// };

const descendingOrder = (n) => {
  const nArray = n.toString().split("");
  const newNumber = nArray.sort().reverse().join("");
  return +newNumber;
};

console.log(orderNum("23249"));
