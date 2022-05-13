function caeserText(str, key) {
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    // Check if character is alphabetic
    if (str[i].toLowerCase() != str[i].toUpperCase()) {
      //check if it's upper case or lower case
      if (str[i].toUpperCase() === str[i]) {
        if (str.charCodeAt(i) + key > 90) {
          let newCode = str.charCodeAt(i) + key - 90 + 65 - 1;
          newString += String.fromCharCode(newCode);
        } else {
          newString += String.fromCharCode(str.charCodeAt(i) + key);
        }
      } else {
        if (str.charCodeAt(i) + key > 122) {
          let newCode = str.charCodeAt(i) + key - 122 + 97 - 1;
          newString += String.fromCharCode(newCode);
        } else {
          newString += String.fromCharCode(str.charCodeAt(i) + key);
        }
      }
    } else {
      newString += str[i];
    }
  }

  return newString;
}

module.exports = caeserText;
