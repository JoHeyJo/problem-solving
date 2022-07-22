"use strict"

const { matrixReshape } = require('../matrixReshape');

test("output new matrix if possible else original matrix", function (){
  const result = matrixReshape([[1,2], [3,4]], 1, 4);
  expect(result).toEqual([[1,2,3,4]]);
})

test("output new matrix if possible else original matrix", function (){
  const result = matrixReshape([[1,2], [3,4]], 2, 4);
  expect(result).toEqual([[1,2],[3,4]]);
})