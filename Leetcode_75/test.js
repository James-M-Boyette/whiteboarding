const sourceArray = ["a", "b", "c", "d", "e"];
const failArray = ["a", "e", "c"];
// let dictionary = { a : 0, }
// let tempArray = ["a", "b", "c", "d", "e"]
// e : 4
// 0 - 4 + 1 = 3
// Expected Output: a, e

// const successArray = [a, c, d]
// Expected Output: a, c, d

const test = (sourceArray, failArray) => {
  let dictionary = {};
  let compositArray = [];

  // failArray.forEach((letter) => {
  for (let i = 0; i < failArray.length; i++) {
    let letter = failArray[i];
    console.log("S letter: ", letter);

    let indece = sourceArray.indexOf(letter); // Get the index place in 't' of 's's current letter (where is the letter A in 't' ?)
    console.log(
      `indece of Ss letter '${failArray[i]}' in T's array: ${indece}`
    );
    // console.log(
    //   `indece of Ss letter '${
    //     failArray[i]
    //   }' in T's array: ${sourceArray.indexOf(letter)}`
    // );
    // console.log(
    //   `indece of Ss letter '${
    //     failArray[i]
    //   }' in T's array: ${sourceArray.indexOf(failArray[i])}`
    // );
    // console.log(
    //   `indece of Ss letter '${
    //     failArray[i]
    //   }' in T's array: ${sourceArray.indexOf("e")}`
    // );

    dictionary[letter] = indece; // Store the position of 's's letter in 't'
    // let previousEl = console.log("indece of letter: ", dictionary[letter]);

    const tempArray = sourceArray;
    console.log("tempArray pre: ", tempArray);
    // tempArray.splice(indece, sourceArray.length - indece);
    console.log("tempArray POST: ", tempArray);
    console.log(
      "TEST: ",
      sourceArray.length,
      indece,
      sourceArray.length - indece
    );

    compositArray.push(tempArray[0]);

    // tempArray.splice(1, 3);
    // tempArray.splice(indece);

    // splice

    // const months = ['Jan', 'March', 'April', 'June'];
    // months.splice(1, 0, 'Feb');
    // inserts at index 1

    // months.splice(4, 1, 'May');
    // replaces 1 element at index 4
    // });
  }

  console.log("compositArray: ", compositArray);
  console.log("dictionary: ", dictionary);
};

console.log("Result: ", test(sourceArray, failArray));
