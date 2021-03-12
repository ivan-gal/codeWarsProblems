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

//TODO - For each cell, you need to check the rules. For each cell, check 3x3 block.
//TODO - First we start with the base case for the living cells.
//TODO - Then we do the same for the dead cells.
//TODO - After that we add the generations loop.

function getGeneration(cells) {
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

  //TODO - Fix this so the input goes to liveArray and not to cell again.

  for (let keyCellRow = 1; keyCellRow < cells.length - 1; keyCellRow++) {
    //We don't need to check the new emptpy arrays;
    cells[keyCellRow].unshift(0);
    cells[keyCellRow].push(0);

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
        if (survivalPoints < 2 || survivalPoints > 3) {
          liveArray[keyCellRow][cell] = 0;
        } else {
          liveArray[keyCellRow][cell] = 1;
        }
      }
    }
  }
  return liveArray;
}

console.log(getGeneration(gliders[0]));
