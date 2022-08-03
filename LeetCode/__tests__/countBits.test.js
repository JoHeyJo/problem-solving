"use strict"

const { countBits } = require('../countBIts');

test("Return array of nums of the binary representation of n", function(){
  const result = countBits(2);
  expect(result).toEqual([0,1,1]);
})

test("Return array of nums of the binary representation of n", function(){
  const result = countBits(5);
  expect(result).toEqual([0,1,1,2,1,2]);
})