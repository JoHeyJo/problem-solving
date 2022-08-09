"use strict"

// Given an array of strings strs, group the anagrams together.You can return the
//  answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a 
// different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let anagrams = {};
  for (let str of strs) {
    let sorted = str.split('').sort().join()
    !anagrams[sorted] ? anagrams[sorted] = [str] : anagrams[sorted].push(str);
  }
  return Object.values(anagrams);
};

module.exports = { groupAnagrams };

// Runtime: 128 ms, faster than 93.82 % of JavaScript online submissions for 
// Group Anagrams.
// Memory Usage: 53.3 MB, less than 63.69 % of JavaScript online submissions for
//  Group Anagrams.