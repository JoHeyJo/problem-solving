"use strict"

// You are a professional robber planning to rob houses along a street.Each house 
// has a certain amount of money stashed, the only constraint stopping you from 
// robbing each of them is that adjacent houses have security systems connected 
// and it will automatically contact the police if two adjacent houses were broken 
// into on the same night.

// Given an integer array nums representing the amount of money of each house, 
// return the maximum amount of money you can rob tonight without alerting the 
// police.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  //     let path1 = 0;
  //     let path2 = 0;

  //     for(let i = 0; i < nums.length; i+=2) path1 += nums[i];
  //     for(let i = 1; i <= nums.length-1; i+=2) path2 += nums[i];

  //     return Math.max(path1, path2)

  let r1 = 0;
  let r2 = 0;

  for (let n of nums) {
    let temp = Math.max(n + r1, r2);
    r1 = r2;
    r2 = temp;
  }

  return r2;


};
 
module.exports = { rob };

// Runtime: 56 ms, faster than 98.17 % of JavaScript online submissions for 
// House Robber.
// Memory Usage: 42.4 MB, less than 15.69 % of JavaScript online submissions 
// for House Robber.