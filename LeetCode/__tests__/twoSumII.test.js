"use strict"

const { twoSumII } = require('../twoSumII');

test("Return the indices(+1) of the two numbers, that add to target", function () {
  const result = twoSumII([2, 7, 11, 15], 9);
  expect(result).toEqual([1, 2]);
})

test("Return the indices(+1) of the two numbers, that add to target", function () {
  const result = twoSumII([2, 3, 4], 6);
  expect(result).toEqual([1, 3]);
})

test("Return the indices(+1) of the two numbers, that add to target", function () {
  const result = twoSumII([-1, 0], -1);
  expect(result).toEqual([1, 2]);
})

