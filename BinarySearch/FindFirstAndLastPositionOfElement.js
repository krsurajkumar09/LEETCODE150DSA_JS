// Using linear search (Brute Force approach)
var searchRange = function (nums, target) {
  let firstOccurence = -1;
  let lastOccurence = -1;

  // Checking the first occurence
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      firstOccurence = i;
      break; // once first occurence found , just break the loop and ther is  no need to check the further
    }
  }

  if (firstOccurence === -1) return [-1, -1]; // it means element doesn't exist in array , so need to find lastOccurence

  //for lastOccurence start checking from firstOccurence , no need to check from first element as array is sorted
  for (let i = firstOccurence; i < nums.length; i++) {
    if (target === nums[i]) {
      lastOccurence = i;
    } else {
      break;
    }
  }

  return [firstOccurence, lastOccurence];
};

// Optimized Way Binary Search

var searchRange = function (nums, target) {
  // Checking the first occurence
  function findFirstOccurence(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let firstOccurence = -1;

    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);

      if (target === nums[mid]) {
        firstOccurence = mid;
        right = mid - 1;
      } else if (target >= nums[mid]) {
        left = mid + 1;
      } else right = mid - 1;
    }
    return firstOccurence;
  }

  // Checking the last occurence
  function findLastOccurence(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let lastOccurence = -1;
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);

      if (target === nums[mid]) {
        lastOccurence = mid;
        left = mid + 1;
      } else if (target >= nums[mid]) {
        left = mid + 1;
      } else right = mid - 1;
    }
    return lastOccurence;
  }

  let firstOccurence = findFirstOccurence(nums, target);
  let lastOccurence = findLastOccurence(nums, target);

  return [firstOccurence, lastOccurence];
};

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109
