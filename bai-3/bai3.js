const toCamelCase = (str) => {
  let words = str.split(/[_-]/);
  let result = words[0]; 
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    let firstLetter = word[0].toUpperCase();
    let restLetters = word.slice(1);
    result = result + firstLetter + restLetters;
  }
  return result;
};
console.log(toCamelCase("data_user_name")); 
console.log(toCamelCase("first-name"));     
console.log(toCamelCase("my-var_name-test"));