"use strict"

const { isAnagram } = require("../isAnagram");

test("return boolean if strings are valid anagrams", function () {
  const result = isAnagram("anagram", "nagaram");
  expect(result).toEqual(true);
})

test("return boolean if strings are valid anagrams", function () {
  const result = isAnagram("rat", "car");
  expect(result).toEqual(false);
})

test("return boolean if strings are valid anagrams", function () {
  const result = isAnagram("a", "ab");
  expect(result).toEqual(false);
})


