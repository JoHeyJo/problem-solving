"use strict"

// Given a non - empty array of integers nums, every element appears twice except 
// for one.Find that single one.

// You must implement a solution with a linear runtime complexity and use only
//  constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let counter = nums.reduce((acc, next) => {
    acc[next] ? acc[next]++ : acc[next] = 1;
    return acc;
  }, {})

  for (let key in counter) {
    if (counter[key] === 1) return key;
  }
};

module.exports = { singleNumber };

// Runtime: 96 ms, faster than 68.72 % of JavaScript online submissions for 
// Single Number.
// Memory Usage: 47.6 MB, less than 20.98 % of JavaScript online submisb