'use strict';

function SimpleMode(arr) {
  let high = 1;
  let value = -1;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }

    if (count > high) {
      high = count;
      value = arr[i];
    }
  }

  return value;
}

let b = [2, 8, 9, 4, 5, 1];

console.log(SimpleMode(b));
