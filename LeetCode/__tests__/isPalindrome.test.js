"use strict"

const { isPalindrome } = require('../isPalindrome');

test("returns boolean if string is a palindrome", function () {
  const result = isPalindrome("A man, a plan, a canal: Panama");
  expect(result).toEqual(true)
});

test("returns boolean if string is a palindrome", function () {
  const result = isPalindrome("race a car");
  expect(result).toEqual(false)
});

test("returns boolean if string is a palindrome", function () {
  const result = isPalindrome(" ");
  expect(result).toEqual(true)
});
