const search = function (nums, target) {
  nums.sort((a, b) => a - b); // sort array
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
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

// console.log(search([0, 2, 4, 6, 8, 10, 12], 12)); // Even Number Search

console.log(search([0, 1, 3, 5, 7, 9, 11], 9)); // Odd Number Search
