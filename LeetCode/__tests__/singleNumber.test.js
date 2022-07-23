"use strict"

const { singleNumber } = require('../singleNumber');

test("Given an array of numbers return the number that appears once", function(){
const result = singleNumber([2,2,1]);
expect(result).toEqual("1")
})

test("Given an array of numbers return the number that appears once", function(){
const result = singleNumber([4,1,2,1,2]);
expect(result).toEqual('4')
})

test("Given an array of numbers return the number that appears once", function(){
const result = singleNumber([1]);
expect(result).toEqual('1')
})