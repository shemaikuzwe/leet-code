/**
 * leetcode 167
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      // because they said 1-indexed
      return [left + 1, right + 1];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
