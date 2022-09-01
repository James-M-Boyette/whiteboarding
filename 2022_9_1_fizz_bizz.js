// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// const ourArray = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// function fizzBuzzProcessor(numbersArray) {
//   const resultsArray = [];
//   numbersArray.forEach((element) => {
//     if (element === 0) {
//       resultsArray.push(`${element}`);
//     }
//     if (!(element % 3) && !(element % 5)) {
//       resultsArray.push("FizzBuzz");
//       return;
//     }
//     if (!(element % 3)) {
//       resultsArray.push("Fizz");
//       return;
//     }
//     if (!(element % 5)) {
//       resultsArray.push("Buzz");
//       return;
//     }
//     resultsArray.push(`${element}`);
//     return;
//   });
//   return resultsArray;
// }

// console.log(fizzBuzzProcessor(ourArray));

function fizzBuzz(userNumber) {
  let resultsArray = [];

  // Catch "Zero" input
  if (userNumber === 0) {
    console.log("ZERO");
    resultsArray.push(`${element}`);
    return;
  }

  // Conditions & Consequences of fizz-buzz check
  const fizzBuzzCheck = (number) => {
    if (!(number % 3) && !(number % 5)) {
      resultsArray.push("FizzBuzz");
      return true;
    }
    if (!(number % 3)) {
      resultsArray.push("Fizz");
      return true;
    }
    if (!(number % 5)) {
      resultsArray.push("Buzz");
      return true;
    }
    return false;
  };

  // Itterate to user-supplied number, and if fizz-buzz check fails, add the current number
  let index = 1;
  while (index <= userNumber) {
    if (!fizzBuzzCheck(index)) {
      resultsArray.push(`${index}`);
    }
    index++;
  }
  return resultsArray;
}

console.log(fizzBuzz(15));
