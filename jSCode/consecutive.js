'use strict';

function Consecutive(arr) {
  // code goes here
  arr.sort((a, b) => a - b);
  const completeArray = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    completeArray.push(i);
  }
  return completeArray.length - arr.length;
}

console.log(Consecutive([5, 10, 15]));
