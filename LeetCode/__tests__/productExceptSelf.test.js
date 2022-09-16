"use strict"

const { productExceptSelf } = require('../productExceptSelf');

test("return product of nums except self", function () {
  const result = productExceptSelf([1, 2, 3, 4])
  expect(result).toEqual([24, 12, 8, 6])
});

