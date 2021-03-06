'use strict';

function pigIt(str) {
  const arrayStrings = str.split(' ');
  const arrayE = [];
  for (const str of arrayStrings) {
    if (str.charCodeAt(0) >= 65) {
      const strLatin = str.slice(1) + str[0] + 'ay';
      arrayE.push(strLatin);
    } else {
      arrayE.push(str);
    }
  }
  return arrayE.join(' ');
}

console.log(pigIt('Hola que tal'));
