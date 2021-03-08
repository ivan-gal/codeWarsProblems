'use strict';

function mix(s1, s2) {
  const arrayS1 = s1.replace(/ /g, '').split('');
  const arrayS2 = s2.replace(/ /g, '').split('');

  let counts1 = {};
  let counts2 = {};

  arrayS1.sort();
  arrayS2.sort();
  for (let i = 0; i < arrayS1.length; i++) {
    if (counts1[arrayS1[i]]) {
      counts1[arrayS1[i]] += 1;
    } else {
      counts1[arrayS1[i]] = 1;
    }
  }
  for (let i = 0; i < arrayS2.length; i++) {
    if (counts2[arrayS2[i]]) {
      counts2[arrayS2[i]] += 1;
    } else {
      counts2[arrayS2[i]] = 1;
    }
  }

  console.log(counts2);
  return counts1;
}

console.log(mix('hola que tal como estas', 'hola que tal como estas papafrita'0'));
