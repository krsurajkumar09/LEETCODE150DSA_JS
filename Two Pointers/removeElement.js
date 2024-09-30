var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // This moves the non-val element to the front
      k++;
    }
  }

  return k;
};
