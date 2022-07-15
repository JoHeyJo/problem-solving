"use strict"

// Given an integer array nums, return true if any value appears at least twice 
// in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const counter = nums.reduce((acc, next) => {
    acc[next] ? acc[next]++ : acc[next] = 1;
    return acc;
  }, {})

  let vals = Object.values(counter);

  return vals.some(val => val > 1)
};

module.exports = { containsDuplicate }