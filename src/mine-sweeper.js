const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mines = [...matrix];

  // Add mines
  for (let i = 0; i < mines.length; i++) {
    for (let j = 0; j < mines[i].length; j++) {
      if (mines[i][j] === true) {
        mines[i][j] = "X";
      } else {
        mines[i][j] = 0;
      }
    }
  }

  // calculate around mine

  for (let i = 0; i < mines.length; i++) {
    for (let j = 0; j < mines[i].length; j++) {
      if (mines[i][j] === "X") {
        if (j + 1 < mines[i].length && mines[i][j + 1] != "X") {
          mines[i][j + 1] += 1;
        }
        if (i + 1 < mines.length && mines[i + 1][j] != "X") {
          mines[i + 1][j] += 1;
        }
        if (i + 1 < mines.length && j + 1 < mines[i].length && mines[i + 1][j + 1] != "X") {
          mines[i + 1][j + 1] += 1;
        }

        if (j - 1 >= 0 && mines[i][j - 1] != "X") {
          mines[i][j - 1] += 1;
        }
        if (i - 1 >= 0 && mines[i - 1][j] != "X") {
          mines[i - 1][j] += 1;
        }
        if (i - 1 >= 0 && j - 1 >= 0 && mines[i - 1][j - 1] != "X") {
          mines[i - 1][j - 1] += 1;
        }

        if (i - 1 >= 0 && j + 1 < mines[i].length && mines[i - 1][j + 1] != "X") {
          mines[i - 1][j + 1] += 1;
        }

        if (i + 1 < mines.length && j - 1 >= 0 && mines[i + 1][j - 1] != "X") {
          mines[i + 1][j - 1] += 1;
        }
      }
    }
  }

  // change mines
  for (let i = 0; i < mines.length; i++) {
    for (let j = 0; j < mines[i].length; j++) {
      if (mines[i][j] === "X") {
        mines[i][j] = 1;
      }
    }
  }

  return mines;
}

module.exports = {
  minesweeper,
};
