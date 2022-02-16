// upper/lower characters, numbers, symbols

var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Prompt for password options
//"Do you want questions...."
//Validate input
//password length >8 < 128
//Pick at least one option
//Get the required characters


//Put the password on the screen

//Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
