function countOccurences(arr) {
  let count = {};
  arr.forEach((x) => {
    return (count[x] = (count[x] || 0) + 1);
  });
  return count;
}
let arr = [1, 2, 2, 1, 2, 2, 4, 1];
console.log(countOccurences(arr));
