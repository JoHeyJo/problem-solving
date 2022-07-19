"use strict"


// You are given an array prices where prices[i] is the price of a given stock
// on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock 
// and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.If you cannot 
// achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else {
      profit = Math.max(prices[i] - buy, profit);
    }
  }
  return profit;
};

module.exports = { maxProfit };


// Runtime: 132 ms, faster than 40.88 % of JavaScript online submissions for
//  Best Time to Buy and Sell Stock.
// Memory Usage: 51.9 MB, less than 38.20 % of JavaScript online submissions 
// for Best Time to Buy and Sell Stock.