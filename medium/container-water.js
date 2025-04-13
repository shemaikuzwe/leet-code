/**
 * leetcode 11.Container with most water
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let res = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const area = (right- left) * Math.min(height[left], height[right]); 

    
    res = Math.max(res, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
