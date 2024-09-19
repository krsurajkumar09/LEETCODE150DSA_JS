// Linear Search approach
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (target === matrix[i][j]) return true;
    }
  }
  return false;
};

// Optimized Using Binary Search

var searchMatrix = function (matrix, target) {
  let m = matrix.length; // Number of rows
  let n = matrix[0].length; // Number of columns

  let left = 0;
  let right = m * n - 1; // Treat the matrix as a flattened 1D array

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    // Map mid index back to 2D matrix
    let midElement = matrix[Math.floor(mid / n)][mid % n];

    if (midElement === target) {
      return true; // Target found
    } else if (midElement < target) {
      left = mid + 1; // Move right
    } else {
      right = mid - 1; // Move left
    }
  }

  return false; // Target not found
};
