//find duplicate elements from the array.
function duplicateElements(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
let arr = ["abcd", "kd", "k", "d", "abcd", "abcd", 3];
console.log(duplicateElements(arr));
