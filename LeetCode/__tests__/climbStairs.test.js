"use strict"

const { climbStairs } = require('../climbStairs');

test("Return In how many distinct ways can you climb to the top?", function(){
  const result = climbStairs(2);
  expect(result).toEqual(2);
})

test("Return In how many distinct ways can you climb to the top?", function(){
  const result = climbStairs(3);
  expect(result).toEqual(3);
})

test("Return In how many distinct ways can you climb to the top?", function(){
  const result = climbStairs(5);
  expect(result).toEqual(8);
})