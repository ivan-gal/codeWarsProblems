/* Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid
 with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids 
 (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing 
a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board 
may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be 
invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.*/

'use strict';

function validSolution(board) {
  let isRowTrue = 0;
  let isColumnTrue = 0;
  let isGridTrue = 0;
  for (const array of board) {
    const setArray = Array.from(new Set(array));
    if (setArray.length === array.length) isRowTrue = isRowTrue + 1;
  }
  for (let i = 0; i < board.length; i++) {
    const arrayColumn = [];

    for (const array of board) {
      arrayColumn.push(array[i]);
    }
    const setColumn = Array.from(new Set(arrayColumn));
    if (setColumn.length === arrayColumn.length) isColumnTrue = isColumnTrue + 1;
  }

  for (let gridI = 0; gridI < board.length; gridI = gridI + 3) {
    const gridArrayMaster1 = [];
    const gridArrayMaster2 = [];
    const gridArrayMaster3 = [];
    for (let rowI = 0; rowI < 3; rowI++) {
      const rowArray = board[gridI + rowI];
      for (let columI = 0; columI < 9; columI = columI + 3) {
        for (let singleColumn = 0; singleColumn < 3; singleColumn++) {
          if (columI < 3) {
            gridArrayMaster1.push(rowArray[columI + singleColumn]);
          } else if (columI >= 3 && columI < 6) {
            gridArrayMaster2.push(rowArray[columI + singleColumn]);
          } else {
            gridArrayMaster3.push(rowArray[columI + singleColumn]);
          }
        }
      }
    }
    const gridSet1 = Array.from(new Set(gridArrayMaster1));

    const gridSet2 = Array.from(new Set(gridArrayMaster2));
    const gridSet3 = Array.from(new Set(gridArrayMaster3));
    if (gridSet1.length === gridArrayMaster1.length) isGridTrue = isGridTrue + 1;
    if (gridSet2.length === gridArrayMaster1.length) isGridTrue = isGridTrue + 1;
    if (gridSet3.length === gridArrayMaster1.length) isGridTrue = isGridTrue + 1;
  }
  if (isGridTrue === isRowTrue && isGridTrue === isColumnTrue) return true;
  else return false;
}

const ouijaSoduko = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

console.log(validSolution(ouijaSoduko));

console.log(
  validSolution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5],
  ])
);
