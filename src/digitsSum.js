/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let sum = 0;
  n = Math.abs(n);
  while (n !== 0) {
    sum = sum + (n % 10);
    n = parseInt(n / 10);
  }
  return sum;
};
