/**
 * This is a fxn returns array numbers that add up to target
 * @description it uses a hash map to store key-value pairs 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [nums[i], nums[map.get(diff)]]
    }
    map.set(nums[i], i) 
  }
  return []
};

console.log(twoSum([2, 7, 11, 15], 9));