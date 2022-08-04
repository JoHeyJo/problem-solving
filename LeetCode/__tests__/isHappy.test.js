"use strict"

const { isHappy } = require('../isHappy');

test("Return true if a number is happy, else false", function(){
  const result = isHappy(19);
  expect(result).toEqual(true);
})
test("Return true if a number is happy, else false", function(){
  const result = isHappy(2);
  expect(result).toEqual(false);
})