"use strict";

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
  }

  const stack = [];

  for (let t of tokens) {
    console.log(stack)
    if (isNaN(t)) {
      let t2 = stack.pop();
      let t1 = stack.pop();
      let opp = operations[t];
      console.log(opp)
      let res = opp(+t1, +t2);
      stack.push(res);
    } else {
      stack.push(t);
    }
  }
  return stack.pop();
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => Math.trunc(a / b);