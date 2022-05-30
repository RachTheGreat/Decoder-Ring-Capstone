const caesarModule = (function () {
  
     
    function encoder(input, shift) {
      let newInput = input.toLowerCase();
    const legend = 'abcdefghijklmnopqrstuvwxyz'
    let newMessage = ''
    for (let i = 0; i < newInput.length; i++) {
     
      const letter = newInput[i];
     
      if (!legend.includes(newInput[i])) {
        newMessage += newInput[i]
      } else {
      const letterNum = legend.indexOf(letter);
      let newIndex = letterNum + shift;
      
      if (newIndex >= 26) {
        newIndex = newIndex - 26
      }
      if (newIndex < 0) {
        newIndex = newIndex + 26
      }
      newMessage += legend[newIndex]
    }
    }
    return newMessage
    }
     
  
      function decoder (input, shift) {
  let newInput = input.toLowerCase();
  const legend = 'abcdefghijklmnopqrstuvwxyz'
  let newMessage = ''
  for (let i = 0; i < newInput.length; i++) {
    const letter = newInput[i];
    if (!legend.includes(newInput[i])) {
      newMessage += newInput[i]
    } else {
    const letterNum = legend.indexOf(letter);
    
    let newIndex = 0;
    
     
     if (shift >= 0) {
     newIndex = letterNum - shift;
      } else {
        newIndex = letterNum - (shift + 26);
      }
      
    if (newIndex < 0) {
      newIndex = newIndex + 26
    }
    
    newMessage += legend[newIndex]
  }
  }
  return newMessage
}

     

  function caesar(input, shift, encode = true) {
    if (!shift || shift > 25 || shift < -25) return false;
    if (encode) {
      return encoder(input, shift)
    } else {
      return decoder(input, shift)
    }
   }
  
  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
