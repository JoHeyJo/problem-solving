"use strict";

const { longestPalindrome } = require('../longestPalindrome');

test("return longest substring that is a palindrome",function(){
  const result = longestPalindrome('babad');
  expect(result).toEqual('bab')
})

test("return longest substring that is a palindrome",function(){
  const result = longestPalindrome('cbbd');
  expect(result).toEqual('bb')
})