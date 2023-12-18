const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(type = true) {
    this.type = type;
  }

  encrypt(msg, key) {
    if (msg === undefined || key === undefined) throw Error("Incorrect arguments!");

    let encryptMessage = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let msgToEncrypt = msg.toUpperCase();
    let keyToEncrypt = key.toUpperCase();
    let k = 0;

    for (let i = 0; i < msgToEncrypt.length; i++) {
      if (alphabet.includes(msgToEncrypt[i])) {
        let encryptSymbol = (alphabet.indexOf(msgToEncrypt[i]) + alphabet.indexOf(keyToEncrypt[k])) % alphabet.length;
        encryptMessage += alphabet[encryptSymbol];
        k++;
        if (k > keyToEncrypt.length - 1) {
          k = 0;
        }
      } else {
        encryptMessage += msg[i];
      }
    }

    if (this.type === true) {
      return encryptMessage;
    } else {
      return encryptMessage.split("").reverse().join("");
    }
  }

  decrypt(encryptedMsg, key) {
    if (encryptedMsg === undefined || key === undefined) throw Error("Incorrect arguments!");

    let msg = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let msgToDecrypt = encryptedMsg.toUpperCase();
    let keyToDecrypt = key.toUpperCase();
    let k = 0;

    for (let i = 0; i < msgToDecrypt.length; i++) {
      if (alphabet.includes(msgToDecrypt[i])) {
        let encryptSymbol = (alphabet.indexOf(msgToDecrypt[i]) - alphabet.indexOf(keyToDecrypt[k])) % alphabet.length;

        msg += alphabet[encryptSymbol >= 0 ? encryptSymbol : alphabet.length + encryptSymbol];
        k++;
        if (k > keyToDecrypt.length - 1) {
          k = 0;
        }
      } else {
        msg += msgToDecrypt[i];
      }
    }

    if (this.type === true) {
      return msg;
    } else {
      return msg.split("").reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
