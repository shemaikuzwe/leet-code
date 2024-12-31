/**
 * @param {number[]} nums
 * this programs uses sliding window to find the best subarray btn the given number k
 * @param {number}  k
 * @return {number} 
 */

var findBestSubarray = function (nums, k) {
    let curr = 0; ans = 0
    //initilaze first window
    for (let i = 0; i < k; i++) {
        curr += nums[i]
    }
    //initialize answer
    ans = curr;

    for (let i = k; i < nums.length; i++) {
        curr = nums[i] - nums[i - k];//slide window
        ans = Math.max(ans, curr);
    }
    return ans
}