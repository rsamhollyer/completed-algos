// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoizer(func) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = func.apply(this, args);

    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  //Calling the memoized version purposefully
  return fib(n - 1) + fib(n - 2);
}

const fib = memoizer(slowFib);

module.exports = fib;

// function fib(n) {
//     if (n === 0) {
//       return 0;
//     } else if (n === 1 || n === 2) {
//       return 1;
//     }

//     if (n < 1) {
//       return 0;
//     }

//     let fib = 1;
//     let fibLessOne = 1;
//     let fibLessTwo = 0;

//     for (let i = 3; i <= n; i++) {
//       let temp = fib + fibLessOne;
//       fibLessTwo = fibLessOne;
//       fibLessOne = fib;
//       fib = temp;
//     }
//     return fib;
//   }

// function fib(n) {
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//       const a = result[i - 1];
//       const b = result[i - 2];
//       result.push(a + b);
//     }
//     return result[n];
//   }
