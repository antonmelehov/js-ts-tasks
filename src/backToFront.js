/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (symbolsCount <= 0) {
    return str;
  }

  if (symbolsCount === str.length) {
    return str + str + str;
  }

  if (symbolsCount > str.length) {
    return str;
  }

  const suffix = str.slice(-symbolsCount);
  return `${suffix}${str}${suffix}`;
};
