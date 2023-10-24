/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) return mid;

        // Determine if the left half is sorted
        if (nums[low] <= nums[mid]) {
            // If target lies in the left half's range, adjust 'high' to 'mid - 1'
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            // If target lies in the right half's range, adjust 'low' to 'mid + 1'
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;


};