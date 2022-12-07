const sourceString = "abcde";
const failString = "aec";
const successString = "ace";
const sourceArray = ["a", "b", "c", "d", "e"];
const failArray = ["a", "e", "c"];
const successArray = ["a", "c", "e"];
// let dictionary = { a : 0, }
// let tempArray = ["a", "b", "c", "d", "e"]
// e : 4
// 0 - 4 + 1 = 3
// Expected Output: a, e

// const successArray = [a, c, d]
// Expected Output: a, c, d

const test = (sourceArray, successArray, sourceString, failString) => {
  let dictionary = {};
  let compositArray = [];
  // let tempString = sourceString;

  // How do we produce a copy of sourceArray with only the letters in the 'failstring'?

  // Store the original, sourceString as an array
  // let sourceArray = sourceString.split("");
  // let successArray = failString.split("");

  // Go through the source array - and if any character does not exist in the 'failstring'/'fail array', delete it from the source array
  for (let i = 0; i < sourceArray.length; i++) {
    if (!successArray.includes(sourceArray[i])) {
      sourceArray.splice(i, 1);
    }
  }

  if (sourceArray != successArray) {
    return false;
  }
  return true;

  // sourceArray = sourceArray.filter((el) => el != failString);
  // console.log("sourceArray: ", sourceArray);

  // for (let i = 0; i < failString.length; i++) {
  //   stringToArray = stringToArray.filter((el) => el != failString[i]);
  //   console.log("stringToArray: ", stringToArray);
  // }
  //   let letter = failString[i];
  //   console.log("S letter: ", letter);

  //   let indece = sourceArray.indexOf(letter); // Get the index place in 't' of 's's current letter (where is the letter A in 't' ?)
  //   console.log(
  //     `indece of Ss letter '${failString[i]}' in T's array: ${indece}`
  //   );
  //   tempString = tempString.slice(indece);
  //   console.log("tempString: ", tempString);
  // }

  // console.log("compositArray: ", compositArray);
  console.log("dictionary: ", dictionary);
};

console.log(
  "Result: ",
  test(sourceArray, successArray, sourceString, failString)
);
