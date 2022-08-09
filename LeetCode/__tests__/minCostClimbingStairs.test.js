"use strict"

const { minCostClimbingStairs } = require('../minCostClimbingStairs');

test("Return the minimum cost to reach the top of the floor.", function(){
  const result = minCostClimbingStairs([10, 15, 20]);
  expect(result).toEqual(15);
})

test("Return the minimum cost to reach the top of the floor.", function(){
  const result = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
  expect(result).toEqual(6);
})

test("Return the minimum cost to reach the top of the floor.", function(){
  const result = minCostClimbingStairs([0,0,0,0]);
  expect(result).toEqual(0);
})