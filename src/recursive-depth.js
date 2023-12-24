const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr, depth) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let thisLevel = depth == undefined ? 1 : depth;
    let maxLevel = thisLevel;
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (Array.isArray(item)) {
        let newLevel = this.calculateDepth(item, thisLevel + 1);
        maxLevel = Math.max(maxLevel, newLevel);
      }
    }
    return maxLevel;
  }
}

module.exports = {
  DepthCalculator,
};
