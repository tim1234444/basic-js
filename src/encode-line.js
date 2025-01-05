const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  split_str = str.split("");

  result = "";
  word_active = [];
  count = 1;
  for (const [index, word] of split_str.entries()) {
    if (word_active.length == 0) {
      word_active.push(word);
    } else {
      if (word == word_active[0]) {
        count += 1;

        if (index == split_str.length - 1) {
          result += `${count}${word_active[0]}`;
        }
      } else {
        result += `${count == 1 ? "" : count}${word_active[0]}`;

        word_active.pop();
        word_active.push(word);
        if (index == split_str.length - 1) {
          result += `${word_active[0]}`;
        }

        count = 1;
      }
    }
  }
  return result;
}
module.exports = {
  encodeLine
};
