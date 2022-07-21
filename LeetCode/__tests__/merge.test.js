"use strict";

const { merge } = require('../merge');

test("return merged array", function (){
  let result = merge([1, 2, 3, 0, 0, 0], 3,  [2, 5, 6], 3);
  expect(result).toEqual([1, 2, 2, 3, 5, 6]);
})
test("return merged array", function (){
  let result = merge([0], 0,  [1], 1);
  expect(result).toEqual([1]);
})
test("return merged array", function (){
  let result = merge([1], 1, [], 0);
  expect(result).toEqual([1]);
})