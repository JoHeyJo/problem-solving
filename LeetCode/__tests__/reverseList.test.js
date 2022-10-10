"use strict"

const { reverseList } = require('../reverseList');

test("reverse list and return", function () {
  const result = reverseList([1, 2, 3, 4, 5]);
  console.log(result)
  expect(result).toEqual([1, 2, 3, 4, 5])
})