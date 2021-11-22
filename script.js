// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%";
var charset = "";

// generates password after selection
function generatePassword () {
  var charLength = window.prompt("Choose password length no less than 8 and no more than 128!");
  var retVal = "";
  if (charLength >= 8 && charLength <= 128){
    // prompt next window
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
        };

        for (var i = 0, n = charset.length; i < charLength; ++i) {
          
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
  
  }  else{
    window.alert("Please enter valid number.")
  }

  // generates password
  debugger;
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


