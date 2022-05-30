const substitutionModule = (function () {
  let trueAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  function unique(alphabet) {
    return new Set(alphabet).size == alphabet.length;
  }
    
    function encoder (input, alphabet) {
      if (!alphabet) return false;
      let uniqueTest = unique(alphabet);
      if (!uniqueTest) return false;
      if (alphabet.length != 26) return false;

      let message = '';
      input = input.toLowerCase();
      for (let i = 0; i < input.length; i++) {
      if (input[i] == ' ') {
        message += ' '
      } else {
      let index = trueAlphabet.indexOf(input[i]);
      message += alphabet[index]
      }
      }
      return message
    }



  function decoder (input, alphabet) {
    if (!alphabet) return false;
    let uniqueTest = unique(alphabet);
    if (!uniqueTest) return false;
    if (alphabet.length != 26) return false;

    let message = '';
    input = input.toLowerCase();

    for (let i = 0; i < input.length; i++) {
    if (input[i] == ' ') {
      message += ' '
    } else {
    let index = alphabet.indexOf(input[i])
    message += trueAlphabet[index];
    }
    }
    return message
  }
  
  function substitution(input, alphabet, encode = true) {
    if (encode) {
      return encoder(input, alphabet)
      } else {
      return decoder(input, alphabet)
      }
    }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
