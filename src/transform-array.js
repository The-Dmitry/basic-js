const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!Array.isArray(arr)) {
      throw new Error (`'arr' parameter must be an instance of the Array!`)
  } 
  let result = [...arr]
    if(result[0] === '--discard-prev' || result[0] === '--double-prev') {result.splice(0, 1)}
    if(result[result.length-1] === '--double-next' || result[result.length-1] === '--discard-next') {result.splice(result.length-1, 1)}
  for(let i = 0; i < result.length; i++) {
    if(result[i] === '--discard-next') {
       result[i] = ''
       result[i+1] = ''
    }
    if(result[i] === '--discard-prev') {
        result[i] = ''
        result[i-1] = ''
    }
    if(result[i] === '--double-next') {
        result[i] = result[i+1]
    }
    if(result[i] === '--double-prev') {
        result[i] = result[i-1]}
  }
  return result.filter(el=> el !== '')
}

module.exports = {
  transform
};
