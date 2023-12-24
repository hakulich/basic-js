const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let finalStr = "";

  let letters = str.split("");

  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    let count = 0;
    while (letter === letters[i]) {
      i++;
      count++;
    }

    if (count === 1) {
      finalStr += `${letter}`;
    } else {
      finalStr += `${count}${letter}`;
    }
    i -= 1;
  }

  return finalStr;
}

module.exports = {
  encodeLine,
};
