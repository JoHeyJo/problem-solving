"use strict"

const { lengthOfLongestSubstring } = require('../lengthOfLongestSubstring');

test('Given a string s, find the length of the longest substring without repeating characters.',
function() {
  const result = lengthOfLongestSubstring("abcabcbb");
  expect(result).toEqual(3);
})

test('Given a string s, find the length of the longest substring without repeating characters.',
function() {
  const result = lengthOfLongestSubstring("bbbbb");
  expect(result).toEqual(1);
})

test('Given a string s, find the length of the longest substring without repeating characters.',
function() {
  const result = lengthOfLongestSubstring("pwwkew");
  expect(result).toEqual(3);
})

test('Given a string s, find the length of the longest substring without repeating characters.',
function() {
  const result = lengthOfLongestSubstring("dvdf");
  expect(result).toEqual(3);
})