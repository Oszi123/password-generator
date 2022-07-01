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
// Arrays choices for user
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="]
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseList = []

// This is where users choices will be stored

  var choiceSet =[]

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
  }
  
  if (userWantsNumbers === true) {
  choiceSet.push(numberList)
}
  if (userWantsSymbols === true) {
  choiceSet.push(symbolList)
}
  if (userWantsUppercase === true) {
  choiceSet.push(uppercaseList)
}
  if (userWantsLowercase === true) {
  choiceSet.push(lowercaseList)
  }

  if (choiceSet.length === 0) {
choiceSet.push(uppercaseList)
  }

// Password generation to display in text box

  var generatedPassword = ""
  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(choiceSet)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar

  }
  return generatedPassword 
  }

// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
