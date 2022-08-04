"use strict"

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1(where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const visited = new Set()

  while (!visited.has(n)) {
    if (n === 1) return true;
    visited.add(n);
    n = sumOfSquares(n)
  }
  return false;
};

function sumOfSquares(n) {
  let splitNums = [...n + ''];
  let nums = splitNums.map(Number);
  return nums.reduce((acc, next) => acc += next ** 2, 0);
}

module.exports = { isHappy };
// Runtime: 71 ms, faster than 91.56 % of JavaScript online submissions for Happy Number.
// Memory Usage: 44.5 MB, less than 27.80 % of JavaScript online submissions for Happy Number.