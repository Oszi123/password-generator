// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Random number selector with max and min

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var random = Math.random()
  return Math.floor(min *(1 - random) + random * max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
  var userInput = window.prompt("How long do you want your password to be?")
  var passwordLength = parseInt(userInput)

  // Invalid entry alerts

  if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters!")
    return
}
// Prompts for user to select
  var userWantsNumbers = window.confirm("Would you like to inculde numbers in your password?");
  var userWantsUppercase = window.confirm("Would you like to inculde uppercase in your password?");
  var userWantsLowercase = window.confirm("Would you like to inculde lowercase in your password?");
  var userWantsSymbols = window.confirm("Would you like to inculde symbols in your password?");




// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
