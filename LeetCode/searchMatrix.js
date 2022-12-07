/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const arrayIndex = bSearchIndexVals(matrix, target);
  console.log(arrayIndex)
  return bSearch(matrix[arrayIndex], target);
}

// var bSearchIndexVals = function (matrix, target) {
//     let top = 0;
//     let bot = matrix.length - 1;
//     let col = matrix[0].length - 1;

//     while (top <= bot) {
//         let row = Math.floor((top + bot) / 2);
//         if (target >= matrix[row][0] && target <= matrix[row][col-1]) return row;
//         if (target > matrix[row][0]) top = row + 1;
//         if (target < matrix[row][0]) bot = row - 1;
//     }
//     return matrix.length - 1;
// }

// var bSearch = function (nums, target) {
//     let l = 0;
//     let r = nums.length - 1;

//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);
//         if (target === nums[mid]) return true;
//         if (target < nums[mid]) r = mid - 1;
//         if (target > nums[mid]) l = mid + 1;
//     }
//     return false;
// }

var searchMatrix = function (matrix, target) {
  let [rows, cols] = [matrix.length, matrix[0].length];
  let [top, bot] = [0, rows - 1];

  while (top <= bot) {
    let row = Math.floor((top + bot) / 2);
    if (target > matrix[row][cols - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bot = row - 1;
    } else {
      break;
    }
  }

  if (!(top <= bot)) {
    return false;
  }

  let row = Math.floor((top + bot) / 2);
  let [l, r] = [0, cols - 1];
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (target > matrix[row][m]) {
      l = m + 1;
    } else if (target < matrix[row][m]) {
      r = m - 1;
    } else if (target == matrix[row][m]) {
      return true;
    }
  }
  return false;
};