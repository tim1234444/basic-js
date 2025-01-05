const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  use___file = [];

  for (const [index, file] of names.entries()) {
    word_return = use___file.find((element) => element.file == file);
    if (word_return == undefined) {
      use___file.push({
        file: file,
        count: 1,
      });
    } else {
      names[index] = names[index] + `(${word_return.count})`;
      word_return.count += 1;
      use___file.push({
        file: names[index],
        count: 1,
      });
    }
  }
  return names
 
}

module.exports = {
  renameFiles
};
