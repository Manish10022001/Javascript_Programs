//1. Create an array of your top 5 favorite movies and log it
let arr = ["a", "b", "c", "d", "e"];
arr.forEach(function (value) {
  console.log(value);
});

//2. Find and log the second element of the array;
console.log(arr[1]);

//3. Add two new elements to the start of an array
//using .unshift();
arr.unshift("A");
arr.unshift("B");
console.log(arr);

//4. Remove the last element of an array and
///log the updated array
arr.pop();
console.log(arr); //[ 'B', 'A', 'a', 'b', 'c', 'd' ]

//5. Use .slice() to extract the first three elements of an array.
let newArr = arr.slice(0, 3);
console.log(newArr); //[ 'B', 'A', 'a' ]

//6. Find the index of a specific element in an array using .indexOf();
console.log(arr.indexOf("b")); //3

//7. Check if a value exists in an array using .includes().
console.log(arr.includes("b")); //true

//8. Combine two arrays [1,2] and [3,4] using .concat();
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2);
console.log(arr3);
