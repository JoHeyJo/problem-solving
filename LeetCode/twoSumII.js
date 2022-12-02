"use strict"

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumII = function (numbers, target) {
  let map = {};
  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];x``
    if (diff in map) {
      return [map[diff] + 1, i + 1];
    } else {
      map[numbers[i]] = i;
    }
  }
};



// Runtime: 77 ms, faster than 79.07 % of JavaScript online submissions for 
// Two Sum II - Input Array Is Sorted.
// Memory Usage: 43.3 MB, less than 12.95 % of JavaScript online submissions
//  for Two Sum II - Input Array Is Sorted.
module.exports = { twoSumII };

// two pointer ===> exceeds time limit

  // var twoSum = function (numbers, target) {
  //   let l = 0;
  //   let r = 1;
  //   while (l < r) {
  //     if (numbers[l] + numbers[r] === target) return [l + 1, r + 1];
  //     if (r === numbers.length - 1) {
  //       l++;
  //       r = l + 1;
  //     }
  //     r++;
  //   }
  // };