"use strict"

const { topKFrequent } = require('../topKFrequent');

test("Given an integer array nums and an integer k, return the k most frequent elements. ",
  function () {
    const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
    expect(result).toEqual([1, 2])
  })

test("Given an integer array nums and an integer k, return the k most frequent elements. ",
  function () {
    const result = topKFrequent([1], 1);
    expect(result).toEqual([1])
  })

test("Given an integer array nums and an integer k, return the k most frequent elements. ",
  function () {
    const result = topKFrequent([4, 1, -1, 2, -1, 2, 3], 2);
    expect(result).toEqual( [2, -1])
  })