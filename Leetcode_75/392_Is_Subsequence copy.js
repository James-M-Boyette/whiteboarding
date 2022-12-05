/** Problem:
 * Given two strings 's' and 't', return true if 's' is a subsequence of 't'. Otherwise return false.
 * Note:
 *   The "subsequence" of a string is
 *   1. a new string, which is formed from
 *   2. the original string by
 *   3. deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
 *   ex: "ace" is a subsequence of "abcde" while "aec" is not ...
 * So ...
 *   We want to take in two strings,
 *   evaluate whether the first string has
 *   - no letters *not* in string #2, and
 *   - has them in the same order as string #2
 */

var isSubsequence = function (s, t) {
  const arrayS = s.split("");
  const arrayT = t.split("");
  // Any immediate cases where we should return false? ...

  // If the new string 's' is *longer* than the original string 't'
  if (s.length > t.length) {
    console.log(`🚨 Can't be a subsequence: string 's' is longer than 't'`);
    return false;
  }
  // } else if (s.length == t.length && s[0] != t[0]) {
  //   return false;
  // } else if (includesAdditionalLetters(arrayS, t)) {
  //   console.log(
  //     `🚨 Can't be a subsequence: string 's' has letters not in the original string 't'`
  //   );
  //   return false;
  // } else if (lettersOutOfOrder(arrayS, arrayT)) {
  //   console.log(
  //     `🚨 Can't be a subsequence: string 's' has its letters in a different order than string 't'`
  //   );
  //   return false;
  // }

  const sourceArray = [a, b, c, d, e];
  const failArray = [a, e, c];
  // Expected Output: a, e

  // const successArray = [a, c, d]
  // Expected Output: a, c, d

  test(sourceArray, failArray);

  modifiedArrayT = [];
  arrayS.forEach((letter) => {
    // Get the index place in 't' of 's's current letter (where is the letter A in 't' ?)
    let indece = t.indexOf(letter);
    console.log("indece: ", indece);
    console.log("modifiedArrayT: ", arrayT.slice(indece));
    // modifiedArrayT = arrayT.slice(indece);
    modifiedArrayT.push(letter);

    // What do I want to do?
    // I want to go through arrayT, and remove all letters between the current and last one
    // Then I want to compare the new array with arrayS - if they're the same, return 'true'
  });
  // console.log("modifiedArrayT: ", modifiedArrayT);

  // console.log(
  //   `🚨 Can't be a subsequence: string 's' has letters not in the original string 't'`
  // );
  // console.log(
  //   `🚨 Can't be a subsequence: string 's' has its letters in a different order than string 't'`
  // );

  // return "Placeholder return value";
  return true;
};

// const includesAdditionalLetters = (stringS, stringT) => {
const includesAdditionalLetters = (arrayS, stringT) => {
  // const arrayS = stringS.split("");
  let sourceLetters = {};
  let i = stringT.length;
  while (i--) {
    sourceLetters[stringT[i]] = 1;
  }
  // console.log("stringT / sourceLetters:", sourceLetters);

  for (const letter of arrayS) {
    // console.log(`Includes ${letter}? `, Object.keys(sourceLetters).includes(letter));
    if (!Object.keys(sourceLetters).includes(letter)) {
      return true;
    }
  }

  return false;
};

// const lettersOutOfOrder = (stringS, stringT) => {
const lettersOutOfOrder = (arrayS, arrayT) => {
  let positionsArray = [];
  // let i = arrayS.length;
  // while (i--) {
  positionsArray.push(arrayT.indexOf(arrayS[0]));
  for (let i = 1; i < arrayS.length; i++) {
    // console.log(`index of ${arrayS[i]} in arrayT: `, arrayT.indexOf(arrayS[i]));

    if (arrayT.indexOf(arrayS[i]) < positionsArray[positionsArray.length - 1]) {
      // console.log(
      //   `${arrayT.indexOf(arrayS[i])} < ${
      //     positionsArray[positionsArray.length - 1]
      //   }`
      // );
      return true;
    }
    positionsArray.push(arrayT.indexOf(arrayS[i]));

    // console.log("positionsArray: ", positionsArray);
  }
  return false;
};

const cases = {
  // Test for a subsequence (no letters removed)
  s1: "ahbgdc",
  t1: "ahbgdc",

  // Test for a subsequence (SOME letters removed)
  s2: "abc",
  t2: "ahbgdc",

  // Test for *not* a subsequence
  s3: "axc",
  t3: "ahbgdc",

  // Test for *not* a subsequence
  s4: "ahbgdcm",
  t4: "ahbgdc",

  // Test for no characters
  s5: "",
  t5: "ahbgdc",

  // Test for characters out of order
  s6: "aec",
  t6: "abcde",

  // Test for chunk
  s7: "aaaaaa",
  t7: "bbaaaa",

  // Test for duplicates
  s8: "bb",
  t8: "ahbgdc",
};

const s = cases.s1;
const t = cases.t1;
console.log(`Is '${s}' a Subsequence of '${t}'  ? ...`, isSubsequence(s, t));
console.log(
  `Is '${cases.s2}' a Subsequence of '${cases.t2}'  ? ...`,
  isSubsequence(cases.s2, cases.t2)
);
console.log(
  `Is '${cases.s3}' a Subsequence of '${cases.t3}'  ? ...`,
  isSubsequence(cases.s3, cases.t3)
);
console.log(
  `Is '${cases.s4}' a Subsequence of '${cases.t4}'  ? ...`,
  isSubsequence(cases.s4, cases.t4)
);
// console.log(
//   `Is '${cases.s5}' a Subsequence of '${cases.t5}'  ? ...`,
//   isSubsequence(cases.s5, cases.t5)
// );
console.log(
  `Is '${cases.s6}' a Subsequence of '${cases.t6}'  ? ...`,
  isSubsequence(cases.s6, cases.t6)
);
console.log(
  `Is '${cases.s7}' a Subsequence of '${cases.t7}'  ? ...`,
  isSubsequence(cases.s7, cases.t7)
);
console.log(
  `Is '${cases.s8}' a Subsequence of '${cases.t8}'  ? ...`,
  isSubsequence(cases.s8, cases.t8)
);

/** Example 1 -
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 * Explanation:
 */

/** Example 2 -
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 * Explanation:
 */

/** Constraints:
 * 0 <= s.length <= 100
 * 0 <= t.length <= 104
 * s and t consist only of lowercase English letters.
 */
