"use strict" 

const { generate } = require('../generate');

test("Given an integer numRows, return the first numRows of Pascal's triangle.",
function () {
  const result = generate(5);
  expect(result).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
})
test("Given an integer numRows, return the first numRows of Pascal's triangle.",
function () {
  const result = generate(1);
  expect(result).toEqual([[1]]);
})