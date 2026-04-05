//Write a JavaScript program to get the difference
// between a given number and 13, if the number is
// broader than 13 return double the absolute difference.

function difference(n) {
  //this works as well
  //   if (n > 13) {
  //     return (n - 13) * 2;
  //   } else {
  //     return 13 - n;
  //   }
  return n > 13 ? (n - 13) * 2 : 13 - n;
}
console.log(difference(32));
console.log(difference(11));
