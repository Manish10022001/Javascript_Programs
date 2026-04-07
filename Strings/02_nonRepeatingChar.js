function nonRepeatingChar(str) {
  //use for loop to iterate over each char
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      console.log(char);
      break;
    }
  }
}

let str = "abckab";
console.log(nonRepeatingChar(str))