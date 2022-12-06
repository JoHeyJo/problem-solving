"use strict"

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //     let substringCount = 0;
  //     let longestCount = 0;
  //     let currentSubstring = '';

  //     for(let char of s){
  //         if (!currentSubstring.includes(char)){
  //             currentSubstring += char;
  //             substringCount++;
  //             longestCount = Math.max(longestCount, substringCount)
  //         } else {
  //         currentSubstring = char;
  //         longestCount = Math.max(longestCount, substringCount)
  //         substringCount = 1;
  //         }
  //     }
  //     return longestCount;

  const charSet = new Set();
  let l = 0;
  let count = 0;
  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l++;
    }
    charSet.add(s[r]);
    count = Math.max(count, r - l + 1)
  }
  return count;
};

// Runtime: 129 ms, faster than 69.00 % of JavaScript online submissions for 
// Longest Substring Without Repeating Characters.
// Memory Usage: 46.8 MB, less than 75.94 % of JavaScript online submissions for 
// Longest Substring Without Repeating Characters.

module.exports = { lengthOfLongestSubstring }


// var lengthOfLongestSubstring = function (s) {
//   let size = 0;
//   let string = new Set();
//   let l = 0;
//   for (let i = 0; i < s.length; i++) {
//     while (string.has(s[i])) {
//       string.delete(s[l]);
//       l++;
//     }
//     string.add(s[i]);

//     size = Math.max(size, string.size);
//   }
//   return size;
// };
