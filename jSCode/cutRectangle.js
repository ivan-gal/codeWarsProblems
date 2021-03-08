'use strict';

//Checks how many squares you can get in a rectangle.

const sqInRect = (lng, wdth, mesArray = []) => {
  //your code here
  if (lng === wdth && mesArray.length === 0) return null;

  let biggerMes = 0;
  let lesserMes = 0;

  if (lng > wdth) {
    biggerMes = lng;
    lesserMes = wdth;
  } else {
    biggerMes = wdth;
    lesserMes = lng;
  }
  if (biggerMes <= 1 || lesserMes <= 0) {
    if (biggerMes === 1 && lesserMes === 1) mesArray.push(1);
    return mesArray;
  }
  biggerMes = biggerMes - lesserMes;
  mesArray.push(lesserMes);
  return sqInRect(biggerMes, lesserMes, mesArray);
};

console.log(sqInRect(5, 3));
