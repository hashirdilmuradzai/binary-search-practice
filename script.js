// Binary Search Using Loop

const binarySearch = (nums, target) => {
  nums.sort((a, b) => a - b); // sort array
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    // let mid = Math.floor((start + end) / 2); // Normal Method
    let mid = Math.floor(start + (end - start) / 2); // Optimization Method
    if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else if (target === nums[mid]) {
      return mid;
    }
  }
  return -1;
};

console.log("Search with Loop", binarySearch([0, 2, 4, 6, 8, 10, 12], 12)); // Even Number Search

console.log("Search with Loop", binarySearch([0, 1, 3, 5, 7, 9, 11], 9)); // Odd Number Search

console.log(
  "Search with Loop",
  binarySearch(
    [
      45, 12, 78, 3, 91, 56, 24, 67, 8, 39, 84, 17, 62, 5, 73, 29, 96, 41, 14,
      58, 33, 87, 21, 64, 9, 52, 76, 18, 99, 36, 11, 69, 27, 82, 4, 47, 93, 31,
      60, 15, 71, 22, 88, 6, 54, 38, 97, 43, 19, 65, 28, 75, 2, 49, 86, 13, 57,
      34, 90, 25, 68, 10, 42, 95, 16, 61, 30, 79, 7, 53, 89, 23, 46, 1, 72, 37,
      98, 20, 55, 83, 32, 66, 26, 94, 44, 70, 35, 81, 50, 100, 40, 74, 48, 85,
      63, 59, 92, 77, 51, 80,
    ],
    66,
  ),
);

// Binary Search Using Resursion

const binarySearch2 = (array, target, start = 0, end = array.length - 1) => {
  array.sort((a, b) => a - b);
  if (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (target > array[mid]) {
      return binarySearch2(array, target, mid + 1, end);
    } else if (target < array[mid]) {
      return binarySearch2(array, target, start, mid - 1);
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(
  "Search with Recursion",
  binarySearch2([0, 2, 4, 6, 8, 10, 12], 12),
); // Even Number Search

console.log("Search with Recursion", binarySearch2([0, 1, 3, 5, 7, 9, 11], 9)); // Odd Number Search

console.log(
  "Search with Recursion",
  binarySearch2(
    [
      45, 12, 78, 3, 91, 56, 24, 67, 8, 39, 84, 17, 62, 5, 73, 29, 96, 41, 14,
      58, 33, 87, 21, 64, 9, 52, 76, 18, 99, 36, 11, 69, 27, 82, 4, 47, 93, 31,
      60, 15, 71, 22, 88, 6, 54, 38, 97, 43, 19, 65, 28, 75, 2, 49, 86, 13, 57,
      34, 90, 25, 68, 10, 42, 95, 16, 61, 30, 79, 7, 53, 89, 23, 46, 1, 72, 37,
      98, 20, 55, 83, 32, 66, 26, 94, 44, 70, 35, 81, 50, 100, 40, 74, 48, 85,
      63, 59, 92, 77, 51, 80,
    ],
    66,
  ),
);
