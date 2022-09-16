"use strict"

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//       [1, 2, 3, 4] 1


//      product = 1
//       [1, 1, 2, 6] 1
//      

var productExceptSelf = function (nums) {
  const result = [];

  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i]
  }
  return result;
};

module.exports = { productExceptSelf }

// Runtime: 172 ms, faster than 45.83 % of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 55.7 MB, less than 28.87 % of JavaScript online submissions for Product of Array Except Self.