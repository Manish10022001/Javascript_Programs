//write a program that creates a copy of an array without mutating the original
//mutating means, original array should not change
//there are 2 ways: using spread operator or using forEach
let arr = [11, 22, 33, 44, 55, 66];
let arr2 = [...arr];
console.log(arr2);

//forEach
let arr3 = [];

arr.forEach(function (value) {
  arr3.push(value);
});
arr3.pop();
console.log(arr, arr3);
