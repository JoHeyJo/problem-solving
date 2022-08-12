"use strict"

// Given an integer array nums and an integer k, return the k most frequent
//  elements.You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let counted = []
 
  for (let i = 0; i <= nums.length; i++)counted.push([]);
  const sortedNums = nums.sort((a, b) => a - b);
  const counter = nums.reduce((acc, next) => {
    acc[next] ? acc[next]++ : acc[next] = 1;
    return acc
  }, {})

  for (let key in counter) {
    counted[counter[key]].push(key);
  }

  let res = []
  counted.reverse().map(subArr => {
    if (res.length === k) return res;
    subArr.map(val => res.push(+val))
  })
  return res
};

module.exports = { topKFrequent };

// Runtime: 119 ms, faster than 55.37 % of JavaScript online submissions for Top 
// K Frequent Elements.
// Memory Usage: 52.8 MB, less than 5.30 % of JavaScript online submissions for
// Top K Frequent Elements.