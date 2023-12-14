const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members === null || !Array.isArray(members)) return false;

  let strArr = members.filter((elm) => typeof elm === "string");

  let letters = strArr.map((word) => word.trim().charAt(0).toUpperCase());

  return letters.sort((a, b) => (a !== b ? (a < b ? -1 : 1) : 0)).join("");
}

module.exports = {
  createDreamTeam,
};
