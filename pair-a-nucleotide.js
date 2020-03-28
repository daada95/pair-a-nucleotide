function pairNucleotide(str) {
  // we create an array by splitting our input string
  let strArr = str.split("");

  // we create a new array where we will store our pairs as sub-arrays
  let newArr = [];

  // we iterate with for loop and assign pairs to every element of DNA, and then push them to our new array
  for (let i = 0; i < strArr.length; i++) {
  let funcArr = [];
  if (strArr[i] === "C") {
    funcArr.push("C");
    funcArr.push("G");
    newArr.push(funcArr);
  } else if (strArr[i] === "G") {
    funcArr.push("G");
    funcArr.push("C");
    newArr.push(funcArr);
  } else if (strArr[i] === "A") {
    funcArr.push("A");
    funcArr.push("T");
    newArr.push(funcArr);
  } else if (strArr[i] === "T") {
    funcArr.push("T");
    funcArr.push("A");
    newArr.push(funcArr);
  }
  }

  // now we return our array with pairs in sub-arrays
  return newArr;
}
