// 65 - 90 Uppercase 97 - 122 lowercase

const readlineSync = require("readline-sync");

let input = readlineSync
  .question("What phrase would you like to encrypt? ")
  .toLowerCase();
let shift = parseInt(
  readlineSync.question("How many letters would you like to shift? ")
);
let spreadInput = [...input];
let newLetter = []

spreadInput.map((letter) => {
  let letterCode = letter.charCodeAt(0); //get code for each letter it will be zero index
  
  let newLetterCode;
  if(letterCode === 32){
    newLetterCode = letterCode
  }else{
    newLetterCode = letterCode + shift; // add shift amount to each charCode result

  if (newLetterCode < 97) {
    // If new letter goes below "a" character code 97
    newLetterCode += 26;
  } else if (newLetterCode > 122) {
    // If new letter goes past "z" character code 122
    newLetterCode -= 26;
  }
}
  newLetter += [String.fromCharCode(newLetterCode)];
  
});
console.log(newLetter);

