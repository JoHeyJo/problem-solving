"use strict"

const { isValid } = require('../isValid');

test("return boolean is string is valid", function(){
  const result = isValid("()");
  expect(result).toEqual(true);
})

