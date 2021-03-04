'use strict';

const numberArray = [3, 4, 13, 5, 6, 8];

for (const num of numberArray) {
  if (num % 2 === 0) {
    console.log('numero par');
  } else {
    console.log('numero impar;');
  }
}

for (const num of numberArray) {
  let noPrimo;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      noPrimo = 1;
      console.log('No es primo');
      break;
    }
  }
  if (num > 2 && noPrimo !== 1) console.log('Es primo');
}

const newArray = [];

for (const num of numberArray) {
  newArray.push(num * 2);
}
console.log(newArray);
