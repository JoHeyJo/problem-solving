"use strict"

// You are climbing a staircase.It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps.In how many distinct ways can you 
// climb to the top ?

/**
 * @param {number} n
 * @return {number}
 */


var climbStairs = function (n) {
  let arr = [1, 1]
  let i = 1;
  while (i < n) {
    let num = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(num)
    i++;
  }
  return arr[arr.length - 1]
};

module.exports = { climbStairs };

// Runtime: 52 ms, faster than 99.18 % of JavaScript online submissions for 
// Climbing Stairs.
// Memory Usage: 41.5 MB, less than 88.19 % of JavaScript online submissions
//  for Climbing Stairs.