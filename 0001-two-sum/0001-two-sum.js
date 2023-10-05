/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const memo={};
    for(let i=0; i<nums.length;i++){
        if(target-nums[i] in memo) return [i,memo[target-nums[i]]];
        memo[nums[i]]=i;
        }
    }
   

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));