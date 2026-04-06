//check if string is palindrome or not
function isPalindrome(str) {
  return str == str.split("").reverse().join("");
}
console.log(isPalindrome('manish'))
