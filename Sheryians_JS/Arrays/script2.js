// Sort an array of numbers [5,2,9,1] in ascending order
let arr = [5, 2, 9, 1];
// ans1: array methods
console.log(arr.sort().reverse());

// ans2: bubble sort (it compare to values and greater ships to right side)

/* this moves the max to right side one time, so we need to move it multiple times so we create another for loop
for (let i = 0; i < arr.length - 1; i++) {
  //now give condition and swap the arr i.e max to right side
  if (arr[i] > arr[i + 1]) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}
console.log(arr);
*/

for (let j = 0; j < arr.length - 1; j++) {
  for (let i = 0; i < arr.length - 1; i++) {
    //now give condition and swap the arr i.e max to right side
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
}
console.log(arr);
