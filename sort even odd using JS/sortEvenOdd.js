/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    evenArr=[];
    oddArr=[];
    finalArr=[];
    for(let i=0; i<nums.length; i++)
    {
        if(i%2===0)
        {
            evenArr.push(nums[i]);
        }else
        {
            oddArr.push(nums[i]);
        }
    }
    evenArr.sort((a,b)=>a-b);
    oddArr.sort((a,b)=>b-a);

    for(let i=0; i<nums.length/2; i++)
    {
        if(evenArr[i])
        {
            finalArr.push(evenArr[i]);
        }
        if(oddArr[i])
        {
            finalArr.push(oddArr[i]);
        }
    }
    return finalArr;    
};
