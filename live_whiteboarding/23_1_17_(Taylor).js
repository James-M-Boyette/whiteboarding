// Given two strings, return true if they are anagrams of each other, and false if they are not. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Do not use any built-in sort methods.


// bob, obb
// obj1 = {b: 2, o: 1}
// obj2 = {o: 1, b: 2}

// const string1 = "silent"
// const string2 = "listen"
const string1 = "aba"
const string2 = "abb"
// output = true

const string3 = "frog"
const string4 = "bear"
// output = false

// Return either true or false
// Single words only for input - could check for spaces or "-"
// Anagrams have the same letters, and the same amount of those letters

const isAnagram = (inputString1, inputString2) => {
    // Check that the words are the same length
    if (inputString1.length !== inputString2.length) {
        return false
    }

    // Store first string
    let hash1 = {}
    for (let i = 0; i < inputString1.length; i++) {
        if (hash1[inputString1[i]]) {
            hash1[inputString1[i]] += 1
        } else {
            hash1[inputString1[i]] = 1
        }
    }

    // Store second string
    let hash2 = {}
    for (let i = 0; i < inputString2.length; i++) {
        // if (hash2[inputString2[i]]) {
        //     hash2[inputString2[i]] += 1
        // } else {
        //     hash2[inputString2[i]] = 1
        // }
        if (!hash1[inputString2[i]]) {
            return false
        } else {
            hash1[inputString2[i]] -= 1
        }
    }

    // Compare the two strings for equivilance
    // for (let i = 0; i < Object.keys(hash1).length; i++) {
    //     if (hash1[Object.keys(hash1)[i]] !== hash2[Object.keys(hash1)[i]]) {
    //         return false
    //     }
    // }
    return true
}

console.log('isAnagram? ', isAnagram(string1, string2));
console.log('isAnagram? ', isAnagram(string3, string4));