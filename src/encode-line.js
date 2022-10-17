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
  if(str === '') {return ''}
    let temp = str.split('')
    let arr = []
    for(let i = 0; i < temp.length; i++) {
        if(temp[i] !== temp[i+1] || temp.length === 1) {
            arr.push(temp.splice(0, i+1))
            i = -1
        }
    }
    return arr.map(el => el.length === 1 ? `${el}` : `${el.length}${el[0]}`).join('')
}

module.exports = {
  encodeLine
};
