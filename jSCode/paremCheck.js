'use strict';

//Checks if a code with parentheses is valid.

function validParentheses(parens) {
  //TODO(

  const paremTemplate = '()';
  let parensArray;
  parensArray = parens.split('()').join('');
  while (parensArray.indexOf(paremTemplate) > -1) {
    parensArray = parensArray.split('()').join('');
    console.log(parensArray);
  }
  if (parensArray.length === 0) {
    return true;
  } else {
    return false;
  }
}

const a = '()()((()(';
const b = '(()()()())';

console.log(validParentheses(a));
console.log(validParentheses(b));
