function reverse(word) {
  //
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  //reverse input string order
  const reversedWord = reverse(word);

  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here



  K A Y A K
  kayak === kayak // true
  civic === civic // true
  level === level // true


*/

/*
  make a function that returns true of a word is a palindrome and false if it is not.
  will need to reverse the word to find if it is a palindrome and return true.

  reverse the input string
  if the input is the same as the reversed input
    return true
    else
    return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
}

module.exports = isPalindrome;
