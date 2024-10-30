/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  firstNumber = String(firstNumber).trim();
  secondNumber = String(secondNumber).trim();

  // Преобразуем в числа
  const num1 = Number(firstNumber.split(' ').join(''));
  const num2 = Number(secondNumber.split(' ').join(''));

  return num1 + num2;
};
