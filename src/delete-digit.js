const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n)
    .split("")
    .map((elm) => Number(elm));

  let arrAllDigits = [
    ...arr.map((elm, i) => {
      var r = [...arr];
      r.splice(i, 1);
      return Number(r.join(""));
    }),
  ];

  return Math.max(...arrAllDigits);
}

module.exports = {
  deleteDigit,
};
