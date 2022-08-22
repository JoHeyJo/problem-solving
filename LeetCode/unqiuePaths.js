"use strict"

// There is a robot on an m x n grid.The robot is initially located at the top - 
// left corner(i.e., grid[0][0]).The robot tries to move to the bottom - right 
// corner(i.e., grid[m - 1][n - 1]).The robot can only move either down or right 
// at any point in time.

// Given the two integers m and n, return the number of possible unique paths that
//  the robot can take to reach the bottom - right corner.

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let row = Array(n).fill(1);

  for (let i = 0; i < m - 1; i++) {
    let newRow = Array(n).fill(1);

    for (let j = n - 2; j > -1; j--) {
      newRow[j] = newRow[j + 1] + row[j];
    }
    row = newRow;
  }
  return row[0];
}; 

module.exports = { uniquePaths };

// Runtime: 98 ms, faster than 36.56 % of JavaScript online submissions for Unique Paths.
// Memory Usage: 42.4 MB, less than 46.85 % of JavaScript online submissions for Unique Paths.