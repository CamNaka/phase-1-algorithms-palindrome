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

  need to reverse the string and put it into a new array with .split()
    need to reverse said array with .reverse()
      need to put reversed array back into a string with .join()
        then we need to check if reverse word is equal to (word)
          if so return true
          if not return false
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
