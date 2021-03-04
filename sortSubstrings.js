'use strict';

function inArray(array1, array2) {
  //...
  const subArray = [];
  for (const subStr of array1) {
    console.log(subStr);
    for (const strings2 of array2) {
      if (strings2.indexOf(subStr) >= 0) {
        subArray.push(subStr);
      }
    }
  }
  let sub2Array = [...new Set(subArray)];
  return sub2Array.sort();
}

const a1 = ['arp', 'live', 'strong'];

const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

console.log(inArray(a1, a2));
