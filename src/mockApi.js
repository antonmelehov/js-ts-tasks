/**
 * Create the function mocker which will return defined data with 1 second delay.
 * It might be helpful in Front-end development when there is a need to make sure that your
 * interface works well with data that you get asynchronously. The use of the function is shown below:
 *
 *@response {object}
 */
module.exports.mockApi = function mockApi(response, delay) {
  return function (action) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (action === 'resolve') {
          resolve(response);
        } else if (action === 'reject') {
          reject(new Error('Mock API rejected'));
        } else {
          reject(new Error('Invalid action type'));
        }
      }, delay);
    });
  };
};
