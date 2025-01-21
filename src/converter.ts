/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  if (typeof value === 'string') {
    value = parseFloat(value);
  }

  if (isNaN(value)) {
    throw new Error('Invalid value');
  }

  let result: number | undefined;

  switch (from) {
    case 'm':
      if (to === 'mi') {
        result = value / 1609.34;
      } else if (to === 'm') {
        result = value;
      }
      break;
    case 'mi':
      if (to === 'm') {
        result = value * 1609.34;
      } else if (to === 'mi') {
        result = value;
      }
      break;
    case 'gr':
      if (to === 'pound') {
        result = value / 453.592;
      } else if (to === 'gr') {
        result = value;
      }
      break;
    case 'pound':
      if (to === 'gr') {
        result = value * 453.592;
      } else if (to === 'pound') {
        result = value;
      }
      break;
    case 'C':
      if (to === 'K') {
        result = value + 273.15;
      } else if (to === 'C') {
        result = value;
      }
      break;
    case 'K':
      if (to === 'C') {
        result = value - 273.15;
      } else if (to === 'K') {
        result = value;
      }
      break;
    default:
      throw new Error('Invalid unit');
  }

  if (result === undefined) {
    throw new Error('Invalid conversion');
  }

  return parseFloat(result.toFixed(2));
};
