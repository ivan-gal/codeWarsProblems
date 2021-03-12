'use strict';
function nextBigger(n) {
  //Primero convertimos el numero a array para poder manejarlo mejor.
  const numberToArray = n.toString().split('');
  let lowestNumber = 100;
  let lowestPosition = 0;

  //Recorremos el array de derecha a izquierda
  for (let i = numberToArray.length - 1; i >= 0; i--) {
    //para encontrar el primer número que sea mayor al siguiente.
    if (numberToArray[i] > numberToArray[i - 1]) {
      //Despues recorremos el array de izquierda a derecha para intercambiar el numero i - 1, con el menor numero de la izquierda
      for (let indexI = i; indexI < numberToArray.length; indexI++) {
        if (numberToArray[indexI] > numberToArray[i - 1]) {
          lowestNumber = numberToArray[indexI];
          lowestPosition = indexI;
        }
      }
      //Despues de esto, intercambiamos los numéros.
      const tmp = numberToArray[lowestPosition];
      numberToArray[lowestPosition] = numberToArray[i - 1];
      numberToArray[i - 1] = tmp;

      //Y ordenamos la par
      let RightPart = numberToArray.splice(i).sort();
      for (let value of RightPart) {
        numberToArray.push(value);
      }

      break;
    }
  }
  const finalNumber = +numberToArray.join('');
  if (finalNumber === n) return -1;
  return finalNumber;
}
console.log(nextBigger(629286));
