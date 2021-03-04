'use strict';

function list(names) {
  //your code here
  let nameString = '';
  if (names.length === 2) {
    return `${names[0].name} & ${names[1].name}`;
  } else if (names.length === 1) {
    return `${names[0].name}`;
  } else {
    for (const nam of names) {
      if (names.indexOf(nam) === names.length - 1) {
        nameString = nameString + ' & ' + nam.name;
      } else if (names.indexOf(nam) === 0) {
        nameString = nameString + nam.name;
      } else {
        nameString = nameString + ', ' + nam.name;
      }
    }
  }
  return nameString;
}
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
// returns 'Bart, Lisa & Maggie'

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
// returns 'Bart & Lisa'

console.log(list([{ name: 'Bart' }]));
// returns 'Bart'
