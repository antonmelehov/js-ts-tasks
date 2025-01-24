/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let date: Date;

  if (typeof targetDate === 'string') {
    const parts = targetDate.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid date format');
    }

    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const year = Number(parts[2]);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      throw new Error('Invalid date component');
    }

    date = new Date(year, month - 1, day);
  } else {
    date = targetDate;
  }

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const nextNewYear = new Date(date.getFullYear() + 1, 0, 1);

  const diff = nextNewYear.getTime() - date.getTime();

  const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));

  return daysLeft;
};
