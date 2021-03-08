'use strict';

//Solutions to convert romanNumbers to DecimalNumbers

function romanConverter(number) {
  // convert the number to a roman numeral
  let numberToRoman = number;
  let romanNumber = '';
  while (numberToRoman >= 1000) {
    numberToRoman = numberToRoman - 1000;
    romanNumber = romanNumber + 'M';
  }
  while (numberToRoman >= 500) {
    if (numberToRoman >= 900) {
      numberToRoman = numberToRoman - 900;
      romanNumber = romanNumber + 'CM';
    } else {
      numberToRoman = numberToRoman - 500;
      romanNumber = romanNumber + 'D';
    }
  }
  while (numberToRoman >= 100) {
    if (numberToRoman >= 400) {
      numberToRoman = numberToRoman - 400;
      romanNumber = romanNumber + 'CD';
    } else {
      numberToRoman = numberToRoman - 100;
      romanNumber = romanNumber + 'C';
    }
  }
  while (numberToRoman >= 50) {
    if (numberToRoman >= 90) {
      numberToRoman = numberToRoman - 90;
      romanNumber = romanNumber + 'XC';
    } else {
      numberToRoman = numberToRoman - 50;
      romanNumber = romanNumber + 'L';
    }
  }
  while (numberToRoman >= 10) {
    if (numberToRoman >= 40) {
      numberToRoman = numberToRoman - 40;
      romanNumber = romanNumber + 'XL';
    } else {
      numberToRoman = numberToRoman - 10;
      romanNumber = romanNumber + 'X';
    }
  }
  while (numberToRoman >= 5) {
    if (numberToRoman >= 9) {
      numberToRoman = numberToRoman - 9;
      romanNumber = romanNumber + 'IX';
    } else {
      numberToRoman = numberToRoman - 5;
      romanNumber = romanNumber + 'V';
    }
  }
  while (numberToRoman >= 1) {
    if (numberToRoman >= 4) {
      numberToRoman = numberToRoman - 4;
      romanNumber = romanNumber + 'IV';
    } else {
      numberToRoman = numberToRoman - 1;
      romanNumber = romanNumber + 'I';
    }
  }

  return romanNumber;
}

console.log(romanConverter(1000));
console.log(romanConverter(4));
console.log(romanConverter(1));
console.log(romanConverter(1291));
console.log(romanConverter(2301));
console.log(romanConverter(132));
console.log(romanConverter(432));
console.log(romanConverter(543));
console.log(romanConverter(1932));
