// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split("").every((char, idx) => char === str[str.length - idx - 1]);
}

module.exports = palindrome;

/*
function palindrome(str) {
  let word1 = str;
  let word2 = str.split("").reduce((rev, char) => char + rev, "");

  return word1 === word2;
}

*/

/*
function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
*/

/* This is not the best way, because it requires you to look through the entire array, when that is not necessary
function palindrome(str) {
  return str.split("").every((char, idx) => char === str[str.length - idx - 1]);
}

*/
