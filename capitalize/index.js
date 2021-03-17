// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//DONT FORGET RETURN STATEMENT
//THIS IS NOT THE BEST IDEA
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;

/*

function capitalize(str) {
  let stringArray = str.split("");
  let returnArray = [];
  stringArray.forEach((char, index) => {
    if (index === 0 || stringArray[index - 1] === " ") {
      returnArray.push(char.toUpperCase());
    } else {
      returnArray.push(char);
    }
  });
  return returnArray.join("");
}
*/

/*

function capitalize(str) {
  const words = [];

  str
    .split(" ")
    .forEach((string) => words.push(string[0].toUpperCase() + string.slice(1)));
  return words.join(" ");
}
*/
