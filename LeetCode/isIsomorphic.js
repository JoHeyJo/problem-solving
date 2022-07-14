"use strict"

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while 
// preserving the order of characters.No two characters may map to the same 
// character, but a character may map to itself.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * frequency counter that compares appearances of each counter and samePatter()
 * checks the patten of each string
 */
var isIsomorphic = function (s, t) {

  if (!samePattern(s, t)) return false

  let string1 = s.split('').reduce((acc, next) => {
    acc[next] ? acc[next]++ : acc[next] = 1;
    return acc
  }, {})
  let string2 = t.split('').reduce((acc, next) => {
    acc[next] ? acc[next]++ : acc[next] = 1;
    return acc
  }, {})

  let s1 = Object.values(string1)
  let s2 = Object.values(string2)

  return s1.every((val, idx) => val === s2[idx])
};

/** checks for edge cases: s = "bbbaaaba", t = "aaabbbba",   */
function samePattern(s, t) {
  let s1 = true;
  let t1 = true;

  for (let i = 1; i < s.length - 1; i++) {
    s[i] === s[i + 1] ? s1 = true : s1 = false;
    t[i] === t[i + 1] ? t1 = true : t1 = false;
    if (s1 !== t1) return false
  }
  return true
}

module.exports = { isIsomorphic };