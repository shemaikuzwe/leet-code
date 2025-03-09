/**
 * leet code 128
 * longest consecutive  sequence
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;
  const numSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    numSet.add(nums[i]);
  }
  let longestSequence = 1;
  for (const num of numSet) {
    if (numSet.has(num - 1)) {
      let curr = num;
      let currentSequence = 1;
      while (numSet.has(curr - 1)) {
        currentSequence++;
        curr--;
      }
      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }
  return longestSequence;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));