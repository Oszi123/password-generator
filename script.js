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




// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

