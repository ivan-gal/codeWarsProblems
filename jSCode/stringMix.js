'use strict';

function mix(s1, s2) {
  const arrayS1 = s1.replace(/ /g, '').split('').sort();
  const arrayS2 = s2.replace(/ /g, '').split('').sort();
  const reducedS1 = arrayS1.reduce((acc, a) => {
    if (a in acc) {
      acc[a]++;
    } else {
      acc[a] = 1;
    }
    return acc;
  }, {});

  const reducedS2 = arrayS2.reduce((acc, a) => {
    if (a in acc) {
      acc[a]++;
    } else {
      acc[a] = 1;
    }
    return acc;
  }, {});
  for (const key in reducedS2) {
    if (reducedS2[key] < 2) delete reducedS2[key];
    else if (key.charCodeAt(0) < 97) delete reducedS2[key];
  }
  for (const key in reducedS1) {
    if (reducedS1[key] < 2) delete reducedS1[key];
    else if (key.charCodeAt(0) < 97) delete reducedS1[key];
  }
  const finalObject = {};

  for (const key in reducedS1) {
    if (reducedS1[key] > reducedS2[key]) {
      finalObject[key.repeat(reducedS1[key])] = 1;
    } else if (reducedS2[key] > reducedS1[key]) {
      finalObject[key.repeat(reducedS2[key])] = 2;
    } else if (reducedS1[key] === reducedS2[key]) {
      finalObject[key.repeat(reducedS1[key])] = '=';
    } else {
      finalObject[key.repeat(reducedS1[key])] = 1;
    }
  }

  for (const key in reducedS2) {
    if (!(key in reducedS1)) {
      finalObject[key.repeat(reducedS2[key])] = 2;
    }
  }

  const sortedArray = [];
  for (let key in finalObject) {
    sortedArray.push(`${finalObject[key]}:${key}`);
  }
  sortedArray.sort((a, b) => (a > b ? 1 : -1));
  let thisIsIt = '';
  for (let i = 10; i > 0; i--) {
    for (const value of sortedArray) {
      if (value.length === i) {
        thisIsIt = thisIsIt + '/' + value;
      }
    }
  }

  return thisIsIt.slice(1);
}

console.log(mix('looping is fun but dangerous', 'less dangerous than coding'));
