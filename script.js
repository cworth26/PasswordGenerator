// Assignment Code
var generateBtn = document.querySelector("#generate");

var confirmLower;
var confirmUpper;
var confirmNumber;
var passwordLength;
var confirmSpecial;
var userChoices;

var lowerCase = ["a","b","c","d","e","f","g"];
var numbers = [1,2,3,4,5,6,7];
var special = ["!","#","%","&"];

userChoices = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = prompt("Choose how many characters you would like your password. Choose at least 5 characters but no more than 12");
  console.log("Password length" + passwordLength);

  if (passwordLength < 5 || passwordLength > 12) {
    console.log('You have to choose between 5 and 12 characters');
  } else if (passwordLength === 5) {
    console.log('Here is your password: abcd34');
  }

  
  confirmLower = confirm("Do you want to include lower case characters?");
  console.log('CONFIRM', confirmLower)
  if (confirmLower) {
    userChoices = userChoices.concat(lowerCase);
  }
  
  var passwordBlank = [];

  for (var i = 0; i < passwordLength; i++) {
    console.log('USER CHOICES', userChoices);
    console.log('Random', Math.floor(Math.random() * userChoices.length));
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  return passwordBlank.join("");
}