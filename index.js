function isPalindrome(word) {
  if(word.split('').reverse().join('') === word) {
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here

  if (word) is equal to 'racecar', 'abba', 'a' 
    then we will return 'true'
  but if (word) is equal to 'robot', 'ab'
    then we will return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
