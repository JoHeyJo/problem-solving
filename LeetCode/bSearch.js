"use strict"

// Given an array of integers nums which is sorted in ascending order, and an
//  integer target, write a function to search target in nums.If target exists, 
//  then return its index.Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length-1;

  while(left <= right){
    let middle = Math.floor((left + right) / 2 );
    let current = nums[middle];

    if(current < target){
      left = middle + 1;
    } else if(current > target){
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

module.exports = { search };

// Given an array of integers nums which is sorted in ascending order, 
// and an integer target, write a function to search target in nums.If 
// target exists, then return its index.Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.