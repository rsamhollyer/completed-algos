// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//THIS SOLUTION IS SIMPLE,BUT IS VERY SLOW BECAUSE OF THE .SORT()

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
module.exports = anagrams;

/*
function anagrams(stringA, stringB) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let booleanAnswer = true;
  let word1 = stringA.toLowerCase();
  word1 = word1.replace(regex, "");
  let word2 = stringB.toLowerCase();
  word2 = word2.replace(regex, "");

  if (word1.length !== word2.length) booleanAnswer = false;

  let cache1 = {};
  let cache2 = {};

  for (let letter of word1) {
    cache1[letter] = cache1[letter] + 1 || 1;
  }
  for (let letter of word2) {
    cache2[letter] = cache2[letter] + 1 || 1;
  }

  Object.keys(cache1).forEach((letter) => {
    if (cache1[letter] !== cache2[letter]) {
      booleanAnswer = false;
      return;
    }
  });

  return booleanAnswer;
}
*/

/*
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    console.log(char);
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

*/
