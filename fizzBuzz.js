// Given an integer 'n', return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Input: n = 3
// Output: ["1","2","Fizz"]

// [1,2,3]

// function take in a number
// function to run from 1 all the way to 'n'
// check whether the curent is number divisible by 3, 5, or 3 & 5 and return various strings; otherwise, return the number
// return a new array

function fizzBuzz(number) {
  if (number == typeof "number") {
    return null;
  }
  let outputArray = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      outputArray.push("FizzBuzz");
    } else if (i % 3 == 0) {
      outputArray.push("Fizz");
    } else if (i % 5 == 0) {
      outputArray.push("Buzz");
    } else {
      outputArray.push(i);
    }
  }
  return outputArray;
}

console.log("result:", fizzBuzz(15));
