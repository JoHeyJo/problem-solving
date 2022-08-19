"use strict"

const { rob } = require('../rob');

test("return the maximum amount of money you can rob tonight without alerting the police.",
function(){
  const result = rob([1,2,3,1]);
  expect(result).toEqual(4);
})

test("return the maximum amount of money you can rob tonight without alerting the police.",
function(){
  const result = rob([2, 7, 9, 3, 1]);
  expect(result).toEqual(12);
})

test("return the maximum amount of money you can rob tonight without alerting the police.",
function(){
  const result = rob([2,1,1,2]);
  expect(result).toEqual(4);
})