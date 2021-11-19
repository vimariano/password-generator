// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%";
var charset = "";

// prompt to select characters
var selectCharacters = function (){
  // var characterOptions = window.prompt("Select options UPPERCASE, LOWERCASE, NUMBERS, and SPECIAL CHARACTERS.");
  var charLower = window.confirm("Do you want lowercase letters?");
  var charUpper = window.confirm("Do you want uppercase letters?");
  var charNumbers = window.confirm("Do you want numbers?");
  var charSpecial = window.confirm("Do you want special characters?");

  switch (true){
      case charLower:
        charset += lowerCase
        console.log(charset)
      case charUpper:
        charset += upperCase
        console.log(charset)
      case charNumbers:
        charset += numbers
        console.log(charset)
      case charSpecial:
        charset += special
        console.log(charset)
      }
    }

// generates password after selection
function generatePassword () {
  var length = window.prompt("Choose password length no less than 8 and no more than 128!");
    retVal = "";
  
  if (length >= 8 && length <= 128){
    // prompt next window
    selectCharacters()

  } else if(length < 8 || length > 128){
    // prompt invalid option
    window.alert("Not a valid option!") 
  } else{
    window.alert("Please enter valid number.")
  }

  // generates password
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
  debugger
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


