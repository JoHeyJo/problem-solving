/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      matrix[y].push(matrix[x].shift());
    }
  }
  for (let m of matrix) m.reverse();
  return matrix;
};