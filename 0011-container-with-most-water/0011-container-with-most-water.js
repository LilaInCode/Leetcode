/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea=0;
    let left=0;
    let right=height.length-1;

    while(left<right){
    maxArea=Math.max(Math.min(height[left],height[right])*(right-left), maxArea)
    if(height[right]>height[left]) left++;
    else right--;
    }


return maxArea;
    
};