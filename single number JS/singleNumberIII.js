/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let array = [];
    nums = nums.sort();
    for (let i = 0; i < nums.length; i++)
     {
        if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) 
        {
            array.push( nums[i]);
        }
    }
    return array;
};