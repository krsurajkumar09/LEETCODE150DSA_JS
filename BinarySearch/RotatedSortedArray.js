// Using Linear Search (Brute Force)
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i; // Return the index if the target is found
    }
  }
  return -1; // Return -1 if the target is not found
};

// Using Binary Search (optimized approach)
var search = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let mid = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);

    if (target === nums[mid]) return mid;

    // To apply the Binary Search we need to check which side is sorted, since Binary search  can't be applied to non-sorted array.
    //  Checking if left side is sorted, if the left is not sorted then it woulod be right one.
    //   One side will always be sorted .

    if (nums[mid] >= nums[leftIndex]) {
      // if this condition is satisfied then left side is sorted one otherwise right side is sorted one.
      if (nums[leftIndex] <= target && target < nums[mid]) {
        // if this condition is satisfied then target is in left side
        rightIndex = mid - 1;
      } else {
        leftIndex = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[rightIndex]) {
        // if this condition is satisfied then target is in right  side
        leftIndex = mid + 1;
      } else {
        rightIndex = mid - 1;
      }
    }
  }
  return -1;
};

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104
