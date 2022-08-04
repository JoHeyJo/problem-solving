"use strict"

// You are given a large integer represented as an integer array digits, where 
// each digits[i] is the ith digit of the integer.The digits are ordered from most 
// significant to least significant in left - to - right order.The large integer 
// does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */

//[0,0,9]
var plusOne = function (digits) {
  let rDigits = digits.reverse();
  let i = 0;
  let carry = 1;
  while (i < rDigits.length) {
    if (rDigits[i] === 9 && carry === 1) {
      rDigits[i] = 0;

    } else {
      rDigits[i] += carry;
      carry = 0;

    }
    i++;
  }
  if (carry === 1) rDigits.push(1);
  return rDigits.reverse();
};

module.exports = { plusOne };

// Runtime: 91 ms, faster than 47.01 % of JavaScript online submissions for
// Plus One.
// Memory Usage: 41.9 MB, less than 63.33 % of JavaScript online submissions
//  for Plus One.