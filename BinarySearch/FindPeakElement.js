// Linear Search condition
var findPeakElement = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    if (
      (i === 0 || nums[i] > nums[i - 1]) &&
      (i === nums.length - 1 || nums[i] > nums[i + 1])
    ) {
      return i;
    }
  }
  return -1; // In case no peak is found (though there will always be one peak as per problem constraints)
};

// Optimized using Binary serach
var findPeakElement = function (nums) {
  var start = 0,
    end = nums.length - 1;
  while (start < end) {
    var mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[mid + 1]) {
      // If mid element is greater than the next element, then the peak is in the left side
      end = mid;
    } else {
      // If mid element is smaller than the next element, then the peak is in the right side
      start = mid + 1;
    }
  }
  return start;
};
