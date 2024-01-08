/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  function backTrack(openN, closeN, path = '') {
    if (openN === n && closeN === n) return res.push(path);

    if (openN < n) {
      backTrack(openN + 1, closeN, path + "(")
    }

    if (closeN < openN) {
      backTrack(openN, closeN + 1, path + ")")
    }
  }
  backTrack(0, 0, "");
  return res;
}; 

// This problem is better solved using backtracking with a variable `path` that tracks
// the valid parens instead of using a stack. 
// At least it's better for me to conceptualize. 