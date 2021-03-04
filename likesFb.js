'use strict';

function likes(names) {
  const templateString = 'like this';
  switch (names.length) {
    case 0:
      return `no one likes this`;

    case 1:
      return `${names[0]} likes this`;

    case 2:
      return `${names[0]} and ${names[1]} ${templateString}`;

    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} ${templateString}`;

    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others ${templateString}`;
  }
}

const names = [];
const names1 = ['Alex'];
const names2 = ['Max', 'John', 'Mark'];
const names3 = ['Jacob', 'Alex'];
const names4 = ['Alex', 'Jacob', 'Mark', 'Max'];

console.log(likes(names));
console.log(likes(names1));
console.log(likes(names2));
console.log(likes(names3));
console.log(likes(names4));
