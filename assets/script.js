// upper/lower characters, numbers, symbols

var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', ' k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Prompt for password options
//"Do you want questions...."

function getPasswordOptions() {

  // prompted for the length of the password
  var passwordLength = parseInt(prompt("How long do you want your password?"));
  console.log(passwordLength);
  console.log(typeof passwordLength);
  // at least 8 characters and no more than 128 characters

  if (isNaN(passwordLength)) {
    alert("You need to provide a number");
    return;
  }

  if (passwordLength < 8) {
    alert("You need a longer password");
    return;
  }
  if (passwordLength > 128) {
    alert("You need a shorter password");
    return;
  }

  alert("Password length is all good");
  //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var includeLowercase = confirm("Do you want to include LOWERCASE characters?");
  var includeUppercase = confirm("Do you want to include UPPERCASE characters?");
  var includeSpecial = confirm("Do you want to include SPECIAL characters?");
  var includeNumbers = confirm("Do you want to include NUMBERS?");

  console.log(includeLowercase)
  console.log(includeUppercase)
  console.log(includeSpecial)
  console.log(includeNumbers)

  // input should be validated and at least one character type should be selected
  if (!includeLowercase && !includeUppercase && !includeSpecial && !includeNumbers) {
    alert("You need to pick at least on character type!");
    return;
  }

  var passwordOptions = {

  }
}

function generatePassword() {
  //Needs to return final password

  //Answer prompts
  var userPasswordOptions = getPasswordOptions()

}

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
