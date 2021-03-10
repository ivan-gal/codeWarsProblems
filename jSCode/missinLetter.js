'use strict';

function findMissingLetter(ar) {
  for (let i = 1; i < ar.length; i++) {
    const prevLetter = ar[i - 1].codePointAt(0);
    const currentLetter = ar[i].codePointAt(0);
    if (currentLetter - prevLetter !== 1) {
      return String.fromCodePoint(currentLetter - 1);
    }
  }
  return null;
}

var a = ['a', 'b', 'c', 'd', 'f'];
var b = ['O', 'Q', 'R', 'S'];

console.log(findMissingLetter(a));
