/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const n = 9;
  const boxSize = 3;

  for (let i = 0; i < n; i++) {
    //check row
    if (hasDuplicates(board[i])) {
      return false;
    }
  }
  for (let i = 0; i < n; i++) {
    const col = [];
    for (let j = 0; j < n; j++) {
      col.push(board[i][j]);
    }
    //check column
    if (hasDuplicates(col)) {
      return false;
    }
  }
  //check 3x3 box
  for (let i = 0; i < boxSize; i++) {
    for (let j = 0; j < boxSize; j++) {
      const box = [];
      for (let row = i * 3; row < i * boxSize + boxSize; row++) {
        for (let col = j * 3; col < j * boxSize + boxSize; col++) {
          box.push(board[row][col]);
        }
      }
      if (hasDuplicates(box)) return false;
    }
  }
  return true;
};

/**
 * checks an array for duplicates
 * @param {number[]} arr
 */
const hasDuplicates = (arr) => {
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "." && seen.has(arr[i])) return true;
    seen.add(arr[i]);
  }
  return false;
};

const board1 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const board2 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board1));
console.log(isValidSudoku(board2));
