const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function valueToString(value) {
  if (typeof value === "object") return value + "";
  if (value === null) {
    return String(value);
  } else {
    return value.toString();
  }
}

function buildString(str, repeatTime, separator, defaultSeparator) {
  let separatorFinal = separator ?? defaultSeparator;
  if (repeatTime !== undefined && repeatTime > 0) {
    return Array(repeatTime).fill(valueToString(str)).join(separatorFinal);
  } else {
    if (str !== undefined) {
      return valueToString(str);
    } else {
      return "";
    }
  }
}

function repeater(str, options) {
  let modStr = valueToString(str);
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;

  //build additional string
  let additionalStr = buildString(addition, additionRepeatTimes, additionSeparator, "|");
  //.log("66", additionalStr);

  //build result string
  let resultStr = modStr.concat(additionalStr);
  resultStr = buildString(resultStr, repeatTimes, separator, "+");

  return resultStr;
}

module.exports = {
  repeater,
};
