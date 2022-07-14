"use strict"

const { pivotIndex } = require("../findPivotIndex");

test("should return the correct pivot index", function (){
  let pivot = pivotIndex([1,7,3,6,5,6]);
  expect(pivot).toEqual(3);
});

test("should return the correct pivot index", function (){
  let pivot = pivotIndex([1,2,3]);
  expect(pivot).toEqual(-1);
});

test("should return the correct pivot index", function (){
  let pivot = pivotIndex([2,1,-1]);
  expect(pivot).toEqual(0);
});