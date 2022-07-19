"use strict"

const { maxSubArray } = require('../maxSubArray');

test("find the contiguous subarray and return its sum", function (){
  const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  expect(result).toEqual(6);
})

test("find the contiguous subarray and return its sum", function (){
  const result = maxSubArray([1]);
  expect(result).toEqual(1);
})

test("find the contiguous subarray and return its sum", function (){
  const result = maxSubArray([5, 4, -1, 7, 8]);
  expect(result).toEqual(23);
})

test("find the contiguous subarray and return its sum", function (){
  const result = maxSubArray([-2, 1]);
  expect(result).toEqual(1);
})