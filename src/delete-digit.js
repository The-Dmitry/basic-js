const { NotImplementedError } = require('../extensions/index.js');

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
  let temp = n.toString().split('')
    let result = []
    if(temp.length < 3) {temp.map(el => result.push(+el))
    } else {
        for(let i = 0; i < temp.length - 1; i++) {
            result.push(+temp.filter((el, index) => index != i).join(''))
        }
    }
    return Math.max(...result)
}

module.exports = {
  deleteDigit
};
