"use strict"


// Given an integer numRows, return the first numRows of Pascal's triangle.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows < 2) return [[1]]

  const pTriangle = [[1], [1, 1]];


  while (pTriangle.length < numRows) {
    let prevRowLength = pTriangle.length - 1
    let row = [1]
    for (let i = 0; i < prevRowLength; i++) {
      let sum = pTriangle[prevRowLength][i] + pTriangle[prevRowLength][i + 1]
      row.push(sum);
    }
    row.push(1);
    pTriangle.push(row);

  }
  return pTriangle;
};

module.exports = { generate };

// Runtime: 90 ms, faster than 40.58 % of JavaScript online submissions for 
// Pascal's Triangle.
// Memory Usage: 42.4 MB, less than 15.20 % of JavaScript online submissions for 
// Pascal's Triangle.