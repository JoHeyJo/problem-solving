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

var containsDuplicate = function (nums) {
  const numsSet = new Set();
  for (let num of nums) {
    if (numsSet.has(num)) {
      return true
    } else {
      numsSet.add(num);
    }
  }
  return false;
};

module.exports = { containsDuplicate }