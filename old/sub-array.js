/**
 * @param {number[]} nums
 * @param {number}  k
 * @return {number} 
 */


var continuousSubarrays = (nums, k) => {
    if (nums.length <= 1) return 0;

    let left = 0; curr = 1; ans = 0;
    for (let i = 0; i < nums.length; i++) {
        curr *= nums[i];
        while (curr >= k) {
            curr /= nums[left];
            left++
        }
        ans += i - left + 1
    }
    return ans
}

console.log(continuousSubarrays([10, 5, 2, 6], 200));