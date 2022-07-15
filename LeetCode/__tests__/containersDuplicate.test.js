"use strict"

const { containsDuplicate } = require("../containsDuplicate")

test("return boolean if array contains any duplicate nums", function() {
  const result = containsDuplicate([1, 2, 3, 1]);
  expect(result).toEqual(true);
})

test("return boolean if array contains any duplicate nums", function() {
  const result = containsDuplicate([1, 2, 3, 4]);
  expect(result).toEqual(false);
})

test("return boolean if array contains any duplicate nums", function() {
  const result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
  expect(result).toEqual(true);
})

