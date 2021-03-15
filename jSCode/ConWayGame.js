'use strict';

const gliders = [
  [
    [1, 0, 0, 0, 0, 1, 1, 1],
    [0, 1, 1, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0, 1, 0, 1],
  ],
  [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
  ],
];

//RULES:
//The rules of the game are:

//Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
//Any live cell with more than three live neighbours dies, as if by overcrowding.
//Any live cell with two or three live neighbours lives on to the next generation.
//Any dead cell with exactly three live neighbours becomes a live cell.

//TODO - Remove Zeros to see progress .

function getGeneration(cells, gen) {
  //Copy the array and the inner arrays.
  let cellsTWO = cells.map((inner) => inner.slice());
  //Check if the gen is 0, to stop the recursive function.
  if (gen === 0) {
    //If 0, proceed to eliminate de rows and columns full with 0s.
    while (cellsTWO[0].every((cell) => cell === 0)) {
      cellsTWO.shift();
    }
    while (cellsTWO[cellsTWO.length - 1].every((cel) => cel === 0)) {
      cellsTWO.pop();
    }
    for (let indexTest = 0; indexTest < cellsTWO[0].length; indexTest++) {
      let totColumnSum = 0;
      for (let rowTest = 0; rowTest < cellsTWO.length; rowTest++) {
        totColumnSum += cellsTWO[rowTest][indexTest];
      }
      if (totColumnSum === 0) {
        for (const k in cellsTWO) {
          cellsTWO[k].splice(indexTest, 1);
        }
        indexTest--;
      } else if (totColumnSum > 1) {
        break;
      }
    }
    for (let indexTest = cellsTWO[0].length - 1; indexTest > 0; indexTest--) {
      let totColumnSum = 0;
      for (let rowTest = 0; rowTest < cellsTWO.length; rowTest++) {
        totColumnSum += cellsTWO[rowTest][indexTest];
      }
      if (totColumnSum === 0) {
        for (const k in cellsTWO) {
          cellsTWO[k].splice(indexTest, 1);
        }
        indexTest++;
      } else if (totColumnSum > 1) {
        break;
      }
    }
    return cellsTWO;
  }
  //We have to get each cell to compare cases.

  cellsTWO.unshift(new Array(cellsTWO[1].length).fill(0, 0));
  cellsTWO.push(new Array(cellsTWO[1].length).fill(0, 0));
  cellsTWO.unshift(new Array(cellsTWO[0].length + 2).fill(0, 0));
  cellsTWO.push(new Array(cellsTWO[0].length).fill(0, 0));

  //Fix liveArray to generate a pattern.
  const liveArray = new Array(cellsTWO.length);
  for (let iLive = 0; iLive < liveArray.length; iLive++) {
    liveArray[iLive] = new Array(cellsTWO[0].length).fill(0, 0);
  }
  for (let rowsAdded = 1; rowsAdded < cellsTWO.length - 1; rowsAdded++) {
    cellsTWO[rowsAdded].unshift(0);
    cellsTWO[rowsAdded].push(0);
  }

  for (let keyCellRow = 1; keyCellRow < cellsTWO.length - 1; keyCellRow++) {
    //We don't need to check the new emptpy arrays;

    for (let cell = 1; cell < cellsTWO[keyCellRow].length - 1; cell++) {
      let survivalPoints = -1;

      //After getting to each cell, we need to check columns, rows and diagonals
      for (let iRows = -1; iRows < 2; iRows++) {
        for (let iCell = -1; iCell < 2; iCell++) {
          if (cellsTWO[keyCellRow + iRows][cell + iCell] === 1) survivalPoints++;
        }
      }

      //Checking conditions of survival.

      if (cellsTWO[keyCellRow][cell] === 0 && survivalPoints === 2) {
        liveArray[keyCellRow][cell] = 1;
      } else if (cellsTWO[keyCellRow][cell] === 1) {
        if (survivalPoints === 2 || survivalPoints === 3) {
          liveArray[keyCellRow][cell] = 1;
        } else {
          liveArray[keyCellRow][cell] = 0;
        }
      }
    }
  }
  return getGeneration(liveArray, gen - 1);
}

console.log(getGeneration(gliders[0], 40));
