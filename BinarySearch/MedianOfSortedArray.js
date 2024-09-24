// Optimized Solution

var findMedianSortedArrays = function (nums1, nums2) {
  // Step 1: Ensure nums1 is the smaller array to reduce the binary search space
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]; // Swap arrays
  }

  let m = nums1.length; // Length of the smaller array
  let n = nums2.length; // Length of the larger array
  let low = 0,
    high = m; // Binary search range in the smaller array

  // Step 2: Binary search for the correct partition
  while (low <= high) {
    let partition1 = Math.floor((low + high) / 2); // Midpoint in nums1
    let partition2 = Math.floor((m + n + 1) / 2) - partition1; // Corresponding partition in nums2

    // Edge cases: handle out-of-bounds partitions
    let left1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    let right1 = partition1 === m ? Infinity : nums1[partition1];
    let left2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    let right2 = partition2 === n ? Infinity : nums2[partition2];

    // Step 3: Check if we have a valid partition
    if (left1 <= right2 && left2 <= right1) {
      // Correct partition found
      if ((m + n) % 2 === 1) {
        // Odd number of elements
        return Math.max(left1, left2);
      } else {
        // Even number of elements
        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
      }
    } else if (left1 > right2) {
      // Move the partition to the left in nums1
      high = partition1 - 1;
    } else {
      // Move the partition to the right in nums1
      low = partition1 + 1;
    }
  }

  // If input is not valid (should never happen with valid input)
  throw new Error("Input arrays are not sorted properly");
};
