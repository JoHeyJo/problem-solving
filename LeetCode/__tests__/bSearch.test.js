"use strict"

const { search } = require('../bSearch');

test("return target index else -1", function(){
  const result = search([-1, 0, 3, 5, 9, 12], 9);
  expect(result).toEqual(4);''
})

test("return target index else -1", function(){
  const result = search([-1, 0, 3, 5, 9, 12], 2);
  expect(result).toEqual(-1);''
})