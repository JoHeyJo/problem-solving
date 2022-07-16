"use strict"

const { isSubsequence } = require("../isSubsequence");

test("returns boolean if s is a subsequence of t", function (){
  let result = isSubsequence('abc', 'ahbgdc');
  expect(result).toEqual(true);
})

test("returns boolean if s is a subsequence of t", function (){
  let result = isSubsequence("axc", "ahbgdc");
  expect(result).toEqual(false);
})

test("returns boolean if s is a subsequence of t", function (){
  let result = isSubsequence("acb", "ahbgdc");
  expect(result).toEqual(false);
})