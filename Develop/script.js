// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var characters = [
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
  var selections = [];
  var resultPassword = "";

  var userInput = prompt(
    "Choose a number from 8 to 128 to determine your password length."
  );
  if (userInput >= 8 && userInput <= 128) {
    var includeUpper = confirm(
      "Would you like upper case letters in your password?"
    );
  } else {
    alert("Please choose a number from 8 to 28.");
    return null;
  }
  if (includeUpper === true) {
    selections = selections.concat(upperCase);
  }

  var includeLower = confirm(
    "Would you like lower case letters in your password?"
  );

  if (includeLower === true) {
    selections = selections.concat(lowerCase);
  }

  var includeNumbers = confirm("Would you like numbers in your password?");

  if (includeNumbers === true) {
    selections = selections.concat(numbers);
  }

  var includeSpecial = confirm(
    "Would you like special characters in your password?"
  );

  if (includeSpecial === true) {
    selections = selections.concat(characters);
  }

  if (selections.length === 0) {
    alert("You must select at least one character class. Please try again.");
    return null;
  }

  for (var i = 0; i < userInput; i++) {
    var randIndex = Math.floor(Math.random() * selections.length);
    var randChar = selections[randIndex];
    resultPassword += randChar;
  }

  return resultPassword;
}
