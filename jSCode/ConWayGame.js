'use strict';

const gliders = [
  [
    [1, 0, 0],
    [0, 1, 1],
    [1, 1, 0],
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
  if (gen === 0) return cells;
  //We have to get each cell to compare cases.

  cells.unshift(new Array(cells[1].length).fill(0, 0));
  cells.push(new Array(cells[1].length).fill(0, 0));
  cells.unshift(new Array(cells[0].length + 2).fill(0, 0));
  cells.push(new Array(cells[0].length).fill(0, 0));

  //Fix liveArray to generate a pattern.
  const liveArray = new Array(cells.length);
  for (let iLive = 0; iLive < liveArray.length; iLive++) {
    liveArray[iLive] = new Array(cells[0].length).fill(0, 0);
  }
  for (let rowsAdded = 1; rowsAdded < cells.length - 1; rowsAdded++) {
    cells[rowsAdded].unshift(0);
    cells[rowsAdded].push(0);
  }

  for (let keyCellRow = 1; keyCellRow < cells.length - 1; keyCellRow++) {
    //We don't need to check the new emptpy arrays;

    for (let cell = 1; cell < cells[keyCellRow].length - 1; cell++) {
      let survivalPoints = -1;

      //After getting to each cell, we need to check columns, rows and diagonals
      for (let iRows = -1; iRows < 2; iRows++) {
        for (let iCell = -1; iCell < 2; iCell++) {
          if (cells[keyCellRow + iRows][cell + iCell] === 1) survivalPoints++;
        }
      }

      //Checking conditions of survival.

      if (cells[keyCellRow][cell] === 0 && survivalPoints === 2) {
        liveArray[keyCellRow][cell] = 1;
      } else if (cells[keyCellRow][cell] === 1) {
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

console.log(getGeneration(gliders[1], 2));
