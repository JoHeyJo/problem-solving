"use strict"

const { maxProfit } = require('../maxProfit');

test("Return the maximum profit you can achieve or 0 for no profit", function() {
  const result = maxProfit([7, 1, 5, 3, 6, 4]);
  expect(result).toEqual(5);
})

test("Return the maximum profit you can achieve or 0 for no profit", function() {
  const result = maxProfit([7, 6, 4, 3, 1]);
  expect(result).toEqual(0);
})

