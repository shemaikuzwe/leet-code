/**
 * @param {number[]} nums
 * @param {number} k
 */
const lengthOfLongest = (nums, k) => {
    let left = 0; ans = 0; curr = 0;
    for (let i = 0; i < nums.length; i++) {
        curr += nums[i];
        while (curr > k) {
            curr -= nums[left];
            left++
        }
        ans = Math.max(ans, i - left + 1);
    }
    return ans
};

console.log(lengthOfLongest([3, 1, 2, 7, 4, 2, 1, 1, 5], 8));
