// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n); // One liner, but less ledgible than creating a variable to manipulate
}
module.exports = reverseInt;

/*
    function reverseInt(n) {
  let string = String(n);
  string = parseInt(string.split("").reverse().join(""));

  if (n < 0) string *= -1;
  return string;
}
*/

/*
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return Math.sign(n) * parseInt(reversed); // Math.sign() returns a 1 or -1 based on the sign of the number that is passed to it
}
*/
