"use sstrict"


// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

var pivotIndex = function(nums) {
    let leftOfIdx = 0; 
    let rightOfIdx = 0; 
    let pivot = 0; 
    
    while(pivot < nums.length){ 
                            
        for(let i = 0; i < pivot; i++){ 
            leftOfIdx += nums[i]; 
        };   
        for(let i = pivot + 1; i < nums.length; i++) { 
            rightOfIdx += nums[i]
        };
        if(leftOfIdx === rightOfIdx) return pivot;
        pivot++;
        leftOfIdx = 0;
        rightOfIdx = 0;
    }
    return -1
    
};

module.exports = { pivotIndex };