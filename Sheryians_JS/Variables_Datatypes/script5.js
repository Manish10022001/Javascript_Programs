//create a variable with a number as a string(eg. "22") and
//log their values
let num = "23";
console.log(typeof num);

//use typeof to check the type of boolean variable;
let isTrue = true;
console.log(typeof isTrue);

//create three variables of type string, number, and
//boolean, and log their vales.
const name = "Manish";
const age = 25;
const isAvailable = true;
console.log(`Name : ${name} \n
    Age: ${age} \n isAvailable: ${isAvailable}`);

//Declare a variable without assigning a value and log its type
value = 23;
console.log(typeof value);

//Create a variable with undefined and log its type;
let obj = undefined;
console.log(typeof obj);

//Use const to create an array. Try reassigning the array
//and observe the error
const arr = [1,2,3,4];
console.log(arr);
arr=[2,2,1,1];
console.log(arr);