"use strict";

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const charSumMap = strs.reduce((map, str) => {
    charTotal = charSum(str);
    map[charTotal] ? map[charTotal].push(str) : map[charTotal] = [str]
    return map
  }, {})
  return Object.values(charSumMap);
};

function charSum(chars) {
  const map = chars.split('').sort().reduce((map, c) => {
    map[c] = (map[c] || 0) + 1;
    return map;
  }, {})

  let sCount = '';

  for (let k in map) {
    sCount += k + map[k]
  }
  console.log(sCount)
  return sCount;
}