"use strict"

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// iterate through nums1
// check if num at num2 is > && < current num at nums1
// add number 
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);

  let i = 0;

  while (nums2.length) {
    if (nums1[i] === undefined || nums1[i] > nums2[0]) {
      nums1.splice(i, 0, nums2.shift())
      i++;

    } else {
      i++;
    }
  }
  return nums1
};

module.exports = { merge };

// Runtime: 63 ms, faster than 93.59 % of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 42.5 MB, less than 17.85 % of JavaScript online submissions for Merge Sorted Array.

