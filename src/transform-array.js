const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr) || arr === undefined) throw Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return arr;

  let result = [];
  let arrToProcess = [...arr];
  let command = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];

  for (let i = 0; i < arrToProcess.length; i++) {
    if (!command.includes(arrToProcess[i])) {
      result.push(arrToProcess[i]);
    } else {
      switch (arrToProcess[i]) {
        case command[0]:
          if (i + 1 < arrToProcess.length) {
            i += 1;
          }
          break;
        case command[1]:
          if (i - 1 >= 0 && arrToProcess[i - 2] !== command[0]) {
            result.pop(arrToProcess[i]);
          }
          break;
        case command[2]:
          if (i + 1 < arrToProcess.length) {
            result.push(arrToProcess[i + 1]);
          }
          break;
        case command[3]:
          if (i - 1 >= 0 && arrToProcess[i - 2] !== command[0]) {
            result.push(arrToProcess[i - 1]);
          }
          break;
      }
    }
    console.log(result);
  }

  return result;
}

module.exports = {
  transform,
};
