"use strict"

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumII = function (numbers, target) {
  let map = {};
  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];
    if (diff in map) {
      return [map[diff] + 1, i + 1];
    } else {
      map[numbers[i]] = i;
    }
  }
};


module.exports = { twoSumII };

// Runtime: 77 ms, faster than 79.07 % of JavaScript online submissions for 
// Two Sum II - Input Array Is Sorted.
// Memory Usage: 43.3 MB, less than 12.95 % of JavaScript online submissions
//  for Two Sum II - Input Array Is Sorted.