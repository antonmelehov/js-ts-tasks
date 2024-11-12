/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let num = Math.abs(arr[i]);
    let digitCount;

    if (num === 0) {
      digitCount = 1;
    } else {
      digitCount = Math.floor(Math.log10(num)) + 1;
    }

    if (digitCount === 1) {
      result.push(1);
    } else if (digitCount === 2) {
      result.push(2);
    } else if (digitCount === 3) {
      result.push(3);
    } else {
      result.push(4);
    }
  }

  return result;
};
