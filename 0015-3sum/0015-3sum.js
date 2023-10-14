/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result=[];
    for(let i=0; i<nums.length&&nums[i]<=0;i++){
      if(i===0||nums[i-1]!==nums[i]){
          let left=i+1;
          let right=nums.length-1;
       
          while(left<right){
                 let sum=nums[i]+nums[left]+nums[right];
          if(sum===0){
              result.push([nums[i],nums[left],nums[right]]);
              while(nums[left]===nums[left+1]) left++;
              while(nums[right]===nums[right-1]) right--;
              left++;
              right--;
          } else if(sum<0){
              left++;
          }
          else right--;
          }
      }
    }

    return result;

};