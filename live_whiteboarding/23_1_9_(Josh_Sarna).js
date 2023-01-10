// * Problem #1
// Fizzbuzz

// Given one number, return "fizz" if the number is divisible by 3, "buzz" diviz by 5, and "fizzBuzz" if it's divis by both

// const number = 9
// // return fizz

// const fizzbuzz = (input) => {
//     // Do we want to deal with 0?
//     // if input has no remainder, return fizz
//     // if (input % 3 == 0) {
//     if (input % 5 == 0 && input % 3 == 0) {
//         return "fizzBuzz"
//     } else if (input % 5 == 0) {
//         return "buzz"
//     } else if (input % 3 == 0) {
//         return "fizz"
//     }
//     return input
// }

// console.log('fizzbuzz: ', fizzbuzz(number));


// * Problem #2
// Write a function that accepts a string and returns a count of all letters in that string. 
// For example, “mom” returns {m: 2, o: 1}

const string = "emma"
// expected output = {m: 2, e: 1, a: 1}
// mmo / mmea

const letterCounter = (inputString) => {
    // For each element in the string
    // If it already exists in our hash, increment its value up by 1
    // If it does not already exist, store it as a key, and give it a value of 1 
    let talley = {}
    for (el of inputString) {
        // convert el to lowercase 
        if (talley[el]){
            talley[el] = talley[el] + 1
        } else {
            talley[el] = 1
        }
    }
    // talley = { e: 1, m: 2, a: 1 }

    // temp storage
    // object keys = array of the keys [ e, m, a]
    // compare talley[e] to talley[m]
    // if e is less than m, store m & it's
    // object.entries [[e, 1], [m, 2], [a,1]]
    // .sort(a, b => some logic)
    // [[m, 2], [e, 1], [a,1]]
    // function that stores [0] as the key & [1] as the value in my new object 
    
    // ourobject = {
    //     "m": 2,
    //     "o": 1, 
    // }
    // use hash object
    return talley
}

console.log('letters? ', letterCounter(string));