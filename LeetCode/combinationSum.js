/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];

  function dfs(i, combos, sum) {
    if (sum > target) return null;
    if (sum === target) {
      res.push([...combos]);
      return;
    }
    if (i >= candidates.length) return

    combos.push(candidates[i])
    dfs(i, combos, sum + candidates[i])
    combos.pop()
    dfs(i + 1, combos, sum)
  }

  dfs(0, [], 0);
  return res;
};