/*
1. Start

2. Input a word

3. If the length of the word is less than or equal to 1, 
   		return True (Stop condition)

4. Initialize left pointer to the first character (0th index)

5. Initialize right pointer to the last character (length-1 index)

6. While left pointer is less than right pointer

     		a. If the characters at the left and right pointers are equal, 
     		move the left pointer one position right and right pointer one position left

     		b. If the characters at the left and right pointers are not equal, return False

7. If the loop completes, return True

8. End
*/

function isPalindrome(word) {
    // Stop condition
    if (word.length <= 1) {
      return true;
    }
  
    // Initialize left and right pointers
    let left = 0;
    let right = word.length - 1;
  
    // Loop while left pointer is less than right pointer
    while (left < right) {
      // Compare characters at left and right pointers
      if (word[left] !== word[right]) {
        return false;
      }
  
      // Move pointers towards the middle
      left++;
      right--;
    }
  
    // If the loop completes, the word is a palindrome
    return true;
  }

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("thamer")); // false
console.log(isPalindrome("a")); // true
console.log(isPalindrome("")); // true
