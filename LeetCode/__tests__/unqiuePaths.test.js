"use strict";

const { uniquePaths } = require('../unqiuePaths');

test("return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
function(){
  const result = uniquePaths(3,7);
  expect(result).toEqual(28);
})

test("return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
function(){
  const result = uniquePaths(3,2);
  expect(result).toEqual(3);
})