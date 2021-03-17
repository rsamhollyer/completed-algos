// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*NOTES*/

/*
    Common String Questions:
    What is the most common character in the string?
    Does string A have the same characters as string B (anagram?)?
    Does the given string have any repeated characters in it?

    To solve problems like this, take string and convert to object : "Hello" => {H:1,e:1,l:2,0:1}



*/

function maxChar(str) {
  let chars = {};
  let max = 0;
  let maxChar = "";

  //   for (let char of str) {
  //     chars[char] = chars[char] + 1 || 1;
  //   }
  str.split("").reduce((acc, char) => {
    acc[char] = acc[char] + 1 || 1;
    return acc;
  }, chars);
  //   Object.keys(chars).forEach((key) => {
  //     if (chars[key] > max) {
  //       max = chars[key];
  //       maxChar = key;
  //     }
  //   });

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;

/*function maxChar(str) {
  let stringArr = str.split("");

  let obj = {};

  stringArr.reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 1;
      return acc;
    } else {
      acc[char] += 1;
      return acc;
    }
  }, obj);
  let valuesOfObj = Object.values(obj);

  let maxValueOfValues = Math.max(...valuesOfObj);

  let keysOfObj = Object.keys(obj);

  let result;
  for (let key of keysOfObj) {
    if (obj[key] === maxValueOfValues) result = key;
  }
  return result;
}
 */
