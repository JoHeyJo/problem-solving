"use strict"

// Given two integer arrays nums1 and nums2, return an array of their 
// intersection.Each element in the result must appear as many times as it shows 
// in both arrays and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const intersectingNums = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      let index = nums2.indexOf(nums1[i]);
      intersectingNums.push(nums1[i]);
      nums2.splice(index, 1)
    }
  }
  return intersectingNums;
};

module.exports = { intersect };

// Runtime: 71 ms, faster than 89.88 % of JavaScript online submissions for 
// Intersection of Two Arrays II.
// Memory Usage: 42.4 MB, less than 88.26 % of JavaScript online submissions for
//  Intersection of Two Arrays II.