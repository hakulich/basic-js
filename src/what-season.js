const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function isDateObject(date) {
  try {
    if (date instanceof Date && date.getTimezoneOffset()) {
      return true;
    }
  } catch {}

  return false;
}

function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
  if (date === null || !isDateObject(date)) throw Error("Invalid date!");

  let month = date.getMonth() + 1;

  let seasonId = Math.floor((month % 12) / 3);
  let seasons = ["winter", "spring", "summer", "autumn (fall)"];
  return seasons[seasonId];
}

module.exports = {
  getSeason,
};
