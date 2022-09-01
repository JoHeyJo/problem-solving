"use strict";

// Given a string s, return the longest palindromic substring in s.

/**
 * @param {string} s
 * @return {string}
 */

//all palindromes => longest palindrom
//
var longestPalindrome = function (s) {
  //     if(s.length === 1) return s;
  //     let palindrome = ''
  //     let firstPointer = 0;
  //     let secondPointer = s.length;

  //     for(let i = 0; i <= s.length; i++){
  //         let currentString = s.slice(firstPointer, i);
  //         if(isPalindrome(currentString)){
  //             if(currentString.length > palindrome.length) palindrome = currentString;
  //         }
  //     }

  //     for(let i = 0; i <= s.length; i++){
  //         let currentString = s.slice(i,secondPointer);
  //         if(isPalindrome(currentString)){
  //             if(currentString.length > palindrome.length) palindrome = currentString;
  //         }
  //     }
  // return palindrome;
  // };

  // function isPalindrome(s){
  //     return s === s.split('').reverse().join('');

  let longestPalindrome = '';

  for (let i = 0; i < s.length; i++) {
    let l = i;
    let r = i;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      let currentPalindrome = s.slice(l, r + 1);
      if (longestPalindrome.length < currentPalindrome.length) {
        longestPalindrome = currentPalindrome;
      }
      l--;
      r++;
    }
    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      let currentPalindrome = s.slice(l, r + 1);
      if (longestPalindrome.length < currentPalindrome.length) {
        longestPalindrome = currentPalindrome;
      }
      l--;
      r++;
    }
  }
  return longestPalindrome;
}

module.exports = { longestPalindrome };

// Runtime: 149 ms, faster than 67.34 % of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 48.7 MB, less than 32.22 % of JavaScript online submissions for Longest Palindromic Substring.