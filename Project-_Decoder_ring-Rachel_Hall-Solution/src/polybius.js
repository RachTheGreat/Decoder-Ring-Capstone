const polybiusModule = (function () {


  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const decodingAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '(i/j)', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
  const cipherArray = [11, 21, 31, 41, 51, 12, 22, 32, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55, 00] 
   let square = {1: ['a', 'b', 'c', 'd', 'e'], 2: ['f', 'g', 'h', '(i/j)', 'k'], 3: ['l', 'm', 'n', 'o', 'p'], 4: ['q', 'r', 's', 't', 'u'], 5: ['v', 'w', 'x', 'y', 'z']};
  
 
 function decoder (input) {
 let newInput = input.replace(/ /g, '00')
 if (newInput.length % 2 != 0) return false;
 let inputArray = newInput.match(/../g);
 
 console.log(inputArray)
 let message = '';
 for (let i = 0; i < inputArray.length; i++) {
 if (inputArray[i] == '00') {
   message += ' ';
 } else {
 let alphabetIndex = cipherArray.indexOf(Number(inputArray[i]))
 message += decodingAlphabet[alphabetIndex]
 }
 }
 return message
 }
  
   
 function encoder (input) {
 let newInput = input.toLowerCase();
 let message = '';
 for (let i = 0; i < newInput.length; i++) {
 if (!alphabet.includes(newInput[i])) {
   message += newInput[i];
 }
 if (newInput[i] == 'i' || newInput[i]=='j'){
     message += '42'
   }
 for (let row in square) {
   if (square[row].includes(newInput[i])) {
     message += `${square[row].indexOf(newInput[i])+1}` + `${row}`
   }
 }
 }
    for (let j = 0; j< message.length; j++) {
 message = message.replace('-','')
 }
 return message
 };
   
   
 function polybius(input, encode = true) {
 if (encode) {
   return encoder(input)
 } else {
   return decoder(input)
 }
 }
   
 
   return {
     polybius,
   };
 })();
 
 module.exports = { polybius: polybiusModule.polybius }; 
