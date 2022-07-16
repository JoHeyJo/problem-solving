"use strict"


// Given two strings s and t, return true if s is a subsequence of t, or false 
// otherwise.

// A subsequence of a string is a new string that is formed from the original 
// string by deleting some(can be none) of the characters without disturbing the 
// relative positions of the remaining characters. (i.e., "ace" is a subsequence 
// of "abcde" while "aec" is not).

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//a new string isn't necessary 
// check if the current letter @ s exists in t
// save index, continue search from index

//psuedo:
//iterate through s, check if char exists in t
//if it exists, move on to the following char
//iterate through s at previous index, repeat 
//if letter doesn't exists return false
//if iteration finished return true

var isSubsequence = function (s, t) {
  let pos = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[pos] === t[i]) {
      pos++;
    }
  }
  return pos === s.length;
};

// Runtime: 90 ms, faster than 52.45 % of JavaScript online submissions for Is Subsequence.
// Memory Usage: 42.2 MB, less than 46.65 % of JavaScript online submissions for Is Subsequence.

module.exports = { isSubsequence };