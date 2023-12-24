const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let resultArr = [...arr];
  let sortArr = arr.sort((a, b) => a - b).filter((elm) => elm != -1);

  let k = 0;

  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] !== -1) {
      resultArr[i] = sortArr[k];
      k++;
    }
  }

  return resultArr;
}

module.exports = {
  sortByHeight,
};
