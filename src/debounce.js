/**
 * Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds)
 * and returns another function which will pass invocation of {fn} only once during the delay period
 * @fn {function}
 * @delay {number}
 * @return {function}
 */
module.exports.debounce = function debounce(fn, delay) {
  let timeoutId = null;
  let lastArgs = null;

  return function (...args) {
    lastArgs = args;

    if (!timeoutId) {
      fn.apply(this, lastArgs);
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (lastArgs) {
        fn.apply(this, lastArgs);
      }
    }, delay);
  };
};
