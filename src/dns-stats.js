const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let temp = domains.map(el => el.split('.')).map(item => item.reverse().map(element => `.${element}`))
  let result = {}
  temp.forEach(item => {
    for(let i = 1; i <= item.length; i++) {
      let dns = item.slice(0, i).join('')
      if(result[dns]) {
        result[dns]++
      } else {
        result[dns] = 1
      }
    }
  })
  return result
}

module.exports = {
  getDNSStats
};
