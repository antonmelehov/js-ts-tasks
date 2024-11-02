/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const uniqueElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueElements.includes(arr[i])) {
      uniqueElements.push(arr[i]);
    }
  }

  return uniqueElements.length;
};
