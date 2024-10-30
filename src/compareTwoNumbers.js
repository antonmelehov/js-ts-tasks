/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  switch (true) {
    case firstNumber > secondNumber:
      return '>';
    case firstNumber < secondNumber:
      return '<';
    case firstNumber === secondNumber:
      return '=';
  }
};
