/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  if (!Array.isArray(promisesArray)) {
    return Promise.reject(new TypeError('Input must be an array of promises'));
  }

  return new Promise((resolve, reject) => {
    let resolvedCount = 0;
    const results = new Array(promisesArray.length);

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          resolvedCount++;

          if (resolvedCount === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });

    if (promisesArray.length === 0) {
      resolve(results);
    }
  });
};
