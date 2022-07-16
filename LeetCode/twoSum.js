"use strict"

// Given an array of integers nums and an integer target, return indices of
//  the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you
// may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

*/



var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in map) {
      return [map[diff], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

module.exports = { twoSum }

// Runtime: 108 ms, faster than 62.73 % of JavaScript online submissions for Two Sum.
// Memory Usage: 42.6 MB, less than 51.46 % of JavaScript online submissions for Two Sum.