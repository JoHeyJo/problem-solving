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


//two pointers

var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    while (l < r && isNonAlphaNumeric(s[l].toLowerCase())) l++;
    while (l < r && isNonAlphaNumeric(s[r].toLowerCase())) r--;
    if (s[l].toLocaleLowerCase() !== s[r].toLocaleLowerCase()) return false;
    l++;
    r--;
  }
  return true;
};

const isNonAlphaNumeric = (char) => {
  const isNonAlpha = char < 'a' || 'z' < char; // a(97) - z(122)
  const isNonNumeric = char < '0' || '9' < char; // 0(48) - 9(57)

  return isNonAlpha && isNonNumeric;
};

// Runtime: 88 ms Beats: 83.75 %
// Memory: 45.3 MB Beats: 59.27 %

module.exports = { isPalindrome }