/** Problem:
 * Given two strings 's' and 't', return true if 's' is a subsequence of 't'. Otherwise return false.
 * Note:
 *   The "subsequence" of a string is
 *   1. a new string that is formed from
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
  // Any immediate cases where we should return false? ...

  // If the new string 's' is *longer* than the original string 't'
  if (s.length > t.length || s.length == 0) {
    console.log(
      `🚨 Can't be a subsequence: string 's' is either longer than 't', or has 0 characters/letters`
    );
    return false;
    // If the new string 's' 0 characters long
  }

  if (checkForAdditionalLetters(s, t)) {
    console.log(`🚨 's' has letters not in the original string 't'`);
    return false;
  }

  // console.log(t.split('').filter(letter => ));
  // return false;
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
};

const checkForAdditionalLetters = (stringS, stringT) => {
  const arrayS = stringS.split("");

  // Ver 2: dictionary
  let originalLetters = {};
  let i = stringT.length;
  while (i--) {
    // alert(stringT[i]);
    console.log("stringT[i]", stringT[i]);
    originalLetters[stringT[i]] = true;
  }
  // t.forEach((letter) => (originalLetters[letter] = true));
  console.log(`strings as arrays: [${arrayS}] & {${originalLetters}}`);

  for (const letter of arrayS) console.log(originalLetters);

  // const s = stringS.split("");
  // const t = stringT.split("");
  // console.log(`strings as arrays: [${s}] & [${t}]`);

  // s.forEach((letter) => {
  //   console.log(t.includes(letter));
  //   if (!t.includes(letter)) {
  //     return false;
  //   }
  // });
  return true;
};

const s = cases.s5;
const t = cases.t5;
console.log(`Is '${s}' a Subsequence of '${t}'  ? ...`, isSubsequence(s, t));

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
