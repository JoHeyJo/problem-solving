"use strict"

const { intersect } = require('../intersect')

test("Given two arrays return an array of their intersect", function () {
  const result = intersect([1, 2, 2, 1], [2, 2]);
  expect(result).toEqual([2, 2]);
})

test("Given two arrays return an array of their intersect", function () {
  const result = intersect([4, 9, 5], [9, 4, 9, 8, 4]);
  expect(result).toEqual([4, 9]);
})
