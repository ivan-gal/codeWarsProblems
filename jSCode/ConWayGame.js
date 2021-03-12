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
  const liveArray = [];
  for (let keyCellRow in cells) {
    for (let cell in cells[keyCellRow]) {
      let survivalPoints = -1;

      //After getting to each cell, we need to check columns, rows and diagonals
      for (let iRows = -1; iRows < 2; iRows++) {
        for (let iCell = -1; iCell < 2; iCell++) {
          if (cells[keyCellRow + iRows][cell + iCell] === 1) survivalPoints++;
        }
      }

      if (cells[keyCellRow][cell] === 0 && survivalPoints === 2) {
        cells[keyCellRow][cell] = 1;
      } else if (cells[keyCellRow][cell] === 1) {
        if (survivalPoints < 2 || survivalPoints > 3) {
          cells[keyCellRow][cell] = 1;
        }
      }
    }
  }
  return survivalPoints;
}
