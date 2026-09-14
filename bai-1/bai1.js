const isPalindrome = (str) => {
  let newStr = str.toLowerCase();
  newStr = newStr.split(" ").join("");
  let reversedStr = newStr.split("").reverse().join("");
  return newStr === reversedStr;
};

console.log(isPalindrome("Race car")); 
console.log(isPalindrome("Hello"));    