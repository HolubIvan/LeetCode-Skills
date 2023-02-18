/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return Number(`${x}`.split("").reverse().join("")) === x;
};
