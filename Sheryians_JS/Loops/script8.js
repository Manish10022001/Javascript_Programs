//Use a loop to reverse an array [1,2,3,4]
let arr = [1, 2, 3, 4];
//this prints the array in reverse, but wwhen just gave arr it again give us [1,2,3,4]
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = temp;
}
console.log(arr);
