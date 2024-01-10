var rob = function (nums) {
  let currentHouse = 0;
  let adjacentHouse = 0;
  for (let i = 0; i < nums.length; i++) {
    currentHouse = nums[i] + (nums[i - 2] || 0);
    adjacentHouse = nums[i - 1] || 0;
    nums[i] = Math.max(currentHouse, adjacentHouse);
  }
  return Math.max(currentHouse, adjacentHouse)
};