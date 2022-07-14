"use strict"

const { isIsomorphic } = require("../isIsomorphic");

test("returns boolean if strings are isomorphic", function () {
  let result = isIsomorphic("egg", "add")
  expect(result).toEqual(true)
})

test("returns boolean if strings are isomorphic", function () {
  let result = isIsomorphic("foo", "bar")
  expect(result).toEqual(false)
})

test("returns boolean if strings are isomorphic", function () {
  let result = isIsomorphic("paper", "title")
  expect(result).toEqual(true)
})

test("returns boolean if strings are isomorphic", function () {
  let result = isIsomorphic("bbbaaaba", "aaabbbba")
  expect(result).toEqual(false)
})

