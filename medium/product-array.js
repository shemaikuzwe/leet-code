/**
 * leetcode 238
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = 1;
  let postfix = 1;
  let result = [];
  //prefix
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  //postfix
  for (let i = nums.length -1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }
  return result;
};

console.log(productExceptSelf([1,2,3,4]));
