"use strict"

/**
 * @param {number} n
 * @return {number[]}
 */

// for each num up until n
// assign num = current iteration 
// convert each num to binary
// get sum of binary numbers
// add to array
var countBits = function (n) {
  const binaryCount = [];
  let binaryNums = [];
  let num = 0;
  while (num <= n) {
    let binaryN = num.toString(2);
    binaryNums = binaryN.split('').map(Number)
    binaryCount.push(binaryNums.reduce((acc, next) => acc += next, 0));
    num++;
  }
  return binaryCount;
};


module.exports = {countBits};

// Runtime: 208 ms, faster than 12.47 % of JavaScript online submissions for Counting Bits.
// Memory Usage: 54.5 MB, less than 6.15 % of JavaScript online submissions for Counting Bits.