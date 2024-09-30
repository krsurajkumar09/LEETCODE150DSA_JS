var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0; // Pointer for tracking unique elements

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++; // Move i to the next position
      nums[i] = nums[j]; // Place the unique element at the new position
    }
  }

  return i + 1; // Since i is zero-based, the length is i + 1
};
