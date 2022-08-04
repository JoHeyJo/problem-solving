"use strict"

const { plusOne } = require('../plusOne');

test("Increment the large integer by one and return the resulting array of digits.",
  function () {
    const result = plusOne([1, 2, 3]);
    expect(result).toEqual([1, 2, 4]);
  })

test("Increment the large integer by one and return the resulting array of digits.",
  function () {
    const result = plusOne([4, 3, 2, 1]);
    expect(result).toEqual([4, 3, 2, 2]);
  })

test("Increment the large integer by one and return the resulting array of digits.",
  function () {
    const result = plusOne([9]);
    expect(result).toEqual([1, 0]);
  })

test("Increment the large integer by one and return the resulting array of digits.",
  function () {
    const result = plusOne([9, 9, 9]);
    expect(result).toEqual([1, 0, 0, 0]);
  })