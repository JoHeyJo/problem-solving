"use strict"

const { groupAnagrams } = require('../groupAnagrams');

// test("Given an array of strings strs, group the anagrams together.", function (){
//   const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
//   expect(result).toEqual([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
// })

// test("Given an array of strings strs, group the anagrams together.", function (){
//   const result = groupAnagrams([[""]]);
//   expect(result).toEqual([[""]]);
// })

test("Given an array of strings strs, group the anagrams together.", function (){
  const result = groupAnagrams(["a"]);
  expect(result).toEqual([["a"]]);
})