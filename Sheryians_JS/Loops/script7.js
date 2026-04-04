// Write a nexted loop to print a 3x3 grid of numbers;
let val = 1;
for (let i = 1; i < 4; i++) {
  str = "";
  for (let j = 1; j < 4; j++) {
    str += val;
    val++;
  }
  console.log(str);
}
