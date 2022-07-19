"use strict"

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  // const string = s.replace(/\s/g, ""); remove ALL white space from string
  const string = s.replace(/[^a-z0-9]/gi, ''); // remove all non-alphanumeric chars
  return string.split('').every((char, idx) => {
    return char.toLowerCase() === string[(string.length - 1) - idx].toLowerCase();
  });
};

// Runtime: 79 ms, faster than 89.76 % of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 47.4 MB, less than 30.93 % of JavaScript online submissions for Valid Palindrome.

module.exports = { isPalindrome }