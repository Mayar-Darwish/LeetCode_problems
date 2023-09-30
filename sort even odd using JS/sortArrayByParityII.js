/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    arr=[];
    evenArr=[];
    oddArr=[];
    for(let i=0; i<nums.length; i++)
    {
        if(i%2===0)
        {
            if(nums[i]%2==0)
            {
                evenArr.push(nums[i]);
            }else{
                oddArr.push(nums[i]);
            }
        }else{
             if(nums[i]%2==0)
            {
                evenArr.push(nums[i]);
            }else{
                oddArr.push(nums[i]);
            }
        }
  }
  for(let i=0; i<nums.length/2; i++)
  {
      if(evenArr)
      {
          arr.push(evenArr[i]);
      }
      if(oddArr)
      {
          arr.push(oddArr[i]);
      }
  }
    return arr;
};