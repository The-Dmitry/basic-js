const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = true;
    if (direction === false) {this.direction = false}
  }
  encrypt(wordToEncrypt, keyToEncrypt) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (!wordToEncrypt || !keyToEncrypt) {
			throw new Error("Incorrect arguments!")
		} else {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let extKey = keyToEncrypt.padEnd(wordToEncrypt.length, keyToEncrypt)
      let wordToNum = []
      let keyToNum = []
      let encoded = []
      let result = []
      let count = 0
    for(let i=0; i < wordToEncrypt.length; i++) {
      if(letters.indexOf(wordToEncrypt[i].toUpperCase()) !== -1) {
        wordToNum.push(letters.indexOf(wordToEncrypt[i].toUpperCase()))
      } else {
        wordToNum.push(wordToEncrypt[i])
      }
      keyToNum.push(letters.indexOf(extKey[i].toUpperCase()))
    }
    for(let j = 0; j < wordToNum.length; j++) {
      if(typeof wordToNum[j] === 'number') {
        encoded.push(wordToNum[j] + keyToNum[count] >= 26 ? (wordToNum[j] + keyToNum[count]) - 26 : wordToNum[j] + keyToNum[count])
        count++
      } else {
        encoded.push(wordToNum[j])
      }
    }
    for(let e = 0; e < encoded.length; e++) {
      typeof encoded[e] === 'number' ? result.push(letters[encoded[e]]) : result.push(encoded[e])
    }
    // console.log(result.join(''));
    return this.direction ? result.join('') : result.reverse().join('')
    }
  }
  decrypt(wordToDecrypt, ketToDecrypt) {
    if (!wordToDecrypt || !ketToDecrypt) {
			throw new Error("Incorrect arguments!")
		} else {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let extKey = ketToDecrypt.padEnd(wordToDecrypt.length, ketToDecrypt)
    let wordToNum = []
    let keyToNum = []
    let encoded = []
    let result = []
    let count = 0
    for(let i=0; i < wordToDecrypt.length; i++) {
      if(letters.indexOf(wordToDecrypt[i].toUpperCase()) !== -1) {
        wordToNum.push(letters.indexOf(wordToDecrypt[i].toUpperCase()))
      } else {
        wordToNum.push(wordToDecrypt[i])
      }
      keyToNum.push(letters.indexOf(extKey[i].toUpperCase()))
    }
    for(let j = 0; j < wordToNum.length; j++) {
      if(typeof wordToNum[j] === 'number') {
        encoded.push(wordToNum[j] - keyToNum[count] < 0 ? (wordToNum[j] + 26 - keyToNum[count]) : wordToNum[j] - keyToNum[count])
        count++
      } else {
        encoded.push(wordToNum[j])

      }
    }
    for(let e = 0; e < encoded.length; e++) {
      typeof encoded[e] === 'number' ? result.push(letters[encoded[e]]) : result.push(encoded[e])
    }
    return this.direction ? result.join('') : result.reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
