// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let newWord = [];
  let oldWord = str.split("");

  for (let i = 0; i < oldWord.length; i++) {
    newWord.unshift(oldWord[i]);
  }
  return newWord.join("");
}

module.exports = reverse;

/*
    Obviously you can use the array method .reverse(), but I wanted to avoid that for this exercise.
   
    - First Solution
    function reverse(str) {
    return str.split("").reverse().join("")
    }

    -Second Solution

        function reverse(str){
            let reversed ="";

            for(let char of str){
                reversed = char + reversed
            }
            return reversed
        }


    -Third Solution
   function reverse(str) {
    return str.split("").reduce((reversed,char) => char + reversed ,'')
}



*/
