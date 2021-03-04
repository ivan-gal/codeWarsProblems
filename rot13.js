'use strict';

function rot13(message) {
  //your code here
  const messageArray = message.split('');
  let finalCryp = '';
  for (const char of messageArray) {
    const charCode = char.codePointAt(0);
    if (charCode <= 78 && charCode >= 65) {
      const cryptedChar = String.fromCodePoint(charCode + 13);
      finalCryp = finalCryp + cryptedChar;
    } else if (charCode >= 78 && charCode <= 90) {
      const cryptedChar = String.fromCodePoint(charCode - 13);
      finalCryp = finalCryp + cryptedChar;
    } else if (charCode >= 110 && charCode >= 90) {
      const cryptedChar = String.fromCodePoint(charCode - 13);
      finalCryp = finalCryp + cryptedChar;
    } else if (charCode < 110 && charCode >= 90) {
      const cryptedChar = String.fromCodePoint(charCode + 13);
      finalCryp = finalCryp + cryptedChar;
    } else {
      finalCryp = finalCryp + char;
    }
  }
  return finalCryp;
}
console.log(rot13('ruby is cool'));
