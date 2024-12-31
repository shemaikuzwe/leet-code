/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {

    while (k > 0) {
        let smallest = nums[0];
        for (let i = 0; i < nums.length; i++) {

            if (nums[i] > nums[i + 1]) {
                smallest = Math.min(smallest, nums[i + 1])
            }
            else {
                smallest = Math.min(smallest, nums[i])
            }

        }
        nums[nums.indexOf(smallest)] = smallest * multiplier;
        k--;
    }
    return nums
};

console.log(getFinalState([1,2], 3, 4));