/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 1) return [nums.slice()]

  const res = [];
  for (let i = 0; i < nums.length; i++) {

    let removed = nums.shift();

    let perms = permute(nums);

    for (let perm of perms) {
      perm.push(removed)
    }
    res.push(...perms)
    nums.push(removed)
  }
  return res;
};