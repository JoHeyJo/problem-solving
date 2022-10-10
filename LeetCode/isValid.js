"use strict"

// Given a string s containing just the characters
//  '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.




/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  const closeMap = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  for (let c of s) {
    if (!closeMap[c]) {
      stack.push(c);
    } else {
      if (stack.pop() !== closeMap[c] || s.length == 1) return false;
    }
  }
  return stack.length === 0;
};
// var isValid = function (s) {
//   const stack = [];
//   const parens = {
//     ')': '(',
//     ']': '[',
//     '}': '{',
//   }

//   for (let c of s) {
//     if (parens[c]) {
//       if (stack.length && stack[stack.length - 1] === parens[c]) {
//         stack.pop()
//       } else {
//         return false;
//       }
//     } else {
//       stack.push(c);
//     }
//   }
//   return stack.length === 0;
// };


module.exports = { isValid };

// Runtime: 72 ms, faster than 81.99 % of JavaScript online submissions for 
// Valid Parentheses.
// Memory Usage: 42.7 MB, less than 22.53 % of JavaScript online submissions
// for Valid Parentheses.