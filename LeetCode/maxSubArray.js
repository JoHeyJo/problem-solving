"use strict"

// var maxSubArray = function (nums) {
//   let sum = 0;
//   let contiguousSum = 0;
//   for (let num of nums) {
//     sum += num;
//     if (sum === 0) {
//       contiguousSum = num;
//       sum = num;
//     }

//     contiguousSum = Math.max(contiguousSum, sum)
//   }
//   return contiguousSum || sum;
// };
//doesn't pass all test cases [-2,1]


var maxSubArray = function (nums) {
  let sum = 0;
  let max = -Infinity;
  
  for(let num of nums){
    sum = Math.max(sum + num, num)
    max = Math.max(max, sum)
  }
  return max;
}


// const maxSubArray = (nums) => {
//   let prev = 0; // no prev when we start so make it 0
//   let max = -Infinity; // no max when we start so anything will be the new max 

//   for (let i = 0; i < nums.length; i++) { // loop through in vanilla way starting at 0 and going to end by 1
//     const cur..r = nums[i]; // set our current value as a variable to make it easy to understand 
//     prev = Math.max(prev + curr, curr); // basically poses the question: build or start over?
//     max = Math.max(prev, max) // basically poses the question: update max or not? 
//   }
//   return max
// }


// Runtime: 113 ms, faster than 60.87 % of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 50.9 MB, less than 17.07 % of JavaScript online submissions for Maximum Subarray.

module.exports = { maxSubArray }