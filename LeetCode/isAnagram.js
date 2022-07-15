"use strict"

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//compare letters, do both strings have the same amount of letters

// create freq counter for each string
//compare each pair 

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sCount = s.split('').reduce((acc, next) => {
    acc[next] ? acc[next]++ : acc[next] = 1;
    return acc
  }, {})

  let tCount = t.split('').reduce((acc, next) => {
    acc[next] ? acc[next]++ : acc[next] = 1;
    return acc
  }, {})
  for (let key in sCount) {
    if (sCount[key] !== tCount[key]) return false;
  }
  return true;
};

module.exports = { isAnagram };

// Runtime: 71 ms, faster than 99.09 % of JavaScript online submissions for Valid Anagram.
// Memory Usage: 42.8 MB, less than 84.51 % of JavaScript online submissions for Valid Anagram.