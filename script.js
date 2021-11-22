// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%";
var charset = "";

// generates password after selection
function generatePassword () {
  var charLength = window.prompt("Choose password length no less than 8 and no more than 128!");
  if (charLength >= 8 && charLength <= 128){
    // prompt next window
    var charLower = window.confirm("Do you want lowercase letters?");
    var charUpper = window.confirm("Do you want uppercase letters?");
    var charNumbers = window.confirm("Do you want numbers?");
    var charSpecial = window.confirm("Do you want special characters?");
  }  else{
    window.alert("Please enter valid number.")
  }

  if (charLower){
    charset += lowerCase;
    console.log(charset);
  }
  if (charUpper){
    charset += upperCase;
    console.log(charset);
  } 
  if (charNumbers){
    charset += numbers;
    console.log(charset);
  } 
  if (charSpecial){
    charset += special;
    console.log(charset);
  } 
  if (charLower == false && charUpper == false&& charNumbers == false && charSpecial == false){
      window.alert("select atleast one option!")
  }
   retVal = "";
 for (var i = 0, n = charset.length; i < charLength; ++i) {  
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }

      return retVal;
  // generates password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
