//Using Linear Search (Brute Force approach)
var searchInsert = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] >=  target){
            return i;
        }
    }
    return nums.length;
};








// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104
