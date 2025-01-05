const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = n.toString().split("");
  max = -100000;
  arr = [];
  for (let i = 0; i < num.length; i++) {
    let ret_n = +num.toSpliced(i, 1).join("");
    arr.push(ret_n);
  }
  return(Math.max(...arr));
}

module.exports = {
  deleteDigit,
};
