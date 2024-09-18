// First solution

// Using while (left <= right) works with the added check for an already sorted subarray (if (nums[left] <= nums[right]) return nums[left];). This ensures the loop doesn't run extra iterations when left equals right and avoids incorrect results when narrowing down to a single element.

// However, the original condition while (left < right) is slightly more efficient because it avoids the need for an extra comparison and exits the loop exactly when left == right. Hence, in this case, the while (left < right) approach is generally preferred for cleaner and slightly faster code.



var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    // If the array is already sorted, return the leftmost element
    if (nums[left] <= nums[right]) {
      return nums[left];
    }

    if (nums[mid] < nums[right]) {
      right = mid; // The minimum is on the left side, including mid
    } else {
      left = mid + 1; // The minimum is on the right side
    }
  }

  return nums[left];
};

// More optimized solution

var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left];
};


// Binary Search Logic
// Key Insight: The array is rotated, but both halves are still partially sorted. We exploit this partial sorting to find the minimum value in O(log n) time using binary search.

// Core Logic:

// If the middle element nums[mid] is less than the rightmost element nums[right], it means the smallest element is either at mid or to the left. This is because the right half of the array (from mid to right) is sorted, and the minimum element must lie to the left side. Hence, we adjust right to mid.
// Otherwise, if nums[mid] >= nums[right], the minimum must lie to the right of mid since the left side is sorted, and the right side could contain the pivot point where the rotation starts. So we adjust left to mid + 1.
// Termination Condition: The loop runs until left is equal to right. At this point, left (or right, since they are equal) will point to the smallest element.

// Dry Run of Code
// Let's dry run the function with the input nums = [4,5,6,7,0,1,2] to understand its behavior step by step.

// Initial State:
// nums = [4,5,6,7,0,1,2]
// left = 0, right = 6 (indices of the array)
// First Iteration:
// mid = Math.floor(left + (right - left) / 2) = Math.floor(0 + (6 - 0) / 2) = 3
// nums[mid] = nums[3] = 7, nums[right] = nums[6] = 2
// Since nums[mid] (7) >= nums[right] (2), it means the minimum element is on the right of mid. Therefore, set left = mid + 1 = 4.
// Second Iteration:
// Now, left = 4, right = 6
// mid = Math.floor(left + (right - left) / 2) = Math.floor(4 + (6 - 4) / 2) = 5
// nums[mid] = nums[5] = 1, nums[right] = nums[6] = 2
// Since nums[mid] (1) < nums[right] (2), it means the minimum element is either at mid or to the left. So, set right = mid = 5.
// Third Iteration:
// Now, left = 4, right = 5
// mid = Math.floor(left + (right - left) / 2) = Math.floor(4 + (5 - 4) / 2) = 4
// nums[mid] = nums[4] = 0, nums[right] = nums[5] = 1
// Since nums[mid] (0) < nums[right] (1), set right = mid = 4.
// End of the Loop:
// Now, left = 4, right = 4, so the loop terminates.
// The minimum element is at index left = 4, and nums[4] = 0.
// Return Value:
// The function returns nums[left], which is 0.

// Summary of Iterations:
// Iteration	left	right	mid	nums[mid]	Comparison	New left	New right
// 1	0	6	3	7	nums[mid] (7) >= nums[right] (2)	4	6
// 2	4	6	5	1	nums[mid] (1) < nums[right] (2)	4	5
// 3	4	5	4	0	nums[mid] (0) < nums[right] (1)	4	4
// At the end of these iterations, the minimum element found is 0.

// Time Complexity:
// The time complexity is O(log n) because the binary search divides the search space in half in each iteration.

// Space Complexity:
// The space complexity is O(1) because only a constant amount of extra space is used (for the left, right, and mid variables).