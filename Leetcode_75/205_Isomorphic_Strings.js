/** Problem:
 * Given two strings 's' and 't', determine if they are isomorphic.
 * Note: 
 *  Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *  All occurrences of a character must be replaced with another character while preserving the order of characters. 
 *  No two characters may map to the same character, but a character may map to itself.
 
 * So ...
  * We need to take in two strings, 
  * evaluate whether the order of characters match
 */

var isIsomorphic = function (s, t) {
  // Want to check whether the strings have the same length
  if (s.length !== t.length) {
    console.log("NOT THE SAME LENGTH");
    return false;
  }

  /** 
   * ? Exploration or returning two or more results (objects) ...
   *  At one point, I thought I'd need to return *both* the stringDictionary AND the stringPattern ... but I couldn't figure out how to store the results. Once I solved the algorithm, I returned to this question, and discovered the following:
   * If I return both objects within an object  ({ stringDictionary, stringPattern }), I can destructure them
   // const { stringDictionary, stringPattern } = patternAnalyzer(s);
   // console.log("returned: ", stringDictionary, stringPattern);

   * PROBLEM: destructuring isn't actually what I want to do - I *don't* want to make what's returned from patternAnalyzer() directly available to everthing ... unlike when we call data from a REST API, and want to make that data available as-is to the rest of the app ...
   * I want to store what's returned in custom variables, so that I can run patternAnalyzer() on two different strings, and compare the results (via the custom variables - see 2nd version below: 

   // const string1Pattern = patternAnalyzer(s).stringPattern;
   // const string2Pattern = patternAnalyzer(t).stringPattern;
   * )
 */

  const string1Pattern = patternAnalyzer(s);
  const string2Pattern = patternAnalyzer(t);

  console.log("string1Pattern: ", string1Pattern);
  console.log("string2Pattern: ", string2Pattern);

  const confirmIsomorphic = (pattern1, pattern2) =>
    pattern1.every((el, i) => el === pattern2[i]);

  if (confirmIsomorphic(string1Pattern, string2Pattern)) {
    console.log("PATTERNS MATCH");
    return true;
  }
  console.log("PATTERNS DON'T MATCH");
  return false;
};

const patternAnalyzer = (inputString) => {
  let stringDictionary = {};
  let uniqueIdentifier = 0;
  let stringPattern = [];
  for (let i = 0; i < inputString.length; i++) {
    if (!stringDictionary[inputString[i]]) {
      uniqueIdentifier += 1;
      stringDictionary[inputString[i]] = uniqueIdentifier;
      stringPattern.push(uniqueIdentifier);
    } else {
      stringPattern.push(stringDictionary[inputString[i]]);
    }
  }
  return stringPattern;

  // return { stringDictionary, stringPattern }; // ? Exploration of returning two or more results (objects) ...
};

// Tests isomorphic 'true'
s1 = "egg";
t1 = "add";

// Tests isomorphic 'false'
s2 = "foo";
t2 = "bar";

// Tests isomorphic 'true' for more complex strings (character duplicated at irrgular intervals)
s3 = "paper";
t3 = "title";

// Tests condition "a character may map to itself"
s4 = "egg";
t4 = "ebb";

// Tests length
s5 = "egg";
t5 = "eggs";

console.log(`'Are the two strings isomorphic?' `, isIsomorphic(s1, t1));

/** Example 1 -
 * Input: s = "egg", t = "add"
 * Output: true
 * Explanation:
 */

/** Example 2 -
 * Input: s = "foo", t = "bar"
 * Output: false
 * Explanation:
 */

/** Example 3 -
 * Input: s = "paper", t = "title"
 * Output: true
 * Explanation:
 */

/** Constraints:
 * 1 <= s.length <= 5 * 104
 * t.length == s.length
 * s and t consist of any valid ascii character.
 */
