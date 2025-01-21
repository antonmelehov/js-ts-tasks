/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */

interface User {
  type: 'EMPLOYEE' | 'CONTRACTOR';
}

module.exports.groupUsers = function (users: Array<User>): Record<'employees' | 'contractors', Array<User>> {
  return users.reduce(
    (groups: Record<'employees' | 'contractors', Array<User>>, user: User) => {
      if (user.type === 'EMPLOYEE') {
        groups.employees.push(user);
      } else if (user.type === 'CONTRACTOR') {
        groups.contractors.push(user);
      }
      return groups;
    },
    { employees: [], contractors: [] }
  );
};
