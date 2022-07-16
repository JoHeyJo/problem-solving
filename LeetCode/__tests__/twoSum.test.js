"use strict"

const { twoSum } = require('../twoSum');

test("returns array indices of the two numbers that they add up to target.", function(){
  const result = twoSum([2, 7, 11, 15], 9);
  expect(result).toEqual([0,1]);
})

test("returns array indices of the two numbers that they add up to target.", function(){
  const result = twoSum([3, 2, 4], 6);
  expect(result).toEqual([1,2]);
})

test("returns array indices of the two numbers that they add up to target.", function(){
  const result = twoSum([3, 3], 6);
  expect(result).toEqual([0,1]);
})

