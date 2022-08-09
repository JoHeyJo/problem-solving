"use strict"

// You are given an integer array cost where cost[i] is the cost of ith step on
//  a staircase.Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  cost.reverse().unshift(0);

  for (let i = 2; i < cost.length; i++) {
    cost[i] = Math.min((cost[i] + cost[i - 1]), (cost[i] + cost[i - 2]));
  }
  cost.reverse();
  return Math.min(cost[0], cost[1]);
};

module.exports = { minCostClimbingStairs }

// Runtime: 96 ms, faster than 53.84 % of JavaScript online submissions for
//  Min Cost Climbing Stairs.
// Memory Usage: 44.3 MB, less than 27.73 % of JavaScript online submissions 
// for Min Cost Climbing Stairs.