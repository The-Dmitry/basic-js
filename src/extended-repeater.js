const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let subStr = new Array(options.additionRepeatTimes || 1)
  .fill(options.addition ? options.addition : typeof options.addition === 'boolean' || typeof options.addition === 'object' ? `${options.addition}` : '')
  .join(options.additionSeparator || '|')
  let result = new Array(options.repeatTimes).fill(subStr === undefined ? str : str + subStr).join(options.separator || '+')
  return result
}

module.exports = {
  repeater
};
